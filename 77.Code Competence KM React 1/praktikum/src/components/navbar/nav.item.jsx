import { NavLink } from "react-router-dom";

export default function NavItem(props) {
  const { children, link } = props;

  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive
          ? "block py-2 px-3 rounded md:bg-transparent text-blue-500 md:p-0"
          : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
      }
    >
      {children}
    </NavLink>
  );
}
