import React, { Component } from 'react';
import './App.css';
// import the ToDo component.
import ToDo from './components/ToDo.js';
// Now that it's been imported, we can use it as a tag in the JSX that's returned by the  App component's render() method.
class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <ToDo />
          <ToDo />
        </ul>
      </div>
    );
  }
}

export default App;
