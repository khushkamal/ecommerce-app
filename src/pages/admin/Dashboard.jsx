import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    localStorage.removeItem("isAuth")
    localStorage.removeItem("role")
    navigate("/login")
  }
  
  return (

    <nav className='bg-slate-900 text-white px-6 py-4'>
      <div className='flex items-center justify-between'>

        <div className=''>
          <h1 className='text-xl p-1 font-bold'>Dashboard</h1>
          <p className='text-sm '>Welcome to Admin Dashboard</p>
        </div>

        <i class="fa-light fa-magnifying-glass"></i>

        <div className='flex items-center space-x-8 '>

          <ul className='flex space-x-6 '>
            <li><a href='#' className='hover:text-gray-700'>Home</a></li>
            <li><a href="#" className="hover:text-gray-700">Shop</a></li>
            <li><a href="#" className="hover:text-gray-700">Cart</a></li>
            <li><a href="#" className="hover:text-gray-700">About Us</a></li>     
          </ul>

         <button onClick={handleLogout} className='w-8 h-8 rounded-xl  flex items-center justify-center text-slate-900 hover:bg-gray-600 transition'>
         <i className='fa-solid fa-user text-white text-2xl'></i>
      </button>
        
        </div>
      </div>
    </nav>

   
  )
}

export default Dashboard






