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

/**
 * Promises
 */

const promise = new Promise((resolve,reject) => {
    //Async code
    setTimeout(() => {
        //getting data from db
        const student = {id:1, name:'John'};
        resolve(student)//resolve for fulfil
            reject(new Error('Student not found'))//reject for error
    },2000)
})

//consuming promise
promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

//promise
const promise = getStudent(1)
    
promise
    .then((studet) => getSubjects(studet.id))
    .then((subjects) => getMarks(subjects[0]))
    .then((mark) => console.log(mark))
    .catch((error) => console.log(error))

function getStudent(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
                console.log('Getting data from db');
                resolve({name:'John',id:id})
        },5000)
    })
}

function getSubjects(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
                console.log('Getting data from db');
                resolve(["Math","English"])
        },3000)
    })
}

function getMarks(subject){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Getting marks of',subject)
            resolve(80)
        },1500)
    })
}