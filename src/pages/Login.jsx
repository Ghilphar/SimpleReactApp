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
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
