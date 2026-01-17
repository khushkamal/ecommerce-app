import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const role = localStorage.getItem("role")
  const userEmail = localStorage.getItem("email")
  
  const handleLogout = () => {
    localStorage.removeItem("isAuth")
    localStorage.removeItem("role")
    localStorage.removeItem("email")
    navigate("/login")
  }
  
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header/Navbar */}
      <nav className='bg-white shadow-md sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-20'>
            
            {/* Left - Company Name and Logo */}
            <div className='flex items-center space-x-2'>
              <div className='bg-linear-to-r from-blue-500 to-purple-600 rounded-lg p-2'>
                <i className='fa-solid fa-shopping-cart text-white text-2xl'></i>
              </div>
              <div>
                <h1 className='text-2xl font-bold text-gray-800'>ShopHub</h1>
                <p className='text-xs text-gray-500'>{role === "admin" ? "Admin Panel" : "Shopping"}</p>
              </div>
            </div>

            {/* Middle - Search Bar */}
            <div className='hidden md:flex flex-1 mx-8'>
              <div className='relative w-full max-w-md'>
                <input 
                  type='text'
                  placeholder='Search products...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition'
                />
                <button className='absolute right-3 top-2.5 text-gray-400 hover:text-gray-600'>
                  <i className='fa-solid fa-magnifying-glass'></i>
                </button>
              </div>
            </div>

            {/* Right - Navigation Links and User Menu */}
            <div className='flex items-center space-x-6'>
              
              {/* Navigation Links */}
              <ul className='hidden lg:flex space-x-6'>
                {role === "admin" ? (
                  <>
                    <li><a href='/dashboard' className='text-gray-600 hover:text-blue-500 font-medium transition'>Dashboard</a></li>
                    <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>Add Product</a></li>
                    <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>Products</a></li>
                    <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>Orders</a></li>
                  </>
                ) : (
                  <>
                    <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>Home</a></li>
                    <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>Shop</a></li>
                    <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>About</a></li>
                    <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>Contact</a></li>
                  </>
                )}
              </ul>

              {/* Cart Icon (for customers) */}
              {role === "customer" && (
                <button className='relative text-gray-600 hover:text-blue-500 transition'>
                  <i className='fa-solid fa-shopping-cart text-xl'></i>
                  <span className='absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>0</span>
                </button>
              )}

              {/* User Menu Dropdown */}
              <div className='relative group'>
                <button className='flex items-center space-x-2 bg-linear-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition'>
                  <i className='fa-solid fa-user'></i>
                  <span className='hidden sm:inline text-sm'>{role === "admin" ? "Admin" : "Account"}</span>
                  <i className='fa-solid fa-chevron-down text-xs'></i>
                </button>
                
                {/* Dropdown Menu */}
                <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300'>
                  <div className='px-4 py-3 border-b'>
                    <p className='text-sm font-semibold text-gray-800'>{userEmail || "User"}</p>
                    <p className='text-xs text-gray-500 capitalize'>{role}</p>
                  </div>
                  
                  {role === "admin" ? (
                    <>
                      <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 transition'>
                        <i className='fa-solid fa-cog mr-2'></i>Settings
                      </a>
                      <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 transition'>
                        <i className='fa-solid fa-chart-line mr-2'></i>Analytics
                      </a>
                    </>
                  ) : (
                    <>
                      <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 transition'>
                        <i className='fa-solid fa-box mr-2'></i>My Orders
                      </a>
                      <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 transition'>
                        <i className='fa-solid fa-heart mr-2'></i>Wishlist
                      </a>
                      <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 transition'>
                        <i className='fa-solid fa-user mr-2'></i>Profile
                      </a>
                    </>
                  )}
                  
                  <div className='border-t'>
                    <button 
                      onClick={handleLogout}
                      className='w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition font-semibold'
                    >
                      <i className='fa-solid fa-sign-out-alt mr-2'></i>Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className='md:hidden px-4 pb-4'>
          <div className='relative'>
            <input 
              type='text'
              placeholder='Search...'
              className='w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
            />
            <button className='absolute right-3 top-2.5 text-gray-400'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 py-8'>
        {role === "admin" ? (
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>Welcome to Admin Dashboard</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              
              {/* Stats Card */}
              <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-gray-600 text-sm'>Total Products</p>
                    <p className='text-3xl font-bold text-gray-800'>0</p>
                  </div>
                  <i className='fa-solid fa-box text-blue-500 text-4xl opacity-20'></i>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-gray-600 text-sm'>Total Orders</p>
                    <p className='text-3xl font-bold text-gray-800'>0</p>
                  </div>
                  <i className='fa-solid fa-shopping-cart text-green-500 text-4xl opacity-20'></i>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-gray-600 text-sm'>Total Revenue</p>
                    <p className='text-3xl font-bold text-gray-800'>$0</p>
                  </div>
                  <i className='fa-solid fa-dollar-sign text-yellow-500 text-4xl opacity-20'></i>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-gray-600 text-sm'>Total Customers</p>
                    <p className='text-3xl font-bold text-gray-800'>0</p>
                  </div>
                  <i className='fa-solid fa-users text-purple-500 text-4xl opacity-20'></i>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className='mt-8'>
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>Quick Actions</h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <button className='bg-linear-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition font-semibold'>
                  <i className='fa-solid fa-plus mr-2'></i>Add New Product
                </button>
                <button className='bg-linear-to-r from-green-500 to-green-600 text-white py-3 rounded-lg hover:shadow-lg transition font-semibold'>
                  <i className='fa-solid fa-list mr-2'></i>View Products
                </button>
                <button className='bg-linear-to-r from-purple-500 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition font-semibold'>
                  <i className='fa-solid fa-chart-bar mr-2'></i>View Analytics
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>Welcome to ShopHub</h2>
            <div className='bg-white rounded-lg shadow-md p-8 text-center'>
              <i className='fa-solid fa-shopping-cart text-6xl text-blue-500 mb-4'></i>
              <p className='text-gray-600 text-lg'>Start shopping and explore amazing products!</p>
              <p className='text-gray-500 mt-2'>Your products will appear here soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard






