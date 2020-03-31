import React from 'react';
import { hot } from 'react-hot-loader/root';
import Component from './components/Component';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm the main component</h1>
      <Component />
      <h2>Hot Reloading works!</h2>
    </div>
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App
