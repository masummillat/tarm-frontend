import { expect } from 'chai';

import {
  ADMIN_NAVOPEN,
} from 'src/features/admin/redux/constants';

import {
  navopen,
  reducer,
} from 'src/features/admin/redux/navopen';

describe('admin/redux/navopen', () => {
  it('returns correct action by navopen', () => {
    expect(navopen()).to.have.property('type', ADMIN_NAVOPEN);
  });

  it('handles action type ADMIN_NAVOPEN correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_NAVOPEN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
