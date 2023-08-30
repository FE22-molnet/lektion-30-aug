// skapa vår http-server
const http = require('http');
// objekt vi vill ta värden ifrån
let puppy = {
    name: "Kippis",
    breed: "Spitz",
    color: "Black",
    age: 11,
    isCute: true
};
http.createServer(function (req, res) {
    res.end(puppy.name + ' är ' + puppy.age + ' år gammal');
}).listen(8081);