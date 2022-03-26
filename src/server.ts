import { ApolloServer } from "apollo-server"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { PokemonSchema } from './schemas'

const server = new ApolloServer({
    typeDefs: [
        PokemonSchema
    ],
    resolvers: [],
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground
    ]
})

server.listen().then(({ url }) => {
    console.clear()
    console.log(`🚀 Server running at ${url}`)
})