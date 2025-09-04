import { render, screen } from '@testing-library/react';
import ProductList from '../components/ProductList'; // Adjust path as needed

test('renders product list', () => {
  render(<ProductList products={[{ id: 1, name: 'Test Product', price: 100 }]} />);
  expect(screen.getByText('Test Product')).toBeInTheDocument();
});