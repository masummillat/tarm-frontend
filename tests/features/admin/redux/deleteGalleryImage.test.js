import { expect } from 'chai';

import {
  ADMIN_DELETE_GALLERY_IMAGE,
} from 'src/features/admin/redux/constants';

import {
  deleteGalleryImage,
  reducer,
} from 'src/features/admin/redux/deleteGalleryImage';

describe('admin/redux/deleteGalleryImage', () => {
  it('returns correct action by deleteGalleryImage', () => {
    expect(deleteGalleryImage()).to.have.property('type', ADMIN_DELETE_GALLERY_IMAGE);
  });

  it('handles action type ADMIN_DELETE_GALLERY_IMAGE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_DELETE_GALLERY_IMAGE }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
