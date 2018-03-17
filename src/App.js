import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SanadNavbar} from "./sanad-componenets/SanadNavbar";

class App extends Component {
  render() {
    return(
     <div className="container-fluid text-center" id="root" >
     
            <div id="headerContainer">
              <SanadNavbar/>
               <h1>SanadTech</h1>          
            </div>

            <div className="row " >
                <div className="col-xs-10 col-center" >

                      <div id="SearchEmployees" >
                         
                              <div className="row center-block ">
                                  <div className="col-xs-11 col-center" id="searcharea">

                                  </div>
                                  <div className="col-xs-11 col-center"  id="searcharea">

                                  </div>
                                  
                              </div>

                          

                      </div>

                </div>
           
            </div>
     </div>
    );
  }
}

export default App;
