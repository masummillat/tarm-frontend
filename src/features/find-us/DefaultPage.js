import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Map from './Map';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square'
export class DefaultPage extends Component {
  static propTypes = {
    findUs: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="find-us-default-page">
        <Map className="map"
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVSt0XjNH2E-wD7VanNJlqOnMpcVwEiOQ&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />

        <div className="location-contact">
          <div className="location">
            <h1>Location</h1>
            <div className="location-detail">
              <p>Bokultala Road </p>
              <p>Muraripur Z5006, Bochaganj 5216</p>
              <p>Dinajpur, Rangpur</p>
              <p>Bangladesh</p>
            </div>
          </div>
          <div className="contact">
            <h1>contact</h1>
            <div className="contact-detail">
              <p>Mobile: 01719365396</p>
              <p>Mobile: 01719365396</p>
              <p>Mobile: 01719365396</p>
              <p>Email: talukderautoricemills@gmail.com </p>
              <div className="social">
                <span>
                  <a href="https://www.facebook.com/Talukder-Auto-Rice-Mill-TARM-1473929666179243/"><FaFacebookSquare size={30}/></a>
                </span>
                <span>
                  <a href="https://www.facebook.com/Talukder-Auto-Rice-Mill-TARM-1473929666179243/"><FaLinkedinSquare size={30}/></a>
                </span>
                <span>
                  <a href="https://www.facebook.com/Talukder-Auto-Rice-Mill-TARM-1473929666179243/"><FaGooglePlusSquare size={30}/></a>

                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    findUs: state.findUs,
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
)(DefaultPage);
