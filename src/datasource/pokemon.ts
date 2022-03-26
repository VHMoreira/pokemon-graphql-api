import { RESTDataSource } from "apollo-datasource-rest"
import { Pokemon } from "src/models"

type GetPokemonsAPIResponse = {
    count: number
    next: string | null,
    previous: string | null,
    results: Pokemon[]
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
        const pokemons = results.map(
            ({ name }) => this.get<Pokemon>(`/pokemon/${name}`)
        )
        return Promise.all(pokemons)
    }
}