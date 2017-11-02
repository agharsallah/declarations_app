import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
class ChooseMenu extends Component {
  constructor(props){
    super(props);
    this.state={value:'_'}
  }

  handleChange = (event, index, value) => {this.setState({value}),this.props.getSelected(value)};  
  
  render() {
    return (
      <SelectField
      floatingLabelText={this.props.title}
      value={this.state.value}
      onChange={this.handleChange.bind(this)}
      style={{width:"90%"}}
      >
      {(this.props.data).map((object, i)=>{
        return <MenuItem value={this.props.data[i]} primaryText={this.props.data[i]} />;
        })
      }
    </SelectField>
    );
  }
}

export default ChooseMenu;