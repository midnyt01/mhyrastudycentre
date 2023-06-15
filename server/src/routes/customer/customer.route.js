const express = require("express");
const fetchCustomer = require("../../middleware/fetchcustomer");
const {
  httpGetTestitmonials,
  httpGetAllCourses,
  httpGetCourseById,
} = require("./customer.controller");

const customerRouter = express.Router();



customerRouter.get("/testimonials", httpGetTestitmonials)

customerRouter.get("/courses", httpGetAllCourses);
customerRouter.get("/courses/:id", httpGetCourseById);

//leads
// customerRouter.post("/contactme", httpPostContactMe)

module.exports = customerRouter;
