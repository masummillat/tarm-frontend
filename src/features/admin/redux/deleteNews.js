// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_DELETE_NEWS_BEGIN,
  ADMIN_DELETE_NEWS_SUCCESS,
  ADMIN_DELETE_NEWS_FAILURE,
} from './constants';
import  axios from 'axios';
export function deleteNews(id) {
  return (dispatch) => {
    dispatch({
      type: ADMIN_DELETE_NEWS_BEGIN
    });
    return new Promise((resolve, reject) => {
      axios.delete(`http://localhost:3001/news/${id}`,).then(
          (res) => {
            dispatch({
              type: ADMIN_DELETE_NEWS_SUCCESS,
              id: id
            });
            resolve(res);
          },
          (err) => {
            dispatch({
              type: ADMIN_DELETE_NEWS_FAILURE,
              data: {error: err},
            })
            reject(err);
          }
      )
    })

  }
}

export function reducer(state, action) {
  switch (action.type) {
    case ADMIN_DELETE_NEWS_BEGIN:
      return {
        ...state,
        deleteNewsIsPending: true,
        deleteNewsError: null,
      };

    case ADMIN_DELETE_NEWS_SUCCESS:
      return {
        deleteNewsIsPending: false,
        deleteNewsError: null,
        news: state.news.filter( news=> news._id !=action.id)
      }
    case ADMIN_DELETE_NEWS_FAILURE:
      return {
        ...state,
        deleteNewsIsPending: false,
        deleteNewsError: action.data.error,
      }

    default:
      return state;
  }
}
