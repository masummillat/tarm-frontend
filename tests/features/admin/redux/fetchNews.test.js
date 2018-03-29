import { expect } from 'chai';

import {
  ADMIN_FETCH_NEWS,
} from 'src/features/admin/redux/constants';

import {
  fetchNews,
  reducer,
} from 'src/features/admin/redux/fetchNews';

describe('admin/redux/fetchNews', () => {
  it('returns correct action by fetchNews', () => {
    expect(fetchNews()).to.have.property('type', ADMIN_FETCH_NEWS);
  });

  it('handles action type ADMIN_FETCH_NEWS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_FETCH_NEWS }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
