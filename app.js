const express = require('express');
const db = require('./db')
const app = express()

app.use('/' ,(req,res)=>{
    res.send('hello world')
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to databse!");
    app.listen(8080,()=>{
        console.log('listening to port 8080');
    })
    db.end();
});