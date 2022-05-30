import { createServer, IncomingMessage, ServerResponse} from 'http';
import { parse } from 'query-string';
import * as url from 'url';
import { writeFile, readFile, unlink, NoParamCallback } from 'fs';


//Defining server's address/URI
const hostName = '127.0.0.1'; //localhost
const port = 5000;

// Defining the business rules 
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    let answer;
    const urlParse = url.parse(req.url ? req.url : '');
    //To receive user's information
    const params = parse(urlParse.search ? urlParse.search : '');
    
    if (urlParse.pathname == '/create-update-user') {
            // Create User and Update User
            // http://localhost:5000/create-update-user?name=Alberto%20Rebello%20PMP&age=49&id=1             
            
            // To save information
        writeFile('users/' +  params.id + '.txt',JSON.stringify(params),function(err) {
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
            readFile(`users/${ params.id }.txt`, function(err: any, data) {
                answer = err ? 'User not found' : data       
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(answer);
            })

        } else if (urlParse.pathname == '/delete-user') {            
            // Delete User
            // http://localhost:3000/delete-user?id=1
            unlink(`users/${ params.id }.txt`, function(err: any) {
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

//Running the server
server.listen(port, hostName, () => {
    console.log(`Server running at http://${ hostName }:${ port }`);
});
