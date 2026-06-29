import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>

      <nav className="sidebar-nav">
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/profile">Perfil</Link>
        <Link to="/categories">Categorías</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;