/* eslint-disable react/prop-types */
export default function Select(props) {
  const { options, caption, id, defaultValue = "", error, isValid } = props;

  return (
    <>
      <div className="mb-4 col-md-5 col-7">
        <label htmlFor={id} className="form-label">
          Product Category
        </label>
        <select
          className={`form-select ${!isValid ? "is-invalid" : ""}`}
          aria-label="Default select example"
          id={id}
          name={id}
          defaultValue={defaultValue}
        >
          <option value={""}>
            {caption}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {!isValid && error && (
          <div className="invalid-feedback">
            {error}
          </div>
        )}
      </div>
    </>
  );
}
