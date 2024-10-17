export default function Button(props) {
  const { children = 'Button', type, color, onClick = () => { } } = props

  return (
    <>
      <button className={`btn btn-${color} mt-3`} type={type} onClick={onClick}>{children}</button>
    </>
  )
}