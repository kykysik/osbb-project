import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import AppComponent from "./component/app.component"

const App = lazy(() => import("./component/app.component"));
ReactDOM.render(
    <Suspense fallback={<p>loading....</p>}>
        <AppComponent />
    </Suspense>,
    document.querySelector("#root")
);