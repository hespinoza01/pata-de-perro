import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Places from "../data/Places";

import './Map.css';

import CurrentPin, {PlacePin} from "./CurrentPin";
import MapConfig from "../data/MapConfig";
import Cookie from "../utils/Cookie";
import Card from "./Card";
import rId from "../utils/RandomId";


class Map extends Component{

  static defaultProps = {
    center: {
      lat: 12.5,
      lng: -85.17336
    },
    zoom: 10
  };

  constructor(props){
    super(props);

    this._map = React.createRef();

    this.results = {};

    this.state = {
      center: this.props.center,
      zoom: this.props.zoom
    };

    this.onLoad = this.onLoad.bind(this);
    this.setResults = this.setResults.bind(this);
  }

  componentDidMount() {
    window.addEventListener('locationValue', () =>{
      console.log(sessionStorage.getItem('LCTN'));
      this.setState({center: JSON.parse(sessionStorage.getItem('LCTN'))});
      });

    window.addEventListener('updateListMap', this.onLoad());

    window.addEventListener('results', e => {
      this.setResults(e.detail.category, e.detail.data);
    });
  }

  onLoad(){
    let ctgs = JSON.parse(Cookie.GetCookie('CTGS')),
        dstc = Number.parseInt(sessionStorage.getItem('DSTC')),
        lctn = JSON.parse(sessionStorage.getItem('LCTN'));

      for(let i in ctgs) {
        Places.List(lctn, i, dstc).then(data => {
          window.dispatchEvent(new CustomEvent('results', {detail: { category: i, data: data }}));
        });
      }
  }

  setResults(category, values){
    this.results[category] = {...values};
    window.dispatchEvent(new CustomEvent('loadOnTarget', {detail: {result: this.results}}));
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

          {
            Object.keys(this.results).map((obj, i) => {
              return this.results[obj].results.map(item => {
                console.log(item);
                return (
                  <PlacePin key={rId()} lat={item.geometry.location.lat} lng={item.geometry.location.lng}/>
                )
              })
            })
          }
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
