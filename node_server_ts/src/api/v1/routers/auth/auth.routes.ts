import express from "express";
import { RegisterUser, SignInUser} from "../../controllers/auth/auth.controllers"; 

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/signin", SignInUser);



module.exports = router;
