import PropTypes from 'prop-types';
import React from 'react';

const Pizza = ({ match }) => (<div>Pizza {match && match.params && `${match.params.id}`}</div>);

Pizza.propTypes = {
  match: PropTypes.shape
};

export default Pizza;
