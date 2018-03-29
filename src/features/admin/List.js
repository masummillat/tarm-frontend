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
import {UpdateCategory} from "./UpdateCategory.js";
export class List extends Component {

    constructor() {
        super();
        this.state = {
            open: false,
            data:{}
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // static propTypes = {
    //     admin: PropTypes.object.isRequired,
    //     actions: PropTypes.object.isRequired,
    // };

    handleEdit(e, id) {

        console.log(id)
    }

    handleDelete(e, id) {
        // console.log(id)
        console.log(this.props.actions)
       this.props.actions.deleteCategory(id);
    }

    handleOpen = (id,category,description,image) => {

        this.setState({open: true,
            data:{
                id:id,
                category:category,
                description:description,
                image:image
            }
        });
    };

    handleClose = () => {
        this.setState({open: false});
    };


    render() {

        // console.log(this.props.actions)

        var category = []
        for (var i in this.props.list) {
            if (this.props.list.hasOwnProperty(i)) {
                category.push(this.props.list[i])
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
            <div className="admin-list">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {category.map((category, i) =>
                        <tr key={i}>
                            <td>{category.category}</td>
                            <td>{category.description}</td>
                            <td ><img className="image"  src={`http://localhost:3001/images/uploads/category/${category.image}`}/></td>
                            <td >
                                <RaisedButton label={<MdEdit/>} onClick={()=>this.handleOpen(category._id,category.category,category.description,category.image)}/>

                            </td>
                            <td>
                                <button key={category._id} onClick={(e) => this.handleDelete(e, category._id)}><MdDelete
                                    size={30}/></button>
                            </td>
                        </tr>
                    )}


                    </tbody>
                </table>

                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <UpdateCategory actions={this.props.actions} admin={this.props.admin} data={this.state.data} />

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
)(List);
