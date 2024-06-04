import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/pokemon';

interface PokemonsState {
  [key: string]: SimplePokemon;
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
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      /* Si existe el pokemon en los favoritos
      lo eliminamos */
      if (!!state[id]) {
        delete state[id];
        return;
      } else {
        /* Si no existe el pokemon en los favoritos lo agregamos: */
        state[id] = pokemon;
      }

      /* Esto no se debe hacer en un reducer: */
      /* localStorage.setItem('favorite-pokemons', JSON.stringify(state)); */
    }
  },
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer