// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  GALLERY_FETCH_GALLERY_BEGIN,
  GALLERY_FETCH_GALLERY_SUCCESS,
  GALLERY_FETCH_GALLERY_FAILURE,
} from './constants';

import  axios from 'axios';
export function fetchGallery() {
  return (dispatch) => {
    dispatch({
      type: GALLERY_FETCH_GALLERY_BEGIN
    });
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3001/gallery').then(
          (res) => {
            dispatch({
              type: GALLERY_FETCH_GALLERY_SUCCESS,
              data: res.data
            });
            resolve(res);
          },
          (err) => {
            dispatch({
              type: GALLERY_FETCH_GALLERY_FAILURE,
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
    case GALLERY_FETCH_GALLERY_BEGIN:
      return {
        ...state,
        fetchGalleryIsPending: true,
        fetchGalleryError: null,
      };

    case GALLERY_FETCH_GALLERY_SUCCESS:
      return {
        ...state,
        fetchGalleryIsPending: false,
        fetchGalleryError: null,
        gallery: action.data
      }
    case GALLERY_FETCH_GALLERY_FAILURE:
      return {
        ...state,
        fetchGalleryIsPending: false,
        fetchGalleryError: action.data.error,
      }

    default:
      return state;
  }
}

