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
        Vamos a usar Vite para crear un proyecto React rápido y moderno. Fijate bien en elegir JavaScript cuando 
        te de a elegir. Experimental: no. En la terminal:
      </p>

      <pre className="bloque-codigo">
        <code>
{`# 1. Crear el proyecto
npm create vite@latest bazar-frontend -- --template react

# 2. Entrar en la carpeta
cd bazar-frontend

# 3. Instalar dependencias
npm install

# 4. Instalar React Router para las páginas
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
        Como referencia, este sería un esqueleto 
        <code className="etiqueta-codigo">App.jsx</code> usando React Router. Usalo para ver como van encajando las piezas.
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

   <section className="section" id="b4-leccion2-api-servicio">
  <details open>
    <summary>
      4.2. Servicio <code>api.js</code> y laboratorio <code>ApiTest.jsx</code> (Frontend → Backend)
    </summary>

    <article className="card">
      <h2>4.2. Crear y probar el servicio <code>api.js</code> con <code>ApiTest.jsx</code></h2>

      <p>
        En esta lección vamos a construir dos piezas clave del frontend:
      </p>

      <ul className="lista-simple">
        <li>
          <strong>El servicio <code>api.js</code></strong>: un archivo centralizado donde
          viven todas las llamadas al backend (productos, auth, pedidos…).
        </li>
        <li>
          <strong>El componente <code>ApiTest.jsx</code></strong>: un pequeño “laboratorio
          de pruebas” que nos permite comprobar que la API responde correctamente antes de
          montar las páginas finales.
        </li>
      </ul>

      <p>
        La idea es que <code>api.js</code> sea el <strong>único lugar</strong> donde escribimos
        <code>fetch()</code>. El resto de componentes (Catálogo, Login, Mis pedidos…) solo
        tendrán que llamar a funciones como <code>getProductos()</code> o <code>getMisPedidos()</code>,
        sin preocuparse de URLs ni cabeceras.
      </p>

      <div className="cuadro-didactico">
        <h4>¿Por qué usar un servicio <code>api.js</code>?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Código ordenado</h5>
            <p>Todo el acceso a la API se concentra en un solo archivo.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Gestión del token</h5>
            <p>El JWT se añade automáticamente en las rutas protegidas.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Reutilizable</h5>
            <p>Los mismos métodos sirven para muchas páginas de React.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Profesional</h5>
            <p>Es el patrón típico en proyectos reales de React + API REST.</p>
          </div>
        </div>
      </div>

      <h3>1️⃣ Código completo del servicio <code>src/services/api.js</code></h3>

      <p>
        Dentro de <code>src</code> creamos una carpeta <code>services</code> y dentro el
        archivo <code>api.js</code>:
      </p>

      <pre className="bloque-codigo">
        <code>
{`// src/services/api.js

// Puedes cambiar esto por una variable de entorno si quieres:
// VITE_API_URL="http://localhost:3000/api"
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// ===============================
// 🔐 Gestión del token (frontend)
// ===============================

export function getToken() {
  const stored = localStorage.getItem("token");
  return stored || null;
}

function authHeaders() {
  const token = getToken();
  if (!token) return {};
  return { Authorization: "Bearer " + token };
}

// ===============================
// 📦 Productos
// ===============================

/**
 * Obtiene la lista de productos.
 * Si se pasa una categoría, aplica el filtro:
 *   GET /api/productos?categoria=Ropa
 */
export async function getProductos(categoria = null) {
  const query = categoria
    ? "?categoria=" + encodeURIComponent(categoria)
    : "";

  const res = await fetch(API_URL + "/productos" + query);
  return res.json();
}

/**
 * Obtiene el detalle de un producto por ID.
 * GET /api/productos/:id
 */
export async function getProductoById(id) {
  const res = await fetch(API_URL + "/productos/" + id);
  return res.json();
}

// ===============================
// 🔐 Auth (registro y login)
// ===============================

/**
 * Registro de usuario.
 * Espera un objeto:
 * { nombre, email, password }
 */
export async function register(datos) {
  const res = await fetch(API_URL + "/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });

  return res.json();
}

/**
 * Login de usuario.
 * Espera un objeto:
 * { email, password }
 *
 * Devuelve lo que responda el backend, normalmente:
 * { token, usuario: { id, nombre, email, ... } }
 *
 * IMPORTANTE:
 *   Esta función NO guarda el token en localStorage.
 *   Dejamos esa responsabilidad al AuthContext o al componente
 *   que quiera controlar la sesión (por ejemplo ApiTest).
 */
export async function login(datos) {
  const res = await fetch(API_URL + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });

  const data = await res.json();
  return data;
}

// ===============================
// 📦 Pedidos del usuario
// ===============================

/**
 * Crea un nuevo pedido vacío para el usuario autenticado.
 * POST /api/pedidos   (requiere token)
 */
export async function crearPedido() {
  const res = await fetch(API_URL + "/pedidos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
  });

  return res.json();
}

/**
 * Añade un producto a un pedido existente.
 * POST /api/pedidos/:id/productos   (requiere token)
 * body: { producto_id, cantidad }
 */
export async function agregarProductoAPedido(pedidoId, productoId, cantidad) {
  const res = await fetch(API_URL + "/pedidos/" + pedidoId + "/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
    body: JSON.stringify({ producto_id: productoId, cantidad: cantidad }),
  });

  return res.json();
}

/**
 * Devuelve los pedidos del usuario autenticado.
 * GET /api/mis-pedidos    (requiere token)
 */
export async function getMisPedidos() {
  const res = await fetch(API_URL + "/mis-pedidos", {
    headers: {
      ...authHeaders(),
    },
  });

  return res.json();
}

/**
 * Devuelve el detalle de un pedido del usuario autenticado.
 * GET /api/mis-pedidos/:id    (requiere token)
 */
export async function getPedidoDetalle(id) {
  const res = await fetch(API_URL + "/mis-pedidos/" + id, {
    headers: {
      ...authHeaders(),
    },
  });

  return res.json();
}
`}
        </code>
      </pre>

      <p>
        Fíjate en la idea clave: las rutas protegidas (pedidos, mis pedidos…) <strong>no
        necesitan que pasemos el token a mano</strong>. La función <code>authHeaders()</code>
        lo añade automáticamente a la cabecera <code>Authorization</code> cuando existe en
        <code>localStorage</code>.
      </p>

      <h3>2️⃣ Laboratorio de pruebas: <code>src/components/ApiTest.jsx</code></h3>

      <p>
        Antes de construir las páginas finales, vamos a crear un componente llamado{" "}
        <code className="etiqueta-codigo">ApiTest.jsx</code> que nos sirve como
        <strong>panel de botones</strong> para probar todo:
      </p>

      <ul className="lista-simple">
        <li>Ver productos (con y sin filtro por categoría).</li>
        <li>Registrar un usuario de prueba.</li>
        <li>Hacer login y guardar el token + usuario.</li>
        <li>Consultar rutas protegidas: <code>/api/mis-pedidos</code>, crear pedido, etc.</li>
      </ul>

      <p>
        Esto ayuda mucho a los alumnos que empiezan porque ven claramente cómo cambia
        la API cuando hay token y cuando no lo hay.
      </p>

      <pre className="bloque-codigo">
        <code>
{`// src/components/ApiTest.jsx
import { useState } from "react";
import {
  getProductos,
  getProductoById,
  register,
  login,
  crearPedido,
  agregarProductoAPedido,
  getMisPedidos,
  getPedidoDetalle,
  getToken,
} from "../services/api";

/**
 * Componente de pruebas para la API Bazar.
 *
 * No es parte de la tienda "real", es un laboratorio.
 * Permite:
 *  - Ver si la API responde (GET /api/productos).
 *  - Probar filtros por categoría.
 *  - Registrar un usuario de prueba.
 *  - Hacer login y guardar el token en localStorage.
 *  - Probar rutas protegidas (/mis-pedidos, /pedidos, etc.).
 */
export default function ApiTest() {
  const [resultado, setResultado] = useState(null);

  // Estados para ver si estamos autenticados
  const [token, setToken] = useState(getToken());
  const [usuario, setUsuario] = useState(
    () => JSON.parse(localStorage.getItem("user") || "null")
  );
  const isLogged = !!token;

  // Formularios para registro y login
  const [registroForm, setRegistroForm] = useState({
    nombre: "Ana",
    email: "ana@example.com",
    password: "secreto123",
  });

  const [loginForm, setLoginForm] = useState({
    email: "ana@example.com",
    password: "secreto123",
  });

  // Filtro por categoría y búsqueda de producto por ID
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [productoId, setProductoId] = useState("");

  // Para probar pedidos
  const [pedidoId, setPedidoId] = useState("");
  const [productoPedidoId, setProductoPedidoId] = useState("");
  const [cantidadProducto, setCantidadProducto] = useState(1);
  const [pedidoDetalleId, setPedidoDetalleId] = useState("");

  // -----------------------------
  // Productos
  // -----------------------------
  const manejarGetProductos = async () => {
    try {
      const data = await getProductos();
      setResultado(data);
    } catch (error) {
      setResultado({ error: "No se pudo obtener la lista de productos" });
    }
  };

  const manejarGetProductosPorCategoria = async () => {
    try {
      const data = await getProductos(categoriaFiltro || null);
      setResultado(data);
    } catch (error) {
      setResultado({
        error: "No se pudo obtener la lista de productos por categoría",
      });
    }
  };

  const manejarGetProductoPorId = async () => {
    try {
      if (!productoId) {
        setResultado({ error: "Introduce un ID de producto" });
        return;
      }
      const data = await getProductoById(productoId);
      setResultado(data);
    } catch (error) {
      setResultado({ error: "No se pudo obtener el producto por ID" });
    }
  };

  // -----------------------------
  // Registro
  // -----------------------------
  const manejarRegistro = async (e) => {
    e.preventDefault();
    try {
      const data = await register(registroForm);
      setResultado(data);
      // Didáctico: el registro NO hace login automático.
      // Después de registrarse, el usuario debe hacer login.
    } catch (error) {
      setResultado({ error: "Error al registrar usuario" });
    }
  };

  // -----------------------------
  // Login
  // -----------------------------
  const manejarLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(loginForm);
      setResultado(data);

      // Suponemos que el backend devuelve:
      // { token, usuario: { id, nombre, email, ... } }
      if (data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      }

      if (data.usuario) {
        localStorage.setItem("user", JSON.stringify(data.usuario));
        setUsuario(data.usuario);
      }
    } catch (error) {
      setResultado({ error: "Error al iniciar sesión" });
    }
  };

  // -----------------------------
  // Logout
  // -----------------------------
  const manejarLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUsuario(null);
    setResultado(null);
  };

  // -----------------------------
  // Mis pedidos (ruta protegida)
  // -----------------------------
  const manejarMisPedidos = async () => {
    try {
      const data = await getMisPedidos();
      setResultado(data);
    } catch (error) {
      setResultado({ error: "Error al obtener /mis-pedidos" });
    }
  };

  // -----------------------------
  // Crear pedido (ruta protegida)
  // -----------------------------
  const manejarCrearPedido = async () => {
    try {
      const data = await crearPedido();
      setResultado(data);

      // Si el backend devuelve id_pedido, lo guardamos para probar
      // rápidamente el endpoint de agregar productos.
      if (data.id_pedido) {
        setPedidoId(String(data.id_pedido));
      }
    } catch (error) {
      setResultado({ error: "Error al crear pedido" });
    }
  };

  // -----------------------------
  // Añadir producto a pedido
  // -----------------------------
  const manejarAgregarProductoAPedido = async () => {
    try {
      if (!pedidoId || !productoPedidoId) {
        setResultado({
          error: "Debes indicar ID de pedido e ID de producto",
        });
        return;
      }

      const cantidad = Number(cantidadProducto) || 1;

      const data = await agregarProductoAPedido(
        pedidoId,
        productoPedidoId,
        cantidad
      );
      setResultado(data);
    } catch (error) {
      setResultado({
        error: "Error al agregar producto al pedido",
      });
    }
  };

  // -----------------------------
  // Ver detalle de un pedido del usuario
  // -----------------------------
  const manejarPedidoDetalle = async () => {
    try {
      if (!pedidoDetalleId) {
        setResultado({ error: "Introduce un ID de pedido" });
        return;
      }
      const data = await getPedidoDetalle(pedidoDetalleId);
      setResultado(data);
    } catch (error) {
      setResultado({
        error: "Error al obtener el detalle del pedido",
      });
    }
  };

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ddd",
        marginTop: "2rem",
        borderRadius: "8px",
        background: "#fafafa",
      }}
    >
      <h2>🔧 Prueba de API (modo desarrollo)</h2>

      {/* Estado de autenticación */}
      <p>
        Estado de autenticación:{" "}
        {isLogged ? (
          <strong style={{ color: "green" }}>Autenticado ✔</strong>
        ) : (
          <strong style={{ color: "red" }}>No autenticado ❌</strong>
        )}
      </p>

      {isLogged && (
        <>
          <p style={{ fontSize: "0.85rem", color: "#555" }}>
            Token JWT (inicio): {token.substring(0, 25)}...
          </p>
          {usuario && (
            <p style={{ fontSize: "0.85rem", color: "#555" }}>
              Usuario: {usuario.nombre} ({usuario.email})
            </p>
          )}
          <button
            type="button"
            onClick={manejarLogout}
            style={{ marginBottom: "1rem" }}
          >
            🚪 Cerrar sesión (borrar token)
          </button>
        </>
      )}

      <hr />

      {/* Productos */}
      <h3>📦 1. Probar productos</h3>
      <button type="button" onClick={manejarGetProductos}>
        📦 GET /api/productos
      </button>

      <div style={{ marginTop: "0.5rem" }}>
        <label>
          Categoría:&nbsp;
          <input
            type="text"
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
            placeholder="Ropa, Libros..."
          />
        </label>
        <button
          type="button"
          onClick={manejarGetProductosPorCategoria}
          style={{ marginLeft: "0.5rem" }}
        >
          🔎 GET /api/productos?categoria=...
        </button>
      </div>

      <div style={{ marginTop: "0.5rem" }}>
        <label>
          ID producto:&nbsp;
          <input
            type="number"
            value={productoId}
            onChange={(e) => setProductoId(e.target.value)}
            placeholder="1, 2, 3..."
          />
        </label>
        <button
          type="button"
          onClick={manejarGetProductoPorId}
          style={{ marginLeft: "0.5rem" }}
        >
          🔎 GET /api/productos/:id
        </button>
      </div>

      <hr />

      {/* Registro */}
      <h3>📝 2. Registrar usuario de prueba</h3>
      <form onSubmit={manejarRegistro} style={{ marginBottom: "1rem" }}>
        <div>
          <label>Nombre:&nbsp;</label>
          <input
            type="text"
            value={registroForm.nombre}
            onChange={(e) =>
              setRegistroForm({ ...registroForm, nombre: e.target.value })
            }
          />
        </div>
        <div>
          <label>Email:&nbsp;</label>
          <input
            type="email"
            value={registroForm.email}
            onChange={(e) =>
              setRegistroForm({ ...registroForm, email: e.target.value })
            }
          />
        </div>
        <div>
          <label>Contraseña:&nbsp;</label>
          <input
            type="password"
            value={registroForm.password}
            onChange={(e) =>
              setRegistroForm({ ...registroForm, password: e.target.value })
            }
          />
        </div>
        <button type="submit" style={{ marginTop: "0.5rem" }}>
          📝 POST /api/auth/register
        </button>
      </form>

      <hr />

      {/* Login */}
      <h3>🔑 3. Iniciar sesión</h3>
      <form onSubmit={manejarLogin} style={{ marginBottom: "1rem" }}>
        <div>
          <label>Email:&nbsp;</label>
          <input
            type="email"
            value={loginForm.email}
            onChange={(e) =>
              setLoginForm({ ...loginForm, email: e.target.value })
            }
          />
        </div>
        <div>
          <label>Contraseña:&nbsp;</label>
          <input
            type="password"
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
          />
        </div>
        <button type="submit" style={{ marginTop: "0.5rem" }}>
          🔑 POST /api/auth/login
        </button>
      </form>

      <hr />

      {/* Rutas protegidas: pedidos */}
      <h3>📄 4. Rutas protegidas (requieren token)</h3>

      <button
        type="button"
        onClick={manejarMisPedidos}
        disabled={!isLogged}
      >
        📄 GET /api/mis-pedidos
      </button>
      {!isLogged && (
        <p style={{ marginTop: "0.25rem", color: "red" }}>
          ⚠️ Inicia sesión para probar /mis-pedidos
        </p>
      )}

      <div style={{ marginTop: "1rem" }}>
        <button
          type="button"
          onClick={manejarCrearPedido}
          disabled={!isLogged}
        >
          🧾 POST /api/pedidos (crear pedido)
        </button>
      </div>

      <div style={{ marginTop: "0.5rem" }}>
        <label>
          ID pedido:&nbsp;
          <input
            type="number"
            value={pedidoId}
            onChange={(e) => setPedidoId(e.target.value)}
            placeholder="ID del pedido"
          />
        </label>
        <label style={{ marginLeft: "0.5rem" }}>
          ID producto:&nbsp;
          <input
            type="number"
            value={productoPedidoId}
            onChange={(e) => setProductoPedidoId(e.target.value)}
            placeholder="ID del producto"
          />
        </label>
        <label style={{ marginLeft: "0.5rem" }}>
          Cantidad:&nbsp;
          <input
            type="number"
            min="1"
            value={cantidadProducto}
            onChange={(e) => setCantidadProducto(e.target.value)}
          />
        </label>
        <button
          type="button"
          onClick={manejarAgregarProductoAPedido}
          style={{ marginLeft: "0.5rem" }}
          disabled={!isLogged}
        >
          ➕ POST /api/pedidos/:id/productos
        </button>
      </div>

      <div style={{ marginTop: "0.5rem" }}>
        <label>
          ID pedido para detalle:&nbsp;
          <input
            type="number"
            value={pedidoDetalleId}
            onChange={(e) => setPedidoDetalleId(e.target.value)}
            placeholder="ID del pedido"
          />
        </label>
        <button
          type="button"
          onClick={manejarPedidoDetalle}
          style={{ marginLeft: "0.5rem" }}
          disabled={!isLogged}
        >
          🔍 GET /api/mis-pedidos/:id
        </button>
      </div>

      {/* Resultado de la última petición */}
      <pre
        style={{
          marginTop: "1rem",
          background: "#f7f7f7",
          padding: "1rem",
          maxHeight: "300px",
          overflow: "auto",
          fontSize: "0.85rem",
        }}
      >
        {resultado ? JSON.stringify(resultado, null, 2) : "Sin resultados aún..."}
      </pre>
    </div>
  );
}
`}
        </code>
      </pre>

      <div className="nota">
        Observa que <strong>ApiTest.jsx</strong> no se va a quedar en el proyecto final.
        Es una herramienta didáctica para que tú (y tus alumnos) podáis comprobar de forma
        visual que:
        <ul className="lista-simple">
          <li>El backend responde a las rutas públicas.</li>
          <li>El registro y el login funcionan.</li>
          <li>El token se guarda y se usa correctamente en las rutas protegidas.</li>
        </ul>
        Una vez que todo esto funciona, construir las páginas “bonitas” es mucho más fácil.
      </div>

      <h3>3️⃣ ¿Qué aporta esta arquitectura y cuál es el siguiente paso?</h3>

      <ul className="lista-simple">
        <li>
          <strong>Separación de responsabilidades:</strong> <code>api.js</code> habla con la API;
          los componentes solo muestran datos y responden a acciones del usuario.
        </li>
        <li>
          <strong>Facilidad para cambiar el backend:</strong> si mañana la URL base cambia,
          solo modificas <code>API_URL</code> en un sitio.
        </li>
        <li>
          <strong>Preparado para AuthContext:</strong> más adelante, en{" "}
          <code>AuthContext.jsx</code>, podrás reutilizar la función <code>login()</code> de{" "}
          <code>api.js</code> para iniciar sesión y guardar usuario + token en el contexto.
        </li>
        <li>
          <strong>Componentes más simples:</strong> una futura página <code>ProductosPage</code>{" "}
          solo tendrá que hacer:
          <code className="etiqueta-codigo">const data = await getProductos("Ropa")</code> y
          pintar el resultado.
        </li>
        <li>
          <strong>Reutilización total:</strong> las mismas funciones de <code>api.js</code> se
          usarán desde <code>MisPedidosPage</code>, <code>LoginPage</code>,{" "}
          <code>PerfilPage</code>, etc.
        </li>
      </ul>

      <p>
        En la siguiente parte del manual, <strong>api.js</strong> empezará a “hablar” con
        nuestros componentes reales: el catálogo de productos, la página de login, la página
        de “Mis pedidos”… Gracias a este diseño, esos componentes serán mucho más cortos y
        fáciles de entender, porque delegan toda la lógica de red en este servicio.
      </p>
    </article>
  </details>
</section>

<section className="section" id="b4-useeffect">
  <details>
    <summary>4.3. Entendiendo <code>useEffect</code> desde cero</summary>

    <article className="card">

      <h3>📘 1. ¿Qué es <code>useEffect</code> y para qué sirve?</h3>
      <p>
        <code>useEffect</code> es uno de los hooks fundamentales de React. Permite ejecutar
        código “secundario” dentro de un componente: llamadas a API, temporizadores,
        acceso a <em>localStorage</em>, suscripciones, escuchar eventos del navegador,
        etc. Todo aquello que React considera un <strong>efecto secundario</strong>.
      </p>

      <div className="callout">
        <strong>Idea clave:</strong> React pinta la interfaz.  
        <code>useEffect</code> ejecuta acciones <strong>fuera del render</strong>.
      </div>


      <h3>📌 2. Sintaxis básica</h3>

      <pre className="bloque-codigo">
{`useEffect(() => {
  // código aquí
}, []);`}
      </pre>

      <p>
        El primer parámetro es una función que contiene el efecto.
        El segundo parámetro es el <strong>array de dependencias</strong>,
        que determina <em>cuándo</em> se ejecuta.
      </p>


      <h3>🎯 3. ¿Cuándo se ejecuta un <code>useEffect</code>?</h3>
      <p><strong>Depende del array de dependencias:</strong></p>

      <ul className="lista-simple">
        <li>
          <strong><code>[]</code></strong>: se ejecuta <u>solo una vez</u> al montar el componente.
        </li>

        <li>
          <strong><code>[variable]</code></strong>: se ejecuta cada vez que esa <em>variable</em> cambie.
        </li>

        <li>
          <strong>sin array</strong>: se ejecuta en <u>cada render</u> (no recomendado para principiantes).
        </li>
      </ul>


      <h3>🧠 4. Ejemplo fundamental: cargar datos al montar una página</h3>
      <p>
        En nuestra tienda online necesitaremos cargar productos desde el backend.
        Este es un ejemplo real que luego utilizaremos en <code>CatalogoPage.jsx</code>.
      </p>

      <pre className="bloque-codigo">
{`import { useEffect, useState } from "react";
import { getProductos } from "../services/api";

export default function CatalogoPage() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function cargarProductos() {
      const datos = await getProductos();
      setProductos(datos);
    }

    cargarProductos();
  }, []); // 👉 se ejecuta solo una vez

  return (
    <div>
      <h1>Catálogo</h1>
      <p>Productos cargados: {productos.length}</p>
    </div>
  );
}`}
      </pre>

      <div className="callout-bonus">
        <strong>¿Qué ocurre aquí?</strong><br />
        • El componente se monta → <code>useEffect</code> se ejecuta.<br />
        • Llamamos a la API.<br />
        • Cuando llegan los datos → actualizamos estado.<br />
        • React vuelve a renderizar mostrando los productos.<br />
      </div>


      <h3>🧩 5. Ejemplo didáctico: reaccionar a un valor</h3>
      <pre className="bloque-codigo">
{`useEffect(() => {
  console.log("El contador ha cambiado a:", contador);
}, [contador]);`}
      </pre>

      <p>Este efecto se ejecuta siempre que cambie el estado <code>contador</code>.</p>


      <h3>🧹 6. Limpieza (cleanup): ejecutar código al desmontar</h3>

      <p>
        A veces necesitamos limpiar intervalos, cerrar suscripciones o parar eventos.
        Para eso sirve el <strong>return</strong> dentro del <code>useEffect</code>.
      </p>

      <pre className="bloque-codigo">
{`useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id); // 🧹 limpieza al desmontar
}, []);`}
      </pre>

      <p>
        Este patrón lo usaremos en futuros componentes como <code>HeroCarousel</code>.
      </p>


      <h3>⚠️ 7. Errores comunes</h3>

      <ul className="lista-simple">
        <li>
          ❌ Olvidar dependencias que usa el efecto.
          <br />
          ✔ Solución: incluirlas en el array.
        </li>

        <li>
          ❌ Hacer <code>useEffect(async () = {})</code>.
          <br />
          ✔ Solución: definir una función interna y llamarla.
        </li>

        <li>
          ❌ Cambiar estado dentro del efecto sin control → bucle infinito.
          <br />
          ✔ Solución: usar dependencias adecuadas.
        </li>
      </ul>


      <h3>📝 8. Ejercicio práctico</h3>
      <p>Crea un componente <code>RelojPage.jsx</code> que:</p>
      <ul className="lista-simple">
        <li>Muestre la hora actual.</li>
        <li>La actualice cada segundo con <code>setInterval</code>.</li>
        <li>Realice limpieza del intervalo al desmontar.</li>
      </ul>

      <pre className="bloque-codigo">
{`useEffect(() => {
  const id = setInterval(() => {
    setHora(new Date().toLocaleTimeString());
  }, 1000);

  return () => clearInterval(id);
}, []);`}
      </pre>


      <h3>🎉 9. Resumen esencial para recordar siempre</h3>

      <ul className="lista-simple">
        <li><strong>¿Qué es?</strong> Un hook para ejecutar efectos secundarios.</li>
        <li><strong>¿Cuándo se ejecuta?</strong> Depende del array de dependencias.</li>
        <li><strong>¿Cómo limpiar?</strong> Usando el return dentro del efecto.</li>
        <li><strong>No usarlo como async directo</strong>.</li>
        <li><strong>No provocar bucles infinitos</strong>.</li>
      </ul>

    </article>

  </details>
</section>

<section className="section" id="4">
  <details>
    <summary>4.4. Entendiendo <code>useState</code> desde cero</summary>

    <article className="card">

      <h3>📘 1. ¿Qué es <code>useState</code>?</h3>
      <p>
        <code>useState</code> es el hook que permite a React recordar valores entre
        renderizados. En pocas palabras:
      </p>

      <div className="callout">
        <strong>useState = memoria del componente.</strong><br />
        Guarda un valor, lo actualiza y hace que React vuelva a renderizar.
      </div>

      <p>
        Sin <code>useState</code>, los componentes serían completamente estáticos: pintarían la
        interfaz y nada más. Gracias a este hook podemos construir buscadores,
        formularios, contadores, toggles, menús, filtros, etc.
      </p>


      <h3>📌 2. Sintaxis básica</h3>

      <pre className="bloque-codigo">
{`const [valor, setValor] = useState(valorInicial);`}
      </pre>

      <ul className="lista-simple">
        <li><code>valor</code> → el dato actual que React recuerda</li>
        <li><code>setValor</code> → función para actualizar el valor</li>
        <li><code>valorInicial</code> → lo que tiene al principio</li>
      </ul>

      <p>
        Cada vez que llamamos a <code>setValor()</code>, React vuelve a renderizar el
        componente mostrando el nuevo estado.
      </p>


      <h3>🎯 3. Ejemplo didáctico: contador básico</h3>

      <pre className="bloque-codigo">
{`import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <p>Valor actual: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Sumar
      </button>
    </>
  );
}`}
      </pre>

      <p>Este ejemplo resume el comportamiento fundamental del estado:</p>

      <ul className="lista-simple">
        <li>El botón actualiza el estado con <code>setContador</code>.</li>
        <li>React vuelve a renderizar mostrando el número actualizado.</li>
        <li>No necesitas recargar la página: React actualiza solo el componente.</li>
      </ul>


      <h3>🧠 4. React re-renderiza cada vez que cambia el estado</h3>

      <p>
        Esto es fundamental para entender cómo funciona una aplicación reactiva:
        cuando el estado cambia → React vuelve a dibujar el componente.
      </p>

      <div className="callout-bonus">
        <strong>Regla de oro:</strong><br />
        <em>“Render = función del estado”</em>.<br />
        Si cambia el estado, cambia lo que el usuario ve.
      </div>


      <h3>📌 5. Actualizar estado correctamente</h3>
      <p>
        Si el nuevo estado depende del anterior, usa la versión con función:
      </p>

      <pre className="bloque-codigo">
{`setContador(prev => prev + 1);`}
      </pre>

      <p>Esto evita errores en actualizaciones muy rápidas o concurrencia.</p>


      <h3>📦 6. useState puede guardar cualquier tipo de dato</h3>

      <ul className="lista-simple">
        <li><strong>Números</strong> → contadores, precios, cantidades</li>
        <li><strong>Strings</strong> → inputs, búsquedas</li>
        <li><strong>Booleanos</strong> → mostrar/ocultar, login</li>
        <li><strong>Objetos</strong> → formularios complejos</li>
        <li><strong>Arrays</strong> → listas de productos, carrito</li>
      </ul>

      <pre className="bloque-codigo">
{`const [activo, setActivo] = useState(true);
const [usuario, setUsuario] = useState({ nombre: "", email: "" });
const [productos, setProductos] = useState([]);
`}
      </pre>


      <h3>🛒 7. Ejemplo real del proyecto Bazar: gestionar el input de búsqueda</h3>

      <pre className="bloque-codigo">
{`export default function Buscador() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar productos…"
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />

      <p>Buscando: {busqueda}</p>
    </div>
  );
}`}
      </pre>

      <p>
        Aquí vemos una idea muy importante: <strong>el valor del input está ligado al
        estado</strong>. Si el usuario escribe → actualiza el estado → React re-renderiza.
      </p>


      <h3>🧩 8. Ejemplo esencial: mostrar/ocultar detalles</h3>

      <pre className="bloque-codigo">
{`export default function MostrarOcultar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"} detalles
      </button>

      {visible && <p>Aquí van los detalles del producto.</p>}
    </>
  );
}`}
      </pre>

      <p>
        Este patrón lo usaremos para menús, modales, filtros y cualquier contenido
        que deba mostrarse solo en ciertos casos.
      </p>


      <h3>⚠️ 9. Errores comunes</h3>

      <ul className="lista-simple">
        <li>
          ❌ Cambiar el estado directamente:
          <pre className="bloque-codigo">{`contador = contador + 1;`}</pre>
          ✔ Solución: siempre usar <code>setContador()</code>.
        </li>

        <li>
          ❌ Manipular arrays u objetos sin crear una copia.
          <pre className="bloque-codigo">{`productos.push(nuevo); // ❌`}</pre>
          ✔ Solución:
          <pre className="bloque-codigo">{`setProductos([...productos, nuevo]);`}</pre>
        </li>

        <li>
          ❌ Poner estados dependientes juntos cuando deben ser independientes.
        </li>

        <li>
          ❌ No inicializar correctamente el estado (undefined inesperados).
        </li>
      </ul>


      <h3>📝 10. Ejercicio </h3>
      <p>Crear un componente <code>CarritoDemo.jsx</code> que:</p>

      <ul className="lista-simple">
        <li>Tenga un estado con un array de productos.</li>
        <li>Permita añadir productos con un botón.</li>
        <li>Actualice la cantidad total en pantalla.</li>
      </ul>

      <pre className="bloque-codigo">
{`// Pista para empezar:
const [carrito, setCarrito] = useState([]);

function añadirProducto() {
  const nuevo = { nombre: "Camiseta", precio: 20 };
  setCarrito([...carrito, nuevo]);
}`}
      </pre>


      <h3>🎉 11. Resumen de la lección</h3>

      <ul className="lista-simple">
        <li><strong>useState</strong> guarda valores entre renderizados.</li>
        <li><strong>setEstado()</strong> actualiza y React vuelve a renderizar.</li>
        <li>React re-renderiza siempre que cambia el estado.</li>
        <li>Puede guardar cualquier tipo: número, string, boolean, objeto, array.</li>
        <li>Siempre hacer copias al trabajar con arrays u objetos.</li>
      </ul>

    </article>
  </details>
</section>

<section className="section" id="b4-usestate-useeffect">
  <details>
    <summary>4.X. Cómo trabajar <code>useState</code> y <code>useEffect</code> juntos</summary>

    <article className="card">

      <h3>📘 1. ¿Por qué es tan importante combinar <code>useState</code> y <code>useEffect</code>?</h3>

      <p>
        En React, la mayoría de las páginas “reales” funcionan gracias a la 
        <strong>combinación</strong> de estos dos hooks:
      </p>

      <ul className="lista-simple">
        <li><code>useState</code> → guarda datos</li>
        <li><code>useEffect</code> → obtiene, calcula o actualiza esos datos</li>
      </ul>

      <p>
        Por ejemplo, en nuestro proyecto Bazar usaremos esta combinación para:
      </p>

      <ul className="lista-simple">
        <li>Cargar productos desde el backend</li>
        <li>Mostrar el listado actualizado cuando el usuario cambie de categoría</li>
        <li>Leer el token del usuario al iniciar la aplicación</li>
        <li>Reaccionar a filtros, búsquedas o cambios del carrito</li>
      </ul>

      <div className="callout">
        <strong>Idea clave:</strong>  
        <em>useState guarda el dato → useEffect cambia el dato cuando ocurre algo.</em>
      </div>


      <h3>📌 2. Patrón base: estado + efecto</h3>

      <pre className="bloque-codigo">
{`const [dato, setDato] = useState(valorInicial);

useEffect(() => {
  // código que actualiza setDato
}, []);`}
      </pre>

      <p>Este patrón aparece en prácticamente el 80% de las páginas React modernas.</p>


      <h3>🎯 3. Ejemplo real: cargar productos al montar la página</h3>

      <pre className="bloque-codigo">
{`import { useState, useEffect } from "react";
import { getProductos } from "../services/api";

export default function CatalogoPage() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function cargar() {
      const data = await getProductos();
      setProductos(data);
    }

    cargar();
  }, []); // 👉 solo al montar

  return (
    <div>
      <h2>Catálogo</h2>
      <p>Productos cargados: {productos.length}</p>
    </div>
  );
}`}
      </pre>

      <div className="callout-bonus">
        <strong>¿Qué ocurre aquí?</strong><br/>
        • Al abrir la página, <code>useEffect</code> llama a la API. <br/>
        • React espera la respuesta. <br/>
        • Cuando llegan los datos → <code>setProductos</code>. <br/>
        • React vuelve a renderizar mostrando los productos. <br/>
      </div>


      <h3>📚 4. Segundo ejemplo: cargar datos cuando cambia una categoría</h3>

      <p>Supongamos que el usuario elige una categoría del menú lateral.</p>

      <pre className="bloque-codigo">
{`const [categoria, setCategoria] = useState(null);
const [productos, setProductos] = useState([]);

useEffect(() => {
  async function cargarPorCategoria() {
    const data = await getProductos({ categoria });
    setProductos(data);
  }

  if (categoria !== null) {
    cargarPorCategoria();
  }
}, [categoria]); // 👉 se ejecuta cuando cambia la categoría`}
      </pre>

      <p>
        Este patrón será el que usemos en <strong>CatalogoPage.jsx</strong> cuando añadamos 
        filtros por categoría en el sidebar.
      </p>


      <h3>🧠 5. El ciclo típico que verán tus alumnos</h3>

      <ul className="lista-simple">
        <li>El usuario hace algo (buscar, seleccionar categoría, abrir página).</li>
        <li><code>useState</code> guarda ese cambio.</li>
        <li><code>useEffect</code> detecta que cambió el estado.</li>
        <li><code>useEffect</code> hace una acción (fetch, cálculo, lectura).</li>
        <li><code>useEffect</code> actualiza otro estado.</li>
        <li>React vuelve a renderizar la interfaz automáticamente.</li>
      </ul>

      <div className="callout">
        <strong>React piensa así:</strong>  
        “El estado ha cambiado → necesito volver a dibujar”.
      </div>


      <h3>🔁 6. Ejemplo completo: buscador de productos</h3>

      <pre className="bloque-codigo">
{`const [busqueda, setBusqueda] = useState("");
const [resultados, setResultados] = useState([]);

useEffect(() => {
  async function buscar() {
    const data = await getProductos({ nombre: busqueda });
    setResultados(data);
  }

  if (busqueda.length > 2) {
    buscar();
  }
}, [busqueda]);`}
      </pre>

      <p>
        Observaciones didácticas:
      </p>

      <ul className="lista-simple">
        <li><strong>busqueda</strong> se actualiza al escribir en el input.</li>
        <li>El <strong>useEffect</strong> responde a ese cambio.</li>
        <li>La API devuelve productos que coinciden con la búsqueda.</li>
        <li>La interfaz se actualiza sola.</li>
      </ul>


      <h3>🧩 7. Usar cleanup cuando el efecto depende del estado</h3>

      <p>
        Muy útil cuando el usuario escribe rápido y queremos evitar efectos viejos:
      </p>

      <pre className="bloque-codigo">
{`useEffect(() => {
  const id = setTimeout(() => {
    console.log("Buscando:", busqueda);
  }, 500);

  return () => clearTimeout(id);
}, [busqueda]);`}
      </pre>

      <p>
        Esto evita que se ejecuten búsquedas antiguas y ralentice la app.
      </p>


      <h3>⚠️ 8. Errores típicos cuando se combinan</h3>

      <ul className="lista-simple">
        <li>
          ❌ Llamar a una API dentro del render.  
          ✔ Siempre dentro de <code>useEffect</code>.
        </li>

        <li>
          ❌ Olvidar variables del estado en las dependencias.  
          ✔ React te avisará en consola.
        </li>

        <li>
          ❌ Manipular directamente arrays u objetos antes de guardarlos en estado.
        </li>

       <li>
         ❌ Usar <code>useEffect(async ()  {})</code>.  
         ✔ Usar una función interna asíncrona.
       </li>

        <li>
          ❌ Crear bucles infinitos:  
          <pre className="bloque-codigo">{`useEffect(() => setX(x + 1));`}</pre>
        </li>
      </ul>


      <h3>📝 9. Ejercicio práctico final (muy recomendado)</h3>

      <p>Crea un componente <code>DestacadosAuto.jsx</code> que:</p>

      <ul className="lista-simple">
        <li>Cargue productos destacados desde la API.</li>
        <li>Los cargue al montar (<code>[]</code>).</li>
        <li>Cambie automáticamente a otro destacado cada 3 segundos.</li>
        <li>Limpie el intervalo cuando se desmonte.</li>
      </ul>

      <pre className="bloque-codigo">
{`const [destacados, setDestacados] = useState([]);
const [indice, setIndice] = useState(0);

useEffect(() => {
  async function cargar() {
    const data = await getProductosDestacados();
    setDestacados(data);
  }
  cargar();
}, []);

useEffect(() => {
  const id = setInterval(() => {
    setIndice(prev => (prev + 1) % destacados.length);
  }, 3000);

  return () => clearInterval(id);
}, [destacados]);`}
      </pre>


      <h3>🎉 10. Resumen esencial</h3>

      <ul className="lista-simple">
        <li>useState → guarda datos que cambian.</li>
        <li>useEffect → ejecuta lógica en respuesta a esos datos.</li>
        <li>Siempre empieza por: montar → cargar datos → actualizar estado.</li>
        <li>React actualiza solo la interfaz cuando cambia el estado.</li>
        <li>La combinación de ambos permite crear apps completas y dinámicas.</li>
      </ul>

    </article>
  </details>
</section>
<section className="section" id="b4-useref">
  <details>
    <summary>4.X. Entendiendo <code>useRef</code> desde cero</summary>

    <article className="card">

      <h3>📘 1. ¿Qué es <code>useRef</code>?</h3>

      <p>
        <code>useRef</code> es un hook de React que sirve para guardar un valor
        <strong>mutable</strong> que <strong>no provoca re-render</strong> cuando cambia.
      </p>

      <div className="callout">
        <strong>Idea clave:</strong>  
        <code>useState</code> guarda datos que cambian y vuelven a pintar la interfaz.  
        <code>useRef</code> guarda datos que cambian <strong>sin volver a pintar</strong>.
      </div>

      <p>
        Además, <code>useRef</code> se usa para crear referencias a elementos del DOM, por ejemplo:
        para enfocar un input, hacer scroll hasta una sección, medir el tamaño de un elemento, etc.
      </p>


      <h3>📌 2. Sintaxis básica</h3>

      <pre className="bloque-codigo">
{`import { useRef } from "react";

const referencia = useRef(valorInicial);`}
      </pre>

      <ul className="lista-simple">
        <li><code>useRef(valorInicial)</code> devuelve un objeto con una propiedad <code>.current</code>.</li>
        <li>Puedes leer o escribir en <code>referencia.current</code>.</li>
        <li>React no vuelve a renderizar cuando cambias <code>current</code>.</li>
      </ul>

      <pre className="bloque-codigo">
{`const contadorRef = useRef(0);

contadorRef.current = contadorRef.current + 1; // cambia el valor, pero no re-renderiza`}
      </pre>


      <h3>🎯 3. Primer uso clásico: referenciar un elemento del DOM</h3>

      <p>
        El uso más típico de <code>useRef</code> es acceder a nodos del DOM: inputs, divs, botones...
      </p>

      <pre className="bloque-codigo">
{`import { useRef } from "react";

export default function Formulario() {
  const inputRef = useRef(null);

  function manejarFoco() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe tu nombre"
      />
      <button onClick={manejarFoco}>
        Enfocar input
      </button>
    </>
  );
}`}
      </pre>

  


      <h3>🛒 4. Ejemplo aplicado al proyecto Bazar</h3>

      <p>
        Imagina el cuadro de búsqueda de productos en el catálogo. Podemos enfocar automáticamente
        el input cuando se abre la página:
      </p>

      <pre className="bloque-codigo">
{`import { useRef, useEffect } from "react";

export default function BuscadorProductos() {
  const inputBusquedaRef = useRef(null);

  useEffect(() => {
    if (inputBusquedaRef.current) {
      inputBusquedaRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputBusquedaRef}
      type="text"
      placeholder="Buscar productos..."
    />
  );
}`}
      </pre>

      <p>
        Combinamos <code>useRef</code> (referencia al input) con <code>useEffect</code> 
        (ejecutar al montar) para mejorar la experiencia de usuario.
      </p>


      <h3>🧠 5. Segundo uso: guardar valores que no queremos que provoquen re-render</h3>

      <p>
        A veces necesitamos guardar información que cambia, pero que <strong>no forma parte
        de la interfaz</strong>. Por ejemplo:
      </p>

      <ul className="lista-simple">
        <li>Contar cuántas veces se ha renderizado un componente.</li>
        <li>Guardar un id de <code>setInterval</code> o <code>setTimeout</code>.</li>
        <li>Guardar el valor anterior de una variable sin re-renderizar.</li>
      </ul>

      <pre className="bloque-codigo">
{`import { useState, useRef, useEffect } from "react";

export default function ContadorConRef() {
  const [valor, setValor] = useState(0);
  const rendersRef = useRef(0);

  useEffect(() => {
    rendersRef.current = rendersRef.current + 1;
  });

  return (
    <>
      <p>Valor: {valor}</p>
      <p>Renderizados: {rendersRef.current}</p>
      <button onClick={() => setValor(valor + 1)}>
        Sumar
      </button>
    </>
  );
}`}
      </pre>

      <p>
        Fíjate que <code>rendersRef.current</code> va cambiando, pero solo mostramos su valor
        en pantalla; el cambio de <code>current</code> en sí no provoca un nuevo render.
      </p>


      <h3>📦 6. useState vs useRef: ¿cuándo usar cada uno?</h3>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Hook</th>
              <th>Provoca re-render al cambiar</th>
              <th>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>useState</code></td>
              <td>Sí</td>
              <td>Datos que aparecen en la UI (texto, listas, formularios).</td>
            </tr>
            <tr>
              <td><code>useRef</code></td>
              <td>No</td>
              <td>Referencias al DOM, ids de intervalos, contadores internos, valores previos.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout">
        <strong>Regla práctica:</strong>  
        Si el dato debe pintar algo en pantalla → <code>useState</code>.  
        Si no afecta a la interfaz y es “detalle interno” → <code>useRef</code>.
      </div>


      <h3>🔍 7. Guardar el valor anterior de un estado</h3>

      <p>
        Otra utilidad muy común: recordar el valor anterior de una variable, por ejemplo
        para comparar cambios.
      </p>

      <pre className="bloque-codigo">
{`import { useState, useEffect, useRef } from "react";

export default function ValorAnteriorDemo() {
  const [precio, setPrecio] = useState(100);
  const precioAnteriorRef = useRef(precio);

  useEffect(() => {
    precioAnteriorRef.current = precio;
  }, [precio]);

  return (
    <>
      <p>Precio actual: {precio}</p>
      <p>Precio anterior: {precioAnteriorRef.current}</p>

      <button onClick={() => setPrecio(precio + 10)}>
        Subir precio
      </button>
    </>
  );
}`}
      </pre>

      <p>
        Aquí, <code>precioAnteriorRef.current</code> siempre guarda el valor anterior de 
        <code>precio</code>, sin provocar re-render por sí mismo.
      </p>


      <h3>🎠 8. Ejemplo aplicado a un carrusel (HeroCarousel)</h3>

      <p>
        En el futuro, cuando implementemos <code>HeroCarousel</code>, podemos usar 
        <code>useRef</code> para guardar el id del intervalo que cambia las diapositivas:
      </p>

      <pre className="bloque-codigo">
{`const intervaloRef = useRef(null);

useEffect(() => {
  intervaloRef.current = setInterval(() => {
    // cambiar diapositiva
  }, 3000);

  return () => clearInterval(intervaloRef.current);
}, []);`}
      </pre>

      <p>
        Gracias a <code>useRef</code> guardamos el id del intervalo y podemos 
        cancelarlo en el cleanup de <code>useEffect</code>.
      </p>


      <h3>⚠️ 9. Errores comunes con <code>useRef</code></h3>

      <ul className="lista-simple">
        <li>
          ❌ Usar <code>useRef</code> para datos que sí deberían provocar un re-render.  
          ✔ En esos casos, es mejor <code>useState</code>.
        </li>
        <li>
          ❌ Olvidar que <code>ref.current</code> puede ser <code>null</code> la primera vez.  
          ✔ Siempre comprobar antes de usarlo: <code>if (ref.current) ...</code>.
        </li>
        <li>
          ❌ Intentar leer <code>ref.current</code> antes de que el elemento esté montado.  
          ✔ Usar <code>useEffect</code> con <code>[]</code> si necesitas acceder tras el montaje.
        </li>
      </ul>


      <h3>📝 10. Ejercicio práctico </h3>

      <p>Crea un componente <code>ScrollALaSeccion.jsx</code> que:</p>

      <ul className="lista-simple">
        <li>Tenga un botón “Ir a ofertas”.</li>
        <li>Use <code>useRef</code> para referenciar un <code>&lt;section&gt;</code> de “Ofertas”.</li>
        <li>Al hacer click, haga scroll suave hasta esa sección.</li>
      </ul>

      <pre className="bloque-codigo">
{`const ofertasRef = useRef(null);

function irAOfertas() {
  if (ofertasRef.current) {
    ofertasRef.current.scrollIntoView({ behavior: "smooth" });
  }
}

return (
  <>
    <button onClick={irAOfertas}>Ir a ofertas</button>

    {/* ...contenido... */}

    <section ref={ofertasRef}>
      <h2>Ofertas</h2>
      {/* tarjetas de producto */}
    </section>
  </>
);`}
      </pre>


      <h3>🎉 11. Resumen de la lección</h3>

      <ul className="lista-simple">
        <li><code>useRef</code> guarda valores mutables que no provocan re-render.</li>
        <li>Es perfecto para referencias al DOM: inputs, secciones, sliders.</li>
        <li>También sirve para guardar ids de intervalos, contadores internos, valores previos.</li>
        <li>Si el dato afecta a la interfaz → <code>useState</code>. Si no, muchas veces → <code>useRef</code>.</li>
      </ul>

    </article>

  </details>
</section>

<section className="section" id="b4-usecontext">
  <details>
    <summary>4.X. Compartir estado global con <code>useContext</code></summary>

    <article className="card">

      <h3>📘 1. ¿Qué es <code>useContext</code> y para qué sirve?</h3>

      <p>
        <code>useContext</code> es un hook de React que permite acceder a un 
        <strong>estado global</strong> sin tener que pasar props manualmente por todos
        los componentes (lo que se llama <em>prop drilling</em>).
      </p>

      <div className="callout">
        <strong>Idea clave:</strong><br />
        Crear un “contexto” es como crear una mochila de datos (usuario, token,
        funciones) que cualquier componente hijo puede usar sin que el padre se los pase
        por props.
      </div>

      <p>
        En nuestro proyecto Bazar lo usaremos para:
      </p>

      <ul className="lista-simple">
        <li>Guardar el <strong>usuario autenticado</strong> y su <strong>token</strong>.</li>
        <li>Ofrecer funciones <code>login()</code> y <code>logout()</code> a cualquier componente.</li>
        <li>Proteger rutas como <code>MisPedidosPage</code> sin duplicar lógica.</li>
        <li>Mostrar en la <code>Navbar</code> si el usuario está logado o no.</li>
      </ul>


      <h3>🏗 2. Las tres piezas del Context API</h3>

      <ol className="lista-simple">
        <li><strong>El contexto</strong> → <code>const AuthContext = createContext();</code></li>
        <li>
          <strong>El proveedor (Provider)</strong> → componente que envuelve la app y 
          ofrece el valor global.
        </li>
        <li>
          <strong>El consumidor</strong> → cualquier componente que usa 
          <code>useContext(AuthContext)</code> para leer esos datos.
        </li>
      </ol>


      <h3>📁 3. Creando un contexto de autenticación</h3>

      <p>
        Creamos un archivo específico para la lógica de autenticación, por ejemplo:
        <code>src/context/AuthContext.jsx</code>.
      </p>

      <pre className="bloque-codigo">
{`// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import { login as apiLogin, getMisPedidos } from "../services/api";

// 1) Creamos el contexto
export const AuthContext = createContext();

// 2) Creamos el proveedor
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);

  // Cargar token almacenado (si existe) al iniciar la app
  useEffect(() => {
    const tokenGuardado = localStorage.getItem("token");
    if (tokenGuardado) {
      setToken(tokenGuardado);
      // Podríamos también decodificar o llamar a backend para obtener datos de usuario
    }
  }, []);

  async function login(credenciales) {
    // credenciales: { email, password }
    const data = await apiLogin(credenciales);
    setToken(data.token);
    localStorage.setItem("token", data.token);
    // Si el backend devuelve datos de usuario, podemos guardarlos:
    setUsuario({ email: credenciales.email });
  }

  function logout() {
    setUsuario(null);
    setToken(null);
    localStorage.removeItem("token");
  }

  const valor = {
    usuario,
    token,
    login,
    logout,
    estaAutenticado: !!token,
  };

  return (
    <AuthContext.Provider value={valor}>
      {children}
    </AuthContext.Provider>
  );
}`}
      </pre>

      <div className="callout-bonus">
        <strong>Resumen:</strong><br />
        • Creamos <code>AuthContext</code>.<br />
        • <code>AuthProvider</code> guarda el estado global (usuario + token).<br />
        • Envuelve al resto de la aplicación y les da acceso a ese estado.
      </div>


      <h3>🔗 4. Envolver la aplicación con el <code>AuthProvider</code></h3>

      <p>
        En <code>main.jsx</code> envolvemos toda la app con nuestro proveedor para que
        cualquier componente interno pueda usar el contexto:
      </p>

      <pre className="bloque-codigo">
{`// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./styles/frontend.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);`}
      </pre>

      <p>
        A partir de aquí, <strong>cualquier componente dentro de App</strong> puede
        acceder al contexto llamando a <code>useContext(AuthContext)</code>.
      </p>


      <h3>🧪 5. Usar el contexto en un componente: ejemplo Navbar</h3>

      <p>
        Modificamos la <code>Navbar</code> para que muestre “Iniciar sesión” o el
        nombre del usuario según el estado del contexto.
      </p>

      <pre className="bloque-codigo">
{`// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { usuario, estaAutenticado, logout } = useContext(AuthContext);

  return (
    <header className="cabecera">
      <div className="contenedor cabecera-contenido">
        <h1 className="cabecera-titulo">Mi Bazar</h1>

        <nav className="navegacion-principal">
          <Link to="/" className="enlace-navegacion">Inicio</Link>
          <Link to="/catalogo" className="enlace-navegacion">Catálogo</Link>

          {estaAutenticado && (
            <Link to="/mis-pedidos" className="enlace-navegacion">
              Mis pedidos
            </Link>
          )}

          {!estaAutenticado ? (
            <Link to="/login" className="enlace-navegacion">
              Iniciar sesión
            </Link>
          ) : (
            <button onClick={logout} className="enlace-navegacion">
              Cerrar sesión ({usuario?.email})
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}`}
      </pre>

      <p>
        Aquí estamos usando <code>useContext(AuthContext)</code> para leer directamente
        el usuario, saber si está autenticado y poder cerrar sesión, sin pasar props
        desde <code>App.jsx</code>.
      </p>


      <h3>🛡 6. Context + rutas protegidas</h3>

      <p>
        Una ventaja enorme de usar contexto es poder crear un componente 
        <strong>ProtectedRoute</strong> que reutilizaremos en varias páginas.
      </p>

      <pre className="bloque-codigo">
{`// src/components/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { estaAutenticado } = useContext(AuthContext);

  if (!estaAutenticado) {
    return <Navigate to="/login" replace />;
  }

  return children;
}`}
      </pre>

      <p>
        Y en <code>App.jsx</code> protegemos rutas como <code>/mis-pedidos</code>:
      </p>

      <pre className="bloque-codigo">
{`// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MisPedidosPage from "./pages/MisPedidosPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/mis-pedidos"
            element={
              <ProtectedRoute>
                <MisPedidosPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}`}
      </pre>


      <h3>⚠️ 7. Errores frecuentes con <code>useContext</code></h3>

      <ul className="lista-simple">
        <li>
          ❌ Usar <code>useContext</code> fuera del proveedor.<br />
          ✔ Solución: asegurarse de que el componente esté dentro de <code>&lt;AuthProvider&gt;</code>.
        </li>
        <li>
          ❌ Crear el contexto y no exportarlo correctamente (olvidar <code>export</code>).<br />
        </li>
        <li>
          ❌ Mezclar demasiados datos en un solo contexto (auth, tema, carrito, etc.).<br />
          ✔ Mejor separar en varios contextos cuando el proyecto crezca.
        </li>
      </ul>


      <h3>📝 8. Ejercicio práctico para tus alumnos</h3>

      <p>Crea un contexto llamado <code>UiContext</code> que:</p>

      <ul className="lista-simple">
        <li>Guarde en estado si el menú lateral de categorías está abierto o cerrado.</li>
        <li>Exponga una función <code>toggleSidebar()</code>.</li>
        <li>Permita que <code>Navbar</code> tenga un botón para abrir/cerrar el menú.</li>
        <li>Permita que el componente de <code>SidebarCategorias</code> lea ese estado sin props.</li>
      </ul>


      <h3>🎉 9. Resumen de la lección</h3>

      <ul className="lista-simple">
        <li><code>useContext</code> permite acceder a estado global sin pasar props.</li>
        <li>Se basa en: <strong>Context</strong> + <strong>Provider</strong> + <strong>useContext</strong>.</li>
        <li>Es ideal para: usuario, token, tema, configuración de UI, carrito.</li>
        <li>En el proyecto, lo usamos para autenticación y rutas protegidas.</li>
      </ul>

    </article>

  </details>
</section>
<section className="section" id="b4-arquitectura-hooks">
  <details>
    <summary>4.X. Arquitectura de hooks en el Proyecto Bazar</summary>

    <article className="card">

      <h3>📘 1. ¿Por qué necesitamos una arquitectura de hooks?</h3>

      <p>
        En React, los hooks son las herramientas que nos permiten construir
        <strong>aplicaciones dinámicas, interactivas y basadas en datos</strong>.
        El Proyecto Bazar (nuestra tienda online) se estructura a partir de 4 hooks clave:
      </p>

      <ul className="lista-simple">
        <li><strong>useState</strong> → almacenar valores que cambian</li>
        <li><strong>useEffect</strong> → ejecutar lógica cuando cambian esos valores</li>
        <li><strong>useRef</strong> → guardar valores mutables sin re-render</li>
        <li><strong>useContext</strong> → compartir datos globales en toda la app</li>
      </ul>

      <div className="callout">
        <strong>Idea clave:</strong>  
        React funciona como una cadena: <strong>Estado → Efectos → Renderizado → Interacción → Estado…</strong>
      </div>


      <h3>📌 2. El ciclo de vida real en el Proyecto Bazar</h3>

      <p>
        Cada vez que un alumno abre la tienda, se produce un ciclo completo:
      </p>

      <ol className="lista-simple">
        <li>El componente se monta → <code>useEffect(..., [])</code> se ejecuta.</li>
        <li>Se llama al backend para obtener productos, categorías o pedidos.</li>
        <li>El resultado se guarda con <code>useState</code>.</li>
        <li>React vuelve a renderizar mostrando los datos nuevos.</li>
        <li>El usuario interactúa → el estado cambia → nuevo render.</li>
        <li>Algunos elementos (inputs, carruseles) necesitan referencias → <code>useRef</code>.</li>
        <li>Cualquier parte de la app puede consultar datos globales (token, usuario) → <code>useContext</code>.</li>
      </ol>

      <p>Esta arquitectura se repite en cada página.</p>


      <h3>📦 3. Rol de cada hook dentro del proyecto</h3>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Hook</th>
              <th>Qué hace</th>
              <th>Dónde se usa en el proyecto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>useState</code></td>
              <td>Guarda valores que afectan al render</td>
              <td>
                Productos, categorías, inputs, paginación, estado de carga, pedidos…
              </td>
            </tr>
            <tr>
              <td><code>useEffect</code></td>
              <td>Reacciona a cambios o ejecuta lógica al montar</td>
              <td>
                Cargar productos desde la API, aplicar filtros, leer token del localStorage…
              </td>
            </tr>
            <tr>
              <td><code>useRef</code></td>
              <td>Guarda valores mutables sin re-render</td>
              <td>
                Carrusel, enfocar inputs, guardar ids de intervalos, scroll a secciones…
              </td>
            </tr>
            <tr>
              <td><code>useContext</code></td>
              <td>Comparte estado global entre múltiples componentes</td>
              <td>
                Autenticación (usuario, token), rutas protegidas, mostrar opciones en Navbar…
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <h3>🧠 4. Cómo interactúan entre sí (la arquitectura lógica)</h3>

      <p>En una página típica del Bazar, los hooks trabajan así:</p>

      <pre className="bloque-codigo">
{`// 1) Estado
const [productos, setProductos] = useState([]);

// 2) Efecto al montar
useEffect(() => {
  async function cargar() {
    const datos = await getProductos();
    setProductos(datos);
  }
  cargar();
}, []);

// 3) Datos globales del usuario
const { token, usuario } = useContext(AuthContext);

// 4) Elementos referenciables
const inputBusquedaRef = useRef(null);

return (
  ...
);`}
      </pre>

      <p>
        Así, cada hook cumple una misión distinta pero encaja en una misma estructura:
      </p>

      <ul className="lista-simple">
        <li><strong>useState</strong> → guarda los datos que cambiarán el render.</li>
        <li><strong>useEffect</strong> → obtiene/cambia esos datos según acciones o montajes.</li>
        <li><strong>useContext</strong> → da acceso al estado global sin prop drilling.</li>
        <li><strong>useRef</strong> → maneja interacciones “técnicas” (DOM, intervalos…).</li>
      </ul>


      <h3>🎯 5. Ejemplo real: página de Catálogo</h3>

      <p>
        Esta página utiliza 3 hooks desde el primer minuto:
      </p>

      <pre className="bloque-codigo">
{`const [productos, setProductos] = useState([]);
const [categoria, setCategoria] = useState(null);
const inputBusquedaRef = useRef(null);

useEffect(() => {
  cargarProductos();
}, [categoria]);

function cargarProductos() {
  getProductos({ categoria }).then(setProductos);
}`}
      </pre>

      <p>
        Aquí vemos uno de los patrones fundamentales del Bazar:
      </p>

      <div className="callout-bonus">
        <strong>Patrón del catálogo:</strong>  
        <em>El usuario cambia algo → cambia el estado → useEffect responde → se cargan productos nuevos.</em>
      </div>


      <h3>🔐 6. Ejemplo real: autenticación con contexto</h3>

      <p>
        <code>useContext</code> funciona como el “cerebro central” de la app para el usuario:
      </p>

      <pre className="bloque-codigo">
{`const { estaAutenticado, usuario, logout } = useContext(AuthContext);`}
      </pre>

      <p>
        Esto nos permite mostrar u ocultar botones en la Navbar, proteger rutas y usar
        el token en las llamadas a la API sin repetir código.
      </p>


      <h3>📐 7. Diagrama simplificado de arquitectura</h3>

      <p>Así es como se relacionan entre sí los hooks en cada parte del proyecto:</p>

      <pre className="bloque-codigo">
{`[useContext]  →  usuario global, token, login, logout
       ↓
[useEffect]   →  carga datos al montar o al cambiar filtros
       ↓
[useState]    →  guarda productos, filtros, inputs, pedidos
       ↓
[Render]      →  React actualiza la UI
       ↓
[useRef]      →  efectos auxiliares (carrusel, foco, scroll)
       ↓
(Interacción del usuario)
       ↓
  vuelve a useState → y se repite el ciclo`}
      </pre>


      <h3>⚠ 8. Errores comunes al combinar hooks</h3>

      <ul className="lista-simple">
        <li>❌ Mezclar demasiada lógica dentro de un solo <code>useEffect</code>.</li>
        <li>❌ Usar <code>useRef</code> para datos que deberían ir en <code>useState</code>.</li>
        <li>❌ Olvidar usar <code>useContext</code> en vez de pasar props de 3 niveles.</li>
        <li>❌ Hacer fetch en cada render sin condicionarlo.</li>
        <li>❌ No limpiar intervalos creados con <code>useRef</code> + <code>useEffect</code>.</li>
      </ul>


      <h3>📝 9. Mini–ejercicio final para alumnos</h3>

      <p>Crea un componente <code>DashboardMini.jsx</code> que:</p>

      <ul className="lista-simple">
        <li>Lea desde <code>AuthContext</code> si el usuario está logado.</li>
        <li>Use <code>useState</code> para guardar los últimos 3 productos vistos.</li>
        <li>Use <code>useEffect</code> para cargar esos productos desde localStorage.</li>
        <li>Use <code>useRef</code> para contar cuántas veces se abrió la página.</li>
      </ul>


      <h3>🎉 10. Resumen general</h3>

      <ul className="lista-simple">
        <li><strong>useState</strong> → valores que cambian la UI.</li>
        <li><strong>useEffect</strong> → acciones derivadas de esos valores.</li>
        <li><strong>useRef</strong> → referencias y valores mutables.</li>
        <li><strong>useContext</strong> → estado global para toda la app.</li>
      </ul>

      <p>
        Esta combinación de hooks es la base de la arquitectura del Bazar y permite
        construir una tienda dinámica, organizada y fácil de mantener.
      </p>

    </article>
  </details>
</section>
<section className="section" id="b4-hooks-cheatsheet">
  <details>
    <summary>4.X. 🧾 Cheat Sheet de Hooks (Resumen Rápido)</summary>

    <article className="card">

      <h3>⚡ 1. useState — Estado dentro del componente</h3>

      <pre className="bloque-codigo">
{`const [valor, setValor] = useState(valorInicial);`}
      </pre>

      <ul className="lista-simple">
        <li>Guarda datos que cambian y afectan a la UI.</li>
        <li>Al usar <code>setValor</code>, React vuelve a renderizar.</li>
        <li>Perfecto para inputs, contadores, productos filtrados, formularios…</li>
      </ul>

      <div className="callout">
        <strong>Recuerda:</strong> si cambia la interfaz → es estado.
      </div>


      <h3>⚡ 2. useEffect — Ejecutar lógica fuera del render</h3>

      <pre className="bloque-codigo">
{`useEffect(() => {
  // efecto
}, [dependencias]);`}
      </pre>

      <ul className="lista-simple">
        <li><code>[]</code> → al montar.</li>
        <li><code>[valor]</code> → cuando cambie ese valor.</li>
        <li>Ideal para: fetch, localStorage, intervalos, suscripciones.</li>
      </ul>

      <div className="callout">
        <strong>Regla:</strong> cambios externos → useEffect.
      </div>


      <h3>⚡ 3. useRef — Valores mutables y referencias al DOM</h3>

      <pre className="bloque-codigo">
{`const miRef = useRef(valorInicial);`}
      </pre>

      <ul className="lista-simple">
        <li>No provoca re-render al cambiar <code>miRef.current</code>.</li>
        <li>Sirve para: enfocar inputs, carrusel, medir elementos, intervalos.</li>
        <li>Perfecto para lógica técnica que no afecta al render.</li>
      </ul>

      <div className="callout">
        <strong>Regla:</strong> si NO cambia la UI → useRef.
      </div>


      <h3>⚡ 4. useContext — Estado global sin prop drilling</h3>

      <pre className="bloque-codigo">
{`const valor = useContext(MiContexto);`}
      </pre>

      <ul className="lista-simple">
        <li>Evita pasar props de componente en componente.</li>
        <li>Ideal para: usuario, token, idioma, tema, carrito.</li>
        <li>Se usa junto al Provider: <code>&lt;MiContexto.Provider value=&gt;</code></li>
      </ul>

      <div className="callout">
        <strong>Regla:</strong> datos globales o compartidos → useContext.
      </div>


      <h3>📦 5. ¿Qué hook utilizar en cada caso?</h3>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Situación</th>
              <th>Hook recomendado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mostrar datos que cambian</td>
              <td><strong>useState</strong></td>
            </tr>
            <tr>
              <td>Llamar a la API al cargar la página</td>
              <td><strong>useEffect</strong> con <code>[]</code></td>
            </tr>
            <tr>
              <td>Reaccionar a un filtro/categoría/búsqueda</td>
              <td><strong>useEffect</strong> con dependencias</td>
            </tr>
            <tr>
              <td>Guardar id de intervalos / acceder a un nodo del DOM</td>
              <td><strong>useRef</strong></td>
            </tr>
            <tr>
              <td>Guardar usuario, token o idioma de toda la app</td>
              <td><strong>useContext</strong></td>
            </tr>
          </tbody>
        </table>
      </div>


      <h3>🎯 6. Estructura general de una página del Bazar</h3>

      <pre className="bloque-codigo">
{`// 1) estado local
const [productos, setProductos] = useState([]);

// 2) estado global
const { token, usuario } = useContext(AuthContext);

// 3) referencia a elementos
const buscadorRef = useRef(null);

// 4) cargar datos al montar o al cambiar filtros
useEffect(() => {
  getProductos().then(setProductos);
}, []);

// 5) render final
return (...);`}
      </pre>

      <p>
        Esta estructura se repetirá en <strong>HomePage</strong>, <strong>CatalogoPage</strong>,
        <strong>LoginPage</strong>, <strong>MisPedidosPage</strong>, etc.
      </p>


      <h3>🧪 7. Mini-ejercicios para practicar</h3>

      <ul className="lista-simple">
        <li><strong>useState</strong>: contador, input controlado, toggle de detalles.</li>
        <li><strong>useEffect</strong>: carga de API, contador con intervalo, guardar en localStorage.</li>
        <li><strong>useRef</strong>: enfocar un input, scroll a una sección, contador de renders.</li>
        <li><strong>useContext</strong>: mostrar “Login” o “Cerrar sesión” en la Navbar.</li>
      </ul>


      <h3>🎉 8. Resumen express para examen</h3>

      <ul className="lista-simple">
        <li>useState → datos que pintan UI.</li>
        <li>useEffect → acciones derivadas del estado.</li>
        <li>useRef → valores que no pintan UI + acceso al DOM.</li>
        <li>useContext → estado global sin props.</li>
      </ul>

    </article>
  </details>
</section>

      <section className="section" id="5">
  <details>
    <summary>4.5. Componentes de layout y navegación</summary>

    <article className="card">

      <h3>📘 1. Preparación: guía de frontend para los alumnos</h3>
      <p>
        Igual que hicimos con backend, recomendamos que cada alumno cree su propia 
        <strong>guía de frontend</strong>. Esta guía será su referencia para montar una tienda online 
        usando React + Vite, siguiendo la paleta, estructura y componentes definidos en el PDF 
        oficial del proyecto.
      </p>

      <div className="callout">
        <strong>Consejo docente:</strong> los alumnos comprenden y retienen mejor si ellos mismos
        reconstruyen la guía (copian, reescriben, prueban ejemplos propios).
      </div>

      <p>Puedes descargar la guía oficial aquí:</p>

      <p>
        <a 
          href="/frontend.pdf" 
          download 
          className="boton boton-primario"
        >
          📄 Descargar guía de frontend
        </a>
      </p>

      <hr />

      <h3>📐 2. Creación del Layout global (Layout.jsx)</h3>

      <p>
        El componente <code>Layout.jsx</code> es la estructura principal de toda la aplicación 
        (Navbar + contenido + Footer). Es el “esqueleto” del proyecto y se usa en todas las páginas.
      </p>

      <pre className="bloque-codigo">
{`// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="contenido-principal">
        {children}
      </main>
      <Footer />
    </>
  );
}`}
      </pre>

      <div className="callout-bonus">
        <strong>🔍 Recuerda:</strong> este Layout ya respeta la estructura del PDF oficial del 
        proyecto: navbar fijo, contenido centrado y footer accesible.
      </div>

      <hr />

      <h3>🧭 3. Creación de la barra de navegación (Navbar.jsx)</h3>

      <p>El componente <code>Navbar.jsx</code> contiene:</p>

      <ul className="lista-simple">
        <li>Logo o nombre de la tienda.</li>
        <li>Enlaces principales: Inicio, Catálogo, Mis pedidos.</li>
        <li>Estado del usuario: Login / Registro / Logout.</li>
      </ul>

      <pre className="bloque-codigo">
{`// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="cabecera">
      <div className="contenedor cabecera-contenido">

        <h1 className="cabecera-titulo">Mi Bazar</h1>

        <nav className="navegacion-principal">
          <Link to="/" className="enlace-navegacion">Inicio</Link>
          <Link to="/catalogo" className="enlace-navegacion">Catálogo</Link>
          <Link to="/mis-pedidos" className="enlace-navegacion">Mis pedidos</Link>
          <Link to="/login" className="enlace-navegacion">Iniciar sesión</Link>
        </nav>

      </div>
    </header>
  );
}`}
      </pre>

      <p>Más adelante lo conectaremos con el token y el contexto del usuario.</p>

      <div className="callout">
        <strong>Próximos pasos:</strong> en las siguientes lecciones crearemos 
        <code>Footer.jsx</code>, <code>HomePage.jsx</code> y el 
        <code>HeroCarousel.jsx</code>.
      </div>

    </article>
  </details>
</section>

<section className="section" id="b4-home-hero">
  <details>
    <summary>4.X. HomePage, Hero principal y carrusel de productos destacados</summary>

    <article className="card">

      <h3>🎯 1. Objetivo de esta sección</h3>
      <p>
        En esta lección vamos a diseñar la estructura de la <strong>página de inicio</strong> de nuestra
        tienda online (<code>HomePage.jsx</code>) y dos componentes clave:
      </p>

      <ul className="lista-simple">
        <li><strong>HeroCarousel.jsx</strong> → carrusel de productos destacados.</li>
        <li><strong>CategoryGrid.jsx</strong> → tarjetas grandes de categorías destacadas.</li>
      </ul>

      <p>
        Estos componentes serán la “portada” de la tienda y utilizarán los hooks que ya hemos
        estudiado (<code>useState</code>, <code>useEffect</code>, <code>useRef</code>) y las funciones de 
        <code>src/services/api.js</code> que antes probamos con <code>ApiTest.jsx</code>.
      </p>


      <h3>🏠 2. Estructura de <code>HomePage.jsx</code></h3>

      <p>
        La Home estará formada por tres bloques principales (según la guía de frontend del Bazar):
      </p>

      <ol className="lista-simple">
        <li><strong>Hero principal</strong> con carrusel de productos destacados.</li>
        <li><strong>Bloque de categorías destacadas</strong> (tarjetas grandes tipo “Mujer”, “Hombre”…).</li>
        <li>(Más adelante) <strong>carrusel o grid de promociones</strong>.</li>
      </ol>

      <p>
        A nivel de código, <code>HomePage.jsx</code> no hará llamadas directas a la API. En su lugar,
        delega en componentes especializados:
      </p>

      <ul className="lista-simple">
        <li><code>&lt;HeroCarousel /&gt;</code> → se encarga de llamar a la API de productos destacados.</li>
        <li><code>&lt;CategoryGrid /&gt;</code> → de momento usará categorías “dummy”; luego se podrá conectar a BD.</li>
      </ul>


      <h3>🎠 3. Componente <code>HeroCarousel.jsx</code></h3>

      <p>
        <code>HeroCarousel</code> muestra un gran bloque visual con uno o varios productos 
        destacados, siguiendo la paleta rosa/lila/verde del diseño. Su lógica:
      </p>

      <ul className="lista-simple">
        <li>Al montarse, llama a la API <code>/api/productos/destacados</code> usando <code>getProductosDestacados()</code>.</li>
        <li>Guarda los productos en un estado (<code>useState</code>).</li>
        <li>Utiliza un índice (<code>currentIndex</code>) para saber qué slide mostrar.</li>
        <li>Opcionalmente, usa un intervalo (<code>setInterval</code> + <code>useRef</code>) para cambiar de slide cada X segundos.</li>
        <li>Muestra botones o “puntitos” para navegar manualmente entre los destacados.</li>
      </ul>

      <div className="callout">
        <strong>Importante:</strong> <code>HeroCarousel</code> no decide el layout global,
        solo su propia sección. El Layout general lo sigue marcando <code>Layout.jsx</code>.
      </div>


      <h3>🧩 4. Componente <code>CategoryGrid.jsx</code></h3>

      <p>
        <code>CategoryGrid</code> muestra tarjetas grandes para las categorías principales, por
        ejemplo:
      </p>

      <ul className="lista-simple">
        <li>Mujer</li>
        <li>Hombre</li>
        <li>Niños</li>
        <li>Accesorios</li>
      </ul>

      <p>
        Cada tarjeta tendrá:
      </p>

      <ul className="lista-simple">
        <li>Nombre de la categoría.</li>
        <li>Descripción breve.</li>
        <li>Un botón o enlace “Ver productos”.</li>
      </ul>

      <p>
        En una versión avanzada, <code>CategoryGrid</code> podrá leer las categorías desde 
        la API (tabla <code>categorias</code>) y navegar a <code>/catalogo?categoria_id=X</code>. 
        En esta primera versión, usaremos datos estáticos para centrarnos en React.
      </p>


      <h3>🔗 5. Relación con <code>ApiTest.jsx</code> y <code>api.js</code></h3>

      <p>
        El componente <code>ApiTest.jsx</code> es un <strong>laboratorio</strong> que ya hemos usado para
        comprobar que el backend responde correctamente. En el frontend “real”:
      </p>

      <ul className="lista-simple">
        <li><strong>No</strong> usaremos <code>ApiTest.jsx</code> en la tienda.</li>
        <li><strong>Sí</strong> reutilizaremos todas las funciones de <code>src/services/api.js</code>:
          <code>getProductos</code>, <code>getProductoById</code>, <code>login</code>, 
          <code>getMisPedidos</code>, etc.
        </li>
        <li>
          <code>HeroCarousel</code> llamará a una función tipo <code>getProductosDestacados()</code>
          (que podemos añadir a <code>api.js</code> si aún no existe).
        </li>
      </ul>

      <div className="callout-bonus">
        <strong>Resumen arquitectónico:</strong><br />
        <code>HomePage</code> organiza la portada.<br />
        <code>HeroCarousel</code> + <code>CategoryGrid</code> son componentes especializados.<br />
        Las llamadas a la API se centralizan en <code>src/services/api.js</code>, 
        probado previamente con <code>ApiTest.jsx</code>.
      </div>

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
