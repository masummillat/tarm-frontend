// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_NAVOPEN,
} from './constants';


// Nav Drawer open close action
export function navopen() {
  return {
    type: ADMIN_NAVOPEN,
  };
}

// Nav Drawer open close reducer
export function reducer(state, action) {
  switch (action.type) {
    case ADMIN_NAVOPEN:
      return {
        ...state,
        open: !state.open
      };

    default:
      return state;
  }
}
