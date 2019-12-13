/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_PIZZAS } from 'containers/PizzasPage/constants';
import { pizzasLoaded, repoLoadingError } from 'containers/PizzasPage/actions';

import getAllPizzas, { getPizzas } from '../saga';

const username = 'flexdinesh';

/* eslint-disable redux-saga/yield-effects */
describe('getRepos Saga', () => {
  let getReposGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getReposGenerator = getPizzas();

    const selectDescriptor = getReposGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getReposGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the reposLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First repo',
    }, {
      name: 'Second repo',
    }];
    const putDescriptor = getReposGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(pizzasLoaded(response, username)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getReposGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(repoLoadingError(response)));
  });
});

describe('getAllPizzas Saga', () => {
  const getAllPizzasSaga = getAllPizzas();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeLatestDescriptor = getAllPizzasSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_PIZZAS, getPizzas));
  });
});
