const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mw=require("../middleware/auth")


router.post("/createUsers", userController.createUser  )

router.post("/loginUser", userController.loginUser)

//The userId is sent by front end
router.get("/userData/:userId",mw.authenticate,mw.authorise, userController.getUserData)

router.put("/updateUser/:userId",mw.authenticate,mw.authorise, userController.updateUser)

router.delete("/userDelete/:userId",mw.authenticate,mw.authorise, userController.deleteUser)

router.post("/postUser/:userId",mw.authenticate,mw.authorise, userController.postMessage)



module.exports = router;