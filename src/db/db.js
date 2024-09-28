import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";
const app = express();
const port = process.env.PORT;

const connectDB = async () => {
  try {
    const mongoInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("MongoDB connected", mongoInstance.connection.name);
  } catch (error) {
    console.log("Mongodb connection error", error);
    process.exit(1);
  }
};
export default connectDB;
