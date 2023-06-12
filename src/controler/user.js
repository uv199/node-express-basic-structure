const { fileUpload } = require("../functions/fileUpload");
const { User } = require("../module");

const createUser = (req, res) => {
  User.create(req?.body)
    .then((userRes) => {
      res.status(200).send(userRes);
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message });
    });
};
const updateUser = (req, res) => {
  User.findByIdAndUpdate(req?.params?.id, req?.body, { new: true })
    .then((userRes) => {
      console.log("🚀 ~ file: user.js:16 ~ .then ~ userRes:", userRes);
      res.status(200).send(userRes);
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message });
    });
};
const deleteUser = (req, res) => {
  User.findByIdAndDelete(req?.params?.id)
    .then((userRes) => {
      res.status(200).send("user Deleted");
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message });
    });
};
const getOneUser = (req, res) => {
  User.findById(req?.params?.id)
    .then((userRes) => {
      if (!userRes) res.status(200).send("user not found");
      res.status(200).send(userRes);
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message });
    });
};
const getAllUser = (req, res) => {
  User.find({})
    .then((userRes) => {
      if (userRes.length > 0) res.status(200).send(userRes);
      else res.status(200).send("user not found");
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message });
    });
};
const uploadfile = async (req, res) => {
  try {
    const file = await fileUpload(req?.body?.img);
    console.log("🚀 ~ file: user.js:53 ~ uploadfile ~ file:", file);
    res.status(200).send({ status: 200, filePath: file });
  } catch (error) {
    res.status(400).send({ status: 400, message: err.message });
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
  getAllUser,
  uploadfile,
};
