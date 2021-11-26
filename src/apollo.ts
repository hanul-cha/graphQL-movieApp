import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/"
})

export default client
//graphQL로 서버 만들고 이어서 하쟈...