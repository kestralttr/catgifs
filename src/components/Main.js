import React from 'react';
import {Link} from 'react-router-dom';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return(
      <div>
        <p>HELLO THERE</p>
        <li><Link to="/about">About</Link></li>
      </div>
    );
  }

}

export default Main;
