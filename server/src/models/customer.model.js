const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { db } = require("../services/mysql");

const JWT_TOKEN = "breakthematrix";


const PointsArray = [
  "PointOne",
  "PointTwo",
  "PointThree",
  "PointFour",
  "PointFive",
  "PointSix",
]


async function getAllCourse(callback) {
  let sql = `SELECT CourseId, CourseTitle, MetaDescription, CourseImage FROM courses WHERE IsDeleted = ${0} AND IsActive = ${1}`
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

async function getCourseById(CourseId, callback) {
  let sql = `SELECT * FROM courses WHERE CourseId = ${CourseId} AND IsDeleted = ${0} AND IsActive = ${1}`
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      if (result.length == 0) {
        return callback(`Course With Id ${CourseId} doesnot found`, null)
      }
      const ans = result[0];
      let sql = `SELECT Content FROM course_includes WHERE CourseId = ${CourseId}`
      db.query(sql, function(err, result) {
        if (err) {
          callback(err, null);
        } else {
          // let CourseIncludes = {};
          // for (let i = 0; i < 4; i++) {
          //   if (result[i]) {
          //     CourseIncludes[PointsArray[i]] = result[i].Content
          //   } else {
          //     CourseIncludes[PointsArray[i]] = ""
          //   }
          // }
          
          ans.CourseIncludes = result;
        }
        let sql = `SELECT Content FROM learnings WHERE CourseId = ${CourseId}`
        db.query(sql, function(err, result) {
          if (err) {
            callback(err, null);
          } else {
            // let CourseLearning = [];
            // for (let i = 0; i < 6; i++) {
            //   if (result[i]) {
            //     CourseLearning[PointsArray[i]] = result[i].Content
            //   } else {
            //     CourseLearning[PointsArray[i]] = ""
            //   }
            // }
            
            ans.Learnings = result;
          }
            let sql = `SELECT Content FROM prerequisites_contents WHERE CourseId = ${CourseId}`
            db.query(sql, function(err, result) {
            if (err) {
              callback(err, null);
            } else {
              // let Prerequisites = {};
              // for (let i = 0; i < 2; i++) {
              //   if (result[i]) {
              //     Prerequisites[PointsArray[i]] = result[i].Content
              //   } else {
              //     Prerequisites[PointsArray[i]] = ""
              //   }
              // }
              ans.Prerequisites = result;
              callback(null, ans);
          }
        })
        })
      })
    }
  })
}

async function sendEnquiry(enquiry, callback) {
  let sql = "INSERT into leads SET ? ";
  db.query(sql, enquiry, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, {
        success: true
      })
    }
  })
}

async function samplePaperQuery(query, callback) {
  let sql = "INSERT into sample_paper_queries SET ? ";
  db.query(sql, query, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, {
        success: true
      })
    }
  })
}


module.exports = {
  getAllCourse,
  getCourseById,
  sendEnquiry,
  samplePaperQuery,
};



