import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/find-us/DefaultPage';

describe('find-us/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      findUs: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.find-us-default-page').getElement()
    ).to.exist;
  });
});
