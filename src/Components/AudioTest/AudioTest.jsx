import React, { Component } from "react";
import proverbes19 from "./audio/A/proverbes19-17.mp3";
import psaumes2 from "./audio/A/psaume2-4.mp3";
import { Howl, Howler } from "howler";

const audioClips = [
  { sound: proverbes19, label: "Proverbes19", id: 1 },
  { sound: psaumes2, label: "Psaumes2", id: 2 }
];
export default class AudioTest extends Component {
  SoundPlay = (src, id) => {
    let sound = new Howl({
      src: [src],

      onload: event => {
        // values depends on how letter was targeted (either pressed or clicked). Click can be done either on div or kbd element, hence the 2 last possibilities respectively.
        console.log(event);
        if (!sound) return;

        sound.currentTime = 0;
        sound.play();
      }
    });

    // // Fires when the sound finishes playing.
    // sound.on("end", function() {
    //   return sound.playing(id);
    // });
  };

  RenderButtonAndSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <button
          refs={`sound-${soundObj.id}`}
          id={index + 1}
          key={index}
          onClick={() => this.SoundPlay(soundObj.sound, soundObj.id)}
        >
          {soundObj.label}
        </button>
      );
    });
  };
  render() {
    Howler.volume(1.0);

    return <div>Audio {this.RenderButtonAndSound()}</div>;
  }
}
