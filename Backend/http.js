
const express = require("express");

users = {
    // name:"keerthi",
    // id : "21b81a0517"
}

const app = express();
app.listen(3000);
app.use(express.json());

app.get('/' , (req , res)=>{
    res.send('hello world')
})

app.get('/users' , (req , res) =>{
    // console.log(req)
    res.send(users)
})

app.post('/users' , (req , res) =>{
    console.log(req.body);
    users = req.body.nname;
    res.json({
        message : "data recived",
        users : req.body
    })
})


// update

app.patch("/users" , (req , res ) =>{
    console.log("req body ----", req.body)
    let datatobeupdated = req.body;
    console.log(req.body);
    for(key in req.body){
        console.log(key)
        users[key] = datatobeupdated[key];
        console.log(users);
    }
    // console.log(  "]]]]]",datatobeupdated[key])
    // console.log(users)
    res.json({
        message:"data updated"
        // users: req.body
    })
    
})

app.delete("/users" , (req , res )=>{
    users={}
    res.json({
        message:"deleted"
    })
})