import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  {Link} from 'react-router-dom';
import MdHome from 'react-icons/lib/md/home';
/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    return (
      <div className="home-app">
        <div className="home-navigation">
            <ul>
              <li><Link className="link" to="/"><MdHome size={20}/></Link></li>
              <li><Link className="link" to="/store">Visit Store</Link></li>
              <li><Link className="link" to="/gallery">Gallery</Link></li>
              <li><Link className="link" to="/contact">Contact</Link></li>
              <li><Link className="link" to="/find-us">Find Us</Link></li>
            </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}
