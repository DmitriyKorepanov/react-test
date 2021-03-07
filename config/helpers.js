const fs = require('fs');

const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const root = path.join.bind(path, ROOT);
const writeJSON = function (file) {
    fs.writeFile(root('result.webpack.config.json'), JSON.stringify(file, null, 4), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

exports.root = root;
exports.writeJSON = writeJSON;
