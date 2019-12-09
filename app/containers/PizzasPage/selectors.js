import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.pizzas || initialState;

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.error
);

const makeSelectPizzas = () => createSelector(
  selectGlobal,
  (globalState) => globalState.userData.pizzas
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectPizzas,
};
