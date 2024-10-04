export default function Button(props) {
  const { children = 'Button', type, color } = props

  return (
    <>
      <button className={`btn btn-${color} mt-3`} type={type}>{children}</button>
    </>
  )
}