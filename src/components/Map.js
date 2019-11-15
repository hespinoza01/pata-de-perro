import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

import './Map.css';

import CurrentPin from "./CurrentPin";


class Map extends Component{

  static defaultProps = {
    center: {
      lat: 12.5,
      lng: -85.17336
    },
    zoom: 16
  };

  constructor(props){
    super(props);

    this._map = React.createRef();

    this.state = {
      center: this.props.center,
      zoom: this.props.zoom
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({center: {lat: position.coords.latitude, lng: position.coords.longitude}});
      console.log(this._map);
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
          ref={this._map}
          bootstrapURLKeys={{ key: 'AIzaSyCAIq7awOrM6z7kVLPazVHFnlJQCwbZnUw' }}
          defaultCenter={this.props.center}
          center={this.state.center}
          defaultZoom={this.props.zoom}
          zoom={this.state.zoom}
        >
          <CurrentPin lat={this.state.center.lat} lng={this.state.center.lng}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
