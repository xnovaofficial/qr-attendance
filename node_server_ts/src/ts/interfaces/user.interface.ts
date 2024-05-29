import { IObjectId } from "./objectId.interface";

export interface IUserSchema {
Username: string;
phone_no?: string;
email?:string;
UserId:number;
IsPresent:string
}

export interface IUser extends IUserSchema, IObjectId {}
