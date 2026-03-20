const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File welcome.txt created');

    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});
