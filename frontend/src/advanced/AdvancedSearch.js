/* this is the component in the Home page */
import React, { Component } from 'react';
import axios from 'axios' ;
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ChooseMenu from './ChooseMenu' ;
import { Redirect,withRouter } from 'react-router-dom';

import config from '../config' ;
class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      objet:"_",
      date:'_',
      ministry:'_',
      redirect: false,url:'',
      resultedAdvance:null
    }
  }
  handleChange = (event, index, value) => this.setState({value});  
  //update state with data from chooseMenu component
  getObjet(objet){this.setState({objet}); }
  getDate(date){this.setState({date}); }
  getMinistry(ministry){this.setState({ministry});}

  performSearch(){
    const self = this,
    url="/adv?objet="+this.state.objet+"&date="+this.state.date+"&ministry="+this.state.ministry
    this.setState({ redirect: true,url:url })
  }
  
  render() {
    return (
      <div className="light-background" style={{paddingBottom:"2rem"}}>
      {this.state.redirect ? <Redirect push to={this.state.url}/>:
        <div className="container">
          { /*Section Image */ }
          <div className="row no-margin">
              <div className="col-md-9 padding-leftright-null">
                  <div className="text text-md-center">
                      <h2 className="small">Recherche avanc&eacute;e</h2>
                  </div>
              </div>
          </div> 
          <div className="row no-margin">
          <div className="col-md-10" >
          <div className="col-md-4 padding-leftright-null">
            <ChooseMenu 
                  data={["_","Renouvellement","Retraite","Changement de fonction","demission","Changement d'administration","Deuxieme fonction"]}
                  title="Objet de d&eacute;claration"
                  getSelected={this.getObjet.bind(this)}
              />
          </div>
          <div className="col-md-4 padding-leftright-null">
              <ChooseMenu 
                data={[ "_","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017" ]}
                title="data de d&eacute;claration"
                getSelected={this.getDate.bind(this)}
              />
          </div>
          <div className="col-md-4 padding-leftright-null">
            <ChooseMenu 
              data={ ["_","interieur", "justice", "education", "agriculture ", "finances", "defense nationale", "sante", "technologies de l'information", "presidence du gouvernement", "enseignement superieur", "affaires etrangeres", "affaires locales", "transport", "l'emploi", "affaires culturelles", "developpement economique", "jeunesse des sports", "l'energie et des mines", "l'industrie", "isie", "conseil superieur de la magistrature", "assemblee nationale","developpement regional et du plan", "droits de l'homme et de la  justice transitionnelle", "commission lutte contre la corruption"]}
              title="Ministere"
              getSelected={this.getMinistry.bind(this)}
            />
          </div>

          </div>
          <div className="col-md-2 padding-leftright-null">
                  <div className="text text-right padding-md-top-null text-md-center">
                      <RaisedButton 
                        label="Chercher"
                        style={{width:"100%"}}
                        onClick={this.performSearch.bind(this)}
                      />  
                  </div>
              </div>
          </div>
      </div>}
  </div>
      
    );
  }
}

export default AdvancedSearch;