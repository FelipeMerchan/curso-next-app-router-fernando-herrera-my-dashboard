import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/pokemon';

interface FavoritePokemons {
  [key: string]: SimplePokemon;
}

interface PokemonsState {
  favorites: FavoritePokemons;
}

const getInitialState = (): PokemonsState => {
  /* Al intentar usar localStorage en build time vamos a tener un error
  debido a que en el servidor localStorage es undefined. Por lo cual, 
  para solucionarlo podríamos tener esta validación:
  if (typeof localStorage === 'undefined') return {};
    Sin embargo, esta solución no es perfecta debido a que aunque el build ya no falle
    sí vamos a tener otro error de hydratación debido a que la UI generada en el server
    fue diferente a la UI generada en el client (debido a que el localStorage tiene
      almacenada la lista de favoritos que se renderizará en el cliente mientras que en el
    server la lista de favoritos va a estar vacía porque localStorage es undefined).
    )
  */

  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');

  return favorites;
}

const initialState: PokemonsState = {
  /* ...getInitialState(), */
  favorites: {},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<FavoritePokemons>) {
      /* Le agregamos la propiedad favorites al estado debido
      a que en este punto requerimos setear nuestro state por un valor,
      sobreescribiendo lo que haya en el state. Si no hubieramos creado
      esta propiedad tendríamos que setear el state completo (state = action.payload)
      y aunque parezca que el state solo tenga las propiedades de nuestro
      estado, el objeto state tiene muchas propiedades en su prototype 
      que no vemos, pero que Redux agregó para hacer posible que funcione su sistema
      y que podríamos eliminar: */
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      /* Si existe el pokemon en los favoritos
      lo eliminamos */
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      } else {
        /* Si no existe el pokemon en los favoritos lo agregamos: */
        state.favorites[id] = pokemon;
      }

      /* Esto no se debe hacer en un reducer: */
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    }
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer