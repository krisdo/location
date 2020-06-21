import React from 'react';
import ReactDOM from 'react-dom';

class Location extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>Location</div>
    )
  }
}

ReactDOM.render(<Location />, document.getElementById('app'));