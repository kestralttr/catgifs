import React from 'react';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.generateNewGIF = this.generateNewGIF.bind(this);
  }

  componentDidMount() {

    let rand = Math.floor(Math.random()*25);
    let gifURL;
    let img = document.getElementById("main-gif");

    fetch("http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC")
    .then((response) => {
      return response.json();})
    .then((json) => {
      console.log("here!");
      gifURL = json.data[rand].images.original.url;
      console.log(gifURL);
      img.src = gifURL;
    });

  }

  generateNewGIF(e) {
    e.preventDefault();

    let rand = Math.floor(Math.random()*25);
    let gifURL;
    let img = document.getElementById("main-gif");

    fetch("http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC")
    .then((response) => {
      return response.json();})
    .then((json) => {
      console.log("here!");
      gifURL = json.data[rand].images.original.url;
      console.log(gifURL);
      img.src = gifURL;
    });
  }


  render() {
    return(
      <div>
        <h1 id="main-h1">Cat GIFs!</h1>
        <img id="main-gif" alt="Cat Pic"/><br></br>
        <button onClick={this.generateNewGIF} id="new-gif-button">New GIF!</button>
      </div>
    );
  }

}

export default Main;
