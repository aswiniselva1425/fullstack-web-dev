// A fuction is a reusable block of code that yiy can represent with a name. 

x = 1

function addOne(){

    x += 1
}

addOne()
addOne()
addOne()
addOne()
addOne()

function addTwo(){
     x += 2
}

addTwo()
addTwo()

function convertXToPounds(){
    x = x * 2.2
}

convertXToPounds()

console.log(x)

// Arguments

let myHeight = 165
let friendHeight = 175

function cmToFeet(height){
    return height * 0.0328
}

// console.log(cmToFeet(myHeight));
// console.log(cmToFeet(friendHeight))

myHeightInFeet = cmToFeet(myHeight);

console.log(myHeightInFeet);

