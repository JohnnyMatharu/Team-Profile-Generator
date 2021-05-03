const Employee = require('../lib/employee.js');


test('checks Employee as a constructor', () => {
 let employee = new Employee("name",1,"jaani.matharu@gmail.com");
    expect(employee.name).toBe('name');
 
  });
