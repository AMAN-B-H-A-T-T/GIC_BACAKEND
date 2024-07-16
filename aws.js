// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "ap-south-1" });

// Create S3 service object
s3 = new AWS.S3({ apiVersion: "2006-03-01" });

const get_preSinged_url = async(obj_key)=>{
  const url = s3.getSignedUrl('getObject', {
    Bucket: "gic-gtu",
    Key: obj_key
  })

  return url
}

module.exports = {
  get_preSinged_url
}