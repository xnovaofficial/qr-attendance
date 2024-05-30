import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import AttendanceModel from "../../../../models/atendence.model";


export const GetUserDetails=async(req:Request,res:Response)=>{
    const filter= req.query;
    try {
        const Users:any = await AttendanceModel.find(filter);
        
       
            return res.status(200).json({message:MESSAGE.get.succ,result:Users})
        
    } catch (error) {
        console.log(error);
        
        res.status(400).json({ message: MESSAGE.get.fail});
    }

}