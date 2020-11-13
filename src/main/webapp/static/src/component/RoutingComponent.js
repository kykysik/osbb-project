import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import React from "react";
import BuildingRegistrationInfo from "./BuildingRegistrationInfo";
import RegistrationComponent from "./RegistrationComponent";
import SuccessfulRegistration from "./SuccessfulRegistration";


const RoutingComponent = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/osbb/building/registration">Building Registration Form</Link>
                    </li>
                    <li>
                        <Link to="/osbb/building/info">Building Registration Info</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/osbb/building/registration">
                        <RegistrationComponent/>
                    </Route>
                    <Route path="/osbb/building/info">
                        <BuildingRegistrationInfo/>
                    </Route>
                    <Route path="/osbb/building/registration/successful"
                           component={props => <SuccessfulRegistration {...props} />}/>
                    {/*component={() => <SuccessfulRegistration title={`Props through component`} />}*/}
                </Switch>
            </div>
        </Router>
    );
}

export default RoutingComponent;