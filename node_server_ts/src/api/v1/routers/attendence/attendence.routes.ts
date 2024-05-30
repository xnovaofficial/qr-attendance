import express from "express";
import { createAttendance } from "../../controllers/attendence/attendence.controllers";

const router = express.Router();

router.post("/present", createAttendance);


module.exports = router;
