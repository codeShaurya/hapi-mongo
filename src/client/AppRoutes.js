import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import NotFound from './component/NotFound';
import AppLayout from './container/AppLayout/index';
import LandingPage from './container/Home/LandingPage';

class AppRoutes extends Component {
  render() {

    return (
        <BrowserRouter>
            <AppLayout>
                <Switch>
                    <Route
                    exact
                    path = {"/"}
                    component = {LandingPage} 
                    />
                    <Route component = {NotFound} />
                </Switch>
            </AppLayout>
        </BrowserRouter>
    );
  }
}

export default AppRoutes;