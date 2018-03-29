import { expect } from 'chai';

import {
  COMMON_DIALOG_BOX,
} from 'src/features/common/redux/constants';

import {
  dialogBox,
  reducer,
} from 'src/features/common/redux/dialogBox';

describe('common/redux/dialogBox', () => {
  it('returns correct action by dialogBox', () => {
    expect(dialogBox()).to.have.property('type', COMMON_DIALOG_BOX);
  });

  it('handles action type COMMON_DIALOG_BOX correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: COMMON_DIALOG_BOX }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
