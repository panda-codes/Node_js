const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello Node!!!!</h1>\n');
    res.end();
});

fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to read the file");
    
    fs.read(fd, buf, 0, buf.length, 10, function(err, bytes/*, buffer*/){
        if (err){
            return console.log(err);
        }
        console.log(bytes + " bytes read");

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});