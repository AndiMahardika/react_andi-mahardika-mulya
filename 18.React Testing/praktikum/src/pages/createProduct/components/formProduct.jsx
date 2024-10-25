/* eslint-disable react/prop-types */
import { freshness, productCategory } from "../constants.js";
import Input from "../../../components/input/input.jsx";
import Button from "../../../components/button/button.jsx";
import Select from "../../../components/select/select.jsx";
import Radio from "../../../components/radio/radio.jsx";
import Textarea from "../../../components/textarea/textarea.jsx";

export default function FormProduct(props) {
  const { handleSubmit, errors } = props

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
          error={errors.productName}
          isValid={!errors.productName}
        />
        <Select
          caption="Product Category"
          options={productCategory}
          id="productCategory"
          error={errors.productCategory}
          isValid={!errors.productCategory}
        />
        <Input
          label="Product Image"
          type="file"
          id="productImage"
          col="5"
          accept=".jpg, .jpeg, .png"
          error={errors.productImage}
          isValid={!errors.productImage}
          required={true}
        />
        <Radio
          label="Product Freshness"
          options={freshness}
          name="productFreshness"
        />
        <Textarea label="Additional Description" id="additionalDescription" placeholder="Additional Description" row="5"/>
        <Input
          label="Product Price"
          placeholder="$ 1"
          type="number"
          id="productPrice"
          col="12"
          error={errors.productPrice}
          isValid={!errors.productPrice}
          required={true}
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
