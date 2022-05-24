import { createServer } from 'http';
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
       
        case '/authenticate': {
            let data = '';
            request.on('data', (chunk) => {
                data += chunk;
            });
            request.on('end', () => {  
                const params = parse(data);                             
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