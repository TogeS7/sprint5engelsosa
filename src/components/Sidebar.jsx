import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside style={{ width: '296px', backgroundColor: '#1e1e2d', color: 'white', padding: '20px' }}>
      <h2>Dashboard</h2>
      <nav style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Productos</Link>
        <Link to="/categories" style={{ color: 'white', textDecoration: 'none' }}>Categorías</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;