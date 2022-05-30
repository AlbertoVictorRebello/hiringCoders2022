//Including a library
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

//Defining server's address/URI
const hostName = '127.0.0.1'; //localhost
const port = 3000;

// Defining the business rules 
const server = http.createServer((req, res) => {
    let answer;
    const urlParse = url.parse(req.url);
    //To receive user's information
    const params = queryString.parse(urlParse.search);

    
    if (urlParse.pathname == '/create-update-user') {
            // Create User and Update User
            // http://localhost:3000/create-update-user?name=Alberto%20Rebello%20PMP&age=49&id=1             
            
            // To save information
        fs.writeFile('users/' +  params.id + '.txt',JSON.stringify(params),function(err) {
            if (err) throw err;
            console.log('Yehhh!');
            answer = 'User created/updated with success!'
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(answer);
        }); 
        

        } else if (urlParse.pathname == '/read-user') {
            // Read User
            // http://localhost:3000/read-user?id=1
            fs.readFile(`users/${ params.id }.txt`, function(err, data) {
                answer = err ? 'User not found' : data       
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(answer);
            })

        } else if (urlParse.pathname == '/delete-user') {            
            // Delete User
            // http://localhost:3000/delete-user?id=1
            fs.unlink(`users/${ params.id }.txt`, function(err, data) {
                answer = err ? 'User not found' : 'User deleted with success!'          
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(answer);
            })

        } else {
            answer = 'Please, verify the URI'          
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end(answer);
        }

    
});

//Runnig the server
server.listen(port, hostName, () => {
    console.log(`Server running at http://${ hostName }:${ port }`);
});
