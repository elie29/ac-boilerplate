import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

// export const MY_ACTION = '[Feature] My Action';
export const LOAD_PIZZAS = '[Pizzas] Load pizzas';
export const LOAD_PIZZAS_FAIL = '[Pizzas] Load pizzas fail';
export const LOAD_PIZZAS_SUCCESS = '[Pizzas] Load pizzas success';

/*
export class MyAction implements Action {
  readonly type = MY_ACTION;
  constructor(public payload: any) {}
}
*/

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
  constructor() {}
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
