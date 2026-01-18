import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("customer")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (activeTab === "admin") {
      if (email === "admin@gmail.com" && password === "admin123") {
        localStorage.setItem("isAuth", "true")
        localStorage.setItem("role", "admin")
        setEmail("")
        setPassword("")
        onClose()
        navigate("/dashboard")
      } else {
        alert("Invalid admin credentials")
      }
    } else if (activeTab === "customer") {
      if (email.trim() && password.trim()) {
        localStorage.setItem("isAuth", "true")
        localStorage.setItem("role", "customer")
        localStorage.setItem("email", email)
        setEmail("")
        setPassword("")
        onClose()
        window.location.reload()
      } else {
        alert("Please enter email and password")
      }
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className='fixed inset-0 bg-black bg-opacity-50 z-40'
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4'>
        <div className='bg-white rounded-lg shadow-2xl overflow-hidden'>
          
          {/* Header */}
          <div className='bg-linear-to-r from-blue-500 to-purple-600 px-6 py-6 flex items-center justify-between'>
            <div>
              <h2 className='text-white text-2xl font-bold'>Login</h2>
              <p className='text-blue-100 text-sm mt-1'>to ShopHub</p>
            </div>
            <button 
              onClick={onClose}
              className='text-white hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center transition'
            >
              <i className='fa-solid fa-times'></i>
            </button>
          </div>

          {/* Tab Buttons */}
          <div className='flex border-b'>
            <button 
              onClick={() => setActiveTab("customer")}
              className={`flex-1 py-3 font-semibold transition ${
                activeTab === "customer" 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <i className='fa-solid fa-user mr-2'></i>
              Customer
            </button>
            <button 
              onClick={() => setActiveTab("admin")}
              className={`flex-1 py-3 font-semibold transition ${
                activeTab === "admin" 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <i className='fa-solid fa-shield-alt mr-2'></i>
              Admin
            </button>
          </div>

          {/* Login Content */}
          <div className='p-6'>
            {/* Email Field */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-semibold mb-2'>Email</label>
              <div className='flex items-center border-2 border-gray-300 rounded-lg px-3 py-2 hover:border-blue-400 transition'>
                <i className='fa-solid fa-envelope text-gray-400 mr-2'></i>
                <input 
                  type='email'
                  placeholder={activeTab === "admin" ? "admin@gmail.com" : "your@email.com"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full outline-none bg-transparent'
                />
              </div>
              {activeTab === "admin" && <p className='text-xs text-gray-400 mt-1'>Demo: admin@gmail.com</p>}
            </div>

            {/* Password Field */}
            <div className='mb-6'>
              <label className='block text-gray-700 font-semibold mb-2'>Password</label>
              <div className='flex items-center border-2 border-gray-300 rounded-lg px-3 py-2 hover:border-blue-400 transition'>
                <i className='fa-solid fa-lock text-gray-400 mr-2'></i>
                <input 
                  type='password' 
                  placeholder={activeTab === "admin" ? "admin123" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full outline-none bg-transparent'
                />
              </div>
              {activeTab === "admin" && <p className='text-xs text-gray-400 mt-1'>Demo: admin123</p>}
            </div>

            {/* Login Button */}
            <button 
              onClick={handleLogin}
              className='w-full bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold py-2 rounded-lg hover:shadow-lg transition'
            >
              <i className='fa-solid fa-sign-in-alt mr-2'></i>
              {activeTab === "admin" ? "Admin Login" : "Customer Login"}
            </button>

            <div className='text-center mt-4 text-sm text-gray-600'>
              {activeTab === "admin" 
                ? "Admin credentials required" 
                : "Any email & password to shop"}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginModal
