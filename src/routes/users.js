const express = require("express");
const userRouter = express.Router();

const {
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
  getAllUser,
  uploadfile
} = require("../controler/user");

userRouter.post("/fileupload", uploadfile);

userRouter.get("/getalluser", getAllUser);

userRouter.get("/getuser:id", getOneUser);

userRouter.post("/createuser", createUser);

userRouter.patch("/updateuser:id", updateUser);

userRouter.delete("/deleteuser:id",deleteUser);

module.exports = { userRouter };
