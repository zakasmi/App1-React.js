import React from 'react'
import {NavLink} from 'react-router-dom'
export const Header = (props)=>{

    return (
            <nav className="navbar navbar-default">
                <div className="container">

                <div className="navbar-header">
                        <div className="nav navbar-nav">
                            <li > 
                                <NavLink activeStyle={{color:"red"}} to={"/user"}>User</NavLink>
                            </li>
                            <li > 
                                <NavLink  to={"/pricing"} > Pricing </NavLink>
                             </li>
                            
                        </div>
                </div>

                </div>

                
            </nav>


    );

}