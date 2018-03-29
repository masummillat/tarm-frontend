import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './redux/actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import  MdEdit from 'react-icons/lib/md/edit';
import  MdDelete from 'react-icons/lib/md/delete';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
export class News extends Component {

    constructor(){
        super();
        this.state = {
            open: false,
            data: {}
        };
        this.handleNewsSubmit = this.handleNewsSubmit.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleUpdateNews = this.handleUpdateNews.bind(this);
    }
    static propTypes = {
        admin: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

        handleNewsSubmit(e){
            e.preventDefault();

            const formData = new FormData();
            formData.set('image', e.target.image.files[0]);
            formData.set('title', e.target.title.value);
            formData.set('description', e.target.description.value);
            // const payload={
            //     title: e.target.title.value,
            //     description: e.target.description.value,
            // }

            this.props.actions.newsAdd(formData)
                .then(res=>{
                    // this.props.actions.fetchNews();
                })

        }
        componentDidMount(){
            this.props.actions.fetchNews();
        }


    handleClose = () => {
        this.setState({open: false});
    };

    handleOpen(e, id, title, description){
        this.setState({
            open: true,
            data: {
                id: id,
                title: title,
                description: description,

            }
        });
    };

  handleUpdateNews(e){
        e.preventDefault();
        const payload ={
            title: e.target.title.value,
            description :e.target.description.value,
        }
      this.props.actions.editNews(payload, this.state.data.id).then(res=>{
          this.setState({open: false});
      });

}

    handleDelete(e,id){
      this.props.actions.deleteNews(id)
    }

    render() {
        const style = {
            margin: 12,
        };

        //getting the news info from the store
        const news = [];
        for (var i in this.props.admin.news) {
            if (this.props.admin.news.hasOwnProperty(i)) {
                news.push(this.props.admin.news[i])
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

        const {title, description}= this.state.data;
        return (
            <div className="admin-news">
                <form onSubmit={this.handleNewsSubmit}>
                    <TextField
                        required
                        name="title"
                        hintText="News Title"

                    /><br />

                    <TextField
                        required
                        name="description"
                        hintText="News Description"
                        multiLine={true}
                        rows={2}

                    /><br />
                    <label>Image</label>
                    <input name="image" type="file"/>
                    <br/>
                    <RaisedButton  type="submit" label="Primary" primary={true} style={style}/>
                </form>

                <div>
                    <h1>News</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {news.map((news, i) =>
                            <tr key={i}>
                                <td>{news.title}</td>
                                <td>{news.description}</td>
                                <td >
                                    <RaisedButton label={<MdEdit/>}
                                                  onClick={ (e)=> this.handleOpen(e, news._id, news.title, news.description)}/>
                                </td>

                                <td>
                                    <button key={news._id} onClick={(e) => this.handleDelete(e, news._id)}><MdDelete
                                        size={30}/></button>
                                </td>
                            </tr>
                        )}


                        </tbody>
                    </table>

                    <Dialog
                        title="Update News"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <div>
                            <form onSubmit={this.handleUpdateNews}>
                                <TextField
                                    required
                                    name="title"
                                    hintText="News Title"
                                    defaultValue={title}
                                /><br />

                                <TextField
                                    required
                                    name="description"
                                    hintText="News Description"
                                    multiLine={true}
                                    rows={2}
                                    defaultValue={description}
                                /><br />
                                <br/>
                                <RaisedButton  type="submit" label="Primary" primary={true} style={style}/>
                            </form>
                        </div>

                    </Dialog>
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
)(News);
