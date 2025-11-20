// 1. Function that prints a greeting
function greet() {
  console.log("Hello, " + "soorya" + "!");
}

// 2. Function that converts Fahrenheit to Celsius
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// 3. Function that returns true if age is 18 or older
function isAdult(age) {
  return age >= 18;
}

// 4. Function that returns a random number between min and max
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

// Example usage:
greet("Soorya");              // Output: Hello, Soorya!
console.log(toCelsius(100));  // Output: 37.777...
console.log(isAdult(26));     // Output: true
console.log(randomBetween(1, 10)); // Output: random number between 1 and 10


// // 1. Arrow function that prints a greeting
// const greet = (name) => console.log(`Hello, ${name}!`);

// // 2. Arrow function that converts Fahrenheit to Celsius
// const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

// // 3. Arrow function that returns true if age ≥ 18
// const isAdult = (age) => age >= 18;

// // 4. Arrow function that returns a random number between min and max
// const randomBetween = (min, max) => Math.random() * (max - min) + min;

// // Example usage:
// greet("Soorya");                // Output: Hello, Soorya!
// console.log(toCelsius(100));    // Output: 37.777...
// console.log(isAdult(17));       // Output: false
// console.log(randomBetween(1, 10)); // Output: random number between 1 and 10
