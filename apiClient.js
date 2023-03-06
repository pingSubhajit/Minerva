import {ApolloClient, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
    ssrMode: true,
    uri: 'https://ap-south-1.cdn.hygraph.com/content/clewvp8e74p0q01ujh8zdez69/master',
    cache: new InMemoryCache()
})

export default client