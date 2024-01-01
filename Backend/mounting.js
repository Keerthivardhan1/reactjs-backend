
const express = require("express");

users = [
    {
        id:1,
        name : "keerthi"
        
    },
    {
        id:2,
        name: "ruhi"
    }
]

const app = express();
app.listen(3000);
app.use(express.json());

const userRouter  = express.Router();
app.use('/users', userRouter);

userRouter
.route('/')
.get(getusers)
.post(postusers)
.patch(patchuser)
.delete(deleteuser)

userRouter
.route('/:id')
.get(getusersbyid)



function getusers(req , res){
    res.send(users)
}
function postusers(req , res) {
    console.log(req.body);
    users = req.body.nname;
    res.json({
        message : "data recived",
        users : req.body
    })
}
function patchuser(req , res ){
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
    })
    
}
function deleteuser(req , res ){
    users={};
    res.json({
        message:"deleted"
    });
}
function getusersbyid(req , res){
    console.log(req.params.id);
    let paramid = req.params.id;
    let obj = {};
    for(let i=0;i<users.length;i++){
        if(users[i]['id'] == paramid){
            obj = users[i]
        }
    }

    res.json({
        message:"req recived",
        data:obj
    });
}