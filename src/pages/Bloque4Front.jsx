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
