const aws = require("aws-sdk");
const fs = require("fs");
const env = process.env;
const config = require("../config");

class S3Service {
  constructor() {
    aws.config.update({
      accessKeyId: config.s3_access,
      secretAccessKey: config.s3_secret,
      region: "us-east-2",
    });

    this.s3 = new aws.S3();
  }

  async uploadFile(name, s3Folder) {
    this.openFileStream(name);

    const key = s3Folder ? `${s3Folder}/${name}` : name;

    return this.s3.upload({
      Bucket: "zarobitchanu",
      Body: this.fileStream,
      Key: key,
    }).promise();
  }

  async deleteFile(key) {
    return this.s3.deleteObject({
      Bucket: env.AWS_BUCKET,
      Key: key,
    }).promise();
  }

  async deleteFiles(keys) {
    return this.s3.deleteObjects({
      Bucket: env.AWS_BUCKET,
      Delete: {
        Objects: [...keys],
      },
    }).promise();
  }

  // Create stream to read file from uploads/ folder
  openFileStream(name) {
    this.fileStream = fs.createReadStream(`uploads/${ name}`);

    // Check stream for errors
    this.fileStream.once("error", err => { throw err });
  }
}

module.exports = S3Service;
