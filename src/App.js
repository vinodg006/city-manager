import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routeConfig from "./routeConfig";
import NavBar from "./common/components/NavBar";
import "./App.css";
import { loadAllCities } from "./actions/allCitiesActions";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadAllCities());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <NavBar />
            <Switch>
              {routeConfig.map(
                ({ path, component: Component, isExact }, index) => (
                  <Route
                    key={index}
                    {...(isExact ? { exact: true } : {})}
                    path={path}
                    component={Component}
                  />
                )
              )}
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
