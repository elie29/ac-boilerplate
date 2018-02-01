import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';

// feature state
export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

// reducers
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);

/**
 * Select pizzas state from the products state
 * A selector takes a feature selector or a combination of selectors
 * and return slice of the state
 */
export const getPizzasState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getPizzas = createSelector(
  getPizzasState,
  (state: fromPizzas.PizzaState) => state.pizzas
);
