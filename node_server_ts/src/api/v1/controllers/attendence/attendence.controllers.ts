import { Request, Response } from "express";
import { getDistance } from "geolib";
import { MESSAGE } from "../../../../constants/message";
import AttendanceModel from "../../../../models/atendence.model";

// Target location coordinates
const TARGET_LAT = 22.5888511;
const TARGET_LONG = 88.4733589;

export const createAttendance = async (req: Request, res: Response) => {
    try {
        const { username, userId, lat, long,role } = req.body;

        const distance = getDistance(
            { latitude: lat, longitude: long },
            { latitude: TARGET_LAT, longitude: TARGET_LONG }
        );

        const MAX_DISTANCE = 5000;

        if (distance > MAX_DISTANCE) {
            return res.status(400).json({ message: `User is not within the allowed range of 5 km ${distance}`});
        }

        const existingAttendance = await AttendanceModel.findOne({ userId });

        if (existingAttendance) {
            if (existingAttendance.attendanceStatus === true) {
                existingAttendance.attendanceStatus = false;
                const updatedAttendance = await existingAttendance.save();
                return res.status(200).json({ message: MESSAGE.put.succ, result: updatedAttendance ,distance:distance});
            } else {
                return res.status(400).json({ message: MESSAGE.put.fail, error: "Attendance status is already false" });
            }
        } else {
            const newAttendance = new AttendanceModel({
                username,
                userId,
                attendanceStatus: true,
                role
            });

            const attendance = await newAttendance.save();
            return res.status(201).json({ message: MESSAGE.post.succ, result: attendance ,distance:distance });
        }
    } catch (error) {
        console.error("Error creating or updating attendance:", error);
        res.status(500).json({ message: MESSAGE.custom("INTERNAL_SERVER_ERROR") });
    }
};
