const express = require('express')
const router = express.Router()
const contollers = require("../Controllers/index")

router.get("/", contollers.homeController)

router.get("/login", contollers.loginController)

router.post("/postReq/:id", contollers.postController)

router.get("/fetchLeaveData",contollers.fetchLeaveController)

module.exports = router
