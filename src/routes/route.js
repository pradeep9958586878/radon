const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const cmMw = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end

router.get("/users/:userId", cmMw.authenticate, cmMw.authorise, userController.getUserData)

router.put("/users/:userId", cmMw.authenticate, cmMw.authorise, userController.updateUser)

router.delete("/users/:userId", cmMw.authenticate, cmMw.authorise, userController.del)

router.post("/users/:userId/posts", cmMw.authenticate, cmMw.authorise, userController.postMessage)

module.exports = router;
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
