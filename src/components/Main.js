import React from 'react';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.generateNewGIF = this.generateNewGIF.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    // this.props.requestTotalCount();

    let rand = Math.floor(Math.random()*4998);
    let gifURL;
    let img = document.getElementById("main-gif");
    img.style.opacity = 0;

    fetch("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=1&offset=" + rand.toString())
    .then((response) => {
      return response.json();})
    .then((json) => {
      gifURL = json.data[0].images.original.url;
      img.src = gifURL;
      img.onload = function() {
        img.style.opacity = 1;
      };
    });

  }

  componentWillReceiveProps(newProps) {
    console.log("newProps: ", newProps);
    if(newProps.state.main.gifURL && newProps.state.main.gifURL !== this.props.state.main.gifURL) {
      let img = document.getElementById("main-gif");
      img.src = newProps.state.main.gifURL;
      img.onload = function() {
        let spinner = document.getElementById("cat-frame-background");
        spinner.className = "";
      };
    }
  }

  generateNewGIF(e) {
    e.preventDefault();
    console.log(this.props);

    let rand = Math.floor(Math.random()*4998);
    let spinner = document.getElementById("cat-frame-background");
    spinner.className = "rainbow";
    this.props.requestGIF(rand);

  }


  render() {
    return(
      <div id="main-container">
        <div id="main-title"></div>
        <img id="main-gif" alt="Cat Pic"/><br></br>
        <button onClick={this.generateNewGIF} id="new-gif-button">New GIF!</button>
        <div id="drawers-spacer"></div>
        <div id="drawers">
          <img id="cat-frame-background" alt=""></img>
          <img id="cat-frame-cat" alt="frame cat" src="../../images/catframe_cat1.png" />
          <img id="cat-frame" alt="cat frame" src="../../images/catframe1.png"/>
        </div>
      </div>
    );
  }

}

export default Main;
