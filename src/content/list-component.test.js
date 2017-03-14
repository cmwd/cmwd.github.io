import React from 'react';
import { render } from 'enzyme';

import ListComponent from './list-component';

it('Should render list of string', function() {
  const items = [
    'item-1',
    'item-2',
  ];
  const list = render(
    <ListComponent
      items={items}
    />);

  expect(list.find('li').length).toBe(2);
});

