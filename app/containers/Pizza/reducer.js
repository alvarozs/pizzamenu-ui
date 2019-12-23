import { LOAD_PIZZA, LOAD_PIZZA_SUCCESS, LOAD_PIZZA_ERROR,
  LOAD_ALL_TOPPINGS, LOAD_ALL_TOPPINGS_ERROR, LOAD_ALL_TOPPINGS_SUCCESS
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  data: {
    pizza: {
      name: '',
      toppings: [],
    },
  },
};

function pizzaReducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case LOAD_PIZZA: {
      const newState = {
        ...state,
        error: false,
        loading: true,
        data: {
          pizza: {},
        },
      };

      return newState;
    }
    case LOAD_PIZZA_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        error: false,
        data: {
          pizza: action.pizza,
          toppings: state.data.toppings,
        }
      };
      return newState;
    }

    case LOAD_PIZZA_ERROR: {
      return { ...state, error: action.error, loading: false };
    }

    case LOAD_ALL_TOPPINGS: {
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
    case LOAD_ALL_TOPPINGS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        data: {
          toppings: action.toppings,
        }
      };
      return newState;
    }

    case LOAD_ALL_TOPPINGS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }

    default:
      return state;
  }
}

export default pizzaReducer;
