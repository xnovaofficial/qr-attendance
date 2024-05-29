import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import UserModel from "../../../../models/user.model";

//registeruser
export const RegisterUser = async(req: Request, res: Response) => {
    try {
        const {Username,phone_no,email,UserId}=req.body

        const existingUser = await UserModel.findOne({ $or: [{ phone_no }, {UserId },{email}] });
        if (existingUser) {
            return res.status(400).json({ message: MESSAGE.post.fail});
        }
    

        const NewUser= new UserModel({
            Username,
            phone_no,
            email,
            UserId,
        })
    
        const user = await NewUser.save();
        res.status(201).json({ message: MESSAGE.post.succ,result:user });
    } 
    catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({message: MESSAGE.custom("INTERNAL_SERVER_ERROR")})
    }
    
  
};

//updateuser api



module.exports={RegisterUser}
