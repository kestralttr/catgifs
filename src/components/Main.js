import React from 'react';
import $ from 'jquery';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.generateNewGIF = this.generateNewGIF.bind(this);
  }

  componentDidMount() {

    let img = document.getElementById("main-gif");
    let button = document.getElementById("new-gif-button");
    let drawers = document.getElementById("drawers");

    // page elements' opacity set to zero until initial gif loads
    drawers.style.opacity = 0;
    button.style.opacity = 0;
    img.style.opacity = 0;

    //random number used to select offset value
    let rand = Math.floor(Math.random()*4998);
    this.props.requestGIF(rand);

  }

  componentWillReceiveProps(newProps) {
    // initial gif load
    if(this.props.state.main.gifURL === null && newProps.state.main.gifURL !== null) {
      let img = document.getElementById("main-gif");
      img.src = newProps.state.main.gifURL;

      // page elements fade in upon initial gif load completion
      img.onload = () => {
        $( "#main-gif" ).fadeTo( "slow" , 1 );
        $( "#new-gif-button" ).fadeTo( "slow" , 1 );
        $( "#drawers" ).fadeTo( "slow" , 1 );
      };
      return;
    }
    //every subsequent gif load
    if(newProps.state.main.gifURL && newProps.state.main.gifURL !== this.props.state.main.gifURL) {
      let img = document.getElementById("main-gif");
      img.src = newProps.state.main.gifURL;
      img.onload = function() {
        //spinner deactivated
        let spinner = document.getElementById("cat-frame-background");
        spinner.className = "";
      };
    }
  }

  generateNewGIF(e) {
    e.preventDefault();

    //spinner activated
    let spinner = document.getElementById("cat-frame-background");
    spinner.className = "rainbow";

    //random number used to select offset value
    let rand = Math.floor(Math.random()*4998);
    this.props.requestGIF(rand);

  }


  render() {
    return(
      <div id="main-container">
        <div id="main-title"></div>
        <img id="main-gif" alt="Cat Pic"/><br></br>
        <button className="shine" onClick={this.generateNewGIF} id="new-gif-button">New GIF!</button>
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
