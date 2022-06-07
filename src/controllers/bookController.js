const BookModel = require("../models/bookModel");


// to create a new entry..use this api to create 11+ entries in your collection
const createBook = async function (req, res) {
  let data = req.body;

  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

const getBooksData = async function (req, res) {
  // gives all the books- their bookName and authorName only
  let allBooks = await BookModel.find().select({
    bookName: 1,
    authorName: 1,
    _id: 0,
  });
  res.send({ msg: allBooks });
};

//takes year as input in post request and gives list of all books published that year
const getBooksInYear=async function(req,res){
    let list= await BookModel.find({year:req.body.year})
    res.send(list)
}

//e.g if body had { name: “hi”} then you would fetch the books with this name
//
//if body had { year: 2020} then you would fetch the books in this year
const getParticularBooks=async function(req,res){
  
      let output=await BookModel.find(req.body)
     res.send(output)
}


//request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”
const getXINRBooks = async function (req, res) {
  let getINRBooks = await BookModel.find({
    "prices.indianPrice": { $in: ["100INR", "200INR", "500INR"] },
  });
  res.send(getINRBooks);
};

// returns books that are available in stock or have more than 500 pages

const getRandomBooks = async function (req, res) {
  let allRandomBooks = await BookModel.find({
    $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }],
  });
  res.send(allRandomBooks);
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
module.exports.getParticularBooks = getParticularBooks;