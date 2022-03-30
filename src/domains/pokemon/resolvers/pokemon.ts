
export const PokemonResolvers = {
    Query: {
        pokemons: (
            root: any,
            { offset, limit }: any,
            { dataSources }: any
        ) => dataSources.pokemonsAPI.getPokemons({ offset, limit })
    }
}