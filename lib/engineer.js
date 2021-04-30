const Employee = require('./Employee');

class Engineer extends Employee {
constructor (name, id, email, designation, github) {
super (name, id, email, designation);    
this.github = github;
    }
}
    module.exports = Engineer;