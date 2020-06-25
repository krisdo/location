import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map.jsx';

class Location extends React.Component {

  constructor(props) {
    super(props);
    this.state = {


    }
  }

  render() {
    return(
      <div>Location
        <div><Map/></div>
      </div>
    )
  }
}

ReactDOM.render(<Location />, document.getElementById('app'));