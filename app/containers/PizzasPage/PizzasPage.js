/*
 * PizzasPage
 *
 * List all the pizzas
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';
import PropTypes from 'prop-types';
import AddPizzaForm from 'components/AddPizzaForm';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useFetching } from '../../helpers/hooks';

export const EmptyList = () => (<p>There is no pizzas on the system.</p>);
export const Pizza = ({ pizza }) => (
  <>
    <p>{pizza.name}</p>
    {pizza.toppings && pizza.toppings.map((topping) => (
      <span key={`pizza${pizza.pizzaId}topping${topping.toppingId}`}>{topping.name}, </span>
    ))}
  </>
);

// candidate to be moved to its own js file for maintainability purpose
export const PizzasList = ({ pizzas }) => (
  <>
    <h1>Pizzas</h1>
    {(pizzas.length === 0)
      ? <EmptyList />
      : (
        <Card.Group itemsPerRow={6}> {pizzas.map((pizza) => (
          <Card raised key={`pizza-card-${pizza.pizzaId}`}>
            <Link to={`/pizza/${pizza.pizzaId}`}>
              <Pizza key={`pizza${pizza.pizzaId}`} pizza={pizza} />
            </Link>
          </Card>
        ))}
        </Card.Group>
      )}
  </>
);

export default function PizzasPage({ loadPizzas, addPizza, pizzas = [] }) {
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
      <br />
      <AddPizzaForm addPizza={(data) => addPizza(data)} />
    </div>
  );
}

PizzasPage.propTypes = {
  loadPizzas: PropTypes.func,
  addPizza: PropTypes.func,
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
