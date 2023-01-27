//require the express
const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}))
//sending the message to port using the root route
app.get("/",function(req, res){
res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, res){
var num1=Number(req.body.num1);
var num2=Number(req.body.num2);

var result= num1 + num2;
res.send("The result of the calculation is:" + result);

});



//running on the port 3000 in local host
app.listen(3000,function(){
console.log("server is started on the port 3000");

})