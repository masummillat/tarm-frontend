import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import  Slider from 'react-slick';
export class SimpleSlider extends Component {
  // static propTypes = {
  //   home: PropTypes.object.isRequired,
  //   actions: PropTypes.object.isRequired,
  // };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:5000,
      swipe:true,
      touchMove:true,
      arrows:false,
    };
    return (
      <div className="home-simple-slider">
        <Slider {...settings}>
          <div><img src="http://localhost:3001/images/uploads/gallery/image-1521448330807.jpeg" /></div>
          <div><img src="http://localhost:3001/images/uploads/gallery/image-1521448330807.jpeg" /></div>
          <div><img src="http://localhost:3001/images/uploads/gallery/image-1521448330807.jpeg" /></div>
          {/*<div><img src="../../images/inside.jpg" /></div>*/}

        </Slider>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleSlider);
