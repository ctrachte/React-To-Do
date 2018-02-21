// import React and React's Component class.
import React, { Component } from 'react';
// Define a class that extends Component.
class ToDo extends Component {
// Define a render() method on your class. This method is required.
  render () {
    return ( //The return method returns JSX, a syntax for defining HTML templates in JavaScript.
      <li> a todo will go here! </li> //In JSX, all tags need to either have a corresponding closing tag or be self-closing.
    );
  }
}

// Export the class. Use the default keyword since it will be the only export in this file.
export default ToDo;


// Behind the scenes, Webpack parses the JSX into plain JavaScript as it bundles it.
//  You'll find JSX used in most React apps. Parentheses aren't always required,
//  but they ensure that an initial linebreak doesn't result in an error.
