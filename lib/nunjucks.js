const nunjucks = require('nunjucks');

nunjucks.configure({
    autoescape: true,
});

const renderFile = ({
    templateFile,
    templateVariables
}) => nunjucks.render(templateFile, templateVariables);

module.exports = {
    renderFile
}
