var connect = require("connect");
var http = require("http");

var app = connect();

// function doOne(request,response,next){
//   console.log(request);
//   next();
// }
//
// function doTwo(request,response){
//   console.log("excute doTwo");
// }
//
//
//
// app.use(doOne);
// app.use(doTwo);
function about(req,res){
  console.log("about 페이지 요청!!");
}

function email(req,res){
  console.log("email 페이지 요청!!");
}

app.use("/about",about);
app.use("/email",email);


http.createServer(app).listen(8888);
console.log("server started!!!!!!!!!");
