const Employee = require('./Employee');

class Intern extends Employee {   
    constructor (name, id, email, designation, school) { 
super (name, id, email, designation);    
    this.school = school;
    }
}
    module.exports = Intern;