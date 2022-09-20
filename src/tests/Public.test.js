import { render, screen } from '@testing-library/react';
import {Public} from '../pages/Public';

test('Public Page should have message', () => {
  render(<Public />);
  const linkElement = screen.getByText(/messag/i);
  expect(linkElement).toBeInTheDocument()
});
