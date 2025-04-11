/**
* Implements
* extends
* Visibility (Access Modifiers);
* public : ByDefault public
* protected: Properties, fields, method can be access subclasses
* private
* 
* Static property
*/
interface IStudent{
    name:string;
    rollNo:number;
    display():void
}

export class Student implements IStudent{
  
    readonly division: string ='mech';
    //division:string;
    constructor(name:string, rollNo:number){
        this.name= name;
        this.rollNo = rollNo
    }
    protected name: string;
    private rollNo: number;
    static property:string ;
    display(): void {
        console.log(this);
    }

    set setName(name:string){
        this.name = name;
    }

    get getName():string{
        return this.name;
    }
}

export class EngStudent extends Student{
    constructor(name:string,rollNo:number){
        super(name,rollNo);
    }

    displayName(){
        console.log(this.name);
    }
}

class MechEngStudent extends EngStudent{
    constructor(name:string,rollNo:number){
        super(name,rollNo);
    }

    displayName(){
        console.log(this.name);
    }
}
let engStudent = new EngStudent('Anirudha',7);
Student.property= 'static property'
EngStudent.property='Eng student Property'
console.log(Student.property);
console.log(EngStudent.property);
console.log(MechEngStudent.property);
engStudent.display();
