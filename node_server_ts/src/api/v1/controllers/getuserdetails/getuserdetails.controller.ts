import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import AttendanceModel from "../../../../models/atendence.model";

export const GetUserDetails = async (req: Request, res: Response) => {
    const filter = req.query;
    try {
        const users: any = await AttendanceModel.find(filter);
        
        const sortedUsers = users.sort((a: any, b: any) => b.role - a.role);
        
        return res.status(200).json({ message: MESSAGE.get.succ, result: sortedUsers });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: MESSAGE.get.fail });
    }
}
