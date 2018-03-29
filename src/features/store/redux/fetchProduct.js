// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  STORE_FETCH_PRODUCT_BEGIN,
  STORE_FETCH_PRODUCT_FAILURE,
  STORE_FETCH_PRODUCT_SUCCESS
} from './constants';

import axios from 'axios';

export function fetchProduct() {
  return (dispatch) => {
    dispatch({
      type: STORE_FETCH_PRODUCT_BEGIN
    });
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3001/product/').then(
          (res) => {
            dispatch({
              type: STORE_FETCH_PRODUCT_SUCCESS,
              data: res.data
            });
            resolve(res);
          },
          (err) => {
            dispatch({
              type: STORE_FETCH_PRODUCT_FAILURE,
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
    case STORE_FETCH_PRODUCT_BEGIN:
      return {
        ...state,
        fetchCategoryListIsPending: true,
        fetchCategoryListError: null,
      };

    case STORE_FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        fetchCategoryListIsPending: false,
        fetchCategoryListError: null,
        product: action.data,
      }
    case STORE_FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        fetchCategoryListIsPending: false,
        fetchCategoryListError: action.data.error,
      }

    default:
      return state;
  }
}