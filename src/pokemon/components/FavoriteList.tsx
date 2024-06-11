'use client'

import { usePokemon } from "../hooks/usePokemon"
import { PokemonGrid } from "./PokemonGrid"
import { IoHeartOutline } from "react-icons/io5";

export const FavoriteList = () => {
  const { favoritePokemons } = usePokemon();
  const favoritePokemonsAsArray = Object.values(favoritePokemons);
  /* const [pokemons, setPokemons] = useState(favoritePokemonsAsArray);

  useEffect(() => {
    setPokemons(pokemons);
  }, [favoritePokemons]) */

  return (
    <>
      {
        favoritePokemonsAsArray.length === 0 ? (
          <NoFavorites />
        ) : (
          <PokemonGrid pokemon={favoritePokemonsAsArray}/>
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
