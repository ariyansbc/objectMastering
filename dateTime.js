
const start = new Date();

let sum = 0;
let total = 0;
for(let i = 0 ; i < 1000000000 ; i++) {
    sum++;
}
for(let i = 0 ; i < 200000000 ; i++) {
    total++;
}
const end = new Date();

const timeDiff = end - start;
console.log("start:",start);
console.log("end:",end);
console.log(timeDiff);
console.log(sum);

// console.log(date);