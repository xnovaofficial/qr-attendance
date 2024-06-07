import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import UserModel from "../../../../models/user.model";

//registeruser
export const RegisterUser = async(req: Request, res: Response) => {
    try {
        const {Username,phone_no,email,UserId,role,password}=req.body
        const existingUser = await UserModel.findOne({ $or: [{ phone_no }, {UserId },{email}] });
        console.log(existingUser)
        if (existingUser) {
            return res.status(400).json({ message: MESSAGE.post.fail});
        }
        
        console.log(Username,phone_no,email,UserId,role)
        const NewUser= new UserModel({
            Username,
            phone_no,
            email,
            UserId,
            role,
            password
        })
    
        const user = await NewUser.save();
       return res.status(200).json({ message: MESSAGE.post.succ,result:user });
    } 
    catch (error) {
        console.error("Error registering user:", error);
        res.status(400).json({message: MESSAGE.post.fail})
    }
    
  
};



// SignInUser
export const SignInUser = async (req: Request, res: Response) => {
    try {
        const { UserId, password } = req.body;
        const user = await UserModel.findOne({ UserId });

        if (!user) {
            return res.status(400).json({ message: MESSAGE.post.fail });
        }

        if (password !== user.password) {
            return res.status(400).json({ message: MESSAGE.post.fail });
        }

        return res.status(200).json({ message: MESSAGE.post.succ, result: user });
    } catch (error) {
        console.error("Error signing in user:", error);
        res.status(400).json({ message: MESSAGE.post.fail });
    }
};
