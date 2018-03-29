import { expect } from 'chai';

import {
  ADMIN_EDIT_NEWS,
} from 'src/features/admin/redux/constants';

import {
  editNews,
  reducer,
} from 'src/features/admin/redux/editNews';

describe('admin/redux/editNews', () => {
  it('returns correct action by editNews', () => {
    expect(editNews()).to.have.property('type', ADMIN_EDIT_NEWS);
  });

  it('handles action type ADMIN_EDIT_NEWS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_EDIT_NEWS }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
