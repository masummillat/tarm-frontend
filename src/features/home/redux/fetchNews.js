// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_FETCH_NEWS_BEGIN,
  HOME_FETCH_NEWS_SUCCESS,
  HOME_FETCH_NEWS_FAILURE,
} from './constants';
import axios from 'axios'
export function fetchNews() {
  return (dispatch) => {
    dispatch({
      type: HOME_FETCH_NEWS_BEGIN
    });
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3001/news').then(
          (res) => {
            dispatch({
              type: HOME_FETCH_NEWS_SUCCESS,
              data: res.data
            });
            resolve(res);
          },
          (err) => {
            dispatch({
              type: HOME_FETCH_NEWS_FAILURE,
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
    case HOME_FETCH_NEWS_BEGIN:
      return {
        ...state,
        fetchNewsIsPending: true,
        fetchNewsError: null,
      };

    case HOME_FETCH_NEWS_SUCCESS:
      return {
        ...state,
        fetchNewsIsPending: false,
        fetchNewsError: null,
        news: action.data
      }
    case HOME_FETCH_NEWS_FAILURE:
      return {
        ...state,
        fetchNewsIsPending: false,
        fetchNewsError: action.data.error,
      }

    default:
      return state;
  }
}
