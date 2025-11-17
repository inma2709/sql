import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Bloque1Fundamentos from './pages/Bloque1Fundamentos.jsx';
import Bloque2 from './pages/Bloque2.jsx';

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
        
        {/* Ruta no encontrada */}
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
