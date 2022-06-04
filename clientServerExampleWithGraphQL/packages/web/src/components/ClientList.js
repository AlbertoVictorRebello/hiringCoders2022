import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from 'react-apollo';

const GET_CLIENT_LIST = gql `
    query GET_CLIENT_LIST {
        clients{
        items {
            id
            name
            email
        }
        totalItems
    }
}
`;

export function ClientList() {
    const  {
        data,
        error,
        loading,
        refetch,
        fetchMore
    } = useQuery(GET_CLIENT_LIST, {
        fetchPolicy: 'cache-and-network'
    });

    const clients = data?.clients.items?? [];

    if (error) {
        return (
            <section>
                <strong>Error during client fetch</strong>
            </section>
        )
    }
    
    if (loading) {
        return (
            <section>
                <strong>Loading...</strong>
            </section>
        )
    }

    return (
        <section>
            <ul>
                {clients.map((client) => {
                    <li key={client.id}>
                        <p>{client.name}</p>
                        <p>{client.email}</p>
                    </li>;
                })}
            </ul>
            <button disabled={loading}>More</button>
        </section>
    );
}
