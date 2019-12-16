import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const AddToppingForm = (props) => {
  const initialState = { id: null, name: '' }
  const [topping, setTopping] = useState(initialState)

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setTopping({ ...topping, name: value });
  };


  const onSubmit = (event) => {
    event.preventDefault()
    if (!topping.name) return;

    props.addTopping(topping);
    setTopping(initialState);
  };

  return (
    <Form>
      <Input value={topping.name} onChange={handleNameChange} />
      <Button onClick={onSubmit}>Add</Button>
    </Form>
  );
};

AddToppingForm.propTypes = {
  addTopping: PropTypes.func,
};

export default AddToppingForm;
