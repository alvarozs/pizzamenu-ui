import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectPizzas,
  makeSelectLoading,
  makeSelectError
} from 'containers/PizzasPage/selectors';
import { loadPizzas } from './actions';
import saga from './saga';
import PizzasPage from './PizzasPage';

const mapDispatchToProps = (dispatch) => ({
  loadPizzas: () => dispatch(loadPizzas()),
});

const mapStateToProps = createStructuredSelector({
  pizzas: makeSelectPizzas(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'home', saga });

export default compose(withSaga, withConnect)(PizzasPage);
export { mapDispatchToProps };
