import React from 'react';

const Person = (props) => {
    const {name, age, gender } = props;
    return (
        <div>
            <h2>Name : {name}</h2>
            <h3>Age : {age}</h3>
            <h4>Gender : {gender}</h4>
        </div>
    );
};

export default Person;

//Class declaration
class Student {
    constructor(name,rollNumber){
      this.name = name;
      this.rollNumber = rollNumber;
    }
    
    display(){
      return `Name : ${this.name} and Roll Number: ${this.rollNumber}`;
    }
}

// Class object
const stu1 = new Student('Lalu',1234);
const stu2 = new Student('Rohan',5478)

console.log(stu1.display());
console.log(stu2.display());

//Inheritance

class newStudent extends Student{}

const stu = new newStudent('Raman',123456);
console.log(stu.display());


//Add all the elements in ‘newItems’ at the beginning of items in a.
const newItems = [10, 20, 30];
const a = {
    name: 'test', 
    items: [...newItems,1, 2, 3, 4] 
};
console.log(a.items);

//method to take an array
const arr = (args) => {
    const arrCopy = [...args];
    console.log(arrCopy);
}

arr([1,2,3,4,5]);