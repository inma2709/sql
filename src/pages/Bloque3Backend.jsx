// src/pages/Bloque3.jsx
export default function Bloque3() {
  return (
    <main id="contenido">
      {/* HERO BLOQUE 3 */}
      <section className="hero">
        <div className="contenedor">
          <span className="kicker">Bloque 3 · Backend con Node.js + MySQL</span>
          <h1>Construir un backend con Node.js, Express y MySQL</h1>
          <p className="subtitle">
            En este bloque unimos todo lo anterior: JavaScript, Node.js y bases de datos MySQL
            para crear APIs REST reales con registro, login y operaciones CRUD.
          </p>
        </div>
      </section>

      <div className="contenedor contenido-principal bloque bloque-sql">
        {/* ÍNDICE DEL BLOQUE */}
        <nav className="toc">
          <h2>📋 Contenido del Bloque 3 · Backend Node.js + MySQL</h2>
          <ol>
            <li>
              <a href="#bazar-introduccion">Introducción al proyecto Bazar</a>
            </li>
            <li>
              <a href="#b3-estructura">Estructura de la carpeta backend</a>
            </li>
            <li>
              <a href="#b3-init-script">Script de inicialización de tablas</a>
            </li>
            <li>
              <a href="#b3-leccion1">Lección 1: Servidor con Node.js y Express</a>
            </li>
            <li>
              <a href="#b3-leccion2">Lección 2: Modelo y controlador de productos (MVC + MySQL)</a>
            </li>
            <li>
              <a href="#b3-leccion4">Lección 3: Usuarios, registro y login (JWT)</a>
            </li>
            <li>
              <a href="#b3-leccion5">Lección 4: Pedidos y líneas de pedido (relación N–M)</a>
            </li>
            <li>
              <a href="#b3-tabla-intermedia">¿Por qué la tabla intermedia no tiene modelo propio?</a>
            </li>
            <li>
              <a href="#b3-leccion6">Lección 5: Middlewares y protección de rutas JWT</a>
            </li>
            <li>
              <a href="#b3-introduccion-filtros-usuario">Lección 6: Filtros y área personal del usuario</a>
            </li>
            <li>
              <a href="#b3-leccion7">Documentación completa de la API Bazar</a>
            </li>
          </ol>
        </nav>

        
        {/* ====================== 
   INTRODUCCIÓN AL PROYECTO FINAL: BAZAR
====================== */}
<section className="section" id="bazar-introduccion">
  <details open>
    <summary>Introducción. Desarrollo completo del sistema BAZAR</summary>

    <article className="card">
      <h2>📦 Proyecto Final del Bloque 3 · API REST para un sistema Bazar</h2>

      <p>
        En este proyecto vamos a construir un sistema completo de gestión para un 
        pequeño <strong>bazar</strong>. Diseñaremos la base de datos, crearemos
        las tablas desde Node.js, implementaremos una API REST profesional usando
        Express y construiremos toda la lógica necesaria para trabajar con 
        <strong>clientes</strong>, <strong>productos</strong> y <strong>pedidos</strong>.
      </p>

      <p>
        Este será uno de los proyectos principales del curso, porque reúne todo lo que 
        hemos aprendido: SQL, Node.js, Express, peticiones HTTP, controladores, modelos,
        rutas, e incluso las bases de la autenticación. Además, está diseñado para que 
        más adelante pueda conectarse con un frontend en React o una aplicación móvil.
      </p>

      <h3>🎯 ¿Qué vamos a construir?</h3>

      <ul className="lista-simple">
        <li>Una <strong>base de datos completa</strong> con sus tablas relacionadas.</li>
        <li>Un <strong>script de inicialización</strong> que creará las tablas desde Node.js.</li>
        <li>
          Una <strong>API REST</strong> capaz de gestionar clientes, productos, pedidos 
          y la relación entre ellos.
        </li>
        <li>
          Un sistema preparado para añadir más adelante 
          <strong>registro, login y autenticación</strong>.
        </li>
        <li>
          Un backend moderno siguiendo el patrón <strong>MVC</strong>:
          <br />Modelos → Controladores → Rutas → Servidor.
        </li>
      </ul>

      <h3>🗂️ Diseño de las entidades del proyecto</h3>
      <p>El sistema estará compuesto por cuatro entidades principales:</p>

      <ul className="lista-simple">
        <li>
          <strong>Clientes</strong>: usuarios que realizan pedidos.  
          Guardaremos nombre, email, contraseña (más adelante), fecha de registro...
        </li>
        <li>
          <strong>Productos</strong>: nombre, precio, stock, categoría (texto), 
          imagen_url y un campo <em>activo</em> para el borrado lógico.
        </li>
        <li>
          <strong>Pedidos</strong>: pertenecen a un cliente, incluyen fecha y 
          estado (pendiente, en_proceso, terminado).
        </li>
        <li>
          <strong>Pedidos_productos</strong>: tabla intermedia que permite que 
          un pedido tenga muchos productos y un producto pueda aparecer en muchos pedidos.
        </li>
      </ul>

      <div className="cuadro-didactico">
        <h4>💡 Relación entre las entidades</h4>
        <ul className="lista-simple">
          <li>Un cliente puede hacer muchos pedidos.</li>
          <li>Un pedido contiene muchos productos.</li>
          <li>Un producto puede estar en muchos pedidos.</li>
          <li>La relación muchos-a-muchos se representa con la tabla intermedia <strong>pedidos_productos</strong>.</li>
        </ul>
      </div>

      <h3>🛣️ ¿Por dónde empezamos? Orden correcto del proyecto</h3>

      <p>
        Para que el desarrollo sea claro, ordenado y profesional, seguiremos esta 
        secuencia exacta:
      </p>

      <ol className="lista-simple">
        <li>
          <strong>Diseñar el modelo ERL</strong> Definimos entidades, atributos y relaciones (clientes, productos, pedidos, tabla intermedia).
        </li>
        <li>
          <strong>Crear la base de datos vacía</strong>  

          Solo la BBDD (ej. <code>bazar</code>) desde phpMyAdmin.
        </li>
        <li>
          <strong> Crear un script de inicialización con Node.js</strong>  
          Este script creará todas las tablas automáticamente (clientes, productos, pedidos, pedidos_productos, categorias).
        </li>
        <li>
          <strong>Montar el proyecto Node + Express</strong>  
          Con estructura MVC: <code>config/</code>, <code>models/</code>, <code>controllers/</code>, <code>routes/</code>.
        </li>
        <li>
          <strong> Ejecutar el script</strong>  
          <code> npm run init-db </code> para que Node.js construya todas las tablas.
        </li>
        <li>
          <strong>Crear el CRUD de productos</strong>  
          Con borrado lógico, categoría y URL de imagen.
        </li>
        <li>
          <strong> Crear el CRUD de clientes</strong>  
          Preparando el sistema para registro y login.
        </li>
        <li>
          <strong> Crear el CRUD de pedidos</strong>  
          Incluye su tabla intermedia, la gestión de estados y las categorías.
        </li>
        <li>
          <strong> Añadir autenticación</strong>  
          Registro con contraseña encriptada y login con token.
        </li>
      </ol>

      <div className="nota nota-importante">
        Esta estructura será la base de un proyecto final muy vistoso, perfectamente 
        desplegable en un hosting real y ampliable después con un frontend moderno.
      </div>

      <h3>🧪 Antes de empezar… actividad rápida</h3>
      <p>
        Realiza un primer boceto del diagrama ERL con las cuatro entidades y sus 
        relaciones. No te preocupes por los tipos de datos; nos fijamos solo en 
        las conexiones entre las tablas.
      </p>

      <p>En la siguiente sección comenzaremos a crear la base del backend.</p>

    </article>
  </details>
</section>
<section className="section" id="b3-estructura">
  <details>
    <summary>Estructura de la carpeta backend</summary>

    <article className="card">
        

        <h3>🗂️ Estructura del proyecto backend</h3>

<p>
  Todo el código del backend de nuestro bazar estará dentro de una carpeta, por ejemplo 
  <code className="etiqueta-codigo">backend-bazar</code>. Esta será la estructura que iremos
  construyendo paso a paso:
</p>

<pre className="bloque-codigo">
  <code>
{`backend-bazar/
├── package.json           // Configuración del proyecto Node (scripts, dependencias...)
├── server.js              // Punto de entrada del servidor Express
├── init-db.js             // Script de inicialización: crea las tablas en MySQL
├── .env                   // Variables de entorno (datos de conexión a la BBDD, puerto...)
├── .gitignore             // Archivos/carpetas que no se suben a Git (node_modules, .env)
│
├── config/
│   └── db.js              // Configuración de la conexión a MySQL (pool)
│
├── models/                // Modelos: lógica de acceso a datos (consultas SQL)
│   ├── productos.model.js // Consultas a la tabla productos
│   ├── clientes.model.js  // Consultas a la tabla clientes
│   ├── pedidos.model.js   // Consultas a la tabla pedidos
│   └── pedidosProductos.model.js // Consultas a la tabla intermedia pedidos_productos
│
├── controllers/           // Controladores: reciben la petición y llaman a los modelos
│   ├── productos.controller.js
│   ├── clientes.controller.js
│   ├── pedidos.controller.js
│   └── auth.controller.js     // (más adelante) registro y login de clientes
│
├── routes/                // Rutas: definen las URLs de la API y métodos HTTP
│   ├── productos.routes.js
│   ├── clientes.routes.js
│   ├── pedidos.routes.js
│   └── auth.routes.js         // (más adelante) rutas de autenticación
│
└── node_modules/          // Carpeta creada por npm con las dependencias (NO se toca a mano)`}
  </code>
</pre>

<p>
  No crearemos todos los archivos de golpe: los iremos construyendo poco a poco. Primero 
  montaremos la base (<code>server.js</code>, <code>config/db.js</code>, 
  <code>init-db.js</code>), después el módulo de <strong>productos</strong>, más tarde 
  <strong>clientes</strong> y finalmente <strong>pedidos</strong> y la 
  <strong>tabla intermedia</strong>.
</p>

<div className="nota">
  Es muy importante respetar los nombres de carpetas y archivos, porque luego 
  los <code>require()</code> y los <code> import </code> dependen de esas rutas.
</div>

<h3>🧩 ¿Cómo funciona el patrón MVC en nuestro backend?</h3>

<div className="cuadro-didactico">
  <h4>Patrón MVC aplicado al proyecto Bazar</h4>
  
  <div className="cuadro-didactico__grid">
    
    <div className="cuadro-didactico__item">
      <h5>🟦 Modelo (Model)</h5>
      <p>
        Contiene la <strong>lógica de acceso a datos</strong>.  
        Aquí escribimos las consultas SQL que hablan directamente con MySQL 
        usando el <code className="etiqueta-codigo">pool</code>.
      </p>
      <p>Ejemplo: <code>productos.model.js</code></p>
      <ul className="lista-simple">
        <li>obtenerTodos()</li>
        <li>obtenerPorId()</li>
        <li>crear()</li>
        <li>actualizar()</li>
        <li>eliminar()</li>
      </ul>
    </div>

    <div className="cuadro-didactico__item">
      <h5>🟩 Controlador (Controller)</h5>
      <p>
        El controlador recibe la <strong>petición HTTP</strong>, 
        llama al modelo y devuelve la <strong>respuesta en JSON</strong>.
      </p>
      <p>Ejemplo: <code>productos.controller.js</code></p>
      <ul className="lista-simple">
        <li>getProductos()</li>
        <li>crearProducto()</li>
        <li>actualizarProducto()</li>
      </ul>
    </div>

    <div className="cuadro-didactico__item">
      <h5>🟧 Rutas (Routes)</h5>
      <p>
        Las rutas definen las <strong>URLs</strong> de la API y 
        qué controlador se ejecuta en cada caso.
      </p>
      <p>Ejemplo: <code>productos.routes.js</code></p>
      <ul className="lista-simple">
        <li>GET /api/productos</li>
        <li>POST /api/productos</li>
        <li>PUT /api/productos/:id</li>
      </ul>
    </div>

    <div className="cuadro-didactico__item">
      <h5>🟥 Servidor (server.js)</h5>
      <p>
        Es el punto de entrada de la aplicación. Configura Express, 
        activa middlewares como <code className="etiqueta-codigo">cors</code> 
        y <code className="etiqueta-codigo">express.json()</code>, y 
        enlaza las rutas al servidor.
      </p>
      <p>
        Aquí escribimos:
        <br />
        <code className="etiqueta-codigo">app.use('/api/productos', productosRoutes)</code>
      </p>
    </div>

  </div>

  <p className="cuadro-didactico__nota">
    El flujo de una petición es:<br />
    <strong>Cliente → Ruta → Controlador → Modelo → MySQL → Modelo → Controlador → Ruta → Cliente</strong>
  </p>
</div>

 </article>
  </details>
</section>

        
 


       {/* ====================== 
  3.1 CREAR SERVIDOR CON EXPRESS
====================== */}
<section className="section" id="b3-leccion1">
  <details open>
    <summary>Crear un servidor con Node.js y Express</summary>

    <article className="card">
      <h2>Crear un servidor con Node.js y Express</h2>
      <p>
        En esta lección vamos a crear nuestro <strong>primer servidor backend</strong> con
        Node.js y Express, siguiendo una estructura profesional muy parecida a la que usamos
        con Mongoo: archivo <code className="etiqueta-codigo">.env</code>, carpeta{" "}
        <code className="etiqueta-codigo">config</code> para la conexión y carpeta{" "}
        <code className="etiqueta-codigo">routes</code> para las rutas.
      </p>

      <div className="nota nota-importante">
        📌 <strong>Antes de empezar</strong>: se da por hecho que tienes Node.js instalado
        en tu equipo y que sabes abrir una terminal en la carpeta del proyecto.
      </div>

      <h3>🎯 Objetivos de la lección</h3>
      <ul className="lista-simple">
        <li>Entender qué es un servidor backend con Node.js.</li>
        <li>Crear una estructura de proyecto limpia (config, routes, etc.).</li>
        <li>Instalar y configurar Express, cors, dotenv y mysql2.</li>
        <li>Crear un servidor básico que responda a peticiones HTTP.</li>
        <li>Preparar un fichero de rutas para seguir el modelo MVC.</li>
      </ul>

      <div className="cuadro-didactico">
        <h4>Conceptos clave</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Servidor</h5>
            <p>
              Programa que está siempre <strong>“escuchando”</strong> peticiones de los clientes
              (por ejemplo, el navegador) y devuelve una respuesta.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Express</h5>
            <p>
              Librería de Node.js que simplifica la creación de servidores y rutas.
              Nos permite crear APIs REST de forma rápida y ordenada.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Puerto</h5>
            <p>
              Número que indica por dónde “entra” la comunicación al servidor.
              Ejemplo: <code>http://localhost:3000</code>.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Ruta</h5>
            <p>
              Camino de la URL al que el servidor responde: por ejemplo,
              <code className="etiqueta-codigo">/</code> o{" "}
              <code className="etiqueta-codigo">/api/productos</code>.
            </p>
          </div>
        </div>
      </div>

      {/* 1️⃣ Paso 1: Crear la estructura del proyecto */}
      <h3>1️⃣ Paso 1: Crear la estructura del proyecto</h3>
      <p>
        Primero vamos a crear la carpeta del proyecto y una estructura mínima que luego iremos
        completando:
      </p>

      <pre className="bloque-codigo">
        <code>
{`mkdir backend-sql
cd backend-sql

mkdir config
mkdir routes`}
        </code>
      </pre>

      <p>La estructura inicial quedará así:</p>

      <pre className="bloque-codigo">
        <code>
{`backend-sql/
├── config/
└── routes/`}
        </code>
      </pre>

      <div className="nota nota-importante">
        Esta organización es clave para trabajar luego con el modelo MVC:{" "}
        <strong>config</strong> para la conexión a la base de datos,{" "}
        <strong>routes</strong> para las rutas, y más adelante añadiremos{" "}
        <strong>controllers</strong> y <strong>models</strong>.
      </div>

      {/* 2️⃣ Paso 2: Crear el paquete y las dependencias */}
    <h3>2️⃣ Paso 2: Crear el paquete y las dependencias</h3>

<p>
  Ahora convertimos esta carpeta en un proyecto Node y añadimos las dependencias básicas
  que usaremos en todos nuestros backends:
</p>

<ul className="lista-simple">
  <li>
    <code className="etiqueta-codigo">express</code>: para crear el servidor y las rutas.
  </li>
  <li>
    <code className="etiqueta-codigo">cors</code>: para permitir que un frontend (por ejemplo,
    un proyecto en React en <code>http://localhost:5173</code>) pueda hacer peticiones a este
    backend aunque estén en orígenes distintos.
  </li>
  <li>
    <code className="etiqueta-codigo">dotenv</code>: para leer variables de entorno desde
    el archivo <code>.env</code>.
  </li>
  <li>
    <code className="etiqueta-codigo">mysql2</code>: para conectarnos a MySQL usando{" "}
    <code>async/await</code>.
  </li>
  <li>
    <code className="etiqueta-codigo">nodemon</code>: (solo desarrollo) reinicia el servidor
    automáticamente cada vez que guardemos cambios.
  </li>
</ul>

<pre className="bloque-codigo">
  <code>
{`npm init -y

npm install express cors dotenv mysql2
npm install --save-dev nodemon`}
  </code>
</pre>

<div className="callout">
  <strong>Recuerda:</strong> las dependencias normales van en{" "}
  <code>dependencies</code> y las de desarrollo, como nodemon, en{" "}
  <code>devDependencies</code>.
</div>

<h4>🛠 Activar ES Modules (import/export)</h4>
<p>
  Por defecto, Node usa <strong>require</strong> y <strong>module.exports</strong>.  
  Sin embargo, en nuestros proyectos vamos a trabajar con <strong>ES Modules</strong>,  
  es decir, <code>import</code> y <code>export</code>.
</p>

<p>Para activar este modo, abrimos el archivo <code>package.json</code> y añadimos la propiedad:</p>

<pre className="bloque-codigo">
  <code>
{`{
  "name": "bazar-backend",
  "version": "1.0.0",
  "main": "server.js",
  "type": "module",   // ← Añadir esta línea
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.18.0",
    "mysql2": "^3.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}`}
  </code>
</pre>

<p>
  A partir de ahora podremos usar en todas nuestras rutas y archivos:
</p>

<pre className="bloque-codigo">
  <code>
{`import express from 'express';
import productosRouter from './routes/productos.routes.js';`}
  </code>
</pre>


      {/* 3️⃣ Paso 3: Crear .env, config/db.js y .gitignore */}
      <h3>3️⃣ Paso 3: Crear el archivo .env, config/db.js y .gitignore</h3>

      <h4>📄 3.1. Archivo <code>.env</code></h4>
      <p>
        En la raíz del proyecto creamos un archivo llamado{" "}
        <code className="etiqueta-codigo">.env</code> con los datos de la base de datos
        y el puerto del servidor:
      </p>

      <pre className="bloque-codigo">
        <code>
{`DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=tienda
DB_PORT=3306

PORT=3000`}
        </code>
      </pre>

      <div className="nota nota-importante">
        🔒 <strong>Muy importante:</strong> el archivo <code>.env</code> nunca se sube a GitHub.
        Contiene datos sensibles como contraseñas.
      </div>

      <h4>🛠️ 3.2. Archivo <code>config/db.js</code></h4>
      <p>
        Dentro de la carpeta <code className="etiqueta-codigo">config</code> creamos el archivo{" "}
        <code className="etiqueta-codigo">db.js</code> con la configuración de la conexión
        a MySQL:
      </p>
<pre className="bloque-codigo">
  <code>
{`// config/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;`}
  </code>
</pre>

      <div className="cuadro-didactico">
        <h4>¿Qué hace este archivo?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>mysql2/promise</h5>
            <p>
              Nos permite usar <code>async/await</code> para trabajar con MySQL
              de forma más clara.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Pool de conexiones</h5>
            <p>
              Crea un grupo de conexiones reutilizables en lugar de abrir una nueva
              cada vez. Es más eficiente para aplicaciones reales.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Variables de entorno</h5>
            <p>
              Los datos de conexión se leen desde <code>.env</code>, nunca se escriben
              “a mano” en el código.
            </p>
          </div>
        </div>
      </div>

      <h4>📁  Archivo <code>.gitignore</code></h4>
      <p>
        En la raíz del proyecto creamos un archivo{" "}
        <code className="etiqueta-codigo">.gitignore</code> para indicar a Git qué carpetas
        y archivos no deben subirse al repositorio:
      </p>

      <pre className="bloque-codigo">
        <code>
{`node_modules
.env`}
        </code>
      </pre>

      {/* 4️⃣ Paso 4: Crear el servidor (server.js) */}
      <h3>4️⃣ Paso 4: Crear el servidor (server.js)</h3>

      <p>
        Ahora sí, creamos el archivo principal del servidor{" "}
        <code className="etiqueta-codigo">server.js</code> en la raíz del proyecto:
      </p>

     <pre className="bloque-codigo">
  <code>
{`// server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import pool from './config/db.js';
import productosRoutes from './routes/productos.routes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta raíz de prueba
app.get('/', (req, res) => {
  res.send('API Node + MySQL - Bloque 3');
});

// Ruta para probar la conexión con la base de datos
app.get('/api/probar-bbdd', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS fecha');
    res.json({
      ok: true,
      mensaje: 'Conexión correcta con la base de datos',
      fecha: rows[0].fecha
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      mensaje: 'Error al conectar con la base de datos',
      error: error.message
    });
  }
});

// Rutas de productos
app.use('/api/productos', productosRoutes);

// Arrancar el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`Servidor escuchando en http://localhost:\${PORT}\`);
});`}
  </code>
</pre>


      <h4>⚙️ Scripts en package.json</h4>
      <p>
        En <code className="etiqueta-codigo">package.json</code> añadimos estos scripts
        para arrancar el servidor:
      </p>

      <pre className="bloque-codigo">
        <code>
{`"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}`}
        </code>
      </pre>

      {/* 5️⃣ Paso 5: Crear el archivo de rutas en /routes */}
      <h3>5️⃣ Paso 5: Crear el archivo de rutas en la carpeta routes</h3>

      <p>
        Por último, preparamos la carpeta <code className="etiqueta-codigo">routes</code> para
        seguir el modelo MVC. Creamos el archivo{" "}
        <code className="etiqueta-codigo">routes/productos.routes.js</code> con una ruta
        de prueba:
      </p>

    <pre className="bloque-codigo">
  <code>
{`// routes/productos.routes.js
import { Router } from 'express';

const router = Router();

// GET /api/productos
router.get('/', (req, res) => {
  res.json({
    ok: true,
    mensaje: 'Aquí devolveremos la lista de productos desde la base de datos'
  });
});

export default router;`}
  </code>
</pre>

      <div className="nota nota-importante">
        Más adelante, cuando implementemos el modelo MVC, estas rutas llamarán a{" "}
        <strong>controladores</strong> que hablarán con la base de datos y devolverán
        los datos de verdad.
      </div>

      <h3>🧪 Actividad guiada</h3>
      <p>Comienza a:</p>
      <ul className="lista-simple">
        <li>Monten toda la estructura tal y como se indica en los 5 pasos.</li>
        <li>Arranquen el servidor con <code>npm run dev</code>.</li>
        <li>
          Prueben en el navegador:
          <ul className="lista-simple">
            <li><code>http://localhost:3000/</code></li>
            <li><code>http://localhost:3000/api/probar-bbdd</code></li>
            <li><code>http://localhost:3000/api/productos</code></li>
          </ul>
        </li>
      </ul>

      <h3>✅ Resumen de la lección</h3>
      <ul className="lista-simple">
        <li>Hemos creado la estructura básica del proyecto backend.</li>
        <li>Hemos inicializado el proyecto Node y añadido las dependencias principales.</li>
        <li>Hemos configurado <code>.env</code>, <code>config/db.js</code> y{" "}
          <code>.gitignore</code>.
        </li>
        <li>Hemos creado un servidor con Express que se conecta a MySQL.</li>
        <li>Hemos preparado un archivo de rutas para productos, listo para el modelo MVC.</li>
      </ul>

    
    </article>
  </details>
</section>

       {/* ====================== 
  3.X SCRIPT DE INICIALIZACIÓN DE TABLAS
====================== */}
<section className="section" id="b3-init-script">
  <details>
    <summary>Script de inicialización para crear las tablas del proyecto</summary>

    <article className="card">
        
      <h3>🧩 Actividad: definir el modelo entidad–relación del bazar</h3>

<p>
A partir de la descripción del proyecto <strong>bazar</strong>, define el modelo
entidad–relación (ERL) usando rectángulos para las entidades y óvalos para los
atributos. No te preocupes todavía por el código SQL, solo por el diseño.
</p>

Te lo reescribo ya con **tabla `categorias` independiente** y la referencia desde `productos` 👇

```jsx
<p>Requisitos del sistema:</p>

<ul className="lista-simple">
  <li>La base de datos debe gestionar <strong>clientes</strong>, <strong>productos</strong>, <strong>pedidos</strong> y <strong>categorías</strong>.</li>
  <li>Un <strong>cliente</strong> puede hacer muchos pedidos, pero un pedido solo puede pertenecer a un cliente.</li>
  <li>Cada <strong>pedido</strong> puede incluir muchos productos y cada producto puede aparecer en muchos pedidos.</li>
  <li>Para representar la relación muchos a muchos entre pedidos y productos, se utilizará una tabla intermedia (por ejemplo, <code>lineas_pedido</code> o <code>pedidos_productos</code>).</li>
  <li>Los <strong>productos</strong> deben almacenar: nombre, precio, stock, una referencia a una <strong>categoría</strong> (no el texto directamente) y una URL de imagen.</li>
  <li>Las <strong>categorías</strong> se guardarán en una tabla propia (por ejemplo, <code>categorias</code>) con su identificador y nombre.</li>
  <li>Los <strong>pedidos</strong> deben tener fecha y estado, con valores como: pendiente, en_proceso, terminado.</li>
  <li>Los <strong>clientes</strong> deben poder registrarse más adelante, por lo que habrá que guardar al menos nombre, email y una contraseña (password).</li>
  <li>Queremos poder aplicar un <strong>borrado lógico</strong> de productos, de modo que se puedan desactivar sin borrarlos físicamente.</li>
</ul>

<p>
  Con esta información, realiza el diagrama ERL indicando:
</p>

<ul className="lista-simple">
  <li>Las <strong>entidades</strong> principales (clientes, productos, pedidos, categorías y la tabla intermedia).</li>
  <li>Los <strong>atributos</strong> más importantes de cada entidad (incluyendo la clave primaria).</li>
  <li>Las <strong>relaciones</strong> entre entidades y sus <strong>cardinalidades</strong> (1 a N, N a M). Por ejemplo:
    <ul className="lista-simple">
      <li>Un pedido pertenece a un cliente (1–N).</li>
      <li>Un producto pertenece a una categoría (1–N).</li>
      <li>Un pedido se relaciona con muchos productos a través de la tabla intermedia (N–M).</li>
    </ul>
  </li>
</ul>

<div className="nota">
  Recuerda: todavía no estamos pensando en tipos de datos concretos
  (VARCHAR, INT...), solo en <strong>qué información</strong> queremos almacenar
  y cómo se relacionan las entidades entre sí.
</div>

<h2> Script de inicialización para crear las tablas del proyecto</h2>

<p>
  En este bloque vamos a trabajar con varias tablas relacionadas:
  <strong> clientes</strong>, <strong>productos</strong>,{" "}
  <strong>pedidos</strong>, <strong>categorias</strong> y una tabla intermedia{" "}
  <strong>pedidos_productos</strong> (o <em>lineas_pedido</em>) que nos permitirá
  reflejar que un pedido puede tener muchos productos y un producto puede aparecer en muchos pedidos.
</p>

<p>
  Los productos tendrán una columna que apunte a la tabla <strong>categorias</strong>, 
  de forma que cada producto pertenezca a una categoría concreta. Además, los productos
  admitirán una <strong>URL de imagen</strong>, los pedidos tendrán <strong>estado</strong>{" "}
  (<em>pendiente, en_proceso, terminado</em>) y <strong>fecha</strong>, y los clientes 
  podrán registrarse más adelante para autenticarse y ver sus pedidos.
</p>
```


      <div className="cuadro-didactico">
        <h4>¿Por qué usar un script de inicialización?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Repetible</h5>
            <p>
              El script se puede ejecutar en cualquier equipo para
              crear las tablas con la misma estructura.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Rápido</h5>
            <p>
              No hace falta ir creando tablas a mano en phpMyAdmin: basta con lanzar
              un comando de Node.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Controlado</h5>
            <p>
              El código que crea las tablas queda guardado en el proyecto, por lo que
              es fácil revisarlo, versionarlo en Git y mejorarlo.
            </p>
          </div>
        </div>
      </div>

      <h3>1️⃣ ¿Debe existir la base de datos antes de ejecutar el script?</h3>

      <p>
        En este curso vamos a seguir una estrategia sencilla y didáctica:
      </p>

      <ul className="lista-simple">
        <li>
          La <strong>base de datos</strong> (por ejemplo{" "}
          <code className="etiqueta-codigo">bazar</code>) se crea una sola vez desde
          <strong> phpMyAdmin</strong> o con un comando SQL simple:
          <pre className="bloque-codigo">
            <code>{`CREATE DATABASE bazar;`}</code>
          </pre>
        </li>
        <li>
          El archivo <code className="etiqueta-codigo">.env</code> debe apuntar a esa
          base de datos:
          <pre className="bloque-codigo">
            <code>
{`DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=bazar
DB_PORT=3306

PORT=3000`}
            </code>
          </pre>
        </li>
        <li>
          El <strong>script de inicialización</strong> se encarga de crear{" "}
          <em>las tablas dentro de esa base de datos</em>: clientes, productos,
          pedidos y la tabla intermedia de pedidos.
        </li>
      </ul>

      <div className="nota nota-importante">
        Técnicamente se podría crear también la base de datos desde Node, pero es más claro separar:
        <strong> 1) crear la BBDD en phpMyAdmin</strong> y{" "}
        <strong>2) dejar que el script cree las tablas</strong>.
      </div>

      <h3>2️⃣ Crear el archivo <code> init-db.js</code></h3>

      <p>
        Vamos a crear un archivo llamado{" "}
        <code className="etiqueta-codigo">init-db.js</code> en la raíz del proyecto.
        Este archivo se conectará a MySQL usando el mismo{" "}
        <code className="etiqueta-codigo">pool</code> que ya tenemos en{" "}
        <code className="etiqueta-codigo">config/db.js</code> y ejecutará los{" "}
        <code className="etiqueta-codigo">CREATE TABLE</code> necesarios.
      </p>

      <pre className="bloque-codigo">
  <code>
{`// init-db.js
import 'dotenv/config';
import pool from './config/db.js';

async function crearTablas() {
  try {
    // TABLA CLIENTES
    await pool.query(\`
      CREATE TABLE IF NOT EXISTS clientes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        password VARCHAR(255) NULL,
        creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    \`);

    // TABLA CATEGORIAS
    await pool.query(\`
      CREATE TABLE IF NOT EXISTS categorias (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL
      )
    \`);

    // TABLA PRODUCTOS
    await pool.query(\`
      CREATE TABLE IF NOT EXISTS productos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        precio DECIMAL(10,2) NOT NULL,
        stock INT DEFAULT 0,
        categoria_id INT,
        imagen_url VARCHAR(255) DEFAULT NULL,
        activo TINYINT(1) DEFAULT 1,
        FOREIGN KEY (categoria_id) REFERENCES categorias(id)
      )
    \`);

    // TABLA PEDIDOS
    await pool.query(\`
      CREATE TABLE IF NOT EXISTS pedidos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        cliente_id INT NOT NULL,
        estado ENUM('pendiente','en_proceso','terminado') DEFAULT 'pendiente',
        fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (cliente_id) REFERENCES clientes(id)
      )
    \`);

    // TABLA INTERMEDIA PEDIDOS_PRODUCTOS
    await pool.query(\`
      CREATE TABLE IF NOT EXISTS pedidos_productos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        pedido_id INT NOT NULL,
        producto_id INT NOT NULL,
        cantidad INT DEFAULT 1,
        FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
        FOREIGN KEY (producto_id) REFERENCES productos(id)
      )
    \`);

    console.log('✅ Tablas creadas (si no existían).');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al crear las tablas:', error);
    process.exit(1);
  }
}

crearTablas();`}
  </code>
</pre>


      <div className="callout">
        En lecciones posteriores detallaremos la estructura de cada tabla y la
        relación entre ellas (clientes, productos, pedidos y la tabla intermedia).
        De momento, lo importante es entender la <strong>idea del script</strong>:
        un único archivo que prepara el “esqueleto” de la base de datos.
      </div>

      <h3>3️⃣ Añadir un script en <code>package.json</code></h3>

      <p>
        Para no tener que escribir{" "}
        <code className="etiqueta-codigo">node init-db.js</code> cada vez, añadimos
        un script cómodo en <code className="etiqueta-codigo">package.json</code>:
      </p>

      <pre className="bloque-codigo">
        <code>
{`"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "init-db": "node init-db.js"
}`}
        </code>
      </pre>

      <p>
        A partir de ahora, para crear las tablas del proyecto, basta con ejecutar:
      </p>

      <pre className="bloque-codigo">
        <code>npm run init-db</code>
      </pre>

      <div className="nota nota-importante">
        Recomendación:
        <ul className="lista-simple">
          <li>Primero: crear la BBDD <code>bazar</code> en phpMyAdmin.</li>
          <li>
            Comprobar que el archivo <code>.env</code> apunta a{" "}
            <code>DB_NAME=bazar</code>.
          </li>
          <li>
            Ejecutar <code>npm run init-db</code> y revisar en phpMyAdmin que se
            han creado las tablas.
          </li>
        </ul>
      </div>

      <h3>🧪 Actividad guiada</h3>
      <ul className="lista-simple">
        <li>
          Crea la base de datos{" "}
          <code className="etiqueta-codigo">bazar</code> y configure su{" "}
          <code>.env</code>.
        </li>
        <li>
          Que añadan el archivo <code>init-db.js</code> al proyecto y el script{" "}
          <code>"init-db"</code> en <code>package.json</code>.
        </li>
        <li>
          Que ejecuten <code>npm run init-db</code> y comprueben en phpMyAdmin las
          tablas <strong>clientes</strong>, <strong>productos</strong>,{" "}
          <strong>pedidos</strong> y <strong>pedidos_productos</strong>.
        </li>
      </ul>

      <h3>✅ Resumen de la sección</h3>
      <ul className="lista-simple">
        <li>Hemos visto qué tablas formarán parte del proyecto final (bazar).</li>
        <li>Hemos entendido la utilidad de un script de inicialización.</li>
        <li>
          Hemos creado un archivo <code>init-db.js</code> que construye las tablas
          necesarias si no existen.
        </li>
        <li>
          Hemos añadido el comando <code>npm run init-db</code> para automatizar
          la creación de tablas.
        </li>
        <li>
          Hemos aclarado que la base de datos (por ejemplo,{" "}
          <code>bazar</code>) debe existir antes de ejecutar el script.
        </li>
      </ul>


    </article>
  </details>
</section>

        {/* ====================== 
  3.2 MODELO Y CONTROLADOR DE PRODUCTOS (MVC + MYSQL)
====================== */}
<section className="section" id="b3-leccion2">
  <details>
    <summary> Modelo y controlador de productos (MVC + MySQL)</summary>

    <article className="card">
      <h2> Modelo y controlador de productos (MVC + MySQL)</h2>

      <p>
        En la lección anterior dejamos listo nuestro servidor con Express, la conexión a MySQL
        y una ruta básica de productos. Ahora vamos a dar el siguiente paso: crear el{" "}
        <strong>modelo</strong> y el <strong>controlador</strong> de productos siguiendo el
        patrón <strong>MVC</strong>.
      </p>

      <div className="cuadro-didactico">
        <h4>Recordatorio: ¿qué es MVC?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Modelo (Model)</h5>
            <p>
              Contiene la <strong>lógica de datos</strong>. En nuestro caso: las consultas
              SQL a la tabla <code className="etiqueta-codigo">productos</code>.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Vista (View)</h5>
            <p>
              Es lo que ve el usuario. En una API REST normalmente es el{" "}
              <strong>frontend</strong> (por ejemplo, React), no el backend.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Controlador (Controller)</h5>
            <p>
              Recibe la petición, llama al modelo y devuelve la respuesta en formato JSON.
              Es el “intermediario” entre la ruta y la base de datos.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Ruta (Route)</h5>
            <p>
              Define la URL y el método HTTP (<code>GET</code>, <code>POST</code>, etc.) y
              llama al controlador correspondiente.
            </p>
          </div>
        </div>
      </div>

      <h3>🎯 Objetivos de la lección</h3>
      <ul className="lista-simple">
        <li>Crear las carpetas <code>models</code> y <code>controllers</code>.</li>
        <li>Programar el modelo de productos que hable con MySQL.</li>
        <li>Crear el controlador de productos que use el modelo.</li>
        <li>Actualizar las rutas para usar el controlador.</li>
        <li>Probar el flujo completo: Ruta → Controlador → Modelo → MySQL → JSON.</li>
      </ul>

      {/* 1️⃣ Paso 1: Crear carpetas models y controllers */}
      <h3>1️⃣ Paso 1: Crear carpetas models y controllers</h3>
      <p>
        Desde la raíz del proyecto, creamos dos carpetas nuevas para organizar el código
        según el patrón MVC:
      </p>

      <pre className="bloque-codigo">
        <code>
{`mkdir models
mkdir controllers`}
        </code>
      </pre>

      <p>La estructura del proyecto empieza a tomar esta forma:</p>
      <pre className="bloque-codigo">
        <code>
{`backend-sql/
├── config/
│   └── db.js
├── controllers/
├── models/
├── routes/
│   └── productos.routes.js
├── .env
├── .gitignore
├── package.json
└── server.js`}
        </code>
      </pre>

      <div className="nota">
        Más adelante añadiremos más modelos y controladores (por ejemplo,{" "}
        <code>usuarios</code>) siguiendo exactamente la misma estructura.
      </div>

      {/* 2️⃣ Paso 2: Modelo de productos (models/productos.model.js) */}
      <h3>2️⃣ Paso 2: Crear el modelo de productos</h3>

      <p>
        En esta lección reunimos todo lo que hemos construido hasta ahora para dejar 
        completamente operativa la API REST de <strong>productos</strong>: modelo, 
        controlador y rutas trabajando juntos.
      </p>

      <p>
        Nuestra API permitirá realizar las cuatro operaciones básicas (CRUD) sobre 
        la tabla <code className="etiqueta-codigo">productos</code> de la base de datos 
        <code className="etiqueta-codigo">bazar</code>.
      </p>

      <h3>🧱 Resumen de la estructura</h3>
      <pre className="bloque-codigo">
        <code>
{`backend-bazar/
├── models/
│   └── productos.model.js
├── controllers/
│   └── productos.controller.js
└── routes/
    └── productos.routes.js`}
        </code>
      </pre>

      <h3>🔗 Endpoints del módulo de productos</h3>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Método</th>
              <th>URL</th>
              <th>¿Qué hace?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>GET</code></td>
              <td><code>/api/productos</code></td>
              <td>Devuelve el listado de productos activos.</td>
            </tr>
            <tr>
              <td><code>GET</code></td>
              <td><code>/api/productos/:id</code></td>
              <td>Devuelve un producto concreto por su id.</td>
            </tr>
            <tr>
              <td><code>POST</code></td>
              <td><code>/api/productos</code></td>
              <td>Crea un nuevo producto en la base de datos.</td>
            </tr>
            <tr>
              <td><code>PUT</code></td>
              <td><code>/api/productos/:id</code></td>
              <td>Actualiza los datos de un producto existente.</td>
            </tr>
            <tr>
              <td><code>DELETE</code></td>
              <td><code>/api/productos/:id</code></td>
              <td>
                Realiza un <strong>borrado lógico</strong> (marca el producto como inactivo).
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>📥 Ejemplo de petición POST</h3>
      <p>
        Para crear un producto nuevo enviaremos una petición{" "}
        <code className="etiqueta-codigo">POST</code> a{" "}
        <code className="etiqueta-codigo">/api/productos</code> con un cuerpo JSON similar a:
      </p>

      <pre className="bloque-codigo">
        <code>
{`POST http://localhost:3000/api/productos
Content-Type: application/json

{
  "nombre": "Mochila escolar",
  "precio": 24.90,
  "stock": 15,
  "categoria_id": 1,
  "activo": 1
}`}
        </code>
      </pre>

      <div className="nota">
        Recuerda que en el controlador validamos que <strong>nombre</strong> y{" "}
        <strong>precio</strong> son obligatorios, y que el modelo se encarga de 
        aplicar valores por defecto a <code>stock</code> y <code>activo</code> cuando sea necesario.
      </div>

      <h3>🧪 Actividad de comprobación</h3>
      <ul className="lista-simple">
        <li>
          Usa Postman, Thunder Client o una extensión similar para probar todas las rutas
          del CRUD de productos.
        </li>
        <li>
          Crea al menos 3 productos distintos y comprueba en phpMyAdmin que se guardan correctamente.
        </li>
        <li>
          Realiza un <code>DELETE</code> sobre un producto y verifica que su campo{" "}
          <code>activo</code> pasa de <code>1</code> a <code>0</code> (borrado lógico).
        </li>
      </ul>

      <h3>✅ ¿Qué hemos conseguido?</h3>
      <ul className="lista-simple">
        <li>Tenemos un módulo de productos completo en patrón MVC.</li>
        <li>
          Nuestra API REST responde correctamente a las operaciones CRUD sobre la tabla{" "}
          <code>productos</code>.
        </li>
        <li>
          Hemos preparado la base para que el frontend pueda consumir estos datos y mostrar
          un catálogo de productos real.
        </li>
      </ul>

      <h2>Detalle del código</h2>
      <p>
        A continuación, el detalle del código de cada parte del módulo de productos:
        modelo, controlador y rutas.
      </p>

      <h3>📦 Modelo de productos (models/productos.model.js)</h3>

      <p>
        El modelo será el encargado de hacer las consultas SQL a la tabla{" "}
        <code className="etiqueta-codigo">productos</code>.  
        Creamos el archivo{" "}
        <code className="etiqueta-codigo">models/productos.model.js</code> con este contenido:
      </p>

  <pre className="bloque-codigo">
  <code>
{`// models/productos.model.js
import pool from '../config/db.js';

// Obtener todos los productos activos
export async function obtenerTodos() {
  const [rows] = await pool.query(
    \`SELECT id, nombre, precio, stock, categoria_id, activo
     FROM productos
     WHERE activo = 1\`
  );
  return rows;
}

// Obtener un producto por ID
export async function obtenerPorId(id) {
  const [rows] = await pool.query(
    \`SELECT id, nombre, precio, stock, categoria_id, activo
     FROM productos
     WHERE id = ?\`,
    [id]
  );
  return rows[0]; // undefined si no existe
}

// Crear un nuevo producto
export async function crear({ nombre, precio, stock = 0, categoria_id = null, activo = 1 }) {
  const [result] = await pool.query(
    \`INSERT INTO productos (nombre, precio, stock, categoria_id, activo)
     VALUES (?, ?, ?, ?, ?)\`,
    [nombre, precio, stock, categoria_id, activo]
  );

  return {
    id: result.insertId,
    nombre,
    precio,
    stock,
    categoria_id,
    activo
  };
}

// Actualizar un producto
export async function actualizar(id, { nombre, precio, stock, categoria_id, activo }) {
  await pool.query(
    \`UPDATE productos
     SET nombre = ?, precio = ?, stock = ?, categoria_id = ?, activo = ?
     WHERE id = ?\`,
    [nombre, precio, stock, categoria_id, activo, id]
  );

  return { id, nombre, precio, stock, categoria_id, activo };
}

// Borrado lógico (activo = 0)
export async function eliminar(id) {
  await pool.query(
    \`UPDATE productos 
     SET activo = 0 
     WHERE id = ?\`,
    [id]
  );

  return { id, eliminado: true };
}

export default {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};`}
  </code>
</pre>

      <div className="cuadro-didactico">
        <h4>Qué hace cada función</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>obtenerTodos()</h5>
            <p>Devuelve un array con todos los productos de la tabla.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>obtenerPorId(id)</h5>
            <p>
              Devuelve un único producto o <code>undefined</code> si no existe el ID.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>crear(datos)</h5>
            <p>
              Inserta un nuevo producto y devuelve el objeto creado con su {" "}
              <code>id</code> asignado.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>actualizar(id, datos)</h5>
            <p>
              Modifica un producto existente y devuelve los datos actualizados.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>eliminar(id)</h5>
            <p>Elimina el producto y devuelve solo el id eliminado.</p>
          </div>
        </div>
      </div>
<pre className="bloque-codigo">
  <code>
{`// controllers/productos.controller.js
import * as ProductosModel from '../models/productos.model.js';

// GET /api/productos
export async function getProductos(req, res) {
  try {
    const productos = await ProductosModel.obtenerTodos();
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ mensaje: 'Error al obtener productos' });
  }
}

// GET /api/productos/:id
export async function getProductoPorId(req, res) {
  try {
    const { id } = req.params;
    const producto = await ProductosModel.obtenerPorId(id);

    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    res.json(producto);
  } catch (error) {
    console.error('Error al obtener producto:', error);
    res.status(500).json({ mensaje: 'Error al obtener producto' });
  }
}

// POST /api/productos
export async function crearProducto(req, res) {
  try {
    const { nombre, precio, stock, categoria_id, activo } = req.body;

    if (!nombre || precio == null) {
      return res
        .status(400)
        .json({ mensaje: 'Los campos nombre y precio son obligatorios' });
    }

    const nuevoProducto = await ProductosModel.crear({
      nombre,
      precio,
      stock,
      categoria_id,
      activo
    });

    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ mensaje: 'Error al crear producto' });
  }
}

// PUT /api/productos/:id
export async function actualizarProducto(req, res) {
  try {
    const { id } = req.params;
    const { nombre, precio, stock, categoria_id, activo } = req.body;

    const productoExiste = await ProductosModel.obtenerPorId(id);
    if (!productoExiste) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    const productoActualizado = await ProductosModel.actualizar(id, {
      nombre,
      precio,
      stock,
      categoria_id,
      activo
    });

    res.json(productoActualizado);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ mensaje: 'Error al actualizar producto' });
  }
}

// DELETE /api/productos/:id  (borrado lógico)
export async function eliminarProducto(req, res) {
  try {
    const { id } = req.params;

    const productoExiste = await ProductosModel.obtenerPorId(id);
    if (!productoExiste) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    await ProductosModel.eliminar(id);
    res.json({ mensaje: 'Producto eliminado correctamente (borrado lógico)' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ mensaje: 'Error al eliminar producto' });
  }
}

export default {
  getProductos,
  getProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};`}
  </code>
</pre>

      <div className="nota">
        Observa cómo el controlador <strong>no sabe SQL</strong>: solo llama a funciones
        del modelo. Esto hace que el código sea más fácil de mantener y de probar.
      </div>

      {/* 4️⃣ Paso 4: Actualizar las rutas para usar el controlador */}
      <h3>4️⃣ Paso 4: Actualizar las rutas de productos</h3>

      <p>
        Ahora actualizamos{" "}
        <code className="etiqueta-codigo">routes/productos.routes.js</code> para que
        use las funciones del controlador en lugar de devolver texto fijo.
      </p>

     <pre className="bloque-codigo">
  <code>
{`// routes/productos.routes.js
import { Router } from 'express';
import {
  getProductos,
  getProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} from '../controllers/productos.controller.js';

const router = Router();

// GET /api/productos
router.get('/', getProductos);

// GET /api/productos/:id
router.get('/:id', getProductoPorId);

// POST /api/productos
router.post('/', crearProducto);

// PUT /api/productos/:id
router.put('/:id', actualizarProducto);

// DELETE /api/productos/:id
router.delete('/:id', eliminarProducto);

export default router;`}
  </code>
</pre>


      <div className="cuadro-didactico">
        <h4>Flujo completo de una petición</h4>
        <p>
          Cuando hacemos una petición <code>GET /api/productos</code>:
        </p>
        <ol className="lista-simple">
          <li>La ruta <code>/api/productos</code> captura la petición.</li>
          <li>Llama al controlador <code>getProductos</code>.</li>
          <li>El controlador llama al modelo <code>obtenerTodos()</code>.</li>
          <li>El modelo consulta MySQL mediante <code>pool.query()</code>.</li>
          <li>El modelo devuelve los datos al controlador.</li>
          <li>El controlador responde al cliente con JSON.</li>
        </ol>
      </div>

      {/* 5️⃣ Paso 5: Probar el CRUD de productos */}
      <h3>5️⃣ Paso 5: Probar el CRUD de productos</h3>

      <p>
        Para probar que todo funciona, podemos usar herramientas como{" "}
        <strong>Thunder Client</strong>, <strong>Postman</strong> o{" "}
        <code>curl</code> en la terminal. Ejemplos:
      </p>

      <ul className="lista-simple">
        <li>
          <strong>Listar todos los productos</strong>:  
          <code className="etiqueta-codigo">GET http://localhost:3000/api/productos</code>
        </li>
        <li>
          <strong>Ver un producto por ID</strong>:  
          <code className="etiqueta-codigo">GET http://localhost:3000/api/productos/1</code>
        </li>
        <li>
          <strong>Crear un producto</strong>:  
          <code className="etiqueta-codigo">POST http://localhost:3000/api/productos</code>  
          con cuerpo JSON:
          <pre className="bloque-codigo">
            <code>
{`{
  "nombre": "Teclado mecánico",
  "precio": 59.90,
  "stock": 20,
  "categoria_id": 1,
  "activo": 1
}
`}
            </code>
          </pre>
        </li>
      </ul>

      <div className="nota nota-importante">
        Recuerda tener el servidor arrancado con{" "}
        <code className="etiqueta-codigo">npm run dev</code> y la base de datos{" "}
        <code className="etiqueta-codigo">tienda</code> con la tabla{" "}
        <code className="etiqueta-codigo">productos</code> correctamente creada.
      </div>

      <div className="cuadro-didactico">
  <h4>¿Qué diferencia hay entre Modelo y Controlador?</h4>

  <p>
    En una API con Node.js, Express y MySQL separamos el código en capas
    para que sea más fácil de entender y mantener.
  </p>

  <ul>
    <li>
      <strong>Modelo (Model)</strong>: es la capa que se comunica con la 
      base de datos. Contiene funciones que hacen consultas SQL
      (<code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, 
      <code>DELETE</code>) y devuelven los datos al controlador.
      No usa <code>req</code> ni <code>res</code>.
    </li>
    <li>
      <strong>Controlador (Controller)</strong>: es la capa que recibe
      la petición HTTP desde Express. Lee los datos de 
      <code>req.params</code>, <code>req.body</code>, valida la información,
      llama a las funciones del modelo y envía la respuesta al cliente
      con <code>res.json()</code> y los códigos de estado HTTP.
    </li>
  </ul>

  <p>
    En resumen: el <strong>controlador</strong> decide qué hacer con la 
    petición y el <strong>modelo</strong> se encarga de hablar con la 
    base de datos.
  </p>
</div>


      <h3>✅ Resumen de la lección</h3>
      <ul className="lista-simple">
        <li>Hemos creado las carpetas <code>models</code> y <code>controllers</code>.</li>
        <li>
          Hemos programado el <strong>modelo de productos</strong> que se comunica con
          MySQL mediante <code>mysql2</code>.
        </li>
        <li>
          Hemos creado el <strong>controlador de productos</strong> que recibe la petición
          y devuelve una respuesta JSON.
        </li>
        <li>
          Hemos actualizado las rutas para usar el controlador y completar el flujo MVC.
        </li>
        <li>
          Ya tenemos un CRUD de productos funcional en nuestra API REST. En las siguientes
          lecciones aplicaremos la misma estructura a <strong>usuarios</strong> y
          autenticación.
        </li>
      </ul>

      
    </article>
  </details>
</section>

<section className="section" id="b3-leccion4">
  <details>
    <summary> Usuarios, registro y login (JWT)</summary>
    <article className="card">
      <h2>Usuarios, registro y login (JWT)</h2>

      <p>
        En esta lección vamos a añadir a nuestra API la posibilidad de que un{" "}
        <strong>cliente</strong> se registre y pueda iniciar sesión. Para ello
        usaremos dos herramientas muy habituales en el desarrollo backend:
      </p>

      <ul className="lista-simple">
        <li>
          <code className="etiqueta-codigo">bcryptjs</code> para{" "}
          <strong>encriptar contraseñas</strong> (generar un hash seguro).
        </li>
        <li>
          <code className="etiqueta-codigo">jsonwebtoken</code> para generar{" "}
          <strong>tokens JWT</strong> que identifiquen al usuario en futuras
          peticiones.
        </li>
      </ul>

      <div className="cuadro-didactico">
        <h4>📌 ¿Qué es lo que vamos a conseguir?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Registro</h5>
            <p>
              Un cliente envía nombre, email y contraseña. Guardamos la
              contraseña <strong>encriptada</strong> (hash) en la base de datos,
              nunca en texto plano.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Login</h5>
            <p>
              El cliente envía email y contraseña. Comprobamos la contraseña con{" "}
              <code>bcrypt</code> y, si es correcta, devolvemos un{" "}
              <strong>JWT</strong>.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Token</h5>
            <p>
              El token se enviará en las siguientes peticiones (cabecera{" "}
              <code>Authorization</code>) para acceder a rutas protegidas como{" "}
              <code>/api/mis-pedidos</code>.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Seguridad</h5>
            <p>
              El frontend <strong>nunca ve el hash</strong> de la contraseña ni
              conoce el <code>JWT_SECRET</code>. Todo eso se gestiona en el
              servidor y se guarda en variables de entorno.
            </p>
          </div>
        </div>
      </div>

      <div className="nota">
        <p>
          En este bloque suponemos que tu proyecto backend tiene{" "}
          <code>"type": "module"</code> en <code>package.json</code>. Por eso
          usamos <code>import</code> y <code>export</code> en lugar de{" "}
          <code>require</code> y <code>module.exports</code>.
        </p>
      </div>

      <h3>3️⃣ Modelo de clientes orientado a registro y login</h3>
      <p>
        Antes de crear el controlador de autenticación, necesitamos un{" "}
        <strong>modelo</strong> que sepa hablar con la tabla{" "}
        <code>clientes</code>. En este proyecto, el frontend es el{" "}
        <strong>front del cliente de la tienda</strong> (usuarios finales), así
        que, de momento, solo necesitamos dos operaciones:
      </p>

      <ul className="lista-simple">
        <li>
          <strong>crearCliente</strong>: registrar un nuevo usuario.
        </li>
        <li>
          <strong>buscarPorEmail</strong>: localizar un usuario al hacer login.
        </li>
      </ul>

      <p>
        No tiene sentido (por ahora) implementar métodos como{" "}
        <code>obtenerTodos()</code> o <code>eliminarCliente()</code> en la API
        pública, porque el cliente de la tienda nunca va a ver el listado de
        todos los usuarios ni va a borrar usuarios. Esos métodos podrían tener
        sentido en un <strong>panel de administración</strong>, pero eso sería
        otro proyecto o, al menos, otro rol de usuario.
      </p>

      <p>Veamos el modelo de clientes adaptado a ES Modules:</p>

      <pre className="bloque-codigo">
        <code>{`// models/clientes.model.js
// Importamos el pool de conexiones a la base de datos MySQL.
// Este pool se configuró previamente en config/db.js
import pool from '../config/db.js';

/**
 * Buscar cliente por email
 * ------------------------
 * - Recibe un email.
 * - Lanza una consulta SELECT con un placeholder (?).
 * - Devuelve el primer registro que coincida (o undefined si no hay resultados).
 */
export async function buscarPorEmail(email) {
  // Ejecutamos la consulta de forma parametrizada:
  // El ? se sustituye por el valor de [email].
  const [rows] = await pool.query(
    'SELECT id, nombre, email, password, creado_en FROM clientes WHERE email = ?',
    [email]
  );

  // Devolvemos solo la primera fila.
  // Si no hay filas, rows[0] será undefined.
  return rows[0];
}

/**
 * Crear nuevo cliente
 * -------------------
 * - Recibe un objeto con nombre, email y passwordHash.
 * - Inserta un nuevo registro en la tabla clientes.
 * - Devuelve un objeto "limpio" con la información básica del cliente creado.
 */
export async function crearCliente({ nombre, email, passwordHash }) {
  // INSERT parametrizado. Los ? se rellenan con [nombre, email, passwordHash]
  const [result] = await pool.query(
    'INSERT INTO clientes (nombre, email, password) VALUES (?, ?, ?)',
    [nombre, email, passwordHash]
  );

  // Devolvemos un objeto con los datos principales.
  // result.insertId contiene el id autoincrement generado por MySQL.
  return {
    id: result.insertId,
    nombre,
    email
  };
}`}</code>
      </pre>

      <div className="cuadro-didactico">
        <h4>🧩 ¿Qué hace y qué no hace este modelo?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Lo que sí hace</h5>
            <p>
              Proporciona solo los métodos que necesita nuestro{" "}
              <strong>front del cliente</strong>: registro y login. Nada más.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Lo que no hace</h5>
            <p>
              No expone métodos para listar, actualizar o borrar clientes, porque
              esas operaciones son más propias de un panel de administración,
              no de la web pública de la tienda.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>return → controlador</h5>
            <p>
              El <code>return</code> de cada función del modelo es exactamente lo
              que recibirá el <strong>controlador</strong>. El modelo nunca llama
              a <code>res.json</code>; solo devuelve datos.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Seguridad</h5>
            <p>
              El modelo maneja el campo <code>password</code> pero, gracias al
              controlador, <strong>nunca se devuelve al frontend</strong>. Solo se
              utiliza para comparar contraseñas en el login.
            </p>
          </div>
        </div>
      </div>

      <h3>4️⃣ Controlador de autenticación (registro y login)</h3>
      <p>
        Creamos ahora un controlador específico para la autenticación, por
        ejemplo{" "}
        <code className="etiqueta-codigo">controllers/auth.controller.js</code>.
        Recuerda que estamos usando ES Modules.
      </p>

      <pre className="bloque-codigo">
        <code>{`// controllers/auth.controller.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as ClientesModel from '../models/clientes.model.js';

// Función auxiliar para generar un token JWT para un cliente
function generarToken(cliente) {
  return jwt.sign(
    {
      id: cliente.id,
      email: cliente.email,
      nombre: cliente.nombre
    },
    process.env.JWT_SECRET, // Clave secreta guardada en .env
    {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    }
  );
}

// POST /api/auth/register
export async function register(req, res) {
  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
      return res
        .status(400)
        .json({ mensaje: 'Nombre, email y contraseña son obligatorios' });
    }

    // ¿Ya existe un cliente con ese email?
    const existente = await ClientesModel.buscarPorEmail(email);
    if (existente) {
      return res
        .status(409)
        .json({ mensaje: 'Ya existe un usuario con ese email' });
    }

    // Encriptar contraseña (hash)
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Crear cliente (el modelo devuelve un objeto sin el password)
    const nuevo = await ClientesModel.crearCliente({ nombre, email, passwordHash });

    // Generar token JWT para el nuevo usuario
    const token = generarToken(nuevo);

    res.status(201).json({
      mensaje: 'Usuario registrado correctamente',
      usuario: nuevo,
      token
    });
  } catch (error) {
    console.error('Error en register:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
}

// POST /api/auth/login
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ mensaje: 'Email y contraseña son obligatorios' });
    }

    // Buscar el cliente por email
    const cliente = await ClientesModel.buscarPorEmail(email);
    if (!cliente) {
      return res.status(401).json({ mensaje: 'Credenciales no válidas' });
    }

    // Comparar la contraseña en texto plano con el hash almacenado
    const passwordCorrecta = await bcrypt.compare(password, cliente.password);
    if (!passwordCorrecta) {
      return res.status(401).json({ mensaje: 'Credenciales no válidas' });
    }

    // Generar token a partir de los datos del cliente
    const token = generarToken(cliente);

    // No devolvemos el password ni el hash
    res.json({
      mensaje: 'Login correcto',
      usuario: {
        id: cliente.id,
        nombre: cliente.nombre,
        email: cliente.email
      },
      token
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
}`}</code>
      </pre>

      <div className="cuadro-didactico">
        <h4>🔐 ¿Qué hace exactamente este controlador?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Registro</h5>
            <p>
              Comprueba que el email no exista, encripta la contraseña con{" "}
              <code>bcrypt.hash</code> y crea el cliente usando el modelo.
              Después genera un token JWT y lo devuelve junto con los datos
              básicos del usuario.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Login</h5>
            <p>
              Busca al usuario por email, compara la contraseña con{" "}
              <code>bcrypt.compare</code> y, si coincide, genera y devuelve el
              token. Si algo falla, responde con el código HTTP adecuado.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Token</h5>
            <p>
              El token contiene el <code>id</code>, <code>email</code> y{" "}
              <code>nombre</code> del cliente. No contiene la contraseña ni
              datos especialmente sensibles. Sirve para identificar al usuario
              en futuras peticiones.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Errores</h5>
            <p>
              Se devuelven códigos de estado HTTP adecuados: 400 (datos
              incompletos), 401 (credenciales no válidas), 409 (email duplicado),
              500 (error servidor). Esto facilita mucho depurar desde el frontend.
            </p>
          </div>
        </div>
      </div>

      <h3>5️⃣ Rutas de autenticación</h3>
      <p>
        Creamos un archivo de rutas específico para auth:{" "}
        <code className="etiqueta-codigo">routes/auth.routes.js</code>, también
        usando ES Modules.
      </p>

      <pre className="bloque-codigo">
        <code>{`// routes/auth.routes.js
import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';

const router = Router();

// Registro
router.post('/register', register);

// Login
router.post('/login', login);

export default router;`}</code>
      </pre>

      <p>
        Y en <code className="etiqueta-codigo">server.js</code> montamos este
        grupo de rutas bajo <code>/api/auth</code> es una ampliacion del server que tienes.
      </p>

      <pre className="bloque-codigo">
        <code>{`// server.js (fragmento relevante)
import express from 'express';
import authRoutes from './routes/auth.routes.js';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// ...otros middlewares y rutas...

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// ...listen, etc.`}</code>
      </pre>

      <h3>6️⃣ Probar registro y login</h3>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Operación</th>
              <th>Método</th>
              <th>URL</th>
              <th>Cuerpo (JSON)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Registro</td>
              <td>
                <code>POST</code>
              </td>
              <td>
                <code>http://localhost:3000/api/auth/register
</code>
              </td>
              <td>
                <pre className="bloque-codigo bloque-codigo--mini">
                  <code>{`{
  "nombre": "Ana",
  "email": "ana@example.com",
  "password": "secreto123"
}`}</code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>Login</td>
              <td>
                <code>POST</code>
              </td>
              <td>
                <code>/api/auth/login</code>
              </td>
              <td>
                <pre className="bloque-codigo bloque-codigo--mini">
                  <code>{`{
  "email": "ana@example.com",
  "password": "secreto123"
}`}</code>
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="nota nota-importante">
        Después de un login correcto, copia el <strong>token</strong> que
        devuelve la API. El frontend deberá enviarlo en la cabecera{" "}
        <code>Authorization: Bearer &lt;token&gt;</code> para acceder a rutas
        protegidas, como por ejemplo <code>/api/mis-pedidos</code>.
      </div>

      <h3>🧪 Actividad guiada</h3>
      <ul className="lista-simple">
        <li>
          Registra al menos dos usuarios distintos y comprueba que se guardan en
          la tabla <code>clientes</code>.
        </li>
        <li>
          Haz login con un usuario correcto y con uno incorrecto para observar
          las diferencias en las respuestas (códigos 200, 401, etc.).
        </li>
        <li>
          Identifica en la tabla <code>clientes</code> el hash generado por{" "}
          <code>bcrypt</code> y compáralo con la contraseña original. Comenta
          por qué es imposible recuperar la contraseña a partir del hash.
        </li>
        <li>
          Desde el frontend, guarda el token en memoria (contexto, estado,
          etc.) y úsalo para llamar a una ruta protegida de prueba.
        </li>
      </ul>

      <h3>✅ Resumen de la lección</h3>
      <ul className="lista-simple">
        <li>
          Hemos creado la tabla <code>clientes</code> pensando en registro y
          login.
        </li>
        <li>
          Hemos utilizado <code>bcryptjs</code> para encriptar y verificar
          contraseñas.
        </li>
        <li>
          Hemos usado <code>jsonwebtoken</code> para generar tokens JWT que
          identifican al usuario.
        </li>
        <li>
          Hemos creado un modelo mínimo de clientes con los métodos necesarios
          para nuestro <strong>front del cliente</strong>.
        </li>
        <li>
          Hemos creado un controlador y unas rutas de autenticación (
          <code>/api/auth/register</code> y <code>/api/auth/login</code>).
        </li>
        <li>
          Hemos preparado la base para añadir, más adelante, rutas protegidas
          solo para usuarios autenticados, sin necesidad de exponer operaciones
          de administración que el cliente no necesita.
        </li>
      </ul>
    </article>
  </details>
</section>



<section className="section" id="b3-leccion5">
  <details>
    <summary> Pedidos y líneas de pedido (relación N–M)</summary>
    <article className="card">
      <h2>Pedidos y líneas de pedido (relación N–M)</h2>

      <p>
        En esta lección vamos a crear el módulo de <strong>pedidos</strong> de nuestro
        proyecto Bazar. Es una parte clave, porque conecta a los <strong>clientes</strong>
        con los <strong>productos</strong> a través de una relación 
        <strong> muchos a muchos</strong>.
      </p>

      <p>
        Un <strong>pedido</strong> pertenece a un cliente, tiene una 
        <strong>fecha</strong> y un <strong>estado</strong> (pendiente, en_proceso,
        terminado), y contiene una o varias <strong>líneas de pedido</strong>.
        Cada línea indica qué producto se ha comprado y en qué cantidad.
      </p>

      <div className="cuadro-didactico">
        <h4>📌 Resumen de las tablas implicadas</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>clientes</h5>
            <p>Quién hace el pedido (ya la usamos en registro y login).</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>productos</h5>
            <p>Qué se está vendiendo (ya tenemos su CRUD completo).</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>pedidos</h5>
            <p>Cada compra que realiza un cliente, con fecha y estado.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>pedidos_productos</h5>
            <p>
              Tabla intermedia: qué productos hay en cada pedido y en qué cantidad.
            </p>
          </div>
        </div>
      </div>

      <h3>1️⃣ Recordatorio de la estructura de las tablas</h3>
      <p>
        Las tablas que usaremos para esta lección tienen una estructura similar a la siguiente
        (normalmente creada desde nuestro script <code>init-db.js</code>):
      </p>

      <pre className="bloque-codigo">
        <code>
{`CREATE TABLE IF NOT EXISTS pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  estado ENUM('pendiente','en_proceso','terminado') DEFAULT 'pendiente',
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE IF NOT EXISTS pedidos_productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pedido_id INT NOT NULL,
  producto_id INT NOT NULL,
  cantidad INT DEFAULT 1,
  FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id)
);`}
        </code>
      </pre>

      <p>
        Es importante entender que <code>pedidos_productos</code> es la tabla que resuelve
        la relación N–M entre <strong>pedidos</strong> y <strong>productos</strong>.
      </p>

      <h3>2️⃣ ¿Qué queremos que haga nuestra API de pedidos?</h3>
      <p>El módulo de pedidos tendrá, al menos, estas operaciones:</p>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Operación</th>
              <th>Método y URL</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Crear pedido</td>
              <td><code>POST /api/pedidos</code></td>
              <td>Crea un pedido vacío para un cliente (normalmente, el usuario logueado).</td>
            </tr>
            <tr>
              <td>Añadir producto</td>
              <td><code>POST /api/pedidos/:id/productos</code></td>
              <td>Añade una línea de pedido (producto + cantidad) a un pedido existente.</td>
            </tr>
            <tr>
              <td>Ver detalles</td>
              <td><code>GET /api/pedidos/:id</code></td>
              <td>Devuelve el pedido con todas sus líneas y productos.</td>
            </tr>
            <tr>
              <td>Pedidos de un cliente</td>
              <td><code>GET /api/pedidos/cliente/:clienteId</code></td>
              <td>Listado de pedidos de un cliente concreto.</td>
            </tr>
            <tr>
              <td>Cambiar estado</td>
              <td><code>PUT /api/pedidos/:id/estado</code></td>
              <td>Cambia el estado del pedido (pendiente, en_proceso, terminado).</td>
            </tr>
          </tbody>
        </table>
      </div>

     

      <h3>3️⃣ Modelo de pedidos</h3>
      <p>
        Empezamos por el <strong>modelo</strong>, que se encargará de hablar con MySQL.
        Crearemos el archivo <code className="etiqueta-codigo">models/pedidos.model.js</code>.
      </p>

   <pre className="bloque-codigo">
  <code>
{`// models/pedidos.model.js
// ------------------------------------------------------
// MODELO DE PEDIDOS (ES MODULES)
// ------------------------------------------------------
// Aquí centralizamos toda la lógica relacionada con la
// gestión de pedidos y sus líneas en la base de datos.
//
// Este modelo forma parte del backend del cliente de la tienda,
// por lo que solo implementamos las operaciones que éste necesita
// (crear pedido, añadir productos, consultar pedidos...).
// ------------------------------------------------------

import pool from '../config/db.js';

/**
 * Crear un pedido nuevo para un cliente
 * ------------------------------------------------------
 * Crea la "cabecera" del pedido en la tabla pedidos.
 * Solo necesita el ID del cliente autenticado.
 *
 * Devuelve un objeto con:
 *  - id: ID del pedido creado
 *  - cliente_id
 *  - estado inicial ("pendiente")
 */
export async function crearPedido(clienteId) {
  const [result] = await pool.query(
    'INSERT INTO pedidos (cliente_id) VALUES (?)',
    [clienteId]
  );

  return {
    id: result.insertId,
    cliente_id: clienteId,
    estado: 'pendiente'
  };
}

/**
 * Añadir un producto al pedido (línea de pedido)
 * ------------------------------------------------------
 * Inserta una línea en la tabla pedidos_productos.
 * Esta tabla funciona como tabla intermedia N:M entre
 * pedidos y productos.
 *
 * Parámetros:
 *  - pedidoId
 *  - productoId
 *  - cantidad
 */
export async function agregarProductoAPedido({ pedidoId, productoId, cantidad }) {
  const [result] = await pool.query(
    'INSERT INTO pedidos_productos (pedido_id, producto_id, cantidad) VALUES (?, ?, ?)',
    [pedidoId, productoId, cantidad]
  );

  return {
    id: result.insertId,
    pedido_id: pedidoId,
    producto_id: productoId,
    cantidad
  };
}

/**
 * Obtener un pedido por ID (solo cabecera)
 * ------------------------------------------------------
 * Devuelve la información general del pedido:
 *  - cliente_id
 *  - estado
 *  - fecha
 *
 * Si no existe → retorna undefined.
 */
export async function obtenerPedidoPorId(id) {
  const [rows] = await pool.query(
    \`SELECT p.id, p.cliente_id, p.estado, p.fecha
     FROM pedidos p
     WHERE p.id = ?\`,
    [id]
  );
  return rows[0];
}

/**
 * Obtener las líneas de un pedido con información del producto
 * ------------------------------------------------------
 * JOIN entre:
 *   - pedidos_productos (líneas)
 *   - productos (nombre, precio, imagen...)
 *
 * Devuelve un array de líneas de pedido.
 */
export async function obtenerLineasDePedido(idPedido) {
  const [rows] = await pool.query(
    \`SELECT 
        pp.id,
        pp.cantidad,
        pr.id AS producto_id,
        pr.nombre AS producto_nombre,
        pr.precio AS producto_precio,
        pr.imagen_url AS producto_imagen
      FROM pedidos_productos pp
      JOIN productos pr ON pp.producto_id = pr.id
      WHERE pp.pedido_id = ?\`,
    [idPedido]
  );
  return rows;
}

/**
 * Obtener todos los pedidos de un cliente
 * ------------------------------------------------------
 * Devuelve una lista de pedidos del cliente autenticado,
 * ordenados por fecha (más recientes primero).
 */
export async function obtenerPedidosDeCliente(clienteId) {
  const [rows] = await pool.query(
    \`SELECT id, cliente_id, estado, fecha
     FROM pedidos
     WHERE cliente_id = ?
     ORDER BY fecha DESC\`,
    [clienteId]
  );
  return rows;
}

/**
 * Actualizar el estado de un pedido
 * ------------------------------------------------------
 * Permite actualizar el estado del pedido (pendiente, pagado,
 * enviado, entregado, cancelado…).
 *
 * Devuelve un objeto confirmando el cambio.
 */
export async function actualizarEstado(idPedido, nuevoEstado) {
  await pool.query(
    'UPDATE pedidos SET estado = ? WHERE id = ?',
    [nuevoEstado, idPedido]
  );

  return { id: idPedido, estado: nuevoEstado };
}
`}
  </code>
</pre>
<div className="callout"> <p> <strong>¿Por qué este modelo está tan estructurado?</strong> Cada función representa una operación concreta sobre los pedidos: crear uno, añadir productos, obtener la cabecera, obtener las líneas o actualizar su estado. De esta forma el controlador puede combinar estas funciones fácilmente para construir rutas limpias y profesionales. </p> <p> Además, recuerda que estamos desarrollando el <strong>frontend de cliente</strong>, por lo que no tiene sentido implementar funciones de administración como <em>"obtener todos los pedidos del sistema"</em> o <em>"modificar pedidos ajenos"</em>. Cada modelo en una API profesional debe ofrecer exactamente lo que ese rol de usuario necesita, y no más. </p> </div>

      <div className="cuadro-didactico">
        <h4>🧠 Ideas clave del modelo</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Separar cabecera y líneas</h5>
            <p>
              <code>obtenerPedidoPorId</code> trae los datos generales del pedido,
              mientras que <code>obtenerLineasDePedido</code> trae cada producto
              y su cantidad.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>JOIN con productos</h5>
            <p>
              En <code>obtenerLineasDePedido</code> hacemos un{" "}
              <code>JOIN</code> para obtener el nombre, precio e imagen del producto
              directamente desde la tabla <code>productos</code>.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Estado del pedido</h5>
            <p>
              <code>actualizarEstado</code> nos permite cambiar entre 
              pendiente, en_proceso y terminado sin tocar otras columnas.
            </p>
          </div>
        </div>
      </div>

      <h3>4️⃣ Controlador de pedidos</h3>
      <p>
        Ahora creamos el <strong>controlador</strong> que usará el modelo y devolverá
        respuestas JSON. Archivo:{" "}
        <code className="etiqueta-codigo">controllers/pedidos.controller.js</code>.
      </p>

  <pre className="bloque-codigo">
  <code>
{`// controllers/pedidos.controller.js
// ------------------------------------------------------
// CONTROLADOR DE PEDIDOS (ES MODULES)
// ------------------------------------------------------
// Un controlador recibe la petición del usuario, llama al
// modelo correspondiente y devuelve una respuesta JSON.
// ------------------------------------------------------

import * as PedidosModel from '../models/pedidos.model.js';


// ======================================================
// POST /api/pedidos
// Crear un pedido para un cliente
// ======================================================
export async function crearPedido(req, res) {
  try {
    const { cliente_id } = req.body;

    // Validación básica
    if (!cliente_id) {
      return res.status(400).json({
        mensaje: 'cliente_id es obligatorio'
      });
    }

    // Creamos el pedido llamando al MODELO
    const pedido = await PedidosModel.crearPedido(cliente_id);

    res.status(201).json(pedido);
  } catch (error) {
    console.error('Error al crear pedido:', error);
    res.status(500).json({ mensaje: 'Error al crear pedido' });
  }
}



// ======================================================
// POST /api/pedidos/:id/productos
// Añadir producto (línea) a un pedido
// ======================================================
export async function agregarProducto(req, res) {
  try {
    const { id } = req.params;
    const { producto_id, cantidad } = req.body;

    if (!producto_id || !cantidad) {
      return res.status(400).json({
        mensaje: 'producto_id y cantidad son obligatorios'
      });
    }

    // Creamos una línea del pedido
    const linea = await PedidosModel.agregarProductoAPedido({
      pedidoId: id,
      productoId: producto_id,
      cantidad
    });

    res.status(201).json(linea);
  } catch (error) {
    console.error('Error al agregar producto al pedido:', error);
    res.status(500).json({ mensaje: 'Error al agregar producto al pedido' });
  }
}



// ======================================================
// GET /api/pedidos/:id
// Obtener un pedido completo (cabecera + líneas)
// ======================================================
export async function obtenerPedido(req, res) {
  try {
    const { id } = req.params;

    // 1) Obtenemos la cabecera
    const pedido = await PedidosModel.obtenerPedidoPorId(id);

    if (!pedido) {
      return res.status(404).json({
        mensaje: 'Pedido no encontrado'
      });
    }

    // 2) Obtenemos las líneas (JOIN con productos)
    const lineas = await PedidosModel.obtenerLineasDePedido(id);

    res.json({
      pedido,
      lineas
    });
  } catch (error) {
    console.error('Error al obtener pedido:', error);
    res.status(500).json({ mensaje: 'Error al obtener pedido' });
  }
}



// ======================================================
// GET /api/pedidos/cliente/:clienteId
// Obtener todos los pedidos de un cliente
// ======================================================
export async function obtenerPedidosDeCliente(req, res) {
  try {
    const { clienteId } = req.params;

    const pedidos = await PedidosModel.obtenerPedidosDeCliente(clienteId);

    res.json(pedidos);
  } catch (error) {
    console.error('Error al obtener pedidos de cliente:', error);
    res.status(500).json({
      mensaje: 'Error al obtener pedidos de cliente'
    });
  }
}




// ======================================================
// PUT /api/pedidos/:id/estado
// Cambiar estado de un pedido
// ======================================================
export async function actualizarEstado(req, res) {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    if (!estado) {
      return res.status(400).json({
        mensaje: 'El campo estado es obligatorio'
      });
    }

    // Verificamos que el pedido existe
    const existe = await PedidosModel.obtenerPedidoPorId(id);
    if (!existe) {
      return res.status(404).json({
        mensaje: 'Pedido no encontrado'
      });
    }

    const actualizado = await PedidosModel.actualizarEstado(id, estado);

    res.json(actualizado);
  } catch (error) {
    console.error('Error al actualizar estado del pedido:', error);
    res.status(500).json({
      mensaje: 'Error al actualizar estado del pedido'
    });
  }
}
`}
  </code>
</pre>

      

      <h3>5️⃣ Rutas de pedidos</h3>
      <p>
        Por último, creamos el archivo{" "}
        <code className="etiqueta-codigo">routes/pedidos.routes.js</code> para definir
        las URLs de la API que manejarán pedidos.
      </p>

      <pre className="bloque-codigo">
  <code>
{`// routes/pedidos.routes.js
// ------------------------------------------------------
// RUTAS DE PEDIDOS (ES MODULES)
// ------------------------------------------------------
// Conecta las URLs HTTP con las funciones del controlador.
// ------------------------------------------------------

import { Router } from 'express';
import {
  crearPedido,
  agregarProducto,
  obtenerPedido,
  obtenerPedidosDeCliente,
  actualizarEstado
} from '../controllers/pedidos.controller.js';

const router = Router();

// Crear pedido
router.post('/', crearPedido);

// Añadir producto a un pedido
router.post('/:id/productos', agregarProducto);

// Obtener un pedido completo
router.get('/:id', obtenerPedido);

// Obtener pedidos de un cliente
router.get('/cliente/:clienteId', obtenerPedidosDeCliente);

// Actualizar el estado del pedido
router.put('/:id/estado', actualizarEstado);

export default router;
`}
  </code>
</pre>


      <p>
        Y en <code className="etiqueta-codigo">server.js</code> añadimos la ruta base 
        para este módulo:
      </p>

      <pre className="bloque-codigo">
  <code>
{`// server.js (fragmento)
import express from 'express';
import pedidosRoutes from './routes/pedidos.routes.js';

const app = express();

app.use(express.json());

// Montamos el módulo de pedidos
app.use('/api/pedidos', pedidosRoutes);
`}
  </code>
</pre>

      <h3>6️⃣ Ejemplo de uso del flujo de pedidos</h3>

      <ol className="lista-simple">
        <li>
          <strong>Crear un pedido</strong> (por ahora indicamos el{" "}
          <code>cliente_id</code> a mano):
          <pre className="bloque-codigo">
            <code>
{`POST http://localhost:3000/api/pedidos
Content-Type: application/json

{
  "cliente_id": 1
}`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Añadir productos</strong> al pedido creado (por ejemplo, id = 5):
          <pre className="bloque-codigo">
            <code>
{`POST http://localhost:3000/api/pedidos/5/productos
Content-Type: application/json

{
  "producto_id": 2,
  "cantidad": 3
}`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Ver el pedido completo</strong>:
          <pre className="bloque-codigo">
            <code>
{`GET http://localhost:3000/api/pedidos/5`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Ver todos los pedidos de un cliente</strong>:
          <pre className="bloque-codigo">
            <code>
{`GET http://localhost:3000/api/pedidos/cliente/1`}
            </code>
          </pre>
        </li>
      </ol>

      <div className="callout"> <p> Cuando trabajamos con una API profesional, siempre separamos el código en capas: <strong>modelo → controlador → rutas</strong>. Esta estructura permite que el código sea limpio, escalable y fácil de mantener. </p> <p> En este capítulo, el controlador se encarga de: <ul> <li>validar lo que llega del frontend</li> <li>llamar al modelo (base de datos)</li> <li>gestionar errores</li> <li>devolver una respuesta JSON limpia</li> </ul> </p> <p> Gracias a los <strong>ES Modules</strong> (<code>import</code> / <code>export</code>) el código es más moderno y compatible con React, Vite y la mayoría de herramientas actuales. Además, separar las rutas en un archivo distinto permite añadir más módulos (productos, clientes, login, etc.) sin complicar <code>server.js</code>. </p> </div>

      <h3>🧪 Actividad guiada</h3>
      <ul className="lista-simple">
        <li>Crea al menos dos pedidos para un mismo cliente y añade varios productos a cada pedido.</li>
        <li>Prueba a cambiar el estado de un pedido de <em>pendiente</em> a <em>en_proceso</em> y luego a <em>terminado</em>.</li>
        <li>
          Diseña, como ejercicio extra, una ruta <code>GET /api/pedidos</code> que liste 
          todos los pedidos del sistema (solo para administrador).
        </li>
      </ul>

      <h3>✅ Resumen de la lección</h3>
      <ul className="lista-simple">
        <li>Hemos creado el modelo de pedidos y líneas de pedido.</li>
        <li>Hemos implementado el controlador de pedidos con las operaciones más importantes.</li>
        <li>Hemos definido las rutas de la API para crear, consultar y actualizar pedidos.</li>
        <li>Hemos completado la relación N–M entre pedidos y productos a través de la tabla intermedia.</li>
        <li>Tenemos ya una base de backend muy completa para un proyecto final de tipo ecommerce.</li>
      </ul>
    </article>
  </details>
</section>
{/* ======================
   ¿POR QUÉ LA TABLA INTERMEDIA NO TIENE MODELO PROPIO?
====================== */}
<section className="section" id="b3-tabla-intermedia">
  <details>
    <summary> ¿Por qué la tabla intermedia no tiene modelo ni controlador propio?</summary>

    <article className="card">
      <h2>📌 ¿Por qué la tabla <code>pedidos_productos</code> no tiene modelo ni controlador independiente?</h2>

      <p>
        En el módulo de <strong>pedidos</strong> hemos visto que existe una tabla
        intermedia llamada <code className="etiqueta-codigo">pedidos_productos</code>.
        Esta tabla permite representar la relación <strong>muchos a muchos</strong> entre
        <strong>pedidos</strong> y <strong>productos</strong>.
      </p>

      <p>Una duda habitual es:</p>

      <div className="callout">
        <strong>“¿Esta tabla no debería tener su propio modelo o controlador?”</strong>
      </div>

      <p>
        La respuesta es <strong>no</strong>. Y a continuación explicamos por qué,
        con ejemplos claros y comparaciones didácticas.
      </p>

      <h3>1️⃣ ¿Qué es realmente una tabla intermedia?</h3>

      <p>
        Una tabla intermedia (también llamada <em>tabla puente</em> o 
        <em>tabla de relación</em>) existe únicamente para conectar dos entidades
        principales que están relacionadas de forma 
        <strong>muchos a muchos</strong>.
      </p>

      <pre className="bloque-codigo">
        <code>
{`pedidos (1) ───── (N) pedidos_productos (N) ───── (1) productos`}
        </code>
      </pre>

      <p>
        Su función es unir registros, no representar una entidad con vida propia.
      </p>

      <div className="cuadro-didactico">
        <h4>🧠 Características de una tabla intermedia</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>No tiene significado por sí misma</h5>
            <p>
              Nadie “compra una línea de pedido”. Lo que se compra es un pedido
              que contiene productos.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>No se consulta de forma aislada</h5>
            <p>
              No existe una URL como <code>/api/lineas</code>.  
              Siempre se consulta dentro del contexto de un pedido.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>No se crea sola</h5>
            <p>
              Solo se inserta cuando se añade un producto a un pedido ya existente.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>No tiene comportamiento propio</h5>
            <p>
              No hay operaciones “crear línea”, “actualizar línea”, “listar líneas”
              fuera del pedido.
            </p>
          </div>
        </div>
      </div>

      <h3>2️⃣ Entonces… ¿dónde se gestiona?</h3>

      <p>
        En el <strong>modelo de pedidos</strong>, porque todas sus operaciones dependen
        directamente de un pedido concreto.
      </p>

      <pre className="bloque-codigo">
        <code>
{`// Ejemplo dentro de pedidos.model.js

async function agregarProductoAPedido({ pedidoId, productoId, cantidad }) {
  return pool.query(
    'INSERT INTO pedidos_productos (pedido_id, producto_id, cantidad) VALUES (?, ?, ?)',
    [pedidoId, productoId, cantidad]
  );
}`}
        </code>
      </pre>

      <p>
        Y, cuando obtenemos un pedido, las líneas se recuperan desde ahí mismo:
      </p>

      <pre className="bloque-codigo">
        <code>
{`async function obtenerLineasDePedido(id) {
  return pool.query(\`
    SELECT pp.*, pr.nombre, pr.precio
    FROM pedidos_productos pp
    JOIN productos pr ON pp.producto_id = pr.id
    WHERE pp.pedido_id = ?
  \`, [id]);
}`}
        </code>
      </pre>

      <h3>3️⃣ Comparación visual</h3>

      <pre className="bloque-codigo">
        <code>
{`TABLA NORMAL (ej: productos)
✔ Tiene entidad propia
✔ Tiene un CRUD completo
✔ Tiene su propia ruta
✔ Tiene su propio modelo
✔ Tiene controlador

TABLA INTERMEDIA (pedidos_productos)
✖ No es una entidad aislada
✖ No necesita CRUD independiente
✖ No tiene ruta propia
✖ No necesita modelo independiente
✔ Se maneja desde pedidos`}
        </code>
      </pre>

      <h3>4️⃣ Beneficios de NO crear un modelo separado</h3>

      <ul className="lista-simple">
        <li>Mantiene el código más limpio y organizado.</li>
        <li>Evita controladores innecesarios.</li>
        <li>Las operaciones quedan agrupadas en un módulo lógico (pedidos).</li>
        <li>Es la forma correcta de representar relaciones N–M en MVC.</li>
      </ul>

      <div className="nota nota-importante">
        Si en el futuro las líneas de pedido tuvieran datos propios 
        (precio en el momento de compra, descuentos, devoluciones, etc.) 
        entonces sí tendría sentido crear un modelo separado.
      </div>

      <h3>5️⃣ Resumen de esta sección</h3>

      <ul className="lista-simple">
        <li>
          <code>pedidos_productos</code> es una <strong>tabla intermedia</strong>, no una entidad real.
        </li>
        <li>
          Por eso <strong>no tiene controlador ni modelo propios</strong>.
        </li>
        <li>
          Toda su lógica se maneja dentro del módulo <strong>pedidos</strong>.
        </li>
        <li>
          Esta es la forma correcta de gestionar relaciones N–M en MVC.</li>
      </ul>

    </article>
  </details>
</section>
<section className="section" id="b3-leccion6">
  <details>
    <summary>Middlewares y protección de rutas con JWT</summary>

    <article className="card">
      <h2>Middlewares y protección de rutas con JWT</h2>

      <p>
        En esta lección vamos a ver qué es un <strong>middleware</strong> en Express,
        por qué es tan importante cuando trabajamos con un frontend en React y cómo
        podemos usarlo para <strong>proteger rutas</strong> de nuestra API con
        <strong> tokens JWT</strong>.
      </p>

      <p>
        La idea general de nuestro proyecto es muy sencilla:
      </p>

      <ul className="lista-simple">
        <li>
          Cualquier usuario puede navegar por la tienda, ver productos y añadirlos
          a un carrito local.
        </li>
        <li>
          Cuando pulse el botón <strong>“Crear pedido”</strong>, si no está logado,
          el frontend mostrará un aviso del tipo:
          <em>“Por favor, regístrese o inicie sesión para completar su pedido.”</em>
        </li>
        <li>
          Si el usuario <strong>sí está logado</strong>, podrá crear pedidos y ver
          un botón de menú extra, como <strong>“Mi perfil”</strong>.
        </li>
      </ul>

      <p>
        Para que todo esto funcione de forma segura, el backend necesita saber
        quién es el usuario que hace la petición. Ahí entran en juego los
        <strong> middlewares</strong> y los <strong>tokens JWT</strong>.
      </p>

      <h3>1️⃣ ¿Qué es un middleware en Express?</h3>

      <p>
        Un <strong>middleware</strong> en Express es una función que se ejecuta
        <em>entre</em> la petición del cliente y la ruta final. Siempre recibe
        tres parámetros:
      </p>

      <pre className="bloque-codigo">
        <code>
{`// Esquema general de un middleware en Express
export function miMiddleware(req, res, next) {
  // 1. Podemos leer o modificar la petición (req)
  // 2. Podemos enviar una respuesta desde aquí (res)
  // 3. O podemos dejar que la petición continúe llamando a next()

  next(); // Si NO llamamos a next(), la petición se queda "atascada"
}`}
        </code>
      </pre>

      <p>
        Express encadena los middlewares como una <strong>cadena de montaje</strong>:
      </p>

      <pre className="bloque-codigo">
        <code>
{`Cliente → (Middleware 1) → (Middleware 2) → (Ruta final) → Respuesta`}
        </code>
      </pre>

      <div className="cuadro-didactico">
        <h4>¿Para qué se usan los middlewares?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Autenticación</h5>
            <p>Comprobar si el usuario está logado mediante un token JWT.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Protección</h5>
            <p>
              Bloquear rutas privadas (por ejemplo, crear pedido o ver pedidos)
              a usuarios no autenticados.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Validación</h5>
            <p>
              Revisar que los datos que envía el frontend son correctos antes de
              llegar al controlador.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Logs</h5>
            <p>
              Registrar qué peticiones llegan al servidor para poder depurar
              mejor.
            </p>
          </div>
        </div>
      </div>

      <h3>2️⃣ Primer ejemplo: middleware de log</h3>

      <p>
        Empezamos con un middleware muy sencillo que muestra en la consola el
        método y la URL de cada petición. Lo añadimos en{" "}
        <code className="etiqueta-codigo">server.js</code>. Recuerda que
        estamos trabajando con <strong>ES Modules</strong> (
        <code>type="module"</code>).
      </p>

      <pre className="bloque-codigo">
        <code>
{`// server.js (fragmento)

// Middleware de log sencillo
app.use((req, res, next) => {
  console.log("[" + new Date().toISOString() + "] " + req.method + " " + req.url);
  next(); // Continúa con el siguiente middleware o ruta
});`}
        </code>
      </pre>

      <p>
        Al usar <code>app.use()</code> sin ruta, este middleware se ejecuta en{" "}
        <strong>todas las peticiones</strong> que lleguen al servidor. Es una
        forma muy práctica de “ver” desde Node qué está haciendo nuestro
        frontend en React.
      </p>

      <h3>3️⃣ Crear un middleware de autenticación con JWT</h3>

      <p>
        Ahora vamos a crear un middleware que compruebe si el usuario está
        autenticado verificando el <strong>token JWT</strong> que el frontend
        envía en la cabecera{" "}
        <code className="etiqueta-codigo">Authorization</code>.
      </p>

      <p>
        Creamos una carpeta{" "}
        <code className="etiqueta-codigo">middlewares</code> (al mismo nivel
        que <code className="etiqueta-codigo">models</code>,{" "}
        <code className="etiqueta-codigo">controllers</code> y{" "}
        <code className="etiqueta-codigo">routes</code>) y dentro el archivo{" "}
        <code className="etiqueta-codigo">auth.middleware.js</code>.
      </p>

      <pre className="bloque-codigo">
        <code>
{`// middlewares/auth.middleware.js
import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  // 1. Leer la cabecera Authorization
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ mensaje: "Falta cabecera Authorization" });
  }

  // Esperamos formato: "Bearer token"
  const [bearer, token] = authHeader.split(" ");

  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({ mensaje: "Formato de token no válido" });
  }

  // 2. Verificar el token con JWT_SECRET
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Guardar los datos del usuario en req.user
    req.user = {
      id: decoded.id,
      email: decoded.email,
      nombre: decoded.nombre
    };

    // 4. Continuar con la siguiente función de la cadena
    next();
  } catch (error) {
    console.error("Error al verificar token:", error);
    return res.status(401).json({ mensaje: "Token no válido o expirado" });
  }
}`}
        </code>
      </pre>

      <div className="cuadro-didactico">
        <h4>¿Qué hace exactamente este middleware?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>1. Lee la cabecera</h5>
            <p>
              Busca{" "}
              <code>Authorization: Bearer &lt;token&gt;</code> en la petición
              que envía React.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>2. Valida el formato</h5>
            <p>
              Comprueba que la cabecera tenga dos partes: la palabra{" "}
              <code>Bearer</code> y el token en sí.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>3. Verifica el token</h5>
            <p>
              Usa <code>jwt.verify</code> con{" "}
              <code>process.env.JWT_SECRET</code> para comprobar que el token
              es auténtico y no ha expirado.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>4. Inserta datos en req.user</h5>
            <p>
              Si todo va bien, guarda <code>id</code>, <code>email</code> y{" "}
              <code>nombre</code> del usuario en{" "}
              <code className="etiqueta-codigo">req.user</code>, para que el
              controlador pueda saber quién es el usuario.
            </p>
          </div>
        </div>
      </div>

      <h3>4️⃣ Proteger rutas de la API con el middleware</h3>

      <p>
        Una vez creado el middleware, podemos usarlo en las rutas que queramos
        proteger. Por ejemplo, podemos exigir que el usuario esté autenticado
        para crear pedidos o ver sus pedidos.
      </p>

      <p>
        En el archivo{" "}
        <code className="etiqueta-codigo">routes/pedidos.routes.js</code>{" "}
        importamos el middleware y lo añadimos a las rutas (recuerda que
        seguimos con ES Modules).
      </p>

      <pre className="bloque-codigo">
        <code>
{`// routes/pedidos.routes.js
import { Router } from "express";
import * as pedidosController from "../controllers/pedidos.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

// Crear pedido (solo usuarios autenticados)
router.post("/", verifyToken, pedidosController.crearPedido);

// Obtener los pedidos del cliente autenticado
router.get("/mios", verifyToken, pedidosController.getMisPedidos);

// Añadir producto a un pedido (solo autenticados)
router.post("/:id/productos", verifyToken, pedidosController.agregarProducto);

export default router;`}
        </code>
      </pre>

      <p>
        A partir de aquí, si intentamos acceder a estas rutas{" "}
        <strong>sin token</strong> o con un token incorrecto, el middleware
        devolverá un <code>401 Unauthorized</code>. Ese 401 es el que el
        frontend en React puede detectar para mostrar el mensaje:
        <em>“Por favor, regístrese o inicie sesión para completar su pedido.”</em>
      </p>

      <h3>5️⃣ Usar el usuario autenticado en el controlador</h3>

      <p>
        Como el middleware coloca los datos del usuario en{" "}
        <code className="etiqueta-codigo">req.user</code>, ya no necesitamos
        que el frontend nos envíe un <code>cliente_id</code> en el cuerpo de la
        petición. Podemos obtenerlo directamente del token.
      </p>

      <p>
        En <code className="etiqueta-codigo">pedidos.controller.js</code>{" "}
        simplificamos <code>crearPedido</code> así:
      </p>

      <pre className="bloque-codigo">
        <code>
{`// controllers/pedidos.controller.js
import * as PedidosModel from "../models/pedidos.model.js";

export async function crearPedido(req, res) {
  try {
    // Gracias al middleware, req.user tiene los datos del cliente autenticado
    const clienteId = req.user.id;

    const pedido = await PedidosModel.crearPedido(clienteId);
    return res.status(201).json(pedido);
  } catch (error) {
    console.error("Error al crear pedido:", error);
    return res.status(500).json({ mensaje: "Error al crear pedido" });
  }
}`}
        </code>
      </pre>

      

      <h3>6️⃣ Conexión con React: experiencia para el usuario</h3>

      <p>
        Desde el punto de vista del alumno que trabaja en React, lo importante
        es entender que:
      </p>

      <ul className="lista-simple">
        <li>
          Al hacer login, el backend responde con un{" "}
          <strong>token JWT</strong>, que guardamos en{" "}
          <code>localStorage</code> o en un contexto de React (
          <code>AuthContext</code>).
        </li>
        <li>
          Cuando el usuario pulsa <strong>“Crear pedido”</strong>, el frontend
          envía el token en la cabecera{" "}
          <code className="etiqueta-codigo">Authorization: Bearer &lt;token&gt;</code>.
        </li>
        <li>
          El middleware <code>verifyToken</code> comprueba el token y, si es
          correcto, deja pasar la petición hasta el controlador.
        </li>
        <li>
          Si el token falta o es inválido, el backend responde con{" "}
          <code>401 Unauthorized</code> y React puede mostrar un mensaje tipo:
          <em>“Debes registrarte o iniciar sesión para completar tu pedido.”</em>
        </li>
        <li>
          Para mostrar un botón de menú como <strong>“Mi perfil”</strong>, el
          frontend solo tiene que comprobar si existe token (
          <code>isLogged = !!token</code>) y mostrar el botón o un enlace a
          login según el caso.
        </li>
      </ul>

      <h3>✅ Resumen de la lección</h3>

      <ul className="lista-simple">
        <li>
          Un <strong>middleware</strong> es una función que Express ejecuta
          antes de llegar a la ruta final.
        </li>
        <li>
          Los middlewares permiten añadir <strong>autenticación</strong>,{" "}
          <strong>validación</strong>, <strong>logs</strong> y{" "}
          <strong>protección</strong> de rutas.
        </li>
        <li>
          Con <code>verifyToken</code> protegemos rutas para que solo usuarios
          autenticados puedan crear pedidos o ver sus pedidos.
        </li>
        <li>
          Gracias a <code>req.user</code>, el backend sabe quién es el usuario
          sin que React tenga que enviar su <code>cliente_id</code> a mano.
        </li>
        <li>
          El frontend en React usa el token JWT para decidir qué botones y
          opciones mostrar (por ejemplo, <strong>“Mi perfil”</strong> o el aviso
          de “por favor, regístrese”).
        </li>
      </ul>
    </article>
  </details>
</section>

<section className="section" id="b3-introduccion-filtros-usuario">
  <details open>
    <summary>Filtros por categoría y área personal del usuario</summary>

    <article className="card">
      <h2>📘 ¿Qué vamos a construir en esta parte del proyecto?</h2>

      <p>
        En las lecciones anteriores hemos creado un backend muy completo:
        gestión de productos, clientes con registro y login, pedidos y una
        tabla intermedia que relaciona productos con pedidos.
      </p>

      <p>
        Ahora ha llegado el momento de dar un paso clave para el{" "}
        <strong>frontend</strong>:
      </p>

      <ul className="lista-simple">
        <li>
          🎯 Crear <strong>filtros por categoría</strong> para mostrar productos
          en la web.
        </li>
        <li>
          🔐 Construir la <strong>zona personal del usuario</strong> donde pueda
          ver sus pedidos realizados.
        </li>
      </ul>

      <p>
        Esta parte es muy importante porque une <strong>el backend y el frontend</strong>{" "}
        para crear una experiencia real, parecida a cualquier tienda online
        moderna (Amazon, Shein, PC Componentes…).
      </p>

      <h3>1️⃣ ¿Qué son los filtros por categoría y por qué son tan importantes?</h3>

      <p>
        En la mayoría de tiendas online, el usuario quiere navegar por
        categorías:
      </p>

      <ul className="lista-simple">
        <li>👕 Ropa</li>
        <li>📚 Libros</li>
        <li>💻 Electrónica</li>
        <li>🎨 Material escolar</li>
      </ul>

      <p>
        Esto se consigue gracias a un <strong>filtro</strong> que el frontend
        envía al backend usando <strong>parámetros en la URL</strong>{" "}
        (query params).
      </p>

      <p>
        <strong>Ejemplo de petición desde el navegador o React:</strong>
      </p>

      <pre className="bloque-codigo">
        <code>
{`GET /api/productos?categoria=Ropa`}
        </code>
      </pre>

      <p>
        El backend recibe esa petición, busca en la base de datos solo los
        productos de la categoría <strong>"Ropa"</strong> y se los envía al
        frontend en formato JSON. De esta forma, el frontend puede construir una
        página con los productos filtrados.
      </p>

      <div className="nota">
        Este sistema se usa en prácticamente todas las plataformas de comercio
        electrónico. Aquí lo estás aprendiendo con una arquitectura muy parecida
        a la de un proyecto profesional.
      </div>

      <h3>2️⃣ Backend: ruta con filtro por categoría</h3>

      <p>
        En el backend (Node + Express, con <code>type="module"</code>) vamos a
        permitir un parámetro opcional <code>categoria</code> en la ruta{" "}
        <code>/api/productos</code>.
      </p>

      <pre className="bloque-codigo">
        <code>
{`// routes/productos.routes.js
import { Router } from "express";
import * as productosController from "../controllers/productos.controller.js";

const router = Router();

// GET /api/productos?categoria=Ropa
router.get("/", productosController.obtenerProductos);

export default router;`}
        </code>
      </pre>

      <p>
        En el controlador leemos <code>req.query.categoria</code> y construimos
        la consulta a la base de datos:
      </p>

      <pre className="bloque-codigo">
        <code>
{`// controllers/productos.controller.js
import * as ProductosModel from "../models/productos.model.js";

export async function obtenerProductos(req, res) {
  try {
    const { categoria } = req.query; // puede venir undefined

    let productos;

    if (categoria) {
      // Si hay filtro, buscamos solo por esa categoría
      productos = await ProductosModel.obtenerPorCategoria(categoria);
    } else {
      // Si no hay filtro, devolvemos todos
      productos = await ProductosModel.obtenerTodos();
    }

    return res.json(productos);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return res
      .status(500)
      .json({ mensaje: "Error al obtener productos" });
  }
}`}
        </code>
      </pre>

      <p>
        En el modelo usarás una consulta SQL similar a esta (ejemplo
        orientativo):
      </p>

      <pre className="bloque-codigo">
        <code>
{`// models/productos.model.js (ejemplo orientativo)
import { pool } from "../db.js";

export async function obtenerTodos() {
  const [rows] = await pool.query("SELECT * FROM productos WHERE activo = 1");
  return rows;
}

export async function obtenerPorCategoria(categoria) {
  const [rows] = await pool.query(
    "SELECT * FROM productos WHERE activo = 1 AND categoria = ?",
    [categoria]
  );
  return rows;
}`}
        </code>
      </pre>

      <h3>3️⃣ Frontend: pedir productos filtrados por categoría</h3>

      <p>
        Desde React, podemos tener un componente que muestre los productos según
        la categoría seleccionada. Por ejemplo,{" "}
        <code className="etiqueta-codigo">ProductosPorCategoria.jsx</code>:
      </p>

      <pre className="bloque-codigo">
        <code>
{`// src/components/ProductosPorCategoria.jsx
import { useEffect, useState } from "react";

export function ProductosPorCategoria({ categoriaSeleccionada }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const query = categoriaSeleccionada
          ? \`?categoria=\${encodeURIComponent(categoriaSeleccionada)}\`
          : "";
        const res = await fetch(\`http://localhost:3000/api/productos\${query}\`);
        const data = await res.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    fetchProductos();
  }, [categoriaSeleccionada]);

  return (
    <div>
      <h3>Productos {categoriaSeleccionada ? \`de \${categoriaSeleccionada}\` : "disponibles"}</h3>
      <ul className="lista-simple">
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - {producto.precio} €
          </li>
        ))}
      </ul>
    </div>
  );
}`}
        </code>
      </pre>

      <p>
        El componente padre puede tener botones o un <code>&lt;select&gt;</code>{" "}
        para cambiar <code>categoriaSeleccionada</code> y así actualizar el
        listado automáticamente.
      </p>

      <h3>4️⃣ ¿Qué es la página personal del usuario?</h3>

      <p>
        Cuando un usuario entra en su área privada de una tienda online, suele
        ver:
      </p>

      <ul className="lista-simple">
        <li>🧾 Sus pedidos realizados.</li>
        <li>📦 Los productos que compró.</li>
        <li>⌛ El estado del pedido (pendiente, enviado, entregado…).</li>
        <li>📅 La fecha de cada pedido.</li>
      </ul>

      <p>
        Para construirlo, usaremos el <strong>token JWT</strong> que se genera
        cuando el usuario inicia sesión. Gracias al token, el backend sabe{" "}
        <strong>exactamente quién es</strong> el usuario que está haciendo la
        petición.
      </p>

      <p>Ejemplo de petición desde el frontend:</p>

      <pre className="bloque-codigo">
        <code>
{`GET /api/mis-pedidos
Authorization: Bearer <token-del-usuario>`}
        </code>
      </pre>

      <p>
        El backend decodifica el token, sabe qué usuario es y devuelve{" "}
        <strong>solo sus pedidos</strong>, no los de otros clientes.
      </p>

      <h3>5️⃣ Backend: ruta protegida para “mis pedidos”</h3>

      <p>
        Aprovechamos el middleware <code>verifyToken</code> que ya definimos en
        la lección de JWT. Solo podrán acceder usuarios autenticados.
      </p>

      <pre className="bloque-codigo">
        <code>
{`// routes/pedidos.routes.js
import { Router } from "express";
import * as pedidosController from "../controllers/pedidos.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

// GET /api/mis-pedidos
router.get("/mis-pedidos", verifyToken, pedidosController.obtenerMisPedidos);

export default router;`}
        </code>
      </pre>

      <p>
        En el controlador usamos <code>req.user.id</code> (rellenado por el
        middleware) para buscar los pedidos del usuario logado:
      </p>

      <pre className="bloque-codigo">
        <code>
{`// controllers/pedidos.controller.js
import * as PedidosModel from "../models/pedidos.model.js";

export async function obtenerMisPedidos(req, res) {
  try {
    const clienteId = req.user.id; // viene del token
    const pedidos = await PedidosModel.obtenerPedidosDeCliente(clienteId);
    return res.json(pedidos);
  } catch (error) {
    console.error("Error al obtener mis pedidos:", error);
    return res
      .status(500)
      .json({ mensaje: "Error al obtener mis pedidos" });
  }
}`}
        </code>
      </pre>

      <p>
        Y en el modelo, una consulta tipo (ejemplo orientativo):
      </p>

      <pre className="bloque-codigo">
        <code>
{`// models/pedidos.model.js (ejemplo orientativo)
import { pool } from "../db.js";

export async function obtenerPedidosDeCliente(clienteId) {
  const [rows] = await pool.query(
    "SELECT * FROM pedidos WHERE cliente_id = ? ORDER BY fecha DESC",
    [clienteId]
  );
  return rows;
}`}
        </code>
      </pre>

      <h3>6️⃣ Frontend: componente para el área personal (mis pedidos)</h3>

      <p>
        En React podemos crear un componente{" "}
        <code className="etiqueta-codigo">MisPedidos.jsx</code> que:
      </p>

      <ul className="lista-simple">
        <li>Lee el token (por ejemplo, desde <code>localStorage</code>).</li>
        <li>
          Si no hay token, muestra un mensaje tipo:{" "}
          <em>“Por favor, regístrate o inicia sesión para ver tus pedidos.”</em>
        </li>
        <li>Si hay token, hace la petición a `/api/mis-pedidos`.</li>
      </ul>

      <pre className="bloque-codigo">
        <code>
{`// src/components/MisPedidos.jsx
import { useEffect, useState } from "react";

export function MisPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPedidos = async () => {
      if (!token) {
        setCargando(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:3000/api/mis-pedidos", {
          headers: {
            Authorization: \`Bearer \${token}\`
          }
        });

        if (res.status === 401) {
          console.warn("No autorizado. Probablemente el token ha caducado.");
          setCargando(false);
          return;
        }

        const data = await res.json();
        setPedidos(data);
      } catch (error) {
        console.error("Error al cargar mis pedidos:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchPedidos();
  }, [token]);

  if (!token) {
    return (
      <div className="nota nota-importante">
        Debes <strong>registrarte o iniciar sesión</strong> para ver tus pedidos.
      </div>
    );
  }

  if (cargando) {
    return <p>Cargando tus pedidos...</p>;
  }

  if (pedidos.length === 0) {
    return <p>Todavía no has realizado ningún pedido.</p>;
  }

  return (
    <div>
      <h3>🧾 Mis pedidos</h3>
      <ul className="lista-simple">
        {pedidos.map((pedido) => (
          <li key={pedido.id_pedido}>
            Pedido #{pedido.id_pedido} - {pedido.fecha} - Estado:{" "}
            {pedido.estado}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
        </code>
      </pre>

      <div className="cuadro-didactico">
        <h4>🧠 Resumen de la arquitectura</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Backend</h5>
            <p>
              Expone rutas REST como{" "}
              <code className="etiqueta-codigo">/api/productos</code> y{" "}
              <code className="etiqueta-codigo">/api/mis-pedidos</code>, usando
              filtros por categoría y middleware de autenticación.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Frontend</h5>
            <p>
              Envía parámetros de consulta, cabeceras con token y construye
              pantallas dinámicas con React según la respuesta JSON.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Seguridad</h5>
            <p>
              Cada usuario solo puede ver <strong>sus propios pedidos</strong>,
              nunca los de otros clientes.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Experiencia real</h5>
            <p>
              El resultado final se parece al funcionamiento de un ecommerce
              profesional, pero construido paso a paso.
            </p>
          </div>
        </div>
      </div>

      <h3>7️⃣ Resumen</h3>

      <ul className="lista-simple">
        <li>Has visto cómo crear filtros por categoría en la API.</li>
        <li>
          Has aprendido a proteger rutas como <code>/api/mis-pedidos</code> con
          JWT.
        </li>
        <li>
          Has conectado estas rutas con componentes React funcionales y fáciles
          de entender.
        </li>
        <li>
          Empiezas a trabajar con una arquitectura completa:{" "}
          <strong>React + Node + MySQL</strong>.
        </li>
      </ul>

      <p>
        Al terminar esta parte, tendrás un sistema de ecommerce con catálogo
        filtrado por categorías y un área personal donde el usuario puede
        consultar sus pedidos. Es un salto enorme en tu camino como
        desarrollador full-stack.
      </p>
    </article>
  </details>
</section>

<section className="section" id="b3-leccion7">
  <details open>
    <summary>Documentación completa de la API Bazar (Backend REST)</summary>

    <article className="card">
      <h2> Documentación completa de la API Bazar</h2>

      <p>
        En esta lección recopilamos <strong>todas las rutas</strong> de nuestra API REST
        creada en Node.js + Express + MySQL.  
        Esta documentación será fundamental para el <strong>frontend</strong>, ya que 
        indica claramente qué URLs llamar, qué datos enviar y qué formato reciben de
        respuesta.
      </p>

      <div className="nota nota-importante">
        Esta sección es OBLIGATORIA antes de comenzar el frontend en React.
      </div>

      <h3>📌 Organización de la API</h3>

      <ul className="lista-simple">
        <li>/api/productos → catálogo y filtros</li>
        <li>/api/auth → registro y login</li>
        <li>/api/pedidos → gestión de pedidos</li>
        <li>/api/mis-pedidos → pedidos del usuario autenticado</li>
      </ul>

      <hr />

      <h2>📦 1. PRODUCTOS</h2>

      <p>
        Permiten mostrar el catálogo, filtrar por categoría y gestionar el CRUD básico.
      </p>

      <div className="contenedor-tabla">
        <table className="tabla-datos">
          <thead>
            <tr>
              <th>Endpoint</th>
              <th>Método</th>
              <th>Body</th>
              <th>Protegido</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/api/productos</td>
              <td>GET</td>
              <td>—</td>
              <td>No</td>
              <td>Obtiene todos los productos activos</td>
            </tr>
            <tr>
              <td>/api/productos?categoria=Nombre</td>
              <td>GET</td>
              <td>—</td>
              <td>No</td>
              <td>Lista productos filtrados por categoría</td>
            </tr>
            <tr>
              <td>/api/productos/:id</td>
              <td>GET</td>
              <td>—</td>
              <td>No</td>
              <td>Obtiene un producto por su ID</td>
            </tr>
            <tr>
              <td>/api/productos</td>
              <td>POST</td>
              <td>JSON</td>
              <td>No</td>
              <td>Crea un producto</td>
            </tr>
            <tr>
              <td>/api/productos/:id</td>
              <td>PUT</td>
              <td>JSON</td>
              <td>No</td>
              <td>Actualiza un producto</td>
            </tr>
            <tr>
              <td>/api/productos/:id</td>
              <td>DELETE</td>
              <td>—</td>
              <td>No</td>
              <td>Borrado lógico (activo = 0)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Ejemplo Thunder Client</h3>

      <pre className="bloque-codigo">
        <code>
{`GET http://localhost:3000/api/productos?categoria=Ropa`}
        </code>
      </pre>

      <h4>📤 Ejemplo de respuesta JSON</h4>

      <pre className="bloque-codigo">
        <code>
{`[
  {
    "id": 12,
    "nombre": "Sudadera básica",
    "precio": 19.99,
    "stock": 15,
    "categoria": "Ropa",
    "imagen_url": "https://...",
    "activo": 1
  }
]`}
        </code>
      </pre>

      <hr />

      <h2>🔐 2. AUTENTICACIÓN (REGISTER + LOGIN)</h2>

      <div className="contenedor-tabla">
        <table className="tabla-datos">
          <thead>
            <tr>
              <th>Endpoint</th>
              <th>Método</th>
              <th>Body</th>
              <th>Protegido</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/api/auth/register</td>
              <td>POST</td>
              <td>JSON</td>
              <td>No</td>
              <td>Registrar nuevo usuario</td>
            </tr>
            <tr>
              <td>/api/auth/login</td>
              <td>POST</td>
              <td>JSON</td>
              <td>No</td>
              <td>Iniciar sesión y obtener JWT</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Ejemplo de registro (Thunder)</h3>

      <pre className="bloque-codigo">
        <code>
{`POST http://localhost:3000/api/auth/register
Content-Type: application/json

{
  "nombre": "Ana",
  "email": "ana@example.com",
  "password": "secreto123"
}`}
        </code>
      </pre>

      <h3>Ejemplo de login (Thunder)</h3>

      <pre className="bloque-codigo">
        <code>
{`POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "email": "ana@example.com",
  "password": "secreto123"
}`}
        </code>
      </pre>

      <h4>📤 Respuesta (importante para el frontend)</h4>

      <pre className="bloque-codigo">
        <code>
{`{
  "mensaje": "Login correcto",
  "usuario": {
    "id": 1,
    "nombre": "Ana",
    "email": "ana@example.com"
  },
  "token": "eyJhbGci..."
}`}
        </code>
      </pre>

      <hr />

      <h2>📦 3. PEDIDOS (CRUD completo)</h2>

      <div className="contenedor-tabla">
        <table className="tabla-datos">
          <thead>
            <tr>
              <th>Endpoint</th>
              <th>Método</th>
              <th>Body</th>
              <th>Protegido</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/api/pedidos</td>
              <td>POST</td>
              <td>—</td>
              <td>SÍ (JWT)</td>
              <td>Crea un pedido (cliente sale del token)</td>
            </tr>
            <tr>
              <td>/api/pedidos/:id/productos</td>
              <td>POST</td>
              <td>JSON</td>
              <td>SÍ</td>
              <td>Añadir un producto al pedido</td>
            </tr>
            <tr>
              <td>/api/pedidos/:id</td>
              <td>GET</td>
              <td>—</td>
              <td>SÍ</td>
              <td>Obtener un pedido con sus líneas</td>
            </tr>
            <tr>
              <td>/api/mis-pedidos</td>
              <td>GET</td>
              <td>—</td>
              <td>SÍ</td>
              <td>Historial del usuario autenticado</td>
            </tr>
            <tr>
              <td>/api/mis-pedidos/:id</td>
              <td>GET</td>
              <td>—</td>
              <td>SÍ</td>
              <td>Detalle de un pedido propio</td>
            </tr>
            <tr>
              <td>/api/pedidos/:id/estado</td>
              <td>PUT</td>
              <td>JSON</td>
              <td>SÍ (admin en versión futura)</td>
              <td>Actualizar estado</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Ejemplo: Crear pedido</h3>

      <pre className="bloque-codigo">
        <code>
{`POST http://localhost:3000/api/pedidos
Authorization: Bearer <token>`}
        </code>
      </pre>

      <h3>Añadir producto a pedido</h3>

      <pre className="bloque-codigo">
        <code>
{`POST http://localhost:3000/api/pedidos/5/productos
Authorization: Bearer <token>
Content-Type: application/json

{
  "producto_id": 3,
  "cantidad": 2
}`}
        </code>
      </pre>

      <h3>Historial del usuario</h3>

      <pre className="bloque-codigo">
        <code>
{`GET http://localhost:3000/api/mis-pedidos
Authorization: Bearer <token>`}
        </code>
      </pre>

      <h3>Detalle de un pedido del usuario</h3>

      <pre className="bloque-codigo">
        <code>
{`GET http://localhost:3000/api/mis-pedidos/5
Authorization: Bearer <token>`}
        </code>
      </pre>

      <hr />

      <h2>🧠 4. Resumen para el Frontend (React)</h2>

      <ul className="lista-simple">
        <li>El frontend debe guardar el token tras el login.</li>
        <li>Para rutas protegidas → enviar <code>Authorization: Bearer token</code>.</li>
        <li>Para filtros → usar query params (<code>?categoria=Ropa</code>).</li>
        <li>Para pedidos → el backend detecta automáticamente el usuario.</li>
      </ul>

      <pre className="bloque-codigo">
        <code>
{`fetch('http://localhost:3000/api/mis-pedidos', {
  headers: {
    Authorization: 'Bearer ' + token
  }
})`}
        </code>
      </pre>

      <h3>🧪 Actividad guiada</h3>

      <ul className="lista-simple">
        <li>Realiza login con un usuario y copia el token.</li>
        <li>Prueba cada ruta de esta documentación en Thunder Client.</li>
        <li>Comprueba que las rutas protegidas no funcionan sin token.</li>
        <li>Crea 2 pedidos distintos y consulta tus pedidos con <code>/mis-pedidos</code>.</li>
      </ul>

      <h3>🎉 Fin del Backend</h3>

      <p>
        Con esta documentación, ya estamos listos para comenzar la construcción del
        <strong>frontend en React</strong>.  
        El siguiente bloque será: <strong>Bloque 4 — Frontend React + Consumo de API</strong>.
      </p>
    </article>
  </details>
</section>


      </div>
    </main>
  );
}
