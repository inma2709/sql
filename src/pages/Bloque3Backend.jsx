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
                    <li>
              <a href="#b3-leccion1">Servidor con Node.js y Express</a>
            </li>
              <a href="#b3-init-script">Script de inicialización de tablas</a>
            </li>
      
            <li>
              <a href="#b3-leccion2">Modelo y controlador de productos (MVC + MySQL)</a>
            </li>
            <li>
              <a href="#b3-leccion4"> Usuarios, registro y login (JWT)</a>
            </li>
            <li>
              <a href="#b3-leccion5"> Pedidos y líneas de pedido (relación N–M)</a>
            </li>
            <li>
              <a href="#b3-tabla-intermedia"> ¿Por qué la tabla intermedia no tiene modelo propio?</a>
            </li>
           
            <li>
              <a href="#b3-introduccion-filtros-usuario"> Filtros y área personal del usuario</a>
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
         <div class="cuadro-didactico__item">
  <h5>mysql2/promise</h5>
  <p>
    El módulo <code>mysql2/promise</code> nos permite trabajar con MySQL 
    utilizando <strong>async/await</strong>, lo que hace que el código sea más 
    claro, moderno y fácil de mantener. En lugar de usar callbacks o funciones 
    anidadas, podemos escribir consultas de forma secuencial y legible.
  </p>
  <p>
    Además, esta versión basada en promesas es la recomendada para proyectos 
    profesionales porque facilita el uso de <strong>pools de conexiones</strong>, 
    captura mejor los errores y se integra de forma natural con la arquitectura 
    de controladores en Express. También evita el &quot;callback hell&quot; y permite 
    que todo el backend siga el mismo estilo asíncrono.
  </p>
  <p>
    Se utiliza normalmente en el archivo de configuración de la base de datos
    (por ejemplo <code>db.js</code>) para crear un <strong>pool de conexiones</strong>
    basado en promesas. Esto permite usar <strong>async/await</strong> en todos
    los controladores del backend, haciendo que el código sea más claro, moderno
    y fácil de depurar.
  </p>
</div>

         <div class="cuadro-didactico__item">
  <h5>Pool de conexiones</h5>
  <p>
    Un <strong>pool de conexiones</strong> es un conjunto de conexiones a la
    base de datos que el servidor mantiene <em>abiertas y listas para usar</em>.
    En lugar de crear y cerrar una conexión nueva en cada petición, la
    aplicación toma una del pool, ejecuta la consulta y la devuelve para que
    otra petición pueda reutilizarla.
  </p>
  <p>
    Esta técnica mejora enormemente el <strong>rendimiento</strong>, evita
    la saturación de MySQL, reduce la latencia y previene errores como
    <code>Too many connections</code>. Es la forma profesional y recomendada de
    trabajar con bases de datos en aplicaciones reales con múltiples usuarios.
  </p>
</div>

          <div class="cuadro-didactico__item">
  <h5>Variables de entorno</h5>
  <p>
    Las <strong>variables de entorno</strong> permiten guardar información sensible
    (como el usuario de MySQL, contraseñas, puertos o tokens) en un archivo 
    separado llamado <code>.env</code>, evitando que estos datos aparezcan 
    directamente en el código fuente.
  </p>
  <p>
    Esto mejora la <strong>seguridad</strong> del proyecto, facilita el despliegue 
    en distintos entornos (desarrollo, pruebas, producción) y evita que subamos 
    datos privados a GitHub. El backend solo “lee” estas variables mediante 
    <code>process.env</code>, por ejemplo:
    <code>process.env.DB_PASSWORD</code>.
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
//import productosRoutes from './routes/productos.routes.js';

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

// Rutas de productos (todavia no esta creada)
//app.use('/api/productos', productosRoutes);

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

export default productosRoutes;`}
  </code>
</pre>

      <div className="nota nota-importante">
        Más adelante, cuando implementemos el modelo MVC, estas rutas llamarán a{" "}
        <strong>controladores</strong> que hablarán con la base de datos y devolverán
        los datos de verdad.De momento hemos creado una instancia en rutas y ahora si podemos llevarla a servidor
        y llamarla, nos devolverá la respuesta estática que hemos definido.Y tambien podemos probar la ruta para saber si estamos conectados a bbdd.
        Debe darnos una conexion exitosa en api/probar-bbdd. 
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
{`// backend-bazar/init-db.js
import 'dotenv/config';
import pool from './config/db.js';

/**
 * ==========================================
 * SCRIPT DE INICIALIZACIÓN DE BASE DE DATOS
 * ==========================================
 * 
 * PROPÓSITO:
 * Este script crea todas las tablas necesarias para el funcionamiento
 * del sistema de bazar (tienda online).
 * 
 * USO:
 * node init-db.js
 * 
 * CARACTERÍSTICAS:
 * - Crea las tablas solo si no existen (CREATE TABLE IF NOT EXISTS)
 * - Establece relaciones entre tablas (FOREIGN KEY)
 * - Define índices para optimizar consultas
 * - Inserta datos de ejemplo para facilitar las pruebas
 * 
 * ESTRUCTURA DE LA BASE DE DATOS:
 * 1. clientes - Usuarios registrados en el sistema
 * 2. categorias - Categorías de productos
 * 3. productos - Catálogo de productos
 * 4. pedidos - Cabecera de pedidos de clientes
 * 5. pedidos_productos - Líneas de pedido (productos específicos)
 */

/**
 * Función principal que orquesta la creación de todas las tablas
 */
async function crearTablas() {
  try {
    console.log("🚀 Iniciando creación de base de datos...");

    // Crear tablas en orden correcto (respetando dependencias)
    await crearTablaClientes();
    
    await crearTablaProductos();
    await crearTablaPedidos();
    await crearTablaPedidosProductos();
    
    // Insertar datos de ejemplo para pruebas
    await insertarDatosDeEjemplo();

    console.log('✅ Base de datos inicializada correctamente.');
    console.log('📊 Las tablas están listas para usar.');
    console.log('🧪 Se han insertado datos de ejemplo para pruebas.');
    
    process.exit(0);

  } catch (error) {
    console.error('❌ Error al inicializar la base de datos:', error);
    process.exit(1);
  }
}

/**
 * ==========================================
 * TABLA: CLIENTES
 * ==========================================
 * 
 * PROPÓSITO: Almacena los usuarios registrados en el sistema
 * 
 * CAMPOS:
 * - id: Identificador único (clave primaria)
 * - nombre: Nombre completo del cliente
 * - email: Dirección de correo (única, usada para login)
 * - password: Contraseña hasheada con bcrypt
 * - creado_en: Fecha de registro del usuario
 */
async function crearTablaClientes() {
  console.log("👤 Creando tabla 'clientes'...");
  
  await pool.query(\`
    CREATE TABLE IF NOT EXISTS clientes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(100) NOT NULL COMMENT 'Nombre completo del cliente',
      email VARCHAR(150) NOT NULL UNIQUE COMMENT 'Email único para login',
      password VARCHAR(255) NOT NULL COMMENT 'Contraseña hasheada con bcrypt',
      creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de registro',
      
      INDEX idx_email (email) COMMENT 'Índice para optimizar login por email'
    ) ENGINE=InnoDB 
      COMMENT='Usuarios registrados en el sistema'
  \`);
  
  console.log("✅ Tabla 'clientes' creada");
}

/**
 * ==========================================
 * TABLA: PRODUCTOS
 * ==========================================
 * 
 * PROPÓSITO: Catálogo completo de productos disponibles
 * 
 * CAMPOS:
 * - id: Identificador único del producto
 * - nombre: Nombre del producto
 * - descripcion: Descripción detallada (opcional)
 * - precio: Precio unitario del producto
 * - stock: Cantidad disponible en inventario
 * - categoria: Categoría del producto (texto simple)
 * - imagen_url: URL de la imagen del producto
 * - activo: Indica si el producto está disponible para venta
 * - creado_en: Fecha de creación del producto
 */
async function crearTablaProductos() {
  console.log("📦 Creando tabla 'productos'...");
  
  await pool.query(\`
    CREATE TABLE IF NOT EXISTS productos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(100) NOT NULL COMMENT 'Nombre del producto',
      descripcion TEXT COMMENT 'Descripción detallada del producto',
      precio DECIMAL(10,2) NOT NULL COMMENT 'Precio unitario en euros',
      stock INT DEFAULT 0 COMMENT 'Cantidad disponible en inventario',
      categoria VARCHAR(50) DEFAULT 'General' COMMENT 'Categoría del producto',
      imagen_url VARCHAR(500) DEFAULT NULL COMMENT 'URL de la imagen del producto',
      activo BOOLEAN DEFAULT TRUE COMMENT 'Producto disponible para venta',
      creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de creación',
      
      INDEX idx_categoria (categoria) COMMENT 'Índice para filtros por categoría',
      INDEX idx_activo (activo) COMMENT 'Índice para productos activos',
      INDEX idx_precio (precio) COMMENT 'Índice para ordenación por precio'
    ) ENGINE=InnoDB 
      COMMENT='Catálogo de productos disponibles en la tienda'
  \`);
  
  console.log("✅ Tabla 'productos' creada");
}

/**
 * ==========================================
 * TABLA: PEDIDOS
 * ==========================================
 * 
 * PROPÓSITO: Cabecera de pedidos realizados por clientes
 * 
 * CAMPOS:
 * - id: Identificador único del pedido
 * - cliente_id: ID del cliente que realizó el pedido (FK)
 * - estado: Estado actual del pedido en su ciclo de vida
 * - fecha: Fecha y hora de creación del pedido
 * 
 * ESTADOS POSIBLES:
 * - pendiente: Pedido creado pero no procesado
 * - pagado: Pago confirmado
 * - enviado: Pedido en camino al cliente
 * - entregado: Pedido recibido por el cliente
 * - cancelado: Pedido cancelado por algún motivo
 */
async function crearTablaPedidos() {
  console.log("🧾 Creando tabla 'pedidos'...");
  
  await pool.query(\`
    CREATE TABLE IF NOT EXISTS pedidos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      cliente_id INT NOT NULL COMMENT 'ID del cliente que realizó el pedido',
      estado ENUM('pendiente', 'pagado', 'enviado', 'entregado', 'cancelado') 
             DEFAULT 'pendiente' 
             COMMENT 'Estado actual del pedido',
      fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
            COMMENT 'Fecha y hora de creación del pedido',
      
      FOREIGN KEY (cliente_id) REFERENCES clientes(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
        
      INDEX idx_cliente_fecha (cliente_id, fecha DESC) 
        COMMENT 'Índice para consultas de pedidos por cliente',
      INDEX idx_estado (estado) 
        COMMENT 'Índice para filtros por estado'
    ) ENGINE=InnoDB 
      COMMENT='Cabecera de pedidos realizados por clientes'
  \`);
  
  console.log("✅ Tabla 'pedidos' creada");
}

/**
 * ==========================================
 * TABLA: PEDIDOS_PRODUCTOS
 * ==========================================
 * 
 * PROPÓSITO: Líneas de pedido - productos específicos dentro de cada pedido
 * 
 * CAMPOS:
 * - id: Identificador único de la línea de pedido
 * - pedido_id: ID del pedido al que pertenece esta línea (FK)
 * - producto_id: ID del producto incluido en esta línea (FK)
 * - cantidad: Cantidad de unidades del producto
 * 
 * RELACIÓN:
 * Un pedido puede tener múltiples líneas (productos diferentes)
 * Cada línea pertenece a un solo pedido
 * Cada línea referencia a un producto específico
 */
async function crearTablaPedidosProductos() {
  console.log("📋 Creando tabla 'pedidos_productos'...");
  
  await pool.query(\`
    CREATE TABLE IF NOT EXISTS pedidos_productos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      pedido_id INT NOT NULL COMMENT 'ID del pedido padre',
      producto_id INT NOT NULL COMMENT 'ID del producto incluido',
      cantidad INT DEFAULT 1 COMMENT 'Cantidad de unidades del producto',
      
      FOREIGN KEY (pedido_id) REFERENCES pedidos(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
      FOREIGN KEY (producto_id) REFERENCES productos(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
      
      INDEX idx_pedido (pedido_id) 
        COMMENT 'Índice para consultar líneas de un pedido',
      INDEX idx_producto (producto_id) 
        COMMENT 'Índice para estadísticas por producto',
        
      UNIQUE KEY unique_pedido_producto (pedido_id, producto_id) 
        COMMENT 'Evita duplicados del mismo producto en un pedido'
    ) ENGINE=InnoDB 
      COMMENT='Líneas de pedido - productos específicos en cada pedido'
  \`);
  
  console.log("✅ Tabla 'pedidos_productos' creada");
}

/**
 * ==========================================
 * INSERCIÓN DE DATOS DE EJEMPLO
 * ==========================================
 * 
 * PROPÓSITO: Facilitar las pruebas insertando datos realistas
 * 
 * CATEGORÍAS DISPONIBLES:
 * - Ropa: Productos de vestimenta
 * - Electrónicos: Dispositivos y gadgets tecnológicos  
 * - Hogar: Artículos para el hogar y decoración
 */
async function insertarDatosDeEjemplo() {
  console.log("🧪 Insertando datos de ejemplo...");

  try {
    // Limpiar datos existentes para recrear con estructura correcta
    await pool.query('DELETE FROM pedidos_productos');
    await pool.query('DELETE FROM pedidos');
    await pool.query('DELETE FROM productos');
    await pool.query('DELETE FROM clientes');

    // Resetear auto_increment
    await pool.query('ALTER TABLE productos AUTO_INCREMENT = 1');
    await pool.query('ALTER TABLE clientes AUTO_INCREMENT = 1');

    console.log("🗑️ Datos anteriores limpiados");

    // Insertar productos de ejemplo con las 3 categorías
    await pool.query(\`
      INSERT INTO productos (nombre, descripcion, precio, stock, categoria, imagen_url) VALUES 
      ('Camiseta Básica', 'Camiseta de algodón 100% en varios colores', 19.99, 50, 'Ropa', 'https://via.placeholder.com/300x300?text=Camiseta'),
      ('Pantalón Vaquero', 'Vaqueros clásicos de corte regular', 49.99, 30, 'Ropa', 'https://via.placeholder.com/300x300?text=Pantalon'),
      ('Chaqueta de Abrigo', 'Chaqueta impermeable para invierno', 79.99, 20, 'Ropa', 'https://via.placeholder.com/300x300?text=Chaqueta'),
      ('Zapatos Deportivos', 'Zapatillas cómodas para correr', 89.99, 25, 'Ropa', 'https://via.placeholder.com/300x300?text=Zapatos'),
      
      ('Smartphone XL', 'Teléfono inteligente con pantalla de 6.5 pulgadas', 299.99, 15, 'Electrónicos', 'https://via.placeholder.com/300x300?text=Smartphone'),
      ('Auriculares Bluetooth', 'Auriculares inalámbricos con cancelación de ruido', 89.99, 20, 'Electrónicos', 'https://via.placeholder.com/300x300?text=Auriculares'),
      ('Tablet 10"', 'Tablet con pantalla de alta resolución', 199.99, 18, 'Electrónicos', 'https://via.placeholder.com/300x300?text=Tablet'),
      ('Cargador Inalámbrico', 'Base de carga rápida para dispositivos', 35.99, 40, 'Electrónicos', 'https://via.placeholder.com/300x300?text=Cargador'),
      
      ('Lámpara LED', 'Lámpara de escritorio con regulador de intensidad', 35.00, 25, 'Hogar', 'https://via.placeholder.com/300x300?text=Lampara'),
      ('Cojín Decorativo', 'Cojín suave para sofá en varios colores', 18.50, 30, 'Hogar', 'https://via.placeholder.com/300x300?text=Cojin'),
      ('Espejo de Pared', 'Espejo decorativo para salón', 45.00, 12, 'Hogar', 'https://via.placeholder.com/300x300?text=Espejo'),
      ('Maceta Cerámica', 'Maceta artesanal para plantas de interior', 22.99, 35, 'Hogar', 'https://via.placeholder.com/300x300?text=Maceta')
    \`);

    // Insertar un usuario de prueba con password hasheado
    await pool.query(\`
      INSERT INTO clientes (nombre, email, password) VALUES 
      ('Usuario Prueba', 'test@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMye.JfVK7fCQpNpCPq9QdoW6lQk1K6kMSO')
    \`);

    console.log("✅ Datos de ejemplo insertados correctamente");
    console.log("👤 Usuario de prueba creado: test@example.com / 123456");
    console.log("📦 12 productos creados en 3 categorías: Ropa, Electrónicos, Hogar");

  } catch (error) {
    console.error("❌ Error insertando datos de ejemplo:", error.message);
  }
}

// Ejecutar el script
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
 * ==========================================
 * MODELO DE PRODUCTOS 
 * ==========================================
 * 

 * 
 * 
 * FUNCIONES:
 * - obtenerTodos() - Lista todos los productos activos
 * - obtenerPorId(id) - Obtiene un producto específico
 * - obtenerPorCategoria(categoria) - Filtra productos por categoría
 
 */

/**
 * Obtener todos los productos activos
 * CONSULTA : SELECT  sin JOINs
 */
export async function obtenerTodos() {
  const [rows] = await pool.query(
    \`SELECT id, nombre, descripcion, precio, stock, categoria, imagen_url, activo, creado_en
     FROM productos
     WHERE activo = 1
     ORDER BY nombre ASC\`
  );
  return rows;
}

/**
 * Obtener un producto específico por ID
 * CONSULTA SIMPLE: WHERE con parámetro
 */
export async function obtenerPorId(id) {
  const [rows] = await pool.query(
    \`SELECT id, nombre, descripcion, precio, stock, categoria, imagen_url, activo, creado_en
     FROM productos
     WHERE id = ? AND activo = 1\`,
    [id]
  );
  return rows[0]; // undefined si no existe
}

/**
 * Obtener productos filtrados por categoría; la categoría es un string en la propia tabla
 * CONSULTA : Filtro por string de categoría
 */
export async function obtenerPorCategoria(categoria) {
  const [rows] = await pool.query(
    \`SELECT id, nombre, descripcion, precio, stock, categoria, imagen_url, activo, creado_en
     FROM productos 
     WHERE activo = 1 AND categoria = ?
     ORDER BY nombre ASC\`,
    [categoria]
  );
  return rows;
}`}
        </code>
      </pre><div className="cuadro-didactico">
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
  El <strong>controlador</strong> es la parte del backend que actúa como 
  intermediario entre las peticiones HTTP del cliente y los datos que vienen de 
  la base de datos. Cuando el modelo obtiene información desde MySQL, el 
  controlador es quien la recibe, aplica cualquier lógica necesaria 
  (validaciones, filtros, cálculos, comprobaciones de permisos) y finalmente 
  prepara una <strong>respuesta en formato JSON</strong> para enviarla al 
  frontend en React.
</p>

<p>
  Cada controlador está asociado a <strong>rutas concretas</strong>, como 
  <code>/api/productos</code> o <code>/api/productos/:id</code>. Esto es 
  necesario porque cada tipo de operación necesita una intención diferente: 
  obtener todos los productos, obtener uno por ID, crear un nuevo recurso, 
  actualizarlo o eliminarlo. Separar las rutas evita confusiones, organiza el 
  código y permite que el frontend llame exactamente a la operación que necesita.
</p>

<p>
  Técnicamente, sería posible crear una única ruta “general” y que el frontend 
  pidiera absolutamente todos los datos para filtrarlos allí, pero esto no es 
  una buena práctica. El backend debe entregar <strong>solo los datos 
  necesarios</strong> en cada caso, para evitar sobrecargar la red, exponer datos 
  innecesarios y forzar al frontend a hacer trabajo que no le corresponde. Por 
  eso diseñamos rutas específicas y controladores especializados: así el backend 
  responde de forma precisa y eficiente, y el frontend recibe exactamente lo que 
  necesita para funcionar.
</p>


      <pre className="bloque-codigo">
        <code>
{`// controllers/productos.controller.js
import * as productosModel from '../models/productos.model.js';

/**
 * ==========================================
 * 📦 CONTROLADOR DE PRODUCTOS
 * ==========================================
 * 
 * Funciones para gestión de productos del bazar
 * - Obtener todos los productos
 * - Obtener producto por ID
 */

/**
 * Obtener todos los productos
 */
export async function getProductos(req, res) {
  try {
    console.log('📦 Obteniendo productos...');
    
    const productos = await productosModel.obtenerTodos();
    
    res.status(200).json({
      success: true,
      message: \`Se encontraron \${productos.length} productos\`,
      data: productos
    });
    
  } catch (error) {
    console.error('❌ Error al obtener productos:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
}
/**
 * Obtener producto por ID necesario para añadir al carrito, para ver detalles, etc.
 */
export async function getProductoById(req, res) {
  try {
    // 1️⃣ Extraemos el parámetro "id" que viene en la URL.
   /**
   * "req.params"  es  una propiedad que
   * Express añade al objeto "req". Esta propiedad contiene los parámetros dinámicos
   * definidos en la ruta (por ejemplo, /productos/:id). Express detecta esos valores
   * en la URL y los coloca automáticamente dentro de req.params para que podamos
   * acceder a ellos desde el controlador.
   */


    //    Ejemplo: GET /api/productos/15  →  req.params.id = "15"
    const { id } = req.params;
    console.log(\`🔍 Buscando producto ID: \${id}\`);
    
    // 2️⃣ Llamamos al modelo para buscar ese producto en la base de datos.
    //    productosModel.obtenerPorId(id) devuelve:
    //      - el producto completo (objeto)
    //      - o null si no existe
    const producto = await productosModel.obtenerPorId(id);
    
    // 3️⃣ Si no existe, enviamos respuesta 404 (no encontrado).
    if (!producto) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado'
      });
    }
    
    // 4️⃣ Si existe, enviamos el producto con código 200 (OK)
    res.status(200).json({
      success: true,
      message: 'Producto encontrado',
      data: producto
    });
    
  } catch (error) {
    // 5️⃣ Si ocurre algún error inesperado (servidor caído, DB rota, etc.)
    //    devolvemos estado 500 (error del servidor)
    console.error('❌ Error al obtener producto:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
}`}
        </code>
      </pre><div className="cuadro-didactico">
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

/**
 * ============================================================
 * 📘 RUTAS DE PRODUCTOS (API REST con Express)
 * ------------------------------------------------------------
 * Este archivo define todas las rutas relacionadas con "productos".
 * Cada ruta se asocia a una función del controlador, que contiene 
 * la lógica para obtener productos, obtener uno por ID, etc.
 * 
 * Express utiliza un "Router" para organizar las rutas por módulos,
 * lo que permite mantener el código limpio y escalable.
 * ============================================================
 */

import { Router } from 'express';
// Importamos todas las funciones del controlador de productos.
// Esto incluye métodos como getProductos, getProductoById, etc.
import * as productosController from '../controllers/productos.controller.js';

// Creamos una instancia de Router.
// A partir de aquí, cada método (get, post, put, delete)
// pertenece al módulo "productos".
const ProductosRouter = Router();

/**
 * ============================================================
 * 📦 RUTAS DE PRODUCTOS
 * ------------------------------------------------------------
 * A continuación definimos las rutas principales:
 *   GET /api/productos          → Obtener todos los productos
 *   GET /api/productos/:id      → Obtener un producto concreto
 * 
 * Nota:
 * Estas rutas se montarán en server.js con:
 *      app.use('/api/productos', ProductosRouter)
 * ============================================================
 */

// 🟦 Obtener todos los productos
// Ruta: GET /api/productos
// Llama a productosController.getProductos, que realiza la consulta
// a la base de datos y devuelve una lista completa.
ProductosRouter.get('/', productosController.getProductos);

// 🟦 Obtener un producto por su ID
// Ruta: GET /api/productos/:id
// ":id" es un parámetro dinámico. Express lo coloca en req.params.id.
// El controlador se encarga de validarlo y buscar el producto.
ProductosRouter.get('/:id', productosController.getProductoById);

// Exportamos el router para que pueda ser utilizado en el servidor principal.
export default ProductosRouter;`}
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
<div className="cuadro-didactico">
  <h4>Cómo viaja una petición GET /api/productos</h4>
  <p>
    En este ejemplo vamos a ver paso a paso qué ocurre cuando el frontend
    (React) hace una petición <code>GET /api/productos</code>. Verás cómo la
    petición pasa por la <strong>ruta</strong>, el <strong>controlador</strong>,
    el <strong>modelo</strong> y la <strong>base de datos</strong>, y cómo
    finalmente vuelve al frontend en formato <code>JSON</code>.
  </p>

  <div className="cuadro-didactico__grid">
    <div className="cuadro-didactico__item">
      <h5>1. Frontend → Ruta</h5>
      <p>
        React hace una petición HTTP con <code>fetch</code>  a <code>/api/productos</code>. Esa URL está
        asociada en el backend a una <strong>ruta de Express</strong>.
      </p>
    </div>

    <div className="cuadro-didactico__item">
      <h5>2. La ruta llama al controlador</h5>
      <p>
        La ruta no habla con la base de datos. Su trabajo es únicamente
        detectar la URL y el método (<code>GET</code>) y derivar la petición
        al <strong>controlador</strong> correcto (en este caso,
        <code>getProductos</code>).
      </p>
    </div>

    <div className="cuadro-didactico__item">
      <h5>3. El controlador decide qué hacer</h5>
      <p>
        El controlador lee los parámetros y la query (por ejemplo,
        <code>?categoria=tecnologia</code>). Según lo que reciba, decide qué
        función del modelo debe llamar: obtener todos los productos o filtrar
        por id. Aquí también se gestionan errores y códigos de estado
        HTTP.
      </p>
    </div>

    <div className="cuadro-didactico__item">
      <h5>4. El modelo habla con MySQL</h5>
      <p>
        El modelo encapsula toda la lógica de acceso a datos. Usa el
        <strong>pool de conexiones</strong> de <code>mysql2/promise</code> para
        ejecutar el <code>SELECT</code> en MySQL. Cuando la base de datos
        devuelve las filas, el modelo se las devuelve al controlador.
      </p>
    </div>

    <div className="cuadro-didactico__item">
      <h5>5. Respuesta en JSON al frontend</h5>
      <p>
        El controlador recibe los datos del modelo y responde directamente al
        cliente con <code>res.json(...)</code>. El frontend recibe ese JSON y
        lo pinta en pantalla (lista de tarjetas, tabla de productos, etc.).
        La ruta ya no interviene más: solo fue la “puerta de entrada”.
      </p>
    </div>
  </div>

  <div className="cuadro-didactico__nota">
    <strong>Idea clave:</strong> la ruta conecta la URL con el controlador;
    el controlador decide la lógica y llama al modelo; el modelo habla con
    la base de datos; y el controlador es quien finalmente responde al
    frontend en formato JSON.
  </div>
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
        En esta lección vamos a añadir a nuestra API la posibilidad de que un cliente se registre y pueda iniciar sesión de forma segura.
        Para conseguir esto, incorporaremos dos herramientas esenciales en casi cualquier backend moderno. Ambas son librerías externas de Node.js, instaladas mediante npm, y sirven para mejorar la seguridad de tu aplicación.
      </p>

      <div className="cuadro-didactico">
        <h4>🔐 1. bcryptjs — Librería para hashear contraseñas</h4>
        <p>
          <strong>bcryptjs</strong> es una librería de JavaScript que se utiliza para cifrar (hashear) contraseñas antes de guardarlas en la base de datos.
        </p>
        
        <ul className="lista-simple">
          <li>✅ <strong>No almacena contraseñas en texto plano</strong></li>
          <li>🔒 <strong>Convierte la contraseña en un hash irreversible</strong></li>
          <li>🛡️ <strong>Si alguien robara la base de datos, no podría ver las contraseñas reales</strong></li>
          <li>✅ <strong>Permite comparar contraseñas (login) sin necesidad de descifrarlas</strong></li>
        </ul>
        
        <p className="highlight-text">
          👉 <strong>En pocas palabras:</strong> protege las contraseñas de los usuarios usando criptografía segura.
        </p>
      </div>

      <div className="cuadro-didactico">
        <h4>🔑 2. jsonwebtoken — Librería para generar tokens JWT</h4>
        <p>
          <strong>jsonwebtoken</strong> (también llamada "JWT") es una librería de Node.js que permite crear tokens de autenticación.
        </p>
        
        <p>
          Un <strong>token JWT</strong> es un "pase digital" firmado que identifica al usuario sin necesidad de preguntar su contraseña en cada petición.
        </p>

        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>📋 Se utiliza para:</h5>
            <ul className="lista-simple">
              <li>🔐 Inicio de sesión seguro</li>
              <li>🛡️ Rutas protegidas (ver pedidos, crear pedidos, editar perfil)</li>
              <li>⏱️ Mantener la sesión activa sin almacenar datos sensibles</li>
            </ul>
          </div>
          <div className="cuadro-didactico__item">
            <h5>🔄 ¿Cómo funciona?</h5>
            <p>
              El servidor <strong>crea el token</strong> cuando el usuario inicia sesión y el navegador lo <strong>envía en cada petición privada</strong>.
              El backend puede <strong>verificar si ese token es válido</strong>, y así sabe quién es el usuario.
            </p>
          </div>
        </div>
      </div>

      {/* ============================
          BCRYPT: HASH DE CONTRASEÑAS
          ============================ */}
      <div className="cuadro-didactico">
        <h4>¿Cómo funciona <code>bcryptjs</code> y cómo se hashea una contraseña?</h4>
        <p>
          <strong>bcryptjs</strong> es una librería diseñada para convertir una
          contraseña en un <strong>hash seguro</strong> antes de guardarla en la
          base de datos. El backend nunca almacena contraseñas en texto plano, sino
          versiones encriptadas que no pueden revertirse.
        </p>

        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>1. ¿Qué es un hash?</h5>
            <p>
              Es una transformación irreversible de la contraseña.
              Si un usuario tiene como clave <code>1234</code>, bcrypt genera una
              cadena larga, aleatoria y segura.
              Es imposible recuperar la contraseña original a partir del hash.
            </p>
          </div>

          <div className="cuadro-didactico__item">
            <h5>2. ¿Qué hace bcrypt?</h5>
            <p>
              bcrypt aplica varias rondas de procesamiento (llamadas{" "}
              <strong>salt rounds</strong>) para que el hash sea extremadamente
              difícil de descifrar.
              Cuantas más rondas, más seguro, aunque también más lento calcularlo.
            </p>
          </div>

          <div className="cuadro-didactico__item">
            <h5>3. El “salt”: un valor añadido</h5>
            <p>
              Antes de generar el hash, bcrypt crea un <strong>salt</strong>, un
              valor aleatorio que se mezcla con la contraseña.
              Esto garantiza que aunque dos personas usen la misma contraseña,
              jamás tengan el mismo hash en la base de datos.
            </p>
          </div>

          <div className="cuadro-didactico__item">
            <h5>4. ¿Cómo se hashea una contraseña?</h5>
            <p>
              En el registro, el backend ejecuta:
              <code>bcrypt.hash(contraseña, saltRounds)</code>.
              El resultado es un hash protegido que se guarda en la base de datos.
              La contraseña original nunca se almacena.
            </p>
          </div>

          <div className="cuadro-didactico__item">
            <h5>5. ¿Cómo se compara al hacer login?</h5>
            <p>
              bcrypt no “desencripta” el hash.
              En su lugar compara así:
              <code>bcrypt.compare(contraseñaEscrita, hashGuardado)</code>.
              bcrypt genera internamente un nuevo hash temporal y verifica si
              coincide con el almacenado. Si coinciden, el login es válido.
            </p>
          </div>
        </div>

        <div className="cuadro-didactico__nota">
          <strong>Idea clave:</strong>
          {" "}
          Con <code>bcryptjs</code>, el backend nunca conoce ni almacena la contraseña
          real. Solo guarda un hash seguro generado con salt y varias rondas de
          encriptación, y en el login compara los hashes sin revelar la contraseña.
        </div>
      </div>

      {/* ============================
          TOKEN + JWT
          ============================ */}
      <div className="cuadro-didactico">
        <h4>¿Qué es un token y para qué sirve en el backend?</h4>
        <p>
          Un <strong>token</strong> es un código digital que identifica de forma
          segura a un usuario después de iniciar sesión. Es como un “carnet digital”
          firmado por el backend: permite demostrar quién eres sin volver a enviar la
          contraseña en cada petición.
        </p>

        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>1. ¿Qué es un token?</h5>
            <p>
              Es una cadena de texto larga y difícil de adivinar. El backend la genera
              cuando el usuario se autentica correctamente y el frontend la enviará en
              cada petición privada para demostrar su identidad.
            </p>
          </div>

          <div className="cuadro-didactico__item">
            <h5>2. ¿Por qué usamos tokens?</h5>
            <p>
              Porque no queremos que el usuario envíe su contraseña en cada petición.
              El token permite mantener la sesión activa de forma segura y eficiente,
              evitando riesgos y reduciendo carga en el servidor.
            </p>
          </div>

          <div className="cuadro-didactico__item">
            <h5>3. JWT: el formato más usado</h5>
            <p>
              Con <code>jsonwebtoken</code> generamos{" "}
              <strong>JSON Web Tokens (JWT)</strong>.
              Un JWT contiene datos como el <strong>id del usuario</strong>, su
              <strong> rol</strong> y la <strong>fecha de expiración</strong>, todo
              firmado digitalmente para evitar manipulaciones.
            </p>
          </div>

          <div className="cuadro-didactico__item">
            <h5>4. ¿Qué contiene un JWT?</h5>
            <p>
              Incluye información mínima para identificar al usuario y una firma que
              garantiza que el token no ha sido alterado. No contiene la contraseña ni
              datos sensibles.
            </p>
          </div>

          <div className="cuadro-didactico__item">
            <h5>5. ¿Cómo se usa?</h5>
            <p>
              El frontend lo guarda (por ejemplo, en <code>localStorage</code>) y lo
              envía en cada petición privada usando el encabezado:
              <code>Authorization: Bearer &lt;token&gt;</code>.
              El backend lo verifica y decide si permite o deniega el acceso.
            </p>
          </div>

          <div className="cuadro-didactico__item">
            <h5>6. ¿Quién genera el token?</h5>
            <p>
              El backend lo genera durante el login con{" "}
              <code>jsonwebtoken</code>, firmando el token con una clave secreta
              almacenada en <code>.env</code>.
            </p>
          </div>
        </div>

        <div className="cuadro-didactico__nota">
          <strong>Idea clave:</strong>
          {" "}
          El token permite que el usuario permanezca
          autenticado sin reenviar sus credenciales.
          Un JWT es seguro, portable y fácil de validar en cualquier backend moderno.
        </div>
      </div>

      {/* ============================
          TOKENS: GENERACIÓN, VERIFICACIÓN, EXPIRACIÓN
          ============================ */}
      <div className="cuadro-didactico">
        <h4>Cómo funcionan los tokens JWT: generación, verificación y expiración</h4>
        <p>
          En una API moderna, los <strong>tokens JWT</strong> permiten identificar al
          usuario una vez ha iniciado sesión. Aquí vemos cómo se generan, cómo se
          verifican en un middleware y qué ocurre cuando caducan.
        </p>

        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>1. Cómo se genera un token tras el login</h5>
            <p>
              Cuando el usuario introduce correctamente su email y contraseña, el
              backend valida las credenciales y genera un <strong>JWT</strong> usando
              la librería <code>jsonwebtoken</code>. El token incluye información
              mínima del usuario (por ejemplo, su <strong>id</strong>) y una{" "}
              <strong>fecha de expiración</strong>.
              El backend responde al frontend enviando este token en formato JSON.
            </p>
          </div>

          <div className="cuadro-didactico__item">
            <h5>2. Cómo se verifica un token en un middleware</h5>
            <p>
              En las rutas protegidas, el frontend envía el token mediante el
              encabezado <code>Authorization: Bearer &lt;token&gt;</code>.
              El middleware lee este token, lo verifica con la clave secreta del
              backend y, si es válido, añade los datos del usuario a{" "}
              <code>req.user</code> para que el controlador pueda utilizarlos.
            </p>
          </div>

          <div className="cuadro-didactico__item">
            <h5>3. ¿Qué ocurre cuando un token expira?</h5>
            <p>
              Todos los JWT tienen una <strong>duración limitada</strong>.
              Cuando el token ha caducado, el middleware no puede validarlo y devuelve
              <code>401 Unauthorized</code>. El frontend deberá pedir al usuario que
              inicie sesión de nuevo para obtener un token nuevo y válido.
            </p>
          </div>

          <div className="cuadro-didactico__item">
            <h5>4. ¿Dónde se puede ver el token generado?</h5>
            <p>
              El token es visible en la <strong>respuesta del login</strong> desde el
              apartado “Network → Response” del navegador, y también puede guardarse en
              <code>localStorage</code> para que React lo use en futuras peticiones.
              Puedes copiarlo y analizarlo en <code>jwt.io</code> para ver su contenido
              decodificado.
            </p>
          </div>
        </div>

        <div className="cuadro-didactico__nota">
          <strong>Idea clave:</strong>
          {" "}
          El <em>JWT</em> se genera en el login, se comprueba en cada ruta protegida,
          y expira automáticamente por seguridad. Si caduca, el usuario debe renovar
          su sesión para obtener uno nuevo.
        </div>
      </div>

      {/* ============================
          OBJETIVOS DE LA LECCIÓN
          ============================ */}
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

      {/* ============================
          MODELO DE CLIENTES
          ============================ */}
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
          <strong>crearCliente</strong>: registra un nuevo usuario en la base de datos.
          Antes de insertarlo, normalmente se valida que el email no exista y se
          encripta la contraseña para guardarla de forma segura.
        </li>
        <li>
          <strong>buscarPorEmail</strong>: localiza un usuario por su email durante
          el proceso de login.
          Aquí es donde cobra importancia que el campo <code>email</code> esté marcado
          como <strong>UNIQUE</strong> en la base de datos.
          UNIQUE significa que <em>no puede haber dos usuarios con el mismo email</em>,
          es decir, ninguna fila puede repetir ese valor.
          Esto garantiza que al buscar por email obtengamos como máximo un único
          usuario, evitando conflictos y ambigüedades en la autenticación.
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
  const [rows] = await pool.query(
    'SELECT id, nombre, email, password, creado_en FROM clientes WHERE email = ?',
    [email]
  );
  return rows[0];
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
export async function crearCliente({ nombre, email, password }) {
  const [result] = await pool.query(
    'INSERT INTO clientes (nombre, email, password) VALUES (?, ?, ?)',
    [nombre, email, password]
  );

  return {
    insertId: result.insertId,
    id: result.insertId,
    nombre,
    email
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

      {/* ============================
          CONTROLADOR DE AUTENTICACIÓN
          ============================ */}
      <pre className="bloque-codigo">
        <code>
{`// controllers/auth.controller.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as clientesModel from '../models/clientes.model.js';

/**
 * ==========================================
 * 🔐 CONTROLADOR DE AUTENTICACIÓN
 * ==========================================
 * 
 * Funciones para autenticación de usuarios
 * - Registro de usuarios
 * - Login de usuarios
 */

/**
 * Registrar nuevo usuario
 */
export async function register(req, res) {
  try {
    const { nombre, email, password } = req.body;
    
    console.log('📝 Registrando usuario:', email);
    
    // Verificar si el usuario ya existe
    const usuarioExistente = await clientesModel.buscarPorEmail(email);
    if (usuarioExistente) {
      return res.status(400).json({
        success: false,
        message: 'El email ya está registrado'
      });
    }
    
    // Encriptar password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Crear usuario
    const nuevoUsuario = await clientesModel.crearCliente({
      nombre,
      email,
      password: hashedPassword
    });
    
    // Generar token
    const token = jwt.sign(
      { cliente_id: nuevoUsuario.insertId },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.status(201).json({
      success: true,
      message: 'Usuario registrado exitosamente',
      token,
      usuario: {
        id: nuevoUsuario.insertId,
        nombre,
        email
      }
    });
    
  } catch (error) {
    console.error('❌ Error en registro:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
}

/**
 * Login de usuario
 */
export async function login(req, res) {
  try {
    const { email, password } = req.body;
    
    console.log('🔑 Intentando login:', email);
    
    // Buscar usuario
    const usuario = await clientesModel.buscarPorEmail(email);
    if (!usuario) {
      return res.status(401).json({
        success: false,
        message: 'Email o password incorrectos'
      });
    }
    
    // Verificar password
    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) {
      return res.status(401).json({
        success: false,
        message: 'Email o password incorrectos'
      });
    }
    
    // Generar token
    const token = jwt.sign(
      { cliente_id: usuario.id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.status(200).json({
      success: true,
      message: 'Login exitoso',
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email
      }
    });
    
  } catch (error) {
    console.error('❌ Error en login:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
}`}
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
              y que la contraseña sea correcta comparando el texto plano con{" "}
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

      {/* ============================
          RUTAS DE AUTENTICACIÓN
          ============================ */}
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
import * as authController from '../controllers/auth.controller.js';

const router = Router();

/**
 * ==========================================
 * 🔐 RUTAS DE AUTENTICACIÓN
 * ==========================================
 */

// Registrar usuario
router.post('/register', authController.register);

// Login usuario
router.post('/login', authController.login);

export default router;`}
        </code>
      </pre>

      <p>
        Y en <code className="etiqueta-codigo">server.js</code> montamos este
        grupo de rutas bajo <code>/api/auth</code>. Es una ampliación del server que tienes.
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
});`}
        </code>
      </pre>

      {/* ============================
          MIDDLEWARE VERIFYTOKEN
          ============================ */}
      <article className="card">
        <h3>🛡️ Middleware de autenticación: entendiendo <code>verifyToken</code> paso a paso</h3>

        <p>
          En Express, un <strong>middleware</strong> es una función que se ejecuta{" "}
          <em>entre</em> la petición del cliente y el controlador final. Actúa como un
          “filtro” o “guardia de seguridad”: recibe <code>req</code>,
          <code>res</code> y una función <code>next</code>.
          Si todo está bien, llama a <code>next()</code> para que la petición continúe;
          si encuentra un problema, responde directamente (por ejemplo, con un{" "}
          <code>401 Unauthorized</code>) y corta el flujo.
        </p>

        <p>
          En tu proyecto, el archivo <code>middlewares/auth.middleware.js</code> define
          el middleware de autenticación <code>verifyToken</code>, que se encarga de
          comprobar el <strong>token JWT</strong> que el frontend envía en cada petición
          a rutas protegidas.
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

        <h4>1️⃣ ¿Qué es exactamente un middleware en Express?</h4>
        <p>
          Un middleware es una función con la forma:
          <code>(req, res, next) =&gt; &#123; ... &#125;</code>.
          Express la ejecuta en cadena. En una ruta protegida, algo así:
        </p>

        <pre className="bloque-codigo">
          <code>
{`// routes/pedidos.routes.js
router.get("/mios", verifyToken, getMisPedidos);`}
          </code>
        </pre>

        <p>
          El orden es importante:
        </p>
        <ul className="lista-simple">
          <li>Primero se ejecuta <code>verifyToken</code> (middleware)</li>
          <li>Si todo va bien y llama a <code>next()</code>, se ejecuta <code>getMisPedidos</code> (controlador)</li>
          <li>Si hay un problema con el token, <code>verifyToken</code> responde con <code>401</code> y el controlador nunca se ejecuta</li>
        </ul>

        <p>
          El nombre <code>verifyToken</code> lo eliges tú: no es una palabra reservada
          de Express. Cualquier función que siga este patrón y se use entre la ruta y
          el controlador es un middleware.
        </p>

        <h4>2️⃣ ¿De dónde sale el token y por qué va en la cabecera Authorization?</h4>
        <p>
          El <strong>token JWT</strong> se genera en el momento del <strong>login</strong>.
          El flujo típico es:
        </p>
        <ul className="lista-simple">
          <li>El usuario envía sus credenciales (email + contraseña) al backend</li>
          <li>El backend valida la contraseña (por ejemplo, con <code>bcryptjs</code>)</li>
          <li>Si es correcta, genera un JWT con <code>jsonwebtoken</code> usando una clave secreta <code>JWT_SECRET</code></li>
          <li>Ese JWT se envía de vuelta al frontend en la respuesta del login</li>
          <li>El frontend lo guarda (por ejemplo en <code>localStorage</code>)</li>
        </ul>

        <p>
          A partir de ahí, cada vez que el frontend quiere acceder a una ruta privada
          (por ejemplo, <code>/api/pedidos/mios</code>), envía el token en la cabecera
          HTTP estándar <code>Authorization</code> con este formato:
        </p>

        <pre className="bloque-codigo">
          <code>{`Authorization: Bearer <token>`}</code>
        </pre>

        <p>
          Esa cabecera no la inventa Express: forma parte del <strong>protocolo HTTP</strong>.
          El frontend (React, Postman, Axios, Fetch…) es quien la envía; el backend
          simplemente la lee en <code>req.headers.authorization</code>.
        </p>

        <h4>3️⃣ ¿Qué es “Bearer” y por qué no se traduce?</h4>
        <p>
          La palabra <strong>Bearer</strong> significa “portador”. En este contexto,
          indica que quien hace la petición es el <em>portador de un token</em> que
          acredita su identidad.
          Es un <strong>estándar oficial</strong> de autenticación llamado
          “Bearer Token”, definido en la especificación HTTP (RFC 6750).
        </p>

        <p>
          Por eso se usa siempre este formato exacto:
        </p>

        <pre className="bloque-codigo">
          <code>{`Authorization: Bearer <token>`}</code>
        </pre>

        <p>
          Si cambiaras “Bearer” por “Portador” o cualquier otra palabra, el middleware:
        </p>

        <pre className="bloque-codigo">
          <code>{`const [bearer, token] = authHeader.split(" ");`}</code>
        </pre>

        <p>
          ya no encontraría la cadena <code>"Bearer"</code> y devolvería siempre:
          <code>401 Formato de token no válido</code>.
          En resumen: <strong>“Bearer” no se traduce ni se cambia nunca</strong>.
        </p>

        <h4>4️⃣ Leyendo y validando el token en el middleware</h4>
        <p>
          Veamos ahora el código de <code>verifyToken</code> como profesor de backend,
          línea a línea:
        </p>

        <ul className="lista-simple">
          <li>
            <strong>1. Leer la cabecera:</strong>
            {" "}
            <code>const authHeader = req.headers.authorization;</code>
            {" "}
            Aquí recoges el valor de la cabecera <code>Authorization</code> que envió
            el frontend. Si no existe, devolvemos <code>401</code>.
          </li>

          <li>
            <strong>2. Separar “Bearer” del token:</strong>
            {" "}
            <code>const [bearer, token] = authHeader.split(" ");</code>
            {" "}
            Si el formato correcto es <code>"Bearer &lt;token&gt;"</code>, al hacer
            <code>split(" ")</code> obtienes:
            <code>bearer = "Bearer"</code> y <code>token = "&lt;token real&gt;"</code>.
            Si <code>bearer !== "Bearer"</code> o no hay token, devolvemos otro
            <code>401</code>.
          </li>

          <li>
            <strong>3. Verificar el token con JWT_SECRET:</strong>
            {" "}
            <code>const decoded = jwt.verify(token, process.env.JWT_SECRET);</code>
            {" "}
            Aquí la librería <code>jsonwebtoken</code> comprueba:
            <ul className="lista-simple">
              <li>Que el token fue firmado con tu <code>JWT_SECRET</code></li>
              <li>Que no ha sido manipulado</li>
              <li>Que no ha caducado</li>
            </ul>
            Si algo falla, salta al <code>catch</code> y responde:
            <code>Token no válido o expirado</code>.
          </li>

          <li>
            <strong>4. Guardar los datos en <code>req.user</code>:</strong>
            {" "}
            <code>req.user = &#123; id: decoded.id, email: decoded.email, nombre: decoded.nombre &#125;;</code>
            {" "}
            Esto es clave: a partir de ahora, cualquier controlador que venga después
            puede saber quién es el usuario autenticado con solo leer
            <code>req.user.id</code>, sin que el frontend tenga que enviar el
            <code>cliente_id</code> a mano.
          </li>

          <li>
            <strong>5. Llamar a <code>next()</code>:</strong>
            {" "}
            Si todo ha ido bien, el middleware llama a <code>next();</code>.
            Esto le dice a Express: “autenticación OK, deja pasar la petición al
            siguiente paso”, que normalmente será el controlador real de la ruta.
          </li>
        </ul>

        <h4>5️⃣ Mentalidad de nivel experto</h4>
        <p>
          Como desarrollador que aspira a nivel experto, debes quedarte con esta idea:
        </p>
        <ul className="lista-simple">
          <li>
            Un <strong>middleware</strong> es una función intermedia que decide si la
            petición sigue adelante o no.
          </li>
          <li>
            <code>verifyToken</code> es tu middleware de <strong>autenticación</strong>,
            construido sobre el estándar HTTP (cabecera <code>Authorization</code>) y
            sobre JWT (<code>jsonwebtoken</code> + <code>JWT_SECRET</code>).
          </li>
          <li>
            La palabra <strong>Bearer</strong> forma parte del protocolo y nunca se
            traduce ni se cambia.
          </li>
          <li>
            El <strong>token</strong> nace en el login, se guarda en el frontend y
            viaja en cada petición privada. El middleware lo valida antes de dejar
            pasar la petición al controlador.
          </li>
        </ul>

        <p>
          Con esto dominas no solo “qué hace el código”, sino también{" "}
          <strong>por qué está diseñado así</strong> y cómo se conecta con los
          estándares HTTP y las buenas prácticas de seguridad en APIs modernas.
        </p>
      </article>

      {/* ============================
          MIDDLEWARE + CONTROLADOR: COMUNICACIÓN
          ============================ */}
      <article className="card">
        <h3>🔗 Cómo se comunican el Middleware de Autenticación y el Controlador</h3>

        <p>
          Para entender cómo funcionan juntos la autenticación con JWT y tus
          controladores (como <code>login</code> o <code>register</code>), debemos ver
          el flujo completo de comunicación entre el <strong>frontend</strong>, el
          <strong> middleware</strong> y los <strong>controladores</strong>.
        </p>

        <p>
          El middleware <code>verifyToken</code> actúa como un “filtro” que se ejecuta
          <strong> antes</strong> del controlador. Su función es asegurarse de que la
          petición que llega a una ruta privada contiene un token JWT válido.
          El controlador, por su parte, solo se ejecuta si el middleware le da paso.
        </p>

        <h4>1️⃣ ¿Qué rutas usan middleware?</h4>
        <p>
          No todas las rutas necesitan autenticación.
          Las rutas de autenticación (<code>/register</code> y <code>/login</code>)
          <strong> no usan middleware</strong> porque el usuario aún no tiene token.
        </p>

        <p>Ejemplo de rutas públicas:</p>

        <pre className="bloque-codigo">
          <code>
{`// routes/auth.routes.js
router.post("/register", register);
router.post("/login", login);`}
          </code>
        </pre>

        <p>
          En cambio, las rutas privadas (como “Mis pedidos”, “Mi perfil”, “Crear
          pedidos”, etc.) sí usan el middleware:
        </p>

        <pre className="bloque-codigo">
          <code>
{`router.get("/mios", verifyToken, getMisPedidos);`}
          </code>
        </pre>

        <p>
          Aquí ocurre algo muy importante: <strong>verifyToken se ejecuta primero</strong>.
          Solo si él valida el token, permite llegar al controlador
          <code>getMisPedidos</code>.
        </p>

        <h4>2️⃣ Comunicación paso a paso</h4>
        <p>
          El flujo de comunicación entre Middleware y Controlador es así:
        </p>

        <ul className="lista-simple">
          <li>El frontend envía una petición a una ruta privada, con su token en la cabecera</li>
          <li>La ruta detecta la petición y, antes del controlador, ejecuta el middleware</li>
          <li>El middleware <strong>lee la cabecera Authorization</strong></li>
          <li>Extrae el token y verifica si es válido</li>
          <li>Si el token es correcto, <strong>inserta los datos del usuario en <code>req.user</code></strong></li>
          <li>Llama a <strong><code>next()</code></strong> para entregar el control al controlador</li>
          <li>El controlador recibe la petición con <strong>req.user ya relleno</strong></li>
          <li>El controlador usa esos datos (por ejemplo, <code>req.user.id</code>) para saber quién hace la petición</li>
        </ul>

        <h4>3️⃣ ¿Qué añadido hace el middleware a la petición?</h4>
        <p>
          Antes de llamar al controlador, el middleware <code>verifyToken</code> añade a
          <code>req</code> un nuevo objeto:
        </p>

        <pre className="bloque-codigo">
          <code>
{`req.user = {
  id: decoded.id,
  email: decoded.email,
  nombre: decoded.nombre
};`}
          </code>
        </pre>

        <p>
          Esto es fundamental, porque permite al controlador conocer exactamente qué
          usuario está haciendo la petición sin que el frontend tenga que enviarlo en
          el cuerpo de la petición, lo cual sería peligroso.
        </p>

        <p>
          Ejemplo de controlador que usaría esa info:
        </p>

        <pre className="bloque-codigo">
          <code>
{`export async function getMisPedidos(req, res) {
  const idCliente = req.user.id;
  const pedidos = await PedidosModel.obtenerPedidosDeCliente(idCliente);
  res.json(pedidos);
}`}
          </code>
        </pre>

        <h4>4️⃣ ¿Cómo llega el token al Middleware?</h4>

        <p>
          El token lo genera el controlador <strong>login</strong>, usando estos pasos:
        </p>

        <ul className="lista-simple">
          <li>El usuario envía email y contraseña</li>
          <li>El backend compara la contraseña con <code>bcrypt.compare()</code></li>
          <li>Si es correcta, el controlador genera un token con <code>jwt.sign()</code></li>
          <li>Ese token se devuelve al frontend en <code>res.json</code></li>
          <li>El frontend guarda el token y lo envía en la cabecera Authorization</li>
        </ul>

        <p>
          Cuando una ruta privada recibe una petición, Express la envía primero al
          middleware, que la analiza antes de permitir el acceso al controlador.
        </p>

        <h4>5️⃣ Relación directa con el archivo <code>auth.middleware.js</code></h4>

        <p>
          El middleware verifica el token con este bloque:
        </p>

        <pre className="bloque-codigo">
          <code>{`const decoded = jwt.verify(token, process.env.JWT_SECRET);`}</code>
        </pre>

        <p>
          Y el controlador <code>login</code> genera ese mismo token así:
        </p>

        <pre className="bloque-codigo">
          <code>{`const token = generarToken(cliente);`}</code>
        </pre>

        <p>
          Ambos deben usar la <strong>misma clave secreta</strong> almacenada en
          <code>process.env.JWT_SECRET</code>.
          De este modo:
        </p>

        <ul className="lista-simple">
          <li>El controlador firma el token</li>
          <li>El middleware verifica que la firma es válida</li>
          <li>Solo así se garantiza la seguridad completa del sistema</li>
        </ul>

        <h4>6️⃣ Resumen middleware + controlador</h4>

        <p>
          Middleware y Controlador trabajan en equipo:
        </p>

        <ul className="lista-simple">
          <li>El <strong>controlador</strong> de <code>login</code> crea el token JWT usando la clave secreta</li>
          <li>El <strong>frontend</strong> lo guarda y lo envía en las peticiones privadas</li>
          <li>El <strong>middleware</strong> <code>verifyToken</code> recibe el token desde la cabecera Authorization</li>
          <li>Si el token es válido, coloca toda la info del usuario en <code>req.user</code></li>
          <li>El <strong>controlador protegido</strong> (como <code>getMisPedidos</code>) ya sabe quién es el usuario logado</li>
        </ul>

        <p>
          Es un sistema elegante, seguro y totalmente estándar en APIs modernas.
        </p>
      </article>



      {/* ============================
          PRUEBAS DE REGISTRO Y LOGIN
          ============================ */}
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
        {" "}
        para acceder a rutas protegidas como
        <code>/api/auth/mi-perfil</code> o <code>/api/pedidos/mios</code>.
      </div>

      {/* ============================
          ACTIVIDAD GUIADA
          ============================ */}
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
          <strong> 200 OK</strong> para credenciales válidas y
          <strong> 401 Unauthorized</strong> cuando el email o la contraseña no coinciden.
        </li>

        <li>
          Examina el campo <code>password_hash</code> en la tabla.
          Comenta por qué:
          <ul className="lista-simple">
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
          <strong> 401 – Falta cabecera Authorization</strong>.
        </li>

        <li>
          Ahora prueba a enviar un token manipulado y observa que el backend
          devuelve:
          <strong> 401 – Token inválido o expirado</strong>.
        </li>
      </ul>

      {/* ============================
          QUÉ ESTÁ PASANDO REALMENTE
          ============================ */}
      <h3>🔍 Qué está pasando realmente</h3>

      <p>
        Cuando el usuario hace login correctamente, el backend genera un
        <strong> token JWT</strong> que contiene datos esenciales:
        <code> id</code>, <code> email</code>, <code> nombre</code>, <code> rol</code>.
        Este token está firmado con <code>JWT_SECRET</code>, así que nadie puede
        inventárselo.
      </p>

      <p>
        Cada vez que el frontend necesita acceder a una ruta privada, debe enviar
        ese token en:
        {" "}
        <code>Authorization: Bearer &lt;token&gt;</code>.
      </p>

      <p>
        El middleware <code>verifyToken</code> se ejecuta ANTES de la ruta final
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
        <strong> Mi perfil</strong>, <strong> Mis pedidos</strong> o el botón de
        <strong> Cerrar sesión</strong>.
      </p>

      {/* ============================
          RESUMEN DE LA LECCIÓN
          ============================ */}
      <h3>✅ Resumen de la lección</h3>

      <ul className="lista-simple">
        <li>
          Hemos configurado la tabla <code>clientes</code> según la guía oficial,
          incluyendo <code>password_hash</code>, <code>rol</code> y <code>activo</code>.
        </li>

        <li>
          Hemos implementado registro y login usando:
          {" "}
          <code>bcryptjs</code> para cifrado de contraseñas y
          {" "}
          <code>jsonwebtoken</code> para generar tokens.
        </li>

        <li>
          Hemos creado un <strong>modelo de clientes</strong> seguro y minimalista:
          {" "}
          <code>buscarPorEmail()</code>, <code>crearCliente()</code> y
          {" "}
          <code>obtenerPerfil()</code>.
        </li>

        <li>
          Hemos creado las rutas de autenticación:
          {" "}
          <code>/api/auth/register</code>, <code>/api/auth/login</code> y
          <code>/api/auth/mi-perfil</code>.
        </li>

        <li>
          Hemos implementado un <strong>middleware JWT</strong> que valida cada
          petición protegida antes de llegar al controlador.
        </li>

        <li>
          El frontend debe enviar el token en cada petición privada usando
          <code> Authorization: Bearer &lt;token&gt;</code>.
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
        ❗ En nuestra API no existen “pedidos de cualquier cliente”. Es una decisión de negocio: vamos a exigir que los clientes 
        se registren antes de terminar el pedido. Es una opción.
      </p>

      <h3>⚙️ 4️⃣ Modelo de pedidos </h3>

      <p>
        Creamos <code>models/pedidos.model.js</code>.  
      
      </p>

      <pre className="bloque-codigo">
        <code>
{`// models/pedidos.model.js
import pool from '../config/db.js';

// Crear pedido vacío
export async function crearPedido(clienteId) {
  const [result] = await pool.query(
    "INSERT INTO pedidos (cliente_id) VALUES (?)",
    [clienteId]
  );

  return {
    id: result.insertId,
    cliente_id: clienteId,
    estado: "pendiente",
  };
}

// Añadir producto al pedido
export async function agregarProductoAPedido({ pedidoId, productoId, cantidad }) {
  const [result] = await pool.query(
    "INSERT INTO pedidos_productos (pedido_id, producto_id, cantidad) VALUES (?, ?, ?)",
    [pedidoId, productoId, cantidad]
  );

  return {
    id: result.insertId,
    pedido_id: pedidoId,
    producto_id: productoId,
    cantidad,
  };
}

// Obtener pedido por ID
export async function obtenerPedidoPorId(id) {
  const [rows] = await pool.query(
    'SELECT id, cliente_id, fecha, estado FROM pedidos WHERE id = ?',
    [id]
  );
  return rows[0];
}

// Obtener productos del pedido
export async function obtenerLineasDePedido(idPedido) {
  const [rows] = await pool.query(
    \`SELECT 
      pp.id,
      pp.cantidad,
      pr.nombre,
      pr.precio
     FROM pedidos_productos pp
     JOIN productos pr ON pr.id = pp.producto_id
     WHERE pp.pedido_id = ?\`,
    [idPedido]
  );
  return rows;
}

// Crear un nuevo pedido
export async function crear(clienteId) {
  const [result] = await pool.query(
    'INSERT INTO pedidos (cliente_id, fecha, estado) VALUES (?, NOW(), ?)',
    [clienteId, 'pendiente']
  );
  
  return {
    id: result.insertId,
    cliente_id: clienteId,
    fecha: new Date(),
    estado: 'pendiente'
  };
}

// Obtener pedidos por cliente
export async function obtenerPorCliente(clienteId) {
  const [rows] = await pool.query(
    'SELECT id, fecha, estado FROM pedidos WHERE cliente_id = ? ORDER BY fecha DESC',
    [clienteId]
  );
  return rows;
}

// Actualizar estado del pedido
export async function actualizarEstado(idPedido, nuevoEstado) {
  await pool.query(
    'UPDATE pedidos SET estado = ? WHERE id = ?',
    [nuevoEstado, idPedido]
  );
  return { exito: true };
}
`}
        </code>
      </pre>

      <div className="cuadro-didactico">
       
      </div>

      <h3>🕹 5️⃣ Controlador completo de pedidos</h3>

      <p>
        Archivo: <code>controllers/pedidos.controller.js</code>.  
        Aquí ya usamos <strong>req.user.id</strong> en lugar de <code>cliente_id</code> ¿Por qué?.
      </p>

      <pre className="bloque-codigo">
        <code>
{`// controllers/pedidos.controller.js
import * as pedidosModel from '../models/pedidos.model.js';

/**
 * ==========================================
 * 🛒 CONTROLADOR DE PEDIDOS
 * ==========================================
 * 
 * Funciones para gestión de pedidos del bazar
 * - Crear pedidos (requiere autenticación)
 * - Obtener mis pedidos (requiere autenticación)
 */

/**
 * Crear nuevo pedido
 */
export async function crearPedido(req, res) {
  try {
    const { productos } = req.body;
    const cliente_id = req.user.cliente_id; // Obtener del middleware de autenticación
    
    console.log('🛒 Creando pedido para cliente:', cliente_id);
    console.log('📦 Productos del pedido:', productos);
    
    // Crear pedido
    const nuevoPedido = await pedidosModel.crear({
      cliente_id,
      productos
    });
    
    res.status(201).json({
      success: true,
      message: 'Pedido creado exitosamente',
      data: nuevoPedido
    });
    
  } catch (error) {
    console.error('❌ Error al crear pedido:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
}

/**
 * Obtener mis pedidos
 */
export async function getMisPedidos(req, res) {
  try {
    const cliente_id = req.user.cliente_id;
    
    console.log('📋 Obteniendo pedidos del cliente:', cliente_id);
    
    // 1. Obtener las cabeceras de los pedidos
    const pedidos = await pedidosModel.obtenerPorCliente(cliente_id);
    
    // 2. Para cada pedido, obtener sus productos con detalles
    const pedidosCompletos = [];
    
    for (const pedido of pedidos) {
      // Obtener los productos de este pedido específico
      const productos = await pedidosModel.obtenerLineasDePedido(pedido.id);
      
      // Combinar la información del pedido con sus productos
      pedidosCompletos.push({
        id: pedido.id,
        cliente_id: pedido.cliente_id,
        estado: pedido.estado,
        fecha: pedido.fecha,
        productos: productos // Array de productos con nombres, precios y cantidades
      });
    }
    
    console.log(\`📦 Se encontraron \${pedidosCompletos.length} pedidos con \${pedidosCompletos.reduce((total, p) => total + p.productos.length, 0)} productos en total\`);
    
    res.status(200).json({
      success: true,
      message: \`Se encontraron \${pedidosCompletos.length} pedidos\`,
      data: pedidosCompletos
    });
    
  } catch (error) {
    console.error('❌ Error al obtener pedidos:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
}
`}
        </code>
      </pre>

      <div className="cuadro-didactico">
        <h4>🔍 Análisis del controlador de pedidos</h4>
        <p>
          Este controlador 
          se conecta perfectamente con nuestro modelo :
        </p>
        
        <h5>📋 Características destacadas:</h5>
        <ul className="lista-simple">
         
          <li><strong>Logging informativo</strong>: console.log para debugging</li>
         
          <li><strong>Manejo de errores robusto</strong>: try/catch con mensajes específicos</li>
        </ul>

        <h5>🔗 Conexión con el modelo:</h5>
        <ul className="lista-simple">
          <li><strong>pedidosModel.crear()</strong>: Usa nuestra función simplificada</li>
          <li><strong>pedidosModel.obtenerPorCliente()</strong>: Obtiene cabeceras de pedidos</li>
          <li><strong>pedidosModel.obtenerLineasDePedido()</strong>: Obtiene productos de cada pedido</li>
          <li><strong>Loop inteligente</strong>: Combina cabeceras + productos para respuesta completa</li>
        </ul>

        <h5>🎯 ¿Qué hace este controlador?</h5>
        <ul className="lista-simple">
          <li><strong>req.user.cliente_id</strong>: Acceso directo al ID autenticado</li>
          <li><strong>Array productos</strong>: El frontend puede enviar múltiples productos</li>
          <li><strong>Datos completos</strong>: Una sola respuesta con toda la información</li>
          <li><strong>Debugging visual</strong>: Logs ayudan a entender el flujo</li>
        </ul>
      </div>

      <h3>🛣 6️⃣ Rutas de pedidos (con protección JWT)</h3>

      <pre className="bloque-codigo">
        <code>
{`// routes/pedidos.routes.js
import { Router } from 'express';
import * as pedidosController from '../controllers/pedidos.controller.js';
import { verificarToken } from '../middlewares/auth.middleware.js';

const router = Router();

/**
 * ==========================================
 * 🛒 RUTAS DE PEDIDOS
 * ==========================================
 * NOTA: Todas las rutas requieren autenticación
 */

// Crear pedido (protegido)
router.post('/', verificarToken, pedidosController.crearPedido);

// Obtener mis pedidos (protegido)
router.get('/mis-pedidos', verificarToken, pedidosController.getMisPedidos);

export default router;`}
        </code>
      </pre>

      <div className="cuadro-didactico">
        <h4>🎯 Análisis de las rutas para pedidos</h4>
        <p>
          Las rutas han sido <strong>simplificadas estratégicamente</strong> para enfocarnos 
          en los conceptos fundamentales del desarrollo backend:
        </p>
        
        <div className="tabla-comparativa">
          <table>
            <thead>
              <tr>
                <th>🛤️ Ruta</th>
                <th>📝 Método</th>
                <th>🎯 Propósito</th>
                <th>🔐 Protección</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>POST /</code></td>
                <td>crearPedido</td>
                <td>Crear nuevo pedido con productos</td>
                <td>✅ JWT requerido</td>
              </tr>
              <tr>
                <td><code>GET /mis-pedidos</code></td>
                <td>getMisPedidos</td>
                <td>Obtener historial completo</td>
                <td>✅ JWT requerido</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5>🔗 Conceptos clave que aprendes:</h5>
        <ul className="lista-simple">
          <li><strong>Middleware de seguridad</strong>: <code>verificarToken</code> protege todas las rutas</li>
          <li><strong>Import moderno</strong>: <code>import * as controller</code> para importar todas las funciones</li>
          <li><strong>RESTful simplificado</strong>: Solo las operaciones esenciales para aprendizaje</li>
          <li><strong>Rutas semánticas</strong>: <code>/mis-pedidos</code> es más claro que <code>/mios</code></li>
        </ul>

        <h5>🚀 Ventajas del enfoque:</h5>
        <ul className="lista-simple">
          <li><strong>Menos complejidad</strong>: No hay rutas de administrador o estados complejos</li>
          <li><strong>Flujo claro</strong>: Crear → Ver historial (lo básico que necesita un usuario)</li>
          <li><strong>Fácil testing</strong>: Solo 2 endpoints para probar</li>
          <li><strong>Escalable</strong>: Base sólida para añadir más funcionalidades después</li>
        </ul>
      </div>

      <div className="cuadro-didactico">
        <h4>🔄 Flujo de trabajo típico</h4>
        <ol className="lista-simple">
          <li><strong>Usuario se autentica</strong> → Obtiene JWT token</li>
          <li><strong>Frontend envía pedido</strong> → <code>POST /api/pedidos</code> con productos</li>
          <li><strong>Backend valida token</strong> → Middleware <code>verificarToken</code></li>
          <li><strong>Controlador procesa</strong> → Crea pedido con productos incluidos</li>
          <li><strong>Usuario consulta historial</strong> → <code>GET /api/pedidos/mis-pedidos</code></li>
          <li><strong>Respuesta completa</strong> → Pedidos con todos los productos y detalles</li>
        </ol>
      </div>

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

    <article className="card">
  <h3>🛒 Contexto del proyecto: rutas públicas vs rutas privadas</h3>

  <p>
    En el proyecto BAZAR, cualquier usuario puede navegar por los productos,
    ver detalles y añadir artículos al carrito sin necesidad de iniciar sesión.
    Sin embargo, para completar un pedido o acceder a información personal,
    el cliente debe estar autenticado mediante un <strong>token JWT</strong>.
  </p>

  <ul className="lista-simple">
    <li>Los clientes sin sesión pueden navegar por la tienda y usar el carrito local.</li>
    <li>Al intentar finalizar la compra sin login, React muestra el aviso:
      <em>“Por favor, regístrese o inicie sesión para completar su pedido.”</em>
    </li>
    <li>Si el usuario está logado, el backend le permitirá acceder a rutas como
      <strong>“Mi perfil”</strong> o <strong>“Mis pedidos”</strong>.</li>
  </ul>

  <p>
    Este comportamiento es clave para entender por qué necesitamos tokens JWT:
    el backend debe poder identificar al cliente en cada operación sensible.
  </p>
</article>
<article className="card">
  <h3>🔧 Recuerda que es una middleware y por qué es importante su papel en este punto</h3>

  <p>
    Un <strong>middleware</strong> es una función que Express ejecuta antes 
    de llegar al controlador final. Sirve para inspeccionar, modificar o validar 
    la petición antes de continuar. Es un filtro. Un middleware siempre recibe:
    <code>req</code>, <code>res</code> y <code>next</code>.
  </p>

  <pre className="bloque-codigo">
    <code>{`export function miMiddleware(req, res, next) {
  // Inspeccionar o modificar req
  // Enviar respuesta o permitir continuar
  next(); // Permite pasar al siguiente middleware o al controlador
}`}</code>
  </pre>

  <p>El ciclo de ejecución sigue este flujo:</p>

  <pre className="bloque-codigo">
    <code>{`Cliente → (Middleware 1) → (Middleware 2) → (Ruta final) → Respuesta`}</code>
  </pre>

  <div className="cuadro-didactico">
    <h4>¿Para qué usamos los middlewares?</h4>
    <div className="cuadro-didactico__grid">
      <div className="cuadro-didactico__item">
        <h5>Autenticación</h5>
        <p>Comprobar si el usuario está logado mediante un token JWT.</p>
      </div>
      <div className="cuadro-didactico__item">
        <h5>Protección</h5>
        <p>Restringir acceso a rutas privadas (Mi perfil, Mis pedidos…).</p>
      </div>
      <div className="cuadro-didactico__item">
        <h5>Validación</h5>
        <p>Verificar datos del body o parámetros antes de procesarlos.</p>
      </div>
      <div className="cuadro-didactico__item">
        <h5>Logs</h5>
        <p>Registrar peticiones para depuración.</p>
      </div>
    </div>
  </div>
</article>
<article className="card">
  <h3>📜 Ejemplo útil: middleware de log</h3>

  <p>
    Este middleware global sirve para registrar cada petición recibida por el
    backend. Es un ejemplo perfecto para entender cómo funciona la cadena de
    middlewares sin necesidad de autenticación.
  </p>

  <pre className="bloque-codigo">
    <code>{`// server.js
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
});`}</code>
  </pre>

  <p>
    Se ejecuta siempre antes de cualquier ruta, porque está definido con
    <code>app.use()</code> a nivel global.
  </p>
</article>

  

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
      <article className="card">
  <h3>🔗 Conexión con React: cómo usa el frontend el token</h3>

  <p>
    Una vez el usuario inicia sesión y el backend responde con un 
    <strong>token JWT</strong>, el frontend debe guardarlo y usarlo en cada
    petición a rutas privadas.
  </p>

  <ul className="lista-simple">
    <li>
      Tras el login, React guarda el token en 
      <code>localStorage</code> o en un <strong>AuthContext</strong>.
    </li>

    <li>
      Para acceder a rutas protegidas, React añade esta cabecera:
      <code>Authorization: Bearer &lt;token&gt;</code>.
    </li>

    <li>
      Si el token es válido, el middleware del backend permite el acceso.
    </li>

    <li>
      Si el token es inválido o no existe, el backend devuelve
      <code>401 Unauthorized</code>, y React muestra:
      <em>“Necesitas iniciar sesión para continuar.”</em>
    </li>

    <li>
      Para mostrar elementos condicionados (como <strong>“Mi perfil”</strong>
      o <strong>“Cerrar sesión”</strong>), solo se comprueba:
      <code>isLogged = !!token</code>.
    </li>
  </ul>

  <p>
    Gracias a este flujo, el backend controla el acceso a la información sensible
    y React adapta la interfaz según si el usuario está autenticado o no.
  </p>
</article>


     

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

      <h3>3️⃣ Frontend: componente para productos del catálogo</h3>

      <p>
        Desde React, podemos crear un componente que muestre todos los productos disponibles.
       
      </p>

      <pre className="bloque-codigo">
        <code>
{`// src/components/CatalogoProductos.jsx
import { useEffect, useState } from "react";

export function CatalogoProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/productos');
        const data = await res.json();
        setProductos(data.data || data); // Adaptable al formato de respuesta
        setCargando(false);
      } catch (error) {
        console.error("Error al cargar productos:", error);
        setCargando(false);
      }
    };

    fetchProductos();
  }, []);

  if (cargando) {
    return <p>Cargando catálogo...</p>;
  }

  return (
    <div>
      <h3>📦 Catálogo de productos</h3>
      <div className="grid-productos">
        {productos.map((producto) => (
          <div key={producto.id} className="tarjeta-producto">
            <h4>{producto.nombre}</h4>
            <p className="categoria">{producto.categoria}</p>
            <p className="precio">{producto.precio} €</p>
            <p className="descripcion">{producto.descripcion}</p>
            <button>Añadir al pedido</button>
          </div>
        ))}
      </div>
    </div>
  );
}`}
        </code>
      </pre>

      <div className="cuadro-didactico">
        <h4>📝 Notas sobre el modelo </h4>
        <p>
          Este componente se enfoca en mostrar <strong>todos los productos</strong> 
          de manera sencilla. En nuestro modelo actual:
        </p>
        <ul className="lista-simple">
          <li><strong>categoría es VARCHAR</strong>: texto  "Electrónicos", "Ropa", etc.</li>
          <li><strong>Sin filtros complejos</strong>: priorizamos comprensión antes que funcionalidad</li>
          <li><strong>Un solo endpoint</strong>: <code>/api/productos</code> devuelve todo el catálogo</li>
          <li><strong>Frontend básico</strong>: muestra la información esencial de cada producto</li>
        </ul>
        <p>
          <strong>🚀 Evolución futura:</strong> Una vez domines estos conceptos, podrás añadir 
          filtros por categoría, búsquedas, paginación, etc.
        </p>
      </div>

      <h3>4️⃣ Área personal del usuario: mis pedidos</h3>

      <p>
        El área personal es donde los usuarios autenticados pueden consultar 
        su historial de pedidos. 
      </p>

      <ul className="lista-simple">
        <li>🧾 <strong>Historial completo</strong>: todos sus pedidos con detalles</li>
        <li>📦 <strong>Productos incluidos</strong>: qué compró en cada pedido</li>
        <li>📅 <strong>Información básica</strong>: fecha, estado, cantidades</li>
        <li>� <strong>Seguridad garantizada</strong>: solo ve sus propios datos</li>
      </ul>

      <p>
        Nuestro controlador <code>getMisPedidos</code> ya maneja toda esta lógica.
        El frontend solo necesita hacer una petición autenticada:
      </p>

      <pre className="bloque-codigo">
        <code>
{`GET /api/pedidos/mis-pedidos
Authorization: Bearer <token-del-usuario>`}
        </code>
      </pre>

      <p>
        El backend automáticamente devuelve <strong>pedidos completos</strong> 
        con todos los productos incluidos
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
        const res = await fetch("http://localhost:3000/api/pedidos/mis-pedidos", {
          headers: {
            Authorization: \`Bearer \${token}\`
          }
        });

        if (res.status === 401) {
          console.warn("No autorizado. Token inválido o caducado.");
          setCargando(false);
          return;
        }

        const response = await res.json();
        
        // Nuestro controlador devuelve: { success, message, data }
        if (response.success) {
          setPedidos(response.data);
        } else {
          console.error("Error del servidor:", response.message);
        }
        
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
    return <p>⏳ Cargando tus pedidos...</p>;
  }

  if (pedidos.length === 0) {
    return (
      <div className="nota nota-info">
        📦 Todavía no has realizado ningún pedido.
        <br />
        ¡Explora nuestro catálogo y haz tu primera compra!
      </div>
    );
  }

  return (
    <div>
      <h3>🧾 Mi historial de pedidos</h3>
      <div className="lista-pedidos">
        {pedidos.map((pedido) => (
          <div key={pedido.id} className="tarjeta-pedido">
            <div className="cabecera-pedido">
              <span className="numero-pedido">Pedido #{pedido.id}</span>
              <span className="fecha">{new Date(pedido.fecha).toLocaleDateString()}</span>
              <span className={\`estado estado-\${pedido.estado}\`}>{pedido.estado}</span>
            </div>
            
            <div className="productos-pedido">
              <h4>📦 Productos:</h4>
              <ul>
                {pedido.productos.map((producto, index) => (
                  <li key={index}>
                    <span className="nombre">{producto.nombre}</span>
                    <span className="cantidad">x{producto.cantidad}</span>
                    <span className="precio">{producto.precio}€</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`}
        </code>
      </pre>

      <div className="cuadro-didactico">
        <h4>🎯 Características del componente mejorado</h4>
        <p>
          Este componente está diseñado para trabajar perfectamente con 
          nuestro controlador <code>getMisPedidos</code>:
        </p>
        
        <ul className="lista-simple">
          <li><strong>🔗 URL correcta</strong>: apunta a <code>/api/pedidos/mis-pedidos</code></li>
          <li><strong>📋 Formato de respuesta</strong>: maneja el formato <code>{`{success, message, data}`}</code></li>
          <li><strong>📦 Datos completos</strong>: muestra pedidos + productos automáticamente</li>
          <li><strong>🎨 Interfaz rica</strong>: información estructurada y visual</li>
          <li><strong>🔐 Autenticación</strong>: manejo de tokens y errores de autorización</li>
        </ul>

        <h5>💡 Ventajas del diseño:</h5>
        <ul className="lista-simple">
          <li><strong>Una sola petición</strong>: obtiene pedidos + productos juntos</li>
          <li><strong>Datos listos para usar</strong>: no necesita consultas adicionales</li>
          <li><strong>Experiencia fluida</strong>: loading states y mensajes informativos</li>
          <li><strong>Fácil styling</strong>: clases CSS semánticas para personalización</li>
        </ul>
      </div>

      <div className="cuadro-didactico">
        <h4>🎓 Resumen: arquitectura completa</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>🗄️ Backend </h5>
            <p>
              API REST con operaciones esenciales: productos (catálogo completo) 
              y pedidos (crear + consultar historial). Autenticación JWT.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>⚛️ Frontend directo</h5>
            <p>
              Componentes React que consumen la API: catálogo de productos y 
              área personal con historial completo de pedidos.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>🔐 Seguridad integrada</h5>
            <p>
              JWT tokens protegen las rutas de pedidos. Cada usuario solo 
              accede a sus propios datos.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>📚 Enfoque educativo</h5>
            <p>
              Arquitectura real  para dominar conceptos 
              fundamentales antes de añadir complejidad.
            </p>
          </div>
        </div>
      </div>

      <h3>7️⃣ Resumen del modelo </h3>

      <ul className="lista-simple">
        <li>✅ <strong>Catálogo directo</strong>: una API que devuelve todos los productos</li>
        <li>✅ <strong>Categorías </strong>: VARCHAR en lugar de tabla separada</li>
        <li>✅ <strong>Pedidos completos</strong>: crear con productos incluidos, consultar historial</li>
        <li>✅ <strong>Autenticación sólida</strong>: JWT protege operaciones de usuario</li>
        <li>✅ <strong>Componentes React</strong>: interfaz funcional y clara</li>
      </ul>

      <p>
        <strong>🚀 Resultado:</strong> Al completar esta parte, tendrás un sistema 
        de ecommerce funcional con arquitectura <strong>React + Node.js + MySQL</strong>. 
        Es una base sólida para cualquier proyecto web profesional, construida desde 
        los fundamentos hasta la implementación completa.
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

      <div className="cuadro-didactico">
        <h4>⚠️ Modelo para aprendizaje</h4>
        <p>
          ¿Qué hace este modelo?
        </p>
        <ul className="lista-simple">
          <li><strong>Funciones </strong>: crear, obtenerPorCliente, agregarProductoAPedido</li>
          <li><strong>Estados directos</strong>: pedidos empiezan en 'pendiente' (no 'carrito')</li>
          <li><strong>Establecemos precios</strong>: usamos el precio actual de productos</li>
         
        </ul>
      </div>

      
    
    </article>
  </details>
</section>


      </div>
    </main>
  );
}
