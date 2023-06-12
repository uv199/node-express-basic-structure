const fs = require("fs");

const fileUpload = async (file) => {
  if (file) {
    const base64img = file.split(";base64,");
    const formamte = base64img[0].split("/")[1];
    const imageName = `${Date.now()}.${formamte}`;
    if (!fs.existsSync(process.env.ASSETS)) fs.mkdirSync(process.env.ASSETS);
    fs.writeFileSync(`${process.env.ASSETS}/${imageName}`, base64img[1], {
      encoding: 'base64',
    });
    return imageName;
  } else return "";
};

module.exports = { fileUpload };
