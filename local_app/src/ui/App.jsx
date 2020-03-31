"use strict";

const React = require('react');
const Component = require('./Component.jsx');

module.exports = class App extends React.Component {
    render() {
        return (
          <div>
            <h1>Hi, I'm the main component</h1>
            <Component />
            <h2>Hot Reloading works!</h2>
          </div>
        );
    }
};
