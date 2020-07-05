import React, { Component } from "react";
// import sound from "../../audio/knock-sound.mp3";

import "./AlphaVerses.scss";

export default class BoxVerse extends Component {
  state = {
    alphaClickisActived: false,
    mutedClickisActived: false,
    arrowCliked: false,
    matchesScreen: window.matchMedia("(max-width: 568px)").matches,
    loading: true
  };

  componentDidMount() {
    const handler = e => this.setState({ matchesScreen: e.matches });
    window.matchMedia("(max-width: 568px)").addListener(handler);

  }


  alphaActived = () => {
    this.setState({
      alphaClickisActived: !this.state.alphaClickisActived,
      arrowCliked: !this.state.arrowCliked
    });
  };

  render() {
    const { alphaClickisActived, arrowCliked } = this.state;

    const {
      letter,
      verse,
      chosenVerse,
      blockLetterBgColor,
      blockLetterTextColor,
      arrayVerse,
      id,
      backgroundVerses,
      backgroundgResponsiveVerses,
      onClickSoundVerse,
      alphaClick,
      onClickRandomVerses
    } = this.props;

    const alpha = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];

    const {matchesScreen} = this.state;

    const versesChosen = chosenVerse.split(" ");
    const versesChosenSecond = chosenVerse;

    const versesMain =
      versesChosen[0].length >= 7
        ? versesChosen[0]
        : versesChosen[0].concat(" ", versesChosen[1]);

    const versesSecond = versesChosenSecond.substr(
      versesMain.length,
      versesChosenSecond.length
    );
      
    const dirDesktopVerse = backgroundVerses;
    const dirResponsiveVerse = backgroundgResponsiveVerses;

  
    const bgVersesOutput = {
      
      background:` ${matchesScreen ?  ` ${blockLetterBgColor} url("${dirResponsiveVerse}") no-repeat fixed center center` : `${blockLetterBgColor} url("${dirDesktopVerse}") no-repeat fixed center center`}`,
      // height: "100vh",
      // overflow: "hidden",
      // backgroundSize: "cover !important"
    }

    const blkLetterBgColor = {
      background: `${blockLetterBgColor}`
    };

    const blkLetterTextColor = {
      color: `${blockLetterTextColor}`
    };

    return (
      <div className="block-verse" >
        <div className="block" style={bgVersesOutput}></div>
        <div className="block-letter" style={blkLetterBgColor}>
          <div className="letter">{letter}</div>
          <i
            className={ `arrow-letters-click ${arrowCliked ? `fas fa-caret-up` : `fas fa-caret-down` } `}
            onClick={this.alphaActived}
          ></i>
          <div
            style={blkLetterBgColor}
            className={`letters-block  ${
              alphaClickisActived ? "show-block-alpha" : "hide-block-alpha"
            }`}
          >
            <div className="grid-alpha-verse">
              {alpha.map((letters, index) => {
                return (
                  <div
                    style={blkLetterTextColor}
                    id={index}
                    className="alpha-name"
                    onClick={alphaClick}
                    key={index}
                  >
                    {letters.toUpperCase()}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="content-verses center">
          <div className="block-verses">
            <div className="anime" id={id}>    
            <i
              style={blkLetterTextColor}
              className="fa fa-volume-up sound-verse"
              onClick={onClickSoundVerse}
            ></i>
            <div className="main-verses-big great-wishes">{versesMain}</div>

            <div className="second-verses">{versesSecond}</div>
            <div className="horizontal-line-center"></div>
            <div className="block-verses">{verse}</div>
            </div>

            <button
              className="btn-random-verses"
              onClick={onClickRandomVerses}
              style={blkLetterTextColor}
            >
              Nouveau verset
            </button>
          </div>
          </div> 
      </div>
    );
  }
}
