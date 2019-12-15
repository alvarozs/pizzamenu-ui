/*
 * PizzasPage
 *
 * List all the pizzas
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';
import PropTypes from 'prop-types';
import { useFetching } from '../../helpers/hooks';

export const EmptyList = () => (<li><p>There is no pizzas on the system.</p></li>);
export const Pizza = ({ pizza }) => (<li key={pizza.id}><p>{pizza.name}</p></li>);

// candidate to be moved to its own js file for maintainability purpose
export const PizzasList = ({ pizzas }) => (
  <>
    <h1>Pizzas</h1>
    <ul>
      {(pizzas.length === 0)
        ? <EmptyList />
        : pizzas.map((pizza) => (<Pizza key={`pizza${pizza.id}`} pizza={pizza} />))}
    </ul>
  </>
);

export default function PizzasPage({ loadPizzas, pizzas = [] }) {
  useFetching(loadPizzas);

  return (
    <div className="feature-page">
      <Helmet>
        <title>Pizzas Page</title>
        <meta
          name="description"
          content="Pizzas Page"
        />
      </Helmet>
      <PizzasList pizzas={pizzas} />
    </div>
  );
}

PizzasPage.propTypes = {
  loadPizzas: PropTypes.func,
  pizzas: PropTypes.arrayOf(
    PropTypes.shape
  ),
};

PizzasList.propTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.shape
  )
};

Pizza.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string,
  })
};
