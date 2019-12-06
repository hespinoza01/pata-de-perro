import React, {Component} from 'react';
import rId from "../utils/RandomId";

import './Carousel.css';

class Carousel extends Component {
  constructor(props){
    super(props);

    this.timer = null;

    this.state = {
      images: this.props.images,
      imagesLen: this.props.images.length,
      current: 1,
      slideWidth: 0
    };

    this.onUpdateScreenSize = this.onUpdateScreenSize.bind(this);
  }

  componentDidMount() {
    let ref = this.refs.carouselSlide;

    this.setState({slideWidth: ref.getBoundingClientRect().width - 500});
    window.addEventListener('resize', this.onUpdateScreenSize);

    this.timer = setInterval(() => {
      if(!ref) {
        console.error('ref: null value');
        return;
      }

      let len = this.state.imagesLen, current = this.state.current;

      //ref.style.left = `calc(-${100 * current}% - ${15 * current}px)`;
      ref.style.transform = `translate3d(calc(-${(this.state.slideWidth / len) * current}px - ${15 * current}px), 0, 0)`;

      this.setState({current: (current < (len-1)) ? current + 1 : 0});
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    window.removeEventListener('resize', this.onUpdateScreenSize);
  }

  onUpdateScreenSize(){
    let ref = this.refs.carouselSlide;
    this.setState({slideWidth: ref.getBoundingClientRect().width - 500});
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
