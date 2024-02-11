const path = require("path");
const fs = require("fs");

const deploymentType = process.env.ENV_TYPE || "local";
const filePath1 = path.resolve(__dirname, "./env/" + deploymentType + ".env");

fs.readFile(filePath1, { encoding: "utf8" }, function (err, data) {
  if (!err) {
    const fileEnvPath = path.resolve(__dirname, "./.env");

    fs.writeFile(
      fileEnvPath,
      data,
      { encoding: "utf8", mode: 0o777, flag: "w+" },
      function (err) {
        if (err) {
          return console.log(err);
        }
      }
    );
  } else {
    console.log(err);
  }
});
