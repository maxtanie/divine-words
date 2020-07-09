import React, { Component } from "react";
import { Switch, Route,  withRouter } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home2";
import Nav from "./Components/Nav/Nav";
import AlphaVerses from "./Components/AlphabetsVerses/AlphaVerses";
import NavResponsive from "./Components/Nav/NavResponsive";
import SituationsPage from "./Components/Situations/SituationsPage";
import SituationsReadMorePage from "./Components/Situations/SituationsReadMorePage";
import sounds from './audio/A/knock-sound.mp3';
import sounds2 from './audio/A/audio.mp3'
import Sound from 'react-sound';

class App extends Component {
 

   playAudio() {
    let el = ["aud","aud2"];

    const audioElOne = document.getElementById(el[0])
    const audioElTwo = document.getElementById(el[1])
    audioElOne.play()
    audioElTwo.play();
  }
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
         {/* <div>
        <button onClick={this.playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element" id="aud">
          <source src={sounds}></source>
        </audio>
        <button onClick={this.playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element" id="aud2">
          <source src={sounds2}></source>
        </audio> */}
 
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
