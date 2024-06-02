import { IObjectId } from "./objectId.interface";

export interface IUserSchema {
Username: string;
phone_no?: string;
email?:string;
UserId:string;
role:number
}

export interface IUser extends IUserSchema, IObjectId {}
