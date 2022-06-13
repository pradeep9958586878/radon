const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let time= moment();
app.use (function(req, res, next){
    
    let id= req.ip
    let rt= req.originalUrl
    console.log(time.format('dd:mm:yyyy'))
     console.log(time,id,rt)
    next()
    
})


mongoose.connect("mongodb+srv://pradeepj0508:pradeepj0508@cluster0.jlwna.mongodb.net/List", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
