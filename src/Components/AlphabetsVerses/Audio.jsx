import React, { useState, useEffect, Component } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.currentTime = 0;
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};




export default class Audio extends Component {
  render() {
    return (
      <div>
        <Player url="https://raw.githubusercontent.com/maxtanie/divine-words-img/master/audio/A/A-psaumes-60-12.mp3" />
      </div>
    )
  }
}
