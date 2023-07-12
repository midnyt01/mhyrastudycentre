// const API = 'http://localhost:8005/customer';
const API = 'https://api.mhyrastudycentre.com/customer';


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

async function httpPostEnquiry (enquiry) {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/contactme`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "auth-token": `${adminToken}`
          },
        body: JSON.stringify(enquiry)
    })
    const data = await response.json()
    return data
}

async function httpPostSamplePaperQuery (query) {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/samplepaper`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "auth-token": `${adminToken}`
          },
        body: JSON.stringify(query)
    })
    const data = await response.json()
    return data
}




export {
    httpGetAllCourses,
    httpGetCourseById,
    httpPostEnquiry,
    httpPostSamplePaperQuery,
}