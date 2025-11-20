let students = [
    {
        name: "Paul",
        age:17,
        isEnrolled: true
    },
    {
        name: "Chris",
        age: 18,
        isEnrolled: true
    },
    {
        name: "Jack",
        age: 19,
        isEnrolled: false
    }
]


// students.forEach(function(student){
//console.log(student.name;
//})

students.forEach((student) => {
    if(student.isEnrolled){
        console.log(student.name);
        }

})

students.push({
    name: "rose",
    age: 19,
    isEnrolled: true

})
students.pop();