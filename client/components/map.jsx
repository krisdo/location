import React, { Component, createRef} from 'react';
import GOOGLE_MAP_API_KEY from '../../config.js';
import styled from 'styled-components';

const mapWrapper = styled.div`

`;

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
      zoom: 10,
      center: {lat, lng},
      zoomControl: true,
      streetViewControl: true,
      disableDefaultUI: true
      })
    })
  }

  createMarker (lat, lng){
    
    const markerIcon = {
      url: `${window.location.href}airbrb_home.png`,
      scaledSize: new google.maps.Size(62,62),
    };

    this.setState({
      marker: new google.maps.Marker({
        position: {lat, lng},
        map: this.state.map,
        icon: markerIcon
      }) 
    })

}

  componentDidMount(){
  
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