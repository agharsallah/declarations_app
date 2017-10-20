import React, { Component } from 'react';
import axios from 'axios' ;
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value:1
    }
  }
  handleChange = (event, index, value) => this.setState({value});  
  componentWillMount() {

  }
  
  render() {
    return (
      <div className="light-background" style={{paddingBottom:"2rem"}}>
      <div className="container">
          { /*Section Image */ }
          <div className="row no-margin">
              <div className="col-md-9 padding-leftright-null">
                  <div className="text text-md-center">
                      <h2 className="small">Recherche avancée</h2>
                  </div>
              </div>
          </div> 
          <div className="row no-margin">
          <div className="col-md-10" >
          <div className="col-md-3 padding-leftright-null">
            <SelectField
            floatingLabelText="Objet de déclaration"
            value={this.state.value}
            onChange={this.handleChange}
            style={{width:"80%"}}
            >
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
          </div>
          <div className="col-md-3 padding-leftright-null">
              <SelectField
              floatingLabelText="Date de déclaration"
              value={this.state.value}
              onChange={this.handleChange}
              style={{width:"80%"}}
              >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
            </SelectField>
          </div>
          <div className="col-md-3 padding-leftright-null">
              <SelectField
              floatingLabelText="ministère"
              value={this.state.value}
              onChange={this.handleChange}
              style={{width:"80%"}}
              >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
            </SelectField>
          </div>
          <div className="col-md-3 padding-leftright-null">
              <SelectField
              floatingLabelText="travaille"
              value={this.state.value}
              onChange={this.handleChange}
              style={{width:"80%"}}
              >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
            </SelectField>
          </div>
          </div>
          <div className="col-md-2 padding-leftright-null">
                  <div className="text text-right padding-md-top-null text-md-center">
                      <RaisedButton label="Chercher"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
      
    );
  }
}

export default AdvancedSearch;