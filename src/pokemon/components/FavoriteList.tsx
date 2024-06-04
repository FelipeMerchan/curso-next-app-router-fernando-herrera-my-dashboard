'use client'

import { useState } from "react";
import { usePokemon } from "../hooks/usePokemon"
import { PokemonGrid } from "./PokemonGrid"
import { IoHeartOutline } from "react-icons/io5";

export const FavoriteList = () => {
  const { favoritePokemons } = usePokemon();
  const favoritePokemonsAsArray = Object.values(favoritePokemons);
  const [pokemons, setPokemons] = useState(favoritePokemonsAsArray);

  return (
    <>
      {
        pokemons.length === 0 ? (
          <NoFavorites />
        ) : (
          <PokemonGrid pokemon={pokemons}/>
        )
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <IoHeartOutline size={100} className='text-red-500' />
      <span>No hay favoritos</span>
    </div>
  )
}
