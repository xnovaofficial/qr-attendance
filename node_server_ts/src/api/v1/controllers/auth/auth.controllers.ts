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
       return res.status(200).json({ message: MESSAGE.post.succ,result:user });
    } 
    catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({message: MESSAGE.post.fail})
    }
    
  
};

//loginuser api

export const SignInUser = async (req: Request, res: Response) => {
	try {
        const { email, phone_no } = req.body;
// console.log({identifier, password})
        const user = await UserModel.findOne({
            $or: [{email }, {phone_no }]
        });

        if (!user) {
            console.log("user not found")
            return res.status(404).json({
                message: MESSAGE.post.fail
            });
        }
        res.status(200).json({
            message: MESSAGE.post.succ,
            result:user
        });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(400).json({
            message: MESSAGE.post.fail
        });
    }
};





module.exports={RegisterUser,SignInUser}
