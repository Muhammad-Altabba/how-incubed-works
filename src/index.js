/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import Home from "views/Home.jsx";
import Landing from "views/examples/Landing.jsx";
import Examples from "views/Examples.jsx";
import BlockProofPage from "views/examples/BlockProofPage.jsx";
import TransactionProofPage from "views/examples/TransactionProofPage.jsx";
import ReceiptProofPage from "views/examples/ReceiptProofPage.jsx";
import LogProofPage from "views/examples/LogProofPage.jsx";
import AccountProofPage from "views/examples/AccountProofPage.jsx";
import CallProofPage from "views/examples/CallProofPage.jsx";
import Login from "views/examples/Login.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";
import PlayGroundPage from "views/playground/PlayGroundPage.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/home"
        exact
        render={props => <Home {...props} />}
      />
      <Route
        path="/examples"
        exact
        render={props => <Examples {...props} />}
      />
      <Route
        path="/playground"
        exact
        render={props => <PlayGroundPage {...props} />}
      />
      <Route
        path="/examples/blockproof"
        exact
        render={props => <BlockProofPage {...props} />}
      />
      <Route
        path="/examples/transactionproof"
        exact
        render={props => <TransactionProofPage {...props} />}
      />
      <Route
        path="/examples/receiptproof"
        exact
        render={props => <ReceiptProofPage {...props} />}
      />
      <Route
        path="/examples/logproof"
        exact
        render={props => <LogProofPage {...props} />}
      />
      <Route
        path="/examples/accountproof"
        exact
        render={props => <AccountProofPage {...props} />}
      />
      <Route
        path="/examples/callproof"
        exact
        render={props => <CallProofPage {...props} />}
      />
      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login-page" exact render={props => <Login {...props} />} />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
