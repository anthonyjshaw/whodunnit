import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Whodunnit link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Whodunnit?/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Character name', () => {
  render(<App />);
  const characterName = screen.getByText(<Character name='Hey'>);
});
