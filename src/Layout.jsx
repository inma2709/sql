import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';

function Layout() {
  return (
    <>
      <Header />
      <main className="contenedor contenido-principal" id="contenido">
        <Outlet /> {/* AQUÍ SE PINTAN Home, Proyectos, Contacto */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
