/* eslint-disable react/prop-types */
export default function Textarea(props) {
  const { label, placeholder, id, row, defaultValue="" } = props;

  return (
    <>
      <div className="mb-3">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <textarea
          className="form-control"
          id={id}
          rows={row}
          placeholder={placeholder}
          name={id}
          defaultValue={defaultValue}
        ></textarea>
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
    </>
  );
}
