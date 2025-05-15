import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 3000;
const ENV = process.env.ENV;
// console.log(process.env.DATABASE_URL);
// const db = new pg.Client(process.env.DATABASE_URL);
// db.connect();

const app = express();
const whitelist = [
  "https://internship-project-dashboard.netlify.app",
  "http://localhost:5173",
];

const corsOptions = {
  // @ts-ignore
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
// app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "hello world",
  });
});

app.listen(PORT, () => {
  if (ENV === "DEV") {
    console.log(`App started on http://localhost:${PORT}`);
  }
});
