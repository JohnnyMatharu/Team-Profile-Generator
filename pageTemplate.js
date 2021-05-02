

// fs.writefile creates new files for each run of the app
// for every instance of a new employee (for loop)
const pageTemplate = newManager => {
console.log("this the checked***")

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>${newManager.name}</h>
<br>
<h1>${newManager.designation}</h1>
<br>
<h1>${newManager.id}</h1>
<br>
<h1>${newManager.email}</h>
<br>
<h1>${newManager.number}</h1> 
</body>
</html>` 
}

module.exports = pageTemplate;

/*
let numberEmployees = 5; 
// for every instance of a new employee (for loop)
let myVariable = <h1>HelloWorld</h1>`
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
*/

