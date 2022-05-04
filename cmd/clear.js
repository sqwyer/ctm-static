const fs = require('fs');

fs.unlink(`${__dirname}/../js/min.js`, err => {
    if(err) throw err;
});