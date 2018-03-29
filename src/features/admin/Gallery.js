import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './redux/actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import MdDelete from 'react-icons/lib/md/delete';
export class Gallery extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    static propTypes = {
        admin: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

    handleImageChange(e) {
        e.preventDefault();
        console.log(e.target.files[0])
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.galleryTitle.value)
        console.log(e.target.galleryImage.files[0])
        const formData = new FormData();
        formData.set('image', e.target.galleryImage.files[0]);
        formData.set('title', e.target.galleryTitle.value)
        console.log(formData)
        this.props.actions.imageUpload(formData, 'http://localhost:3001/gallery').then(
            (res) => {
                console.log(res.data.fileName)
                this.props.actions.fetchGallery()
            })
    }

    componentDidMount() {
        this.props.actions.fetchGallery()
    }

    handleDelete(e,id){
        e.preventDefault();
        console.log("clicked")
        console.log(id)
        this.props.actions.deleteGalleryImage(id)
    }
    render() {

        const style = {
            submitButton: {
                margin: 12,
            },

        };
        //getting the gallery info from the store
        const gallery = [];
        for (var i in this.props.admin.gallery) {
            if (this.props.admin.gallery.hasOwnProperty(i)) {
                gallery.push(this.props.admin.gallery[i])
            }
        }
        console.log(gallery)
        return (
            <div className="admin-gallery">
                <div className="gallery-input">
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            name="galleryTitle"
                            hintText="Title"
                            floatingLabelText="Enter Title "
                        />
                        <br/>
                        <br/>
                        <input onChange={this.handleImageChange} type="file" name="galleryImage"/>
                        <br/>
                        <RaisedButton type="submit" label="Secondary" secondary={true}
                                      style={style.submitButton}/>
                    </form>
                </div>

                <div className="gallery">
                    <h1>Gallery</h1>
                    <div className="image-container">
                        {
                            gallery.map((gallery,i)=>{
                                return <div key={i} className="image-display">

                                    <img className="image" src={`http://localhost:3001/images/uploads/gallery/${gallery.image}`}/>
                                    <span className="image-title"><p style={{paddingTop:6}}>{gallery.title}</p></span>
                                    <span className="delete-image"><MdDelete className="delete" size={30} onClick={(e)=>this.handleDelete(e,gallery._id)}/></span>
                                </div>
                            })
                        }



                    </div>
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
)(Gallery);
