import { ApolloServer } from "apollo-server"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { PokemonSchema } from './domains/pokemon/schemas'
import { PokemonResolvers } from "./domains/pokemon/resolvers"
import { PokemonsAPI } from "./domains/pokemon/datasource"
import EnvironmentVariables from './configs/environment'

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
    ],
    introspection: true
})

server.listen({ port: EnvironmentVariables.PORT }).then(({ url }) => {
    console.clear()
    console.log(`🚀 Server running at ${url}`)
})