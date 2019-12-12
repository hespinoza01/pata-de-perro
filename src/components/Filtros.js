import React, {Component} from 'react';
import PlacesTypes from "../data/PlacesTypes";
import Cookie from "../utils/Cookie";
import DepartmentsCoords from "../data/DepartmentsCoords";
import rId from "../utils/RandomId";

import './Filtros.css'

class Filtros extends Component{

  constructor(props){
    super(props);

    this.timer = null;

    this.state = {
      showFilterBar: false,
      filterBarClass: 'filtersBar',
      locationCurrent: true,
      location: {lat: 0, lng: 0},
      distance: 5000,
      categorys: {
        airport: true,
        atm: true,
        bakery: true,
        bank: true,
        bar: true,
        beauty_salon: true,
        bus_station: true,
        cafe: true,
        casino: true,
        church: true,
        clothing_store: true,
        florist: true,
        gas_station: true,
        grocery_or_supermarket: true,
        gym: true,
        hardware_store: true,
        hospital: true,
        library: true,
        movie_theater: true,
        museum: true,
        park: true,
        pharmacy: true,
        restaurant: true,
        shopping_mall: true,
        tourist_attraction: true,
        zoo: true
      }
    };

    this.onShowFilterBar = this.onShowFilterBar.bind(this);
    this.onCloseFilterBar = this.onCloseFilterBar.bind(this);
    this.onChangeCheck = this.onChangeCheck.bind(this);
    this.onExpandChange = this.onExpandChange.bind(this);
    this.onDistanceChange = this.onDistanceChange.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
  }

  componentWillMount() {
      navigator.geolocation.getCurrentPosition(
        position => {
          let value = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          this.setState({location: value});
          value = `${JSON.stringify(value)}`;
          sessionStorage.removeItem('LCTN');
          sessionStorage.setItem('LCTN', value);
          Cookie.CreateOrUpdate('LCTN', value);
        },
        error => console.error(error),
        {
          enableHighAccuracy: false,
          timeout: Infinity,
          maximumAge: 0
        }
      );
  }

  componentDidMount() {
    if(Cookie.Exists('CTGS')){
      this.setState({categorys: JSON.parse(Cookie.GetCookie('CTGS'))});
    }else{
      Cookie.CreateOrUpdate('CTGS', JSON.stringify(this.state.categorys));
    }

    if(Cookie.Exists('DSTC')){
      this.setState({distance: Cookie.GetCookie('DSTC')});
      this.refs['distanceRange'].value = Cookie.GetCookie('DSTC');
    }else{
      Cookie.CreateOrUpdate('DSTC', JSON.stringify(this.state.distance));
    }

    if(Cookie.Exists('LCTN')){
      this.setState({location: JSON.parse(Cookie.GetCookie('LCTN'))});
    }else{
      Cookie.CreateOrUpdate('LCTN', JSON.stringify(this.state.location));
    }

    sessionStorage.setItem('CTGS', JSON.stringify(this.state.categorys));
    sessionStorage.setItem('DSTC', JSON.stringify(this.state.distance));
    sessionStorage.setItem('LCTN', JSON.stringify(this.state.location));
  }

  onShowFilterBar(e){
    if(!e.target.matches('.filtersBar')){
      this.setState({
        showFilterBar: true,
        filterBarClass: 'filtersBar show'
      });
    }
  }

  onCloseFilterBar(){
    this.setState({
      showFilterBar: false,
      filterBarClass: 'filtersBar'
    });
  }

  onChangeCheck(e){
    let temp = JSON.parse(JSON.stringify(this.state.categorys)),
        toSave = '';

    temp[e.target.name] = e.target.checked;
    this.setState({categorys: temp});

    toSave = JSON.stringify(temp);
    Cookie.CreateOrUpdate('CTGS', toSave);
    sessionStorage.setItem('CTGS', toSave);
  }

  onExpandChange(e){
    let parent = e.target.parentNode;

    if(parent.classList.contains('expand'))
      parent.classList.remove('expand');
    else
      parent.classList.add('expand');
  }

  onDistanceChange(e){
    this.setState({distance: e.target.value});
    Cookie.CreateOrUpdate('DSTC', e.target.value);
    sessionStorage.setItem('DSTC', e.target.value);
  }

  onChangeLocation(e){
    let node = e.target;
    if(node.value !== "{\"lat\":0,\"lng\":0}"){
      sessionStorage.setItem('LCTN', node.value);
      Cookie.CreateOrUpdate('LCTN', node.value);
    }else{
      console.log('current')
      navigator.geolocation.getCurrentPosition(
        position => {
          let value = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          this.setState({location: value});
          value = JSON.stringify(value);
          sessionStorage.removeItem('LCTN');
          sessionStorage.setItem('LCTN', value);
          Cookie.CreateOrUpdate('LCTN', value);
        },
        error => console.error(error),
        {
          enableHighAccuracy: false,
          timeout: Infinity,
          maximumAge: 0
        }
      );
    }

    window.dispatchEvent(new CustomEvent('locationValue', {}));
  }

  render(){
    let first = true;

    return (
      <div>
        <button className='filtersBar-open' onClick={this.onShowFilterBar}>Filtros <i className='fa fa-sliders'> </i></button>

        <form className={this.state.filterBarClass} action="http://localhost:3000">
          <span title="Ocultar" className='filtersBar-close' onClick={this.onCloseFilterBar}>Filtros<i className="fa fa-close"> </i></span>

          <div className="filtersBar-section">
            <p className="filtersBar-section--title clear-arrow"><span><i className='fa fa-location-arrow'> </i> Ubicación</span></p>

            <select name="location" className='select-location' onChange={this.onChangeLocation}>
              {
                DepartmentsCoords.map(item => {
                  return (
                    <option key={rId()} value={JSON.stringify(item.coords)}>{ item.name }</option>
                  );
                })
              }
            </select>
          </div>

          <div className='filtersBar-section'>
            <p className='filtersBar-section--title expand' onClick={this.onExpandChange}><span><i className='fa fa-cubes'></i> Categorías</span></p>
            {
              PlacesTypes.map(item => {
                return (
                  <fieldset key={item.value} className={`categoryContainer ${(first) ? 'first' : ''}`}>
                    <input className='categoryContainer-input' type="checkbox" name={item.value} id={item.value} checked={this.state.categorys[item.value]} onChange={this.onChangeCheck}/>
                    <label className='categoryContainer-label' htmlFor={item.value}>{item.name}</label>

                    {
                      first = false
                    }
                  </fieldset>
                );
              })
            }
          </div>

          <div className='filtersBar-section'>
            <p className='filtersBar-section--title clear-arrow'><span><i className='fa fa-map'></i>  Distancia</span></p>
            <div className="range-distance">
              <span>5km</span>
              <input ref='distanceRange' className='slider' onChange={this.onDistanceChange} type="range" min="5000" max="50000" step="1000"/>
              <span>50km</span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Filtros;
