export default function Input(props) {
  const {label, placeholder, type, id, col, onChange = () => {}, accept } = props

  return (
    <>
      <div className={`mb-4 col-md-${col} col-7`}>
        <label htmlFor={id} className="form-label">{label}</label>
        <input type={type} className="form-control" id={id} placeholder={placeholder} name={id} onChange={onChange} accept={accept} autoComplete="off" required/>
        <div className="valid-feedback">
          Looks good!
        </div>
        <div className="invalid-feedback">
          Please fill out this field.
        </div>
      </div>
    </>
  )
}