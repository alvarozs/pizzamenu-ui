/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';

const useFetching = (someFetchActionCreator) => {
  useEffect(() => {
    someFetchActionCreator();
  }, []);
};

export default function HomePage({ loadPizzas }) { // eslint-disable-line react/prefer-stateless-function
  useFetching(loadPizzas);

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <div className="home-page">
        <h1>Home Page</h1>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loadPizzas: PropTypes.func,
};
