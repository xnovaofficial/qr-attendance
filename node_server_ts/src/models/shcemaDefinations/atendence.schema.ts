import { Schema } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IAttendanceSchema } from "../../ts/interfaces/attendence.interface";

const AttendanceSchema: Schema<IAttendanceSchema> = new Schema<IAttendanceSchema>(
    {
        username: SCHEMA_DEFINITION_PROPERTY.requiredString,
        userId: SCHEMA_DEFINITION_PROPERTY.requiredString,
        attendanceStatus: SCHEMA_DEFINITION_PROPERTY.requiredBoolean
    },
    GENERAL_SCHEMA_OPTIONS
);

export default AttendanceSchema;
