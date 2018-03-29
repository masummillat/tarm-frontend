import { expect } from 'chai';

import {
  ADMIN_PRODUCT_IMAGE,
} from 'src/features/admin/redux/constants';

import {
  productImage,
  reducer,
} from 'src/features/admin/redux/productImage';

describe('admin/redux/productImage', () => {
  it('returns correct action by productImage', () => {
    expect(productImage()).to.have.property('type', ADMIN_PRODUCT_IMAGE);
  });

  it('handles action type ADMIN_PRODUCT_IMAGE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_PRODUCT_IMAGE }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
