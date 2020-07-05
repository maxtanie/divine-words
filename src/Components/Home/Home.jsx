import React, { Component } from "react";

import { Howl, Howler } from "howler";
import homeVideo from "../../videos/girl-pool.mp4";
import homeless from "../../videos/donnerpauvre.jpg";
import HeaderContent from "../HeaderContent/HeaderContent";

export default class Home extends Component {
  state = {
    isVideoMuted: false,
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
        ? this.refs.vidRef.muted
        : !this.refs.vidRef.muted
    });
  };

  render() {
    const dir = process.env.PUBLIC_URL;
    const videoHome = dir + "videos/man-working.mp4";
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
              <i className="fal fa-volume-down icon-btn-anime" />
            ) : (
              <i className="fal fa-volume-up icon-btn-anime" />
            )}
          </div>
        </div>
      );
    };
    return (
      <div id="wrapper">
        <div className="video-container">
          <video autoplay="autoplay" loop="loop" muted="muted" ref="vidRef">
            <source src={videoHome} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <video ref="vidRef" loop autoPlay muted> src={videoHome} type="video/mp4">
            >
            <source  />
            
          </video> */}
        </div>

        <div className="layer-video"></div>
        {/* <div className="block-img">
          <img src={homeVideo} alt="image header" className="img-header" />
          
        </div> */}

        <HeaderContent
          titleWebsite="Divine Words"
          txtInfos={`Vous réconcilier avec la Parole de Dieu ou de vous \n
          enraciner davantage en elle car plus que des mots, mais des
          paroles divines.`}
        />
        <ButtonVideo />
      </div>
    );
  }
}
