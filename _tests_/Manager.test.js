const Manager = require('../lib/manager.js');


test('checks Manager as a protype and its objects', () => {
 let manager = new Manager("name",1,"jaani.matharu@gmail.com","9292934");
    expect(Manager.name).toBe('Manager');
 
  });