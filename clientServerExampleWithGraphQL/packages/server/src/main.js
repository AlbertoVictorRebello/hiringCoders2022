import express from 'express';
import cors from   'cors';

const server = express();

/*This implements cors to all requisitions 
server.use(cors); */

server.get('/status',(_, response) => {
    response.send(
        {
            status:'Keep walking...express'
        }
    )
});

const enableCors = cors({ origin: 'http://localhost:3000'});

server
.options('/authenticate', enableCors)
.post('/authenticate', enableCors, express.json(), (request, response) => {
    console.log(
        'E-mail', request.body.email,
        'Password', request.body.password
    );
    response.send({
        Okay: true
    });
} );

const portNumber = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const hostName = process.env.HOSTNAME || '127.0.0.1';

server.listen(portNumber, hostName, () => {
    console.log(`Server listening is listening at http://${ hostName }:${ portNumber }`);
});