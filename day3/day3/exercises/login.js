// Declare a variable username and set it to "admin"
//Declare a variable isLoggedIn set to true or false
//Write logic:
//If isLoggedIn and username is "admin", print: "Welcome back, Admin!"
//Else if isLoggedIn but not "admin", print: "Welcome, user."
//Else print: "Please log in."


// Declare variables
let username = "admin";
let isLoggedIn = true;

// Logic to check conditions
if (isLoggedIn && username === "admin") {
  console.log("Welcome back, Admin!");
} else if (isLoggedIn && username !== "admin") {
  console.log("Welcome, user.");
} else {
  console.log("Please log in.");
}

// ternary operator
let message = isLoggedIn? username === "admin"?  "welcome back, Admin!" : "welcome user." : "Please log in" 

console.log(message);