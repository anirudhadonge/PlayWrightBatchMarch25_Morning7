"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngStudent = exports.Student = void 0;
var Student = /** @class */ (function () {
    //division:string;
    function Student(name, rollNo) {
        this.division = 'mech';
        this.name = name;
        this.rollNo = rollNo;
    }
    Student.prototype.display = function () {
        console.log(this);
    };
    Object.defineProperty(Student.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
var EngStudent = /** @class */ (function (_super) {
    __extends(EngStudent, _super);
    function EngStudent(name, rollNo) {
        return _super.call(this, name, rollNo) || this;
    }
    EngStudent.prototype.displayName = function () {
        console.log(this.name);
    };
    return EngStudent;
}(Student));
exports.EngStudent = EngStudent;
var MechEngStudent = /** @class */ (function (_super) {
    __extends(MechEngStudent, _super);
    function MechEngStudent(name, rollNo) {
        return _super.call(this, name, rollNo) || this;
    }
    MechEngStudent.prototype.displayName = function () {
        console.log(this.name);
    };
    return MechEngStudent;
}(EngStudent));
var engStudent = new EngStudent('Anirudha', 7);
Student.property = 'static property';
EngStudent.property = 'Eng student Property';
console.log(Student.property);
console.log(EngStudent.property);
console.log(MechEngStudent.property);
engStudent.display();
