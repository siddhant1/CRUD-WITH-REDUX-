import React from 'react';
import { Inputfield } from './components/inputfield';
import  List from "./components/list"

class App extends React.Component { 
  render() { 
    return (
      <div>
        <Inputfield />
        <List/>
      </div>
    );
  }
}

export default App;