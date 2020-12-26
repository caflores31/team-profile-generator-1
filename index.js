const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js')
const allEmployees = [];

const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What is the employee\'s role?',
        choices: // function to allow only one manager to be created
            () => {
            if (allEmployees.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']    
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        }
    },
    {
        type: 'input',
        name: 'firstName',
        message: 'What is the employee\'s first name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the first name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'What is the employee\'s last name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the last name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee\'s ID number?',
        validate: idInput => {
            if (!isNaN(parseInt(idInput))) {
                return true;
            } else {
                console.log('Please enter a valid ID number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?',
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        },
        validate: officeNumberInput => {
            if (!isNaN(parseInt(officeNumberInput))) {
                return true;
            } else {
                console.log('Please enter a valid number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s GitHub username?',
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        },
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: `What school does the intern go to?`,
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter a school name!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add another employee?',
        default: true
    }
]

const promptUser = () => {

    return inquirer.prompt(questions)
    .then(userResponse => {

        // adds to employee data array
        allEmployees.push(userResponse);

        // adds another employee based on user selection
        if (userResponse.addEmployee) {
            return promptUser();
        } else {
            return allEmployees;
        };
    });
};

const writePage = (htmlContent) => {
    fs.writeFile('./dist/index.html', htmlContent, err => {
        if (err) {
            throw err
        };
        console.log('Page created successfully!');
    });
};

console.log(`
Welcome to the Team Profile Generator!  Let's add some employees!
`);

promptUser()
    .then(data => generatePage(data))
    .then(generatedHtml => writePage(generatedHtml))
    .catch(err => console.log(err));