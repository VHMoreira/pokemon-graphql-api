
export const PokemonResolvers = {
    Query: {
        pokemons: (
            root: any,
            args: any,
            { dataSources }: any
        ) => dataSources.pokemonsAPI.getPokemons()
    }
}