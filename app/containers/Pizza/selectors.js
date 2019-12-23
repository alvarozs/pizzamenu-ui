import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.pizza || initialState;

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.error
);

const makeSelectPizza = () => createSelector(
  selectGlobal,
  (globalState) => globalState.data.pizza
);

const makeSelectToppings = () => createSelector(
  selectGlobal,
  (globalState) => globalState.data.toppings
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectPizza,
  makeSelectToppings
};
