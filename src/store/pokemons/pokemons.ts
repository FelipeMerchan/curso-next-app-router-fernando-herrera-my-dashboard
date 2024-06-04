import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/pokemon';

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const getInitialState = (): PokemonsState => {
  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');

  return favorites;
}

const initialState: PokemonsState = {
  ...getInitialState(),
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
      localStorage.setItem('favorite-pokemons', JSON.stringify(state));
    }
  },
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer