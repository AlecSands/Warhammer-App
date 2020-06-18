import React from 'react';
import { render } from '@testing-library/react';
import Phase from './Phase';

test('static test for phase 1', () => {
  const { getByText } = render(<Phase number="1" />);
  const phaseDescription = getByText(/Phase 1 - Hero Phase/i);
  expect(phaseDescription).toBeInTheDocument();
});

test('static test for phase 2', () => {
  const { getByText } = render(<Phase number="2" />);
  const phaseDescription = getByText(/Phase 2 - Movement/i);
  expect(phaseDescription).toBeInTheDocument();
});

test('static test for phase 100', () => {
  const { getByText } = render(<Phase number="100" />);
  const phaseDescription = getByText(/Phase 1 - Hero Phase/i);
  expect(phaseDescription).toBeInTheDocument();
});
