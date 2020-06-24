import React, { Component, createRef} from 'react';

class Map extends Component {


  // get googleMapDiv() {
  //   return document.getElementById("google-map")
  // }
  constructor(props) {
    super(props);
    this.mapRef = React.createRef(),
    this.map = null,
    this.marker - null
  }

  createMap (lat, lng) {
    return (new window.google.maps.Map(this.mapRef.current, {
      zoom: 16,
      center: {lat, lng},
      disableDefaultUI: true,
      }))
  }

  createMarker = () =>
  new window.google.maps.Marker({
    position: { lat: 43.642567, lng: -79.387054 },
    map: this.googleMap,
  })

  componentDidMount(){
    const googleMapScript = document.createElement('script');
    googleMapScript.src = 
      `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_AP_KEY}&libraries=places`;
    
      window.document.body.appendChild(googleMapScript);
      googleMapScript.addEventListener('load', {
        this.map = this.createMap(),
        this.marker = this.createMarker()
      })
  }

  render() {
    return(
      <div
      id="map"
      ref={this.mapRef}
      style={{width: '400px', height: '300px'}}
      />
    )
  }
}

export default Map;