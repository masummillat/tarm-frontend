import { expect } from 'chai';

import {
  ADMIN_FETCH_PRODUCT_LIST,
} from 'src/features/admin/redux/constants';

import {
  fetchProductList,
  reducer,
} from 'src/features/admin/redux/fetchProductList';

describe('admin/redux/fetchProductList', () => {
  it('returns correct action by fetchProductList', () => {
    expect(fetchProductList()).to.have.property('type', ADMIN_FETCH_PRODUCT_LIST);
  });

  it('handles action type ADMIN_FETCH_PRODUCT_LIST correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_FETCH_PRODUCT_LIST }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
