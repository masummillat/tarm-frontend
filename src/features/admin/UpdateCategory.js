import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
var jsonpatch = require('fast-json-patch')
export class UpdateCategory extends Component {
  // static propTypes = {
  //   admin: PropTypes.array.isRequired,
  //   actions: PropTypes.object.isRequired,
  // };
  constructor(){
    super();
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }

  handleUpdateSubmit(e){
    e.preventDefault();
    e.persist();
    var categoryImage = e.target.image.files[0];
    if(!categoryImage){
      console.log("image is not changed")
      const  payload={

        category:e.target.category.value,
        description:e.target.description.value,
        image: this.props.data.image,
      }
      this.props.actions.editCategory(payload,this.props.data.id).then((res)=>{
        console.log(res)
        this.props.actions.fetchCategoryList()

      })

    }else if(categoryImage){
      const formData = new FormData();
      formData.append('image', e.target.image.files[0]);
      this.props.actions.categoryImage(formData).then(
          (res)=>{
            // console.log(res)
            const  payload={

              category:e.target.category.value,
              description:e.target.description.value,
              image: this.props.admin.uploadedImage
            }
            this.props.actions.editCategory(payload,this.props.data.id).then((res)=>{
              console.log(res)
              this.props.actions.fetchCategoryList()

            })
          }
      )
    }

    // var payload = this.props.data;





    // this.props.actions.editCategory(document,this.props.data.id)
  }
  render() {

    const style = {
      margin: 12,
    };

    console.log(this.props.data)
    return (
      <div className="admin-update-category">
        <form onSubmit={this.handleUpdateSubmit}>
          <TextField
              name="category"
              hintText="Rice"
              floatingLabelText="Enter Category name"
              defaultValue={this.props.data.category}



          />
          <br/>
          <TextField
              name="description"
              hintText="Description"
              floatingLabelText="Enter Description Of The Category"
              defaultValue={this.props.data.description}
          />
          <br/>
          <br/>
          <input type="file" name="image"/>
          <br/>
          <br/>
          <RaisedButton type="submit" label="Submit" secondary={true} style={style}/>
        </form>
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
)(UpdateCategory);
