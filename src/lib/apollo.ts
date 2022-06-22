import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3jhc30cs501xx7v2k103g/master',
    cache: new InMemoryCache()
})