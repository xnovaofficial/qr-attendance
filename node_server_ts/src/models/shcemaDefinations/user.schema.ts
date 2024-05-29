import { Schema, VirtualTypeOptions } from "mongoose";
import { IUserSchema } from "../../ts/interfaces/user.interface";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";


const UserSchema: Schema<IUserSchema> = new Schema<IUserSchema>(
	{
		Username: SCHEMA_DEFINITION_PROPERTY.requiredString,
		phone_no: SCHEMA_DEFINITION_PROPERTY.requiredNumber,
		email:SCHEMA_DEFINITION_PROPERTY.requiredString,
		UserId:SCHEMA_DEFINITION_PROPERTY.requiredString,
		
	},
	GENERAL_SCHEMA_OPTIONS
);

export default UserSchema;
