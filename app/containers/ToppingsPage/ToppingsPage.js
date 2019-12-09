/*
 * Toppings
 *
 * List all the toppings
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default function ToppingsPage() {
  return (
    <div className="feature-page">
      <Helmet>
        <title>Toppings Page</title>
        <meta
          name="description"
          content="Toppings Page"
        />
      </Helmet>
      <h1>List of Toppings</h1>
    </div>
  );
}
