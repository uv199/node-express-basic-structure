require("dotenv").config();
const express = require("express");
const { userRouter } = require("./routes");
const { db } = require("./db");
const { fileUpload } = require("./functions/fileUpload");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);
app.use("/",express.static(process.env.ASSETS) );
db()
  app.listen(4000, () => {
    console.log(`server is running on ${4000}`);
  });

