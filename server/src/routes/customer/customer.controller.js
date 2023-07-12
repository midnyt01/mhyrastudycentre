const { default: axios } = require("axios");
const { getAllCourse, getCourseById, sendEnquiry, samplePaperQuery } = require("../../models/customer.model");




const API_KEY = 'AIzaSyDKI7XTRAxzODbotQKS2enFgF6AgwYl8MQ';
const PLACE_ID = 'ChIJ0YZ3y-bB1DsRCY7dw9O_No0';

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

async function httpSendEnquiry(req, res) {
  let enquiry = req.body;
  await sendEnquiry(enquiry, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpSendSamplePaperQuery(req, res) {
  let query = req.body;
  await samplePaperQuery(query, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}




// async function httpPostContactMe(req, res) {
//     let formDetails = req.body;
//     await postContactMe(formDetails, function(err, data) {
//         if (err) {
//             res.status(400).json(err)
//         } else {
//             res.status(200).json(data)
//         }
//     })
// }

async function httpGetTestitmonials (req, res) {
  const response = await axios({
    method: 'get',
    url:`https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews%2Crating&key=${API_KEY}`,params: {
      _limit: 5,
    },
});
  const data = response.data.result;
  console.log({data})
  if (data) {
    res.status(200).json(data.reviews);
  }
  
}

module.exports = {
  httpGetAllCourses,
  httpGetCourseById,
  httpSendEnquiry,
  httpSendSamplePaperQuery,
  httpGetTestitmonials,
};
