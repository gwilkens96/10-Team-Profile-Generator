const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib/manager');
const manager = require('./lib/manager');

const team = [];

function initializeQuestions(){
    function generateManager() {
        inquirer
            .prompt(
                [
                    {
                      type: 'input',
                      name: 'managerName',
                      message: "What is the team manager's name?"
                  },
                  {
                      type: 'number',
                      name: 'managerId',
                      message: "What is the team manager's id?"
                  },
                  {
                      type: 'input',
                      name: 'managerEmail',
                      message: "What is the team manager's email address?"
                  },
                  {
                      type: 'number',
                      name: 'managerOffice',
                      message: "What is the team manager's office number?"
                  },
                ]).then(managerAnswers => {
                    const manager = new manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOffice);
                    team.push(manager);
                })

    };

              function teamBuild()
              {
                  inquirer.prompt(
                    [
                        {
                            type: 'list',
                            name: 'employeePositions',
                            message: 'Which employee would you like to add next?',
                            choices: ['Engineer', 'Intern', 'None'],
    
                        }  

                    ]
                ).then(teamAnswers =>{
                    if (teamAnswers.employeePositions === 'Engineer'){
                        //call engineer function
                    }
                    else if (teamAnswers.employeePositions === 'Intern'){
                        //call intern function
                    }
                    else 

                })
              };
                      
                  
                  
              {
                  type: 'input',
                  name: 'engineerGithub',
                  message: 'Please enter your GitHub username:',
                },
                {
                  type: 'input',
                  name: 'engineerEmail',
                  message: 'Please enter your email address:',
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: 'What school do you go to?',
                  },
                  {
                    type: 'input',
                    name: 'engineerName',
                    message: "What is the engineer's name?"
              },
              {
                  type: 'number',
                  name: 'engineerId',
                  message: "What is the engineer's id?"
              },
              {
                  type: 'input',
                  name: 'engineerEmail',
                  message: "What is the engineer's email address?",
              },
              {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?"
          },
          {
              type: 'number',
              name: 'internId',
              message: "What is the intern's id?"
          },
          {
              type: 'input',
              name: 'internEmail',
              message: "What is the intern's email address?",
          }
            ]
        )
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err){
            return console.log(err);
        }
        console.log('Profile successfully generated!');
        });
    }

function init() {
    inquirer.prompt(questions).then((answers) => {
        const profileContent = generateProfile(answers);
        console.log(profileContent);
    fs.appendFile('index.html', profileContent);
      });
}

init();