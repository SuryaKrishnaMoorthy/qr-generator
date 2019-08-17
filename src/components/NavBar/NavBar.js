import React, { Component } from 'react';
import { NavbarBrand, NavItem, NavLink, Nav, Navbar} from 'reactstrap';
import "./NavBar.css";

export default class NavBar extends Component {
    render(){
        return (
            <div style={{marginBottom: "2%"}}>
              <Navbar className="NavBar" expand="md">
                  <NavbarBrand className="NavBrand" href="/">QR Code Generator</NavbarBrand>
                  <Nav style={{marginRight: "10%"}} className="ml-auto Nav" navbar>
                    <NavItem>
                      {
                        this.props.userName 
                        ? 
                        <NavLink className="NavLink" href="/">Create Form</NavLink>
                        :
                        <NavLink className="NavLink" href="/">Login/SignUp</NavLink>
                        }
                    </NavItem>
                  </Nav>
              </Navbar>
            </div>
        )
    }
}