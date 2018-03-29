import { expect } from 'chai';

import {
  ADMIN_CATEGORY_ADD,
} from 'src/features/admin/redux/constants';

import {
  categoryAdd,
  reducer,
} from 'src/features/admin/redux/categoryAdd';

describe('admin/redux/categoryAdd', () => {
  it('returns correct action by categoryAdd', () => {
    expect(categoryAdd()).to.have.property('type', ADMIN_CATEGORY_ADD);
  });

  it('handles action type ADMIN_CATEGORY_ADD correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_CATEGORY_ADD }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
