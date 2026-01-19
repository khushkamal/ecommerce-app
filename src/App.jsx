import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login.jsx'
import PublicShop from './pages/PublicShop.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import Shop from './pages/customer/shop.jsx'
import Products from './pages/Products.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicShop />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  )
}

export default App
