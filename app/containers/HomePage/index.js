import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectPizzas,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { loadPizzas } from '../App/actions';
import saga from './saga';
import HomePage from './HomePage';

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

export default compose(withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
