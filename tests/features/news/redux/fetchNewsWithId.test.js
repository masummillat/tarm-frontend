import { expect } from 'chai';

import {
  NEWS_FETCH_NEWS_WITH_ID,
} from 'src/features/news/redux/constants';

import {
  fetchNewsWithId,
  reducer,
} from 'src/features/news/redux/fetchNewsWithId';

describe('news/redux/fetchNewsWithId', () => {
  it('returns correct action by fetchNewsWithId', () => {
    expect(fetchNewsWithId()).to.have.property('type', NEWS_FETCH_NEWS_WITH_ID);
  });

  it('handles action type NEWS_FETCH_NEWS_WITH_ID correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: NEWS_FETCH_NEWS_WITH_ID }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
