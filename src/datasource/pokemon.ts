import { RESTDataSource } from "apollo-datasource-rest"
import { Pokemon } from "src/models"

type GetPokemonsAPIResponse = {
    count: number
    next: string | null,
    previous: string | null,
    results: Pick<Pokemon, 'name'>[]
}

interface IPokemonAPI {
    getPokemons(): Promise<Pokemon[]>
}

export class PokemonsAPI extends RESTDataSource implements IPokemonAPI {
    constructor() {
        super()
        this.baseURL = 'https://pokeapi.co/api/v2/'
    }
    async getPokemons(): Promise<Pokemon[]> {
        const { results } = await this.get<GetPokemonsAPIResponse>('/pokemon')
        const pokemons = results.map(async ({ name }) => {
            const pokemon = await this.get<Pokemon>(`/pokemon/${name}`)
            return {
                ...pokemon,
                sprites: {
                    ...pokemon.sprites,
                    other: {
                        ...pokemon.sprites.other,
                        official_artwork: pokemon.sprites.other['official-artwork']
                    }
                }
            }
        })
        return Promise.all(pokemons)
    }
}