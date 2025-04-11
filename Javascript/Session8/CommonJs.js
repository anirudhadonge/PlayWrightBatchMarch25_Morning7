/**
 * Exporting code from one file and import cod in other file
 * 1. commonjs : older version of Javascript we were using commonjs way of exporting and importing modules(class, function , variable)
 * 2. ESmodules
 *    a. Default export 
 *    b. Named export
 */
const {EngineeringStudent,Student,demo} = require('./Classess'); //CommonJs

let engStudent = new EngineeringStudent('name','Mechanical');
engStudent.setRollNumber = 7
engStudent.display();

let student = new Student('anirudha');
student.display();

demo();