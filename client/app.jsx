import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map.jsx';
import About from './components/About.jsx';

class Location extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      city: null,
      state: null,
      country: null,
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind(this);
    
  }
  toggleModal () {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  

  componentDidMount() {
    let listingId = 89;
    fetch(`/api/location/${listingId}`, {method: 'GET'})
    .then ( (results) => {
      return results.json()
    })
    .then( (data) => {

      let {address} = data;
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
        <div>{ (this.state.lat !== null && this.state.lng !== null) ?  <Map lat={this.state.lat} lng={this.state.lng}/> : <div>loading...</div>}</div>
        <div><About open={this.state.showModal} onClose={this.toggleModal}/></div>
        <button onClick={this.toggleModal}>More About Location</button>
      </div>
    )
  }
}

ReactDOM.render(<Location />, document.getElementById('app'));