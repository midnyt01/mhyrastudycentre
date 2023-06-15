const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const app = express();

// Configure Cloudinary with your account credentials
cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret'
});

// Configure the multer middleware with the Cloudinary storage engine
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpg', 'png', 'gif']
  }
});
const upload = multer({ storage: storage });

// Define an API endpoint for uploading files
app.post('/api/upload', upload.single('file'), (req, res) => {
  const url = req.file.path; // The URL of the uploaded image
  res.json({ url: url });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});