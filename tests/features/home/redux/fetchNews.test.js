import { expect } from 'chai';

import {
  HOME_FETCH_NEWS,
} from 'src/features/home/redux/constants';

import {
  fetchNews,
  reducer,
} from 'src/features/home/redux/fetchNews';

describe('home/redux/fetchNews', () => {
  it('returns correct action by fetchNews', () => {
    expect(fetchNews()).to.have.property('type', HOME_FETCH_NEWS);
  });

  it('handles action type HOME_FETCH_NEWS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_FETCH_NEWS }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
