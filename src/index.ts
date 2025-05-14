import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
console.log(process.env.DATABASE_URL);
// const db = new pg.Client(process.env.DATABASE_URL);
// db.connect();

const app = express();

const corsOptions = {
  origin: "internship-project-dashboard.netlify.app",
};

app.use(process.env.ENV !== "PROD" ? cors() : cors(corsOptions));
// app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "hello world",
  });
});

app.listen(3000);
console.log("App started on http://localhost:3000");
