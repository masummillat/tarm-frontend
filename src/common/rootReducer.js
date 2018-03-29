import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducer from '../features/home/redux/reducer';
import commonReducer from '../features/common/redux/reducer';
import adminReducer from '../features/admin/redux/reducer';
import contactReducer from '../features/contact/redux/reducer';
import newsReducer from '../features/news/redux/reducer';
import galleryReducer from '../features/gallery/redux/reducer';
import storeReducer from '../features/store/redux/reducer';
import findUsReducer from '../features/find-us/redux/reducer';

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage theme.

const reducerMap = {
  router: routerReducer,
  home: homeReducer,
  common: commonReducer,
  admin: adminReducer,
  contact: contactReducer,
  news: newsReducer,
  gallery: galleryReducer,
  store: storeReducer,
  findUs: findUsReducer,
};

export default combineReducers(reducerMap);
