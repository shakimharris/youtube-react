import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom";

class Auth0ProviderWithHistory extends React.Component {
  //REACT_APP_AUTH0_DOMAIN = dev - clonetv.us.auth0.com;
  //REACT_APP_AUTH0_CLIENT_ID = IcICom3h2gQynmys94VnywEQy1I8iW99;
  domain = "dev-clonetv.us.auth0.com";
  //process.env.REACT_APP_AUTH0_DOMAIN;
  clientId = "IcICom3h2gQynmys94VnywEQy1I8iW99";
  //process.env.REACT_APP_AUTH0_CLIENT_ID;
  audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  onRedirectCallback = (appState) => {
    this.props.history.push(
      appState ? this.history.returnTo : window.location.pathname
    );
  };

  render() {
    return (
      <Auth0Provider
        domain={this.domain}
        clientId={this.clientId}
        redirectUri={window.location.origin}
        onRedirectCallback={this.onRedirectCallback}
        //audience={this.audience}
      >
        {this.props.children}
      </Auth0Provider>
    );
  }
}

export default withRouter(Auth0ProviderWithHistory);
