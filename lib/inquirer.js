const inquirer = require('inquirer');

const {
    backendChoices
} = require('./choices');

const askProjectName = () => inquirer.prompt([{
    name: 'projectName',
    type: 'input',
    message: 'Please enter the project name:',
    default: 'awesome-repo'
}]);

const askBackendType = () => inquirer.prompt([{
    name: 'backendType',
    type: 'list',
    choices: backendChoices
}]);

module.exports = {
    askProjectName,
    askBackendType
};
