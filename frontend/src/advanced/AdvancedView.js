/* this is the component that loads when we click search (Advanced search), this component gets name LastName from the Db of the users that have the searched key words */
import React, { Component } from 'react';
import axios from 'axios' ;
import config from '../config' ;
import Layout from '../Layout' ;
import Pagination from './Pagination' ;
import { Redirect,withRouter } from 'react-router-dom';

class AdvancedView extends Component {
  constructor(props){
    super(props);
    this.state={declarations:[],currentPage:1,redirect:false,url:''}
  }
  onPageChangeFromPagination(newPage){
    this.setState({currentPage: newPage});
  }
  performSearch(e){
    console.log(e);
    let searchTerm = e._id.name+"**"+e._id.lastName
    let url = '/name/'+searchTerm+"/";
    //window.location =url;
    this.setState({ redirect: true,url:url })
  }
  componentWillMount() {
    //console.log(queryString.parse(this.props.match.url));
    const search = this.props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    let objet,date,ministry;
    //setting the search critere to its value or empty string if none is chosen
    params.get('objet')=='_'?objet='':objet=params.get('objet')
    params.get('date')=='_'?date='':date=params.get('date')
    params.get('ministry')=='_'?ministry='':ministry=params.get('ministry')

    let url = config.apiUrl+'/api/getAdvancedDeclarations?objet='+objet+'&date='+date+'&ministry='+ministry;    
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
      self.setState({declarations:response.data});

    })
    .catch(function (error) {
      console.log(error);
    });

  }
  
  render() {
    return (
      <div>
      { 
        this.state.redirect ? <Redirect push to={this.state.url}/>:
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
                                  <li><a href="#">Recherche Avanc&eacute;e</a></li>
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
                            <h2 className="margin-bottom-null left">R&eacute;sultat de recherche.</h2>
                        </div>
                    </div>
                  </div>
              </div>
              {/* end Title */}
            
            <div className="fluid" >
            <div className="col-md-3"></div>
              <ul className="col-md-6">
                {this.state.declarations.map(function(object){    let perform = this.performSearch.bind(this,object)
                  return<li className="hover" style={{borderBottom: "1px solid #EBEBEB",
                float: "left",
                width: "100%",
                padding: "15px 25px",
                position: "relative"}}
                name={object._id.name}
                lastName={object._id.lastName}
                onClick={perform}
                > {object._id.name+' '+object._id.lastName} </li>},this)}
              </ul>
              <div className="col-md-3"></div>
            </div>
            
          </div>

      </div>
      <div className="fluid" >
      <div className="col-md-4"></div>  
      {/* <Pagination currentPage={this.state.currentPage} totalPages={100} onChange={this.onPageChangeFromPagination.bind(this)} /> */}
      </div>
    </div>
    }
    </div>
    );
  }
}

export default AdvancedView;