import React, { Component } from 'react'


class Drumpad extends Component {

  componentDidMount() {
    console.log(this.audio)
    document.addEventListener("keydown", this.handleKeys);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeys);
  }

  handleKeys = e => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0;
      this.props.updateDisplay(this.props.id);
    }
  }

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0;
    this.props.updateDisplay(this.props.id);

  };


  render() {

    return (
      <div
        className="drum-pad"
        id={this.props.id}
        onClick={this.handleClick}
      >
        <p> {this.props.letter} </p>
        <audio
          className="clip"
          src={this.props.src}
          id={this.props.letter}
          ref={ref => this.audio = ref}
        />
      </div>
    )
  }

}



export default Drumpad;
