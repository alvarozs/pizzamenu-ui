import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectToppings } from '../PizzasPage/selectors';
import ToppingsPage from './ToppingsPage';

export default connect(
  createStructuredSelector({
    toppings: makeSelectToppings()
  })
)(ToppingsPage);
