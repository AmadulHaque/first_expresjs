let express = require('express');
app=express();


app.get("/bangladesh",function (req,res) {
    res.redirect('http://localhost:8000/nepal');
})

app.get("/nepal",function (req,res) {
    res.send('this nepal');
})

app.get("/six",function (req,res) {
    res.append('name' ,'karim');
    res.append('city' ,'dhaka');
    res.append('age' ,'22');
    res.status(201).end('this is body emo text');
})


app.get("/seven",function (req,res) {
    res.cookie('name' ,'halim');
    res.cookie('city' ,'dhaka');
    res.cookie('age' ,'14');
    res.end('this is body emo text');
})
app.get("/eight",function (req,res) {
    res.clearCookie('name');
    // res.clearCookie('city');
    res.clearCookie('age');
    res.end('this is body emo text');
})



app.listen(7000,function () {
    console.log("server run success");
})