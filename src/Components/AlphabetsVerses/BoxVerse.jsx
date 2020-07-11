import React, { Component } from "react";
import { Howl, Howler } from "howler";
// import sound from "../../audio/knock-sound.mp3";

import "./AlphaVerses.scss";
var sound = null

export default class BoxVerse extends Component {
  state = {
    alphaClickisActived: false,
    mutedClickisActived: false,
    arrowCliked: false,
    matchesScreen: window.matchMedia("(max-width: 568px)").matches,
    loading: true,
    soundActived: false,
    index: 0,
    play: false
  };

  componentDidMount() {
    const handler = e => this.setState({ matchesScreen: e.matches });
    window.matchMedia("(max-width: 568px)").addListener(handler);

    this.prevVerses();
    this.nextVerses();

  }

 playSound = (src,id) => {
    
    if (this.state.soundActived) {
      this.setState({ soundActived: false });
      return this.paused();
    } else {
      sound = new Howl({
        src: [src],
        id: id,
        
      });
      this.setState({ soundActived: true });
      sound.play();
      console.log("finished")
    }

    console.log(sound.currentTime)
   }

   paused = (id) => {
    return sound.pause(id);
  }
 
  alphaActived = () => {
    this.setState({
      alphaClickisActived: !this.state.alphaClickisActived,
      arrowCliked: !this.state.arrowCliked,   
    });
  };


  activedSound = () => {
    this.setState({soundActived: !this.state.soundActived})
  }

  prevVerses = () => {
    const lists = this.props.verseLength;

    if (lists.length === 1) {
      return this.setState({
        index: 0,
        soundActived: false
      });
    }
    if (this.state.index === 0) {
      this.setState({
        index: lists.length - 1,
        soundActived: false
      });
    } else {
      this.setState({
        index: this.state.index - 1,
        soundActived: false
      });
    }

    let verseId = document.getElementById(`number`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();


  };



    nextVerses = () => {
    const lists = this.props.verseLength;

    if (lists.length === 1) {
      return this.setState({
        index: 0,
        soundActived: false
      });
    }
    if (this.state.index < lists.length - 1) {
      this.setState({
        index: this.state.index + 1,
        soundActived: false
      });
    } else {
      this.setState({
        index: 0,
        soundActived: false
      });
    }
    let verseId = document.getElementById(`number`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 

      Howler.stop();
  };


  render() {
    const { alphaClickisActived, arrowCliked, index, matchesScreen } = this.state;
   

    let {
      letter,
      blockLetterBgColor,
      blockLetterTextColor,
      verseLength,
      id,
      alphaClick,
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

    const lists = verseLength;
    
    const listVerses = Object.keys(lists).map(i => lists[i])


    let vars = listVerses.map(el => {
      return el.verse
    })

    let bgDesk =  listVerses.map(el => {
      return el.bgVerses;
    })

    let bgResponsive =  listVerses.map(el => {
      return el.bgResponsiveVerses;
    })



    let versesName = listVerses.map((el,index) => {

      const nameVerses = el.name.split(" ")
      const name = el.name;

      let outputVerse = nameVerses[0].length >= 7
      ? nameVerses[0]
      : nameVerses[0].concat(" ", nameVerses[1]);

      let versesSecond = name.substr(
        outputVerse.length,
        name.length
      );

      return (
        <div key={index}>
          <div className="main-verses-big great-wishes">{outputVerse}</div>  
          <div className="second-verses"> {versesSecond}</div> 
        </div>
      )
      
    })
  
  
    // MANAGE SOUND VERSES
    let prevVerseMaxLen = vars[lists.length -1];
    let prevVerse = vars[index -1];
    let nextVerse = vars[index +1];
   

    let sounds =  listVerses.map(el => {
      return el.verseSound;
    })


  //   function pauses() {
  //     sound.stop();
  //   }

  //   function plays() {
  //     return sound.play();
  //   }
   
  //   function playSound(src) {
  //   //check if sound is null, if not stop previous sound and unload it
  //   if (sound) {
 
  //     return pauses();
  //   }
  //   sound = new Howl({
  //       src: src,
  //       loop: true
  //   });
  //   return plays();

  //   console.log(sound)
  // }



  

    // BACKGROUND IMAGE FOR DESKTOP AND RESPONSIVE
    const dirDesktopVerse = bgDesk[index]
    const dirResponsiveVerse = bgResponsive[index]

  
    const bgVersesOutput = { 
      background:` ${matchesScreen ?  ` ${blockLetterBgColor} url("${dirResponsiveVerse}") no-repeat fixed center center` : `${blockLetterBgColor} url("${dirDesktopVerse}") no-repeat fixed center center`}`,
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
            <div className="anime" id="number">
            <div onClick={() => this.playSound( sounds[index])} 
        >
            <i
              style={blkLetterTextColor}
              className={`${!this.state.soundActived ? "fa fa-volume-up sound-verse" : "fa fa-pause sound-verse"}`}
              onClick={this.activedSound}
            ></i>
            </div>    
            {versesName[index]}
            <div className="horizontal-line-center"></div>
             <div className="arrow-verses-block">
              <span className="left arrow" onClick={this.prevVerses.bind(this)} title={index === 0 ? prevVerseMaxLen : prevVerse}><i class="fas fa-sort-up"></i></span>
              <span className="block-verses">{vars[this.state.index]}</span>
              <span className="right arrow" onClick={this.nextVerses.bind(this)} title={nextVerse}><i class="fas fa-sort-up"></i></span>
            </div>
            </div>
            <button
              className="btn-random-verses"
              onClick={this.nextVerses.bind(this)}
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
