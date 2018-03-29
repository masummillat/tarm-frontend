// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_EDIT_NEWS_BEGIN,
  ADMIN_EDIT_NEWS_SUCCESS,
  ADMIN_EDIT_NEWS_FAILURE,
} from './constants';
import  axios from 'axios'
export function editNews(payload,id) {
  return (dispatch)=> {
    dispatch({
      type:ADMIN_EDIT_NEWS_BEGIN
    });

    return new Promise((resolve,reject)=>{
      axios({
        method:'put',
        url: `http://localhost:3001/news/${id}`,
        data: payload,
        config: {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
      }).then( (res)=>{
            // console.log(res.data);
            dispatch({
              type:ADMIN_EDIT_NEWS_SUCCESS,
              data: res.data
            });
            resolve(res);
          },
          (err)=>{
            dispatch({
              type: ADMIN_EDIT_NEWS_FAILURE,
              data: {error: err}
            });
            reject(err);
          }
      );
    });
  }
}

export function reducer(state, action) {
  switch (action.type) {
    case ADMIN_EDIT_NEWS_BEGIN:
      return {
        ...state,
        editNewsIsPending: true,
        editNewsError: null,
      };

    case ADMIN_EDIT_NEWS_SUCCESS:

      return {
        ...state,
        editNewsIsPending: false,
        editNewsError: null,
        news: state.news.map((news,i)=>{
          return (action.data._id === news._id) ? action.data : news
        })
      }
    case ADMIN_EDIT_NEWS_FAILURE:
      return {
        ...state,
        editNewsIsPending: false,
        editNewsError: action.data.error,
      }

    default:
      return state;
  }
}
