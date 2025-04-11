"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Classes_1 = require("./Classes");
/**
 *
 * its a way to write a reusable, flexible and type-safe code.
 */
function displayType(variable) {
    console.log(typeof (variable));
    console.log(variable);
}
var student = new Classes_1.Student('anirudha', 7);
displayType('This my string');
displayType(10);
displayType(student);
var constants;
(function (constants) {
    constants["Anirudha"] = "anirudha";
    constants["myString"] = "This my string is new string";
})(constants || (constants = {}));
displayType(constants.myString);
displayType(constants.myString);
