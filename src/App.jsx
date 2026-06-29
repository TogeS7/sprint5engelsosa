import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Home from './pages/Home/Home';
import ProductsList from './pages/Products/ProductsList/ProductsList';
import ProductView from './pages/Products/ProductView/ProductView';
import NewProduct from './pages/Products/NewProduct/NewProduct';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        
        {/* Sidebar */}
        <Sidebar />

        {/* Contenido principal */}
        <main style={{ flex: 1, backgroundColor: '#f3f6f9' }}>
          
          {/* Header */}
          <Header />

          {/* Contenido de las páginas */}
          <section style={{ padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsList />} />
              <Route path="/products/new" element={<NewProduct />} />
              <Route path="/products/:id" element={<ProductView />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;