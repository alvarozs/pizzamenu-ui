import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectPizzas } from '../App/selectors';
import PizzasPage from './PizzasPage';

export default connect(
  createStructuredSelector({
    pizzas: makeSelectPizzas()
  })
)(PizzasPage);
