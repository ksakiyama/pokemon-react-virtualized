import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import NormalPage from "./containers/NormalPage";
import VirtualizedPage from "./containers/VirtualizedPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={VirtualizedPage} />
        <Route path="/normal" component={NormalPage} />
        <Route path="/virtualized" render={() => <Redirect to="/" />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
