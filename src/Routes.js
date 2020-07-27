
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./screens/home";
import Write from "./screens/write";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Write" component={Write} />
                </Switch>
            </Router>
        )
    }
}
