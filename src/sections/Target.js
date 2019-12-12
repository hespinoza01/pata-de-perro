import React, {Component} from 'react';
import Map from "../components/Map";
import rId from "../utils/RandomId";

import './Target.css';
import Card from "../components/Card";


class Target extends Component{
  constructor(props){
    super(props);

    this.state = {
      results: {}
    };

    this.onLoadTarget = this.onLoadTarget.bind(this);
    this.returnCard = this.returnCard.bind(this);
  }

  componentDidMount() {
    window.addEventListener('loadOnTarget', e => {
      this.onLoadTarget(e.detail.result);
    });
  }

  onLoadTarget(values){
    this.setState({ results: {...values} });
    console.log(this.state.results);
  }

  returnCard(){
    let res = [];

    for(let item in this.state.results){
      res.push(
        res.results.map(i => {
          return (
            <Card item={i}/>
          );
        })
      )
    }

    return res;
  }

  render() {
    return (
      <section className='displayDiv body'>
        <div className='leftTar'>
          {
            Object.keys(this.state.results).map((obj, i) => {
              return this.state.results[obj].results.map(item => {
                return (
                  <Card key={rId()} item={item}/>
                )
              })
            })
          }
        </div>
        <div className='rightMap'>
          <Map/>
        </div>
      </section>
    );
  }
}

export default Target;
