import ReactDOM from 'react-dom';
import React from 'react';

import Title from './title/title';
import Navbar from './navbar/navbar';
import Card from './card/card';

let app = (
  <div>
    <Navbar Title="My Brand" Color="orange" />
    <div className="container">
      <Title />
      <h1>Ola Mundo</h1>
      <div className="row">
        <div className = "col m4">
          <Card />
        </div>
        <div className = "col m4">
          <Card />
        </div>
        <div className = "col m4">
          <Card />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(app,document.getElementById('app'));
