// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_NEWS_ADD_BEGIN,
  ADMIN_NEWS_ADD_SUCCESS,
  ADMIN_NEWS_ADD_FAILURE,
} from './constants';
import axios from 'axios'
export function newsAdd(payload) {
  return (dispatch)=> {
    dispatch({
      type:ADMIN_NEWS_ADD_BEGIN
    });

    return new Promise((resolve,reject)=>{
      axios({
        method:'post',
        url: 'http://localhost:3001/news',
        data: payload,
        config: {
          headers: {
            'content-type': 'application/json'
          }
        }
      }).then( (res)=>{
            dispatch({
              type:ADMIN_NEWS_ADD_SUCCESS,
              data: res.data
            });
            resolve(res);
          },
          (err)=>{
            dispatch({
              type: ADMIN_NEWS_ADD_FAILURE,
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

    case ADMIN_NEWS_ADD_BEGIN:
      return {
        ...state,
        uploadNewsIsPending: true,
        uploadNewsError: null,
      };

    case ADMIN_NEWS_ADD_SUCCESS:

        var arr =[]
        var newData = action.data;
        arr = state.news;
        arr.push(newData);
        // console.log(arr)
      return {
        ...state,
        uploadNewsIsPending: false,
        uploadNewsError: null,
         news: arr,

      };

    case ADMIN_NEWS_ADD_FAILURE:
      return{
        ...state,
        uploadNewsIsPending: false,
        uploadNewsError: action.data.error,
      };

    default:
      return state;
  }
}
