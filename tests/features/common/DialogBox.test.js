import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DialogBox } from 'src/features/common/DialogBox';

describe('common/DialogBox', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DialogBox {...props} />
    );

    expect(
      renderedComponent.find('.common-dialog-box').getElement()
    ).to.exist;
  });
});
