import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home/Home';
import ProductsList from './pages/Products/ProductsList/ProductsList';
import CategoriesList from './pages/Categories/CategoriesList/CategoriesList';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        
        <Sidebar />
        
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          
          <section style={{ flex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsList />} />
              <Route path="/categories" element={<CategoriesList />} />
            </Routes>
          </section>
        </main>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
