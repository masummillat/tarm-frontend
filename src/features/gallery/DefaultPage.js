import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class DefaultPage extends Component {
  static propTypes = {
    gallery: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount(){
    this.props.actions.fetchGallery();
  }

  render() {
    //getting the gallery info from the store
    const gallery = [];
    for (var i in this.props.gallery.gallery) {
      if (this.props.gallery.gallery.hasOwnProperty(i)) {
        gallery.push(this.props.gallery.gallery[i])
      }
    }
    return (
      <div className="gallery-default-page">
        <h1>Gallery</h1>
        <div className="image-container">
          {
            gallery.map((gallery,i)=>{
              return <div key={i} className="image-display">

                <img className="image" src={`http://localhost:3001/images/uploads/gallery/${gallery.image}`}/>
                <span className="image-title"><p style={{paddingTop:6}}>{gallery.title}</p></span>
              </div>
            })
          }



        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    gallery: state.gallery,
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
