export default function Button(props) {
  const { children = "Button", transparent = false, className } = props
  return (
    <>
      {transparent && (
        <button className={` ${className} py-2 px-12 bg-transparent text-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white`}>
          {children}
        </button>
      )}
      {!transparent && (
        <button className={` ${className} py-2 px-12 bg-blue-600 text-white border-2 border-blue-500 rounded-lg hover:bg-blue-500`}>
          {children}
        </button>
      )}
    </>
  )
}