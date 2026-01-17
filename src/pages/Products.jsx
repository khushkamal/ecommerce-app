import { useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    localStorage.removeItem("isAuth")
    localStorage.removeItem("role")
    navigate("/login")
  }
  
  return (
    <div>
      <h1>Products</h1>
      <p>Manage products here</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Products
