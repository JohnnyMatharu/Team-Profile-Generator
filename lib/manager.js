const Employee = require('./Employee');

class Manager extends Employee {   
    constructor (name, id, email, number){
        super (name, id, email); 
    this.number = number;
   // this.getName = function ()  {return this.name};    
}
    
}
//console.log(getName());
module.exports = Manager;

/*
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {return this.firstName + " " + this.lastName;};
  }
https://www.w3schools.com/js/js_object_constructors.asp
  */