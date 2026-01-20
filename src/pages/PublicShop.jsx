import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginModal from '../components/LoginModal'
import WhatsappButton from '../components/WhatsappButton'
import Footer from '../pages/customer/Footer.jsx'



const PublicShop = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()
  
  const isAuth = localStorage.getItem("isAuth")
  const role = localStorage.getItem("role")
  const userEmail = localStorage.getItem("email")

  const handleLogout = () => {
    localStorage.removeItem("isAuth")
    localStorage.removeItem("role")
    localStorage.removeItem("email")
    window.location.reload()
  }

  const handleLoginClick = () => {
    setIsLoginOpen(true)
  }

  // If admin is logged in, redirect to dashboard
  if (isAuth === "true" && role === "admin") {
    navigate("/dashboard")
    return null
  }

  // If customer is logged in, show customer view
  if (isAuth === "true" && role === "customer") {
    return (
      <div className='min-h-screen bg-gray-50'>
        {/* Header/Navbar */}
        <nav className='bg-white shadow-md sticky top-0 z-50'>
          <div className='max-w-7xl mx-auto px-4'>
            <div className='flex items-center justify-between h-20'>
              
              {/* Left - Company Name and Logo */}
              <div className='flex items-center space-x-2 cursor-pointer' onClick={() => window.location.reload()}>
                <div className='bg-linear-to-r from-blue-500 to-purple-600 rounded-lg p-2'>
                  <i className='fa-solid fa-shopping-cart text-white text-2xl'></i>
                </div>
                <div>
                  <h1 className='text-2xl font-bold text-gray-800'>ShopHub</h1>
                  <p className='text-xs text-gray-500'>Shopping</p>
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
                  <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>Home</a></li>
                  <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>Shop</a></li>
                  <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>About</a></li>
                  <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>Contact</a></li>
                </ul>

                {/* Cart Icon */}
                <button className='relative text-gray-600 hover:text-blue-500 transition'>
                  <i className='fa-solid fa-shopping-cart text-xl'></i>
                  <span className='absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>0</span>
                </button>

                {/* User Menu Dropdown */}
                <div className='relative group inline-block'>
                  <button  className='flex items-center space-x-2 bg-linear-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition'>
                    
                    <i className='fa-solid fa-user'></i>
                    <span className='hidden sm:inline text-sm'>Account</span>
                    <i className='fa-solid fa-chevron-down text-xs'></i>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300'>
                    <div className='px-4 py-3 border-b'>
                      <p className='text-sm font-semibold text-gray-800'>{userEmail}</p>
                      <p className='text-xs text-gray-500'>Customer</p>
                    </div>
                    
                    <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 transition'>
                      <i className='fa-solid fa-box mr-2'></i>My Orders
                    </a>
                    <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 transition'>
                      <i className='fa-solid fa-heart mr-2'></i>Wishlist
                    </a>
                    <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 transition'>
                      <i className='fa-solid fa-user mr-2'></i>Profile
                    </a>
                    
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
          <h2 className='text-3xl font-bold text-gray-800 mb-6'>Welcome to ShopHub</h2>
          <div className='bg-white rounded-lg shadow-md p-8 text-center'>
            <i className='fa-solid fa-shopping-cart text-6xl text-blue-500 mb-4'></i>
            <p className='text-gray-600 text-lg'>Browse and shop amazing products!</p>
            <p className='text-gray-500 mt-2'>Products coming soon...</p>
          </div>
        </div>
      </div>
    )
  }

  // Public view (not logged in)
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header/Navbar */}
      <nav className='bg-white shadow-md sticky top-0 z-40'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-20'>
            
            {/* Left - Company Name and Logo */}
            <div className='flex items-center space-x-2'>
              <div className='bg-linaear-to-r from-blue-500 to-purple-600 rounded-lg p-2'>
                <i className='fa-solid fa-shopping-cart text-white text-2xl'></i>
              </div>
              <div>
                <h1 className='text-2xl font-bold text-gray-800'>ShopHub</h1>
                <p className='text-xs text-gray-500'>Online Shopping</p>
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

            {/* Right - Navigation Links and Login Button */}
            <div className='flex items-center space-x-6'>
              
              {/* Navigation Links */}
              <ul className='hidden lg:flex space-x-6'>
                <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>Home</a></li>
                <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>Shop</a></li>
                <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>About</a></li>
                <li><a href='#' className='text-gray-600 hover:text-blue-500 font-medium transition'>Contact</a></li>
              </ul>

              {/* Login Button */}
              <button 
                onClick={handleLoginClick}
                className='bg-linear-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-semibold flex items-center space-x-2'
              >
                <i className='fa-solid fa-user'></i>
                <span className='hidden sm:inline'>Login</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className='md:hidden px-4 pb-4'>
          <div className='flex gap-2'>
            <div className='relative flex-1'>
              <input 
                type='text'
                placeholder='Search...'
                className='w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
              />
              <button className='absolute right-3 top-2.5 text-gray-400'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </button>
            </div>
            <button 
              onClick={handleLoginClick}
              className='bg-linear-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition'
            >
              <i className='fa-solid fa-user'></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='bg-linear-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-12 text-white text-center mb-12'>
          <h2 className='text-4xl font-bold mb-4'>Welcome to ShopHub</h2>
          <p className='text-blue-100 text-lg mb-6'>Login or create account to start shopping</p>
          <button 
            onClick={handleLoginClick}
            className='bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105'
          >
            <i className='fa-solid fa-sign-in-alt mr-2'></i>
            Get Started
          </button>
        </div>

        {/* Featured Products Section */}
        <div>
          <h3 className='text-2xl font-bold text-gray-800 mb-6'>Featured Products</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition'>
                <div className='bg-gray-200 h-48 flex items-center justify-center'>
                  <i className='fa-solid fa-image text-gray-400 text-4xl'></i>
                </div>
                <div className='p-4'>
                  <h4 className='font-bold text-gray-800 mb-2'>Product {item}</h4>
                  <p className='text-gray-600 text-sm mb-4'>Product description goes here</p>
                  <div className='flex items-center justify-between'>
                    <span className='text-lg font-bold text-blue-600'>$99.99</span>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm font-semibold'>
                      <i className='fa-solid fa-shopping-cart mr-2'></i>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WhatsappButton />

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

     
     <Footer />

    
    </div>

     
  )
}

export default PublicShop
