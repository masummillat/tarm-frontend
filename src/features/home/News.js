import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './redux/actions';
import  {Link} from 'react-router-dom';
export class News extends Component {
    constructor(){
        super();
        this.state={
            currentPage: 1,
            newsPerPage: 1,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    // static propTypes = {
    //     home: PropTypes.object.isRequired,
    //     actions: PropTypes.object.isRequired,
    // };
    componentDidMount() {

        this.props.actions.fetchNews();
    }
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        //getting the news info from the store
        const news = [];
        for (var i in this.props.home.news) {
            if (this.props.home.news.hasOwnProperty(i)) {
                news.push(this.props.home.news[i])

            }
        }
        const {currentPage, newsPerPage} = this.state;

        const indexOfLastNews = currentPage * newsPerPage;
        const indexOfFirstNews = indexOfLastNews - newsPerPage;
        const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

        //creating news view 
       const rendernews = currentNews.map((news, i) => {

            return <li key={i}>
                <Link to={`/news/${news._id}`}>
                    <img src={`http://localhost:3001/images/uploads/news/${news.image}`}/>
                </Link>
                <div className="title-desc">
                    <Link className="link" to={`/news/${news._id}`}><h1>{news.title}</h1></Link>
                    <p>{news.description}</p>
                </div>
            </li>
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(news.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }


        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });


        return (
            <div className="home-news">
                <div> News Updates</div>
                <div className="news-container">
                    <ul className="news-list">

                        {rendernews}
                    </ul>

                    <ul className="page-numbers">
                        {renderPageNumbers}
                    </ul>
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
function mapStateToProps(state) {
    return {
        home: state.home,
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
