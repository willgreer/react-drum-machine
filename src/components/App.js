import React, { Component } from 'react';

import "./styles/App.scss"
import Drumpad from "./Drumpad";


const drumSounds = [
  {
    id: 'New Wave Kick',
    letter: 'Q',
    src: 'https://www.myinstants.com/media/sounds/kick-newwave.mp3',
  },
  {
    id: 'Analog Clap',
    letter: 'W',
    src: 'https://www.myinstants.com/media/sounds/clap-analog.mp3',
  },
  {
    id: 'EDM Snare',
    letter: 'E',
    src: 'https://www.myinstants.com/media/sounds/snare-big.mp3',
  },
  {
    id: 'Analog Tom',
    letter: 'A',
    src: 'https://www.myinstants.com/media/sounds/tom-analog.mp3',
  },
  {
    id: 'Electro Chirp',
    letter: 'S',
    src: 'https://www.myinstants.com/media/sounds/openhat-analog.mp3',
  },
  {
    id: 'Old School Clap',
    letter: 'D',
    src: 'https://www.myinstants.com/media/sounds/clap-crushed.mp3',
  },
  {
    id: '808 Kick',
    letter: 'Z',
    src: 'https://www.myinstants.com/media/sounds/tom-808.mp3',
  },
  {
    id: 'Lofi Snare',
    letter: 'X',
    src: 'https://www.myinstants.com/media/sounds/snare-lofi01.mp3',
  },
  {
    id: 'Tiny Hihat',
    letter: 'C',
    src: 'https://www.myinstants.com/media/sounds/openhat-808.mp3',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Click or press a key!",
    };
  }

  updateDisplay = display =>
    this.setState({ display });

  render() {
    return (
      <>
        <div className="header">
          react-drum-machine:
        </div>
        <div id="drum-machine">
          <div id="display">{this.state.display}</div>
          <div id="drum-pad--container">
            {drumSounds.map(drumpad => (
              <Drumpad
                updateDisplay={this.updateDisplay}
                key={drumpad.id}
                id={drumpad.id}
                letter={drumpad.letter}
                src={drumpad.src}
              />
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default App;
