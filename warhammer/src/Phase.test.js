import React from 'react';
import { render } from '@testing-library/react';
import Phase from './Phase';

// test('renders phase name based on props', () => {
//   const { getByText } = render(<Phase name="Hero Phase" number="1" />);
//   const linkElement = getByText(/Phase 1 - Hero Phase/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('updates phase description based on phase number', () => {
  const { getByText } = render(<Phase number="1" />);
  const phaseDescription = getByText(/Phase 1 - Hero Phase/i);
  expect(phaseDescription).toBeInTheDocument();
});
