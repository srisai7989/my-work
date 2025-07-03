console.log("1");
console.log("2");
console.log("3");
console.log("4");



setTimeout(()=>{
    console.log("Hello world ");
}, timeout = 5000); 

console.log("5");



setTimeout(() => {
    console.group("Hello, World! {Arrow function}"); 
}, 5000);

function sum(a, b) {
    console.log(a + b);
}

function calc(a, b, sumcallback) {
    sumcallback(a, b);
}

calc(5, 20, sum);
