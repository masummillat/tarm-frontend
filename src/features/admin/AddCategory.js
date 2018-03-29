import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './redux/actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import  List from './List';

export class AddCategory extends Component {
    constructor() {
        super();

        this.handleAddCategorySubmit = this.handleAddCategorySubmit.bind(this);
    }



    static propTypes = {
        admin: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

    componentDidMount(){
        this.props.actions.fetchCategoryList();
    }

    handleAddCategorySubmit(e) {
        e.preventDefault();
        e.persist();
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
                this.props.actions.categoryAdd(payload).then((res)=>{
                    console.log(res)
                    this.props.actions.fetchCategoryList()

                })
            }
        )

        // if(!this.props.admin.uploadCategoryError.response.data.success){
        //     alert(this.props.admin.uploadCategoryError.response.data.message, this.props.admin.uploadCategoryError.response.status  )
        // }




    }





    render() {
        const style = {
            margin: 12,
        };



        return (
            <div className="admin-add-category">
                <div className="category">
                    <h1>ADD CATEGORY</h1>
                    <form onSubmit={this.handleAddCategorySubmit}>
                        <TextField
                            name="category"
                            hintText="Rice"
                            floatingLabelText="Enter Category name"


                        />
                        <br/>
                        <TextField
                            name="description"
                            hintText="Description"
                            floatingLabelText="Enter Description Of The Category"

                        />
                        <br/>
                        <br/>
                        <input type="file" name="image" />
                        <br/>
                        <br/>
                        <RaisedButton type="submit" label="Submit" secondary={true} style={style}/>
                    </form>

                </div>
                <div className="list">
                    <h1>Category List</h1>
                    <List  list={ this.props.admin.categoryList}/>
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
)(AddCategory);
