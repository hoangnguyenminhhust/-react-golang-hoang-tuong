import React from 'react';
// import logo from './logo.svg';
import './App.css';

class Person extends React.Component {
  render() {
    return (
      <div className="person-info">
        <h3>Person {this.props.personId}</h3>
          <ul>
            <li>First Name:{this.props.firstName}</li>
            <li>Last Name:{this.props.lastName}</li>
          </ul>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="people">
        <Person personId='1' firstName='Tuong' lastName='Cu'/>
      </div>
    )
  }
}

export default App;
