/*
 * ToppingsPage
 *
 * List all the toppings
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';
import PropTypes from 'prop-types';
import AddToppingForm from 'components/AddToppingForm';
import { useFetching } from '../../helpers/hooks';

export const EmptyList = () => (<li><p>There is no toppings on the system.</p></li>);
export const Topping = ({ topping }) => (<li key={topping.id}><p>{topping.name}</p></li>);

// candidate to be moved to its own js file for maintainability purpose
export const ToppingList = ({ toppings }) => (
  <>
    <h1>Toppings</h1>
    <ul>
      {(toppings.length === 0)
        ? <EmptyList />
        : toppings.map((topping) => (<Topping key={`topping${topping.toppingId}`} topping={topping} />))}
    </ul>
  </>
);

export default function ToppingsPage({ loadToppings, addTopping, toppings = [] }) {
  useFetching(loadToppings);

  return (
    <div className="feature-page">
      <Helmet>
        <title>Toppings Page</title>
        <meta
          name="description"
          content="Toppings Page"
        />
      </Helmet>
      <ToppingList toppings={toppings} />
      <AddToppingForm addTopping={(data) => addTopping(data)} />
    </div>
  );
}

ToppingsPage.propTypes = {
  loadToppings: PropTypes.func,
  addTopping: PropTypes.func,
  toppings: PropTypes.arrayOf(
    PropTypes.shape
  ),
};

ToppingList.propTypes = {
  toppings: PropTypes.arrayOf(
    PropTypes.shape
  )
};

Topping.propTypes = {
  topping: PropTypes.shape({
    name: PropTypes.string,
  })
};
