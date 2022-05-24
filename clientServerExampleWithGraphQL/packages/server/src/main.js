import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

const app = express();
async function startServer() {
    const server = new ApolloServer({
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
        typeDefs: gql`
        type Client {
            id: ID!
            name: String!
        }
        
        type Demand {
                id: ID!
                name: String!
                client: Client!
                deadline: String
            }

            type Query {
                demands: [Demand]!
            }

        `,
        resolvers: {
            Query: {
                demands: () => []
            }
        }
    });
    await server.start();
    server.applyMiddleware({
        app,
        cors: { origin: 'http://localhost:3000'},
        bodyParserConfig: true
    });
};
startServer(app);

/*This implements cors to all requisitions 
app.use(cors); */

/* app.get('/status',(_, response) => {
    response.send(
        {
            status:'Keep walking...express'
        }
    )
});

const enableCors = cors({ origin: 'http://localhost:3000'});

app
.options('/authenticate', enableCors)
.post('/authenticate', enableCors, express.json(), (request, response) => {
    console.log(
        'E-mail', request.body.email,
        'Password', request.body.password
    );
    response.send({
        Okay: true
    });
} ); */

const portNumber = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const hostName = process.env.HOSTNAME || '127.0.0.1';

app.listen(portNumber, hostName, () => {
    console.log(`app listening is listening at http://${ hostName }:${ portNumber }`);
});

/* modified:   
	modified:   
	modified:   
	modified:   
	modified:   
 */