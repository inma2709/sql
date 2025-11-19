// src/pages/Bloque4Front.jsx
/**
 * Bloque4Front
 *
 * Componente que renderiza la documentación y guía del "Bloque 4 · Frontend con React".
 * Presenta de forma estática las lecciones, ejemplos y fragmentos de código necesarios
 * para crear un frontend React que consuma la API del backend Bazar.
 *
 * Contenido principal:
 * - Sección HERO con título y subtítulo explicativo.
 * - Índice de lecciones (4.1 → 4.10) con enlaces internos.
 * - Lecciones detalladas (ej.: Estructura del proyecto, services/api.js, ApiTest.jsx,
 *   AuthContext.jsx, ProtectedRoute, esqueleto de App.jsx).
 * - Instrucciones paso a paso, ejemplos de comandos (Vite, npm), y actividades guiadas.
 *
 * NOTA: Esto es un comentario de documentación (JSDoc). No es código ejecutable.
 *
 * @component
 * @name Bloque4Front
 * @returns {JSX.Element} Una página JSX que documenta y guía la implementación del frontend.
 * @example
 * // Importar y usar como cualquier componente de página:
 * // import Bloque4Front from './pages/Bloque4Front';
 * // <Bloque4Front />
 *
 * @remarks
 * - No recibe props.
 * - Está pensado como material didáctico/estático para integrar en una aplicación de ejemplo.
 * - Contiene ejemplos y referencias a archivos sugeridos en la estructura del proyecto:
 *   - src/services/api.js
 *   - src/context/AuthContext.jsx
 *   - src/components/ApiTest.jsx
 *   - src/components/ProtectedRoute.jsx
 *   - src/pages/* (HomePage, CatalogoPage, LoginPage, etc.)
 *
 * @author
 * Guía didáctica (estructura y ejemplos integrados para el bloque de frontend)
 */
export default function Bloque4Front() {
  return (
    <main id="contenido">
      {/* HERO BLOQUE 4 */}
      <section className="hero">
        <div className="contenedor">
          <span className="kicker">Bloque 4 · Frontend con React</span>
          <h1>Construir un frontend React conectado al backend Bazar</h1>
          <p className="subtitle">
            En este bloque creamos la interfaz de usuario que consume la API REST del backend,
            implementando autenticación JWT, rutas protegidas y un sistema completo de tienda online.
          </p>
        </div>
      </section>

      <div className="contenedor contenido-principal bloque bloque-sql">
        {/* ÍNDICE DEL BLOQUE */}
        <nav className="toc">
          <h2>📋 Contenido del Bloque 4 · Frontend React</h2>
          <ol>
            <li>
              <a href="#b4-leccion1">Lección 1: Estructura del frontend React para el proyecto Bazar</a>
            </li>
            <li>
              <a href="#b4-leccion2">Lección 2: Configuración y servicios de API</a>
            </li>
            <li>
              <a href="#b4-leccion3">Lección 3: Context de autenticación y gestión de usuarios</a>
            </li>
            <li>
              <a href="#b4-leccion4">Lección 4: Componentes de layout y navegación</a>
            </li>
            <li>
              <a href="#b4-leccion5">Lección 5: Páginas de catálogo y productos</a>
            </li>
            <li>
              <a href="#b4-leccion6">Lección 6: Sistema de autenticación (Login y Registro)</a>
            </li>
            <li>
              <a href="#b4-leccion7">Lección 7: Área personal y gestión de pedidos</a>
            </li>
            <li>
              <a href="#b4-leccion8">Lección 8: Rutas protegidas y middleware</a>
            </li>
            <li>
              <a href="#b4-leccion9">Lección 9: Estilos y responsive design</a>
            </li>
            <li>
              <a href="#b4-leccion10">Lección 10: Despliegue y optimización</a>
            </li>
          </ol>
        </nav>

        <section className="section" id="b4-leccion1">
  <details open>
    <summary>4.1. Estructura del frontend en React para el proyecto Bazar</summary>

    <article className="card">
      <h2>4.1. Estructura del frontend en React para el proyecto Bazar</h2>

      <p>
        En este bloque vamos a construir el <strong>frontend en React</strong> de nuestro
        proyecto Bazar. El objetivo es consumir la API que hemos desarrollado en el 
        backend (productos, auth, pedidos) y crear una interfaz similar a la de una 
        tienda online real.
      </p>

      <p>
        En esta lección no vamos a programar todavía la lógica de las pantallas, sino
        que definiremos la <strong>estructura del proyecto</strong>: carpetas, componentes
        y páginas. Es como dibujar el plano de una casa antes de empezar a construirla.
      </p>

      <h3>1️⃣ Crear el proyecto React con Vite</h3>

      <p>
        Vamos a usar Vite para crear un proyecto React rápido y moderno. En la terminal:
      </p>

      <pre className="bloque-codigo">
        <code>
{`# 1. Crear el proyecto
npm create vite@latest bazar-frontend -- --template react

# 2. Entrar en la carpeta
cd bazar-frontend

# 3. Instalar dependencias
npm install

# 4. (Opcional) Instalar React Router para las páginas
npm install react-router-dom

# 5. Arrancar el proyecto
npm run dev`}
        </code>
      </pre>

      <p>
        A partir de ahora, todo el código del frontend lo escribiremos dentro de la 
        carpeta <code className="etiqueta-codigo">bazar-frontend/src</code>.
      </p>

      <h3>2️⃣ ¿Qué pantallas necesitamos según nuestro backend?</h3>

      <p>
        Antes de ver carpetas, piensa en las <strong>pantallas principales</strong> que 
        queremos que vea el usuario:
      </p>

      <ul className="lista-simple">
        <li>🏠 <strong>Home</strong>: presentación del Bazar.</li>
        <li>🛒 <strong>Catálogo de productos</strong>: listado y filtros por categoría.</li>
        <li>🔍 <strong>Detalle de producto</strong> (opcional, más adelante).</li>
        <li>🔑 <strong>Login</strong>: iniciar sesión.</li>
        <li>📝 <strong>Registro</strong>: crear cuenta.</li>
        <li>👤 <strong>Mi cuenta / Mis pedidos</strong>: ver pedidos del usuario logueado.</li>
        <li>📄 <strong>Detalle de pedido</strong>: ver productos de un pedido concreto.</li>
      </ul>

      <p>
        Todas estas pantallas se conectarán con las rutas de la API que ya hemos 
        documentado en el backend.
      </p>

      <div className="cuadro-didactico">
        <h4>🔗 Relación entre páginas y endpoints</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Catálogo</h5>
            <p><code>GET /api/productos</code> y <code>?categoria=...</code></p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Login</h5>
            <p><code>POST /api/auth/login</code></p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Registro</h5>
            <p><code>POST /api/auth/register</code></p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Mis pedidos</h5>
            <p><code>GET /api/mis-pedidos</code> y <code>GET /api/mis-pedidos/:id</code></p>
          </div>
        </div>
      </div>

      <h3>3️⃣ Estructura de carpetas recomendada</h3>

      <p>
        Dentro de <code className="etiqueta-codigo">src</code> vamos a organizar el código
        de esta forma:
      </p>

      <pre className="bloque-codigo">
        <code>
{`src/
├── main.jsx              // Punto de entrada de la app React
├── App.jsx               // Definición de rutas y layout principal
├── index.css             // Estilos globales (o styles.css)
│
├── services/
│   └── api.js            // Todas las llamadas a la API Bazar (fetch/axios)
│
├── context/
│   └── AuthContext.jsx   // Gestión del usuario logueado y token JWT
│
├── components/           // Piezas reutilizables de la interfaz
│   ├── Layout.jsx        // Estructura general (cabecera, contenido, pie)
│   ├── Navbar.jsx        // Menú de navegación (Home, Catálogo, Login, Mi cuenta...)
│   ├── Footer.jsx        // Pie de página
│   ├── ProductoCard.jsx  // Tarjeta para mostrar un producto
│   ├── FiltroCategorias.jsx // Selector / botones de categorías
│   ├── PedidoResumen.jsx // Tarjeta para cada pedido en la lista
│   ├── PedidoDetalle.jsx // Bloque para mostrar un pedido con sus productos
│   └── ProtectedRoute.jsx // Componente para proteger rutas (solo usuarios logueados)
│
└── pages/                // Páginas principales (vistas)
    ├── HomePage.jsx          // Página de inicio
    ├── CatalogoPage.jsx      // Lista de productos + filtros
    ├── LoginPage.jsx         // Formulario de login
    ├── RegisterPage.jsx      // Formulario de registro
    ├── MisPedidosPage.jsx    // Historial de pedidos del usuario
    └── PedidoDetallePage.jsx // Vista de un pedido concreto`}
        </code>
      </pre>

      <div className="nota">
        Esta estructura no es la única posible, pero es clara, escalable y muy utilizada
        en proyectos profesionales.
      </div>

      <h3>4️⃣ ¿Qué hará cada parte?</h3>

      <h4>📁 services/api.js</h4>
      <p>
        Este archivo será el <strong>"puente"</strong> entre el frontend y nuestro backend.
        Aquí centralizaremos todas las peticiones a la API:
      </p>

      <ul className="lista-simple">
        <li><code>getProductos()</code> → llama a <code>/api/productos</code></li>
        <li><code>getProductosPorCategoria(categoria)</code> → <code>/api/productos?categoria=...</code></li>
        <li><code>register(datos)</code> → <code>/api/auth/register</code></li>
        <li><code>login(datos)</code> → <code>/api/auth/login</code></li>
        <li><code>getMisPedidos()</code> → <code>/api/mis-pedidos</code> (con token)</li>
        <li><code>getPedidoDetalle(id)</code> → <code>/api/mis-pedidos/:id</code> (con token)</li>
      </ul>

      <p>
        Más adelante escribiremos este archivo paso a paso.
      </p>

      <h4>📁 context/AuthContext.jsx</h4>

      <p>
        Aquí gestionaremos el <strong>estado global de autenticación</strong>:
      </p>

      <ul className="lista-simple">
        <li>Guardar el usuario logueado.</li>
        <li>Guardar el token JWT.</li>
        <li>Funciones <code>login()</code> y <code>logout()</code>.</li>
        <li>Compartir todo esto con cualquier componente usando Context.</li>
      </ul>

      <p>
        Esto permitirá que componentes como <code>Navbar</code> o 
        <code>MisPedidosPage</code> sepan si el usuario está logueado.
      </p>

      <h4>📁 pages/</h4>

      <p>
        Cada archivo de <code>pages</code> representará una <strong>ruta del navegador</strong>:
      </p>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Ruta (frontend)</th>
              <th>Componente</th>
              <th>¿Qué muestra?</th>
              <th>¿Qué API usa?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>/</code></td>
              <td>HomePage</td>
              <td>Presentación del Bazar</td>
              <td>Opcional, texto estático</td>
            </tr>
            <tr>
              <td><code>/productos</code></td>
              <td>CatalogoPage</td>
              <td>Lista de productos y filtros</td>
              <td><code>GET /api/productos</code></td>
            </tr>
            <tr>
              <td><code>/login</code></td>
              <td>LoginPage</td>
              <td>Formulario de inicio de sesión</td>
              <td><code>POST /api/auth/login</code></td>
            </tr>
            <tr>
              <td><code>/registro</code></td>
              <td>RegisterPage</td>
              <td>Formulario de registro</td>
              <td><code>POST /api/auth/register</code></td>
            </tr>
            <tr>
              <td><code>/mis-pedidos</code></td>
              <td>MisPedidosPage</td>
              <td>Historial del usuario</td>
              <td><code>GET /api/mis-pedidos</code></td>
            </tr>
            <tr>
              <td><code>/mis-pedidos/:id</code></td>
              <td>PedidoDetallePage</td>
              <td>Detalle de un pedido concreto</td>
              <td><code>GET /api/mis-pedidos/:id</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>5️⃣ Esqueleto básico de App.jsx con rutas</h3>

      <p>
        Como referencia, este sería un esqueleto muy simple de 
        <code className="etiqueta-codigo">App.jsx</code> usando React Router:
      </p>

      <pre className="bloque-codigo">
        <code>
{`// App.jsx (esquema simplificado)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CatalogoPage from './pages/CatalogoPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MisPedidosPage from './pages/MisPedidosPage';
import PedidoDetallePage from './pages/PedidoDetallePage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<CatalogoPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registro" element={<RegisterPage />} />

            {/* Rutas protegidas */}
            <Route
              path="/mis-pedidos"
              element={
                <ProtectedRoute>
                  <MisPedidosPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mis-pedidos/:id"
              element={
                <ProtectedRoute>
                  <PedidoDetallePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;`}
        </code>
      </pre>

      <div className="nota">
        Más adelante implementaremos <code>AuthProvider</code>, 
        <code>ProtectedRoute</code> y cada una de las páginas. De momento, nos interesa
        entender la <strong>estructura general</strong>.
      </div>

      <h3>🧪 Actividad guiada</h3>

      <ul className="lista-simple">
        <li>Crea el proyecto React con Vite tal y como se indica al inicio de la lección.</li>
        <li>Crea las carpetas <code>services</code>, <code>context</code>, <code>components</code> y <code>pages</code>.</li>
        <li>Crea archivos vacíos para las páginas principales (HomePage, CatalogoPage, LoginPage...).</li>
        <li>Crea un <code>Navbar</code> sencillo con enlaces a <code>/</code>, <code>/productos</code>, <code>/login</code> y <code>/mis-pedidos</code>.</li>
      </ul>

      <h3>✅ Resumen de la lección</h3>

      <ul className="lista-simple">
        <li>Hemos creado el proyecto React con Vite.</li>
        <li>Hemos definido la estructura de carpetas del frontend.</li>
        <li>Hemos relacionado cada página con los endpoints del backend Bazar.</li>
        <li>Hemos preparado el terreno para implementar <code>api.js</code>, <code>AuthContext</code> y las pantallas reales.</li>
      </ul>

      <p>
        En la siguiente lección comenzaremos a construir el archivo 
        <code className="etiqueta-codigo">services/api.js</code>, que será el encargado
        de comunicarse con nuestra API de backend.
      </p>
    </article>
  </details>
</section>

        <section className="section" id="b4-leccion2">
  <details open>
    <summary>4.2. Crear y probar el servicio <code>api.js</code> (Frontend → Backend)</summary>

    <article className="card">

      <h2>4.2. Crear y probar el servicio <code>api.js</code></h2>

      <p>
        En esta lección vamos a crear el archivo más importante del frontend a la hora
        de comunicarse con nuestro backend: <strong>api.js</strong>.
        Este archivo será el encargado de realizar todas las peticiones a la API Bazar
        (productos, login, registro, pedidos…).
      </p>

      <p>
        Además, crearemos un componente de prueba llamado 
        <code className="etiqueta-codigo">ApiTest.jsx</code> que nos permitirá comprobar,
        desde el propio frontend, que todo está conectado correctamente.
      </p>

      <h3>1️⃣ ¿Qué es <code>api.js</code>?</h3>

      <p>
        <code>api.js</code> es un archivo que vive en el <strong>frontend</strong> y que 
        funciona como un <em>puente</em> entre React y nuestro backend Express.
        En lugar de escribir <code>fetch()</code> repetido en todas partes, centralizamos
        aquí todas las llamadas a la API.
      </p>

      <div className="cuadro-didactico">
        <h4>Ventajas de usar un servicio API centralizado</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Código ordenado</h5>
            <p>Todo el acceso a la API vive en un mismo archivo.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Gestión del token</h5>
            <p>El JWT se añade automáticamente cuando es necesario.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Escalable</h5>
            <p>Podemos añadir futuras rutas sin romper el código existente.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Profesional</h5>
            <p>Es como se trabaja en proyectos reales de React.</p>
          </div>
        </div>
      </div>

      <h3>2️⃣ Crear el archivo <code>api.js</code></h3>

      <p>
        Dentro de la carpeta <code>src</code> del proyecto React creamos:
      </p>

      <pre className="bloque-codigo">
        <code>
src/services/api.js
        </code>
      </pre>

      <p>
        A continuación pegamos el servicio completo:
      </p>

      <pre className="bloque-codigo">
        <code>
{`// src/services/api.js

const API_URL = 'http://localhost:3000/api';

// ===============================
// 🔐 Gestión del token
// ===============================

function getToken() {
  return localStorage.getItem('token') || null;
}

function authHeaders() {
  const token = getToken();
  return token
    ? { Authorization: \`Bearer \${token}\` }
    : {};
}

// ===============================
// 📦 Productos
// ===============================

export async function getProductos(categoria = null) {
  const url = categoria
    ? \`\${API_URL}/productos?categoria=\${categoria}\`
    : \`\${API_URL}/productos\`;

  const res = await fetch(url);
  return res.json();
}

export async function getProductoById(id) {
  const res = await fetch(\`\${API_URL}/productos/\${id}\`);
  return res.json();
}

// ===============================
// 🔐 Auth (registro y login)
// ===============================

export async function register(datos) {
  const res = await fetch(\`\${API_URL}/auth/register\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  return res.json();
}

export async function login(datos) {
  const res = await fetch(\`\${API_URL}/auth/login\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem('token', data.token);
  }

  return data;
}

// ===============================
// 📦 Pedidos del usuario
// ===============================

export async function crearPedido() {
  const res = await fetch(\`\${API_URL}/pedidos\`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders()
    }
  });

  return res.json();
}

export async function agregarProductoAPedido(pedidoId, productoId, cantidad) {
  const res = await fetch(\`\${API_URL}/pedidos/\${pedidoId}/productos\`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders()
    },
    body: JSON.stringify({ producto_id: productoId, cantidad })
  });

  return res.json();
}

export async function getMisPedidos() {
  const res = await fetch(\`\${API_URL}/mis-pedidos\`, {
    headers: {
      ...authHeaders()
    }
  });

  return res.json();
}

export async function getPedidoDetalle(id) {
  const res = await fetch(\`\${API_URL}/mis-pedidos/\${id}\`, {
    headers: {
      ...authHeaders()
    }
  });

  return res.json();
}`}
        </code>
      </pre>

      <h3>3️⃣ ¿Cómo probamos que <code>api.js</code> funciona?</h3>

      <p>
        Antes de construir las páginas del frontend, es buena práctica asegurarnos de que
        el servicio se comunica correctamente con el backend.  
        Para ello crearemos un componente de prueba llamado 
        <code className="etiqueta-codigo">ApiTest.jsx</code>.
      </p>

      <h4>📁 Ubicación:</h4>

      <pre className="bloque-codigo">
        <code>src/components/ApiTest.jsx</code>
      </pre>

      <h4>📄 Código completo del componente:</h4>

      <pre className="bloque-codigo">
        <code>
{`// src/components/ApiTest.jsx
// src/components/ApiTest.jsx
import { useState } from "react";
import { getProductos, getMisPedidos } from "../services/api";

export default function ApiTest() {
  const [resultado, setResultado] = useState(null);

  const token = localStorage.getItem("token");
  const isLogged = !!token;

  const probarProductos = async () => {
    const data = await getProductos();
    setResultado(data);
  };

  const probarMisPedidos = async () => {
    const data = await getMisPedidos();
    setResultado(data);
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd", marginTop: "2rem" }}>
      <h2>🔧 Prueba de API (modo desarrollo)</h2>

      <p>
        Estado de autenticación:{" "}
        {isLogged ? (
          <strong style={{ color: "green" }}>Autenticado ✔</strong>
        ) : (
          <strong style={{ color: "red" }}>No autenticado ❌</strong>
        )}
      </p>

      {isLogged && (
        <p style={{ fontSize: "0.8rem", color: "#555" }}>
          Token JWT: {token.substring(0, 20)}...
        </p>
      )}

      <button onClick={probarProductos}>
        📦 Probar GET /api/productos
      </button>

      <button
        onClick={probarMisPedidos}
        style={{ marginLeft: "1rem" }}
        disabled={!isLogged}
      >
        📄 Probar GET /api/mis-pedidos (requiere token)
      </button>

      {!isLogged && (
        <p style={{ marginTop: "1rem", color: "red" }}>
          ⚠️ Inicia sesión primero para probar /mis-pedidos
        </p>
      )}

      <pre style={{
        marginTop: "1rem",
        background: "#f7f7f7",
        padding: "1rem",
        maxHeight: "300px",
        overflow: "auto"
      }}>
        {resultado ? JSON.stringify(resultado, null, 2) : "Sin resultados aún..."}
      </pre>
    </div>
  );
}
`}
        </code>
      </pre>

      <h3>4️⃣ Añadir el componente de prueba al proyecto</h3>

      <p>
        Para visualizar el test dentro de tu frontend, vamos a incluir temporalmente 
        el componente <code>ApiTest</code> dentro del layout o en 
        <code>App.jsx</code>.
      </p>

      <pre className="bloque-codigo">
        <code>
{`import ApiTest from './components/ApiTest';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          {/* SOLO PARA PRUEBAS */}
          <ApiTest />

          <Routes>
            {/* tus rutas reales */}
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;`}
        </code>
      </pre>

      <h3>5️⃣ ¿Cómo probarlo paso a paso?</h3>

      <ol className="lista-simple">
        <li>Arranca el backend con <code>npm run dev</code>.</li>
        <li>Arranca el frontend con <code>npm run dev</code>.</li>
        <li>Visita <code>http://localhost:5173</code> en tu navegador.</li>
        <li>Pulsa el botón <strong>📦 Probar GET /api/productos</strong>.</li>
        <li>
          Si el login está hecho, prueba 
          <strong>📄 Probar GET /api/mis-pedidos</strong>.
        </li>
      </ol>
      <section className="section" id="b4-api-test-explicacion">
  <details open>
    <summary>4.X. Cómo comprobar si el login está hecho y cómo probar rutas protegidas</summary>

    <article className="card">

      <h2>📌 4.X. Comprobar login y probar rutas protegidas con <code>ApiTest.jsx</code></h2>

      <p>
        En esta sección vamos a comprender cómo saber si el usuario está autenticado 
        en el frontend y cómo usar nuestro componente de prueba 
        <code className="etiqueta-codigo">ApiTest.jsx</code> para comprobar que las 
        rutas protegidas del backend funcionan correctamente.
      </p>

      <h3>1️⃣ ¿Cuándo consideramos que un usuario está “logueado”?</h3>

      <p>
        En nuestro frontend, un usuario se considera <strong>logueado</strong> cuando 
        existe un <strong>token JWT almacenado en <code>localStorage</code></strong>.
      </p>

      <p>
        Esto ocurre automáticamente cuando el usuario hace login correctamente:
      </p>

      <pre className="bloque-codigo">
        <code>
localStorage.setItem("token", data.token);
        </code>
      </pre>

      <p>
        Por lo tanto, para saber si el usuario está autenticado, simplemente 
        comprobamos si existe el token:
      </p>

      <pre className="bloque-codigo">
        <code>
const token = localStorage.getItem("token");
const isLogged = !!token; // true si existe token, false si no
        </code>
      </pre>

      <div className="nota">
        ✔ Esto es exactamente lo mismo que hace el navegador cuando recordamos 
        la sesión en la mayoría de páginas web.
      </div>

      <hr />

      <h3>2️⃣ ¿Por qué es importante saber si el usuario está logueado?</h3>

      <p>
        Algunas rutas del backend están protegidas y exigen un token válido.  
        Por ejemplo:
      </p>

      <ul className="lista-simple">
        <li><code>GET /api/mis-pedidos</code></li>
        <li><code>GET /api/mis-pedidos/:id</code></li>
        <li><code>POST /api/pedidos</code></li>
      </ul>

      <p>
        Estas rutas requieren la cabecera:
      </p>

      <pre className="bloque-codigo">
        <code>
Authorization: Bearer &lt;token-del-usuario&gt;
        </code>
      </pre>

      <p>
        Si no hay token, el backend devuelve un error del tipo:
      </p>

      <pre className="bloque-codigo">
        <code>
{`{ "mensaje": "Falta cabecera Authorization" }`}
        </code>
      </pre>

      <hr />

      <h3>3️⃣ ¿Cómo comprobar esto desde <code>ApiTest.jsx</code>?</h3>

      <p>
        El componente <code>ApiTest</code> muestra en pantalla si existe el token 
        en <code>localStorage</code>, es decir, si el usuario está autenticado.
      </p>

      <p>Ejemplo visual dentro del componente:</p>

      <pre className="bloque-codigo">
        <code>
{`Estado de autenticación: Autenticado ✔
// o
Estado de autenticación: No autenticado ❌`}
        </code>
      </pre>

      <p>
        Además, el botón para probar la ruta protegida 
        <code>/api/mis-pedidos</code> se desactiva automáticamente si no hay token:
      </p>

      <pre className="bloque-codigo">
        <code>
{/* disabled={!isLogged} */}

  📄 Probar GET /api/mis-pedidos

        </code>
      </pre>

      <div className="cuadro-didactico">
        <h4>¿Qué demuestra esta prueba?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Autenticación OK</h5>
            <p>El frontend detecta si el usuario tiene un token válido.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Rutas protegidas</h5>
            <p>El backend solo permite acceso si se envía la cabecera Authorization.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Comunicación completa</h5>
            <p>Frontend y backend están correctamente conectados.</p>
          </div>
        </div>
      </div>

      <hr />

      <h3>4️⃣ ¿Cómo probarlo paso a paso?</h3>

      <ol className="lista-simple">
        <li>Abre Thunder Client o Postman y haz un login real:</li>
      </ol>

      <pre className="bloque-codigo">
        <code>
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{"{"}
  "email": "ana@example.com",
  "password": "secreto123"
{"}"}
        </code>
      </pre>

      <p>La respuesta debe incluir un token JWT.</p>

      <ol start="2" className="lista-simple">
        <li>Guarda el token: el frontend lo hace solo al hacer login.</li>
        <li>Recarga el navegador y abre ApiTest.</li>
      </ol>

      <p>Deberías ver:</p>

      <pre className="bloque-codigo">
        <code>Estado de autenticación: Autenticado ✔</code>
      </pre>

      <ol start="4" className="lista-simple">
        <li>Pulsa el botón: <strong>📄 Probar GET /api/mis-pedidos</strong>.</li>
        <li>Comprobarás si la ruta protegida funciona correctamente.</li>
      </ol>

      <p>Si todo va bien, verás un JSON con tus pedidos.</p>

      <hr />

      <h3>5️⃣ Resumen</h3>

      <ul className="lista-simple">
        <li>React considera al usuario autenticado si existe un token en localStorage.</li>
        <li>ApiTest muestra claramente si hay token o no.</li>
        <li>Las rutas protegidas requieren <code>Authorization: Bearer token</code>.</li>
        <li>ApiTest permite probar todo esto antes de construir las páginas reales.</li>
      </ul>

      <p>
        Gracias a esta comprobación visual, ya sabemos que el sistema de 
        autenticación funciona y que el frontend puede comunicarse perfectamente 
        con las rutas protegidas del backend.
      </p>

    </article>
  </details>
</section>


      <p>
        Si todo está bien, verás un JSON con datos reales del backend.  
        Si falta token, saldrá un mensaje avisando.  
        Esta comprobación es fundamental antes de programar las páginas reales.
      </p>

      <h3>6️⃣ Explicación visual del flujo</h3>

      <pre className="bloque-codigo">
        <code>
{`React (ApiTest.jsx)
    |
    |  getProductos()   → api.js → fetch → backend
    |
Backend (Express + MySQL)
    |
    | respuesta JSON
    v
React muestra resultados en pantalla`}
        </code>
      </pre>

      <h3>7️⃣ Resumen de la lección</h3>

      <ul className="lista-simple">
        <li>Hemos creado el archivo <code>api.js</code> como centro de comunicación con la API.</li>
        <li>Hemos implementado funciones para productos, auth y pedidos.</li>
        <li>Hemos construido un componente de prueba para verificar la conexión.</li>
        <li>Hemos confirmado que el frontend puede consumir nuestra API sin errores.</li>
      </ul>

      <p>
        En la siguiente lección comenzaremos a construir las primeras páginas reales: 
        <strong>Catálogo</strong> y <strong>Login</strong>.
      </p>

    </article>
  </details>
</section>


       <section className="section" id="b4-leccion3">
  <details open>
    <summary>4.3. Crear <code>AuthContext.jsx</code> para gestionar usuario + token (explicación completa)</summary>

    <article className="card">

      <h2>4.3. AuthContext: gestionar usuario + token JWT en todo el frontend</h2>

      <p>
        En esta lección vamos a crear un sistema profesional y muy utilizado en proyectos React:
        un <strong>contexto de autenticación</strong> para gestionar el usuario y el token JWT
        en toda la aplicación.
      </p>

      <p>
        Esto permitirá que cualquier componente (Navbar, páginas, rutas protegidas…) pueda saber 
        si un usuario está logueado, cuál es su nombre, si tiene token válido, y podrá iniciar o 
        cerrar sesión sin repetir código.
      </p>

      <hr />

      <h3>1️⃣ ¿Qué es AuthContext y para qué sirve?</h3>

      <p>
        En React, un <strong>contexto</strong> es una herramienta que permite compartir datos
        entre muchos componentes sin necesidad de pasar props manualmente de un componente a otro.
      </p>

      <p>
        En nuestro caso, AuthContext almacenará:
      </p>

      <ul className="lista-simple">
        <li>🔐 El usuario que ha hecho login</li>
        <li>🔑 El token JWT (localStorage)</li>
        <li>🧭 Funciones <code>login()</code> y <code>logout()</code></li>
        <li>🛡️ Estado de autenticación: conectado o no conectado</li>
      </ul>

      <p>
        Gracias a esto:
      </p>

      <ul className="lista-simple">
        <li>Navbar podrá mostrar “Login” o “Mi cuenta”.</li>
        <li>MisPedidosPage podrá acceder al token del usuario.</li>
        <li>ProtectedRoute bloqueará el acceso a rutas sin login.</li>
        <li>LoginPage podrá llamar a <code>auth.login()</code> después del login.</li>
      </ul>

      <hr />

      <h3>2️⃣ ¿Dónde se usa AuthContext?</h3>

      <p>
        Esta parte es FUNDAMENTAL y muchos alumnos se confunden.  
        <strong>AuthContext NO se importa en una página concreta.</strong>  
        En lugar de eso:
      </p>

      <div className="callout">
        AuthContext debe envolver TODA la aplicación en <code>App.jsx</code>.
      </div>

      <p>Así cualquier componente tiene acceso al usuario.</p>

      <h4>Esquema visual:</h4>

      <pre className="bloque-codigo">
        <code>
{`<AuthProvider>
  <Router>
    <Layout>
      TODAS LAS PÁGINAS Y COMPONENTES
      (pueden acceder a usuario y token)
    </Layout>
  </Router>
</AuthProvider>`}
        </code>
      </pre>

      <p>
        Esto es exactamente cómo trabajan las aplicaciones profesionales con React Router, 
        Next.js y frameworks modernos.
      </p>

      <hr />

      <h3>3️⃣ Crear el archivo <code>AuthContext.jsx</code></h3>

      <p>
        En la carpeta <code>src/context</code> creamos:
      </p>

      <pre className="bloque-codigo">
        <code>src/context/AuthContext.jsx</code>
      </pre>

      <h4>📄 Código completo del contexto:</h4>

      <pre className="bloque-codigo">
        <code>
{`// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { login as apiLogin } from "../services/api";

const AuthContext = createContext();

// Hook para usar el contexto desde cualquier componente
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);      // datos del usuario
  const [token, setToken] = useState(null);    // token JWT
  const [loading, setLoading] = useState(true); // para restaurar sesión

  // Restaurar sesión al recargar la página
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  // Función de login → llama a API y guarda usuario + token
  async function login(email, password) {
    const data = await apiLogin({ email, password });

    if (data.token) {
      setToken(data.token);
      setUser(data.usuario);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.usuario));
    }

    return data;
  }

  // Logout → borra datos del usuario
  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated: !!token
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}`}
        </code>
      </pre>

      <h4>🧠 ¿Qué hace este contexto?</h4>

      <ul className="lista-simple">
        <li>Guarda usuario y token al hacer login.</li>
        <li>Restaura sesión automáticamente si recargas la página.</li>
        <li>Proporciona <code>auth.isAuthenticated</code> para bloquear o permitir rutas.</li>
        <li>Permite cerrar sesión en cualquier parte del frontend.</li>
      </ul>

      <hr />

      <h3>4️⃣ Integrar AuthProvider en App.jsx</h3>

      <p>
        Muy importante: debemos envolver TODA la aplicación con el AuthProvider.
      </p>

      <pre className="bloque-codigo">
        <code>
{`// App.jsx (fragmento)
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* rutas aquí */}
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;`}
        </code>
      </pre>

      <hr />

      <h3>5️⃣ ¿Cómo se usa el contexto en un componente?</h3>

      <h4>Ejemplo: mostrar “Hola, Ana” en el Navbar</h4>

      <pre className="bloque-codigo">
        <code>
{`// Navbar.jsx
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav>
      {isAuthenticated ? (
        <>
          <span>Hola, {user.nombre}</span>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <a href="/login">Iniciar sesión</a>
      )}
    </nav>
  );
}`}
        </code>
      </pre>

      <hr />

      <h3>6️⃣ ProtectedRoute: bloquear rutas sin login</h3>

      <p>
        Creamos este componente para proteger páginas privadas como “Mis pedidos”.
      </p>

      <pre className="bloque-codigo">
        <code>
{`// ProtectedRoute.jsx
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;

  return isAuthenticated ? children : <Navigate to="/login" />;
}`}
        </code>
      </pre>

      <hr />

      <h3>🧪 Actividad guiada</h3>

      <ul className="lista-simple">
        <li>Haz login con un usuario y comprueba que AuthContext guarda el token.</li>
        <li>Refresca la página para comprobar que la sesión se restaura sola.</li>
        <li>Usa <code>auth.logout()</code> en el Navbar para cerrar la sesión.</li>
        <li>Intenta acceder a <code>/mis-pedidos</code> sin token → debe redireccionar a /login.</li>
        <li>Accede de nuevo tras iniciar sesión → debe funcionar.</li>
      </ul>

      <hr />

      <h3>7️⃣ Resumen de la lección</h3>

      <ul className="lista-simple">
        <li>Has aprendido qué es un contexto en React.</li>
        <li>Has creado <code>AuthContext.jsx</code> para gestionar usuario y token.</li>
        <li>Has entendido dónde se coloca (en <code>App.jsx</code>) y por qué.</li>
        <li>Has aprendido a bloquear rutas privadas con <code>ProtectedRoute</code>.</li>
        <li>Ya estás listo/a para conectar el login y registro con el backend.</li>
      </ul>

      <p>
        En la siguiente lección empezaremos a construir las primeras páginas del frontend:
        <strong>Login</strong> y <strong>Registro</strong>, ahora que la autenticación
        está completamente preparada.
      </p>

    </article>
  </details>
</section>


        <section className="section" id="b4-leccion4">
          <details>
            <summary>4.4. Componentes de layout y navegación</summary>
            <article className="card">
              <p>Esta lección se desarrollará próximamente...</p>
            </article>
          </details>
        </section>

        <section className="section" id="b4-leccion5">
          <details>
            <summary>4.5. Páginas de catálogo y productos</summary>
            <article className="card">
              <p>Esta lección se desarrollará próximamente...</p>
            </article>
          </details>
        </section>

        <section className="section" id="b4-leccion6">
          <details>
            <summary>4.6. Sistema de autenticación (Login y Registro)</summary>
            <article className="card">
              <p>Esta lección se desarrollará próximamente...</p>
            </article>
          </details>
        </section>

        <section className="section" id="b4-leccion7">
          <details>
            <summary>4.7. Área personal y gestión de pedidos</summary>
            <article className="card">
              <p>Esta lección se desarrollará próximamente...</p>
            </article>
          </details>
        </section>

        <section className="section" id="b4-leccion8">
          <details>
            <summary>4.8. Rutas protegidas y middleware</summary>
            <article className="card">
              <p>Esta lección se desarrollará próximamente...</p>
            </article>
          </details>
        </section>

        <section className="section" id="b4-leccion9">
          <details>
            <summary>4.9. Estilos y responsive design</summary>
            <article className="card">
              <p>Esta lección se desarrollará próximamente...</p>
            </article>
          </details>
        </section>

        <section className="section" id="b4-leccion10">
          <details>
            <summary>4.10. Despliegue y optimización</summary>
            <article className="card">
              <p>Esta lección se desarrollará próximamente...</p>
            </article>
          </details>
        </section>

      </div>
    </main>
  );
}
