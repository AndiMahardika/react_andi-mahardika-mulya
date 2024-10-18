export default function Textarea(props) {
  const { label, placeholder, id, row } = props;

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
          required
        ></textarea>
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
    </>
  );
}
