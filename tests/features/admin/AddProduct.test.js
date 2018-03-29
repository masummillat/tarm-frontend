import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { AddProduct } from 'src/features/admin/AddProduct';

describe('admin/AddProduct', () => {
  it('renders node with correct class name', () => {
    const props = {
      admin: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <AddProduct {...props} />
    );

    expect(
      renderedComponent.find('.admin-add-product').getElement()
    ).to.exist;
  });
});
