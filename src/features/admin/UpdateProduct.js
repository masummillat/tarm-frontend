import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export class UpdateProduct extends Component {

  constructor(){
    super()
    this.state = {
      product: '',
      productError: '',
      productErrorStatus: false,

      category: [],
      description: '',
      descriptionError: '',
      descriptionErrorStatus: false,

      stock: 0,
      stockError: '',
      strockErrorStatus: false,

      image: null,

      everFocusedName: false,
      everFocusedDescription: false,
      inFocus: '',

      value: '',
      isDisabled: true,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
    this.validation = this.validation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }
  static propTypes = {
    admin: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount(){
    this.setState({
      value:this.props.data.category
    })
  }

  handleSubmit(e){
    e.preventDefault();
    e.persist();
      var productImage = e.target.image.files[0];
      if(!productImage){
        const payload ={
          product: e.target.product.value,
          category: this.state.value,
          description: e.target.description.value,
          stock: e.target.stock.value,
          image: this.props.data.image
        }

        this.props.actions.editProduct(payload,this.props.data.id).then((res)=>{
          console.log(res)
          this.props.actions.fetchProductList()

        })
      }else if(productImage){
        const formData = new FormData();
        formData.append('image', e.target.image.files[0]);
        this.props.actions.productImage(formData).then(
            (res)=>{
              // console.log(res)
              const  payload={

                product: e.target.product.value,
                category: this.state.value,
                description: e.target.description.value,
                stock: e.target.stock.value,
                image: this.props.admin.uploadedImage
              }
              this.props.actions.editProduct(payload,this.props.data.id).then((res)=>{
                this.props.actions.fetchProductList()

              })
            }
        )
      }
      // console.log(e.target.product.value);
      // console.log(this.state.value);
      // console.log(e.target.description.value);
      // console.log(e.target.stock.value);
      // console.log(e.target.image.files[0]);



  }
  handleProductChange(e) {
    console.log(e.target.value)
    this.setState({product: e.target.value})
  }

  handleDescriptionChange(e) {
    console.log(e.target.value)
    this.setState({description: e.target.value})
  }

  handleStockChange(e) {
    this.setState({stock: e.target.value})
  }

  handleImageChange(e) {
    //console.log(e.target.files[0] + "baler image")
    this.setState({image: e.target.files[0]});


  }

  validation(e) {
    // console.log(e.target.name)
    if (e.target.name === 'product') {
      if (e.target.value.length === 0) {
        this.setState({productError: 'This field is required', productErrorStatus: true,})
      } else {
        this.setState({productErrorStatus: false, isDisabled: false})

      }


    } else if (e.target.name === 'description') {
      if (e.target.value.length === 0) {
        this.setState({descriptionError: 'This field is required', descriptionErrorStatus: true,})
      } else {
        this.setState({descriptionErrorStatus: false,})
      }
    } else if (e.target.stock === 'stock') {
      if (e.target.value.length === 0 || isNaN(e.target.value)) {
        this.setState({stockError: 'This field must be a number only', stockErrorStatus: true,})
      }
      else {
        this.setState({stockErrorStatus: false,})
      }
    } else if (e.target.name === 'image') {
      // if(this.state.image===null){
      //   this.setState({isDisabled:true})
      // }else{
      //   this.setState({isDisabled:false})
      // }
    }

    // if(this.state.product.length  != 0 && this.state.description.length != 0 ){
    //   this.setState({isDisabled:false})
    // }else{
    //   this.setState({isDisabled:true})
    // }

    // console.log(this.state.isDisabled)
    // console.log(this.state.product.length)
    // console.log(this.state.description.length)
    // console.log(this.state.stock)
    // console.log(this.state.image)


  }

  //id, name, evt, key, payload
  //Choose category for the product
  handleChange = (event, index, value) => {
    this.setState({value});

  }
  render() {
    const style = {
      margin: 12,
    };
    // console.log(this.state.isDisabled)
    // console.log(this.props.data)
    // console.log()

    const {product, category, description,stock, image} = this.props.data;
    return (
      <div className="admin-update-product">
        <form onSubmit={this.handleSubmit}>
          <TextField
              name="product"
              hintText="Rice"
              floatingLabelText="Enter Product name"
              onChange={this.handleProductChange}
              onBlur={this.validation}
              defaultValue={product}
              errorText={this.state.productErrorStatus ? this.state.productError : ''}
          />
          <br/>
          <SelectField
              name="category"
              floatingLabelText="Category"
              value={category}
              onChange={this.handleChange}
          >
            {this.props.admin.categoryList.map((category, i) => {
              return <MenuItem key={i} value={category.category} primaryText={category.category}/>

            })}

          </SelectField>
          <br/>

          <TextField
              name="description"
              hintText="Description"
              floatingLabelText="Enter Description Of The Product"
              onChange={this.handleDescriptionChange}
              onBlur={this.validation}
              defaultValue={description}
              errorText={this.state.descriptionErrorStatus ? this.state.descriptionError : ''}
          />
          <br/>
          <TextField
              onChange={this.handleStockChange}
              name="stock"
              type="number"
              hintText="Ex: 100"
              floatingLabelText="Enter Description Of The Product"
              defaultValue={stock}
          />
          <br/>
          <br/>
          <input
              onChange={this.handleImageChange}
              onBlur={this.validation}
              defaultValue={image}
              type="file"
              name="image"/>
          <br/>
          <br/>
          <RaisedButton disabled={this.state.isDisabled} type="submit" label="Secondary" secondary={true}
                        style={style}/>
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
)(UpdateProduct);
