import { LOAD_PIZZAS, LOAD_PIZZAS_SUCCESS, LOAD_PIZZAS_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PIZZAS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        userData: {
          pizzas: [],
        },
      };

      return newState;
    }
    case LOAD_PIZZAS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        userData: {
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

export default appReducer;
