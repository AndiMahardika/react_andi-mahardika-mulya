export default function Benefits(props) {
  const { title, description, img, color } = props
  return (
    <div className="flex items-center space-x-4">
      <div className={`${color} rounded-lg p-5`}>
        <img src={img} alt="" width={"40px"}/>
      </div>
      <div>
        <h5 className="font-medium text-xl">{title}</h5>
        <p className="text-slate-500 font-normal">{description}</p>
      </div>
    </div>
  )
}