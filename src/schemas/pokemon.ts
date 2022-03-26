import { gql } from 'apollo-server'

export const PokemonSchema = gql`
    type Pokemon {
        id: ID!
        name: String!
    }

    type Query {
        pokemons: [Pokemon]
    }
`