import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { UpdateProduct } from 'src/features/admin/UpdateProduct';

describe('admin/UpdateProduct', () => {
  it('renders node with correct class name', () => {
    const props = {
      admin: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <UpdateProduct {...props} />
    );

    expect(
      renderedComponent.find('.admin-update-product').getElement()
    ).to.exist;
  });
});
