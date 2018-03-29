import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import  {Link} from 'react-router-dom';
import MdHome from 'react-icons/lib/md/home';
export class DefaultPage extends Component {
  constructor(props) {
    super(props);

  }
  static propTypes = {
    admin: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  handleToggle = () => {this.props.actions.navopen()};
  handleClose = () => {this.props.actions.navopen()};
  render() {
      // console.log(this.props)
      // console.log(routeConfig)
    return (
      <div className="admin-default-page">
        <div>

        <div className="Title-bar">
          <AppBar
              title="Admin"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonClick={this.handleToggle}
          />
        </div>

        <div className="nav">
          <Drawer
              docked={false}
              width={200}
              open={this.props.admin.open}
              onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem  onClick={this.handleClose}>{<Link className="link" to="/"><MdHome size={30}/></Link>}</MenuItem>
            <MenuItem onClick={this.handleClose}>{<Link className="link" to="/admin/category">ADD CATEGORY</Link>}</MenuItem>
            <MenuItem onClick={this.handleClose}>{<Link className="link" to="/admin/product">ADD PRODUCT</Link>}</MenuItem>
            <MenuItem onClick={this.handleClose}>{<Link className="link" to="/admin/gallery">GALLERY</Link>}</MenuItem>
            <MenuItem onClick={this.handleClose}>{<Link className="link" to="/admin/news">NEWS</Link>}</MenuItem>
          </Drawer>
        </div>
        </div>
        <div>


          {this.props.children}
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    admin: state.admin,
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
