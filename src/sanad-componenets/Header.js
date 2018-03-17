import React from "react";

export class Header extends React.Component{
render(){
return (
<nav class="navbar navbar-expand-lg ">
  <a class="navbar-brand" href="#">SanadTech</a>
  <ul class="navbar-nav ">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
        </li>
     
      <li>
        <a class="nav-link" href="#">Contact</a>
      </li>
      </ul>
  </nav>
      
)
}
}