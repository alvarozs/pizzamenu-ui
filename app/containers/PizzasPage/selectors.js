import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;

const selectRoute = (state) => state.router;

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

const makeSelectToppings = () => createSelector(
  selectGlobal,
  (globalState) => globalState.userData.toppings
);

const makeSelectMenus = () => createSelector(
  selectGlobal,
  (globalState) => globalState.userData.menus
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.location
);

export {
  selectGlobal,
  makeSelectToppings,
  makeSelectLoading,
  makeSelectError,
  makeSelectPizzas,
  makeSelectLocation,
  makeSelectMenus,
};
