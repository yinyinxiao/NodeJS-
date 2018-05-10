var fs=require('fs');
function home(response){
    response.writeHead(200,{'Content-Type':'text/html'});
    var readh=fs.createReadStream(__dirname+"/home.html",'utf8');
    readh.pipe(response);
}
function review(response,params){
    response.writeHead(200,{'Content-Type':'text/html'});
            // fs.createReadStream(__dirname+'/review.html','utf8').pipe(response);
            response.end(JSON.stringify(params));
}
function api_records(response){
    response.writeHead(200,{'Content-Type':'application/json'});
    var jsons={
        'liu':'yin',
        'zhang':'ning'
    }
    response.end(JSON.stringify(jsons));
}
module.exports={
    home:home,
    review:review,
    api_records:api_records
}