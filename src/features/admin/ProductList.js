import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './redux/actions';
import  MdEdit from 'react-icons/lib/md/edit';
import  MdDelete from 'react-icons/lib/md/delete';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import UpdateProduct from "./UpdateProduct.js";

export class ProductList extends Component {

    constructor() {
        super()
        this.state = {
            open: false,
            data: {}
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    static propTypes = {
        admin: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

    handleDelete(e, id) {
        // console.log(id)
        this.props.actions.deleteProduct(id).then(res => {
            this.props.actions.fetchProductList()
        })
    }

    handleClose = () => {
        this.setState({open: false});
    };

    handleOpen = (e, id, product, category, description, stock, image) => {
        this.setState({
            open: true,
            data: {
                id: id,
                product: product,
                category: category,
                description: description,
                stock: stock,
                image: image
            }
        });
    };

    render() {

        var product = []
        for (var i in this.props.list) {
            if (this.props.list.hasOwnProperty(i)) {
                product.push(this.props.list[i])
            }
        }

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];


        return (
            <div className="admin-product-list">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Image</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {product.map((product, i) =>
                        <tr key={i}>
                            <td>{product.product}</td>
                            <td>{product.category}</td>
                            <td>{product.description}</td>
                            <td>{product.stock}</td>
                            <td ><img className="image"
                                      src={`http://localhost:3001/images/uploads/product/${product.image}`}/></td>
                            <td >
                                <RaisedButton label={<MdEdit/>}
                                              onClick={ (e) => this.handleOpen(e, product._id, product.product, product.category, product.description, product.stock, product.image)}/>

                            </td>

                            <td>
                                <button key={product._id} onClick={(e) => this.handleDelete(e, product._id)}><MdDelete
                                    size={30}/></button>
                            </td>
                        </tr>
                    )}


                    </tbody>
                </table>

                <Dialog
                    title="Update Product"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <UpdateProduct data={this.state.data}/>

                </Dialog>

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
)(ProductList);
