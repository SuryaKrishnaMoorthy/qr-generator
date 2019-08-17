import React, { Component } from "react";
import { AzureAD, LoginType, MsalAuthProviderFactory } from 'react-aad-msal';
import { Button } from "reactstrap";

class Login extends Component {
    state = {
        userInfo: null
    }

    loginCallback = login => {
        return <Button onClick={login}>Login</Button>;
    };
    
    printAccountInfo = accountInfo => {
        console.log(accountInfo);
        const userInfo = accountInfo.account.userName;
        this.setState({userInfo});
    };

    logoutCallback = logout => {
        this.props.history.push("/form");
        return (
            <div>
            You're logged in
            <Button onClick={logout}>Logout</Button>
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

export default Login;