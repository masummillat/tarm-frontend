import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
export class DialogBox extends Component {
  constructor(){
    super();

  }
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  handleOpen = () => {
    this.props.actions.dialogBox('COMMON_DIALOG_BOX');
  };

  handleClose = () => {
    this.props.actions.dialogBox('COMMON_DIALOG_BOX_CLOSE')
  };



  render() {

    const actions = [
      <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
      />,
      <FlatButton
          label="Discard"
          primary={true}
          onClick={this.handleClose}
      />,
    ];

    return (
        <div className="common-dialog-box">
          <RaisedButton label="Alert" onClick={this.handleOpen} />
          <Dialog
              actions={actions}
              modal={false}
              open={this.props.common.dialog || this.props.dialogbox}
              onRequestClose={this.handleClose}
          >
            Discard draft?
          </Dialog>
        </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    common: state.common,
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
)(DialogBox);
