import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { AddCategory } from 'src/features/admin/AddCategory';

describe('admin/AddCategory', () => {
  it('renders node with correct class name', () => {
    const props = {
      admin: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <AddCategory {...props} />
    );

    expect(
      renderedComponent.find('.admin-add-category').getElement()
    ).to.exist;
  });
});
