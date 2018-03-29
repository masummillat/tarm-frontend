// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_IMAGE_UPLOAD_BEGIN,
  ADMIN_IMAGE_UPLOAD_SUCCESS,
  ADMIN_IMAGE_UPLOAD_FAILURE,
} from './constants';
import axios from 'axios';
export function imageUpload(payload, url) {
  return (dispatch)=> {
    dispatch({
      type:ADMIN_IMAGE_UPLOAD_BEGIN
    });

    return new Promise((resolve,reject)=>{
      axios({
        method:'post',
        url: url,
        data: payload,
        config: {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
      }).then( (res)=>{
            // console.log(res);
            dispatch({
              type:ADMIN_IMAGE_UPLOAD_SUCCESS,
              data: res.data
            });
            resolve(res);
          },
          (err)=>{
            dispatch({
              type: ADMIN_IMAGE_UPLOAD_FAILURE,
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
    case ADMIN_IMAGE_UPLOAD_BEGIN:
      return {
        ...state,
        imageUploadIsPending: true,
        imageUploadError: null,
      };

    case ADMIN_IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        imageUploadIsPending: false,
        imageUploadError: null,
        uploadedImage:action.data.fileName
      };

    case ADMIN_IMAGE_UPLOAD_FAILURE:
      return{
        ...state,
        imageUploadIsPending: false,
        imageUploadError: action.data.error,

      }

    default:
      return state;
  }
}
