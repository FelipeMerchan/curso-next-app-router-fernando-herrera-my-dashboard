import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 5,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  /* Los reducers son las acciones que queremos llamar
  desde cualquier lugar de la aplicación para que cambien
  el valor del state:*/
  reducers: {
    addOne(state) {
      state.count++;
    },
    substractOne(state) {
      if (state.count === 0) return;

      state.count--;
    },
    resetCount(state, action:  PayloadAction<number>) {
      /* No se recomienda cambiar el estado con valores que estén fuera
      del scope de la acción, por ejemplo, hacer una petición http
      acquí y guardar la respuesta en el state. Debemos únicamente usar el
      payload que enviamos en el action. Se recomienda que estas
      acciones de Redux sean funciones puras. */
      if (action.payload < 0) action.payload = 0;
      state.count = action.payload;
    }
  },
});

export const { addOne, substractOne, resetCount } = counterSlice.actions;

export default counterSlice.reducer;