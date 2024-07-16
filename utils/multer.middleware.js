const multer = require('multer')
const multer_s3 = require('multer-s3')
const path = require('path')
const AWS = require('aws-sdk')

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });

  const s3 = new AWS.S3();

  const upload = multer({
    storage: multer_s3({
      s3: s3,
      bucket: process.env.AWS_BUCKET_NAME,
      acl: 'public-read',
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, `gic/images/${Date.now().toString()}${path.extname(file.originalname)}`); // Appending path and extension
      }
    })
  });

  module.exports = upload