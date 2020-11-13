import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import RoutingComponent from "./component/RoutingComponent";

ReactDOM.render(
    <Suspense fallback={<p>loading....</p>}>
        <RoutingComponent/>
    </Suspense>,
    document.querySelector("#root")
);