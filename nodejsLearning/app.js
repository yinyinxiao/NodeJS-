var server=require('./server');
var router=require('./router');
var handle=require('./handle');

var handler={};
handler['/']=handle.home;
handler['/home']=handle.home;
handler['/review']=handle.review;
handler['/json']=handle.api_records;
server.startServer(router.route,handler);