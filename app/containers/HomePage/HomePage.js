/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

import { Helmet } from 'react-helmet';
import './style.scss';

export default function HomePage() {
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
