// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {  
        //   project title is entered first and is required - shown as ${data.title} in generateMarkdown file
        type: 'input',
        name: 'title',
        message: 'Hello! Please enter your project name. (Required)', 
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log("Please enter the title to your project!");
                return false;
            }
            }
        },
        {
            // description of project is entered and is required - shown as ${data.description} in generateMarkdown file
            type: 'input',
            name: 'description',
            message: 'Now, can you please a provide a description of your project? (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter a description for your project!");
                    return false;
                }
            }
        }
    },
        // table of contents is implemented already, presents data of added information and takes you to link with respective content - does not require data attachment (see generateMarkdown js file)
    {
        // installation of project - how would you install this project? description is required. ${data.installation} in generateMarkdown file
        type: 'input',
        name: 'installation',
        message: 'How would you install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter the instructions on how you would install your project.");
                return false;
            }
        }
    },
    {
        // usage of project - basically, how do you use the project you created? Required input - ${data.usage} in generateMarkdown file 
        type: 'input',
        name: 'usage',
        message: 'How do you use your project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true; 
            } else {
                console.log("Please enter the instructions on how you use the project.");
                return false; 
            }
        }
    },
    {
          //contributions - how would you want contributors on this project? Required input - ${data.contributions} on generateMarkdown file
          type: 'input',
          name: 'contributions',
          message: 'List whether you want other users to contribute on this project. (Required)',
          validate: contributionInput => {
              if (contributionInput) {
                  return true;
              } else {
                  console.log("Please enter the instructions on how you would want contributions on this project.");
                  return false;
              }
          }
        },
        {
            //testing - how would you test your project? Required input - ${data.test} on generateMarkdown file
            type: 'input',
            name: 'test',
            message: 'How do you test your project? (Required)',
            validate: testInput => {
                if (testInput){
                    return true;
                } else {
                    console.log("Please enter the instructions on how you would test your project.");
                    return false;
                }
            }
        },