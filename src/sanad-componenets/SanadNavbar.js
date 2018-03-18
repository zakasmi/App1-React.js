import React from "react";

export class SanadNavbar extends React.Component{
render(){
return (
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">SanadTech</a>
    </div>

      <ul className="nav navbar-nav">
        <li><a href="#">{this.props.homeLink}</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    
 
  </div>
</nav>
)
}
}