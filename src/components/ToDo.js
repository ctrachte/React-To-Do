// import React and React's Component class.
import React, { Component } from 'react';
// Define a class that extends Component.
class ToDo extends Component {
// Define a render() method on your class. This method is required.
  render () {
    return ( //The return method returns JSX, a syntax for defining HTML templates in JavaScript.
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
      </li>
      // renders the isCompleted prop as the value of the checked property of an <input /> with a type attribute of  checkbox.
      // In the ToDo component, we can now access props on the this.props object.
    );
  }
}

// Export the class. Use the default keyword since it will be the only export in this file.
export default ToDo;


// Behind the scenes, Webpack parses the JSX into plain JavaScript as it bundles it.
//  You'll find JSX used in most React apps. Parentheses aren't always required,
//  but they ensure that an initial linebreak doesn't result in an error.
