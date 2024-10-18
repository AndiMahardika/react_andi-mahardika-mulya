import { freshness, productCategory } from "../constants.js";
import Input from "../../../components/input/input.jsx";
import Button from "../../../components/button/button.jsx";
import Select from "../../../components/select/select.jsx";
import Radio from "../../../components/radio/radio.jsx";

export default function FormProduct({ handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="row needs-validation"
      id="createProductForm"
      encType="multipart/form-data"
    >
      <div className="col-lg-7 mx-auto">
        <h3>Detail Product</h3>
        <Input
          label="Product Name"
          placeholder="Product Name"
          type="text"
          id="productName"
          col="6"
        />
        <Select
          caption="Product Category"
          options={productCategory}
          id="productCategory"
        />
        <Input label="Prodcut Image" type="file" id="productImage" col="5" accept=".jpg, .jpeg, .png"/>
        <Radio
          label="Product Freshness"
          options={freshness}
          name="productFreshness"
        />
        <Input
          label="Product Price"
          placeholder="$ 1"
          type="number"
          id="productPrice"
          col="12"
        />
        <div className="d-grid gap-2 px-4 mb-3">
          <Button type="submit" color="primary">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
