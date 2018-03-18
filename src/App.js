import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SanadNavbar} from "./sanad-componenets/SanadNavbar";
import { SearchSection } from './sanad-componenets/SearchSection';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
     
      contacts:[]
    }
  }

  componentDidMount(){
    this.fetchData();
  }
fetchData(){
  fetch("http://sanadtech-lab.appspot.com/")
  .then(response => response.json())
.then(allcontacts=>this.setState({contacts:allcontacts}))
  .catch(error=>console.log('laoding failed',error))
}



  render() {
    const {contacts} = this.state;
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
                     <div className="row">
                          <div className="col-xs-11 center-block">
                          <table>
                              
                                <tr>
                                  <th>First Name</th>
                                  <th>Last Name</th>
                                  <th>Country</th>
                                  <th>Email</th>
                                  
                                </tr>
                             
                             
                              {
                                contacts.map(contact=>{
                                  return <tr key={contact.email}>
                                                <td>{contact.firstName}</td>
                                                <td>{contact.lastName}</td>
                                                <td>{contact.coutry}</td>
                                                <td>{contact.email}</td>
                                                                                                                                                
                                            </tr>


                                  })
                                }
                                
                                </table>

                             
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
