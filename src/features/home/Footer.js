import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square'
export class Footer extends Component {
  // static propTypes = {
  //   home: PropTypes.object.isRequired,
  //   actions: PropTypes.object.isRequired,
  // };

  render() {
    return (
      <div className="home-footer">
        <div className="footer">
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
          <div className="address">
            <p>Bokultala Road </p>
            <p>Muraripur Z5006, Bochaganj 5216</p>
            <p>Dinajpur, Rangpur</p>
            <p>Bangladesh</p>
            <p>Mobile: 01719365396</p>
            <p>Email: talukderautoricemills@gmail.com </p>
          </div>
        </div>
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
)(Footer);
