let express = require('express');
let multer = require('multer');
let app =express();



let  storage = multer.diskStorage({
    destination:function (req,file,callBack) {
        callBack(null,'./uploads');
    },
    filename:function (req,file,callBack) {

        callBack(null,file,'aa');
    }

})

let upload = multer({storage:storage}).single('myfile');

app.post('/',function (req,res) {
    upload(req,res,function (error) {
        if (error){
            res.send("File upload Fail");
        }else{
            res.send('File Upload Success');
        }
    })
})







app.listen(7000,function () {
    console.log("server run success");
})