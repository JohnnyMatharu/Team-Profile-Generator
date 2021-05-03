const Intern = require('../lib/intern.js');


test('checks Intern as a protype and its objects', () => {
 let intern = new Intern("name",1,"jaani.matharu@gmail.com","University of Toronto");
    expect(intern.name).toBe('name');
 
  });