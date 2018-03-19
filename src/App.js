import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SanadNavbar} from "./sanad-componenets/SanadNavbar";
import { SearchSection } from './sanad-componenets/SearchSection';



class App extends Component {

  constructor(props){
    super(props);
    this.state={
     
      contacts:[],
     firstNameFilter :'',
     lastNameFilter:'',
     countryFilter:'',
     emailFilter:''
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
    let allcontacts = this.state.contacts;
    if(this.state.firstNameFilter){
      allcontacts= allcontacts.filter(user => (user.firstName.toLowerCase().includes(this.state.firstNameFilter.toLowerCase())) )

    }
    if(this.state.lastNameFilter){
      allcontacts= allcontacts.filter(user =>user.lastName.toLowerCase().includes(this.state.lastNameFilter.toLowerCase()) )
    }
    if(this.state.countryFilter){
      allcontacts= allcontacts.filter(user =>user.coutry.toLowerCase().includes(this.state.countryFilter.toLowerCase()) )
    }
    if(this.state.emailFilter){
      allcontacts= allcontacts.filter(user =>user.email.toLowerCase().includes(this.state.emailFilter.toLowerCase()) )
    }
    
    
    return(
     <div className="container-fluid text-center" id="root" >
     
            <div id="headerContainer">
              <SanadNavbar/>
               <h1>SanadTech</h1>          
            </div>

            <div className="row " >
                <div className="col-xs-10 center-block" >

                   <div id="SearchEmployees" className="effect6">
                         
                         <SearchSection/>
                         <br/>
                               
                   <div className="row">
                        <div className="col-xs-10 center-block">
                              <div className="input-group-lg ">

                                                        <Filter placeH={"first Name"} OnTextChange={text=>{this.setState({firstNameFilter:text})}}/>
                                                        <Filter placeH={"Last Name"} OnTextChange={text=>{this.setState({lastNameFilter:text})}}/>
                                                        <Filter placeH={"Country "} OnTextChange={text=>{this.setState({countryFilter:text})}}/>
                                                        <Filter placeH={"Email"} OnTextChange={text=>{this.setState({emailFilter:text})}}/>
                              </div>
                          </div>  
                  </div>
                     <div className="row">
                          <div className="col-xs-12 center-block text-center">
     
                          <table className="table table-striped">
                              <thead>
                                  <br/>
                               
                                  
                                <tr>
                                  <th>First Name</th>
                                  <th>Last Name</th>
                                  <th>Country</th>
                                  <th>Email</th>
                                  
                                </tr>
                              </thead>
                             <tbody>
                             
                              {
                          


                                allcontacts.map(contact=>{
                                  return <tr key={contact.email}>
                                                <td>{contact.firstName}</td>
                                                <td>{contact.lastName}</td>
                                                <td>{contact.coutry}</td>
                                                <td>{contact.email}</td>
                                                                                                                                                
                                            </tr>


                                  })
                                }
                                
                                </tbody>
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

class Filter extends React.Component{
 render(){

  return(
    <th><input className="form-control" placeholder={this.props.placeH}  onKeyUp={event=>this.props.OnTextChange(event.target.value)}/></th>
  );
 }

}
export default App;
