import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { News } from 'src/features/admin/News';

describe('admin/News', () => {
  it('renders node with correct class name', () => {
    const props = {
      admin: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <News {...props} />
    );

    expect(
      renderedComponent.find('.admin-news').getElement()
    ).to.exist;
  });
});
