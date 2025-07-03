a = 5;
b = 6;
console.log("Strict equal:", a === b); //it is checking for datatype
console.log("loose equal:", a == b);
console.log("AND:", a && b);
console.log("Not equal:", a != b);
console.log("Strict not equal:", a !== b);
console.log("graterthen:", a > b);
console.log("lessthen:", a < b);
console.log("OR:", a || b);
let age = 18;
let canVote = (age >= 18) ? "you can vote." :
    "you cannot vote.";
console.log("\n Ternary Operator:");
console.log("Result:", canVote);
console.log("\nTypeof operator:")
console.log("\ntype of a:", typeof a);
console.log("\ntype of b:", typeof b);
console.log("\ntype of x:", typeof x);
console.log("\ntype of y:", typeof y);
console.log("type of canVote:", typeof canVote);
let num = 10;
if (num > 5) {
    console.log("Greater");
} else if (num > 10) {
    console.log("Less");
} else {
    console.log("num");
}
let j = 0; //while loop
while (j < 5) {
    console.log("while loop Iteration", j);
    j++;
}
//do while loop
let k = 0;
do {
    console.log("do while loop Iteration", k);
    k++;
} while (k < 5);
for (let i = 0; i < 5; i++) {
    console.log(i);
}
let value = 2;

switch (value) {
    case 0:
        console.log("Value is 0");
        break;
    case 1:
        console.log("Value is 1");
        break;
    case 2:
        console.log("Value is 2");
        break;
    default:
        console.log("something else");
}