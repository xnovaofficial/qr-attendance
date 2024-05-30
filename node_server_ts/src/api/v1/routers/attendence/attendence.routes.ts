import express from "express";
import { createAttendance } from "../../controllers/attendence/attendence.controllers";
import { GetUserDetails } from "../../controllers/getuserdetails/getuserdetails.controller";

const router = express.Router();

router.post("/present", createAttendance);
router.get("/get-present", GetUserDetails);


module.exports = router;
