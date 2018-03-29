import { expect } from 'chai';

import {
  ADMIN_EDIT_PRODUCT,
} from 'src/features/admin/redux/constants';

import {
  editProduct,
  reducer,
} from 'src/features/admin/redux/editProduct';

describe('admin/redux/editProduct', () => {
  it('returns correct action by editProduct', () => {
    expect(editProduct()).to.have.property('type', ADMIN_EDIT_PRODUCT);
  });

  it('handles action type ADMIN_EDIT_PRODUCT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_EDIT_PRODUCT }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
