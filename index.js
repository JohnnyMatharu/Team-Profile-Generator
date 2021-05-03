


const fs = require('fs');
const inquirer = require('inquirer');
//const pageTemplate = require('./pageTemplate');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const pageTemplate = require('./pageTemplate');
//test
//const testpageTemplate = require('./testpageTemplate');
let team1 = ["Manager"];
let team2 = ["Engineer"];
let team3 = ["Intern"];



const questions = () => {

  inquirer.prompt(
  [{
      //THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
      // this needs to be fixed to change title of readme.md -check
      type: "input",
      name: "name",
      message: "What is the name of the manager?"
    },  
    
    {
        type: "input",
        name: "id",
        message: "What is the employee ID of the manager?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address of the manager?"
        },
        {
            type: "input",
            name: "number",
            message: "What is the office number of the manager?"
          },
 { 
     type: "list",
     name: "designation",
     message: "Would you like to add an engineer or an intern to finish building the team(Press <enter> to select)",
     choices: ["Engineer", "Intern", "I am done adding team members"]     
        //icon will display along with designation         
     }

    
          
//follow structure from previous assgn        
]).then(data =>  {
  let newManager = new Manager(data.name, data.id, data.email, data.number);
  console.log(newManager);
  team1.push(newManager);
console.log(team1);

    let jobTitle = data.designation;
//Here you will insert a parent constructor function and assign values to it from data, link it to html div display so each time you make entry it will get displayed in seperate div

    function options (jobTitle){
  //    console.log(jobTitle);      
      if (jobTitle === "Engineer") 
        {
          inquirer.prompt(
            [{
                type: "input",
                name: "name",
                message: "What is the name of the engineer?"
              },  
              
              {
                  type: "input",
                  name: "id",
                  message: "What is the employee ID of the engineer?"
                },
                {
                  type: "input",
                  name: "email",
                  message: "What is the email address of the engineer?"
                  },
                  {
                      type: "input",
                      name: "github",
                      message: "What is the Github username of the engineer?"
                    },
                    { 
                      type: "list",
                      name: "continueTitle",
                      message: "Would you like to continue to add an engineer or an intern to finish building the team(Press <enter> to select)",
                      choices: ["Engineer", "Intern", "I am done adding team members"]     
                         //icon will display along with designation         
                      }


                  ]).then(data =>  {
                    console.log(data.continueTitle);
                  let newEngineer = new Engineer(data.name, data.id, data.email, data.github);
                    team2.push(newEngineer);
                   
                   

                    jobTitle = data.continueTitle;
                    //Here you will insert a parent constructor function and assign values to it from data, link it to html div display so each time you make entry it will get displayed in seperate div     
                          if (jobTitle === "Engineer")
                          { 
                            options(jobTitle);
                          } 
                          else if (jobTitle === "Intern")
                          { 
                            options(jobTitle);
                          }
                          else {
                            console.log("We are all done, thanks !!!")
                          return 
                          };

                  })
                } 
                  //this could extend with .then as above for manager 
        else if (jobTitle === "Intern"){
          inquirer.prompt(
            [{
                type: "input",
                name: "name",
                message: "What is the name of the intern?"
              },  
              
              {
                  type: "input",
                  name: "id",
                  message: "What is the employee ID of the intern?"
                },
                {
                  type: "input",
                  name: "email",
                  message: "What is the email address of the intern?"
                  },
                  {
                      type: "input",
                      name: "school",
                      message: "What is the name of the school for intern?" 
                    },
                    { 
                      type: "list",
                      name: "continueTitle",
                      message: "Would you like to continue to add an engineer or an intern to finish building the team(Press <enter> to select)",
                      choices: ["Engineer", "Intern", "I am done adding team members"]     
                         //icon will display along with designation         
                      }

                  ]).then(data =>  {
                    let newIntern = new Intern(data.name, data.id, data.email, data.school);
                    team3.push(newIntern);
                   


                    jobTitle = data.continueTitle;
                    //Here you will insert a parent constructor function and assign values to it from data, link it to html div display so each time you make entry it will get displayed in seperate div     
                          if (jobTitle === "Engineer")
                          { 
                            options(jobTitle);
                          } 
                          else if (jobTitle === "Intern")
                          { 
                            options(jobTitle);
                          }
                          else {
                            console.log("We are all done, thanks !!!")
                            console.log(team1, team2, team3);

//you will have to use data both places here
 console.log(pageTemplate(team1, team2, team3));
const writeFile = () => {
  return fs.writeFile('index.html', pageTemplate(team1, team2, team3), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 

  };
  writeFile(); 


                          return 
                          };
             
                  })
                  
                } 
        // you can add .then from here if needed as above          
      else { 
        console.log("We are all done, thanks !!!")
        console.log(team1, team2, team3);
//you will have to use data both places here
console.log(pageTemplate(team1));
const writeFile = () => {
  return fs.writeFile('index.html', pageTemplate(team1, team2, team3), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 

  };
  writeFile(); 
        return 

      }
      
      
      }
                //the above curly bracket belongs to function options ending 
        options(jobTitle);
        
  //the following two are ending for .then function  
  }) 
  

};
// the above yellow bracket is end of function questions 

questions();




//HTML <a> tag provides you option to specify an email address to send an email. While using <a> tag as an email tag, you will use mailto: email address along with href attribute. Following is the syntax of using mailto instead of using http. This code will generate the following link which you can use to send email.
//https://stackoverflow.com/questions/34140776/properly-populate-an-email-using-only-html


//WHEN I click on the GitHub username
//THEN that GitHub profile opens in a new tab
//WHEN I start the application




//create array to hold all team members
//create classes 
//push in team array
//after we have full array 
//send all info to page template
//seperate data by role in page template, sep arrays or data filter
//3 seperate templates 
//html array and templates will be pushed according to data and those many times as we have them
//writefile to index.html 

//filer or map can be used once you are on the pageTemplate
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter (edited) 
//developer.mozilla.orgdeveloper.mozilla.org
//Array.prototype.filter() - JavaScript | MDN
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//4:46
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map (edited) 
//developer.mozilla.orgdeveloper.mozilla.org
//Array.prototype.map() - JavaScript | MDN
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.























