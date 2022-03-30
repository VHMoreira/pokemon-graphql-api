import { RESTDataSource } from "apollo-datasource-rest"
import { Pokemon, Species } from "../models"

type GetPokemonsAPIResponse = {
    count: number
    next: string | null,
    previous: string | null,
    results: Pick<Pokemon, 'name'>[]
}

export type GetPokemonsParams = {
    offset?: string | number
    limit?: string | number
}

export type IGetPokemons = (params: GetPokemonsParams) => Promise<Pokemon[]>

export interface IPokemonAPI {
    getPokemons: IGetPokemons
}

export class PokemonsAPI extends RESTDataSource implements IPokemonAPI {
    constructor() {
        super()
        this.baseURL = 'https://pokeapi.co/api/v2/'
    }
    async getPokemons({ offset, limit }: GetPokemonsParams): Promise<Pokemon[]> {
        const { results } = await this.get<GetPokemonsAPIResponse>(`/pokemon`, {
            offset,
            limit
        })
        const pokemons = results.map(async ({ name }) => {
            const pokemon = await this.get<Pokemon>(`/pokemon/${name}`)
            const species = await this.get<Species>(`/pokemon-species/${pokemon.species.name}`)
            return {
                ...pokemon,
                sprites: {
                    ...pokemon.sprites,
                    other: {
                        ...pokemon.sprites.other,
                        official_artwork: pokemon.sprites.other['official-artwork']
                    }
                },
                species: {
                    ...pokemon.species,
                    ...species
                }
            }
        })
        return Promise.all(pokemons)
    }
}