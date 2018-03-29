// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_DELETE_GALLERY_IMAGE_BEGIN,
  ADMIN_DELETE_GALLERY_IMAGE_SUCCESS,
  ADMIN_DELETE_GALLERY_IMAGE_FAILURE,
} from './constants';
import  axios from 'axios';

export function deleteGalleryImage(id) {
  return (dispatch) => {
    dispatch({
      type: ADMIN_DELETE_GALLERY_IMAGE_BEGIN
    });
    return new Promise((resolve, reject) => {
      axios.delete(`http://localhost:3001/gallery/${id}`,).then(
          (res) => {
            dispatch({
              type: ADMIN_DELETE_GALLERY_IMAGE_SUCCESS,
              id: id
            });
            resolve(res);
          },
          (err) => {
            dispatch({
              type: ADMIN_DELETE_GALLERY_IMAGE_FAILURE,
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
    case ADMIN_DELETE_GALLERY_IMAGE_BEGIN:
      return {
        ...state,
        deleteGalleryImageIsPending: true,
        deleteGalleryImageError: null,
      };

    case ADMIN_DELETE_GALLERY_IMAGE_SUCCESS:
      return {
        deleteGalleryImageIsPending: false,
        deleteGalleryImageError: null,
        gallery: state.gallery.filter( gallery=> gallery._id !=action.id)
      }
    case ADMIN_DELETE_GALLERY_IMAGE_FAILURE:
      return {
        ...state,
        deleteGalleryImageIsPending: false,
        deleteGalleryImageError: action.data.error,
      }

    default:
      return state;
  }
}
