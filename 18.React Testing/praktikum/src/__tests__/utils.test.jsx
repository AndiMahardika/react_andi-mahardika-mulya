/* eslint-disable no-undef */
import { 
  validateProductName, 
  validateProductCategory, 
  validateProductFreshness, 
  validateProductPrice, 
  validateProductImage,
  convertCurrency 
} from '../pages/createProduct/utils/utils.js'; 

describe('Utility Functions', () => {
  test('validateProductName should not allow empty input', () => {
    expect(validateProductName('')).toBe(false); 
  });

  test('validate Product Name should not allow names longer than 25 characters', () => {
    expect(validateProductName('VeryLongProductNameThatExceedsLimit')).toBe(false);
  });

  test('validate Product Name should not allow names with special characters', () => {
    expect(validateProductName('Product@123')).toBe(false);
  });

  test('validate Product Name should allow valid names', () => {
    expect(validateProductName('Laptop')).toBe(true);
  });

  test('validate product category not allow empty input', () => {
    expect(validateProductCategory('')).toBe(false);
  })

  test('validate product freshness not allow empty input', () => {
    expect(validateProductFreshness('')).toBe(false);
  })

  test('validate product price not allow empty input', () => {
    expect(validateProductPrice('')).toBe(false);
  })

  test('validate product image not allow empty input', () => {
    expect(validateProductImage('')).toBe(false);
  })

  test('convertCurrency should convert amounts correctly', async () => {
    const convertedAmount = await convertCurrency(100, 'USD', 'IDR');
    expect(convertedAmount).toBeDefined(); 
    expect(typeof convertedAmount).toBe('number'); 
  });

});
