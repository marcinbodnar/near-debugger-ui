import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Error, NotFound } from "./common/Errors";

import "../index.css";

import { BeaconBlockDetailWithRouter } from "./blocks/BeaconBlockDetail";
import { BeaconChainDetailWithRouter } from "./blocks/BeaconChainDetail";
import { ContractDetailWithRouter } from "./contracts/ContractDetail";
import { ShardBlockDetailWithRouter } from "./blocks/ShardBlockDetail";
import { ShardChainDetailWithRouter } from "./blocks/ShardChainDetail";
import { TransactionDetailWithRouter } from "./transactions/TransactionDetail";
import { TransactionsDetailWithRouter } from "./transactions/TransactionsDetail";
import { AccountsDetailWithRouter } from "./accounts/AccountsDetail";
import { AccountDetailWithRouter } from "./accounts/AccountDetail";
import { ContractsDetailWithRouter } from "./contracts/ContractsDetail";
import ResponsiveContainer from "./responsive/ResponsiveContainer";
import Footer from "./common/Footer";
import DashboardDetailWithRouter from "./dashboard/DashboardDetail";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
const theme = {};

// const PATH_PREFIX = process.env.REACT_APP_PATH_PREFIX
const PATH_PREFIX = process.env.PUBLIC_URL;

class Routing extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />

        <Router basename={PATH_PREFIX}>
          <ThemeProvider theme={theme}>
            <ResponsiveContainer>
              <Switch>
                <Route exact path="/" component={DashboardDetailWithRouter} />
                <Route
                  exact
                  path="/beacon-chain"
                  component={BeaconChainDetailWithRouter}
                />
                <Route
                  exact
                  path="/beacon-block/:blockIndex"
                  component={BeaconBlockDetailWithRouter}
                />
                <Route
                  exact
                  path="/shard-chain"
                  component={ShardChainDetailWithRouter}
                />
                <Route
                  exact
                  path="/shard-block/:blockIndex"
                  component={ShardBlockDetailWithRouter}
                />
                <Route
                  exact
                  path="/transactions"
                  component={TransactionsDetailWithRouter}
                />
                <Route
                  exact
                  path="/transaction/:hash"
                  component={TransactionDetailWithRouter}
                />
                <Route
                  exact
                  path="/contracts"
                  component={ContractsDetailWithRouter}
                />
                <Route
                  exact
                  path="/contract/:name"
                  component={ContractDetailWithRouter}
                />
                <Route
                  exact
                  path="/accounts"
                  component={AccountsDetailWithRouter}
                />
                <Route
                  exact
                  path="/account"
                  component={AccountDetailWithRouter}
                />
                <Route exact path="/error" component={Error} />
                <Route component={DashboardDetailWithRouter} />
              </Switch>
              <Footer />
            </ResponsiveContainer>
          </ThemeProvider>
        </Router>
      </div>
    );
  }
}

export default Routing;
