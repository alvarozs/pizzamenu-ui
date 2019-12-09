/*
 * PizzasPage
 *
 * List all the pizzas
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';
import PropTypes from 'prop-types';


export default function PizzasPage({ pizzas }) {
  console.log(pizzas);

  return (
    <div className="feature-page">
      <Helmet>
        <title>Pizzas Page</title>
        <meta
          name="description"
          content="Pizzas Page"
        />
      </Helmet>
      <h1>List of Pizzas</h1>
      <ul>
        {
          pizzas && pizzas.map( pizza => {
            console.log(pizza);
            return <li key={pizza.id}>{pizza.name}</li>;
          })
        }
      </ul>
    </div>
  );
}

PizzasPage.propTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ),
}
