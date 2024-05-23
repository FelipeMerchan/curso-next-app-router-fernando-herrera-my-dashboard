import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 5,
  isReady: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  /* Los reducers son las acciones que queremos llamar
  desde cualquier lugar de la aplicación para que cambien
  el valor del state:*/
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      /* Debido a que los componentes que llaman la función initCounterState
      pueden ser rerenderizados cuando su estado cambie, etc; puede ser que se
      llame múltiples veces la acción que modifica el estado cada vez que esto suceda.
      Para evitar esto usamos esta validación para garantizar que si el contenido inicial
      ya se cargó una vez, no se vuelva a cambiar el estado: */
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },
    addOne(state) {
      state.count++;
    },
    subtractOne(state) {
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

export const { addOne, initCounterState, subtractOne, resetCount } = counterSlice.actions;

export default counterSlice.reducer;