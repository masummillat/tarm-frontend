import { expect } from 'chai';

import {
  ADMIN_IMAGE_UPLOAD,
} from 'src/features/admin/redux/constants';

import {
  imageUpload,
  reducer,
} from 'src/features/admin/redux/imageUpload';

describe('admin/redux/imageUpload', () => {
  it('returns correct action by imageUpload', () => {
    expect(imageUpload()).to.have.property('type', ADMIN_IMAGE_UPLOAD);
  });

  it('handles action type ADMIN_IMAGE_UPLOAD correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_IMAGE_UPLOAD }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
