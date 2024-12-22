const dateOfBirth ="04/06/2007"

const getStudentName= () =>{
    return"Nanda"
}
const getCampusName =() =>{
    return"Docklands"
}
exports.getName=getStudentName
exports.Location=getCampusName
exports.db=dateOfBirth

exports.gradesStudentGrade=(marks)=>
    {
        if (marks < 50 && marks<70){
            return "B grade"
        }
        else{
            return"A grade"
        }

    }