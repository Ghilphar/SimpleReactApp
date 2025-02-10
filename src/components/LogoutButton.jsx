import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear auth status
    
    setTimeout(() => {
      navigate('/login'); // Navigate after logout
      window.location.reload(); // Force UI update
    }, 100);
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
