import React from "react";


export class SearchSection  extends React.Component{
render(){
return (

    <div class="row">
  
    <div class="col-lg-10 center-block">
      <div class="input-group">
        <input type="text" class="form-control" aria-label="..."/>
        <div class="input-group-btn">
        <button type="button" class="btn btn-default">Search</button>
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span></button>
          <ul class="dropdown-menu dropdown-menu-right">
            <li><a href="#">First Name</a></li>
            <li><a href="#">Country</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>



    



)
}


}  
