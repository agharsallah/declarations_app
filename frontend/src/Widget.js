import React, { Component } from 'react';
import axios from 'axios' ;
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Timeline from './Timeline' ;
import Layout from './Layout' ;
import {Link,NavLink,Route } from 'react-router-dom';
import config from './config' ;

class Widget extends Component {
  constructor(props){
    super(props);
    this.state={declarations:[]}
  }
  componentWillMount() {
    const url  = config.apiUrl+'/api/getDeclarations' + this.props.match.url.substr(5);
    const self = this
    axios({
      method: 'get',
      url: url,
      headers: {
          'name': 'barlamen',
          'password': 'b@rlamen1'
      }
    })
    .then(function (response) {
      console.log('declarations',response.data);
      self.setState({declarations:response.data});
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }
  
  render() {
    const name = ((this.props.match.url.substr(5)).split('**')[0]).slice(1) +' '+(this.props.match.url.split('**')[1]).replace(/\//g, '')    
    
    return (
      <div>
        <Layout rechercher="" comprendre="" contacts="" />
        <div id="main-wrap">
            <div id="page-content" className="header-static">
                <div id="page-header" className="secondary-background">
                    <div className="container">
                        <div className="row no-margin">
                            <div className="text">
                                <h1 className="white">Declarations.</h1>
                                <ul className="breadcrumb white">
                                    <li><a href="#">Recherche</a></li>
                                    <li>{name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="home-wrap" className="content-section fullpage-wrap">
                <div className="container">
                    {/* Begin Title */}
                    <div className="row no-margin padding-lg">
                      <div className="col-md-12 padding-leftright-null">
                          <div className="text text-center padding-topbottom-null">
                              <h2 className="margin-bottom-null left">L'historique de déclaration.</h2>
                          </div>
                      </div>
                    </div>
                </div>
                {/* end Title */}
                <Timeline data={this.state.declarations}/>
                {/*  */}
                <div className="light-background">
                  <div className="container">
                      <div className="row no-margin">
                          <div className="col-md-9 padding-leftright-null">
                              <div className="text text-md-center">
                                  <h2 className="small">On vous donne accées aux déclarations .</h2>
                              </div>
                          </div>
                          <div className="col-md-3 padding-leftright-null">
                              <div className="text text-right padding-md-top-null text-md-center">
                                  <Link to="/" className="btn-alt small shadow margin-null">Chercher</Link>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>                
                {/*  */}
            </div>
        </div>
      </div>
    );
  }
}

export default Widget;