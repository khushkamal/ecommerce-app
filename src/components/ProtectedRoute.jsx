import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const isAuth = localStorage.getItem("isAuth")
  
  return isAuth === "true" ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
