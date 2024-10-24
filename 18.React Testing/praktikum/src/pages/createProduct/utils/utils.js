export function generateUUID() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export function validateProductName(name) {
  const regex = /^[A-Za-z0-9\s]{3,25}$/;
  return regex.test(name);
}

export function validateProductCategory(category) {
  const validCategories = ["clothes", "electronic", "food"];
  return validCategories.includes(category);
}

export function validateProductFreshness(freshness) {
  const validFreshness = ["Brand New", "Second Hank", "Refurbished"];
  return validFreshness.includes(freshness);
}

export function validateProductPrice(price) {
  const regex = /^[1-9]\d*$/;
  return regex.test(price);
}

export function validateProductImage(image){
  const regex = /\.(jpg|jpeg|png)$/i;
  console.log('regex', image)
  return regex.test(image);
}