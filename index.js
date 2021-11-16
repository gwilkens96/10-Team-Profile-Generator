const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require('./profile-template.js');

const team = [];

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
                    const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOffice);
                    team.push(manager);
                    teamBuild();
                });

    }

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
                ).then(addTeamMember => {
                    switch (addTeamMember.employeePositions) {
                      case "Engineer":
                        generateEngineer();
                        break;
                      case "Intern":
                        generateIntern();
                        break;
                      default:
                        teamFinish();
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
                                          type: 'input',
                                          name: 'engineerGithub',
                                          message: "What is the engineer's github account?"
                                      },
                                    ]).then(engineerAnswers => {
                                        const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub);
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
                                    const intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.internSchool);
                                    team.push(intern);
                                    teamBuild();
                                });
                
                    }
                    
                    function teamFinish() {
                        fs.mkdirSync(OUTPUT_DIR);
                        fs.writeFileSync(outputPath, render(team), "utf-8");
                    }

                    generateManager();

                    }

initializeQuestions();