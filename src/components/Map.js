import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

import './Map.css';

const TestComponent = ({ text }) => <div>{text}</div>;

class Map extends Component{

  static defaultProps = {
    center: {
      lat: 12.5,
      lng: -85.17336
    },
    zoom: 11
  };

  constructor(props){
    super(props);

    this.state = {
      center: this.props.center,
      zoom: 11
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({center: {lat: position.coords.latitude, lng: position.coords.longitude}});
    }, (error) => {
      alert(JSON.stringify(error))
    }, {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
    });
  }

  render(){
    return (
      //https://developers.google.com/maps/documentation/javascript/tutorial
      <div id="map-canvas">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCAIq7awOrM6z7kVLPazVHFnlJQCwbZnUw' }}
          defaultCenter={this.props.center}
          center={this.state.center}
          defaultZoom={this.props.zoom}
          zoom={this.state.zoom}
        />
          <TestComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text="Yo"
          />
      </div>
    );
  }
}

export default Map;
