import multer from "multer";

import multerS3 from "multer-s3";

import aws from "aws-sdk";

import dotenv from "dotenv";

dotenv.config();
aws.config.update({
  region: process.env.AWS_REGION,
  acess_key: process.env.secret_access_key,
  secret_acess_key: process.env.acess_key_id,
});
const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.bucket_name,
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

export default upload;
