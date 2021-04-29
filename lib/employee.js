

class Employee {
constructor (name, designation, id, email, number, github, school)
{
this.name = name;
this.designation = designation;
this.id = id;
this.email = email;
this.number = number;
this.github = github;
this.school = school;
console.log(name);
}

Manager ()
{   this.name = name;
    this.designation = designation;
    this.id = id;
    this.email = email;
    this.number = number;
    }
Engineer ()
    {   this.name = name;
        this.designation = designation;
        this.id = id;
        this.email = email;
        this.github = github;
        }
Intern ()
{   this.name = name;
    this.designation = designation;
    this.id = id;
    this.email = email;
    this.school = school;
    }

};


    

module.exports = Employee;