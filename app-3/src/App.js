import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterString:'',
      foods: ["sushi", "pizza", "brownies", "cheese", "quesidilla"]
    };
  }
  handleChange(filter) {
    this.setState({ filterString: filter })
  }
  render() {
    let displayed = this.state.foods.filter((element, index) => {
      return element.includes(this.state.filterString);}).map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
        {displayed}
      </div>
    );
  }
}

export default App;
