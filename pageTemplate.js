

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
    <link
    rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
</head>
<body>
<div class = "section">
<div class = "frame">
<h1>${newManager.name}</h1>
<h3><i class="fas fa-tasks"></i>  Manager</h3>
<br>
<h5>ID: ${newManager.id}</h5>
<h5>Email: ${newManager.email}</h5>
<h5>Office number: ${newManager.number}</h5> 
</div>
</div>
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

