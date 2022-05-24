import express from 'express';

const server = express();

server.get('/status',(_, response) => {
    response.send(
        {
            status:'Keep walking...express'
        }
    )
});

server.post('/authenticate', express.json(), (request, response) => {
    console.log(
        'E-mail', request.body.email,
        'Password', request.body.password
    );
    response.send();
} );

const portNumber = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const hostName = process.env.HOSTNAME || '127.0.0.1';

server.listen(portNumber, hostName, () => {
    console.log(`Server listening is listening at http://${ hostName }:${ portNumber }`);
});