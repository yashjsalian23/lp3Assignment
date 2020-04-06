import React, { Component } from 'react';
import './App.css';
import DateAndTime from './components/dateAndTime';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <h3>Click the below button to generate time and date</h3>
        <DateAndTime />
      </div>
    );
  }
}

export default App;
