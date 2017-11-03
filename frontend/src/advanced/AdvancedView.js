/* this is the component that loads when we click search (Advanced search), this component gets name LastName from the Db of the users that have the searched key words */
import React, { Component } from 'react';
import axios from 'axios' ;
import config from '../config' ;
import Layout from '../Layout' ;
import Pagination from './Pagination' ;

class AdvancedView extends Component {
  constructor(props){
    super(props);
    this.state={declarations:[],currentPage:1}
  }
  onPageChangeFromPagination(newPage){
    this.setState({currentPage: newPage});
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
    console.log(Pagination);
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
                            <h2 className="margin-bottom-null left">L'historique de d&eacute;claration.</h2>
                        </div>
                    </div>
                  </div>
              </div>
              {/* end Title */}
      {console.log(this.state.declarations)}
            <Pagination currentPage={this.state.currentPage} totalPages={100} onChange={this.onPageChangeFromPagination.bind(this)} />
              {this.state.declarations.map(function(object){ return<p>{object._id.name} </p>})}
            </div>
      </div>

    </div>
    );
  }
}

export default AdvancedView;