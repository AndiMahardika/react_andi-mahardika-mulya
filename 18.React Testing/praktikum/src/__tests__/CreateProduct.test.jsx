import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect } from "vitest";
import CreateProduct from '../pages/createProduct/components/index.jsx';

describe('CreateProduct', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CreateProduct />
      </MemoryRouter>
    );
  });

  test('should accept input for Product Name and display', () => {
    // Find the input for Product Name
    const productNameInput = screen.getByLabelText(/Product Name/i);
    
    // Simulate user typing into the input
    fireEvent.change(productNameInput, { target: { value: 'Laptop' } });
    
    // Assert that the input value is as expected
    expect(productNameInput.value).toBe('Laptop');
  });

  test('should accept input for Product Category and display', () => {
    const productCategoryInput = screen.getByLabelText(/Product Category/i);
    fireEvent.change(productCategoryInput, { target: { value: 'electronic' } });
    expect(productCategoryInput.value).toBe('electronic');
  });

  test('should accept input for Product Freshness and display', () => {
    const freshnessRadio = screen.getByLabelText(/Brand New/i);
    fireEvent.click(freshnessRadio);
    expect(freshnessRadio).toBeChecked();
  });

  test('should accept input for Product Image and display', () => {
    const productImageInput = screen.getByLabelText(/Product Image/i);
    fireEvent.change(productImageInput, { target: { value: '' } });
    expect(productImageInput.value).toBe('');
  });

  test('should accept input for Product Description and display', () => {
    const productDescriptionInput = screen.getByLabelText(/Additional Description/i);
    fireEvent.change(productDescriptionInput, { target: { value: 'test Product Description' } });
    expect(productDescriptionInput.value).toBe('test Product Description');
  });

  test('should accept input for Product Price and display', () => {
    const productPriceInput = screen.getByLabelText(/Product Price/i);
    fireEvent.change(productPriceInput, { target: { value: '123' } });
    expect(productPriceInput.value).toBe('123');
  });
  
});
