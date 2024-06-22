const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json)

app.get('/tacos',(req,res)=>{
    res.send('Welcome to the tacos page!');
})

app.post('/tacos',(req,res)=>{
    // console.log(req.body);
    const {meat,qty} = req.body;
    res.send(`Okay, here are your ${qty} ${meat} tacos`);
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})