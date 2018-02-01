import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions } from '@ngrx/effects';

import { of } from 'rxjs/observable/of';
import { exhaustMap } from 'rxjs/operators/exhaustMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';

import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';

@Injectable()
export class PizzasEffects {
  constructor(
    private router: Router,
    private pizzaService: fromServices.PizzasService,
    private action$: Actions
  ) {}

  @Effect()
  loadPizza$ = this.action$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    // exhaust map will keep emmiting inner stream until it finished in contrast with switchMap
    exhaustMap(() =>
      this.pizzaService
        .getPizzas()
        .pipe(
          map(todos => new pizzaActions.LoadPizzasSuccess(todos)),
          catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        )
    )
  );
}
