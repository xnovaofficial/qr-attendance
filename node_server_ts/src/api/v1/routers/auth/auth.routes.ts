import express from "express";
import { RegisterUser} from "../../controllers/auth/auth.controllers"; 

const router = express.Router();

router.post("/register", RegisterUser);


module.exports = router;
