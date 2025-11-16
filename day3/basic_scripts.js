var x = 5; //ES4
let y =10; //ES5+

console.log(x + y);

console.log("1" + "1");

let myName = "Aswini";

//myName = "Soorya"

console.log("My name is " + myName)

console.log(x * x);

console.log(x +  " Times "  + x + "=" + (x * x));

// BASICS


// DATA TYPES

//PRIMITIVE DATA TYPES
// Integer (2 billion positive, 2 billion negative)
// Decimals (Double, float)_ actuall programming code 
// Boolean (0,1)- 1 is true , 0 is false 

let distance = 5.5 
let goThere = true 

console.log(distance);
console.log(goThere);

console.log(typeof("distance"))

// NON-PRIMITIVE DATA TYPES
// Objects ( represented by {})
// Array ( represented by [])

//Array
let students = [ "celine ","Gina","Anith"];
console.log(students[1]);

//Object
let myDetails = {
    "name":" Aswini ",
    "age": "26",
    "city": "Penang",
    "students": students
}
console.log(myDetails["age"]); 

//Array inside object
console.log(myDetails.students[0])

let details = [
    {
        "name": "Paul",
        "age": "45",
        "city": "Penang",
    },
    {
        "name": "Aswini",
        "age": "26",
        "city": "Penang",
    },
    {
        "name": "Shan",
        "age": "32",
        "city": "Penang",
    },

]


