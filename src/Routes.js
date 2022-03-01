import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Sections/Main";
import Temporary from "./Sections/Temporary";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/temporary" component={Temporary} />
            </Switch>
        </Router>
    )
}

export default Routes;