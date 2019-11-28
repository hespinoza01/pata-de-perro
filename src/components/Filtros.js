import React, {Component} from 'react';
import PlacesTypes from "../data/PlacesTypes";

import './Filtros.css'

class Filtros extends Component{

  constructor(props){
    super(props);

    this.state = {
      showFilterBar: false,
      filterBarClass: 'filtersBar'
    };

    this.onShowFilterBar = this.onShowFilterBar.bind(this);
    this.onCloseFilterBar = this.onCloseFilterBar.bind(this);
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

  render(){
    let first = true;

    return (
      <div>
        <button className='filtersBar-open' onClick={this.onShowFilterBar}>Filtros <i className='fa fa-sliders'> </i></button>

        <form className={this.state.filterBarClass} action="http://localhost:3000">
          <span className='filtersBar-close' onClick={this.onCloseFilterBar}><i className="fa fa-close"> </i></span>

          {
            PlacesTypes.map(item => {
              return (
                <fieldset key={item.value} className={`categoryContainer ${(first) ? 'first' : ''}`}>
                  <input className='categoryContainer-input' type="checkbox" name={item.value} id={item.value} checked/>
                  <label className='categoryContainer-label' htmlFor={item.value}>{item.name}</label>

                  {
                    first = false
                  }
                </fieldset>
              );
            })
          }
        </form>
      </div>
    );
  }
}

export default Filtros;
