import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Whodunnit link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Whodunnit?/i);
  expect(linkElement).toBeInTheDocument();
});


