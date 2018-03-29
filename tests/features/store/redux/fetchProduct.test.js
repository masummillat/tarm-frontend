import { expect } from 'chai';

import {
  STORE_FETCH_PRODUCT,
} from 'src/features/store/redux/constants';

import {
  fetchProduct,
  reducer,
} from 'src/features/store/redux/fetchProduct';

describe('store/redux/fetchProduct', () => {
  it('returns correct action by fetchProduct', () => {
    expect(fetchProduct()).to.have.property('type', STORE_FETCH_PRODUCT);
  });

  it('handles action type STORE_FETCH_PRODUCT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: STORE_FETCH_PRODUCT }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
