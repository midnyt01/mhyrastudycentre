const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PointsArray = [
  "PointOne",
  "PointTwo",
  "PointThree",
  "PointFour",
  "PointFive",
  "PointSix",
]

//create admin account

const { db } = require("../services/mysql");

const JWT_TOKEN = "breakthematrix";

async function createAdminAccount(adminDetails, callback) {
  //encrypt password
  const { Email, Password } = adminDetails;
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(Password, salt);
  let sql = `SELECT * FROM admins WHERE Email = '${Email}'`
  db.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      if (result.length > 0) {
        callback("admin with this email already exixts", null)
      } else {
        let sql = "INSERT INTO admins SET ?";
        db.query(
          sql,
          { ...adminDetails, Password: hashPass },
          async (err, result) => {
            if (err) {
              callback(err);
            } else {
              let data = {
                admin: {
                  AdminId: result.insertId,
                  PhoneNumber: adminDetails.PhoneNumber,
                  isAdmin: true,
                },
              };
              const authToken = jwt.sign(data, JWT_TOKEN);
              let success = true;
              callback(null, { authToken, success });
            }
          }
        );
      }
    }
  })
}

async function loginInAdmin(adminCreds, callback) {
  const { Email, Password } = adminCreds;
  let sql = `SELECT * FROM admins WHERE Email = '${Email}'`;
  db.query(sql, async (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      if (result.length < 1) {
        callback("admin not found", null);
      } else {
        let AdminId = result[0].AdminId;
        let comparePassword = await bcrypt.compare(
          Password,
          result[0].Password
        );
        if (!comparePassword) {
          callback("password does not match", null);
        } else {
          let data = {
            admin: {
              AdminId,
              Email,
              isAdmin: true,
            },
          };
          const authToken = jwt.sign(data, JWT_TOKEN);
          let success = true;
          callback(null, { authToken, success });
        }
      }
    }
  });
}

//create course

async function createNewCourse(courseDetails, callback) {
  const {CourseIncludes,CourseLearning,Prerequisites} = courseDetails;
  delete courseDetails.CourseIncludes
  delete courseDetails.CourseLearning
  delete courseDetails.Prerequisites

  db.getConnection(function(err, connection) {
    if (err) {
      callback(err, null);
    } else {
      connection.beginTransaction(function(err) {
        if (err) {
          callback(err, null);
        }
        let sql = `INSERT INTO courses SET ?`
        connection.query(sql, courseDetails, function(err, result) {
          if (err) {
            return connection.rollback(function() {
              callback(err, null);
            })
          } else {
            let CourseId = result.insertId;
            //includes
            for (const Content in CourseIncludes) {
              let sql = `INSERT INTO course_includes SET CourseId = ${CourseId}, Content = "${CourseIncludes[Content]}"`
              connection.query(sql, function(err, result) {
                if (err) {
                  return connection.rollback(function() {
                    callback(err, null)
                  })
                }
              }) 
            }

            //learnings
            for (const Content in CourseLearning) {
              let sql = `INSERT INTO learnings SET CourseId = ${CourseId}, Content = "${CourseLearning[Content]}"`
              connection.query(sql, function(err, result) {
                if (err) {
                  return connection.rollback(function() {
                    callback(err, null)
                  })
                }
              }) 
            }

            //prerequisites
            for (const Content in Prerequisites) {
              let sql = `INSERT INTO prerequisites_contents SET CourseId = ${CourseId}, Content = "${Prerequisites[Content]}"`
              connection.query(sql, function(err, result) {
                if (err) {
                  return connection.rollback(function() {
                    callback(err, null)
                  })
                }
              }) 
            }
            connection.commit(function(err, result) {
              if (err) {
                return connection.rollback(function() {
                  callback(err, null)
                })
              } else {
                callback(null, {
                  success: true,
                  CourseId
                });
              }
            })
          }
        })
      })
    }
  })
  
}

async function getAllCourse(callback) {
  let sql = `SELECT CourseId, CourseTitle, MetaDescription FROM courses WHERE IsDeleted = ${0}`
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

async function getCourseById(CourseId, callback) {
  let sql = `SELECT * FROM courses WHERE CourseId = ${CourseId} AND IsDeleted = ${0}`
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
          let CourseIncludes = {};
          for (let i = 0; i < 4; i++) {
            if (result[i]) {
              CourseIncludes[PointsArray[i]] = result[i].Content
            } else {
              CourseIncludes[PointsArray[i]] = ""
            }
          }
          
          ans.CourseIncludes = CourseIncludes;
        }
        let sql = `SELECT Content FROM learnings WHERE CourseId = ${CourseId}`
        db.query(sql, function(err, result) {
          if (err) {
            callback(err, null);
          } else {
            let CourseLearning = {
              
              // PointOne: result[0].Content,
              // PointTwo: result[1].Content,
              // PointThree: result[2].Content,
              // PointFour: result[3].Content,
              // PointFive: result[4].Content,
              // PointSix: result[5].Content,
            };
            for (let i = 0; i < 6; i++) {
              if (result[i]) {
                CourseLearning[PointsArray[i]] = result[i].Content
              } else {
                CourseLearning[PointsArray[i]] = ""
              }
            }
            
            ans.CourseLearning = CourseLearning;
          }
            let sql = `SELECT Content FROM prerequisites_contents WHERE CourseId = ${CourseId}`
            db.query(sql, function(err, result) {
            if (err) {
              callback(err, null);
            } else {
              let Prerequisites = {};
              for (let i = 0; i < 2; i++) {
                if (result[i]) {
                  Prerequisites[PointsArray[i]] = result[i].Content
                } else {
                  Prerequisites[PointsArray[i]] = ""
                }
              }
              ans.Prerequisites = Prerequisites;
              callback(null, ans);
          }
        })
        })
      })
    }
  })
}


//update course and delete course

async function updateCourseById(CourseId, courseDetails, callback) {
  const {CourseIncludes,CourseLearning,Prerequisites} = courseDetails;
  delete courseDetails.CourseIncludes
  delete courseDetails.CourseLearning
  delete courseDetails.Prerequisites

  db.getConnection((err, connection) => {
    if (err) {
      callback(err, null);
    } else {
      connection.beginTransaction(function (err) {
        if (err) {
          callback(err, null);
        } else {
          let sql = `UPDATE courses SET ? WHERE CourseId = ${CourseId}`;
          connection.query(sql, courseDetails, function(err, result) {
            if (err) {
              return connection.rollback(function() {
                callback(err, null);
              })
            } else {
              //includes
              //get includes id then update
              let IncludeIds;
              let sql =  `SELECT IncludeId FROM course_includes WHERE CourseId = ${CourseId}`
              connection.query(sql, function(err, result) {
                if (err) {
                  return connection.rollback(function() {
                    callback(err, null);
                  })
                }
                IncludeIds = result;
                let index = 0;
                for (const Content in CourseIncludes) {
                  console.log(IncludeIds[index]);
                  let sql = `UPDATE course_includes SET Content = "${CourseIncludes[Content]}" WHERE CourseId = ${CourseId} AND IncludeId = ${IncludeIds[index].IncludeId}`
                  connection.query(sql, function(err, result) {
                    if (err) {
                      return connection.rollback(function() {
                        callback(err, null)
                      })
                    }
                  })
                  index++; 
                }
              })
              //get learnign ids
              let sql1 = `SELECT LearningId FROM learnings WHERE CourseId = ${CourseId}`;
              connection.query(sql1, function(err, result) {
                if (err) {
                  return connection.rollback(function() {
                    callback(err, null);
                  })
                }
                let LearningIds = result;
                let index = 0;
                console.log(LearningIds)
                for (const Content in CourseLearning) {
                  let sql = `UPDATE learnings SET Content = "${CourseLearning[Content]}" WHERE CourseId = ${CourseId} AND LearningId = ${LearningIds[index].LearningId}`
                  connection.query(sql, function(err, result) {
                    if (err) {
                      return connection.rollback(function() {
                        callback(err, null)
                      })
                    }
                  }) 
                  index++;
                }
              })
  
              //prerequisites
              //get prerequisites ids
              let sql2 = `SELECT PrerequisitesContentId FROM prerequisites_contents WHERE CourseId = ${CourseId}`
              connection.query(sql2, function(err, result) {
                if (err) {
                  return connection.rollback(function() {
                    callback(err, null)
                  })
                }
                let PrerequisitesIds = result;
                let index = 0;
                for (const Content in Prerequisites) {
                  let sql = `UPDATE prerequisites_contents SET Content = "${Prerequisites[Content]}" WHERE CourseId = ${CourseId} AND PrerequisitesContentId = ${PrerequisitesIds[index].PrerequisitesContentId}`
                  connection.query(sql, function(err, result) {
                    if (err) {
                      return connection.rollback(function() {
                        callback(err, null)
                      })
                    }
                  }) 
                  index++;
                }
              })
              connection.commit(function(err, result) {
                if (err) {
                  return connection.rollback(function() {
                    callback(err, null)
                  })
                } else {
                  callback(null, {
                    success: true
                  });
                }
              })

            }
          })
        }
      })
    }
  }) 
}


async function deleteCourseById (CourseId, callback) {
  let sql = `UPDATE courses SET IsDeleted = ${1} WHERE CourseId = ${CourseId}`
  db.query(sql, function (err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, {
        success: true
      })
    }
  })
}

//leads and customers

//FirstName, CustomerId, PhoneNumber, AltNumber, Country, State, City, Pincode, Landmark, BuildingName, AddressType
async function getAllCustomers(callback) {
  let sql = `SELECT UserId, FirstName, LastName, Email FROM users`;
  db.query(sql, function (err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}


async function getAllLeadsInfo (callback) {
  let sql = 'SELECT * FROM leads';
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

module.exports = {
  createAdminAccount,
  loginInAdmin,
  createNewCourse,
  getAllCourse,
  getCourseById,
  updateCourseById,
  deleteCourseById,



  getAllCustomers,
  getAllLeadsInfo,
};
