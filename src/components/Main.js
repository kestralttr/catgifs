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
    this.props.requestTotalCount();

    let rand = Math.floor(Math.random()*4998);
    let gifURL;
    let img = document.getElementById("main-gif");

    fetch("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=1&offset=" + rand.toString())
    .then((response) => {
      return response.json();})
    .then((json) => {
      gifURL = json.data[0].images.original.url;
      img.src = gifURL;
    });

  }

  componentWillReceiveProps(newProps) {
    console.log("newProps: ", newProps);
    if(newProps.state.main.gifURL && newProps.state.main.gifURL !== this.props.state.main.gifURL) {
      let img = document.getElementById("main-gif");
      img.src = newProps.state.main.gifURL;
    }
  }

  generateNewGIF(e) {
    e.preventDefault();
    console.log(this.props);

    let rand = Math.floor(Math.random()*4998);

    this.props.requestGIF(rand);

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
