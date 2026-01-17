import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [activeTab, setActiveTab] = useState("admin")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = () => {
        if(activeTab === "admin"){
            if(email === "admin@gmail.com" && password === "admin123"){
                localStorage.setItem("isAuth", "true")
                localStorage.setItem("role", "admin")
                navigate("/dashboard")
            } else {
                alert("Invalid admin credentials")
            }
        } else if(activeTab === "customer"){
            if(email.trim() && password.trim()){
                localStorage.setItem("isAuth", "true")
                localStorage.setItem("role", "customer")
                localStorage.setItem("email", email)
                navigate("/shop")
            } else {
                alert("Please enter email and password")
            }
        }
        
        setEmail("")
        setPassword("")
    }

    return (
        <div className='min-h-screen bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4'>
            <div className='bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden'>
                
                {/* Header */}
                <div className='bg-linear-to-r from-blue-500 to-purple-600 px-6 py-8 text-center'>
                    <div className='flex justify-center mb-4'>
                        <div className='bg-white rounded-full p-3'>
                            <i className='fa-solid fa-shopping-cart text-purple-600 text-3xl'></i>
                        </div>
                    </div>
                    <h2 className='text-white text-3xl font-bold'>ShopHub</h2>
                    <p className='text-blue-100 mt-1'>Your Online Store</p>
                </div>

                {/* Tab Buttons */}
                <div className='flex border-b'>
                    <button 
                        onClick={() => setActiveTab("admin")}
                        className={`flex-1 py-4 font-semibold transition ${
                            activeTab === "admin" 
                            ? 'bg-blue-500 text-white border-b-2 border-blue-500' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                        <i className='fa-solid fa-shield-admin mr-2'></i>
                        Admin
                    </button>
                    <button 
                        onClick={() => setActiveTab("customer")}
                        className={`flex-1 py-4 font-semibold transition ${
                            activeTab === "customer" 
                            ? 'bg-blue-500 text-white border-b-2 border-blue-500' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                        <i className='fa-solid fa-user mr-2'></i>
                        Customer
                    </button>
                </div>

                {/* Login Content */}
                <div className='p-8'>
                    <h3 className='text-center text-xl font-bold text-gray-800 mb-2'>
                        {activeTab === "admin" ? "Admin Login" : "Customer Login"}
                    </h3>
                    <p className='text-center text-gray-500 mb-6'>
                        {activeTab === "admin" ? "Manage your store" : "Start shopping"}
                    </p>

                    {/* Email Field */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-semibold mb-2'>Email</label>
                        <div className='flex items-center border-2 border-gray-300 rounded-lg px-3 py-2 hover:border-blue-400 transition'>
                            <i className='fa-solid fa-envelope text-gray-400 mr-2'></i>
                            <input 
                                type='email'
                                placeholder={activeTab === "admin" ? "admin@gmail.com" : "Enter your email"}
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
                                placeholder={activeTab === "admin" ? "admin123" : "Enter your password"}
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
                        className='w-full bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition transform hover:scale-105'
                    >
                        <i className='fa-solid fa-sign-in-alt mr-2'></i>
                        {activeTab === "admin" ? "Admin Login" : "Customer Login"}
                    </button>
                </div>

                {/* Footer */}
                <div className='bg-gray-50 px-8 py-4 text-center border-t'>
                    <p className='text-sm text-gray-600'>
                        {activeTab === "admin" 
                            ? "Only administrators can access this area" 
                            : "Create your account or login to shop"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;