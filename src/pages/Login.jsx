import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = () => {
        if(email === "admin@gmail.com" && password === "admin123"){
            localStorage.setItem("isAuth", "true");
            localStorage.setItem("role", "admin");
            navigate("/dashboard")
        } else {
            alert("Invalid credentials")
        }
    }
    return (
        <div className='min-h-screen bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center'>
        <div className='bg-white rounded-lg shadow-2xl p-8 w-96'>
            <div className='flex justify-center mb-6'>
                <div className='bg-linear-to-br from-blue-500 to-purple-600 rounded-full p-4'>
                    <i className='fa-solid fa-user text-white text-4xl'></i>
                </div>
            </div>

            <h2 className='text-center text-2xl font-bold text-gray-800 mb-2'>Admin Login</h2>
            <p className='text-center text-gray-500 mb-6'>Welcome back</p>
            
            <div className='mb-4'>
                <label className='block text-gray-700 font-semibold mb-2'>Email</label>
                <div className='flex items-center border-2 border-gray-300 rounded-lg px-3 py-2'>
                    <i className='fa-solid fa-envelope text-gray-400 mr-2'></i>
                    <input 
                      type='email'
                      placeholder='Enter your email' 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='w-full outline-none'
                    />
                </div>
            </div>

            <div className='mb-6'>
                <label className='block text-gray-700 font-semibold mb-2'>Password</label>
                <div className='flex items-center border-2 border-gray-300 rounded-lg px-3 py-2'>
                    <i className='fa-solid fa-lock text-gray-400 mr-2'></i>
                    <input 
                      type='password' 
                      placeholder='Enter your password' 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='w-full outline-none'
                    />
                </div>
            </div>

            <button 
              onClick={handleLogin}
              className='w-full bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold py-2 rounded-lg hover:shadow-lg transition'
            >
                <i className='fa-solid fa-sign-in-alt mr-2'></i>
                Login
            </button>
        </div>
        </div>
    );
};

export default Login;