import { model } from "mongoose";
import { IAttendanceSchema } from "../ts/interfaces/attendence.interface";
import AttendanceSchema from "./shcemaDefinations/atendence.schema";

const AttendanceModel = model<IAttendanceSchema>("attendanceList", AttendanceSchema);

export default AttendanceModel;
