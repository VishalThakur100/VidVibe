// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db.js";
const app = express();
const port = process.env.PORT;

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App is listening on port :${port}`);
    });
  })
  .catch((err) => {
    console.log("Mongo connection failed", err);
  });

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error ", error);
    throw err;
  }
})();
*/
