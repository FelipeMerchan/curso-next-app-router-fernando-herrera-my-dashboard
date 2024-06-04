'use client'

import { usePokemon } from "../hooks/usePokemon"
import { PokemonGrid } from "./PokemonGrid"

export const FavoriteList = () => {
  const { favoritePokemons } = usePokemon();
  const favoritePokemonsAsArray = Object.values(favoritePokemons);

  return (
    <PokemonGrid pokemon={favoritePokemonsAsArray}/>
  )
}
