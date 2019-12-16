import { LOAD_PIZZAS, LOAD_PIZZAS_SUCCESS, LOAD_PIZZAS_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  data: {
    pizzas: [],
  },
};

function pizzasReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PIZZAS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        data: {
          pizzas: [],
        },
      };

      return newState;
    }
    case LOAD_PIZZAS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        data: {
          pizzas: action.pizzas,
        }
      };
      return newState;
    }

    case LOAD_PIZZAS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
}

export default pizzasReducer;
