let deleteTooltip = document.getElementById("btnDelete");
let tooltip = new bootstrap.Tooltip(deleteTooltip);

(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const products = [];

document.addEventListener(`DOMContentLoaded`, function () {
  const createProductForm = document.getElementById(`createProductForm`);
  const deleteButton = document.getElementById(`btnDelete`);
  const searchButton = document.getElementById(`btnSearch`);

  createProductForm.addEventListener(`submit`, function (event) {
    event.preventDefault();
    addProduct();
  });

  deleteButton.addEventListener(`click`, function () {
    deleteProduct();
  });

  searchButton.addEventListener(`click`, function () {
    const inputSearch = document.getElementById(`inputSearch`).value; 
    alertSearch(inputSearch);
  });

});

function addProduct() {
  const productName = document.getElementById(`productName`).value;
  const productCategory = document.getElementById(`productCategory`).value;
  const imageFile = document.getElementById('imageProduct').files[0];
  const productFreshness = document.querySelector(`input[name="productFreshness"]:checked`).value;
  const description = document.getElementById(`description`).value.trim();
  const price = document.getElementById(`price`).value.trim();

  const reader = new FileReader();
  reader.readAsDataURL(imageFile);

  reader.onload = function (event) {
    const imageDataUrl = event.target.result;

    const id = generateId();

    const product = createProductObject(
      id,
      productName,
      productCategory,
      imageDataUrl,
      productFreshness,
      description,
      price
    );

    products.push(product);
    renderEvent();
  };
}
 
function generateId() {
  return +new Date();
}

function createProductObject( id, productName, productCategory, imageDataUrl, productFreshness, description, price) {
  return {
    id,
    productName,
    productCategory,
    imageDataUrl,
    productFreshness,
    description,
    price
  };
}

function renderEvent() {
  const tableProduct = document.getElementById(`tableProduct`);
  tableProduct.innerHTML = ``;

  let number = 1;
  for (const product of products) {
    tableProduct.innerHTML += itemProduct(product, number);
    number++;
  }
}

function itemProduct(product, number) {
  return `<tr class="align-middle">
            <th scope="row">${number}</th>
            <td>${product.productName}</td>
            <td>${product.productCategory}</td>
            <td>
              <img src="${product.imageDataUrl}" class="img-fluid rounded-3" width="130px" alt="">
            </td>
            <td>${product.productFreshness}</td>
            <td>${product.description}</td>
            <td>$ ${product.price}</td>
          </tr>`;
}

function deleteProduct(){
  products.pop();
  renderEvent();
}

function alertSearch(inputSearch){
  const foundProduct = products.find(product => product.productName.toLowerCase() === inputSearch.toLowerCase());
  const searchAlert = document.getElementById('searchAlert');

  if (foundProduct) {
    searchAlert.innerHTML = ` <div class="alert alert-success alert-dismissible fade show col-md-9 col-lg-5 col-10 mx-auto" role="alert">
            <h5 class="text-center">Product Found</h5>
            <hr>
            <div class="d-md-flex align-items-center justify-content-evenly text-center">
              <div>
                <strong>Product Name:</strong> ${foundProduct.productName} <br>
                <strong>Product Category:</strong> ${foundProduct.productCategory} <br>
                <strong>Product Freshness:</strong> ${foundProduct.productFreshness} <br>
                <strong>Product Price:</strong> $ ${foundProduct.price} <br>
              </div>
              <img src="${foundProduct.imageDataUrl}" class="rounded-3 mt-2 mt-md-0" alt="" width="130px">
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`
  } else {
    searchAlert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show col-md-9 col-lg-6 col-12 mx-auto" role="alert">
                              <strong>Product not found</strong>
                              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
  }

  searchAlert.classList.remove('d-none');
}