import Button from "../ui/button";

export default function Card(props) {
  const { img, status, price } = props

  return (
    <div className="max-w-sm border border-gray-400 rounded-lg">
      <div>
        <img src={img} alt="" className="rounded-t-lg" />
      </div>
      <div className="text-center space-y-4 py-6">
        {status === "Available" && (
        <p className="font-medium text-base">
          $ {price} - <span className="text-green-500">{status}</span>
        </p>
        )}
        {status === "Sold" && (
        <p className="font-medium text-base">
          $ {price} - <span className="text-red-500">{status}</span>
        </p>
        )}
        <Button transparent>View Details</Button>
      </div>
    </div>
  );
}
