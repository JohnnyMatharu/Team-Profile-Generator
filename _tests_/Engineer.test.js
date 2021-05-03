const Engineer = require('../lib/engineer.js');


test('checks Engineer as a protype and its objects', () => {
 let engineer = new Engineer("name",1,"jaani.matharu@gmail.com","JohnyMatharu");
    expect(engineer.name).toBe('name');
 
  });