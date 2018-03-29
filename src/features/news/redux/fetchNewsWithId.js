// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  NEWS_FETCH_NEWS_WITH_ID_BEGIN,
  NEWS_FETCH_NEWS_WITH_ID_SUCCESS,
  NEWS_FETCH_NEWS_WITH_ID_FAILURE
} from './constants';

import axios from 'axios'
export function fetchNewsWithId(id) {
  return (dispatch) => {
    dispatch({
      type: NEWS_FETCH_NEWS_WITH_ID_BEGIN
    });
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:3001/news/${id}`).then(
          (res) => {
            dispatch({
              type: NEWS_FETCH_NEWS_WITH_ID_SUCCESS,
              data: res.data
            });
            resolve(res);
          },
          (err) => {
            dispatch({
              type: NEWS_FETCH_NEWS_WITH_ID_FAILURE,
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
    case NEWS_FETCH_NEWS_WITH_ID_BEGIN:
      return {
        ...state,
        fetchNewsWithIdIsPending: true,
        fetchNewsWithIdError: null,
      };

    case NEWS_FETCH_NEWS_WITH_ID_SUCCESS:
      return {
        ...state,
        fetchNewsWithIdIsPending: false,
        fetchNewsWithIdError: null,
        newsWithId: action.data
      }
    case NEWS_FETCH_NEWS_WITH_ID_FAILURE:
      return {
        ...state,
        fetchNewsWithIdIsPending: false,
        fetchNewsWithIdError: action.data.error,
      }

    default:
      return state;
  }
}
