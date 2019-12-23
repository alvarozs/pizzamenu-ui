import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useFetching } from '../../helpers/hooks';
import { addToppingToPizza } from './actions';

export const EmptyList = () => (<li><p>There is no toppings on the system.</p></li>);
export const Topping = ({ topping, initialActive, addToppingToPizzaHandler }) => (
  <li key={`li${topping.toppingId}`}>
    <ToppingToggleButton key={topping.toppingId} initialActive={initialActive} name={topping.name} addToppingToPizzaHandler={() => addToppingToPizzaHandler(topping.toppingId)} />
  </li>
);

export const ToppingToggleButton = ({ name, initialActive, addToppingToPizzaHandler }) => {
  const [active, toggleActive] = useState(initialActive);
  useEffect(() => {
    toggleActive(initialActive);
  }, [initialActive]);

  const handleClick = () => {
    if (!active) {
      console.log('ADD TOPPING');
      addToppingToPizzaHandler();
    } else {
      console.log('REMOVE TOPPING');
    }

    toggleActive(!active);
  };

  return (
    <Button toggle active={active} onClick={handleClick}>
      { `${name}`}
    </Button>
  );
};

// candidate to be moved to its own js file for maintainability purpose
export const ToppingList = ({ pizzaToppings = [], toppings = [], addToppingToPizzaHandler }) => {

  const toppingIds = pizzaToppings.map((topping) => topping.toppingId);

  return (
    <>
      <h3>Toppings</h3>
      <i>Please select the toppings for the pizza</i>
      <ul>
        {(toppings.length === 0)
          ? <EmptyList />
          : toppings.map((topping) =>
            (<Topping key={`topping${topping.toppingId}`} topping={topping} addToppingToPizzaHandler={addToppingToPizzaHandler} initialActive={toppingIds.includes(topping.toppingId)} />))}
      </ul>
    </>
  );
};

const Pizza = ({ match, loadPizza, loadToppings, addToppingToPizza, pizza = { name: '', toppings: [] }, toppings }) => {
  console.log(pizza, toppings);

  useFetching(loadPizza, match.params.id);
  useFetching(loadToppings);

  const addToppingToPizzaHandler = (toppingId) => {
    addToppingToPizza(pizza.pizzaId, toppingId);
  };

  return (
    <>
      <h1>{`${pizza.name}`}</h1>
      <ToppingList addToppingToPizzaHandler={addToppingToPizzaHandler} pizzaToppings={pizza.toppings} toppings={toppings} />
    </>
  );
};

Pizza.propTypes = {
  match: PropTypes.shape,
  loadPizza: PropTypes.func,
  loadToppings: PropTypes.func,
  pizza: PropTypes.shape,
  toppings: PropTypes.array,
};

ToppingList.propTypes = {
  pizzaToppings: PropTypes.array,
  toppings: PropTypes.array
};

export default Pizza;
