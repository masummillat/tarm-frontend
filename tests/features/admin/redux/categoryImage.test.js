import { expect } from 'chai';

import {
  ADMIN_CATEGORY_IMAGE,
} from 'src/features/admin/redux/constants';

import {
  categoryImage,
  reducer,
} from 'src/features/admin/redux/categoryImage';

describe('admin/redux/categoryImage', () => {
  it('returns correct action by categoryImage', () => {
    expect(categoryImage()).to.have.property('type', ADMIN_CATEGORY_IMAGE);
  });

  it('handles action type ADMIN_CATEGORY_IMAGE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_CATEGORY_IMAGE }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
