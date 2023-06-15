const { SortSellerOrders } = require("../../helper-function/helper-functions");
const {
  createAdminAccount,
  loginInAdmin,
  getAllCustomers,
  postBlog,
  getAllBlogs,
  postCaseStudy,
  getAllCaseStudies,
  getAllLeadsInfo,
  createNewCourse,
  getAllCourse,
  getCourseById,
  updateCourseById,
  deleteCourseById,
} = require("../../models/admin.model");

async function httpCreateAdminAccount(req, res) {
  await createAdminAccount(req.body, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpLoginAdmin(req, res) {
  await loginInAdmin(req.body, function (err, data) {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpCreateNewCourse(req, res) {
  await createNewCourse(req.body, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpGetAllCourses(req, res) {
  await getAllCourse(function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpGetCourseById(req, res) {
  let CourseId = req.params.id;
  await getCourseById(CourseId, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpUpdateCourseById(req, res) {
  let CourseId = req.params.id;
  await updateCourseById(CourseId, req.body, function(err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data)
    }
  })
}

async function httpDeleteCourseById(req, res) {
  let CourseId = req.params.id;
  await deleteCourseById(CourseId, function (err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}



























//blog
async function httpPostBlog(req, res) {
  await postBlog(req.body, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

// async function httpGetAllBlogs (req, res) {
//   await getAllBlogs(function(err, data) {
//     if (err) {
//       res.status(400).json(err)
//     } else {
//       res.status(200).json(data)
//     }
//   })
// }
async function httpPostCaseStudy(req, res) {
  await postCaseStudy(req.body, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

// async function httpGetAllCaseStudies (req, res) {
//   await getAllCaseStudies(function(err, data) {
//     if (err) {
//       res.status(400).json(err)
//     } else {
//       res.status(200).json(data)
//     }
//   })
// }

//customers

async function httpGetAllCustomers (req, res) {
  await getAllCustomers(function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}
async function httpGetAllLeads (req, res) {
  await getAllLeadsInfo(function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}


async function httpUploadCourseCoverImage (req, res) {
  const url = req.file.path; // The URL of the uploaded image
  res.json({ url: url });
}
async function httpUploadCaseStudyCoverImage (req, res) {
  const url = req.file.path; // The URL of the uploaded image
  res.json({ url: url });
}




module.exports = {
  httpCreateAdminAccount,
  httpLoginAdmin,
  httpCreateNewCourse,
  httpGetAllCourses,
  httpGetCourseById,
  httpUpdateCourseById,
  httpDeleteCourseById,





  
  httpPostBlog,
  // httpGetAllBlogs,
  httpPostCaseStudy,
  // httpGetAllCaseStudies,
  httpGetAllCustomers,
  httpGetAllLeads,
  httpUploadCourseCoverImage,
  httpUploadCaseStudyCoverImage,
};
