const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (fileName, content) => {
  fs.writefile( '${fileName}', '${content}', error => {
    if(error) throw error;
    console.log(`File ${fileName} saved`);
  }
)};

module.exports.mkdir = (path) => {
  fs.mkdir('${path}', (error) => {
    if (error) throw error;
    console.log(`Folder made with path of ${path}`);
  }
)};
