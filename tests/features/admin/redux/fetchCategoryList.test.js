import { expect } from 'chai';

import {
  ADMIN_FETCH_CATEGORY_LIST,
} from 'src/features/admin/redux/constants';

import {
  fetchCategoryList,
  reducer,
} from 'src/features/admin/redux/fetchCategoryList';

describe('admin/redux/fetchCategoryList', () => {
  it('returns correct action by fetchCategoryList', () => {
    expect(fetchCategoryList()).to.have.property('type', ADMIN_FETCH_CATEGORY_LIST);
  });

  it('handles action type ADMIN_FETCH_CATEGORY_LIST correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_FETCH_CATEGORY_LIST }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
