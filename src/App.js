import React, { Component } from 'react';
import './App.css';
// import the ToDo component.
import ToDo from './components/ToDo.js';
// Now that it's been imported, we can use it as a tag in the JSX that's returned by the  App component's render() method.
class App extends Component {
  constructor(props) {
    super(props);
    // Now that there's a constructor function, we can assign the component's initial state using the this keyword.
    // A component's state is expected to be an object, so assign an object with a todos property to this.state. Make todos an array, and add several objects to the array.
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true }, //Each object will be a to-do with properties named  description and isCompleted.
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ]
    };
  }
  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            //  each child of an array or iterator needs to have a key with a unique value. The key gives React a reliable way of distinguishing between array items.
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
            // The .map() method iterates through the items in an array and returns a new array,
            // and we can use it to convert raw data into an array of JSX elements that React will render into HTML.
          )}
        </ul>
      </div>
    );
  }
}

export default App;
