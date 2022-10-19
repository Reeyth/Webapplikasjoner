import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('should multiply the values together when button is pressed', () => {
  render(<App />)

  expect(document.querySelector('p')).toHaveTextContent('1 x 1')

  fireEvent.click(screen.getByText('Multiply!'))

  expect(document.querySelector('p')).toHaveTextContent('2 x 2')
})
