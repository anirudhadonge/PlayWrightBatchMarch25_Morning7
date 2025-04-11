/**
 * ES Modules
 *  default export
 *    import the exported module with any name that you like, 
 *    import the module with {}
 *    a file can have only one default export.
 *  named export
 *    import the module with the same name with which it has been expored
 *    import the module inside the {}
 *    you can have multiple export in a file.
 */
import EngStudent ,{ demo ,Student } from "./Classess.js";


let engStudent = new EngStudent('name','Mechanical');
engStudent.setRollNumber = 7
engStudent.display();

let student = new Student('anirudha');
student.display();

demo();