import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import toggleRoute from "./routes/toggleRoute.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
app.get("/", (req, res) => {
  return res.status(234).send("Welcome to Setting App API");
});

app.use("/toggle", toggleRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    app.listen(PORT, () => {
    });
  })
  .catch((error) => {
    console.log(error);
  });
