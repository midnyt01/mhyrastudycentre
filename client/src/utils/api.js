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


export {
    httpGetAllCourses,
    httpGetCourseById
}