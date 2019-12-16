import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const AddPizzaForm = (props) => {
  const initialState = { id: null, name: '' }
  const [pizza, setPizza] = useState(initialState)

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setPizza({ ...pizza, name: value });
  };


  const onSubmit = (event) => {
    event.preventDefault()
    if (!pizza.name) return;

    props.addPizza(pizza);
    setPizza(initialState);
  };

  return (
    <Form>
      <Input value={pizza.name} onChange={handleNameChange} />
      <Button onClick={onSubmit}>Add</Button>
    </Form>
  );
};

AddPizzaForm.propTypes = {
  addPizza: PropTypes.func,
};

export default AddPizzaForm;
