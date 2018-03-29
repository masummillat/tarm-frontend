import { expect } from 'chai';

import {
  ADMIN_NEWS_ADD,
} from 'src/features/admin/redux/constants';

import {
  newsAdd,
  reducer,
} from 'src/features/admin/redux/newsAdd';

describe('admin/redux/newsAdd', () => {
  it('returns correct action by newsAdd', () => {
    expect(newsAdd()).to.have.property('type', ADMIN_NEWS_ADD);
  });

  it('handles action type ADMIN_NEWS_ADD correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_NEWS_ADD }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
