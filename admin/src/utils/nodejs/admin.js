const API = 'http://localhost:8005/admin';
// const API = 'https://api.mhyrastudycentre.com/admin'


async function httpCreateAdmin (adminCred) {
    const response = await fetch(`${API}/createadmin`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(adminCred)
    })
    const admin = await response.json()
    return admin
}

async function httpLoginAdmin (adminCred) {
    const response = await fetch(`${API}/login`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(adminCred)
    })
    const admin = await response.json()
    return admin
}

async function httpCreateNewCourse (courseDetails) {
    const response = await fetch(`${API}/create-new-course`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(courseDetails)
    })
    const data = await response.json()
    return data;
}

async function httpGetAllCourses() {
    const response = await fetch(`${API}/courses`, {
        method: "get",
    })
    return await response.json()
}

async function httpGetCourseById(Id) {
    const response = await fetch(`${API}/courses/${Id}`, {
        method: "get",
    })
    return await response.json()
}

async function httpSetCourseInactive (CourseId) {
    const response = await fetch(`${API}/courseinactive`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(CourseId)
    })
    const data = await response.json()
    return data;
}

async function httpSetCourseActive (CourseId) {
    const response = await fetch(`${API}/courseactive`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(CourseId)
    })
    const data = await response.json()
    return data;
}

async function httpDeleteCourseById(Id) {
    const response = await fetch(`${API}/courses/${Id}`, {
        method: "delete",
    })
    return await response.json();
}

async function httpUpdateCourseById(Id, courseDetails) {
    const response = await fetch(`${API}/courses/${Id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(courseDetails)
    })
    return await response.json();
}


async function httpPostBlog (blogDetails) {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/blogs`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "auth-token": `${adminToken}`
          },
        body: JSON.stringify(blogDetails)
    })
    const data = await response.json()
    return data
}

//case study
async function httpPostCaseStudy (caseStudyDetails) {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/casestudies`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "auth-token": `${adminToken}`
          },
        body: JSON.stringify(caseStudyDetails)
    })
    const data = await response.json()
    return data
}

//get all customers

async function httpGetAllCustomersDetails() {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/customers`, {
        method: "get",
        headers: {
            "auth-token": `${adminToken}`
        }
    })
    return await response.json()
}

async function httpGetAllLeadsInfo() {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/leads`, {
        method: "get",
        headers: {
            "auth-token": `${adminToken}`
        }
    })
    return await response.json()
}

async function httpGetAllSamplePaperQueries() {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/samplepaper`, {
        method: "get",
        headers: {
            "auth-token": `${adminToken}`
        }
    })
    return await response.json()
}

export {
    httpCreateAdmin,
    httpLoginAdmin,
    httpCreateNewCourse,
    httpGetAllCourses,
    httpGetCourseById,
    httpSetCourseInactive,
    httpSetCourseActive,
    httpDeleteCourseById,
    httpUpdateCourseById,


    httpPostBlog,
    httpPostCaseStudy,
    httpGetAllCustomersDetails,
    httpGetAllLeadsInfo,
    httpGetAllSamplePaperQueries,
}