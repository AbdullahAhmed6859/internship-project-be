import express from "express";

const app = express();

app.get("/", (req, res)=> {
    res.status(200).json({
        success: true,
        message: "hello",
    });
});

app.listen(3000);
console.log('App started on http://localhost:3000');