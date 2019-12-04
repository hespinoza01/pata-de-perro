import React, {Component} from 'react';
import PlacesTypes from "../data/PlacesTypes";
import Cookie from "../utils/Cookie";

import './Filtros.css'

class Filtros extends Component{

  constructor(props){
    super(props);

    this.state = {
      showFilterBar: false,
      filterBarClass: 'filtersBar',
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

    sessionStorage.setItem('CTGS', JSON.stringify(this.state.categorys));
    sessionStorage.setItem('DSTC', JSON.stringify(this.state.distance));
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

  render(){
    let first = true;

    return (
      <div>
        <button className='filtersBar-open' onClick={this.onShowFilterBar}>Filtros <i className='fa fa-sliders'> </i></button>

        <form className={this.state.filterBarClass} action="http://localhost:3000">
          <span title="Ocultar" className='filtersBar-close' onClick={this.onCloseFilterBar}>Filtros<i className="fa fa-close"> </i></span>

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
            <p className='filtersBar-section--title'><span><i className='fa fa-map'></i>  Distancia</span></p>
            <div className="range-distance">
              <span>5km</span>
              <input ref='distanceRange' onChange={this.onDistanceChange} type="range" min="5000" max="50000" step="1000"/>
              <span>50km</span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Filtros;
