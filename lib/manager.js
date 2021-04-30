const Employee = require('./Employee');

class Manager extends Employee {   
    constructor (name, id, email, designation, number){
        super (name, id, email, designation); 
    this.number = number;
    }
}
module.exports = Manager;