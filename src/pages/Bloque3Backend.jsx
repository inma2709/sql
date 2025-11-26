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
  Para que tu proyecto sea profesional, entendible y fácil de mantener, 
  seguiremos un orden lógico. Cada paso prepara el siguiente, 
  así que no avances sin completar bien el anterior.
</p>
<ol className="lista-simple">

  <li>
    <strong>🧩 Diseñar el modelo ERL</strong><br />
    Antes de escribir código necesitamos saber <em>qué datos existen</em> y 
    <em> cómo se relacionan</em>.<br />
    Dibujamos las entidades (clientes, productos, categorías, pedidos…) 
    y sus relaciones (1–N, N–M…).<br />
    👉 Aquí se define la estructura real del proyecto.
  </li>

  <li>
    <strong>🗄️ Crear la base de datos vacía</strong><br />
    Desde phpMyAdmin únicamente creamos la base (por ejemplo 
    <code>bazar</code>).<br />
    Todavía no creamos tablas: eso lo hará Node.js mediante un script.
  </li>

  <li>
    <strong>⚙️ Crear un script de inicialización con Node.js</strong><br />
    Este script se conecta a MySQL y crea automáticamente todas 
    las tablas necesarias:<br />
    <code>clientes</code>, <code>productos</code>, <code>categorias</code>, 
    <code>pedidos</code>, <code>pedidos_productos</code>, etc.<br />
    👉 Método profesional para reconstruir la base de datos cuando quieras.
  </li>

  
    <strong>🎯 Definir qué necesita el frontend</strong><br />
    Antes de programar el backend debemos saber qué peticiones hará 
    la aplicación web.<br />
    Estas decisiones afectan directamente al diseño del modelo, 
    los controladores y las rutas.

    <p><strong>Preguntas esenciales que debemos responder:</strong></p>

    <ul className="lista-simple">
      <li>¿Solo los usuarios registrados pueden hacer un pedido?</li>
      <li>¿Existirá un perfil de usuario editable (nombre, email, dirección)?</li>
      <li>¿Permitimos búsqueda de productos por nombre?</li>
      <li>¿Habrá filtrado por categoría, precio o stock?</li>
      <li>¿Los pedidos pueden contener varios productos? (relación N–M)</li>
      <li>¿Mostraremos el total del carrito en tiempo real?</li>
      <li>¿Se podrán actualizar cantidades en el carrito?</li>
      <li>¿Guardaremos un historial de pedidos por usuario?</li>
      <li>¿Un administrador podrá crear, editar o eliminar productos?</li>
      <li>¿Usaremos autenticación con JWT?</li>
      <li>¿Permitimos registro de nuevos usuarios o solo login?</li>
      <li>¿Los productos pueden estar desactivados (<code>activo</code>)?</li>
      <li>¿Qué ocurre si alguien intenta comprar un producto sin stock?</li>
      <li>¿Queremos paginación u ordenación (precio ASC/DESC)?</li>
      <li>¿Es necesario manejar direcciones de envío?</li>
    </ul>
    <p>Te recomiendo crear una guia de ejecución que te servirá durante todo el proyecto. Aquí tienes un ejemplo
      <a href="/guia.pdf" download>
  Descargar Guía Oficial (PDF)
</a>
 </p>

  <li>
    <strong>🚀 Montar el proyecto Node + Express (estructura MVC)</strong><br />
    Organizamos el proyecto de manera profesional:

    <ul className="lista-simple">
      <li><code>config/</code> → conexión a MySQL y variables de entorno</li>
      <li><code>models/</code> → consultas SQL (SELECT, INSERT, UPDATE…)</li>
      <li><code>controllers/</code> → lógica del backend</li>
      <li><code>routes/</code> → endpoints consumidos desde React</li>
      <li><code>middleware/</code> → autenticación, validaciones y permisos</li>
    </ul>
  </li>

  <li>
    <strong>▶️ Ejecutar el script de creación</strong><br />
    Cuando la estructura está lista, ejecutamos:

    <pre className="bloque-codigo"><code>{`npm run init-db`}</code></pre>

    Esto crea todas las tablas y deja la base de datos preparada para insertar datos.
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
  es decir, <code>import</code> y <code>export</code>.Recuerda que package.json no admite comentarios.
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
        seguir el modelo MVC. Un archivo de rutas por controlador. Cada tabla principal se comunica con el back a través de 
        un archivo model; este archivo model mandará los datos al controlador que trabajará con los datos recibidos
        y los expondrá al frontend a través de las rutas.  Creamos el archivo{" "}
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
    // ============================
    // TABLA CLIENTES
    // ============================
    await pool.query(\`
      CREATE TABLE IF NOT EXISTS clientes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        domicilio TEXT NULL,
        telefono INT NULL,
        fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        rol ENUM('cliente','admin') NOT NULL DEFAULT 'cliente',
        activo TINYINT(1) NOT NULL DEFAULT 1
      ) ENGINE=InnoDB
      DEFAULT CHARSET=utf8mb4;
    \`);

    // ============================
    // TABLA CATEGORIAS
    // ============================
    await pool.query(\`
      CREATE TABLE IF NOT EXISTS categorias (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        slug VARCHAR(120) NULL,
        descripcion TEXT NULL,
        activo TINYINT(1) NOT NULL DEFAULT 1,
        CONSTRAINT uq_categorias_nombre UNIQUE (nombre)
      ) ENGINE=InnoDB
      DEFAULT CHARSET=utf8mb4;
    \`);

    // ============================
    // TABLA PRODUCTOS
    // ============================
    await pool.query(\`
      CREATE TABLE IF NOT EXISTS productos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(150) NOT NULL,
        descripcion TEXT NULL,
        precio DECIMAL(10,2) NOT NULL,
        stock INT NOT NULL,
        imagen_url VARCHAR(255) NOT NULL,         -- foto principal
        imagen_1 VARCHAR(255) NULL,               -- foto secundaria 1
        imagen_2 VARCHAR(255) NULL,               -- foto secundaria 2
        imagen_3 VARCHAR(255) NULL,               -- foto secundaria 3
        categoria_id INT NOT NULL,
        destacado TINYINT(1) NOT NULL DEFAULT 0,
        activo TINYINT(1) NOT NULL DEFAULT 1,
        CONSTRAINT fk_productos_categoria
          FOREIGN KEY (categoria_id) REFERENCES categorias(id)
      ) ENGINE=InnoDB
      DEFAULT CHARSET=utf8mb4;
    \`);

    // ============================
    // TABLA PEDIDOS
    // ============================
    await pool.query(\`
      CREATE TABLE IF NOT EXISTS pedidos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        cliente_id INT NOT NULL,
        fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        estado ENUM('carrito','pendiente','pagado','enviado','cancelado')
          NOT NULL DEFAULT 'carrito',
        total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
        CONSTRAINT fk_pedidos_cliente
          FOREIGN KEY (cliente_id) REFERENCES clientes(id)
      ) ENGINE=InnoDB
      DEFAULT CHARSET=utf8mb4;
    \`);

    // ============================
    // TABLA INTERMEDIA PEDIDOS_PRODUCTOS
    // ============================
    await pool.query(\`
      CREATE TABLE IF NOT EXISTS pedidos_productos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        pedido_id INT NOT NULL,
        producto_id INT NOT NULL,
        cantidad INT NOT NULL,
        precio_unitario DECIMAL(10,2) NOT NULL,
        CONSTRAINT fk_pp_pedido
          FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
        CONSTRAINT fk_pp_producto
          FOREIGN KEY (producto_id) REFERENCES productos(id)
      ) ENGINE=InnoDB
      DEFAULT CHARSET=utf8mb4;
    \`);

    console.log('✅ Tablas creadas correctamente con imágenes adicionales.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al crear las tablas:', error);
    process.exit(1);
  }
}

crearTablas();
`}
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
        <li>Añade algunos campos a tus tablas (seeds) para darle contenido. INSERT </li>
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
<h3>Endpoints del módulo de productos</h3>

<p>
  En este proyecto, los clientes <strong>solo realizan operaciones de consulta</strong>.
  No existe creación, edición ni borrado de productos porque el sistema no incluye un panel administrador.
  Por tanto, los endpoints del módulo de productos están orientados a:
  <strong>búsqueda, filtrado, listado, detalle y productos recomendados</strong>.
</p>

<div className="contenedor-tabla">
  <table className="tabla-datos tabla-datos--compacta">
    <thead>
      <tr>
        <th>Método</th>
        <th>URL</th>
        <th>Descripción</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td><code>GET</code></td>
        <td><code>/api/productos</code></td>
        <td>
          Devuelve el listado de productos activos.  
          Permite aplicar:
          <ul>
            <li><strong>Búsqueda</strong> por nombre → <code>?nombre=camiseta</code></li>
            <li><strong>Filtrado</strong> por categoría → <code>?categoria_id=2</code></li>
            <li><strong>Paginación</strong> → <code>?page=1&limit=12</code></li>
            <li><strong>Ordenación</strong> → <code>?sort=precio_asc</code>, <code>precio_desc</code>, <code>nombre_asc</code></li>
          </ul>
        </td>
      </tr>

      <tr>
        <td><code>GET</code></td>
        <td><code>/api/productos/:id</code></td>
        <td>
          Devuelve el <strong>detalle completo del producto</strong>.  
          Incluye:
          <ul>
            <li>Información principal del producto</li>
            <li>Las <strong>tres imágenes</strong> del carrusel
              (<code>imagen_url</code>, <code>imagen_1</code>, <code>imagen_2</code>, <code>imagen_3</code>)</li>
            <li>Un listado de <strong>3 productos recomendados</strong>, priorizando la misma categoría</li>
          </ul>
        </td>
      </tr>

      <tr>
        <td><code>GET</code></td>
        <td><code>/api/productos/destacados</code></td>
        <td>
          Devuelve los productos marcados como <strong>destacados</strong> para
          mostrarlos en la página principal del frontend. (Endpoint opcional)
        </td>
      </tr>
    </tbody>
  </table>
</div>
<p>En el proyecto BAZAR, el módulo de productos está orientado únicamente a operaciones de consulta, ya que la aplicación no dispone de un panel de administración. Esto significa que los clientes pueden buscar productos por nombre, filtrarlos por categoría y visualizar un listado actualizado de todos los artículos activos disponibles en la tienda. Además, cada producto cuenta con una página de detalle donde se muestran sus datos completos, incluyendo las tres imágenes destinadas al carrusel y un conjunto de productos recomendados, seleccionados priorizando la misma categoría. Estos endpoints GET permiten al frontend construir un catálogo dinámico, filtrable y con una experiencia visual rica sin necesidad de operaciones de creación, edición o eliminación.</p>

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
  El modelo de productos se encarga de hablar con la base de datos MySQL.
  Desde aquí no pensamos en HTTP ni en Express, solo en <strong>consultas SQL</strong>.
  Vamos a crear funciones para:
</p>

<ul className="lista-simple">
  <li>Listar productos activos con búsqueda y filtros.</li>
  <li>Obtener el detalle de un producto por su <code>id</code>.</li>
  <li>Obtener productos recomendados de la misma categoría.</li>
</ul>

<p>
  Creamos el archivo{" "}
  <code className="etiqueta-codigo">models/productos.model.js</code> con este contenido:
</p>

<pre className="bloque-codigo">
  <code>
{`// models/productos.model.js
import pool from '../config/db.js';

/**
 * Busca productos activos aplicando filtros opcionales.
 *
 * Parámetros:
 *  - nombre: cadena para buscar por nombre (LIKE %nombre%)
 *  - categoriaId: id de categoría para filtrar
 *  - page: número de página (para paginación)
 *  - limit: cuántos productos por página
 *  - sort: criterio de ordenación (precio_asc, precio_desc, nombre_asc)
 */
export async function buscarProductos({
  nombre,
  categoriaId,
  page = 1,
  limit = 12,
  sort = 'nombre_asc'
}) {
  // Base de la consulta: solo productos activos
  let query = \`
    SELECT
      id,
      nombre,
      descripcion,
      precio,
      stock,
      imagen_url,
      imagen_1,
      imagen_2,
      imagen_3,
      categoria_id,
      destacado,
      activo
    FROM productos
    WHERE activo = 1
  \`;

  const params = [];

  // Filtro por nombre (ej: ?nombre=camiseta)
  if (nombre) {
    query += ' AND nombre LIKE ?';
    params.push(\`%\${nombre}%\`);
  }

  // Filtro por categoría (ej: ?categoria_id=2)
  if (categoriaId) {
    query += ' AND categoria_id = ?';
    params.push(categoriaId);
  }

  // Ordenación básica según el parámetro sort
  switch (sort) {
    case 'precio_asc':
      query += ' ORDER BY precio ASC';
      break;
    case 'precio_desc':
      query += ' ORDER BY precio DESC';
      break;
    case 'nombre_asc':
    default:
      query += ' ORDER BY nombre ASC';
      break;
  }

  // Paginación sencilla: page y limit
  const pageNumber = Number(page) || 1;
  const limitNumber = Number(limit) || 12;
  const offset = (pageNumber - 1) * limitNumber;

  query += ' LIMIT ? OFFSET ?';
  params.push(limitNumber, offset);

  const [rows] = await pool.query(query, params);
  return rows;
}

/**
 * Obtiene un producto por su id.
 *
 * Devuelve:
 *  - el producto encontrado,
 *  - o undefined si no existe o no está activo.
 */
export async function obtenerPorId(id) {
  const [rows] = await pool.query(
    \`
      SELECT
        id,
        nombre,
        descripcion,
        precio,
        stock,
        imagen_url,
        imagen_1,
        imagen_2,
        imagen_3,
        categoria_id,
        destacado,
        activo
      FROM productos
      WHERE id = ? AND activo = 1
    \`,
    [id]
  );

  return rows[0]; // undefined si no existe
}

/**
 * Devuelve productos recomendados para un detalle.
 *
 * Regla didáctica:
 *  - Priorizar productos de la misma categoría,
 *  - Excluyendo el producto actual,
 *  - Límite de 3 resultados.
 */
export async function obtenerRecomendados(categoriaId, excluirId, limite = 3) {
  const [rows] = await pool.query(
    \`
      SELECT
        id,
        nombre,
        precio,
        imagen_url,
        destacado
      FROM productos
      WHERE activo = 1
        AND categoria_id = ?
        AND id <> ?
      ORDER BY destacado DESC, RAND()
      LIMIT ?
    \`,
    [categoriaId, excluirId, limite]
  );

  return rows;
}

export default {
  buscarProductos,
  obtenerPorId,
  obtenerRecomendados
};`}
  </code>
</pre>

<div className="cuadro-didactico">
  <h4>Qué hace cada función del modelo</h4>
  <div className="cuadro-didactico__grid">
    <div className="cuadro-didactico__item">
      <h5>buscarProductos(filtros)</h5>
      <p>
        Construye una consulta SQL dinámica para devolver productos activos,
        aplicando búsqueda por nombre, filtro por categoría, ordenación y paginación.
      </p>
    </div>
    <div className="cuadro-didactico__item">
      <h5>obtenerPorId(id)</h5>
      <p>
        Devuelve un único producto activo por su <code>id</code> o{" "}
        <code>undefined</code> si no existe o está inactivo.
      </p>
    </div>
    <div className="cuadro-didactico__item">
      <h5>obtenerRecomendados(categoriaId, excluirId)</h5>
      <p>
        Devuelve hasta 3 productos activos de la misma categoría, excluyendo
        el producto actual. Se usará en la página de detalle para mostrar
        productos recomendados.
      </p>
    </div>
  </div>
</div>

     <h3>🎮 Controlador de productos (controllers/productos.controller.js)</h3>

<p>
  El controlador actúa como “traductor” entre HTTP y la base de datos.
  Aquí decidimos qué hacer cuando llega una petición a{" "}
  <code>/api/productos</code> o <code>/api/productos/:id</code>.
  Usamos el modelo para obtener los datos y respondemos en formato JSON,
  que será consumido por el frontend en React.
</p>

<pre className="bloque-codigo">
  <code>
{`// controllers/productos.controller.js
import * as ProductosModel from '../models/productos.model.js';

/**
 * GET /api/productos
 *
 * Permite:
 *  - listar productos activos,
 *  - buscar por nombre (?nombre=camiseta),
 *  - filtrar por categoría (?categoria_id=2),
 *  - paginar (?page=1&limit=12),
 *  - ordenar (?sort=precio_asc, precio_desc, nombre_asc).
 */
export async function getProductos(req, res) {
  try {
    // Leemos los filtros desde la query string
    const {
      nombre,
      categoria_id,
      page,
      limit,
      sort
    } = req.query;

    const filtros = {
      nombre: nombre || '',
      categoriaId: categoria_id ? Number(categoria_id) : null,
      page,
      limit,
      sort
    };

    const productos = await ProductosModel.buscarProductos(filtros);

    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ mensaje: 'Error al obtener productos' });
  }
}

/**
 * GET /api/productos/:id
 *
 * Devuelve:
 *  - los datos completos del producto,
 *  - sus imágenes,
 *  - y una pequeña lista de productos recomendados.
 */
export async function getProductoPorId(req, res) {
  try {
    const { id } = req.params;

    // 1. Buscamos el producto principal
    const producto = await ProductosModel.obtenerPorId(id);

    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    // 2. Buscamos productos recomendados de la misma categoría
    const recomendados = await ProductosModel.obtenerRecomendados(
      producto.categoria_id,
      producto.id,
      3
    );

    // 3. Devolvemos un objeto compuesto, ideal para la página de detalle en React
    res.json({
      producto,
      recomendados
    });
  } catch (error) {
    console.error('Error al obtener detalle de producto:', error);
    res.status(500).json({ mensaje: 'Error al obtener detalle de producto' });
  }
}

export default {
  getProductos,
  getProductoPorId
};`}
  </code>
</pre>

<div className="cuadro-didactico">
  <h4>Qué hace cada función del controlador</h4>
  <div className="cuadro-didactico__grid">
    <div className="cuadro-didactico__item">
      <h5>getProductos(req, res)</h5>
      <p>
        Lee los filtros enviados desde el frontend (nombre, categoría, página,
        límite, ordenación), llama al modelo <code>buscarProductos</code> y
        devuelve un listado de productos activos en formato JSON.
      </p>
    </div>
    <div className="cuadro-didactico__item">
      <h5>getProductoPorId(req, res)</h5>
      <p>
        Busca un producto por su <code>id</code>. Si existe y está activo, 
        también obtiene productos recomendados de la misma categoría y devuelve
        un objeto  pensado        específicamente para la página de detalle en React.
      </p>
    </div>
  </div>
</div>

<p>
  Observa que no hemos creado endpoints de <strong>creación, actualización o borrado</strong>
  de productos, porque el proyecto BAZAR, según la guía oficial, está orientado a
  clientes finales y no incluye panel de administración. Por eso, en este módulo
  solo necesitamos <strong>consultas GET</strong> bien diseñadas.
</p>


      <div className="nota">
        Observa cómo el controlador <strong>no sabe SQL</strong>: solo llama a funciones
        del modelo. Esto hace que el código sea más fácil de mantener y de probar.
      </div>
{/* 4️⃣ Paso 4: Actualizar las rutas para usar el controlador */} <h3>4️⃣ Paso 4: Actualizar las rutas de productos</h3> <p> Ahora actualizamos{" "} <code className="etiqueta-codigo">routes/productos.routes.js</code> para que use las funciones del controlador en lugar de devolver texto fijo. </p>
     <pre className="bloque-codigo">
  <code>
{`// routes/productos.routes.js
import { Router } from 'express';
import {
  getProductos,
  getProductoPorId
} from '../controllers/productos.controller.js';

const router = Router();

// ==========================================
// GET /api/productos
// Listado con filtros: ?nombre= & ?categoria_id=
// ==========================================
router.get('/', getProductos);

// ==========================================
// GET /api/productos/:id
// Detalle del producto + recomendados
// ==========================================
router.get('/:id', getProductoPorId);

// ==========================================
// GET /api/productos/destacados  (Opcional)
// Mostramos productos destacados en la home
// ==========================================
// Si lo quieres implementar, en el controlador se añadiría:
// router.get('/destacados', getProductosDestacados);

export default router;`}
  </code>
</pre>
<div className="cuadro-didactico">
  <h4>Flujo completo de una petición GET /api/productos</h4>

  <ol className="lista-simple">
    <li>El cliente (React) hace una petición a <code>/api/productos</code>.</li>
    <li>La ruta captura la petición y llama al controlador <code>getProductos</code>.</li>
    <li>El controlador lee los filtros de la URL (nombre, categoría, sort, etc.).</li>
    <li>El controlador llama al modelo <code>buscarProductos()</code>.</li>
    <li>El modelo construye una consulta SQL dinámica y la ejecuta con <code>pool.query()</code>.</li>
    <li>El modelo devuelve al controlador un array de productos activos.</li>
    <li>El controlador responde al frontend con un JSON listo para renderizar.</li>
  </ol>

  <h4>Flujo para GET /api/productos/:id</h4>
  <ol className="lista-simple">
    <li>La ruta <code>/api/productos/:id</code> captura la petición.</li>
    <li>El controlador <code>getProductoPorId</code> obtiene el producto principal.</li>
    <li>Luego llama a <code>obtenerRecomendados()</code> para traer 3 productos afines.</li>
    <li>Se devuelve un objeto con: <code>{'{ producto, recomendados }'}</code>.</li>
    <li>React usa esa información para renderizar el detalle + carrusel + recomendados.</li>
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
  <code>
{`// models/clientes.model.js
// Modelo orientado a registro, login y consulta de perfil
// Adaptado a la guía oficial del proyecto BAZAR

import pool from '../config/db.js';

/**
 * Buscar cliente por email
 * ------------------------
 * Se utiliza cuando el usuario intenta iniciar sesión.
 * Devuelve:
 *  - id, nombre, email, password_hash, rol, activo
 *  - undefined si el email no existe
 */
export async function buscarPorEmail(email) {
  // Normalizamos el email a minúsculas antes de buscarlo
  const emailNormalizado = email.toLowerCase();

  const [rows] = await pool.query(
    \`
      SELECT 
        id,
        nombre,
        email,
        password_hash,
        rol,
        activo
      FROM clientes
      WHERE email = ?
      LIMIT 1
    \`,
    [emailNormalizado]
  );

  return rows[0]; // puede ser undefined
}

/**
 * Crear nuevo cliente (registro)
 * ------------------------------
 * Recibe: nombre, email, passwordHash (bcrypt)
 * Inserta un nuevo cliente con:
 *  - email normalizado
 *  - rol 'cliente'
 *  - activo = 1
 */
export async function crearCliente({ nombre, email, passwordHash }) {
  const emailNormalizado = email.toLowerCase();

  const [result] = await pool.query(
    \`
      INSERT INTO clientes (
        nombre,
        email,
        password_hash,
        rol,
        activo
      )
      VALUES (?, ?, ?, 'cliente', 1)
    \`,
    [nombre, emailNormalizado, passwordHash]
  );

  return {
    id: result.insertId,
    nombre,
    email: emailNormalizado,
    rol: 'cliente'
  };
}

/**
 * Obtener datos del perfil
 * ------------------------
 * Esta función se usa para la página de perfil.
 * (Recordemos que el usuario no puede editar sus datos
 * en este proyecto, solo verlos).
 */
export async function obtenerPerfil(idCliente) {
  const [rows] = await pool.query(
    \`
      SELECT 
        id,
        nombre,
        email,
        domicilio,
        telefono,
        fecha_registro,
        rol
      FROM clientes
      WHERE id = ?
    \`,
    [idCliente]
  );

  return rows[0];
}

export default {
  buscarPorEmail,
  crearCliente,
  obtenerPerfil
};`}
  </code>
</pre>


      <div className="cuadro-didactico">
  <h4>🧩 ¿Qué hace este modelo?</h4>

  <div className="cuadro-didactico__grid">
    <div className="cuadro-didactico__item">
      <h5>buscarPorEmail()</h5>
      <p>
        Obtiene un usuario por su email y devuelve sus datos internos:
        id, nombre, email, password_hash, rol y activo.
        No devuelve datos sensibles al frontend; solo se usa para comparar
        contraseñas en el login.
      </p>
    </div>

    <div className="cuadro-didactico__item">
      <h5>crearCliente()</h5>
      <p>
        Inserta un nuevo cliente en la base de datos.  
        Normaliza el email a minúsculas, guarda el password cifrado
        y asigna automáticamente el rol "cliente".
      </p>
    </div>

    <div className="cuadro-didactico__item">
      <h5>obtenerPerfil()</h5>
      <p>
        Devuelve los datos visibles del usuario para la sección “Mi Perfil”.
        Solo consulta, porque en este proyecto el cliente no puede editar la cuenta.
      </p>
    </div>

    <div className="cuadro-didactico__item">
      <h5>Seguridad</h5>
      <p>
        El modelo nunca devuelve <code>password_hash</code> al frontend.
        Ese dato solo sirve para el login en el backend.
      </p>
    </div>
  </div>
</div>
<pre className="bloque-codigo">
  <code>
{`// controllers/auth.controller.js
// Controlador de autenticación orientado a:
// - registro de clientes
// - inicio de sesión (login)
// - consulta de perfil

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as ClientesModel from '../models/clientes.model.js';

/**
 * Función auxiliar para generar un token JWT para un cliente.
 * El token incluirá:
 *  - id
 *  - email
 *  - nombre
 *  - rol
 *
 * Se firma con la clave secreta JWT_SECRET y tiene una caducidad
 * configurable mediante JWT_EXPIRES_IN (por defecto, 1 hora).
 */
function generarToken(cliente) {
  return jwt.sign(
    {
      id: cliente.id,
      email: cliente.email,
      nombre: cliente.nombre,
      rol: cliente.rol || 'cliente'
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

    // Validación básica de campos obligatorios
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

    // Encriptar contraseña (hash) con bcrypt
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Crear cliente (el modelo normaliza el email y fija rol='cliente', activo=1)
    const nuevo = await ClientesModel.crearCliente({
      nombre,
      email,
      passwordHash
    });

    // Generar token JWT para el nuevo usuario
    const token = generarToken(nuevo);

    res.status(201).json({
      mensaje: 'Usuario registrado correctamente',
      usuario: nuevo, // id, nombre, email, rol
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

    // Comprobamos que vienen los dos campos
    if (!email || !password) {
      return res
        .status(400)
        .json({ mensaje: 'Email y contraseña son obligatorios' });
    }

    // Buscar el cliente por email
    const cliente = await ClientesModel.buscarPorEmail(email);
    if (!cliente) {
      // No desvelamos si el problema es el email o la contraseña
      return res.status(401).json({ mensaje: 'Credenciales no válidas' });
    }

    // Comprobar si el usuario está activo
    if (!cliente.activo) {
      return res
        .status(403)
        .json({ mensaje: 'La cuenta está desactivada. Contacte con soporte.' });
    }

    // Comparar la contraseña en texto plano con el hash almacenado
    const passwordCorrecta = await bcrypt.compare(password, cliente.password_hash);
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
        email: cliente.email,
        rol: cliente.rol
      },
      token
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
}

/**
 * GET /api/mi-perfil
 *
 * Ruta protegida por middleware de autenticación (JWT).
 * Se espera que el middleware haya rellenado req.user
 * con los datos del token:
 *   { id, email, nombre, rol }
 */
export async function getMiPerfil(req, res) {
  try {
    // El id viene del token decodificado por el middleware
    const idCliente = req.user?.id;

    if (!idCliente) {
      return res.status(401).json({ mensaje: 'No autenticado' });
    }

    const perfil = await ClientesModel.obtenerPerfil(idCliente);

    if (!perfil) {
      return res
        .status(404)
        .json({ mensaje: 'Perfil no encontrado' });
    }

    res.json(perfil);
  } catch (error) {
    console.error('Error al obtener perfil:', error);
    res.status(500).json({ mensaje: 'Error al obtener perfil' });
  }
}

export default {
  register,
  login,
  getMiPerfil
};`}
  </code>
</pre>

  <div className="cuadro-didactico">
  <h4>Qué hace exactamente este controlador</h4>
  <div className="cuadro-didactico__grid">
    <div className="cuadro-didactico__item">
      <h5>Registro (POST /api/auth/register)</h5>
      <p>
        Valida que lleguen nombre, email y contraseña. Comprueba que el email no exista,
        genera un <code>passwordHash</code> con <code>bcrypt</code> y delega en el modelo
        para crear el cliente. Después genera un token JWT y devuelve al frontend los datos
        básicos del usuario (sin contraseña) junto con el token.
      </p>
    </div>

    <div className="cuadro-didactico__item">
      <h5>Login (POST /api/auth/login)</h5>
      <p>
        Localiza al usuario por email y verifica dos cosas: que la cuenta esté activa
        y que la contraseña sea correcta comparando el texto plano con
        <code>password_hash</code> usando <code>bcrypt.compare</code>.
        Si todo está bien, genera un token JWT y devuelve los datos del usuario
        sin incluir información sensible.
      </p>
    </div>

    <div className="cuadro-didactico__item">
      <h5>Token JWT</h5>
      <p>
        El token incluye <code>id</code>, <code>email</code>, <code>nombre</code> y
        <code>rol</code>. No incluye <code>password_hash</code>. Este token se enviará
        en futuras peticiones a rutas protegidas (como <code>/api/mi-perfil</code>)
        y será validado por un middleware de autenticación.
      </p>
    </div>

    <div className="cuadro-didactico__item">
      <h5>Mi perfil (GET /api/mi-perfil)</h5>
      <p>
        Es una ruta protegida que utiliza el <code>id</code> almacenado en el token
        para consultar la base de datos y devolver los datos visibles del cliente.
        En este proyecto, la sección de perfil es solo de lectura: el usuario
        no edita desde la web sus datos personales.
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
  <code>
{`// routes/auth.routes.js
import { Router } from 'express';
import { register, login, getMiPerfil } from '../controllers/auth.controller.js';
import { verificarToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Registro de usuario
router.post('/register', register);

// Login de usuario
router.post('/login', login);

// Perfil del usuario autenticado (ruta protegida)
router.get('/mi-perfil', verificarToken, getMi-perfil);

export default router;`}
  </code>
</pre>



      <p>
        Y en <code className="etiqueta-codigo">server.js</code> montamos este
        grupo de rutas bajo <code>/api/auth</code> es una ampliacion del server que tienes.
      </p>

   <pre className="bloque-codigo">
  <code>
{`// server.js
import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import productosRoutes from './routes/productos.routes.js';

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas del proyecto
app.use('/api/auth', authRoutes);
app.use('/api/productos', productosRoutes);

// Más rutas vendrán después...

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor iniciado en puerto', PORT);
});
`}
  </code>
</pre>



<h3>6️⃣ Probar registro y login</h3>

<p>
  Una vez creadas las rutas <code>/api/auth/register</code> y
  <code>/api/auth/login</code>, junto con el middleware de verificación JWT,
  ya podemos probar el sistema de autenticación del proyecto BAZAR.  
  Estas pruebas son fundamentales porque el token generado aquí será
  necesario para acceder a cualquier ruta protegida, como
  <code>/api/auth/mi-perfil</code> o <code>/api/pedidos/mios</code>.
</p>

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
        <td><code>POST</code></td>
        <td>
          <code>http://localhost:3000/api/auth/register</code>
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
        <td><code>POST</code></td>
        <td><code>http://localhost:3000/api/auth/login</code></td>
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
  Después de un login correcto, copia el <strong>token JWT</strong> que
  devuelve la API.  
  El frontend deberá enviarlo en la cabecera:
  <code>Authorization: Bearer &lt;token&gt;</code>  
  para acceder a rutas protegidas como
  <code>/api/auth/mi-perfil</code> o <code>/api/pedidos/mios</code>.
</div>

<h3>🧪 Actividad guiada</h3>

<ul className="lista-simple">
  <li>
    Registra al menos dos usuarios distintos y comprueba en phpMyAdmin
    que aparecen en la tabla <code>clientes</code> con campos como
    <code>rol</code>, <code>activo</code> y <code>password_hash</code>.
  </li>

  <li>
    Haz login con un usuario correcto y con uno incorrecto.
    Observa la diferencia entre las respuestas:
    <strong>200 OK</strong> para credenciales válidas y
    <strong>401 Unauthorized</strong> cuando el email o la contraseña no coinciden.
  </li>

  <li>
    Examina el campo <code>password_hash</code> en la tabla.
    Comenta por qué:
    <ul>
      <li>no coincide con la contraseña original,</li>
      <li>no se puede revertir (bcrypt es un hash unidireccional),</li>
      <li>esto protege al usuario incluso si alguien accede a la base de datos.</li>
    </ul>
  </li>

  <li>
    Desde el frontend, guarda el token en memoria
    (<code>localStorage</code> o <code>AuthContext</code>) y úsalo para acceder
    a la ruta protegida:
    <code>/api/auth/mi-perfil</code>.
  </li>

  <li>
    Prueba a llamar a <code>/api/auth/mi-perfil</code> SIN token
    y comprueba que la API devuelve:
    <strong>401 – Falta cabecera Authorization</strong>.
  </li>

  <li>
    Ahora prueba a enviar un token manipulado y observa que el backend
    devuelve:
    <strong>401 – Token inválido o expirado</strong>.
  </li>
</ul>

<h3>🔍 Qué está pasando realmente (explicación profesional)</h3>

<p>
  Cuando el usuario hace login correctamente, el backend genera un
  <strong>token JWT</strong> que contiene datos esenciales:
  <code>id</code>, <code>email</code>, <code>nombre</code>, <code>rol</code>.
  Este token está firmado con <code>JWT_SECRET</code>, así que nadie puede
  inventárselo.
</p>

<p>
  Cada vez que el frontend necesita acceder a una ruta privada, debe enviar
  ese token en:
  <code>Authorization: Bearer &lt;token&gt;</code>.
</p>

<p>
  El middleware <code>verificarToken</code> se ejecuta ANTES de la ruta final
  y:
</p>

<ul className="lista-simple">
  <li>Comprueba la existencia de la cabecera</li>
  <li>Extrae el token</li>
  <li>Lo valida con <code>jwt.verify</code></li>
  <li>Si es correcto, coloca los datos del usuario en <code>req.user</code></li>
  <li>Y deja pasar la petición al controlador</li>
</ul>

<p>
  Esto permite que los controladores usen directamente
  <code>req.user.id</code> sin que el frontend envíe el
  <code>cliente_id</code>, lo cual es una protección muy importante.
</p>

<p>
  Gracias a este sistema, el backend siempre sabe quién está realizando
  la petición, y el frontend puede adaptar la interfaz mostrando:
  <strong>Mi perfil</strong>, <strong>Mis pedidos</strong> o el botón de
  <strong>Cerrar sesión</strong>.
</p>

<h3>✅ Resumen de la lección</h3>

<ul className="lista-simple">
  <li>
    Hemos configurado la tabla <code>clientes</code> según la guía oficial,
    incluyendo <code>password_hash</code>, <code>rol</code> y <code>activo</code>.
  </li>

  <li>
    Hemos implementado registro y login usando:
    <code>bcryptjs</code> para cifrado de contraseñas y
    <code>jsonwebtoken</code> para generar tokens.
  </li>

  <li>
    Hemos creado un <strong>modelo de clientes</strong> seguro y minimalista:
    <code>buscarPorEmail()</code>, <code>crearCliente()</code> y
    <code>obtenerPerfil()</code>.
  </li>

  <li>
    Hemos creado las rutas de autenticación:
    <code>/api/auth/register</code>, <code>/api/auth/login</code> y
    <code>/api/auth/mi-perfil</code>.
  </li>

  <li>
    Hemos implementado un <strong>middleware JWT</strong> que valida cada
    petición protegida antes de llegar al controlador.
  </li>

  <li>
    El frontend debe enviar el token en cada petición privada usando
    <code>Authorization: Bearer &lt;token&gt;</code>.
  </li>

  <li>
    Con todo esto, ya tenemos un sistema de autenticación completo,
    seguro y totalmente funcional para el proyecto BAZAR.
  </li>
</ul>
    </article>
  </details>
</section>

<section className="section" id="b3-leccion5">
  <details open>
    <summary>Pedidos y líneas de pedido (relación N–M)</summary>

    <article className="card">
      <h2>Pedidos y líneas de pedido (relación N–M)</h2>

      <p>
        En esta lección creamos el módulo de <strong>pedidos</strong> del proyecto BAZAR.
        Aquí conectamos a los <strong>clientes</strong> con los <strong>productos</strong>
        mediante una relación <strong>N–M</strong> (muchos a muchos). Es una de las partes
        más importantes de todo el backend, y requiere entender claramente cómo se organiza
        la información en una base de datos relacional.
      </p>

      <p>
        Un <strong>pedido</strong> pertenece a un cliente y contiene información como:
        fecha, estado y un conjunto de <strong>líneas de pedido</strong>.
        Cada línea indica el <strong>producto</strong> comprado y la <strong>cantidad</strong>.
      </p>

      <div className="cuadro-didactico">
        <h4>🧩 ¿Qué tablas intervienen?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>clientes</h5>
            <p>Quién hace el pedido (se obtiene desde el token JWT).</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>productos</h5>
            <p>Qué se vende: nombre, precio, imágenes, categoría…</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>pedidos</h5>
            <p>Cabecera del pedido: cliente, estado, fecha, total.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>pedidos_productos</h5>
            <p>Tabla intermedia: productos y cantidades del pedido.</p>
          </div>
        </div>
      </div>

      <h3>🧠 1️⃣ Entendiendo la relación N–M</h3>

      <p>
        La relación entre pedidos y productos es de tipo <strong>muchos a muchos</strong>.
        Un pedido puede tener muchos productos, y un mismo producto puede aparecer en muchos pedidos.
      </p>

      <div className="cuadro-didactico">
        <h4>📘 Diagrama conceptual</h4>
        <p><strong>clientes</strong> 1 —— N <strong>pedidos</strong></p>
        <p><strong>pedidos</strong> 1 —— N <strong>pedidos_productos</strong> N —— 1 <strong>productos</strong></p>
      </div>

      <p>
        La tabla <code>pedidos_productos</code> resuelve esta relación N–M permitiendo indicar:
        “En el pedido X, el producto Y fue comprado Z veces”.
      </p>

      <h3>📐 2️⃣ Estructura REAL de nuestras tablas</h3>

      <p>
        Según tu <strong>script oficial init-db.js</strong>, las tablas importantes se crean así:
      </p>

      <pre className="bloque-codigo">
        <code>{`CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  estado ENUM('carrito','pendiente','pagado','enviado','cancelado')
    NOT NULL DEFAULT 'carrito',
  total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE pedidos_productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pedido_id INT NOT NULL,
  producto_id INT NOT NULL,
  cantidad INT NOT NULL,
  precio_unitario DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id)
);`}</code>
      </pre>

      <div className="cuadro-didactico">
        <h4>🔎 Cosas importantes que ya hacemos bien</h4>
        <ul className="lista-simple">
          <li>El estado empieza en <strong>carrito</strong>.</li>
          <li>El <strong>total</strong> siempre lo recalcula el backend.</li>
          <li>Guardamos <strong>precio_unitario</strong> en cada línea → precio histórico.</li>
          <li>La FK <code>cliente_id</code> viene del <strong>token JWT</strong>, no del frontend.</li>
        </ul>
      </div>

      <h3>🧩 3️⃣ ¿Qué debe permitir nuestra API de pedidos?</h3>

      <p>El módulo de pedidos debe permitir:</p>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Operación</th>
              <th>Ruta</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Crear pedido</td>
              <td><code>POST /api/pedidos</code></td>
              <td>Crea un nuevo pedido vacío para el usuario autenticado.</td>
            </tr>
            <tr>
              <td>Añadir producto</td>
              <td><code>POST /api/pedidos/:id/productos</code></td>
              <td>Añade una línea: producto + cantidad + precio_unitario.</td>
            </tr>
            <tr>
              <td>Ver pedido</td>
              <td><code>GET /api/pedidos/:id</code></td>
              <td>Devuelve la cabecera y sus líneas.</td>
            </tr>
            <tr>
              <td>Mis pedidos</td>
              <td><code>GET /api/pedidos/mios</code></td>
              <td>Devuelve todos los pedidos del cliente autenticado.</td>
            </tr>
            <tr>
              <td>Cambiar estado</td>
              <td><code>PUT /api/pedidos/:id/estado</code></td>
              <td>Cambia el estado de un pedido (solo si pertenece al usuario).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="nota">
        ❗ En nuestra API **no existe** “pedidos de cualquier cliente”. Solo un administrador podría ver todos.
      </p>

      <h3>⚙️ 4️⃣ Modelo de pedidos — versión profesional</h3>

      <p>
        Creamos <code>models/pedidos.model.js</code>.  
        Esta versión está ajustada a tu **guía oficial**, con <strong>precio histórico</strong>
        y recalculado del total en el backend.
      </p>

      <pre className="bloque-codigo">
        <code>
{`// models/pedidos.model.js
import pool from '../config/db.js';

// Crear pedido vacío
export async function crearPedido(clienteId) {
  const [result] = await pool.query(
    'INSERT INTO pedidos (cliente_id) VALUES (?)',
    [clienteId]
  );
  return { id: result.insertId, cliente_id: clienteId, estado: 'carrito' };
}

// Añadir producto al pedido
export async function agregarProducto({ pedidoId, productoId, cantidad }) {
  // Obtener precio actual del producto
  const [[producto]] = await pool.query(
    'SELECT precio FROM productos WHERE id = ?',
    [productoId]
  );

  const precio_unitario = producto.precio;

  const [result] = await pool.query(
    'INSERT INTO pedidos_productos (pedido_id, producto_id, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
    [pedidoId, productoId, cantidad, precio_unitario]
  );

  // Recalcular total del pedido
  await pool.query(
    \`UPDATE pedidos
     SET total = (SELECT SUM(cantidad * precio_unitario) FROM pedidos_productos WHERE pedido_id = ?)
     WHERE id = ?\`,
    [pedidoId, pedidoId]
  );

  return { id: result.insertId, pedido_id: pedidoId, producto_id: productoId, cantidad, precio_unitario };
}

// Cabecera del pedido
export async function obtenerPedido(id) {
  const [rows] = await pool.query(
    'SELECT id, cliente_id, fecha, estado, total FROM pedidos WHERE id = ?',
    [id]
  );
  return rows[0];
}

// Líneas del pedido
export async function obtenerLineas(id) {
  const [rows] = await pool.query(
    \`SELECT 
      pp.id,
      pp.cantidad,
      pp.precio_unitario,
      pr.id AS producto_id,
      pr.nombre,
      pr.imagen_url
     FROM pedidos_productos pp
     JOIN productos pr ON pr.id = pp.producto_id
     WHERE pp.pedido_id = ?\`,
    [id]
  );
  return rows;
}

// Pedidos del usuario autenticado
export async function obtenerPedidosDelUsuario(clienteId) {
  const [rows] = await pool.query(
    'SELECT id, fecha, estado, total FROM pedidos WHERE cliente_id = ? ORDER BY fecha DESC',
    [clienteId]
  );
  return rows;
}

// Actualizar estado
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

      <div className="cuadro-didactico">
        <h4>💡 Ideas clave del modelo</h4>
        <ul className="lista-simple">
          <li>Siempre guardamos <strong>precio_unitario</strong>: precio histórico.</li>
          <li>El <strong>total</strong> lo calcula MySQL, nunca el frontend.</li>
          <li>El pedido empieza en estado <strong>carrito</strong>.</li>
          <li>No existen operaciones “de administrador” en este proyecto.</li>
        </ul>
      </div>

      <h3>🕹 5️⃣ Controlador completo de pedidos</h3>

      <p>
        Archivo: <code>controllers/pedidos.controller.js</code>.  
        Aquí ya usamos <strong>req.user.id</strong> en lugar de <code>cliente_id</code>.
      </p>

      <pre className="bloque-codigo">
        <code>
{`// controllers/pedidos.controller.js
import * as Modelo from '../models/pedidos.model.js';

// Crear pedido vacío
export async function crearPedido(req, res) {
  try {
    const clienteId = req.user.id;
    const pedido = await Modelo.crearPedido(clienteId);
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear pedido' });
  }
}

// Añadir producto a pedido
export async function agregarProducto(req, res) {
  try {
    const pedidoId = req.params.id;
    const { producto_id, cantidad } = req.body;

    const linea = await Modelo.agregarProducto({
      pedidoId,
      productoId: producto_id,
      cantidad
    });

    res.status(201).json(linea);
  } catch {
    res.status(500).json({ mensaje: 'Error al agregar producto' });
  }
}

// Ver pedido completo
export async function obtenerPedido(req, res) {
  try {
    const idPedido = req.params.id;

    const pedido = await Modelo.obtenerPedido(idPedido);
    const lineas = await Modelo.obtenerLineas(idPedido);

    res.json({ pedido, lineas });
  } catch {
    res.status(500).json({ mensaje: 'Error al obtener pedido' });
  }
}

// Pedidos del usuario autenticado
export async function obtenerMisPedidos(req, res) {
  try {
    const clienteId = req.user.id;
    const pedidos = await Modelo.obtenerPedidosDelUsuario(clienteId);
    res.json(pedidos);
  } catch {
    res.status(500).json({ mensaje: 'Error al obtener pedidos' });
  }
}

// Cambiar estado del pedido
export async function actualizarEstado(req, res) {
  try {
    const id = req.params.id;
    const { estado } = req.body;

    const actualizado = await Modelo.actualizarEstado(id, estado);
    res.json(actualizado);
  } catch {
    res.status(500).json({ mensaje: 'Error al actualizar estado' });
  }
}
`}
        </code>
      </pre>

      <h3>🛣 6️⃣ Rutas de pedidos (con protección JWT)</h3>

      <pre className="bloque-codigo">
        <code>
{`// routes/pedidos.routes.js
import { Router } from 'express';
import { verificarToken } from '../middlewares/auth.middleware.js';
import {
  crearPedido,
  agregarProducto,
  obtenerPedido,
  obtenerMisPedidos,
  actualizarEstado
} from '../controllers/pedidos.controller.js';

const router = Router();

router.post('/', verificarToken, crearPedido);
router.post('/:id/productos', verificarToken, agregarProducto);
router.get('/:id', verificarToken, obtenerPedido);
router.get('/mios', verificarToken, obtenerMisPedidos);
router.put('/:id/estado', verificarToken, actualizarEstado);

export default router;`}
        </code>
      </pre>

      <h3>🧪 7️⃣ Ejemplo completo del flujo</h3>

      <ol className="lista-simple">
        <li>
          <strong>Crear pedido vacío</strong>  
          (ya no enviamos cliente_id, viene del token)
          <pre className="bloque-codigo">
            <code>
POST /api/pedidos
Authorization: Bearer &lt;token&gt;
            </code>
          </pre>
        </li>

      

        <li>
          <strong>Ver pedido</strong>
          <pre className="bloque-codigo">
            <code>GET /api/pedidos/10</code>
          </pre>
        </li>

        <li>
          <strong>Mis pedidos</strong>
          <pre className="bloque-codigo">
            <code>GET /api/pedidos/mios</code>
          </pre>
        </li>
      </ol>

      <div className="cuadro-didactico">
        <h4>🎓 Por qué es importante esta arquitectura</h4>
        <p>
          Separar <strong>modelo → controlador → rutas</strong> es la forma profesional
          de organizar un backend moderno. React recibe respuestas limpias, JSON bien
          estructurado y errores claros.
        </p>
        <p>
          Además, gracias al middleware JWT, el backend siempre sabe quién hace la
          petición y evita enviar <code>cliente_id</code> desde React.
        </p>
      </div>

      <h3>🎯 Actividad guiada</h3>

      <ul className="lista-simple">
        <li>Crea un pedido y añádele al menos tres productos.</li>
        <li>Cambia el estado del pedido siguiendo los pasos del ecommerce real.</li>
        <li>Crea tu propia versión de “Mis pedidos” en React.</li>
        <li>Implementa un botón “Ver detalles” que llame a <code>/api/pedidos/:id</code>.</li>
      </ul>

      <h3>🏁 Resumen de la lección</h3>

      <ul className="lista-simple">
        <li>Has entendido la relación N–M entre pedidos y productos.</li>
        <li>Has creado un modelo profesional de pedidos con precio histórico.</li>
        <li>Has implementado un controlador limpio y escalable.</li>
        <li>Has protegido todas las rutas con un middleware JWT.</li>
        <li>Has aprendido un flujo real de ecommerce que te servirá para proyectos futuros.</li>
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
          Por eso <strong>no tiene controlador ni modelo propios</strong>.Pero lo tendría si tuviera su propia lógica,
          por ejemplo añade valoraciones, descuentos o devoluciones.
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
  <details open>
    <summary>Middlewares y protección de rutas con JWT</summary>

    <article className="card">
      <h2>Middlewares y protección de rutas con JWT</h2>

      <p>
        En esta lección aprenderás qué es un <strong>middleware</strong> en Express
        y cómo utilizamos esta herramienta para <strong>proteger rutas privadas</strong>
        mediante <strong>tokens JWT</strong>. Esto es esencial para garantizar que
        solo clientes autenticados puedan crear pedidos, ver sus pedidos o acceder
        a su página de perfil.
      </p>

      <p>
        Según la guía oficial del proyecto BAZAR, cualquier usuario puede navegar por
        la tienda, ver productos y añadirlos a un carrito local. Pero para terminar
        un pedido o acceder a información personal, el usuario debe iniciar sesión.
      </p>

      <ul className="lista-simple">
        <li>Los clientes sin sesión pueden navegar y añadir productos al carrito.</li>
        <li>
          Al intentar completar una compra, si no está logado, React muestra el aviso:
          <em>“Por favor, regístrese o inicie sesión para completar su pedido.”</em>
        </li>
        <li>
          Si el usuario sí está logado (token válido), tendrá acceso a rutas privadas,
          como “Mi perfil” o “Mis pedidos”.
        </li>
      </ul>

      <p>
        Para que esto funcione, el backend necesita saber <strong>quién es el cliente</strong>.
        Y la forma estándar de conseguirlo es con un middleware que verifique un token JWT.
      </p>

      <h3>1️⃣ ¿Qué es un middleware en Express?</h3>

      <p>
        Un middleware es una función que Express ejecuta <em>antes</em> de llegar al
        controlador final. Siempre recibe tres parámetros: <code>req</code>,
        <code>res</code> y <code>next</code>.
      </p>

      <pre className="bloque-codigo">
        <code>{`export function miMiddleware(req, res, next) {
  // Podemos inspeccionar o modificar req
  // Podemos enviar una respuesta
  // O podemos dejar que la petición continúe
  next();
}`}</code>
      </pre>

      <p>La ejecución sigue este flujo:</p>

      <pre className="bloque-codigo">
        <code>{`Cliente → (Middleware 1) → (Middleware 2) → (Ruta final) → Respuesta`}</code>
      </pre>

      <div className="cuadro-didactico">
        <h4>¿Para qué usamos los middlewares?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Autenticación</h5>
            <p>Verificar si el usuario está autenticado mediante un token JWT.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Protección</h5>
            <p>
              Bloquear rutas privadas (crear pedidos, ver pedidos, consultar perfil) a usuarios sin login.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Validación</h5>
            <p>Revisar que los datos enviados por el frontend son correctos.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Logs</h5>
            <p>Registrar peticiones para depuración.</p>
          </div>
        </div>
      </div>

      <h3>2️⃣ Middleware de log (ejemplo básico)</h3>

      <pre className="bloque-codigo">
        <code>{`// server.js (fragmento)
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
});`}</code>
      </pre>

      <h3>3️⃣ Middleware de autenticación con JWT</h3>

      <p>
        El middleware JWT comprueba si la cabecera
        <code>Authorization: Bearer &lt;token&gt;</code> contiene un token válido.
        Si lo es, coloca los datos del cliente dentro de <code>req.user</code>.
      </p>

      <pre className="bloque-codigo">
        <code>{`// middlewares/auth.middleware.js
import jwt from 'jsonwebtoken';

export function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ mensaje: 'Falta cabecera Authorization' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.id,
      email: decoded.email,
      nombre: decoded.nombre,
      rol: decoded.rol
    };

    next();
  } catch (error) {
    console.error('Error al verificar token:', error);
    return res.status(401).json({ mensaje: 'Token inválido o expirado' });
  }
}`}</code>
      </pre>

      <div className="cuadro-didactico">
        <h4>¿Qué valida este middleware?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>1. Que exista la cabecera Authorization</h5>
          </div>
          <div className="cuadro-didactico__item">
            <h5>2. Que el formato sea “Bearer &lt;token&gt;”</h5>
          </div>
          <div className="cuadro-didactico__item">
            <h5>3. Que el token sea auténtico y no haya expirado</h5>
          </div>
          <div className="cuadro-didactico__item">
            <h5>4. Que el usuario quede disponible en req.user</h5>
          </div>
        </div>
      </div>

      <h3>4️⃣ Proteger rutas privadas</h3>

      <p>
        Para proteger rutas basta con añadir <code>verificarToken</code> antes
        del controlador. Ejemplo con el módulo de pedidos:
      </p>

      <pre className="bloque-codigo">
        <code>{`// routes/pedidos.routes.js
import { Router } from 'express';
import * as pedidosController from '../controllers/pedidos.controller.js';
import { verificarToken } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/', verificarToken, pedidosController.crearPedido);
router.get('/mios', verificarToken, pedidosController.getMisPedidos);
router.post('/:id/productos', verificarToken, pedidosController.agregarProducto);

export default router;`}</code>
      </pre>

      <p>
        Si el token es incorrecto o no existe, el middleware devolverá un
        <code>401 Unauthorized</code>. El frontend podrá usar este código para mostrar el mensaje:
        <em>“Por favor, inicia sesión para continuar.”</em>
      </p>

      <h3>5️⃣ Uso de req.user en los controladores</h3>

      <p>
        Como el middleware ya coloca la información del usuario autenticado en
        <code>req.user</code>, no necesitamos que React envíe manualmente el
        <code>cliente_id</code>.
      </p>

      <pre className="bloque-codigo">
        <code>{`// controllers/pedidos.controller.js
export async function crearPedido(req, res) {
  try {
    const clienteId = req.user.id; // viene del token

    const pedido = await PedidosModel.crearPedido(clienteId);
    return res.status(201).json(pedido);
  } catch (error) {
    console.error('Error al crear pedido:', error);
    return res.status(500).json({ mensaje: 'Error al crear pedido' });
  }
}`}</code>
      </pre>

      <h3>6️⃣ Conexión con React (experiencia del usuario)</h3>

      <ul className="lista-simple">
        <li>Tras el login, guardamos el token JWT en localStorage.</li>
        <li>
          Para rutas privadas (crear pedido, ver pedidos, mi perfil), React envía:
          <code>Authorization: Bearer &lt;token&gt;</code>
        </li>
        <li>El middleware valida el token y da acceso al controlador.</li>
        <li>
          Si la validación falla, el backend responde <code>401</code> y React puede mostrar
          un mensaje de “Necesitas iniciar sesión”.
        </li>
        <li>
          Para mostrar botones como <strong>“Mi perfil”</strong>, basta comprobar:
          <code>isLogged = !!token</code>.
        </li>
      </ul>

      <h3>✅ Resumen</h3>

      <ul className="lista-simple">
        <li>Un middleware es código que Express ejecuta antes de la ruta final.</li>
        <li>Sirve para añadir autenticación, validación, logs o cualquier filtro.</li>
        <li>
          <code>verificarToken</code> protege rutas para clientes autenticados.
        </li>
        <li>
          <code>req.user</code> contiene los datos del cliente extraídos del token.
        </li>
        <li>
          React usa el token para decidir qué componentes mostrar y para acceder a
          las rutas privadas del backend.
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
