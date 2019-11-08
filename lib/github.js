const {
    spawn
} = require('child_process');

const repoUrl = 'git@github.com:alex-kuck/awesome-template-repo.git';
const command = 'git';
const commandArgs = [
    'clone',
    repoUrl
];

module.exports = {
    cloneTemplateRepo: (projectName) => spawn(command, [...commandArgs, projectName])
};
