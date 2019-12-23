/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import PizzasPage from 'containers/PizzasPage/Loadable';
import Pizza from 'containers/Pizza/Loadable';
import ToppingsPage from 'containers/ToppingsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="Pizza Menu"
      defaultTitle="Pizza Menu"
    >
      <meta name="description" content="Pizza Menu" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/pizza/:id" component={Pizza} />
      <Route path="/pizzas" exact component={PizzasPage} />
      <Route path="/toppings" exact component={ToppingsPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
