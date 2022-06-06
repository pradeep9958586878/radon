const express = require('express');
const underscore = require('underscore')
const _=require('lodash')

const router = express.Router();


//Q.1
router.get('/movies',function(req,res){
    const movie=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins','The Shining',"Titanic","Shutter Island","Pans Labyrinth","Wrath of Titans","Edge of Tommorrow"];
    res.send(movie);
});
//Q.2
router.get('/movies/:index',function(req,res){
    const value=req.params.index;
    const movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins','The Shining',"Titanic","Shutter Island","Pans Labyrinth","Wrath of Titans","Edge of Tommorrow"];
    res.send(movies[value]);  
});

//Q.3
router.get('/movies2/:index',function(req,res){
    const value=req.params.index;
    const movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins','The Shining',"Titanic","Shutter Island","Pans Labyrinth","Wrath of Titans","Edge of Tommorrow"];
    if(value<movies.length){
        res.send(movies[value]);
    }else{
        res.send("Index Number Does not Exist");
    }
});


//Q.4
router.get("/films",function(req,res){
    const film=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }];
    res.send(film)
       
});

//Q.5

router.get("/films/:indexID",function(req,res){
    let value=req.params.indexID;
    const film=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }];
    if(value<film.length){
        res.send(film[value]);
    }else{
        res.send("don't exist")
    }
       
});


module.exports = router;