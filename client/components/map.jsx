import React, { Component, createRef} from 'react';
import GOOGLE_MAP_API_KEY from '../../config.js';
import About from './About.jsx';


class Map extends Component {

  constructor(props) {
    super(props);
    this.mapRef = React.createRef(),
    this.state = {
      map: null,
      marker: null
    }
    this.createMap = this.createMap.bind(this);
    this.createMarker = this.createMarker.bind(this);
  }

  createMap (lat, lng) {
    this.setState({
      map: new google.maps.Map(this.mapRef.current, {
      zoom: 5,
      center: {lat, lng},
      zoomControl: true,
      streetViewControl: true
      })
    })
  }

  createMarker (lat, lng){
    this.setState({
      marker: new google.maps.Marker({
        position: {lat, lng},
        map: this.state.map
      }) 
    })

}

  componentDidMount(){
    // const lat = 34.052235;
    // const lng = -118.243683;
    const googleMapScript = document.createElement('script');
    googleMapScript.src = 
      `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', () => {
      this.createMap(this.props.lat, this.props.lng);
      this.createMarker(this.props.lat, this.props.lng);
    });
    
  }

  render() {
    return(
      <div
      id={this.props.id}
      ref={this.mapRef}
      style={this.props.style}>
      </div>
    )
  }
}

export default Map;