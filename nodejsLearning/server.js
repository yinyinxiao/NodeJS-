var http=require('http');
var fs=require('fs');
var url=require('url');
var querystring=require('querystring')
function startServer(route,handler){
    var onRequest=function(request,response){
        var pathname=url.parse(request.url).pathname;
        console.log("request received:"+pathname);
        var data='';
        request.on("error",function(err){
            console.error(err);
        }).on("data",function(chunk){
            data+=chunk;
        }).on("end",function(){
            if(request.method==='POST'){
                route(handler,pathname,response,querystring.parse(data));
            }else{
                var params=url.parse(request.url,true).query;
                route(handler,pathname,response,params);
            }
           
        })
       
    }
    var server=http.createServer(onRequest);
    server.listen(3002,'127.0.0.1');
    console.log('service 3002 started');
}
module.exports.startServer=startServer;