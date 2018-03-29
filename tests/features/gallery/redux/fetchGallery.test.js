import { expect } from 'chai';

import {
  GALLERY_FETCH_GALLERY,
} from 'src/features/gallery/redux/constants';

import {
  fetchGallery,
  reducer,
} from 'src/features/gallery/redux/fetchGallery';

describe('gallery/redux/fetchGallery', () => {
  it('returns correct action by fetchGallery', () => {
    expect(fetchGallery()).to.have.property('type', GALLERY_FETCH_GALLERY);
  });

  it('handles action type GALLERY_FETCH_GALLERY correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: GALLERY_FETCH_GALLERY }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
