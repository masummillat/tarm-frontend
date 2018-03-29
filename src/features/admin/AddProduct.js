import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './redux/actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import  ProductList from './ProductList'
export class AddProduct extends Component {
    // static propTypes = {
    //   admin: PropTypes.object.isRequired,
    //   actions: PropTypes.object.isRequired,
    // };

    constructor() {
        super();
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

            value: "Rice",
            isDisabled: true,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
        this.validation = this.validation.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var event = e;
        console.log(e.target.product.value)
        console.log(this.state.value)
        console.log(e.target.description.value)
        console.log(e.target.stock.value)
        console.log(e.target.image.files[0])
        const formData = new FormData();
        formData.set('image', event.target.image.files[0]);
        //
        // for (var pair of formData.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }


        new Promise((resolve, reject) => {
            this.props.actions.productImage(formData).then((res, e) => {
                    console.log(res);
                    var payload = {
                        "product": this.state.product,
                        "category": this.state.value,
                        "description": this.state.description,
                        "stock": this.state.stock,
                        "image": this.props.admin.uploadedImage
                    }
                    this.props.actions.productAdd(payload).then(res=>{
                        this.props.actions.fetchProductList()
                    })

                    resolve(res);
                },
                (err) => {
                    console.log(err);
                    reject(err)
                }
            )
        })

        this.setState({
            isDisabled:true
        })
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
        console.log(e.target.files[0] + "baler image")
        this.setState({image: e.target.files[0]});
        console.log("wowow")

    }

    validation(e) {
        // console.log(e.target.name)
        if (e.target.name === 'product') {
            console.log("myproduct")
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
        console.log("clicked")
        console.log(this.state.isDisabled)
        console.log(this.state.product.length)
        console.log(this.state.description.length)
        console.log(this.state.stock)
        console.log(this.state.image)


    }

    //id, name, evt, key, payload
    //Choose category for the product
    handleChange = (event, index, value) => {
        this.setState({value});
        console.log(value);

    }


    //fetching the category list
    componentWillMount() {
        this.props.actions.fetchCategoryList().then((res) => {
            this.setState({category: res.data.map((category) => category.category)})

        })
        this.props.actions.fetchProductList();

    }


    render() {
        const style = {
            margin: 12,
        };
        console.log(this.state.isDisabled)
        // console.log(this.state.category)
        // console.log(this.state.productError)
        // console.log(this.state.name, this.state.description)
        // const errors = validate(this.state.name, this.state.description);
        // const isDisabled = Object.keys(errors).some(x => errors[x]);

        return (
            <div className="admin-add-product">
                <h1>ADD PRODUCT</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        name="product"
                        hintText="Rice"
                        floatingLabelText="Enter Product name"
                        onChange={this.handleProductChange}
                        onBlur={this.validation}
                        defaultValue={this.state.name}
                        errorText={this.state.productErrorStatus ? this.state.productError : ''}
                    />
                    <br/>
                    <SelectField
                        name="category"
                        floatingLabelText="Category"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        {(this.state.category != null) ? this.state.category.map((category, i) => {
                            return <MenuItem key={i} value={category} primaryText={category}/>

                        })
                            : ' '}

                    </SelectField>
                    <br/>

                    <TextField
                        name="description"
                        hintText="Description"
                        floatingLabelText="Enter Description Of The Product"
                        onChange={this.handleDescriptionChange}
                        onBlur={this.validation}
                        defaultValue={this.state.description}
                        errorText={this.state.descriptionErrorStatus ? this.state.descriptionError : ''}
                    />
                    <br/>
                    <TextField
                        onChange={this.handleStockChange}
                        name="stock"
                        type="number"
                        hintText="Ex: 100"
                        floatingLabelText="Enter Description Of The Product"
                        defaultValue={this.state.stock}
                    />
                    <br/>
                    <br/>
                    <input
                        onChange={this.handleImageChange}
                        onBlur={this.validation}
                        defaultValue={this.state.image}
                        type="file"
                        name="image"/>
                    <br/>
                    <br/>
                    <RaisedButton disabled={this.state.isDisabled} type="submit" label="Secondary" secondary={true}
                                  style={style}/>
                </form>

                <div className="list">
                    <h1>Product List</h1>
                        <ProductList list={ this.props.admin.productList}/>

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
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProduct);
