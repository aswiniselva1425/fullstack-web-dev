//fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(response => response.json())
//   .then(data => console.log(data));
 
let promise = fetch("https://jsonplaceholder.typicode.com/users")
 
console.log("Before promise");

// let promise = fetch("https://jsonplaceholder.typicode.com/users/1").then(response => response.json()) ;  (this could be one way )
 

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//    .then(response => response.json()) // parse JSON from response
//    .then(data => {
//      console.log(data);
//    });

// promise
// .then(response =>response.json()) 
//  .then(response => {
// console.log("Response received:", response);
//  });

//  fetch("https://jsonplaceholder.typicode.com/users")
//    .then(res => res.json())
//    .then(users => {
//      users.forEach(user => {
//        console.log(`${user.name} (${user.email})`);
//      });
//    });

   
   promise
   .then(res => res.json())
   .then(users => {
     users.forEach(user => {
       console.log(`${user.name} (${user.email})`);
     });
   });

   console.log("After promise");