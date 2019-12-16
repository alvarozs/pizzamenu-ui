import { LOAD_TOPPINGS, LOAD_TOPPINGS_SUCCESS, LOAD_TOPPINGS_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  data: {
    toppings: [],
  },
};

function toppingsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TOPPINGS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        data: {
          toppings: [],
        },
      };

      return newState;
    }
    case LOAD_TOPPINGS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        data: {
          toppings: action.toppings,
        }
      };
      return newState;
    }

    case LOAD_TOPPINGS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
}

export default toppingsReducer;
