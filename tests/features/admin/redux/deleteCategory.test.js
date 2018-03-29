import { expect } from 'chai';

import {
  ADMIN_DELETE_CATEGORY,
} from 'src/features/admin/redux/constants';

import {
  deleteCategory,
  reducer,
} from 'src/features/admin/redux/deleteCategory';

describe('admin/redux/deleteCategory', () => {
  it('returns correct action by deleteCategory', () => {
    expect(deleteCategory()).to.have.property('type', ADMIN_DELETE_CATEGORY);
  });

  it('handles action type ADMIN_DELETE_CATEGORY correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_DELETE_CATEGORY }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
