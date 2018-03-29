// This is the root reducer of the feature. It is used for:
//   1. Load reducers from each action in the feature and process them one by one.
//      Note that this part of code is mainly maintained by Rekit, you usually don't need to edit them.
//   2. Write cross-topic reducers. If a reducer is not bound to some specific action.
//      Then it could be written here.
// Learn more from the introduction of this approach:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da.

import initialState from './initialState';
import { reducer as navopenReducer } from './navopen';
import { reducer as categoryImageReducer } from './categoryImage';
import { reducer as categoryAddReducer } from './categoryAdd';
import { reducer as fetchCategoryListReducer } from './fetchCategoryList';
import { reducer as productAddReducer } from './productAdd';
import { reducer as productImageReducer } from './productImage';
import { reducer as fetchProductListReducer } from './fetchProductList';
import { reducer as editCategoryReducer } from './editCategory';
import { reducer as deleteCategoryReducer } from './deleteCategory';
import { reducer as deleteProductReducer } from './deleteProduct';
import { reducer as editProductReducer } from './editProduct';
import { reducer as imageUploadReducer } from './imageUpload';
import { reducer as fetchGalleryReducer } from './fetchGallery';
import { reducer as deleteGalleryImageReducer } from './deleteGalleryImage';
import { reducer as newsAddReducer } from './newsAdd';
import { reducer as fetchNewsReducer } from './fetchNews';
import { reducer as editNewsReducer } from './editNews';
import { reducer as deleteNewsReducer } from './deleteNews';

const reducers = [
  navopenReducer,
  categoryImageReducer,
  categoryAddReducer,
  fetchCategoryListReducer,
  productAddReducer,
  productImageReducer,
  fetchProductListReducer,
  editCategoryReducer,
  deleteCategoryReducer,
  deleteProductReducer,
  editProductReducer,
  imageUploadReducer,
  fetchGalleryReducer,
  deleteGalleryImageReducer,
  newsAddReducer,
  fetchNewsReducer,
  editNewsReducer,
  deleteNewsReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
