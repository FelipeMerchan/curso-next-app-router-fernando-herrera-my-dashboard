import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

/* Los middleware nos permiten interceptar un proceso, es como una
persona en el medio de un proceso y por la cual pasan todos
los procesos de nuestra app: */
export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    /* El middleware intercepta un proceso y lo detiene, en este caso un cambio
    en el estado de redux, por lo cual, tenemos el método next
    para continuar con ese proceso interceptado que está detenido,
    y como parámetro le pasamos la acción, que en este caso
    la acción será 'pokemons/toggleFavorite' que corresponde
    al agregar o eliminar un favorito. Al invocar a next con el action
    el cambio de estado no se detendrá y se actualizará:  */
    next(action);

    /* Debemos veriticar nuestra acción de interés para ejecutar
    el código que necesitamos que corra cuando esa action se dispare: */
    if (action.type === 'pokemons/toggleFavorite') {
      const { pokemons } = state.getState() as RootState;
      localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));
      return;
    }
  }
}