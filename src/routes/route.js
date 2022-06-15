const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mw=require("../middleware/auth")


router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/userData/:userId",mw.jwtMiddleware, userController.getUserData)

router.put("/updateUser/:userId",mw.jwtMiddleware, userController.updateUser)

router.put("/deleteUser/:userId",mw.jwtMiddleware, userController.deleteUser)



module.exports = router;