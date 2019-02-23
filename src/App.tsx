import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'

class SP1 extends Component {
  render() {
    return (
      <h1>SP1</h1>
    )
  }
}

class MyComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("/api/hello")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result");
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("error");
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } : any = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <h1>{items.name}</h1>
      );
    } 
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <MyComponent />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.          
        </p>        
        <NavLink exact to="/url">Menu item</NavLink>
        <Route exact path="/url" component={SP1} />
      </div>
    );
  }
}

export default App;
