import React, {Component} from 'react';
import rId from "../utils/RandomId";

import './Carousel.css';

class Carousel extends Component {
  constructor(props){
    super(props);

    this.state = {
      images: this.props.images,
      imagesLen: this.props.images.length,
      current: 1
    }
  }

  componentDidMount() {
    let ref = this.refs.carouselSlide;

    setInterval(() => {
      if(!ref) {
        console.error('ref: null value');
        return;
      }

      let len = this.state.imagesLen, current = this.state.current;

      ref.style.left = `calc(-${100 * current}% - ${15 * current}px)`;

      this.setState({current: (current < (len-1)) ? current + 1 : 0});
    }, 5000);
  }

  render(){
    let carouselSlideStyle = {
      width: `calc(${100 * this.state.images.length}% + 500px`,
      height: '100vh'
    };

    return (
      <section className='carousel'>
        <div ref='carouselSlide' className="carousel-slide" style={carouselSlideStyle}>
          {
            this.state.images.map(image => <img className='carousel-item' key={rId()} src={image} alt={image} />)
          }
        </div>
      </section>);
  }
}

export default Carousel;
