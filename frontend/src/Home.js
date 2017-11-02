import React, { Component } from 'react';
import Layout from './Layout' ;
import MaterialUIAutocomplete from './MaterialUIAutocomplete' ;
import AdvancedSearch from './advanced/AdvancedSearch' ;
import LineChart from './LineChart' ;
class Home extends Component {
  render() {
    return (
      <div>
        <Layout rechercher="active-item" comprendre="" contacts="" />
        <div id="main-wrap">
        { /* Page Content  */ }
        <div id="page-content" className="header-static">
            { /* Slider  */ }
            <div id="flexslider" className="fullpage-wrap small">
                <ul className="slides">
                    <li  >
                        <div className="text center">
                            <h1 className="center  margin-bottom-small">Les d&eacute;clarations </h1><p><span id="typed" className="big white" data-typed-first="a creative company" data-typed-second="an innovative company"></span></p>
                            <p className=" center margin-bottom">Consulter les d&eacute;clarations des responsables publics!</p>
                            <br/>
                              <div className="col-xs-3 col-xs-offset-2" style= {{width:'65%'}}> <MaterialUIAutocomplete/></div>
                        </div>                        
                    </li>
                </ul>
                <div id="godown">
                    <a href="#home-wrap" className="btn-down">
                        <i className="material-icons">keyboard_arrow_down</i>
                    </a>
                </div>
            </div>
            { /* END Slider  */ }
            <div id="home-wrap" className="content-section fullpage-wrap">
                
                { /*Advanced Search */ }
                  <AdvancedSearch/>
                { /*END Advanced Search */ }

                { /*Services */ }
                {/* <div className="color-background "> 
                    <div className="container">
                        <div className="row no-margin padding-onlytop-lg">
                            <div className="col-md-6 padding-leftright-null">
                                <div className="text padding-top-null">
                                    <h3 className="big white">Statistics for your company. Increase your business.</h3>
                                </div>
                            </div>
                            <div className="col-md-6 padding-leftright-null">
                                <div className="text padding-top-null">
                                    <p className="white margin-bottom-small">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    </p>
                                    <a href="#" className="btn-pro white">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="row no-margin padding-onlybottom-lg">
                            <div className="col-md-12 padding-leftright-null">
                                <div className="text padding-topbottom-null">
                                    <picture>
                                        <img src="./img/statistics.png" alt="" className="img-responsive"/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="light-background"> 
                    <div className="container">
                        <div className="row no-margin padding-lg">
                            <div className="col-md-6 padding-leftright-null">
                                <div data-responsive="child-height" data-responsive-id="services-corporate" className="section-image height-auto-md margin-md-bottom">
                                    <picture className="section right">
                                        <img src="./img/corporate-tablet.png" className="img-responsive" alt=""/>
                                    </picture>
                                </div>
                            </div>
                            <div className="col-md-6 padding-leftright-null">
                                <div data-responsive="parent-height" data-responsive-id="services-corporate" className="text padding-topbottom-null">
                                    <h2 className="margin-bottom-null left">Grow your business with our software</h2>

                                    <div className="row box-services padding-onlytop-md">
                                        <div className="col-md-6 padding-leftright-null">
                                            <div className="box-service">
                                                <i className="material-icons color service">headset_mic</i>
                                                <h3 className="margin-bottom-extrasmall">Support<br/> 24/24</h3>
                                                <p className="margin-bottom-null">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 padding-leftright-null">
                                            <div className="box-service">
                                                <i className="material-icons color service">people</i>
                                                <h3 className="margin-bottom-extrasmall">Professional<br/>Team</h3>
                                                <p className="margin-bottom-null">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row no-margin">
                                        <div className="text padding-left-null padding-bottom-null">
                                            <a href="#" className="btn-pro">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                { /*END Services */ }

            </div>
        </div>
        <LineChart/>
        { /* END Page Content */ }
    </div>        
      </div>
    );
  }
}

export default Home;