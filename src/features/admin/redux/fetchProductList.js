// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_FETCH_PRODUCT_LIST,
  ADMIN_FETCH_PRODUCT_LIST_BEGIN,
  ADMIN_FETCH_PRODUCT_LIST_SUCCESS,
  ADMIN_FETCH_PRODUCT_LIST_FAILURE,
} from './constants';
import axios from 'axios';

export function fetchProductList() {
  return (dispatch) => {
    dispatch({
      type: ADMIN_FETCH_PRODUCT_LIST_BEGIN
    });
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3001/product/').then(
          (res) => {
            dispatch({
              type: ADMIN_FETCH_PRODUCT_LIST_SUCCESS,
              data: res.data
            });
            resolve(res);
          },
          (err) => {
            dispatch({
              type: ADMIN_FETCH_PRODUCT_LIST_FAILURE,
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
    case ADMIN_FETCH_PRODUCT_LIST_BEGIN:
      return {
        ...state,
        fetchCategoryListIsPending: true,
        fetchCategoryListError: null,
      };

    case ADMIN_FETCH_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        fetchCategoryListIsPending: false,
        fetchCategoryListError: null,
        productList: action.data,
      }
    case ADMIN_FETCH_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        fetchCategoryListIsPending: false,
        fetchCategoryListError: action.data.error,
      }

    default:
      return state;
  }
}
