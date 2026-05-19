// alert('this is from external javascript file')
const siteName = "DCS News";
console.log(siteName);
let name = "Sok San";
var age = 30;
console.log(name,age);
console.log("=================Array===============");

let students = ["Bopha","Samnang", "Kosal","San"]
students.push("Vichea");
console.log(students);
// students.pop();
students.unshift("Vichea1");
// students.shift();
console.log(students);
console.log(students.indexOf("Kosal"));
let student2 = ["A", "B", "C"];
const allStudent = [...students,...student2]
console.log(allStudent);

console.log("=================loop===============");
for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}

filteredStudents = students.filter(item=>item.startsWith("S"));
console.log(filteredStudents);

const numbers = [1,2,3,4,5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

console.log("=================Object===============");
const student = {
    name:"Sok San",
    group: "AS1",
    age: 25,
    enrolledCourses:[
        {
            name: "Math",
            code: "s001"
        },
        {
            name: "Science",
            code: "s002"
        },
        {
            name: "History",
            code: "s003"
        }
    ]
}
// accessing object properties
console.log(student.age);
// destructuring
const {name:studentName, group,age:studentAge, enrolledCourses:courses} = student;
console.log(studentName, group, studentAge, courses);

for(let i =0; i <courses.length; i++){
    console.log(courses[i].name);
}
