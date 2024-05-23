import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {}
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;