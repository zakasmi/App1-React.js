import React from "react";

export class SanadNavbar extends React.Component{
  componentDidMount(){
    this.fetchData();
  }
fetchData(){
  fetch("http://sanadtech-lab.appspot.com/")
  .then(response => response.json())
  .then(json => {
    console.log(json);
 
  });
}

render(){
return (
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">SanadTech</a>
    </div>

      <ul class="nav navbar-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    
 
  </div>
</nav>
)
}
}