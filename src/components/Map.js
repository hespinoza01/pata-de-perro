import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

import './Map.css';

import CurrentPin from "./CurrentPin";
import MapConfig from "../data/MapConfig";


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
    this.setState({center: JSON.parse(sessionStorage.getItem('LCTN'))});
  }

  render(){
    return (
      //https://developers.google.com/maps/documentation/javascript/tutorial
      <div id="map-canvas">
        <GoogleMapReact
          ref={this._map}
          bootstrapURLKeys={{ key:  MapConfig.KEY}}
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
