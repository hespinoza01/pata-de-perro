import React, {Component} from 'react';

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
    return (
      <div>
        <button className='filtersBar-open' onClick={this.onShowFilterBar}>Filtros <i className='fa fa-sliders'> </i></button>

        <form className={this.state.filterBarClass} action="http://localhost:3000">
          <span className='filtersBar-close' onClick={this.onCloseFilterBar}><i className="fa fa-close"> </i></span>

          <fieldset>
            <input type="checkbox" name="bares" id="bares"/>
            <label htmlFor="bares">Bares</label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Filtros;
