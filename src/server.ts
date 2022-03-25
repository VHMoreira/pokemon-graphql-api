import { ApolloServer } from "apollo-server"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { PokemonSchema } from './domains/pokemon/schema/pokemon'

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
    console.log(`🚀 Server running at ${url}`)
})