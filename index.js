require('dotenv').config()
const express = require('express');
console.log("chai or code");
const app = express();
const port = 4000;
app.get('/', (req, res) => {
    res.send('Hello world');
})
app.get('/twitter', (req, res) => {
    res.send('riyadotcom');
})
app.get('/login',(req,res)=>{
    res.send('<h1> Please Login Here....</h1>');
})
// app.listen(process.env.PORT,()=>{
//     console.log(`Example App listening on port ${port}`);
// })