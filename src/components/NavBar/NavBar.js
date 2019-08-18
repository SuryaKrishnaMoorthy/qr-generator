import React, { Component } from 'react';
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import { NavbarBrand, NavItem, NavLink, Nav, Navbar} from 'reactstrap';

import "./NavBar.css";

class NavBar extends Component {
    render(){
        return (
            <div style={{marginBottom: "2%"}}>
              <Navbar className="NavBar" expand="md">
                  <NavbarBrand className="NavBrand" href="/">QR Code Generator</NavbarBrand>
                  <Nav style={{marginRight: "10%"}} className="ml-auto Nav" navbar>
                    
                      {
                        this.props.user
                        ? 
                        <NavItem>
                          <NavLink className="NavLink" href="/form">Create Form</NavLink>
                          <NavLink className="NavLink" href="/">Logout</NavLink>
                        </NavItem>
                        :
                        <NavLink className="NavLink" href="/">Login/SignUp</NavLink>
                        }
                   
                  </Nav>
              </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, null)(NavBar)