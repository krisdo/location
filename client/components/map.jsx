import React, { Component, createRef} from 'react';

class Map extends Component {


  // get googleMapDiv() {
  //   return document.getElementById("google-map")
  // }
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
      zoom: 16,
      center: {lat, lng},
      disableDefaultUI: true,
      })
    })
  }

  createMarker (){
    this.setState({
      marker: new google.maps.Marker({
        position: { lat: 43.642567, lng: -79.387054 },
        map: this.state.map
      }) 
    })
}

  componentDidMount(){
    const googleMapScript = document.createElement('script');
    googleMapScript.src = 
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBk_jqZ6Ooxx5CJxr_r9pE3eLm6kvtdm6E";
    
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', () => {
      this.createMap(43.642567, -79.387054);
      this.createMarker();
    });
    
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