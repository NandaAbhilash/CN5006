class Student{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
    }

    getPersonInfo(){
        return `Name ${this.name}, Age: ${this.age}, Email: ${this.email}` // use `` bc we want variables called inside return
    }

}
module.exports= Student;