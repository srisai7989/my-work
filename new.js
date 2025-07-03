//primitive data types in javascript
//staring
let name = "jay";
//number
let age = 21;
//boolean
let isStudent = true;
//null
let height = "null";
//undefined
let weight;
//symbol:::symbol("unique")
let symbol = Symbol("unique");
//bigint
let bigIntValue = BigInt(438377385735853727643755347746758345847585);
//objects
let person = {
    name: "jay",
    age: 21,
    isStudent: true,
    height: null,
    weight: undefined,
    symbol: Symbol("unique")
}
let a = 10;
let b = 20;
let i = 11;
let h = 1;
let k = 1;
let d = 1;
let f = 2;
let l = 3;
let g = 4;
let x = 2,
    y = 5,
    z = 1;

let sumAdd = a + b;
let sumMul = a * b;
let sumDiv = a / b;
let sumsub = a - b;
let sumsud = a--;
let sumsut = i++ + ++i - ++i - --i;
let sumsue = h++ + ++h * h++;
let sumsuf = k-- + ++k * k++ + --k;
let sumsug = d++ + d++ + ++d + ++f;
let sumsur = ++l + g++ + l++ + ++g + l;
let sumsui = x++ + ++y + z++ + x + ++z + y++ + x++ + z
console.log(sumAdd);
console.log(sumMul);
console.log(sumDiv);
console.log(sumsub);
console.log(sumsud);
console.log(sumsut);
console.log(sumsue);
console.log(sumsuf);
console.log(a++);
console.log(++a);
console.log(sumsug);
console.log(sumsur);
console.log(sumsui);