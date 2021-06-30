import { render, screen } from '@testing-library/react';
import Footer from './Footer';


test('renders copyright', () => {
  render(<Footer/>)

  const copyright = screen.getByText(/copyright/i);
  expect(copyright).toBeInTheDocument();
});
