import { expect } from 'chai';

import {
  ADMIN_PRODUCT_ADD,
} from 'src/features/admin/redux/constants';

import {
  productAdd,
  reducer,
} from 'src/features/admin/redux/productAdd';

describe('admin/redux/productAdd', () => {
  it('returns correct action by productAdd', () => {
    expect(productAdd()).to.have.property('type', ADMIN_PRODUCT_ADD);
  });

  it('handles action type ADMIN_PRODUCT_ADD correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_PRODUCT_ADD }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
