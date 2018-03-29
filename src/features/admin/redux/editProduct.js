// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_EDIT_PRODUCT,
  ADMIN_EDIT_PRODUCT_BEGIN,
  ADMIN_EDIT_PRODUCT_SUCCESS,
  ADMIN_EDIT_PRODUCT_FAILURE,
} from './constants';
import axios from 'axios';
export function editProduct(payload, id) {
  return (dispatch)=> {
    dispatch({
      type:ADMIN_EDIT_PRODUCT_BEGIN
    });

    return new Promise((resolve,reject)=>{
      axios({
        method:'put',
        url: `http://localhost:3001/product/${id}`,
        data: payload,
        config: {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
      }).then( (res)=>{
            console.log(res.data);
            dispatch({
              type:ADMIN_EDIT_PRODUCT_SUCCESS,
              data: res.data
            });
            resolve(res);
          },
          (err)=>{
            dispatch({
              type: ADMIN_EDIT_PRODUCT_FAILURE,
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
    case ADMIN_EDIT_PRODUCT_BEGIN:
      return {
        ...state,
        editCategoryListIsPending: true,
        editCategoryListError: null,
      };

    case ADMIN_EDIT_PRODUCT_SUCCESS:
      console.log(action.data)
      return {
        ...state,
        editCategoryListIsPending: false,
        editCategoryListError: null,
        // categoryList: action.data
      }
    case ADMIN_EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        editCategoryListIsPending: false,
        editCategoryListError: action.data.error,
      }

    default:
      return state;
  }
}
