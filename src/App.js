import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';


import { Root } from './sanad-componenets/Root';
import { Pricing } from './sanad-componenets/Pricing';
import { User } from './sanad-componenets/User';
import { Header } from './sanad-componenets/Header';
import { SanadNavbar } from './sanad-componenets/SanadNavbar';
import { SearchSection } from './sanad-componenets/SearchSection';


class App extends Component {
  render() {
    return(
  
      <Router >
             <div>
                    <Route  path="/" component={Header}/>
                    <Route path="/user" component={User}/>
                    <Route path="/pricing" component={Pricing}>
                    <Route path="/user" component={User}/>
                          <Route path="/SearchSection" component={SearchSection}/>
                          <Route path="/Root" component={Root}/>

                    </Route>

            </div>            
           
      
      </Router>

    
    // <Root>
    //       <Pricing/>
    // </Root>
    );
  }
}


export default App;
