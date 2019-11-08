const inquirer = require('inquirer');

const askProjectName = () => inquirer.prompt([{
    name: 'projectName',
    type: 'input',
    message: 'Please enter the project name:',
    default: 'awesome-repo'
}]);

module.exports = {
    askProjectName
};
