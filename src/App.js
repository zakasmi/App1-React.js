import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SanadNavbar} from "./sanad-componenets/SanadNavbar";
import { SearchSection } from './sanad-componenets/SearchSection';

class App extends Component {
  render() {
    return(
     <div className="container-fluid text-center" id="root" >
     
            <div id="headerContainer">
              <SanadNavbar/>
               <h1>SanadTech</h1>          
            </div>

            <div className="row " >
                <div className="col-xs-10 center-block" >

                      <div id="SearchEmployees" >
                         
                      <SearchSection/>
                     
                          

                      </div>

                </div>
           
            </div>
     </div>
    );
  }
}


export default App;
