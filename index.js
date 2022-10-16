let express = require('express');
app=express();
//
// app.get("/one",function (req,res) {
//     res.send("this is simple string response  get");
// })
//
// app.post("/two",function (req,res) {
//     res.send("this is simple string response post");
// })
//
// app.post("/three",function (req,res) {
//     res.status(401).end("status test code");
// })
//
// app.post("/four",function (req,res) {
//     let  MyJSON =[
//         {
//             name:'karim',
//             age:'25',
//             roll:'21',
//         },
//         {
//             name:'karim2',
//             age:'25',
//             roll:'21',
//         },
//         {
//             name:'karim3',
//             age:'25',
//             roll:'21',
//         },
//         {
//             name:'karim4',
//             age:'25',
//             roll:'21',
//         },
//         {
//             name:'karim5',
//             age:'25',
//             roll:'21',
//         },
//         {
//             name:'karim6',
//             age:'25',
//             roll:'21',
//         }
//     ]
//
//     res.json(MyJSON);
// })
//
// app.get("/five",function (req,res) {
//     res.download('./200.gif');
// })








app.listen(8000,function () {
    console.log("server run success");
})