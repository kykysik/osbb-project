import React from "react";
import AppComponent from "./app.component";

export default class Another extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>

                <AppComponent/>
            </div>
        );
    }
}