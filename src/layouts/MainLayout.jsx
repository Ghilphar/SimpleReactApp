import { Outlet, Link } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';

function MainLayout() {
  return (
    <>
      <header style={{ padding: '1rem', background: '#eee', textAlign: 'center' }}>
        <h1>My App</h1>
        <nav>
          <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
          <Link to="/about" style={{ margin: '0 1rem' }}>About</Link>
          <LogoutButton />
        </nav>
      </header>
      <main>
        <Outlet /> {/* This is where child routes (Home, About) will be injected */}
      </main>
    </>
  );
}

export default MainLayout;
