const request = require("request")

const makeOptionsForFetchingLeavesData=()=>{
    let url="https://api.peopleapps.in/Query"
    let body={
        "APIKey": "76491cc3-48ff-496f-adaa-956894c08f3e",
        "Action": "GetQueryResultByQueryName",
        "QueryName": "fetchEmployeeLeaves"
    }
    let headers={
        "Content-Type":"text/json"
    }
    return {
        url,
        body,
        headers,
        method:"POST",
        json:true
    }
}

const fetchLeaveData = async () => {
    let options=makeOptionsForFetchingLeavesData()
    return new Promise((resolve, reject) => {
        request(options, (err, res) => {
            if (err) {
                reject(err)
            } else {
                if (res.statusCode == 200) {
                    resolve(res.body)
                }
            }
        })
    })
}

const homeController = (req, res) => {
    res.send("We are learning express")
}

const loginController = (req, res) => {
    res.send("Sigin Page")
}

const postController = (req, res) => {
    console.log("our id is " + req.params.id)
    let { name, pos, age } = req.body
    res.send(age + "")
}

const fetchLeaveController = async (req, res) => {
    try {
        const data = await fetchLeaveData()
        res.send(data)
    } catch (err) {
        throw err
    }
}

module.exports = {
    homeController,
    loginController,
    postController,
    fetchLeaveController
}

