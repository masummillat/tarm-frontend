import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/news/DefaultPage';

describe('news/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      news: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.news-default-page').getElement()
    ).to.exist;
  });
});
