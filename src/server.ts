import { ApolloServer } from "apollo-server"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { PokemonSchema } from './schemas'
import { PokemonResolvers } from "./resolvers"
import { PokemonsAPI } from "./datasource"

const server = new ApolloServer({
    typeDefs: [
        PokemonSchema
    ],
    resolvers: [
        PokemonResolvers
    ],
    dataSources: () => {
        return {
            pokemonsAPI: new PokemonsAPI()
        }
    },
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground
    ]
})

server.listen().then(({ url }) => {
    console.clear()
    console.log(`🚀 Server running at ${url}`)
})