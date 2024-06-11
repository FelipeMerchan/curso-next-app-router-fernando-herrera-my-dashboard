import { useAppSelector } from "@/store"

export const usePokemon = () => {
  const favoritePokemons = useAppSelector((state) => state.pokemons.favorites);

  return {
    favoritePokemons,
  }
}