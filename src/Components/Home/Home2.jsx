import React, { Component } from "react";
import video2 from "../../videos/teaserSupebook.mp4";
import "./Home2.scss";
import HeaderContent from "../HeaderContent/HeaderContent";

export default class Home2 extends Component {
  state = {
    isVideoMuted: true,
    isVideoPlayed: true
  };

  componentDidMount() {
    this.setState({
      isVideoPlayed: !this.state.isVideoPlayed
        ? this.refs.vidRef.play()
        : this.refs.vidRef.play()
    });
  }

  componentWillUnmount = () => {
    this.pauseAndPlayVideo();
    this.mutedAndUnmutedVideo();
  };

  pauseAndPlayVideo = () => {
    // Pause as well
    this.setState({
      isVideoPlayed: !this.state.isVideoPlayed
        ? this.refs.vidRef.play()
        : this.refs.vidRef.pause()
    });
  };

  mutedAndUnmutedVideo = () => {
    // You can use the play method as normal on your video ref
    this.setState({
      isVideoMuted: !this.state.isVideoMuted
        ? (this.refs.vidRef.muted = true)
        : (this.refs.vidRef.muted = false)
    });
  };

  render() {
    const ButtonVideo = () => {
      return (
        <div className="manage-video">
          <div className="btn-video" onClick={this.pauseAndPlayVideo}>
            {this.state.isVideoPlayed ? (
              <i className="fal fa-pause icon-btn-anime" />
            ) : (
              <i className="fal fa-play icon-btn-anime" />
            )}
          </div>
          <div className="btn-video" onClick={this.mutedAndUnmutedVideo}>
            {this.state.isVideoMuted ? (
              <i className="fal fa-volume-up icon-btn-anime" />
            ) : (
              <i className="fal fa-volume-mute icon-btn-anime" />
            )}
          </div>
        </div>
      );
    };
    return (
      <div className="wrapper">
        <div className="video-container">
          <video ref="vidRef" autoPlay muted loop>
            <source src={video2} type="video/mp4" />
          </video>
          <div className="video-layer"></div>
        </div>

        <HeaderContent
          titleWebsite="Divine Words"
          txtInfos={`Vous réconcilier avec la Parole de Dieu ou de vous \n
          enraciner davantage en elle car plus que des mots, mais des
          paroles divines.`}
        />
        <ButtonVideo/>
      </div>
    );
  }
}
