const { count } = require("console");
const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const BookModel = require("../models/bookModel");

//Write create APIs for both books and authors
const createBook = async function (req, res) {
  let data = req.body;
  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

//Write get data APIs for both books and authors
const getBooksData = async function (req, res) {
  let savedData = await BookModel.find();
  res.send({ msg: savedData });
};

//find the author of “Two states” and update the book price to 100;
const getAuthorAndUpdate = async function (req, res) {
  let name = await bookModel.findOneAndUpdate(
    { name: "Two states" },
    { price: 100 },
    { new: true }
  );
  let id = name.author_id;
  let author = await authorModel.findOne({ author_id: id });
  let price = name.price;
  res.send({author, price});
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getAuthorAndUpdate = getAuthorAndUpdate;