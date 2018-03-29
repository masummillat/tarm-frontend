// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  COMMON_DIALOG_BOX,
  COMMON_DIALOG_BOX_CLOSE
} from './constants';

export function dialogBox(payload) {
  switch (payload){
    case COMMON_DIALOG_BOX:
      return {
        type: payload,
      }

    case COMMON_DIALOG_BOX_CLOSE:
      return {
        type: payload,
      }
  }
}

export function reducer(state, action) {
  switch (action.type) {
    case COMMON_DIALOG_BOX:
      return {
        ...state,
        dialog: true,
      };
    case COMMON_DIALOG_BOX_CLOSE:
      return {
        ...state,
        dialog: false,
      };

    default:
      return state;
  }
}
