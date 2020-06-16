import React from 'react';
import { render } from '@testing-library/react';
import Phase from './Phase';

test('renders phase name based on props', () => {
  const { getByText } = render(<Phase name="Phase 1 - Hero Phase" />);
  const linkElement = getByText(/Phase 1 - Hero Phase/i);
  expect(linkElement).toBeInTheDocument();
});
