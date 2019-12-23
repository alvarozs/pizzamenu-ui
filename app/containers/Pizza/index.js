import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectPizza,
  makeSelectLoading,
  makeSelectError,
  makeSelectToppings
} from './selectors';
import { loadPizza, loadToppings, addToppingToPizza, removeToppingFromPizza } from './actions';
import saga from './saga';
import Pizza from './Pizza';

const mapDispatchToProps = (dispatch) => ({
  loadPizza: (id) => dispatch(loadPizza(id)),
  loadToppings: () => dispatch(loadToppings()),
  addToppingToPizza: (pizzaId, toppingId) => dispatch(addToppingToPizza(pizzaId, toppingId)),
  removeToppingFromPizza: (pizzaId, toppingId) => dispatch(removeToppingFromPizza(pizzaId, toppingId)),
});

const mapStateToProps = createStructuredSelector({
  pizza: makeSelectPizza(),
  toppings: makeSelectToppings(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'pizza', saga });

export default compose(withSaga, withConnect)(Pizza);

export { mapDispatchToProps };
