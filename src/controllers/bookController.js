const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book              = req.body
    let authorDetails     =req.body.author
    let publisherDetails  =req.body.publisher
    
    let authorId     = await authorModel.findOne({_id:authorDetails})
    let publisherID  = await publisherModel.findOne({_id:publisherDetails})

    if(authorDetails === undefined|| publisherDetails === undefined)
    {res.send({msg:"details required"})}
    else if(authorId == null||publisherID == null)
    {res.send({msg:"invailid ID"})}
    else
    {let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})}
}

const getAllBooks= async function(req, res){
    let allBooks = await bookModel.find().populate(['author','publisher'])
    res.send({data: allBooks})
    
}



module.exports.createBook= createBook
module.exports.getAllBooks=getAllBooks

