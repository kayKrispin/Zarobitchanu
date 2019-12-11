import React from "react";
import ForumContent from "../containers/ForumContent";
import ResetPassword from "../components/ResetPassword";
import TopicContent from "../containers/TopicContent";
import ThemeContent from "../containers/ThemeContent";
import AccountVeryfication from "../components/AccountVeryfication";
import { Switch, Route } from "react-router-dom";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={ForumContent} />
        <Route exact path="/themes/:id" component={ThemeContent} />
        <Route exact path="/themes/topics/:id" component={TopicContent} />
        <Route exact path="/verifyAccount/:code" component={AccountVeryfication} />
        <Route exact path="/resetPassword/:code" component={ResetPassword} />
    </Switch>
);

export default Routes;
