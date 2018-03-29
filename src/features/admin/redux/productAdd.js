// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_PRODUCT_ADD,
  ADMIN_PRODUCT_ADD_FAILUR,
  ADMIN_PRODUCT_ADD_BEGIN,
  ADMIN_PRODUCT_ADD_SUCCESS,

} from './constants';
import axios from 'axios';
export function productAdd(payload) {
  return (dispatch)=> {
    dispatch({
      type:ADMIN_PRODUCT_ADD_BEGIN
    });

    return new Promise((resolve,reject)=>{
      axios({
        method:'post',
        url: 'http://localhost:3001/product',
        data: payload,
        config: {
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
      }).then( (res)=>{
            console.log(res);
            dispatch({
              type:ADMIN_PRODUCT_ADD_SUCCESS,
              data: res.data
            });
            resolve(res);
          },
          (err)=>{
            dispatch({
              type: ADMIN_PRODUCT_ADD_FAILUR,
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

    case ADMIN_PRODUCT_ADD_BEGIN:
      return {
        ...state,
        uploadProductIsPending: true,
        uploadProductError: null,
      };

    case ADMIN_PRODUCT_ADD_SUCCESS:

        console.log(action.data)
      return {
        ...state,
        uploadProductIsPending: false,
        uploadProductError: null,
        uploadedProduct:action.data,
        dialogbox: false,
      };

    case ADMIN_PRODUCT_ADD_FAILUR:
      return{
        ...state,
        uploadProductIsPending: false,
        uploadProductError: action.data.error,
        dialogbox: true

      };

    default:
      return state;
  }
}
