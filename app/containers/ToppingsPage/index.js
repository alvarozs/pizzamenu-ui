import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectToppings,
  makeSelectLoading,
  makeSelectError
} from './selectors';
import { loadToppings, addTopping } from './actions';
import saga from './saga';
import ToppingsPage from './ToppingsPage';

const mapDispatchToProps = (dispatch) => ({
  loadToppings: () => dispatch(loadToppings()),
  addTopping: (data) => dispatch(addTopping(data)),
});

const mapStateToProps = createStructuredSelector({
  toppings: makeSelectToppings(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'toppings', saga });

export default compose(withSaga, withConnect)(ToppingsPage);
export { mapDispatchToProps };
