import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map.jsx';
import About from './components/About.jsx';

class Location extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listingId: this.getListingId(),
      lat: null,
      lng: null,
      city: null,
      state: null,
      country: null,
      description: null,
      gettingAround: null,
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind(this);
    
  }

  getListingId(){

    /*Use this for if url has query params */
    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // return urlParams.get('id');

    /*  accessing listingID as an endpoint */
    return window.location.pathname.slice(1, -1);
  }
  
  toggleModal () {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  

  componentDidMount() {
    const {listingId} = this.state;
    fetch(`http://localhost:2001/api/location/${listingId}`, {method: 'GET'})
    .then ( (results) => {
      return results.json()
    })
    .then( (data) => {

      let {address, description, gettingAround} = data;
      this.setState({
        lat: Number(address.latitude),
        lng: Number(address.longitude),
        city: address.city,
        state: address.state,
        country: address.country,
        description,
        gettingAround
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return(
      <div>
        <h2>Location</h2>
        {(this.state.lat !== null && this.state.lng !== null) ?  <Map id={'map'} style={{zIndex: -1, position: 'relative', width: '100%', height: 300, borderRadius: '12px'}} lat={this.state.lat} lng={this.state.lng}/> : <div>loading...</div>}
        <About open={this.state.showModal} onClose={this.toggleModal} city={this.state.city} state={this.state.state} country={this.state.country} description={this.state.description} gettingAround={this.state.gettingAround} lat={this.state.lat} lng={this.state.lng}/>
        <h3>{this.state.city}, {this.state.state}, {this.state.country}</h3>
        <p>{this.state.description}</p>
        <p><button onClick={this.toggleModal}>More about the location</button></p>
      </div>
    )
  }
}

ReactDOM.render(<Location />, document.getElementById('location'));