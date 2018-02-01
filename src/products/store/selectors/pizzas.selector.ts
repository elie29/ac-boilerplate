import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';

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
