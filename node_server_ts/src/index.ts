import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser, { json } from "body-parser";
import connectDb from "./config/db.config";


const mongo_url = (process.env.NODE_ENV !== "PROD") ? process.env.LOCAL_MONGO_URL : process.env.PROD_MONGO_URL


// dotenv.config();
const app = express();

const port = process.env.PORT || 8989;

// const mongo_url = (process.env.NODE_ENV !== "PROD") ? process.env.LOCAL_MONGO_URL : process.env.PROD_MONGO_URL

const options: cors.CorsOptions = {
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false
};

app.use(cors(options));
app.use(json());

app.use(express.json());

app.get("/", (req, res) => {

  res.send(
    `<h1>sentss succesfully</h1>`
  )
});

app.use("/api/v1", require("./api/v1/routers/routes.index"));

app.use(bodyParser.json());
connectDb();


app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});

