var http = require('http');
var fs = require('fs'); //파일시스템 임포트

// function req(request,response){
//   console.log("사용자가 request 합니다."+request.url);
//   response.writeHead(200,{"Context-Type" : "text-plain"});
//   response.write("this is server response..");
//   response.end();
// }

//웹페이지 없을때
function send404Reponse(res){
  res.writeHead(404,{"Context-Type" : "text/plain"});
  res.write("404 Error : File not exists!!");
  res.end();
}

//사용자 요구 응답처리
function req(request,response){
  if (request.method=="GET" && request.url == "/") {
    response.writeHead(200,{"Context-Type" : "text/html"});
    fs.createReadStream("./index.html").pipe(response);
  }
  else {
    //파일이 없을 경우
    send404Reponse(response);
  }
}

http.createServer(req).listen('8888');
console.log("서버 시작");
