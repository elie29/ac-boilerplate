import { ActionReducerMap } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';

// feature state
export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

// reducers
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};
