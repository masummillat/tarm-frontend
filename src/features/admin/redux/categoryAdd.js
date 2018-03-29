// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_CATEGORY_ADD,
  ADMIN_CATEGORY_ADD_BEGIN,
  ADMIN_CATEGORY_ADD_SUCCESS,
  ADMIN_CATEGORY_ADD_FAILUR

} from './constants';
import axios from 'axios';
export function categoryAdd(payload) {

  console.log(payload)
  // return {
  //   type: ADMIN_CATEGORY_ADD,
  // };

  return (dispatch)=> {
    dispatch({
      type:ADMIN_CATEGORY_ADD_BEGIN
    });

    return new Promise((resolve,reject)=>{
      axios({
        method:'post',
        url: 'http://localhost:3001/addcategory',
        data: payload,
        config: {
          headers: {
           'content-type': 'application/json'
          }
        }
      }).then( (res)=>{
             console.log(res);
            dispatch({
              type:ADMIN_CATEGORY_ADD_SUCCESS,
              data: res.data
            });
            resolve(res);
          },
          (err)=>{
            dispatch({
              type: ADMIN_CATEGORY_ADD_FAILUR,
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

    case ADMIN_CATEGORY_ADD_BEGIN:
      return {
        ...state,
        uploadCategoryIsPending: true,
        uploadCategoryError: null,
      };

    case ADMIN_CATEGORY_ADD_SUCCESS:

      return {
        ...state,
        uploadCategoryIsPending: false,
        uploadCategoryError: null,
        uploadedCategory:action.data,
        dialogbox: false,
      };

    case ADMIN_CATEGORY_ADD_FAILUR:
      return{
        ...state,
        uploadCategoryIsPending: false,
        uploadCategoryError: action.data.error,
        dialogbox: true

      };

    default:
      return state;
  }
}
