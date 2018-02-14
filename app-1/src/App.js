import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      input: ''
    };
  }

  handleChange(value){
this.setState ({ input:value})}
 
  render() {
    return (
      <div className="App">
        <input placeholder='text'onChange={e => this.handleChange(e.target.value)}/>
        <div>{this.state.input}</div>
      </div>
    );
  }
}

export default App;
