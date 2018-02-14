import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      items: ['pizza', 'spaghetti', 'sushi', 'brownies']
    }
  }
  render() {
    let itemsToDisplay = this.state.items.map((element, index) => {
      return (
        <h2 key={index}>{element}</h2>
      )
    })
    return (
      <div className="App">
          <ul>{itemsToDisplay}</ul>
      </div>
    );
  }
}

export default App;
