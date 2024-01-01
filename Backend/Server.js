const http = require('http');
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req , res) =>{
    console.log("createrd server");
    console.log(req.method);
    console.log(req.url);      //returns url  /aboutus

    //lodash----

    let num = _.random(0,20);
    console.log(num);

    // to run any function only once ---> .once

    const great = _.once(()=>{
        console.log("grate");
    })

    great();
    great();

    // res.setHeader("Content-Type" , 'text/plain' )
    res.setHeader("Content-Type" , "text/html")
    // res.write("Hello -): ");
    // res.write("<h1>Hello a </h1>")
    // res.end();

    let path = './view';
        switch(req.url){
            case '/':
                path+='/index.html';
                break;
            case '/about':
                path += "/about.html"
                break;
            default :
                path += "/404.html";
                break;
        }

    fs.readFile(path,(err,fileData)=>{

        if(err){
            console.log(err);
        }else{
            // console.log("-----------"+fileData);
            res.write(fileData)
            res.end();
        }

    })
})

server.listen(3000 , 'localhost' , ()=>{
    console.log("server is listing");
})