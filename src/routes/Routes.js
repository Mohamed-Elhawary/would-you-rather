import { React } from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import  {Dashboard, Leaderboard, QuestionPage, NewQuestion, Login, NotFound}  from 'views';
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute path="/" exact component={Dashboard} />
            <PrivateRoute path="/leaderboard" exact component={Leaderboard} />
            <PrivateRoute path="/question/:id" exact component={QuestionPage} />
            <PrivateRoute path="/new" exact component={NewQuestion} />
            <PrivateRoute path="/404" exact component={NotFound} />
            <Route path="/login" exact component={Login} />
            <Redirect to="/404" />
            {/* <PrivateRoute path="/new" component={NewQuestion} />
            
             */}
        </Switch>
    )
}

export default Routes;