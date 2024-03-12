/*
    @callback
*/ 

getStudents(1,(student) => {
    console.log("Student data",student);
})

function getStudents(){
    setTimeout(() => {
        console.log('Getting data from DB.....');
        callback({name:'John',id:id})
    },2000)
}
getStudents()


/** 
 * Callback
 * Hell
 * 
*/

console.log("First-line");
getStudent(1, displayStudent);
console.log("Last-line");
// Defining Callback functions
function displayStudent(student) {
    console.log("Student", student);
    getSubjects(student.id, displaySubjects);
}
function displaySubjects(subjects) {
    console.log(subjects);
    getMarks(subjects[0], displayMarks);
}
function displayMarks(mark) {
    console.log("Mark", mark);
}
// Our Main functions
function getStudent(id, callback) {
    setTimeout(() => {
    console.log("Getting data from Database");
    callback({ name: "Bob", id: id });
}, 2000);
}
function getSubjects(id, callback) {
    setTimeout(() => {
    console.log("Getting subject of student", id);
    callback(["Maths", "Science", "Computer"]);
}, 2000);
}
function getMarks(subject, callback) {
    setTimeout(() => {
    console.log("Getting marks of", subject);
    callback(80);
}, 2000);
}