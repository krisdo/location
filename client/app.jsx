import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map.jsx';

class Location extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      city: null,
      state: null,
      country: null
    }
  }

  componentDidMount() {
    let listingId = 0;
    fetch(`/api/location/${listingId}`, {method: 'GET'})
    .then ( (results) => {
      return results.json()
    })
    .then( (data) => {
   
      let {address} = data;
      console.log(address.latitude);
      console.log(address.longitude);
      this.setState({
        lat: Number(address.latitude),
        lng: Number(address.longitude),
        city: address.city,
        state: address.state,
        country: address.country
      })
    })
  }

  render() {
    return(
      <div>Location
        <div>{this.state.city}, {this.state.state}, {this.state.country}</div>
        <div><Map lat={this.state.lat} lng={this.state.lng} /></div>
      </div>
    )
  }
}

ReactDOM.render(<Location />, document.getElementById('app'));