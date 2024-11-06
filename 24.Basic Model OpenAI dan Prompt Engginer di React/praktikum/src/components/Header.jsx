import NavItem from './NavItem.jsx'

export default function Header() {
  return (
    <div className="py-4 bg-blue-500 text-white flex justify-center gap-4">
      <NavItem link="/">QnA Math</NavItem>
      <NavItem link="/chef">Chef AI</NavItem>
    </div>
  )
}
