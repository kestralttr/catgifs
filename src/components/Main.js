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

    let rand = Math.floor(Math.random()*25);
    let gifURL;
    let img = document.getElementById("main-gif");

    fetch("http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC")
    .then((response) => {
      return response.json();})
    .then((json) => {
      gifURL = json.data[rand].images.original.url;
      img.src = gifURL;
    });

  }

  generateNewGIF(e) {
    e.preventDefault();
    console.log(this.props);

    let rand = Math.floor(Math.random()*25);
    let gifURL;
    let img = document.getElementById("main-gif");
    let totalCount;

    fetch("http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC")
    .then((response) => {
      return response.json();})
    .then((json) => {

      gifURL = json.data[rand].images.original.url;
      totalCount = json.pagination.total_count;

      console.log("total count: ", totalCount);
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
