

// Print numbers 1 to 10 using a for loop
console.log("1.")
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//  Print only even numbers between 1 and 20
console.log("2.")
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Use a while loop to count down from 5 to 1
console.log("3.")
let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}

// Use a do...while loop to print "Hello!" 3 times
console.log("4.")
let n = 1;
do {
  console.log("Hello!");
  n++;
} while (n <= 3);
