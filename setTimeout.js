
function doSomething() {
    console.log(333333333);
}

console.log(22222);
setTimeout(()=> {
    doSomething();
},5000)
console.log(44444);
console.log(55555);
console.log(66666);

//Using setInterval 
setInterval(function(){
   console.log("do it");
},1000)
