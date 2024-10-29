/* eslint-disable react/prop-types */
import Input from "../../../components/input/input.jsx";
import Select from "../../../components/select/select.jsx";
import { freshnessUpdate, productCategory } from "../constants.js";
import Radio from "../../../components/radio/radio.jsx";
import Textarea from "../../../components/textarea/textarea.jsx";

export default function FormUpdateProduct(props) {
  const { handleUpdate, errors, product } = props;
  // console.log("errors", errors.length > 0);

  return (
    <form action="" className="needs-validation" encType="multipart/form-data" onSubmit={handleUpdate}>
      <input type="number" name="id" defaultValue ={product.id} hidden />
      <Input
        label="Product Name"
        placeholder="Product Name"
        type="text"
        id="productName"
        col="12"
        defaultValue={product.productName}
        required={true}
        error={errors.productName}
        isValid={!errors.productName}
      />
      <Select
        caption="Product Category"
        options={productCategory}
        id="productCategory"
        defaultValue={product.productCategory}
        error={errors.productCategory}
        isValid={!errors.productCategory}
      />
      <Input
        label="Prodcut Image"
        type="file"
        id="productImage"
        col="7"
        accept=".jpg, .jpeg, .png"
        error={errors.productImage}
        isValid={!errors.productImage}
      />
      <div className="mb-3 overflow-hidden w-full" style={{width: "200px"}}>
        <img src={product.productImage} alt="" className="img-fluid rounded-2 w-full"/>
      </div>
      <Radio
        label="Product Freshness"
        options={freshnessUpdate}
        name="productFreshnessUpdate"
        defaultValue={product.productFreshness}
      />
      <Textarea
        label="Additional Description"
        id="additionalDescription"
        placeholder="Additional Description"
        row="3"
        defaultValue={product.productDescription}
      />
      <Input
        label="Product Price"
        placeholder="$ 1"
        type="number"
        id="productPrice"
        col="12"
        defaultValue={product.productPrice}
        required={true}
        error={errors.productPrice}
        isValid={!errors.productPrice}
      />
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-danger"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
          Update
        </button>
      </div>
    </form>
  );
}
