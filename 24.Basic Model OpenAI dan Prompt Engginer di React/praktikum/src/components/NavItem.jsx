/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

export default function NavItem(props) {
  const {children, link} = props

  return (
    <NavLink to={link}
      className={({ isActive }) => 
        isActive ? 
          "text-white font-bold underline" : "text-slate-300 text-bold"
      }
    >
      {children}
    </NavLink>
  )
}
