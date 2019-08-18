import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavbarBrand, NavItem, NavLink, Nav, Navbar} from 'reactstrap';
import { AzureAD, LoginType, MsalAuthProviderFactory } from 'react-aad-msal';

import QrForm from "../QrForm/QrForm";
import "./NavBar.css";
import { userLoginSuccess, userLogout } from "../../actions/auth";

class NavBar extends Component {

    loginCallback = login => {
      return (
        <div style={{marginBottom: "2%"}}>
          <Navbar className="NavBar" expand="md">
              <NavbarBrand className="NavBrand" href="/">QR Code Generator</NavbarBrand>
              <Nav style={{marginRight: "10%"}} className="ml-auto Nav" navbar>
              <NavItem>
                  <NavLink className="Button" onClick={login}>Login/SignUp</NavLink>
              </NavItem>
              </Nav>
          </Navbar>
        </div>
      )
    };

    printAccountInfo = accountInfo => {
      console.log(accountInfo);
    };

    logoutCallback = logout => {
      return (
        <div style={{marginBottom: "2%"}}>
          <Navbar className="NavBar" expand="md">
              <NavbarBrand className="NavBrand" href="/">QR Code Generator</NavbarBrand>
              <Nav style={{marginRight: "10%"}} className="ml-auto Nav" navbar>
              <NavItem>
                  <NavLink className="NavLink" onClick={logout}>Logout</NavLink>
              </NavItem>
              </Nav>
          </Navbar>
          <QrForm></QrForm>
        </div>
      )
    };

    render() {

      const config = {
        auth: {
          authority: "https://login.microsoftonline.com/common",
          clientId: '4e66e352-4547-4fb9-9a38-6565da876080',
        },
        cache: {
          cacheLocation: "localStorage",
          storeAuthStateInCookie: true
        }
      };
        
      const authenticationParameters = {
          scopes: [
              'user.read'
          ]
      }
      
      return (
            <AzureAD
                provider={
                    new MsalAuthProviderFactory(config, authenticationParameters, LoginType.Popup)
                }
                unauthenticatedFunction={this.loginCallback}
                authenticatedFunction={this.logoutCallback}
                accountInfoCallback={this.printAccountInfo}
            />
      )
    }
}

const mapStateToProps = (state) => ({user: state.userName});
const mapDispatchToProps = (dispatch) => bindActionCreators({ userLoginSuccess, userLogout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);