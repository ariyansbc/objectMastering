
var name = "peter";
function add(num1, num2) {
     result = num1 + num2;
    // console.log("result inside:",result);
    

    function double(num) {
        return num *2;
    }
    var total=  double(result);
    console.log("total:",total);

    return result;
}
// console.log("result outside:",result);
var sum = add(20,30);
console.log("sum:",sum);
console.log("result outside:",result);

