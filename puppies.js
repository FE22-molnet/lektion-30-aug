// API Spara valpar (HTTP, FS)
const http = require("http");
const fs = require("fs");
const startURL = "http://localhost:8888/";

const server = http.createServer((req, res) => {
    console.log(`${startURL}getpuppies`);
    // endpoint för get
    if (req.url === "/getpuppies") { // man kan också göra if (req.method === "POST")
        // vi vill ta data från vår fil 'puppies.js' å skicka till användaren som svar
        let puppies = fs.readFileSync('puppies.json');
        // datan kommer in rå från filen AKA som buffer
        puppies = JSON.parse(puppies);
        console.log(puppies);
        res.end(JSON.stringify(puppies));
    } else if (req.url === "/postpuppies") {

        //POST en ny valp
        // vi kommer få en ny valp i requesten

        req.on("data", (chunk) => {
            let body = chunk.toString();
            JSON.parse(body);
            console.log(body);
            let existingPuppies = fs.readFileSync('puppies.json');
            existingPuppies = JSON.parse(existingPuppies);
            // pushar vi in den nya valpen
            existingPuppies.puppies.push(JSON.parse(body))
            existingPuppies = JSON.stringify(existingPuppies)
            console.log(existingPuppies);
            // fs writefile
            fs.writeFile("puppies.json", existingPuppies, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('ny hund inlagd');
                }
            })
        });
        res.end('puppy posted');


    } else if (req.url === "/deletepuppy") {
        
    } else {
        res.end("Hello world!");
    }
});


const PORT = 8888;

server.listen(PORT, console.log(`App is running on port ${PORT}`));