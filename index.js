const inquirer = require('inquirer');
const fs = require('fs');
const generateProfile = require('./generateProfile.js');

const questions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the employee's name?"
  },
  {
      type: 'number',
      name: 'id',
      message: 'What is the employee id?'
  },
  {
      type: 'input',
      name: 'email',
      message: 'What is the employee email address?'
  },
  {
      type: 'number',
      name: 'officeNumber',
      message: 'What is the employee office number?'
  },
  {
      type: 'confirm',
      name: 'managerConfirm',
      message: 'Do you want to add another employee?'
  },
  {
      type: 'list',
      name: 'positions',
      message: 'Who would you like to add?',
      choices: ['Engineer', 'Intern', 'None']
  },
  {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do you go to?',
      },

];