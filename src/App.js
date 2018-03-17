import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./sanad-componenets/Header";
class App extends Component {
  render() {
    return(
  <div className="container">
<Header/>
            <h1>SanadTech</h1>
      
        </div>
    );
  }
}

export default App;
