/* eslint-disable react/prop-types */
export default function Input(props) {
  const {label, placeholder, type, id, col, onChange = () => {}, accept, isValid, error } = props

  return (
    <>
      <div className={`mb-4 col-md-${col} col-7`}>
        <label htmlFor={id} className="form-label">{label}</label>
        <input type={type} className={`form-control ${!isValid ? "is-invalid" : ""}`}  id={id} placeholder={placeholder} name={id} onChange={onChange} accept={accept} autoComplete="off" required/>
        {!isValid && error && (
          <div className="invalid-feedback">
            {error}
          </div>
        )}
      </div>
    </>
  )
}