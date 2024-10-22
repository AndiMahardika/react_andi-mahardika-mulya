/* eslint-disable react/prop-types */
export default function Radio(props) {
  const { label, options, name, defaultValue= "" } = props;

  return (
    <>
      <div className="col-6 mb-4">
        <label htmlFor={label} className="form-label">
          {label}
        </label>
          {options.map((option, index) => (
            <div key={index} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={name}
                id={option.id}
                value={option.value}
                defaultChecked={defaultValue === option.value}
                required
              />
              <label className="form-check-label" htmlFor={option.id}>
                {option.label}
              </label>
            </div>
          ))}
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Please select product freshness.</div>
      </div>
    </>
  );
}
