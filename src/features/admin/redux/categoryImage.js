// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_CATEGORY_IMAGE,
  ADMIN_CATEGORY_ADD_IMAGE_BEGIN,
  ADMIN_CATEGORY_ADD_IMAGE_SUCCESS,
  ADMIN_CATEGORY_ADD_IMAGE_FAILUR,
} from './constants';
import axios from 'axios';

export function categoryImage(payload) {
  // return {
  //   type: ADMIN_CATEGORY_IMAGE,
  //   image:payload,
  // };
  return (dispatch)=> {
    dispatch({
      type:ADMIN_CATEGORY_ADD_IMAGE_BEGIN
    });

    return new Promise((resolve,reject)=>{
      axios({
        method:'post',
        url: 'http://localhost:3001/addcategory/image',
        data: payload,
        config: {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
      }).then( (res)=>{
            // console.log(res);
            dispatch({
              type:ADMIN_CATEGORY_ADD_IMAGE_SUCCESS,
              data: res.data
            });
            resolve(res);
          },
          (err)=>{
            dispatch({
              type: ADMIN_CATEGORY_ADD_IMAGE_FAILUR,
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
    case ADMIN_CATEGORY_ADD_IMAGE_BEGIN:
      return {
        ...state,
        uploadCategoryImageIsPending: true,
        uploadCategoryImageError: null,
      };

    case ADMIN_CATEGORY_ADD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadCategoryImageIsPending: false,
        uploadCategoryImageError: null,
        uploadedImage:action.data.fileName
      };

    case ADMIN_CATEGORY_ADD_IMAGE_FAILUR:
      return{
        ...state,
        uploadCategoryImageIsPending: false,
        uploadCategoryImageError: action.data.error,

      }

    default:
      return state;
  }
}
