import { expect } from 'chai';

import {
  ADMIN_DELETE_NEWS,
} from 'src/features/admin/redux/constants';

import {
  deleteNews,
  reducer,
} from 'src/features/admin/redux/deleteNews';

describe('admin/redux/deleteNews', () => {
  it('returns correct action by deleteNews', () => {
    expect(deleteNews()).to.have.property('type', ADMIN_DELETE_NEWS);
  });

  it('handles action type ADMIN_DELETE_NEWS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_DELETE_NEWS }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
