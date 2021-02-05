
function showValue(a) {
    const len = a.length;
    let i = 0;
    if(len==0) {
        console.log("empty array");
    } else {
        do { 
            console.log(a[i]);
        } while( ++i < len)
    }
}
showValue([20,30,15,34,63,44,50,55,60,12,33]);