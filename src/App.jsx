import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Bloque1Fundamentos from './pages/Bloque1Fundamentos.jsx';
import Bloque2 from './pages/Bloque2.jsx';
import Actividad from './pages/Actividad.jsx';
import Bloque3Backend from './pages/Bloque3Backend.jsx';
import Bloque4Front from './pages/Bloque4Front.jsx';

function App() {
  return (
    <Routes>
      {/* Todas las páginas dentro del Layout */}
      <Route path="/" element={<Layout />}>
        
        {/* Página principal */}
        <Route index element={<Home />} />

        {/* Bloque 1 Fundamentos */}
        <Route path="Bloque1Fundamentos" element={<Bloque1Fundamentos />} />
        {/* Otras rutas de bloques pueden añadirse aquí */}
        <Route path="Bloque2" element={<Bloque2 />} />
        <Route path="Actividad" element={<Actividad />} />
        <Route path="Bloque3Backend" element={<Bloque3Backend />} />
        <Route path="Bloque4Front" element={<Bloque4Front />} />

        {/* Ruta no encontrada */}
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
