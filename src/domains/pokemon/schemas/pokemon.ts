import { gql } from 'apollo-server'

export const PokemonSchema = gql`
    type Ability {
        name: String
    }

    type AbilityInfo {
        is_hidden: Boolean
        slot: Int
        ability: Ability
    }

    type Move {
        name: String
    }

    type MoveInfo {
        move: Move
    }

    type Color {
        name: String
    }

    type EvolvesFromSpecies {
        name: String
    }

    type EvolutionChain {
        name: String
    }

    type Generation {
        name: String
    }

    type Habitat {
        name: String
    }

    type Species {
        id: ID
        name: String
        is_baby: Boolean
        is_legendary: Boolean
        is_mythical: Boolean
        color: Color
        evolves_from_species: EvolvesFromSpecies
        evolution_chain: EvolutionChain
        habitat: Habitat
        generation: Generation
    }

    type OfficialArtwork {
        front_default: String
    }

    type Home {
        front_default: String
        front_female: String
        front_shiny: String
        front_shiny_female: String
    }

    type DreamWorld {
        front_default: String
        front_female: String
    }

    type Other {
        dream_world: DreamWorld
        home: Home
        official_artwork: OfficialArtwork
    }

    type Sprites {
        back_default: String
        back_female: String
        back_shiny: String
        back_shiny_female: String
        front_default: String
        front_female: String
        front_shiny: String
        front_shiny_female: String
        other: Other
    }

    type Type {
        name: String
    }

    type TypeInfo {
        slot: Int
        type: Type
    }

    type Pokemon {
        id: ID!
        name: String
        base_experience: Int
        height: Int
        is_default: Boolean
        order: Float
        weight: Float
        abilities: [AbilityInfo]
        moves: [MoveInfo]
        species: Species
        sprites: Sprites
        types: [TypeInfo]
    }

    type Query {
        pokemons(initial: ID, limit: ID): [Pokemon]
    }
`