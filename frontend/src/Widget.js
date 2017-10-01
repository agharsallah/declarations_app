import React, { Component } from 'react';
import axios from 'axios' ;
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Timeline from './Timeline' ;
import Layout from './Layout' ;

class Widget extends Component {
  constructor(props){
    super(props);
    this.state={declarations:[]}
  }
  componentWillMount() {
    const url  = 'http://localhost:8080/api/getDeclarations' + this.props.match.url;
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
    const name = (this.props.match.url.split('**')[0]).slice(1) +' '+(this.props.match.url.split('**')[1]).replace(/\//g, '')    
    
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
            </div>
        </div>
      </div>
    );
  }
}

export default Widget;