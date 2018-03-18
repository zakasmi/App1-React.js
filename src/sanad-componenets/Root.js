import React from 'react'
import {PricingHome} from './Pricing'
import { SanadNavbar } from './SanadNavbar';
import { Header } from './Header';

export   class Root extends React.Component{

render(){

    return (
        <div className="container">
                <div className="row  ">
                        <div className="col-xs-12 center-block ">
                            <Header/>
                        </div>
                </div>
                <div className="row center-block">
                        <div className="col-xs-10 text-center">
                                {this.props.children}
                       </div>
                </div>

           

        </div>

    );
}

}