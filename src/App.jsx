import React, { Component } from "react";
import { Switch, Route,  withRouter } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home2";
import Nav from "./Components/Nav/Nav";
import AlphaVerses from "./Components/AlphabetsVerses/AlphaVerses";
import NavResponsive from "./Components/Nav/NavResponsive";
import SituationsPage from "./Components/Situations/SituationsPage";
import SituationsReadMorePage from "./Components/Situations/SituationsReadMorePage";


class App extends Component {
  render() {
    const loc = window.location.pathname;

    const changeMenuByLocation = loc.includes("/alphabets-versets") ? (
      <NavResponsive
        menuNav={["Accueil", "Alphabets versets", "Mes situations"]}
        menuLinks={["/", "/alphabets-versets", "/mes-situations"]}
      />
    ) : (
      <Nav
        menuNav={["Accueil", "Alphabets versets", "Mes situations"]}
        menuLinks={["/", "/alphabets-versets", "/mes-situations"]}
      />
    );

    return (
      <div className="app">
        {changeMenuByLocation}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/alphabets-versets" component={AlphaVerses} />
          <Route exact path="/mes-situations" component={SituationsPage} />
          <Route
            exact
            path="/mes-situations/:id"
            component={SituationsReadMorePage}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
