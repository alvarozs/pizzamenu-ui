import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.toppings || initialState;

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.error
);

const makeSelectToppings = () => createSelector(
  selectGlobal,
  (globalState) => globalState.userData.toppings
);

export {
  makeSelectToppings,
  makeSelectLoading,
  makeSelectError,
};
