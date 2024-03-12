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