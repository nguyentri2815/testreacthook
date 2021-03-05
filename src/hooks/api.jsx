import ApolloClient, { gql } from 'apollo-boost';
const domain = 'https://graphqlzero.almansi.me/api';


const GraphQL = new ApolloClient({
    uri: domain
});

export const GraphQLClient = {
    query: (qr) => {
        return GraphQL.query({
            query: gql`${qr}`
        })
    }
}