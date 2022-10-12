let express = require('express');
app=express();


app.get("/",function (req,res) {
    res.send("hello Express js ");
})
app.listen(7070,function () {
    console.log("server run success");
})