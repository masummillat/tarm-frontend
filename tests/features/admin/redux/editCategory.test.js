import { expect } from 'chai';

import {
  ADMIN_EDIT_CATEGORY,
} from 'src/features/admin/redux/constants';

import {
  editCategory,
  reducer,
} from 'src/features/admin/redux/editCategory';

describe('admin/redux/editCategory', () => {
  it('returns correct action by editCategory', () => {
    expect(editCategory()).to.have.property('type', ADMIN_EDIT_CATEGORY);
  });

  it('handles action type ADMIN_EDIT_CATEGORY correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_EDIT_CATEGORY }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
