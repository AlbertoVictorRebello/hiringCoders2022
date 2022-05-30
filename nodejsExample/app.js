//Including a library
const http = require('http');
const url = require('url');
const queryString = require('query-string');

//Defining server's address/URI
const hostName = '127.0.0.1'; //localhost
const port = 3000;

// Defining the business rules 
const server = http.createServer((req, res) => {
    //Getting a question from query string
    const params = queryString.parse(url.parse(req.url, true).search)
    let answer = ` Question: ${ params.question }?\n Answer: `;

    if (params.question == 'best movie') {
        answer += 'Matrix';
    } else if (params.question == 'best backend technology') {
        answer += 'Node JS';
    } else {
        answer += 'Sorry. I do not know it :(';
    }
  


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(answer);
});

//Runnig the server
server.listen(port, hostName, () => {
    console.log(`Server running at http://${ hostName }:${ port }`);
});
