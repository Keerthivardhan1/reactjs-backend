// server using expreses it is fast and secure req res routing

const express =  require('express');

const app = express();

app.listen(3000);

app.get('/' , (req , res)=>{
    res.send('hello world')
})

app.get('/about' , (req , res)=>{
    res.send('about page')
})

// sending html file 

