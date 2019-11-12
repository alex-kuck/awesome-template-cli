const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const github = require('./lib/github');
const inquirer = require('./lib/inquirer');
const nunjucks = require('./lib/nunjucks');
const {
    backendTypes
} = require('./lib/types');

clear();

console.log(
    chalk.yellow(
        figlet.textSync('Awesome Template CLI', {
            horizontalLayout: 'full'
        })
    )
);

console.log(
    chalk.red(
        files.getCurrentDirectory()
    )
);

async function run() {
    const {
        projectName
    } = await inquirer.askProjectName();

    const {
        backendType
    } = await inquirer.askBackendType();

    switch (backendType) {
        case backendTypes.SPRING_BOOT:
            console.log('Selected Spring Boot backend');
            break;
        default:
            console.log(`No matching backendType for ${backendType}`);
    }

    const spawnRef = github.cloneTemplateRepo(projectName);
    spawnRef.on('data', data => {
        console.log('Success', data);

    });
    spawnRef.on('error', error => {
        console.error(error);
    });
    spawnRef.on('close', () => {
        const nunjucksFiles = files.getFilesInDirectoryMatching({
            folder: projectName,
            match: '.njk'
        });
        console.log(nunjucksFiles);

        nunjucksFiles.forEach(file => {
            const rendered = nunjucks.renderFile({
                templateFile: file,
                templateVariables: {
                    project_name: projectName
                }
            });
            console.log(rendered);
            files.replaceFile({
                oldFile: file,
                newFile: file.replace('.njk', ''),
                content: rendered
            });
        });

    })
}

run();
