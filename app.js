
// var stuff=require('./hellow');
// console.log(stuff.counter(["1",'','']));
// console.log(stuff.adder(2,3));
// console.log(stuff.pi);
var events=require('events');//events事件的一个库
var util=require('util');//util是一个工具库，下面有一个inherits方法实现继承

// var myEmitter=new events.EventEmitter();//new events.EventEmitter()创建一个事件对象
// myEmitter.on('someEvent',function(message){//on绑定一个事件，事件的名称为someEvent
//     console.log(message);
// })

// myEmitter.emit('someEvent','the event was emitted');//emit触发事件
////////////////////////////////////////////////////////////////////////////////////////////
// var Person=function(name){
//     this.name=name;
// }
// util.inherits(Person,events.EventEmitter);//Person继承event.EventEmitter,person就可以绑定事件
// var xiaoming=new Person("xiaoming");
// var liuiyn=new Person("liuyin");
// var lili=new Person('lili');
// var person=[xiaoming,liuiyn,lili];
// person.forEach(function(person){
//     //为每一个Person对象绑定一个名为speak的事件
//     person.on('speak',function(message){
//         console.log(person.name+"said"+message);
//     })
// })
// xiaoming.emit('speak','hi');//对象触发speak事件
// liuiyn.emit('speak',"hello");
/////////////////////////////////////////////////////////////////////////
var fs=require('fs');//fs是一个系统文件库
//var readme= fs.readFileSync('./readme.txt','utf8');//同步读取文件
// var readme=fs.readFile('./readme.txt','utf8',function(err,data){//异步读取文件
//    fs.writeFile('writeme.txt',data,function(){
//        console.log("writeme 写入完成");
//    })
// })
// fs.unlink('writeme.txt',function(){//异步删除文件
//     console.log('delete writeme.txt finished');
// })
//fs.mkdirSync('stuff');//同步创建目录
//fs.rmdirSync('stuff');//同步删除目录
// fs.mkdir('stuff',function(){
//     fs.readFile('readme.txt','utf8',function(err,data){
//         fs.writeFile('./stuff/writeme.txt',data,function(){
//             console.log("coppy successfully");
//         })
//     })
// })
/////////////////////////////////////////////////////////////
//管道输入输出流
//var myReadStream=fs.createReadStream(__dirname+'/readme.txt','utf8');
// myReadStream.on('data',function(chunk){
//     console.log('new chunk recived');
//     console.log(chunk);
// })


// var myReadStream=fs.createReadStream(__dirname+'/readme.txt');
// myReadStream.setEncoding('utf8');
// var data='';
// myReadStream.on('data',function(chunk){
//     data+=chunk;
// })
// myReadStream.on('end',function(){
//     console.log(data);
// })
//////////////////////////////////////////////////////////////////
// var myReadStream=fs.createReadStream(__dirname+'/readme.txt');
// var myWrriteStream=fs.createWriteStream(__dirname+'/writeme.txt');
// var writeData="hellow liuyin";
// myWrriteStream.write(writeData);
// myWrriteStream.end();
// myWrriteStream.on('finish',function(){
//     console.log('finished');
// })
//管道方法
//myReadStream.pipe(myWrriteStream);


//web请求与响应
var http=require('http');
var server=http.createServer(function(request,response){
    console.log('request received');
    response.writeHead(200,{'Content-Type':'text/html'});
   var readh=fs.createReadStream(__dirname+'/test.html','utf8');
  readh.pipe(response);
})

server.listen(3001,'127.0.0.1');
console.log("server started on localhost 3001");
