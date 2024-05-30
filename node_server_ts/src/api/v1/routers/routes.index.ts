import express from "express";

const app = express();

app.use("/auth", require("./auth/auth.routes"));
app.use("/attendence", require("./attendence/attendence.routes"));
module.exports = app;
