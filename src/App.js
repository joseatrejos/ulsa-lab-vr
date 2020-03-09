/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
*/

import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './components/menu/Menu';

export default class App extends Component {
  
  render(){
    return(
      <h1>Hello React</h1>,
      <Menu/>
    );
  }
}