import React, { Component } from 'react'

 class Player extends Component {

    state = { play: false };

  componentWillMount() {
    this.setState({ play: true });
  }

  play = () => {
    alert("f")
    if (this.state.play) {
      this.setState({ play: false });
      this.audio.pause();
    } else {
      this.setState({ play: true });
      this.audio.play();
    }
  }

  render() {

    return (
      <div>
      <audio src={this.props.audio}
        ref={(audio) => { this.audio = audio }}
        autoPlay
      />
      <div onClick={this.play} className={!this.state.play ? "icon ion-play play" : "icon ion-pause pause"} />
      </div>
    )
  }
}

export default class Audio extends Component {
  render() {
    return (
      <div>
        <Player audio={["./knock-sound.mp3","./knock-sound.mp3"]}/>
      </div>
    )
  }
}

