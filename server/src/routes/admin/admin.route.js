const express = require("express");
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const fetchAdmin = require("../../middleware/fetchadmin");

const {
  httpCreateAdminAccount,
  httpLoginAdmin,
  httpGetAllCustomers,
  httpUploadBlogCoverImage,
  httpPostBlog,
  httpGetAllBlogs,
  httpPostCaseStudy,
  httpGetAllCaseStudies,
  httpGetAllLeads,
  httpCreateNewCourse,
  httpGetAllCourses,
  httpGetCourseById,
  httpUpdateCourseById,
  httpDeleteCourseById,
  httpUploadCourseCoverImage,
  httpGetAllSamplePaperQueries,
  httpSetCourseActive,
  httpSetCourseInactive,
} = require("./admin.controller");

const adminRouter = express.Router();


cloudinary.config({
  cloud_name: "dwl9menj8",
  api_key: "135468123577919",
  api_secret: "owPFWlgRspVZtT2umMHMkaIehCw"
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

adminRouter.post("/createadmin", httpCreateAdminAccount);
adminRouter.post("/login", httpLoginAdmin);



adminRouter.post("/create-new-course", httpCreateNewCourse);
adminRouter.get("/courses", httpGetAllCourses);
adminRouter.get("/courses/:id", httpGetCourseById);
adminRouter.put("/courses/:id", httpUpdateCourseById);
adminRouter.delete("/courses/:id", httpDeleteCourseById);
adminRouter.put("/courseinactive", httpSetCourseInactive);
adminRouter.put("/courseactive", httpSetCourseActive);
adminRouter.post("/coursecoverimage", upload.single('file'), httpUploadCourseCoverImage);






//blog post

adminRouter.post("/blogs", fetchAdmin, httpPostBlog);
// adminRouter.get("/blogs", fetchAdmin, httpGetAllBlogs);

//case study
adminRouter.post("/casestudies", fetchAdmin, httpPostCaseStudy);
// adminRouter.get("/casestudies", fetchAdmin, httpGetAllCaseStudies);


//customers 

adminRouter.get("/customers", fetchAdmin, httpGetAllCustomers)
adminRouter.get("/leads", fetchAdmin, httpGetAllLeads)
adminRouter.get("/samplepaper", fetchAdmin, httpGetAllSamplePaperQueries)

module.exports = adminRouter;
