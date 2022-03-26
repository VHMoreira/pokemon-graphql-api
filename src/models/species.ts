export interface Species {
    id: number
    name: string
    is_baby: boolean
    is_legendary: boolean
    is_mythical: boolean
    color: Color
    evolves_from_species: EvolvesFromSpecies
    evolution_chain: EvolutionChain
    habitat: Habitat
    generation: Generation
}

export interface Color {
    name: string
    url: string
}

export interface EvolvesFromSpecies {
    name: string | null
    url: string
}

export interface EvolutionChain {
    url: string
}

export interface Generation {
    name: string
    url: string
}

export interface Habitat {
    name: string
    url: string
}
