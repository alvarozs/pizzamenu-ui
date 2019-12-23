import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useFetching } from '../../helpers/hooks';

export const EmptyList = () => (<li><p>There is no toppings on the system.</p></li>);
export const Topping = (
  {
    topping,
    initialActive,
    addToppingToPizzaHandler,
    removeToppingFromPizzaHandler
  }) => (
  <li key={`li${topping.toppingId}`}>
    <ToppingToggleButton
      key={topping.toppingId}
      initialActive={initialActive}
      name={topping.name}
      addToppingToPizzaHandler={() => addToppingToPizzaHandler(topping.toppingId)}
      removeToppingFromPizzaHandler={() => removeToppingFromPizzaHandler(topping.toppingId)} />
  </li>
);

export const ToppingToggleButton = (
  {
    name,
    initialActive,
    addToppingToPizzaHandler,
    removeToppingFromPizzaHandler
  }) => {
  const [active, toggleActive] = useState(initialActive);
  useEffect(() => {
    toggleActive(initialActive);
  }, [initialActive]);

  const handleClick = () => {
    if (!active) {
      addToppingToPizzaHandler();
    } else {
      removeToppingFromPizzaHandler();
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
export const ToppingList = (
  {
    pizzaToppings = [],
    toppings = [],
    addToppingToPizzaHandler,
    removeToppingFromPizzaHandler
  }) => {
  const toppingIds = pizzaToppings.map((topping) => topping.toppingId);

  return (
    <>
      <h3>Toppings</h3>
      <i>Please select the toppings for the pizza</i>
      <ul>
        {(toppings.length === 0)
          ? <EmptyList />
          : toppings.map((topping) =>
            (<Topping key={`topping${topping.toppingId}`} topping={topping}
              addToppingToPizzaHandler={addToppingToPizzaHandler}
              removeToppingFromPizzaHandler={removeToppingFromPizzaHandler}
              initialActive={toppingIds.includes(topping.toppingId)} />))}
      </ul>
    </>
  );
};

const Pizza = (
  {
    match,
    loadPizza,
    loadToppings,
    addToppingToPizza,
    removeToppingFromPizza,
    pizza = { name: '', toppings: [] },
    toppings
  }) => {
  useFetching(loadPizza, match.params.id);
  useFetching(loadToppings);

  const addToppingToPizzaHandler = (toppingId) => {
    addToppingToPizza(pizza.pizzaId, toppingId);
  };

  const removeToppingFromPizzaHandler = (toppingId) => {
    removeToppingFromPizza(pizza.pizzaId, toppingId);
  };

  return (
    <>
      <h1>{`${pizza.name}`}</h1>
      <ToppingList addToppingToPizzaHandler={addToppingToPizzaHandler}
                   removeToppingFromPizzaHandler={removeToppingFromPizzaHandler}
                   pizzaToppings={pizza.toppings} toppings={toppings} />
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
