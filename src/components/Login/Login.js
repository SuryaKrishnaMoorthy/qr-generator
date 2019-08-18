import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AzureAD, LoginType, MsalAuthProviderFactory } from 'react-aad-msal';
import { Button } from "reactstrap";

import { userLoginSuccess, userLogout } from "../../actions/auth";
class Login extends Component {
    
    loginCallback = login => {
        console.log("hi");
        
        return <Button style={{ marginTop: "5%"}} onClick={login}>Login</Button>;
    };
    
    printAccountInfo = (accountInfo, { dispatch }) => {
        console.log(accountInfo);
        const userInfo = accountInfo.account.userName;
        this.setState({userInfo});
        dispatch(this.props.userLoginSuccess(userInfo))
    };

    logoutCallback = logout => {
        this.props.history.push("/form");
        return (
            <div>
            You're logged in
            <Button style={{ marginTop: "5%"}} onClick={logout}>Logout</Button>
            </div>
        );
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
        );
    }
}

// const mapStateToProps = (state) => ({ user: state.user })
  
// const mapDispatchToProps = (dispatch) => bindActionCreators({ userLoginSuccess, userLogout }, dispatch)

export default connect(null, mapDispatchToProps)(Login);