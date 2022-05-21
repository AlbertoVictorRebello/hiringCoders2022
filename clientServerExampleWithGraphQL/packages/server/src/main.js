import { createServer } from 'http';
import { readFile } from 'fs';
import { resolve } from 'path';
import { parse } from 'querystring'
const server = createServer((request, response) => {
    switch (request.url) {
        case '/status': {
            response.writeHead(200, {
                'content-type': 'application/json' 
            });
            response.write(
                JSON.stringify({
                    status:'Keep walking...'
                })
            );
            response.end();
            break;
        }    

        case '/sign-in': {
            const path = resolve(__dirname, '../../web/sign-in.html');
            
            readFile(path, (error, file) => {
                if (error) {
                    response.writeHead('500', 'Can\'t process HTML file.');
                    response.end();
                    return;
                }
                response.writeHead('200');
                response.write(file);
                response.end();                              
            });
            break;
        }   
        
        case '/home': {
            const path = resolve(__dirname, '../../web/home.html');
            readFile(path, (error, file) => {
                if (error) {
                    response.writeHead('500', 'Can\'t process HTML file.');
                    response.end();
                    return;
                }
                response.writeHead('200');
                response.write(file);
                response.end();                              
            });
            break;
            
        }
        case '/authenticate': {
            let data = '';
            request.on('data', (chunk) => {
                data += chunk;
            });
            request.on('end', () => {                
                response.writeHead(301, {
                    Location: '/home'
                });
                response.end();
            });
            break;
        }

        default:{
            response.writeHead(404, 'Service not found.');            
            response.end();
            break;
        }    
    }
});

const portNumber = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const hostName = process.env.HOSTNAME || '127.0.0.1';

server.listen(portNumber, hostName, () => {
    console.log(`Server listening is listening at http://${ hostName }:${ portNumber }`);
});