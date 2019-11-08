var express = require('express');
var router = express.Router();
var data=require("../config/data.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
    res.render("login");
});
router.post('/loginIn',function(req,res,next) {
  var username=req.body.username;
  var pwd=req.body.pwd;
  // console.log(data["users"][0].username);
  if(username==data["users"][0].username&&pwd==data["users"][0].password){
    res.render("list",{theData:data["chapterList"]});
    // var theData=data["chapterList"];
    // console.log(theData[0]["title"]);
  }else{
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    res.end("用户名或密码错误");
  }
})

module.exports = router;
