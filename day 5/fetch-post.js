let promise= fetch("https://jsonplaceholder.typicode.com/posts/1");

console.log("Before promise");

promise
   .then(response => response.json())
   .then(post => {
     console.log(post.title)
     console.log(post.body)
   });

   console.log("After promise");