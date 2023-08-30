// Skriv ett program som skriver ut innehållet i en lokal textfil.
const fs = require('fs');

fs.readFile('textfile.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(data.toString())
});