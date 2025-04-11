/**
 * Class is a template thourgh which we will be creating object.
 * 
 */
/**
 * construction : Initializing the object and It will allocate a space in the memory
 * Instance variables
 * Instance Methods
 * Getter and Setters
 * Class Variable
 * Static Methods
 * 
 */
/**
 * 1 same name as a class name--- not applicable in javascript
 * 2. Does not have a return type
 */
class Student{
   
    static division=1;
    constructor(name){
        this.name = name;
        console.log(this.name);
    }

    set setRollNumber(rollNumber){
        this.rollNumber = rollNumber;
    }

    get getRollNumber(){
        return this.rollNumber;
    }

    display(){
        console.log(`name:${this.name} and roll number is ${this.rollNumber}`);
    }

    static increment(){
        console.log(Student.division);
        Student.division++;
        console.log(Student.division);
    }

}

let student  = new Student('Anirudha');
// console.log(student.getRollNumber);
// student.setRollNumber = 7
// console.log(student.getRollNumber);
// student.display();
Student.increment();
let student1  = new Student('Basweshar');
Student.increment();
let student2 = new Student('Dnyaneshwari');
Student.increment();
console.log(Student.division)
