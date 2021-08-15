import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./context";
import Menu from "./pages/Menu";
import Checkout from './pages/Checkout'
function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact={true} path="/menu">
          <Menu />
        </Route>
        <Route>
          <Checkout/>
        </Route>
      </Switch>
    </AppProvider>
  );
}

export default App;
