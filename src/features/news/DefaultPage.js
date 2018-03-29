import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class DefaultPage extends Component {
  static propTypes = {
    news: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount(){
    this.props.actions.fetchNewsWithId(this.props.match.params.id)

  }
  render() {
    // const title = this.props.news.newsWithId[0].title;
    // const description = this.props.news.newsWithId[0].description;
    console.log(this.props.actions)
    console.log(this.props.news)
    //getting the news info from the store
    const news = [];
    for (var i in this.props.news.newsWithId) {
      if (this.props.news.newsWithId.hasOwnProperty(i)) {
        news.push(this.props.news.newsWithId[i])

      }
    }
    console.log(news)
    return (
      <div className="news-default-page">
        news

        {news.map((news,i)=>{

          return <div key={i} className="image-container">
            <img src={`http://localhost:3001/images/uploads/news/${news.image}`}/>
            <div className="title-desc">
              <h1>{news.title}</h1>
              <p>{news.description}</p>
            </div>
          </div>
        })}


      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    news: state.news,
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
