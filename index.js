let express = require('express');
let multer = require('multer');
let app =express();
 multer =multer();


app.use(multer.array());
app.use(express.static('public'));


app.post('/',function (req,res){

    let JSONdata = req.body;
    let JSONstringify = JSON.stringify(JSONdata);
    res.send(JSONstringify);
})



app.listen(7000,function () {
    console.log("server run success");
})