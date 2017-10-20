import React, { Component } from 'react';
import {Link,NavLink,Route } from 'react-router-dom';
import Home from './Home' ;
class Layout extends Component {
    render() {
        return (
        <header id="header">
            <nav className="navbar navbar-default">
                {/* Classic menu, responsive menu classic */}
                <div id="menu-classic">
                    <div className="menu-holder">
                        <ul>
                            <li>
                                <Link to="/" className={this.props.rechercher}>Rechercher</Link>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className={this.props.comprendre}>Comprendre</a>
                            </li>
                            <li>
                                <a href="contact.html" className={this.props.contacts}>Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
                { /* END Classic menu, responsive menu classic */  }
                { /* Button for Responsive Menu Classic */  }
                <div id="menu-responsive-classic">
                    <div className="menu-button">
                        <span className="bar bar-1"></span>
                        <span className="bar bar-2"></span>
                        <span className="bar bar-3"></span>
                    </div>
                </div>
            </nav>
       </header>
        );
    }
}

export default Layout;