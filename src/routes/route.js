const express = require("express");
const router = express.Router();

const BookController = require("../controllers/bookController");



router.post("/createBook", BookController.createBook);

router.get("/getBooksData", BookController.getBooksData);

router.get("/getXINRBooks", BookController.getXINRBooks);

router.post("/getBooksInYear", BookController.getBooksInYear);

router.post("/getParticularBooks", BookController.getParticularBooks);

router.get("/getRandomBooks", BookController.getRandomBooks);

module.exports = router;