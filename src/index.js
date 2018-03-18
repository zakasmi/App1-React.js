import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { SanadNavbar } from './sanad-componenets/SanadNavbar';
import {Home} from './sanad-componenets/Home'
import { Root } from './sanad-componenets/Root';
class Zak extends React.Component{
    constructor(){
        super();
        this.state = {
            homeLink : "in Zffak",
            homeMounted:true
        }
    }
    onChangeLink(newLink){
        this.setState({
                homeLink:newLink,
             
        });

    }
    componentDidUpdate(){
       // console.log(this.state.homeLink)
    }
    onChangeHomeMounted(){
        this.setState({
            homeMounted:!this.state.homeMounted
        })
    }
    onGreat(){
        alert("Hello");
    }

render(){
var user ={
    firstName:"Zakaria",
    lastName:"kasmi",
    country:"Morocco",
    hobbies:["Coding","gaming","watching movies"]
};
let homeCmp="";
if(this.state.homeMounted){
    homeCmp=   <Home 
                name={"jack"}
                firstAge={21} 
                user={user}
                great={this.onGreat}
                ChangeLink={this.onChangeLink.bind(this)}
                initialStateHomeLink ={this.state.homeLink}
              />
}
    return (
         <div className="container-fluid" >
              

              <div className="row center-block">
                <div className="col-md-8 col-md-offset-2">
              <SanadNavbar homeLink={this.state.homeLink}/>
               <p>{this.state.homeLink} </p>
               <Root homeLink={this.state.homeLink}/>

                 <p>Hello I am A Child component form Indexjs </p>
                </div>
                </div>
                

              

               <div className="row">
                <div className="col-md-8 col-md-offset-2">
                   {homeCmp}
                </div>
                
                  </div>
                         <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                                 <button className="btn btn-primary" onClick={this.onChangeHomeMounted.bind(this)}>(Unmount) Home</button>
                         </div>
                
                  </div>  
           </div>
               


               

        )
    }
}

ReactDOM.render(
<App/>
, document.getElementById('root'));

registerServiceWorker();
