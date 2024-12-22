// function StudentInfo(name, studentNumber){
//     console.log("Old function style")
//     console.log("Name: ", name , "Student Number", studentNumber);
// }

// const StudentInfo1 =(name, studentNumber) => {
//     console.log("New function style -> arrow function")
//     console.log("Name: ", name , "Student Number", studentNumber);

// }
// let randomName= "Galvin"
// let studentNumber = 1804893

//  randomName="Sam"
//  studentNumber="11222"

//  StudentInfo(randomName, studentNumber )
//  StudentInfo1(randomName, studentNumber)

// StudentInfo("Galvin", 1804893)

// StudentInfo(randomName, studentNumber)

// learning to use modules
// const studentRecords = require("./studentinfo")

// console.log(studentRecords.getName())
// console.log(studentRecords.Location())
// console.log(studentRecords.db)
// console.log(studentRecords.gradesStudentGrade(30))

// const person=require("./person")
// const personOne = new person("Galvin", 27, "galvin@gmail")
// console.log(personOne.getPersonInfo())
os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
