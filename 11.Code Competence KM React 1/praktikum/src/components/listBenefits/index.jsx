import Benefits from "../ui/benefits";

export default function ListBenefits() {
  return (
    <>
    <div className="container mx-auto flex space-y-4 justify-between items-center mb-11 font-roboto">
      <Benefits title="Modern House" description="Modern & Stylish Homes" color="bg-violet-100" img="src\assets\houseIcon.png"/>
      <Benefits title="Green Living" description="Eco-Friendly Living" color="bg-green-100" img="src\assets\treeIcon.png"/>
      <Benefits title="24/7 Security" description="24/7 Security Protection" color="bg-blue-100" img="src\assets\cameraIcon.png" />
      <Benefits title="Family-Friendly" description="Perfect for Families" color="bg-red-100" img="src\assets\familyIcon.png" />
    </div>
    <hr />
    </>
  )
}