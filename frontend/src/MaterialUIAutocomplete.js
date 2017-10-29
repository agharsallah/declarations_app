import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import axios from 'axios' ;
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Redirect,withRouter } from 'react-router-dom';
import SearchIcon from 'material-ui/svg-icons/action/search';
import config from './config' ;
injectTapEventPlugin();

class MaterialUIAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.onNewRequest = this.onNewRequest.bind(this);
    this.state = {
      dataSource : [],
      inputValue : '',
      redirect: false,
      url:''
    }
  }
  onNewRequest(searchTerm) {
    let url = '/'+searchTerm.value+"/";
    //window.location =url;
    this.setState({ redirect: true,url:url })
  }
  onUpdateInput(inputValue) {
    this.setState({
      inputValue: inputValue
    }, function() {
      this.performSearch();
    });
  }
  performSearch() {
    const
    self = this,
      url  = config.apiUrl+'/api/getnames/' + this.state.inputValue;

    if(this.state.inputValue !== '') {
      axios({
        method: 'get',
        url: url,
        headers: {
            'name': 'barlamen',
            'password': 'b@rlamen1'
        }
      })
      .then(function (response) {
        console.log(response);
        var  retrievedSearchTerms;
        retrievedSearchTerms = (response.data).map(function(result) {
          return {text:result._id.name+' '+result._id.lastName,value:result._id.name+'**'+result._id.lastName}
        });
        console.log("retre",retrievedSearchTerms);
        console.log("aaaaaaa",response.data);
        self.setState({
          dataSource: retrievedSearchTerms,
          allMatch:response.data
        });

      })
      .catch(function (error) {
        console.log(error);
      });

    }
  }

  render() {
    let url = this.state.url
    return (
      <div >

        { 
          this.state.redirect ? <Redirect push to={url}/>:
          <div >
          <SearchIcon style={{position: 'absolute', right: 12, top: 10, width: 28, height: 28}}/>
          <AutoComplete
           dataSource    = {this.state.dataSource}
           onUpdateInput = {this.onUpdateInput}
           filter={AutoComplete.fuzzyFilter}
           onNewRequest={this.onNewRequest}
           hintText='Taper un nom ..'
           fullWidth={true}
          />
          </div>
        }
        
      </div>
        )
  }
}

export default MaterialUIAutocomplete;