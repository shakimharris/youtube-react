import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./store/configureStore";
//import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderWithHistory from "../src/components/Auth/auth0-provider-with-history";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
