export default function Select(props) {
  const { options, caption, id } = props;

  return (
    <>
      <div className="mb-4 col-md-5 col-7">
        <label htmlFor={id} className="form-label">
          Product Category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id={id}
          name={id}
          required
        >
          <option defaultValue={""}>
            {caption}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
    </>
  );
}
