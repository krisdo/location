import React, { Component, createRef} from 'react';

class CreateMap extends Component {

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
      url: `http://3.12.169.208:2001/public/airbrb_home.png`,
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


  render() {
    return(
      <div
      id={this.props.id}
      ref={this.mapRef}
      style={this.props.style}>
      {googleMapScript.addEventListener('load', () => true) ? <CreateMap createMap={this.createMap} createMarker={this.createMarker} lat={this.props.lat} lng={this.props.lng}/> : null}
      </div>
    )
  }
}

export default Map;