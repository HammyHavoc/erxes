import { shallow } from 'enzyme';
import React from 'react';

import Sidebar from '../../modules/layout/components/Sidebar';

describe('Sidebar component', () => {
  const defaultProps = {
    children: 'child'
  };

  test('renders Sidebar successfully', () => {
    shallow(<Sidebar {...defaultProps} />);
  });
});