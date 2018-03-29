import { expect } from 'chai';

import {
  ADMIN_DELETE_PRODUCT,
} from 'src/features/admin/redux/constants';

import {
  deleteProduct,
  reducer,
} from 'src/features/admin/redux/deleteProduct';

describe('admin/redux/deleteProduct', () => {
  it('returns correct action by deleteProduct', () => {
    expect(deleteProduct()).to.have.property('type', ADMIN_DELETE_PRODUCT);
  });

  it('handles action type ADMIN_DELETE_PRODUCT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_DELETE_PRODUCT }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
