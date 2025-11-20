// Create an array of 5 of your favorite movies.

// Log the first and last movie.

// Use push() to add one, and pop() to remove one.

// Create an object profile with your name, age, and an array of 3 hobbies.

// Log your second hobby.



let movies = ["How To Train Your Dragon", "Age of Adeline" , "The Divergent", "The Imitation Game", "The Virgin River"]

console.log( movies[0])
console.log( movies[4])

movies.push(" A new hope");
console.log(movies)

movies.pop()
console.log(movies)


let profile = {
    name: "Aswini",
    age: "26",
    hobbies: [
        "tennis",
        "running",
        "shopping"
    ]
}
console.log(profile.hobbies[1])