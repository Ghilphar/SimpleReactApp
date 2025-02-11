import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Redirect users after login

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === "admin" && password === "password") {
      localStorage.setItem('isAuthenticated', 'true'); // Store auth status
      
      setTimeout(() => {
        navigate('/'); // Ensure the app re-renders before navigating
        window.location.reload(); // Force full refresh to reflect changes
      }, 100);
      
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-900 p-6">
      <div className="hidden md:block bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('../../public/images/canyon-1852921_1920.jpg')" }}>
        <div className="h-full flex items-end p-6 text-white">
          <p className="text-lg font-semibold">Capturing Moments, Creating Memories</p>
        </div>
      </div>

      <div className="p-10 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-white mb-4">Log In</h2>
        <p className="text-white text-sm mb-6">
          Not a member yet? <a href="/login" className="text-ocre-600 hover:underline">Create an account</a>
        </p>
        <form className="w-full flex flex-col space-y-4" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 bg-ocre-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocre-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-ocre-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocre-500"
          />
          <button type="submit" className="w-full bg-ocre-600 hover:bg-ocre-700 text-white py-3 rounded-xl font-semibold">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;