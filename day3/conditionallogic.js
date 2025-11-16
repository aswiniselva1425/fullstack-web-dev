let x = 500
//let x = "7" this is a string

console.log(x > 5);
console.log(x === 7);
console.log(x == 5);

// == checks value only
// ===Checks both value and data type

// >, < Larger than, smaller than
// >=, <= Larger than or equals to, smaller than or equals to

// OPERATORS

// COMPARISON OPERATORS

if(x > 5 ){
    console.log("x is larger than 5")
}else{
    console.log("x is not larger than 5")
}

if(x>700){
    console.log("x is larger than 700");
}else if(x > 400){
    console.log("x is smaller than 700 but larger than 400");
}else{
    console.log("x is smaller than 400");
}

//LOGIC GATES

//&& AND gate
// || OR gate
// ! NOT

age = 10;
weight = 70;

if(age < 15 && weight > 50){
    console.log("Overweight for this age")
}else{
    console.log("not overweight")
}

let money =true
let vip = false

if (money || vip){
    console.log("Allowed entry")
}else{
    console.log("Denied entry")
}

let y= 9

if(!(y >8)){
    console.log("y is not larger than 8")
}else{
    console.log("y is larger than 8")
}