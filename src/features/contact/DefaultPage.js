import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class DefaultPage extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const style = {
      margin: 12,
    };

    return (
      <div className="contact-default-page">
        <div className="contact-form">
        <form>
          <TextField
              name="email"
              floatingLabelText="Enter your email address"
          /><br />
          <TextField
              floatingLabelText="Enter your message"
              multiLine={true}
              rows={2}
          /><br />
          <RaisedButton label="Send" primary={true} style={style} />
        </form>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    contact: state.contact,
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
