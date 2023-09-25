console.log("Javascript loaded");

document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.getElementById("downloadButton");
  downloadButton.addEventListener("click", async function () {
    const AWS = require("aws-sdk");
    const fs = require("fs");

    // Configure AWS SDK with your credentials
    AWS.config.update({
      accessKeyId: "YOUR_ACCESS_KEY_ID",
      secretAccessKey: "YOUR_SECRET_ACCESS_KEY",
      region: "us-east-1", // Update with your S3 bucket's region
    });

    // Create an S3 instance
    const s3 = new AWS.S3();

    // Specify the S3 bucket and key of the image you want to download
    const bucketName = "your-s3-bucket-name";
    const objectKey = "uploads/your-image-file.jpg"; // Update with your image's key

    // Set the local file path where you want to save the downloaded image
    const localFilePath = "./downloaded-image.jpg"; // Update with your desired local path

    // Download the image from S3 and save it locally
    s3.getObject({ Bucket: bucketName, Key: objectKey }, (err, data) => {
      if (err) {
        console.error("Error downloading image:", err);
      } else {
        fs.writeFileSync(localFilePath, data.Body);
        console.log(`Image downloaded and saved to ${localFilePath}`);
      }
    });
  });
});
