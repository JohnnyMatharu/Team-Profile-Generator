




 
function choice (team1, team2, team3)
{
var final = ``;

for (var i=1; i<team1.length; i++) 
    {
        final+=`
        <div class = "frame">
        <h1>${team1[i].name}</h1>
        <h3><i class="fas fa-tasks"></i>  Manager</h3>
        <br>
        <h5>ID: ${team1[i].id}</h5>
        <h5>Email: ${team1[i].email}</h5>
        <h5>Office number: ${team1[i].number}</h5> 
        </div>`

    }

    
    for (var s=1; s<team2.length; s++) 
     {
       final+=`<div class = "frame">
    <h1>${team2[s].name}</h1>
    <h3><i class="fas fa-tools"></i>  Engineer</h3>
    <br>
    <h5>ID: ${team2[s].id}</h5>
    <h5>Email: ${team2[s].email}</h5>
    <h5>Github: ${team2[s].github}</h5> 
    </div>`
     }
    
  
    for (var x=1; x<team3.length; x++) 
     {
    final+=`<div class = "frame">
    <h1>${team3[x].name}</h1>
    <h3><i class="fas fa-user-graduate"></i>  Intern</h3>
    <br>
    <h5>ID: ${team3[x].id}</h5>
    <h5>Email: ${team3[x].email}</h5>
    <h5>School: ${team3[x].school}</h5> 
    </div>`
     }
    
return final;
    }


const pageTemplate = (team1,team2, team3) => {
console.log(team1[0].name, "this the checked***" );

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
${choice(team1, team2, team3)}
</div>
</body>
</html>` 
}

module.exports = pageTemplate;













