var counter=function(arry){
    return "there are"+arry.length+"element in the array";
}
var adder=function(a,b){
    return 'th sum of 2 numbers is '+a+b;
}
var pi=3.14;
//  module.exports.counter=counter;
// module.exports.adder=adder;
// module.exports.pi=pi;
module.exports={
    counter:counter,
    adder:adder,
    pi:pi
}