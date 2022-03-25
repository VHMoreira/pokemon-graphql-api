import { gql } from 'apollo-server'

export const PokemonSchema = gql`
    type Pokemon {
        id: ID!
        nome: String!
    }

    type Query {
        pokemons: [Pokemon]
    }
`