import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
  loaded: boolean;
  loading: boolean;
  pizzas: Pizza[];
}

const initialState: PizzaState = {
  loaded: false,
  loading: false,
  pizzas: []
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return { ...state, loading: true, loaded: false };
    }
    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return { ...state, loading: false, loaded: true };
    }
    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload;
      return {
        ...state,
        pizzas
      };
    }
  }
  return state;
}

export const getPizzas = (state: PizzaState) => state.pizzas;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
