// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_DELETE_PRODUCT,
  ADMIN_DELETE_PRODUCT_BEGIN,
  ADMIN_DELETE_PRODUCT_SUCCESS,
  ADMIN_DELETE_PRODUCT_FAILURE,
} from './constants';
import axios from 'axios';
export function deleteProduct(id) {
  console.log(id)
  return (dispatch) => {
    dispatch({
      type: ADMIN_DELETE_PRODUCT_BEGIN
    });
    return new Promise((resolve, reject) => {
      axios.delete(`http://localhost:3001/product/${id}`,).then(
          (res) => {
            dispatch({
              type: ADMIN_DELETE_PRODUCT_SUCCESS,
              id: id
            });
            resolve(res);
          },
          (err) => {
            dispatch({
              type: ADMIN_DELETE_PRODUCT_FAILURE,
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
    case ADMIN_DELETE_PRODUCT_BEGIN:
      return {
        ...state,
        deleteCategoryIsPending: true,
        deleteCategoryListError: null,
      };

    case ADMIN_DELETE_PRODUCT_SUCCESS:
      return {
        deleteCategoryListIsPending: false,
        deleteCategoryListError: null,
        productList: state.productList.filter( product=> product._id !=action.id)
      }
    case ADMIN_DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        deleteCategoryListIsPending: false,
        deleteCategoryListError: action.data.error,
      }

    default:
      return state;
  }
}
