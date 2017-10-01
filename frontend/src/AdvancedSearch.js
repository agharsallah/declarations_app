import React, { Component } from 'react';
import axios from 'axios' ;
import RaisedButton from 'material-ui/RaisedButton';

class AdvancedSearch extends Component {
  
  componentWillMount() {

  }
  
  render() {
    return (
      <div  >
      <div className="secondary-background">
      <div className="container">
          { /*Section Image */ }
          <div className="row no-margin">
              <div className="col-md-9 padding-leftright-null">
                  <div className="text text-md-center">
                      <h2 className="white small">Recherche avancée</h2>
                  </div>
              </div>
          </div> 
          <div className="row no-margin">
              <div className="col-md-3 padding-leftright-null">
                  <div className="text text-right padding-md-top-null text-md-center">
                      <RaisedButton label="Chercher"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
      
      </div>
    );
  }
}

export default AdvancedSearch;