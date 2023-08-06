import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectRoute = () => {
let user=localStorage.getItem("user")
  if (!user) {
    return  <Navigate to="/" replace />;
  }
  return (
  <>
    <Outlet/>
  </>
  )
}
