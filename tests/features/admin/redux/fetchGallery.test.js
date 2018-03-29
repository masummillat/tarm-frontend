import { expect } from 'chai';

import {
  ADMIN_FETCH_GALLERY,
} from 'src/features/admin/redux/constants';

import {
  fetchGallery,
  reducer,
} from 'src/features/admin/redux/fetchGallery';

describe('admin/redux/fetchGallery', () => {
  it('returns correct action by fetchGallery', () => {
    expect(fetchGallery()).to.have.property('type', ADMIN_FETCH_GALLERY);
  });

  it('handles action type ADMIN_FETCH_GALLERY correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_FETCH_GALLERY }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
