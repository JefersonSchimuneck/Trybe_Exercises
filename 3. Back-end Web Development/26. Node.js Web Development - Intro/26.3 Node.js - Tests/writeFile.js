const fs = require('fs');

module.exports = (fileName, fileContent) => {
  fs.writeFileSync(`${fileName}.txt`, fileContent);

  return 'ok';
}