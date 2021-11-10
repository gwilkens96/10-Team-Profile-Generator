const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const path = require("path");

const team = [];
const idArray =[];

function initializeQuestions() {
    function generateManager() {
        inquirer.prompt(
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
                    idArray.push(answers.managerId);
                    teamBuild();
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
                            choices: ['Engineer', 'Intern', 'No more team members'],
    
                        }  

                    ]
                ).then(addTeammember => {
                    switch (addTeammember.memberChoice) {
                      case "Engineer":
                        generateEngineer();
                        break;
                      case "Intern":
                        generateIntern();
                        break;
                      default:
                        buildTeam();
                    }
                  });
                }
                        //call engineer function
                        function generateEngineer() {
                            inquirer.prompt(
                                    [
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
                                          message: "What is the engineer's email address?"
                                      },
                                      {
                                          type: 'number',
                                          name: 'engineerGithub',
                                          message: "What is the engineer's github account?"
                                      },
                                    ]).then(engineerAnswers => {
                                        const engineer = new engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub);
                                        team.push(engineer);
                                        teamBuild();
                                    })
                    
                        };
                            //call intern function
                            function generateIntern() {
                                inquirer.prompt(
                                [
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
                                        message: "What is the intern's email address?"
                                    },
                                    {
                                        type: 'input',
                                        name: 'internSchool',
                                        message: 'What school does the intern attend?',
                                      },

                                ]).then(internAnswers => {
                                    const intern = new intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.internSchool);
                                    team.push(intern);
                                    teamBuild();
                                });
                
                    }

                    function buildTeam() {
                        // Writes to the index.html
                        fs.appendFile(index.html, team, function (err) {
                            if (err) throw err;
                            console.log('Team Generated!');
                          });
                      generateManager();

                        }

};

initializeQuestions();