import { Navigate, Outlet } from 'react-router-dom';

export default function Protected() {
  const token = localStorage.getItem("token");

  if(token) {
    return <Outlet />
  }

  return <Navigate to="/login" />
}