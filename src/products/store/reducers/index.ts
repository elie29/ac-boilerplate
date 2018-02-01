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

// First level selector
export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);

// PizzasState selector
export const getPizzasState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

// Pizzas array selector
export const getPizzas = createSelector(getPizzasState, fromPizzas.getPizzas);
export const getPizzasLoading = createSelector(
  getPizzasState,
  fromPizzas.getPizzasLoading
);
export const getPizzasLoaded = createSelector(
  getPizzasState,
  fromPizzas.getPizzasLoaded
);
