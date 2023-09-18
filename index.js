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
    