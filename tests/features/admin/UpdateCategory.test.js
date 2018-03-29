import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { UpdateCategory } from 'src/features/admin/UpdateCategory';

describe('admin/UpdateCategory', () => {
  it('renders node with correct class name', () => {
    const props = {
      admin: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <UpdateCategory {...props} />
    );

    expect(
      renderedComponent.find('.admin-update-category').getElement()
    ).to.exist;
  });
});
