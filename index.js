//Npm fully installed 
//Inquirer installed 
//JEst installed
//Need to adjust modules to gitignore and package.json adjustments etc.
//application should use Jest (Links to an external site.) for running the unit tests
//Your challenge is to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
//Instead of readme you will use html and instead of yourself alone, you will make this for team
//Basic methodology is same as last assingment, you will use constructor parent object model and make inherited objects for common employee charateristics 
//you’ll also write unit tests for each part of your code and ensure that it passes all of them (JEst technique from Module)
//Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video and add it to the README of your project.
//add video to github and provide link in readme just like screenshot
//There is no starter code for this assignment, start from last week's assignment and make changes to it

const fs = require('fs');
const inquirer = require('inquirer');
const pageTemplate = require('./pageTemplate');
//check why this value is hidden one line above, pageTemplate 

// this will link the license badge page
//const licensePage = require('./utils/generateMarkdown.js');
// test

//Neil: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super


// test finish
// TODO: Create an array of questions for user input


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

     //THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

//data from inquirer to function class for each employee (Neil)

// you will link this to main function, and add protype/inheritence for intern and engineer and change display and values
//THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
          
//follow structure from previous assgn        
]).then(data =>  {
    console.log(data)
    let jobTitle = data.designation;
//Here you will insert a parent constructor function and assign values to it from data, link it to html div display so each time you make entry it will get displayed in seperate div

    function options (jobTitle){
      console.log(jobTitle);      
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
                    console.log(data);
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

                    //Here you will insert an inherited child function and assign values to it from data, link it to html div display so each time you make entry it will get displayed in seperate div

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
                    console.log(data);
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
              //Here you will insert an inherited child function and assign values to it from data, link it to html div display so each time you make entry it will get displayed in seperate div

                  })
                  
                } 
        // you can add .then from here if needed as above          
      else { 
        console.log("We are all done, thanks !!!")
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
  //.then(employeeData => {
   // return pageTemplate(employeeData);
 // })
 // .then(index => {
 //   return writeFile(index);
  //})
module.exports = questions;  














//Acceptance Criteria
//GIVEN a command-line application that accepts user input
//WHEN I am prompted for my team members and their information
//THEN an HTML file is generated that displays a nicely formatted team roster based on user input
//WHEN I click on an email address in the HTML
//THEN my default email program opens and populates the TO field of the email with the address

//HTML <a> tag provides you option to specify an email address to send an email. While using <a> tag as an email tag, you will use mailto: email address along with href attribute. Following is the syntax of using mailto instead of using http. This code will generate the following link which you can use to send email.
//https://stackoverflow.com/questions/34140776/properly-populate-an-email-using-only-html


//WHEN I click on the GitHub username
//THEN that GitHub profile opens in a new tab
//WHEN I start the application





//WHEN I enter the team manager’s name, employee ID, email address, and office number
//THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

//here

//WHEN I select the engineer option
//THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
//WHEN I select the intern option
//THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
//WHEN I decide to finish building my team
//THEN I exit the application, and the HTML is generated

//Directory structure
//__tests__/            // jest tests
//Employee.test.js
//Engineer.test.js
//Intern.test.js
//Manager.test.js
//dist/               // rendered output (HTML) and CSS style sheet
//lib/                // classes
//src/                // template helper code
//index.js            // runs the application


//The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.

//In addition to Employee's properties and methods, Manager will also have:

//officeNumber

//getRole() // Overridden to return 'Manager'

//In addition to Employee's properties and methods, Engineer will also have:

//github // GitHub username

//getGithub()

//getRole() // Overridden to return 'Engineer'

//In addition to Employee's properties and methods, Intern will also have:

//school

//getSchool()

//getRole() // Overridden to return 'Intern'

//Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.


//How to Submit the Challenge
//You are required to submit the following for review:

//A walkthrough video demonstrating the functionality of the application and passing tests.

//A sample HTML file generated using your application.

//The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.


//Hilary assignment:

//once select engineer, another set of questions when done will you like another or exit. Asking for schools instead be asking of GitHub, also video from Hilary has a sample 


