export interface Pokemon {
    id: number | string
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: AbilityInfo[]
    moves: MoveInfo[]
    species: Species
    sprites: Sprites
    types: TypeInfo[]
}

export interface AbilityInfo {
    is_hidden: boolean
    slot: number
    ability: Ability
}

export interface Ability {
    name: string
}

export interface MoveInfo {
    move: Move
}

export interface Move {
    name: string
    url: string
}

export interface Species {
    name: string
    url: string
}

export interface Sprites {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    other: Other
}

export interface Other {
    dream_world: DreamWorld
    home: Home
    "official-artwork": OfficialArtwork
}

export interface DreamWorld {
    front_default: string
    front_female: any
}

export interface Home {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface OfficialArtwork {
    front_default: string
}

export interface TypeInfo {
    slot: number
    type: Type
}

export interface Type {
    name: string
    url: string
}