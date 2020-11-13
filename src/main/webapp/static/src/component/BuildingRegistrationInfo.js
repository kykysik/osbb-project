import React, {useContext} from "react";
import { map } from 'underscore'
import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";
import axios from "axios";


const BuildingRegistrationInfo = () => {

    const getApartmentsOfBuilding = () => {
        axios.post('http://localhost:5505/osbb/building/{id}')
            .then(res => {
                console.log(res);
                //return res.data;
            });
    };

    return (
        <div>Hello from another screen!</div>
    );
}

export default BuildingRegistrationInfo;