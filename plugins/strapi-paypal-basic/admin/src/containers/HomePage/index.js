/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';

const HomePage = () => {
  return (
    <div>
      <h1>Nike shoes</h1>
      <h2>Buty For $25</h2>
      <form action="http://localhost:1337/pay" method="post">
        <input type="submit" value="Buy"></input>
      </form>
    </div>
  );
};

export default memo(HomePage);
