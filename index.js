// import express package
const express = require('express')
// create an instance of an express app
const app = express()

// [GET] home route
app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/views/index.html');
});

// [GET] about route
app.get('/about', (req, res)=>{
    res.sendFile(__dirname+'/views/about.html');
});

// [GET] blog route
app.get('/blog', (req, res)=>{
    res.sendFile(__dirname+'/views/blog.html');
});

app.listen(8000, ()=>{
    console.log("listening to port 8000")
});