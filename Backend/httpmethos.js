const express = require("express");

const app = express()

//middle ware function ====front to json data  to back
app.use(express.json());

app.listen(3000);

let users = {};

app.get('/users' , (req , res )=>{
    res.send(users);

})

app.post('/users' , (req , res ) =>{
    console.log(req.body);

    res.json({
        message : "data recived successfully",
        users : req.body
    });
})