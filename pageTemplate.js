const index = require('./employee');
//html structure 



// pending the user input from inquirer
// generate an html page
// fs.writefile creates new files for each run of the app


// in order to use write file to create an html
// we will need a string of data that represents the html file we want
// to generate

// for every instance of a new employee (for loop)
let numberEmployees = 5; 
let myVariable = `<h1>HelloWorld</h1>`
for (let i=0; i<numberEmployees; i++)
{
console.log(`<div class = "style">
${myVariable}
</div>`);
//add to variables
}
// we want to create new block of html for our eventual generated file
//fs.writefile ();
// take employee x's info and interpolate (template literals?) into a string
// pass the string into the writefile function 


`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${myVariable}
</body>
</html>`

// potential solution
// create a function that handles a specific array of data to create the file

module.exports = pageTemplate;