/* this is the component that loads when we click search (Advanced search), this component gets name LastName from the Db of the users that have the searched key words */
import React, { Component } from 'react';
import config from '../config' ;
import Layout from '../Layout' ;
import { Redirect,withRouter } from 'react-router-dom';
import { Form, Text, Radio, RadioGroup, Select, Checkbox } from 'react-form';


class TopTen extends Component {
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
  
  render() {
    const statusOptions = [
      {
        label: '1 ere declaration',
        value: 'single'
      },
      {
        label: 'changement de poste',
        value: 'relationship'
      },
      {
        label: "Retraite",
        value: 'complicated'
      }
    ];
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
                            <h2 className="margin-bottom-null left">Remplissez votre declaration en ligne.</h2>
                        </div>
                    </div>
                  </div>
              </div>
              {/* end Title */}
              <div>
              <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
                { formApi => (
                  <form onSubmit={formApi.submitForm} id="form2">
                    <label htmlFor="firstName">nom</label>
                    <Text field="firstName" id="firstName" />
                    <label htmlFor="lastName">Prenom</label>
                    <Text field="lastName" id="lastName" />
                    <RadioGroup field="gender">
                      { group => (
                        <div>
                          <label htmlFor="male" className="mr-2">Male</label>
                          <Radio group={group} value="male" id="male" className="mr-3 d-inline-block" />
                          <label htmlFor="female" className="mr-2">Female</label>
                          <Radio group={group} value="female" id="female" className="d-inline-block" />
                        </div>
                      )}
                    </RadioGroup>
                    <label htmlFor="bio">Bio</label>
                    <Checkbox field="authorize" id="authorize" className="d-inline-block" />
                    <label htmlFor="status" className="d-block">Type de declaration</label>
                    <Select field="status" id="status" options={statusOptions} />
                    <button type="submit" className="mb-4 btn btn-primary">Submit</button>
                  </form>
                )}
              </Form>
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

export default TopTen;