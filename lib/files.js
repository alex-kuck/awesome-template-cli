const path = require('path');
const fs = require('fs');
const glob = require('glob');

const getFilesInDirectoryMatching = ({
    match
}) => glob.sync(`**/*${match}`, {
    dot: true
});

const replaceFile = ({
    oldFile,
    newFile,
    content
}) => {
    console.log(`Saving file '${newFile}'`);
    fs.writeFileSync(newFile, content);
    console.log(`Deleting file '${oldFile}'`);
    fs.unlinkSync(oldFile);
}

module.exports = {
    getCurrentDirectory: () => path.basename(process.cwd()),
    getFilesInDirectoryMatching,
    replaceFile
};
