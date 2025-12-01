import { useState, useEffect } from 'react';

function Bloque6ApiTestReact() {
  return (
    <div className="contenedor contenido-principal" id="contenido">
      <header className="cabecera-pagina">
        <h1>Bloque 6: API Test con React</h1>
        <p className="descripcion-bloque">
          Construye herramientas profesionales de testing de APIs usando React, 
          hooks modernos y componentes reutilizables.
        </p>
      </header>

      <section className="section" id="b6-leccion1">
        <details open>
          <summary>⚛️ ¿Por qué React para testing de APIs?</summary>
          <article className="card">
            <h2>Ventajas de React vs HTML vanilla</h2>

            <p>
              Mientras que el HTML vanilla es excelente para prototipos rápidos,
              React nos ofrece herramientas más potentes para crear interfaces
              de testing profesionales y mantenibles.
            </p>

            <div className="cuadro-didactico">
              <h4>React vs HTML vanilla para testing</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>🔄 Estado reactivo</h5>
                  <p>
                    Los hooks como useState y useEffect permiten manejar
                    el estado de forma declarativa y automática.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🧩 Componentes reutilizables</h5>
                  <p>
                    Crear componentes específicos para diferentes tipos de
                    tests que se pueden reutilizar fácilmente.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🎯 Mejor UX</h5>
                  <p>
                    Estados de carga, manejo de errores automático y
                    actualizaciones de UI más fluidas.
                  </p>
                </div>
              </div>
            </div>

            <h3>¿Qué vamos a construir?</h3>
            <ul className="lista-simple">
              <li>🧪 Componente principal ApiTestCenter</li>
              <li>📋 Hook personalizado para manejar peticiones API</li>
              <li>🎨 Componentes UI reutilizables (ProductCard, LoadingSpinner)</li>
              <li>🔍 Formularios inteligentes con validación</li>
              <li>⚡ Estados de carga y error automáticos</li>
            </ul>
          </article>
        </details>
      </section>

      <section className="section" id="b6-leccion2">
        <details>
          <summary>🪝 Hook personalizado useApi</summary>
          <article className="card">
            <h2>Creando un hook para peticiones API</h2>

            <p>
              Vamos a crear un hook personalizado que encapsule toda la lógica
              de peticiones HTTP, estados de carga y manejo de errores.
            </p>

            <pre className="bloque-codigo">
              <code>
{`// hooks/useApi.js
import { useState, useCallback } from 'react';

export function useApi(baseURL = 'http://localhost:3000/api') {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = useCallback(async (endpoint, options = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const url = \`\${baseURL}\${endpoint}\`;
      console.log(\`📡 Petición a: \${url}\`);
      
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.message || \`Error HTTP: \${response.status}\`);
      }

      setData(responseData);
      console.log('✅ Respuesta exitosa:', responseData);
      return responseData;
      
    } catch (err) {
      const errorMessage = err.message || 'Error de conexión';
      setError(errorMessage);
      console.error('❌ Error en petición:', errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [baseURL]);

  const get = useCallback((endpoint) => {
    return request(endpoint, { method: 'GET' });
  }, [request]);

  const post = useCallback((endpoint, body) => {
    return request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body)
    });
  }, [request]);

  const put = useCallback((endpoint, body) => {
    return request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
  }, [request]);

  const del = useCallback((endpoint) => {
    return request(endpoint, { method: 'DELETE' });
  }, [request]);

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setData(null);
  }, []);

  return {
    loading,
    error,
    data,
    get,
    post,
    put,
    delete: del,
    reset
  };
}`}
              </code>
            </pre>

            <div className="cuadro-didactico">
              <h4>Ventajas de este hook</h4>
              <ul className="lista-simple">
                <li>🔄 <strong>Estado automático</strong>: Maneja loading, error y data automáticamente</li>
                <li>🎯 <strong>Métodos HTTP</strong>: Incluye GET, POST, PUT, DELETE</li>
                <li>🛡️ <strong>Manejo de errores</strong>: Captura y formatea errores de forma consistente</li>
                <li>♻️ <strong>Reutilizable</strong>: Se puede usar en cualquier componente</li>
              </ul>
            </div>
          </article>
        </details>
      </section>

      <section className="section" id="b6-leccion3">
        <details>
          <summary>🎨 Componentes UI reutilizables</summary>
          <article className="card">
            <h2>Creando componentes para la interfaz</h2>

            <h3>1. Componente LoadingSpinner</h3>
            <pre className="bloque-codigo">
              <code>
{`// components/LoadingSpinner.jsx
function LoadingSpinner({ message = "Cargando..." }) {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
}

export default LoadingSpinner;

/* CSS para el spinner */
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4CAF50;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`}
              </code>
            </pre>

            <h3>2. Componente ErrorMessage</h3>
            <pre className="bloque-codigo">
              <code>
{`// components/ErrorMessage.jsx
function ErrorMessage({ error, onRetry }) {
  if (!error) return null;

  return (
    <div className="error-message">
      <div className="error-content">
        <span className="error-icon">❌</span>
        <div className="error-text">
          <h4>Error</h4>
          <p>{error}</p>
        </div>
        {onRetry && (
          <button className="retry-button" onClick={onRetry}>
            🔄 Reintentar
          </button>
        )}
      </div>
    </div>
  );
}

export default ErrorMessage;

/* CSS para errores */
.error-message {
  background: #ffebee;
  border: 1px solid #f44336;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
}

.error-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.error-icon {
  font-size: 1.5rem;
}

.error-text h4 {
  color: #d32f2f;
  margin: 0 0 0.5rem 0;
}

.error-text p {
  color: #666;
  margin: 0;
}

.retry-button {
  background: #f44336;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.retry-button:hover {
  background: #d32f2f;
}`}
              </code>
            </pre>

            <h3>3. Componente ProductCard</h3>
            <pre className="bloque-codigo">
              <code>
{`// components/ProductCard.jsx
function ProductCard({ producto }) {
  return (
    <div className="product-card-react">
      <div className="product-header">
        <h3>{producto.nombre}</h3>
        <span className="product-id">ID: {producto.id}</span>
      </div>
      
      <div className="product-info-grid">
        <div className="info-item">
          <span className="label">Precio:</span>
          <span className="value">{producto.precio}€</span>
        </div>
        <div className="info-item">
          <span className="label">Stock:</span>
          <span className="value">{producto.stock}</span>
        </div>
        <div className="info-item">
          <span className="label">Categoría:</span>
          <span className="value">{producto.categoria}</span>
        </div>
        <div className="info-item">
          <span className="label">Estado:</span>
          <span className={\`status \${producto.activo ? 'active' : 'inactive'}\`}>
            {producto.activo ? '✅ Activo' : '❌ Inactivo'}
          </span>
        </div>
      </div>
      
      {producto.descripcion && (
        <div className="product-description">
          <p>{producto.descripcion}</p>
        </div>
      )}
      
      <div className="product-meta">
        <small>Creado: {new Date(producto.creado_en).toLocaleDateString()}</small>
      </div>
    </div>
  );
}

export default ProductCard;

/* CSS para ProductCard */
.product-card-react {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card-react:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.product-header h3 {
  color: #4CAF50;
  margin: 0;
}

.product-id {
  background: #f5f5f5;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #666;
}

.product-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: #f9f9f9;
  border-radius: 6px;
}

.label {
  font-weight: 600;
  color: #555;
}

.value {
  font-weight: 500;
}

.status.active {
  color: #4CAF50;
}

.status.inactive {
  color: #f44336;
}

.product-description {
  margin: 1rem 0;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 3px solid #4CAF50;
}

.product-meta {
  text-align: right;
  color: #999;
  font-size: 0.85rem;
}`}
              </code>
            </pre>
          </article>
        </details>
      </section>

      <section className="section" id="b6-leccion4">
        <details>
          <summary>🧪 Componente principal ApiTestCenter</summary>
          <article className="card">
            <h2>El componente que une todo</h2>

            <pre className="bloque-codigo">
              <code>
{`// components/ApiTestCenter.jsx
import { useState } from 'react';
import { useApi } from '../hooks/useApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import ProductCard from './ProductCard';

function ApiTestCenter() {
  const api = useApi();
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [buscarId, setBuscarId] = useState('');

  // Función para cargar todos los productos
  const cargarProductos = async () => {
    try {
      const response = await api.get('/productos');
      
      if (response.success && response.data) {
        setProductos(response.data);
        console.log(\`✅ Cargados \${response.data.length} productos\`);
      } else {
        setProductos([]);
      }
    } catch (error) {
      console.error('Error cargando productos:', error);
      setProductos([]);
    }
  };

  // Función para buscar producto por ID
  const buscarProducto = async () => {
    if (!buscarId.trim()) {
      alert('Por favor, introduce un ID');
      return;
    }

    try {
      const response = await api.get(\`/productos/\${buscarId}\`);
      
      if (response.success && response.data) {
        setProductoSeleccionado(response.data);
        console.log('✅ Producto encontrado:', response.data);
      } else {
        setProductoSeleccionado(null);
      }
    } catch (error) {
      console.error('Error buscando producto:', error);
      setProductoSeleccionado(null);
    }
  };

  const limpiarBusqueda = () => {
    setProductoSeleccionado(null);
    setBuscarId('');
    api.reset();
  };

  return (
    <div className="api-test-center">
      <header className="test-header">
        <h1>🧪 API Test Center - React Edition</h1>
        <p>Herramienta profesional para testear APIs con React</p>
      </header>

      <main className="test-content">
        {/* Sección: Cargar todos los productos */}
        <section className="test-section">
          <div className="section-header">
            <h2>📋 Todos los productos</h2>
            <button 
              onClick={cargarProductos}
              disabled={api.loading}
              className="primary-button"
            >
              {api.loading ? '⏳ Cargando...' : '🔍 Cargar Productos'}
            </button>
          </div>

          {api.loading && <LoadingSpinner message="Obteniendo productos..." />}
          
          <ErrorMessage 
            error={api.error} 
            onRetry={cargarProductos}
          />

          {productos.length > 0 && (
            <div className="productos-grid">
              <div className="productos-stats">
                <span className="stats-badge">
                  {productos.length} producto{productos.length !== 1 ? 's' : ''} encontrado{productos.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="productos-list">
                {productos.map(producto => (
                  <ProductCard key={producto.id} producto={producto} />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Sección: Buscar por ID */}
        <section className="test-section">
          <div className="section-header">
            <h2>🎯 Buscar producto por ID</h2>
            <div className="search-controls">
              <input
                type="number"
                value={buscarId}
                onChange={(e) => setBuscarId(e.target.value)}
                placeholder="ID del producto..."
                className="search-input"
                min="1"
              />
              <button 
                onClick={buscarProducto}
                disabled={api.loading || !buscarId.trim()}
                className="primary-button"
              >
                {api.loading ? '⏳ Buscando...' : '🔍 Buscar'}
              </button>
              <button 
                onClick={limpiarBusqueda}
                className="secondary-button"
              >
                🧹 Limpiar
              </button>
            </div>
          </div>

          {api.loading && <LoadingSpinner message="Buscando producto..." />}
          
          <ErrorMessage error={api.error} onRetry={buscarProducto} />

          {productoSeleccionado && (
            <div className="producto-detalle">
              <div className="detalle-header">
                <h3>✅ Producto encontrado</h3>
              </div>
              <ProductCard producto={productoSeleccionado} />
            </div>
          )}
        </section>

        {/* Sección: Respuesta JSON */}
        {api.data && (
          <section className="test-section">
            <h2>📄 Última respuesta JSON</h2>
            <div className="json-viewer">
              <pre>
                <code>{JSON.stringify(api.data, null, 2)}</code>
              </pre>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default ApiTestCenter;`}
              </code>
            </pre>

            <h3>CSS para el componente principal</h3>
            <pre className="bloque-codigo">
              <code>
{`/* styles/ApiTestCenter.css */
.api-test-center {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.test-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.test-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.test-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.test-section {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-header h2 {
  color: #333;
  margin: 0;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 0.5rem;
}

.primary-button {
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.primary-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
}

.primary-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.secondary-button {
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.secondary-button:hover {
  background: #5a6268;
}

.search-controls {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  flex-wrap: wrap;
}

.search-input {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  min-width: 200px;
}

.search-input:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
}

.productos-grid {
  margin-top: 1.5rem;
}

.productos-stats {
  margin-bottom: 1rem;
}

.stats-badge {
  background: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.productos-list {
  display: grid;
  gap: 1rem;
}

.producto-detalle {
  margin-top: 1.5rem;
}

.detalle-header {
  margin-bottom: 1rem;
}

.detalle-header h3 {
  color: #4CAF50;
  margin: 0;
}

.json-viewer {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
}

.json-viewer pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.json-viewer code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  color: #333;
}

/* Responsive design */
@media (max-width: 768px) {
  .api-test-center {
    padding: 1rem;
  }
  
  .test-header h1 {
    font-size: 2rem;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .search-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-input {
    min-width: auto;
  }
}`}
              </code>
            </pre>
          </article>
        </details>
      </section>

      <section className="section" id="b6-leccion5">
        <details>
          <summary>🚀 Integración y uso</summary>
          <article className="card">
            <h2>Cómo integrar todo en tu proyecto React</h2>

            <h3>1. Estructura de archivos</h3>
            <pre className="bloque-codigo">
              <code>
{`src/
├── hooks/
│   └── useApi.js
├── components/
│   ├── ApiTestCenter.jsx
│   ├── LoadingSpinner.jsx
│   ├── ErrorMessage.jsx
│   └── ProductCard.jsx
├── styles/
│   └── ApiTestCenter.css
└── pages/
    └── ApiTestPage.jsx`}
              </code>
            </pre>

            <h3>2. Página principal de testing</h3>
            <pre className="bloque-codigo">
              <code>
{`// pages/ApiTestPage.jsx
import ApiTestCenter from '../components/ApiTestCenter';
import '../styles/ApiTestCenter.css';

function ApiTestPage() {
  return (
    <div className="contenedor contenido-principal">
      <ApiTestCenter />
    </div>
  );
}

export default ApiTestPage;`}
              </code>
            </pre>

            <h3>3. Agregar ruta en App.jsx</h3>
            <pre className="bloque-codigo">
              <code>
{`// App.jsx
import { Routes, Route } from 'react-router-dom';
import ApiTestPage from './pages/ApiTestPage';
// ... otros imports

function App() {
  return (
    <Routes>
      {/* ... otras rutas */}
      <Route path="/api-test" element={<ApiTestPage />} />
    </Routes>
  );
}`}
              </code>
            </pre>

            <div className="cuadro-didactico">
              <h4>Ventajas de este enfoque con React</h4>
              <ul className="lista-simple">
                <li>🔄 <strong>Estado reactivo</strong>: La UI se actualiza automáticamente</li>
                <li>🧩 <strong>Modular</strong>: Cada componente tiene una responsabilidad específica</li>
                <li>♻️ <strong>Reutilizable</strong>: Los hooks y componentes se pueden usar en otros proyectos</li>
                <li>🎨 <strong>Profesional</strong>: Loading states, error handling y UX mejorada</li>
                <li>📱 <strong>Responsive</strong>: Se adapta a diferentes tamaños de pantalla</li>
              </ul>
            </div>
          </article>
        </details>
      </section>

      <section className="section" id="b6-resumen">
        <details>
          <summary>✅ Resumen y comparación</summary>
          <article className="card">
            <h2>React vs HTML vanilla para testing de APIs</h2>

            <div className="cuadro-didactico">
              <h4>Comparación final</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>🌐 HTML Vanilla</h5>
                  <ul className="lista-simple">
                    <li>✅ Rápido de prototipar</li>
                    <li>✅ Sin dependencias</li>
                    <li>✅ Fácil debugging</li>
                    <li>❌ Difícil de mantener</li>
                    <li>❌ No escalable</li>
                  </ul>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>⚛️ React</h5>
                  <ul className="lista-simple">
                    <li>✅ Estado reactivo</li>
                    <li>✅ Componentes reutilizables</li>
                    <li>✅ Mejor UX</li>
                    <li>✅ Fácil de mantener</li>
                    <li>❌ Más complejo inicialmente</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>📚 Lo que hemos aprendido</h3>
            <ul className="lista-simple">
              <li>🪝 Crear hooks personalizados para lógica reutilizable</li>
              <li>🔄 Manejar estados de carga y error de forma elegante</li>
              <li>🧩 Diseñar componentes modulares y reutilizables</li>
              <li>🎨 Crear interfaces profesionales con mejor UX</li>
              <li>📱 Implementar diseño responsive</li>
            </ul>

            <div className="nota nota-importante">
              <strong>💡 Consejo profesional:</strong> Combina ambos enfoques:
              usa HTML vanilla para prototipos rápidos y React para herramientas
              de testing profesionales y duraderas.
            </div>

            <h3>🚀 Siguientes pasos</h3>
            <p>
              Con estas herramientas ya puedes testear cualquier API REST de forma
              profesional. Considera agregar funcionalidades como:
            </p>
            <ul className="lista-simple">
              <li>🔐 Autenticación con tokens JWT</li>
              <li>📝 Formularios para crear/editar productos</li>
              <li>📊 Gráficos y estadísticas</li>
              <li>💾 Persistencia de configuración</li>
              <li>🧪 Tests automatizados</li>
            </ul>
          </article>
        </details>
      </section>
    </div>
  );
}

export default Bloque6ApiTestReact;
