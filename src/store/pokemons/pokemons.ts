import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/pokemon';

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {}

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
      }

      /* Si no existe el pokemon en los favoritos lo agregamos:   */
      state[id] = pokemon;
    }
  },
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer