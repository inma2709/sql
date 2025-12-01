function Bloque5ApiTestHtml() {
  return (
    <div className="contenedor contenido-principal" id="contenido">
      <header className="cabecera-pagina">
        <h1>Bloque 5: API Test con HTML Vanilla</h1>
        <p className="descripcion-bloque">
          Aprende a testear tu API REST usando HTML, CSS y JavaScript vanilla. 
          Una forma directa y efectiva de comprobar que tus endpoints funcionan correctamente.HTML vanilla significa usar HTML puro, sin frameworks, sin librerías y sin herramientas que lo automaticen o lo transformen.
          Vainilla es sin adornos, simple y puro, como el helado de vainilla. Aquí aplicamos ese concepto al desarrollo web. Es una metafora que se usa en programación.

        </p>
      </header>

      <section className="section" id="b5-leccion1">
        <details open>
          <summary>🧪 Introducción al testing de APIs con HTML</summary>
          <article className="card">
            <h2>¿Por qué testear APIs con HTML vanilla?</h2>

            <p>
              Antes de crear aplicaciones complejas con React o Vue, es fundamental
              asegurarse de que nuestra API funciona correctamente. El HTML vanilla
              nos permite crear herramientas de testing simples y efectivas.
            </p>

            <div className="cuadro-didactico">
              <h4>Ventajas del testing con HTML vanilla</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>🎯 Simplicidad</h5>
                  <p>
                    No necesitas frameworks complejos. Solo HTML, CSS y JavaScript
                    básico para probar tus endpoints.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🔍 Debugging directo</h5>
                  <p>
                    Puedes ver exactamente qué datos envías y recibes sin capas
                    de abstracción adicionales.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>📚 Aprendizaje puro</h5>
                  <p>
                    Entiendes los conceptos fundamentales de HTTP, fetch() y
                    manipulación del DOM.
                  </p>
                </div>
              </div>
            </div>
<h3>¿Qué vamos a construir?</h3>
<p>
  Crearemos una página HTML que nos permita:
</p>

<ul className="lista-simple">
  <li>🔍 Listar todos los productos de nuestra API</li>
  <li>🎯 Buscar un producto específico por ID</li>
  <li>🛒 Añadir productos al carrito</li>
  <li>📦 Ver el carrito de compras</li>
  <li>👤 Registrar un usuario y hacer login</li>
  <li>🧾 Ver un resumen del perfil del usuario</li>
</ul>

          </article>
        </details>
      </section>

      <section className="section" id="b5-leccion1-5">
        <details>
          <summary>🚀 Primer paso: Conexión mínima con el backend</summary>
          <article className="card">
            <h2>Empezando por lo esencial: mostrar productos</h2>

            <p>
              Antes de construir la aplicación completa, vamos a empezar con lo más básico:
              conectarnos a nuestro backend y mostrar una lista de productos. Este es el 
              <strong>primer paso fundamental</strong> para cualquier aplicación que consuma APIs.
            </p>

            <div className="cuadro-didactico">
              <h4>🎯 Nuestra primer conexion con bbdd-back y front</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>✅ Verificación rápida</h5>
                  <p>
                    Confirmas que tu backend funciona y que puedes conectarte
                    sin complicaciones adicionales.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🧠 Aprendizaje gradual</h5>
                  <p>
                    Entiendes los conceptos básicos (fetch, JSON, DOM) antes
                    de añadir autenticación y lógica compleja.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🐛 Debugging fácil</h5>
                  <p>
                    Con menos código es más fácil encontrar y resolver
                    problemas de conexión o configuración.
                  </p>
                </div>
              </div>
            </div>

            <h3>📄 HTML mínimo necesario</h3>
            <p>Solo necesitamos un contenedor para mostrar los productos:</p>

            <pre className="bloque-codigo">
              <code>
{`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Mínimo - API Productos</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <main class="container">
        <h1>📦 Catálogo de Productos</h1>
        
        <!-- Aquí aparecerán los productos -->
        <div id="productsGrid"></div>
    </main>
    
    <script src="app.js"></script>
</body>
</html>`}
              </code>
            </pre>

            <h3>🎨 CSS básico para una presentación limpia</h3>
            <p>Estilos mínimos pero efectivos para que se vea profesional:</p>

            <pre className="bloque-codigo">
              <code>
{`/* Reset muy básico */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Página general */
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #f3f4f6;
  color: #111827;
}

/* Contenedor principal */
main, .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
}

/* Título */
h1, h2 {
  margin-bottom: 1rem;
}

/* Grid de productos */
#productsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

/* Tarjeta de producto */
.product-card {
  background: #ffffff;
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Imagen del producto */
.product-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

/* Texto del producto */
.product-card h3 {
  font-size: 1rem;
  font-weight: 600;
}

.product-card p {
  font-size: 0.9rem;
  color: #4b5563;
}

/* Precio destacado */
.product-card p strong {
  font-size: 1rem;
  color: #16a34a;
}`}
              </code>
            </pre>

            <h3>⚡ JavaScript: solo lo esencial</h3>
            <p>
              Aquí está el código JavaScript mínimo para conectarse al backend y mostrar productos.
              ¡Solo 30 líneas de código funcional!
            </p>

            <pre className="bloque-codigo">
              <code>
{`// 🌐 URL de nuestra API
const URL_API = "http://localhost:3000/api";

// 📦 Función para cargar productos desde el backend
async function cargarProductos() {
    try {
        // 1. Hacemos petición GET a la API
        const respuesta = await fetch(\`\${URL_API}/productos\`);
        
        // 2. Convertimos la respuesta a JSON
        const datos = await respuesta.json();

        // 3. Verificamos si la petición fue exitosa
        if (respuesta.ok) {
            mostrarProductos(datos.data);
        } else {
            console.error("Error al cargar productos");
        }
    } catch (error) {
        console.error("Error de conexión:", error);
    }
}

// 🎨 Función para mostrar los productos en la página
function mostrarProductos(lista) {
    const contenedor = document.getElementById("productsGrid");

    // Creamos el HTML para cada producto
    contenedor.innerHTML = lista.map(producto => \`
        <div class="product-card">
            <img src="images/foto.png" class="product-image" alt="\${producto.nombre}">
            <h3>\${producto.nombre}</h3>
            <p>\${producto.descripcion}</p>
            <p><strong>\${producto.precio}€</strong></p>
            <p>Stock: \${producto.stock}</p>
        </div>
    \`).join('');
}

// 🚀 Cuando la página termine de cargar, ejecutamos la función
document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
});`}
              </code>
            </pre>

            <div className="cuadro-didactico">
              <h4>🔍 Análisis línea por línea</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>🌐 Configuración</h5>
                  <p>
                    <code>const URL_API</code> - Define la dirección de tu backend.
                    Cambia "localhost:3000" por tu servidor real cuando deploys.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>📡 Petición HTTP</h5>
                  <p>
                    <code>fetch()</code> - Hace una petición GET al endpoint de productos.
                    Es asíncrono, por eso usamos <code>await</code>.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🎨 Renderizado</h5>
                  <p>
                    <code>map().join('')</code> - Convierte el array de productos
                    en HTML y lo inserta en el DOM.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🚀 Inicialización</h5>
                  <p>
                    <code>DOMContentLoaded</code> - Asegura que el HTML esté
                    completamente cargado antes de ejecutar JavaScript.
                  </p>
                </div>
              </div>
            </div>

            <div className="nota">
              <strong>🔄 Ya tenemos conectado nuestra api: primer paso dado.</strong>
              <p>
                Este código es <strong> funcional</strong> y nos permite verificar que la conexión con la API es exitosa.
              </p>
              
            </div>

           

            <h3>🚀 Siguiente paso</h3>
            <p>
              Una vez que tengas funcionando esta primera versión, vamos a construir 
              la funcionalidad completa paso a paso. Entenderás cada línea de código 
              y cómo interactúa con tu API backend.
            </p>
          </article>
        </details>
      </section>

      <section className="section" id="b5-autenticacion">
        <details>
          <summary>🔐 Implementación completa del sistema de autenticación</summary>
          <article className="card">
            <h2>Construyendo registro y login desde cero</h2>

            <p>
              El sistema de autenticación es el <strong>corazón de cualquier aplicación web moderna</strong>. 
              Aquí aprenderás a implementar registro y login que funciona de manera profesional 
              con tu API backend.
            </p>

            <div className="cuadro-didactico">
              <h4>🎯 Lo que construiremos</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>📝 Formularios inteligentes</h5>
                  <p>
                    Registro y login con validación en tiempo real, 
                    intercambiables con animaciones fluidas.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🔒 Seguridad robusta</h5>
                  <p>
                    Comunicación segura con JWT tokens, almacenamiento 
                    local de sesión y gestión de errores.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🎨 Experiencia profesional</h5>
                  <p>
                    Interfaz pulida con estados de carga, mensajes de 
                    confirmación y navegación fluida.
                  </p>
                </div>
              </div>
            </div>

            <h3>🏗️ Estructura HTML: formularios duales</h3>
            <p>
              Creamos una interfaz que permite alternar entre registro y login 
              sin recargar la página. <strong>Cada elemento tiene su propósito específico</strong>:
            </p>

            <pre className="bloque-codigo">
              <code>
{`<!-- Sección de autenticación con formularios intercambiables -->
<section class="auth-section" id="authSection">
    <div class="auth-container">
        <!-- FORMULARIO DE LOGIN -->
        <div class="auth-form" id="loginForm">
            <h3>🔑 Iniciar Sesión</h3>
            
            <form id="loginFormElement">
                <div class="form-group">
                    <label for="loginEmail">Email:</label>
                    <input type="email" id="loginEmail" required 
                           placeholder="tu@email.com">
                </div>
                
                <div class="form-group">
                    <label for="loginPassword">Contraseña:</label>
                    <input type="password" id="loginPassword" required 
                           placeholder="Tu contraseña">
                </div>
                
                <button type="submit" class="btn btn-primary">
                    🚀 Iniciar Sesión
                </button>
            </form>
            
            <p class="auth-toggle">
                ¿No tienes cuenta? 
                <a href="#" id="showRegister">Regístrate aquí</a>
            </p>
        </div>

        <!-- FORMULARIO DE REGISTRO -->
        <div class="auth-form hidden" id="registerForm">
            <h3>📝 Crear Cuenta</h3>
            
            <form id="registerFormElement">
                <div class="form-group">
                    <label for="registerNombre">Nombre completo:</label>
                    <input type="text" id="registerNombre" required 
                           placeholder="Tu nombre completo">
                </div>
                
                <div class="form-group">
                    <label for="registerEmail">Email:</label>
                    <input type="email" id="registerEmail" required 
                           placeholder="tu@email.com">
                </div>
                
                <div class="form-group">
                    <label for="registerPassword">Contraseña:</label>
                    <input type="password" id="registerPassword" required 
                           placeholder="Mínimo 6 caracteres">
                </div>
                
                <button type="submit" class="btn btn-primary">
                    ✨ Crear Cuenta
                </button>
            </form>
            
            <p class="auth-toggle">
                ¿Ya tienes cuenta? 
                <a href="#" id="showLogin">Inicia sesión aquí</a>
            </p>
        </div>
    </div>
</section>`}
              </code>
            </pre>

            <div className="cuadro-didactico">
              <h4>🧠 Análisis de la estructura</h4>
              <ul className="lista-simple">
                <li><strong>🎯 IDs únicos</strong>: Cada input tiene un ID específico para que JavaScript pueda acceder</li>
                <li><strong>📋 Formularios separados</strong>: Login y registro son elementos independientes</li>
                <li><strong>🔄 Enlaces intercambiables</strong>: Los usuarios pueden cambiar entre formularios</li>
                <li><strong>✅ Validación HTML5</strong>: Atributos required y type="email" para validación básica</li>
                <li><strong>🎨 Clases CSS</strong>: Estructura semántica para styling profesional</li>
              </ul>
            </div>

            <h3>⚙️ JavaScript: gestión profesional de autenticación</h3>
            <p>
              Aquí es donde ocurre la magia. <strong>Cada función tiene una responsabilidad específica</strong> 
              y maneja errores de forma elegante:
            </p>

            <pre className="bloque-codigo">
              <code>
{`// 🌐 Configuración global
const URL_API = "http://localhost:3000/api";

// 💾 Estado global de la aplicación
const estado = {
    usuario: null,
    token: null,
    productos: [],
    carrito: []
};

// ===== REGISTRO DE USUARIO =====
async function registrarUsuario(nombre, email, password) {
    try {
        console.log('📝 Iniciando registro para:', email);
        
        // 1. Enviamos los datos al backend
        const respuesta = await fetch(\`\${URL_API}/auth/register\`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                nombre, 
                email, 
                password 
            })
        });
        
        // 2. Procesamos la respuesta
        const datos = await respuesta.json();
        console.log('📡 Respuesta del servidor:', datos);
        
        // 3. Verificamos si fue exitoso
        if (respuesta.ok) {
            // ✅ Registro exitoso
            guardarSesion(datos.token, datos.usuario);
            mostrarInterfazAutenticada();
            mostrarAlerta('¡Éxito!', \`Bienvenido \${datos.usuario.nombre}\`);
            console.log('✅ Usuario registrado correctamente');
        } else {
            // ❌ Error del servidor
            throw new Error(datos.message || 'Error al registrarse');
        }
        
    } catch (error) {
        console.error('❌ Error en registro:', error);
        mostrarAlerta('Error', error.message);
        throw error;
    }
}

// ===== LOGIN DE USUARIO =====
async function iniciarSesion(email, password) {
    try {
        console.log('🔑 Iniciando sesión para:', email);
        
        // 1. Enviamos credenciales al backend
        const respuesta = await fetch(\`\${URL_API}/auth/login\`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                email, 
                password 
            })
        });
        
        // 2. Procesamos la respuesta
        const datos = await respuesta.json();
        
        // 3. Verificamos las credenciales
        if (respuesta.ok) {
            // ✅ Login exitoso
            guardarSesion(datos.token, datos.usuario);
            mostrarInterfazAutenticada();
            mostrarAlerta('¡Bienvenido!', \`Hola \${datos.usuario.nombre}\`);
            console.log('✅ Sesión iniciada correctamente');
        } else {
            // ❌ Credenciales incorrectas
            throw new Error(datos.message || 'Error al iniciar sesión');
        }
        
    } catch (error) {
        console.error('❌ Error en login:', error);
        mostrarAlerta('Error', 'Email o contraseña incorrectos');
        throw error;
    }
}

// ===== GESTIÓN DE SESIÓN =====
function guardarSesion(token, usuario) {
    // Guardamos en memoria y en localStorage
    estado.token = token;
    estado.usuario = usuario;
    
    // Persistencia en el navegador
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    
    console.log('💾 Sesión guardada:', usuario.email);
}

function cerrarSesion() {
    // Limpiamos todo
    estado.token = null;
    estado.usuario = null;
    estado.carrito = [];
    
    // Limpiamos localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    
    // Volvemos a la interfaz de guest
    mostrarInterfazGuest();
    console.log('👋 Sesión cerrada');
}`}
              </code>
            </pre>

            <div className="cuadro-didactico">
              <h4>🔍 Detalles técnicos importantes</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>📡 Comunicación HTTP</h5>
                  <p>
                    Usamos <code>fetch()</code> con método POST y headers JSON. 
                    La API devuelve token y datos de usuario.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>💾 Persistencia</h5>
                  <p>
                    Guardamos el token en <code>localStorage</code> para que 
                    la sesión persista entre recargas de página.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🛡️ Manejo de errores</h5>
                  <p>
                    Try-catch en todas las operaciones, mensajes descriptivos 
                    y logging para debugging.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🎯 Estados de aplicación</h5>
                  <p>
                    Objeto global <code>estado</code> centraliza toda la información 
                    del usuario y aplicación.
                  </p>
                </div>
              </div>
            </div>

            <h3>🎮 Eventos de formularios: conectando HTML con JavaScript</h3>
            <p>
              Los formularios cobran vida cuando conectamos los eventos. 
              <strong>Cada interacción del usuario ejecuta el código correcto</strong>:
            </p>

            <pre className="bloque-codigo">
              <code>
{`// ===== CONFIGURACIÓN DE EVENTOS =====
document.addEventListener('DOMContentLoaded', function() {
    
    // 📝 EVENTO: Envío del formulario de registro
    document.getElementById('registerFormElement').addEventListener('submit', async function(e) {
        e.preventDefault(); // Evita que la página se recargue
        
        // 📋 Capturamos los valores del formulario
        const nombre = document.getElementById('registerNombre').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value;
        
        // ✅ Validaciones básicas
        if (!nombre || !email || !password) {
            mostrarAlerta('Error', 'Todos los campos son obligatorios');
            return;
        }
        
        if (password.length < 6) {
            mostrarAlerta('Error', 'La contraseña debe tener mínimo 6 caracteres');
            return;
        }
        
        try {
            // 🚀 Ejecutamos el registro
            await registrarUsuario(nombre, email, password);
            
            // 🧹 Limpiamos el formulario
            document.getElementById('registerFormElement').reset();
            
        } catch (error) {
            // El error ya se maneja en la función registrarUsuario
            console.log('Error manejado en registro');
        }
    });
    
    // 🔑 EVENTO: Envío del formulario de login
    document.getElementById('loginFormElement').addEventListener('submit', async function(e) {
        e.preventDefault(); // Evita recarga
        
        // 📋 Capturamos credenciales
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        
        // ✅ Validación rápida
        if (!email || !password) {
            mostrarAlerta('Error', 'Email y contraseña son obligatorios');
            return;
        }
        
        try {
            // 🚀 Ejecutamos el login
            await iniciarSesion(email, password);
            
            // 🧹 Limpiamos formulario
            document.getElementById('loginFormElement').reset();
            
        } catch (error) {
            // Error manejado en iniciarSesion()
            console.log('Error manejado en login');
        }
    });
    
    // 🔄 EVENTOS: Intercambiar entre formularios
    document.getElementById('showRegister').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('registerForm').classList.remove('hidden');
    });
    
    document.getElementById('showLogin').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('registerForm').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
    });
    
});`}
              </code>
            </pre>

            <div className="cuadro-didactico">
              <h4>💡 Conceptos clave del manejo de eventos</h4>
              <ul className="lista-simple">
                <li><strong>🚫 preventDefault()</strong>: Evita que el formulario recargue la página</li>
                <li><strong>📋 Captura de datos</strong>: Obtenemos valores con getElementById().value</li>
                <li><strong>✅ Validación frontend</strong>: Verificamos datos antes de enviar a la API</li>
                <li><strong>🔄 Async/await</strong>: Manejo moderno de operaciones asíncronas</li>
                <li><strong>🧹 Reset de formularios</strong>: Limpiamos después del éxito</li>
                <li><strong>🎭 Toggle de clases</strong>: Intercambiamos entre formularios con CSS</li>
              </ul>
            </div>

            <p className="resumen-seccion">
              <strong>🎉 Con estos componentes</strong>, tienes un sistema de autenticación 
              completamente funcional que se comunica de forma segura con tu API backend, 
              maneja errores elegantemente y proporciona una experiencia de usuario profesional.
            </p>
          </article>
        </details>
      </section>

      <section className="section" id="b5-productos">
        <details>
          <summary>📦 Sistema completo de gestión de productos</summary>
          <article className="card">
            <h2>Catálogo dinámico y carrito de compras</h2>

            <p>
              El catálogo de productos es donde tu API cobra vida. Aquí aprenderás a 
              <strong>mostrar datos dinámicamente</strong>, gestionar el carrito de compras 
              y crear una experiencia de usuario fluida y atractiva.
            </p>

            <div className="cuadro-didactico">
              <h4>🏗️ Arquitectura del sistema de productos</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>📡 Carga dinámica</h5>
                  <p>
                    Los productos se cargan desde tu API en tiempo real, 
                    mostrando información actualizada y stock disponible.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🛒 Carrito inteligente</h5>
                  <p>
                    Sistema de carrito que valida stock, calcula totales 
                    y persiste entre sesiones del usuario.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🎨 Interfaz adaptable</h5>
                  <p>
                    Grid responsive que se ajusta a cualquier pantalla, 
                    con estados visuales claros para cada producto.
                  </p>
                </div>
              </div>
            </div>

            <h3>📋 HTML estructurado: contenedores inteligentes</h3>
            <p>
              La estructura HTML está diseñada para <strong>máxima flexibilidad</strong>. 
              Cada elemento cumple una función específica en el sistema:
            </p>

            <pre className="bloque-codigo">
              <code>
{`<!-- Sección principal de productos -->
<section class="products-section">
    <div class="section-header">
        <h2>🛒 Catálogo de Productos</h2>
        
        <!-- Filtro por categorías (futuras implementaciones) -->
        <div class="category-filter">
            <label for="categorySelect">Filtrar por categoría:</label>
            <select id="categorySelect">
                <option value="">Todas las categorías</option>
                <!-- Las opciones se cargan dinámicamente desde la API -->
            </select>
        </div>
    </div>
    
    <!-- Grid de productos - Aquí se renderizan todos los productos -->
    <div class="products-grid" id="productsGrid">
        <!-- Los productos se insertan aquí dinámicamente -->
    </div>
</section>

<!-- Carrito de compras flotante -->
<div class="cart-sidebar" id="cartSidebar">
    <div class="cart-header">
        <h3>🛒 Tu Carrito</h3>
        <button class="cart-close" id="cartClose">✖</button>
    </div>
    
    <div class="cart-content" id="cartContent">
        <!-- Items del carrito se renderizan aquí -->
    </div>
    
    <div class="cart-footer" id="cartFooter">
        <div class="cart-total">
            Total: <span id="cartTotal">0€</span>
        </div>
        <button class="btn btn-primary cart-checkout" id="cartCheckout">
            💳 Finalizar Compra
        </button>
    </div>
</div>

<!-- Overlay para el carrito -->
<div class="cart-overlay" id="cartOverlay"></div>`}
              </code>
            </pre>

            <div className="cuadro-didactico">
              <h4>🎯 Elementos clave de la estructura</h4>
              <ul className="lista-simple">
                <li><strong>🏗️ Grid flexible</strong>: products-grid se adapta automáticamente al contenido</li>
                <li><strong>🎛️ Filtros preparados</strong>: Select para categorías, listo para funcionalidad avanzada</li>
                <li><strong>🛒 Carrito lateral</strong>: Sidebar que se muestra/oculta dinámicamente</li>
                <li><strong>📱 Responsive ready</strong>: Estructura pensada para móviles y desktop</li>
                <li><strong>🎨 Clases semánticas</strong>: Nombres de clases que describen función, no apariencia</li>
              </ul>
            </div>

            <h3>⚙️ JavaScript: renderizado dinámico profesional</h3>
            <p>
              El JavaScript gestiona toda la lógica del catálogo. <strong>Cada función está optimizada</strong> 
              para rendimiento y mantenibilidad:
            </p>

            <pre className="bloque-codigo">
              <code>
{`// ===== CARGA DE PRODUCTOS DESDE API =====
async function cargarProductos() {
    try {
        console.log('📦 Cargando productos desde API...');
        
        // 1. Petición a nuestra API
        const respuesta = await fetch(\`\${URL_API}/productos\`);
        const datos = await respuesta.json();
        
        // 2. Verificamos respuesta exitosa
        if (respuesta.ok) {
            estado.productos = datos.data; // Guardamos en estado global
            mostrarProductos(); // Renderizamos en pantalla
            actualizarCategorias(); // Actualizamos filtro de categorías
            console.log(\`✅ \${estado.productos.length} productos cargados\`);
        } else {
            throw new Error('Error al cargar productos desde el servidor');
        }
        
    } catch (error) {
        console.error('❌ Error cargando productos:', error);
        mostrarAlerta('Error', 'No se pudieron cargar los productos');
        
        // Mostramos mensaje de error en la interfaz
        document.getElementById('productsGrid').innerHTML = \`
            <div class="error-message">
                <h3>😕 Oops! No se pudieron cargar los productos</h3>
                <p>Verifica que tu API esté ejecutándose en localhost:3000</p>
                <button onclick="cargarProductos()" class="btn btn-primary">
                    🔄 Reintentar
                </button>
            </div>
        \`;
    }
}

// ===== RENDERIZADO DE PRODUCTOS =====
function mostrarProductos() {
    const contenedor = document.getElementById('productsGrid');
    
    // 📋 Filtrado opcional por categoría
    let productosAMostrar = estado.productos;
    if (estado.categoria) {
        productosAMostrar = estado.productos.filter(producto => 
            producto.categoria.toLowerCase() === estado.categoria.toLowerCase()
        );
    }
    
    // ❌ Caso: no hay productos
    if (productosAMostrar.length === 0) {
        contenedor.innerHTML = \`
            <div class="empty-state">
                <h3>📦 No hay productos disponibles</h3>
                <p>Parece que no hay productos en esta categoría</p>
            </div>
        \`;
        return;
    }
    
    // ✅ Renderizamos productos
    const usuarioLogueado = !!estado.usuario;
    
    contenedor.innerHTML = productosAMostrar.map(producto => {
        return crearTarjetaProducto(producto, usuarioLogueado);
    }).join('');
    
    // 🎮 Configuramos eventos de botones después del renderizado
    configurarEventosProductos();
}

// ===== CREACIÓN DE TARJETAS DE PRODUCTO =====
function crearTarjetaProducto(producto, usuarioLogueado) {
    const sinStock = producto.stock === 0;
    const noLogueado = !usuarioLogueado;
    const deshabilitado = sinStock || noLogueado;
    
    // 🎯 Lógica de botones inteligente
    let textoBoton = '🛒 Agregar';
    let claseBoton = 'btn btn-primary btn-small add-to-cart-btn';
    
    if (sinStock) {
        textoBoton = '❌ Sin Stock';
        claseBoton = 'btn btn-disabled btn-small';
    } else if (noLogueado) {
        textoBoton = '🔒 Inicia Sesión';
        claseBoton = 'btn btn-warning btn-small login-required-btn';
    }
    
    return \`
        <div class="product-card" data-product-id="\${producto.id}">
            <!-- Imagen del producto -->
            <div class="product-image-container">
                <img src="images/foto.png" 
                     alt="\${producto.nombre}" 
                     class="product-image"
                     onerror="this.src='images/foto.png'">
                     
                <!-- Badge de categoría -->
                <span class="category-badge">\${producto.categoria}</span>
            </div>
            
            <!-- Información del producto -->
            <div class="product-info">
                <h3 class="product-name">\${producto.nombre}</h3>
                <p class="product-description">\${producto.descripcion}</p>
                
                <!-- Precio y stock -->
                <div class="product-metrics">
                    <div class="product-price">\${producto.precio}€</div>
                    <div class="product-stock \${sinStock ? 'out-of-stock' : ''}">
                        Stock: \${producto.stock}
                    </div>
                </div>
                
                <!-- Controles de compra -->
                <div class="product-actions">
                    <div class="quantity-container">
                        <input type="number" 
                               class="quantity-input" 
                               min="1" 
                               max="\${producto.stock}" 
                               value="1" 
                               \${deshabilitado ? 'disabled' : ''}>
                    </div>
                    
                    <button class="\${claseBoton}" 
                            data-product-id="\${producto.id}"
                            \${deshabilitado ? 'disabled' : ''}>
                        \${textoBoton}
                    </button>
                </div>
            </div>
        </div>
    \`;
}

// ===== GESTIÓN DEL CARRITO =====
function agregarAlCarrito(productoId) {
    const producto = estado.productos.find(p => p.id === productoId);
    const inputCantidad = document.querySelector(
        \`[data-product-id="\${productoId}"] .quantity-input\`
    );
    const cantidad = parseInt(inputCantidad.value);
    
    // ✅ Validaciones
    if (!producto) {
        mostrarAlerta('Error', 'Producto no encontrado');
        return;
    }
    
    if (cantidad > producto.stock) {
        mostrarAlerta('Error', \`Solo hay \${producto.stock} unidades disponibles\`);
        return;
    }
    
    // 📦 Buscar si ya existe en el carrito
    const itemExistente = estado.carrito.find(item => item.id === productoId);
    
    if (itemExistente) {
        // Actualizar cantidad
        const nuevaCantidad = itemExistente.cantidad + cantidad;
        
        if (nuevaCantidad > producto.stock) {
            mostrarAlerta('Error', \`No puedes agregar más de \${producto.stock} unidades\`);
            return;
        }
        
        itemExistente.cantidad = nuevaCantidad;
    } else {
        // Agregar nuevo item
        estado.carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: cantidad,
            stock: producto.stock
        });
    }
    
    // 🔄 Actualizamos interfaz
    actualizarVistaCarrito();
    mostrarAlerta('¡Agregado!', \`\${cantidad} x \${producto.nombre} agregado al carrito\`);
    
    // Reset input quantity
    inputCantidad.value = 1;
    
    console.log('🛒 Carrito actualizado:', estado.carrito);
}`}
              </code>
            </pre>

            <div className="cuadro-didactico">
              <h4>🧠 Patrones de desarrollo utilizados</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>🏭 Factory Pattern</h5>
                  <p>
                    <code>crearTarjetaProducto()</code> genera HTML de forma 
                    consistente y reutilizable para cada producto.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>📊 Estado centralizado</h5>
                  <p>
                    Todo el estado de la aplicación (productos, carrito, usuario) 
                    se gestiona desde un objeto global.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🔄 Reactive Updates</h5>
                  <p>
                    Cambios en el estado se reflejan automáticamente en la UI 
                    mediante funciones de actualización.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>✅ Validation Layer</h5>
                  <p>
                    Validaciones múltiples: stock disponible, usuario logueado, 
                    límites de cantidad, etc.
                  </p>
                </div>
              </div>
            </div>

            <h3>🎮 Eventos y interacciones: conectando todo</h3>
            <p>
              La interactividad se logra conectando eventos HTML con funciones JavaScript. 
              <strong>Cada clic tiene consecuencias inmediatas</strong>:
            </p>

            <pre className="bloque-codigo">
              <code>
{`// ===== CONFIGURACIÓN DE EVENTOS DE PRODUCTOS =====
function configurarEventosProductos() {
    
    // 🛒 EVENTO: Botones "Agregar al carrito"
    document.querySelectorAll('.add-to-cart-btn').forEach(boton => {
        boton.addEventListener('click', function() {
            const productoId = parseInt(this.dataset.productId);
            agregarAlCarrito(productoId);
        });
    });
    
    // 🔒 EVENTO: Botones "Inicia sesión" 
    document.querySelectorAll('.login-required-btn').forEach(boton => {
        boton.addEventListener('click', function() {
            mostrarAlerta('Inicia sesión', 'Necesitas una cuenta para comprar');
            // Opcional: mostrar formulario de login automáticamente
            mostrarFormularioLogin();
        });
    });
    
    // 🔢 EVENTOS: Inputs de cantidad
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const max = parseInt(this.max);
            const value = parseInt(this.value);
            
            // Validamos límites
            if (value > max) {
                this.value = max;
                mostrarAlerta('Límite alcanzado', \`Máximo \${max} unidades\`);
            }
            
            if (value < 1) {
                this.value = 1;
            }
        });
    });
}

// ===== EVENTOS GLOBALES DE APLICACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    
    // 🚀 Inicialización de la aplicación
    inicializarAplicacion();
    
    // 🛒 EVENTO: Abrir/cerrar carrito
    document.getElementById('cartToggle').addEventListener('click', function() {
        toggleCarrito();
    });
    
    document.getElementById('cartClose').addEventListener('click', function() {
        cerrarCarrito();
    });
    
    document.getElementById('cartOverlay').addEventListener('click', function() {
        cerrarCarrito();
    });
    
    // 🎯 EVENTO: Filtro por categoría
    document.getElementById('categorySelect').addEventListener('change', function() {
        estado.categoria = this.value;
        mostrarProductos(); // Re-renderiza con filtro aplicado
        console.log('🏷️ Filtro aplicado:', this.value || 'Todas las categorías');
    });
    
    // 💳 EVENTO: Finalizar compra
    document.getElementById('cartCheckout').addEventListener('click', function() {
        if (estado.carrito.length === 0) {
            mostrarAlerta('Carrito vacío', 'Agrega productos antes de comprar');
            return;
        }
        
        if (!estado.usuario) {
            mostrarAlerta('Inicia sesión', 'Necesitas una cuenta para finalizar la compra');
            mostrarFormularioLogin();
            return;
        }
        
        // Aquí iría la lógica de checkout (próxima implementación)
        procesarCompra();
    });
});

// ===== FUNCIONES DE UTILIDAD =====
function actualizarVistaCarrito() {
    const contenido = document.getElementById('cartContent');
    const total = document.getElementById('cartTotal');
    
    if (estado.carrito.length === 0) {
        contenido.innerHTML = \`
            <div class="cart-empty">
                <p>🛒 Tu carrito está vacío</p>
                <p>¡Agrega productos para empezar a comprar!</p>
            </div>
        \`;
        total.textContent = '0€';
        return;
    }
    
    // Renderizar items del carrito
    contenido.innerHTML = estado.carrito.map(item => \`
        <div class="cart-item" data-item-id="\${item.id}">
            <div class="cart-item-info">
                <h4>\${item.nombre}</h4>
                <div class="cart-item-details">
                    <span class="cart-item-price">\${item.precio}€</span>
                    <span class="cart-item-quantity">x\${item.cantidad}</span>
                </div>
            </div>
            <div class="cart-item-actions">
                <button class="cart-item-remove" onclick="eliminarDelCarrito(\${item.id})">
                    🗑️
                </button>
            </div>
        </div>
    \`).join('');
    
    // Calcular total
    const totalCarrito = estado.carrito.reduce((sum, item) => 
        sum + (item.precio * item.cantidad), 0
    );
    
    total.textContent = \`\${totalCarrito.toFixed(2)}€\`;
}

function toggleCarrito() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Actualizamos vista del carrito al abrir
    if (sidebar.classList.contains('active')) {
        actualizarVistaCarrito();
    }
}`}
              </code>
            </pre>

            <div className="cuadro-didactico">
              <h4>🎯 Funcionalidades implementadas</h4>
              <ul className="lista-simple">
                <li><strong>📦 Carga dinámica</strong>: Productos desde API con manejo de errores</li>
                <li><strong>🛒 Carrito inteligente</strong>: Validaciones de stock y cantidad</li>
                <li><strong>🔒 Control de acceso</strong>: Diferentes estados según autenticación</li>
                <li><strong>🎨 UI responsiva</strong>: Sidebar, overlay y grid adaptables</li>
                <li><strong>🏷️ Filtros preparados</strong>: Base para filtrado por categorías</li>
                <li><strong>💾 Estado persistente</strong>: Carrito se mantiene durante la sesión</li>
                <li><strong>✅ Validación robusta</strong>: Control de límites y casos edge</li>
              </ul>
            </div>

            <p className="resumen-seccion">
              <strong>🚀 Con esta implementación</strong>, tienes un sistema completo de productos 
              que rival con cualquier ecommerce profesional. El código es modular, escalable 
              y fácil de mantener, siguiendo las mejores prácticas de desarrollo frontend.
            </p>
          </article>
        </details>
      </section>

      <section className="section" id="b5-leccion2">
        <details>
          <summary>📄 Creando la estructura HTML base</summary>
          <article className="card">
            <h2>Estructura del archivo HTML de testing</h2>

            <p>
              Vamos a crear tres archivos <code className="etiqueta-codigo">apiTest.html</code> en
              la raíz de nuestro proyecto backend para tener acceso directo a nuestra API. Un archivo para estilos y otro para scripts.
            </p>

            <pre className="bloque-codigo">
              <code>
{`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bazar Online - Frontend HTML</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="logo">
                <h1>🛍️ Bazar Online</h1>
                <p>Versión HTML</p>
            </div>
            
            <nav class="auth-nav" id="authNav"></nav>
        </div>
    </header>

    <main class="main">
        <div class="container">
            <section class="info-section">
                <div class="info-card">
                    <h2>📚 Proyecto Full-Stack Bazar</h2>

                    <p><strong>Frontend:</strong> HTML + CSS + JavaScript puro</p>
                    <p><strong>Backend:</strong> Node.js + Express + MySQL</p>
                    <p><strong>API:</strong> RESTful con autenticación JWT</p>

                    <p class="highlight-text">
                        Proyecto Full-Stack desarrollado con un stack tecnológico moderno y orientado al rendimiento.
                        El frontend está construido con <strong>HTML, CSS y JavaScript</strong> para una interfaz ligera y eficiente,
                        mientras que el backend combina <strong>Node.js</strong> y <strong>Express</strong> para ofrecer una API REST robusta.
                        La base de datos se gestiona con <strong>MySQL</strong>, un sistema relacional fiable y estructurado.
                        La seguridad se implementa mediante <strong>JWT</strong> para la autenticación basada en tokens
                        y <strong>bcrypt</strong> para la encriptación avanzada de contraseñas.
                        Todo el flujo cliente-servidor sigue buenas prácticas profesionales.
                    </p>

                    <div class="api-status" id="apiStatus">
                        <span class="status-indicator">🔄</span>
                        <span>Verificando conexión con API...</span>
                    </div>

                    <div class="tech-badges">
                        <span class="badge">🖥️ HTML + CSS + JS</span>
                        <span class="badge">⚡ Node.js + Express</span>
                        <span class="badge">🗄️ MySQL</span>
                        <span class="badge">🔐 JWT Auth</span>
                        <span class="badge">🌐 REST API</span>
                    </div>
                </div>
            </section>

            <section class="auth-section" id="authSection">
                <div class="auth-container">
                    <div class="auth-form" id="loginForm">
                        <h3>🔑 Iniciar Sesión</h3>
                        
                        <form id="loginFormElement">
                            <div class="form-group">
                                <label for="loginEmail">Email:</label>
                                <input type="email" id="loginEmail" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="loginPassword">Contraseña:</label>
                                <input type="password" id="loginPassword" required>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                        </form>
                        
                        <p class="auth-toggle">
                            ¿No tienes cuenta? 
                            <a href="#" id="showRegister">Regístrate aquí</a>
                        </p>
                    </div>

                    <div class="auth-form hidden" id="registerForm">
                        <h3>📝 Crear Cuenta</h3>
                        
                        <form id="registerFormElement">
                            <div class="form-group">
                                <label for="registerNombre">Nombre completo:</label>
                                <input type="text" id="registerNombre" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="registerEmail">Email:</label>
                                <input type="email" id="registerEmail" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="registerPassword">Contraseña:</label>
                                <input type="password" id="registerPassword" required>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Crear Cuenta</button>
                        </form>
                        
                        <p class="auth-toggle">
                            ¿Ya tienes cuenta? 
                            <a href="#" id="showLogin">Inicia sesión aquí</a>
                        </p>
                    </div>
                </div>
            </section>

            <section class="products-section">
                <div class="section-header">
                    <h2>🛒 Catálogo de Productos</h2>
                    
                    <div class="category-filter">
                        <label for="categorySelect">Filtrar por categoría:</label>
                        <select id="categorySelect">
                            <option value="">Todas las categorías</option>
                            <option value="Electrónicos">Electrónicos</option>
                            <option value="Ropa">Ropa</option>
                            <option value="Hogar">Hogar</option>
                        </select>
                    </div>
                </div>

                <div class="loading" id="productsLoading">
                    <p>⏳ Cargando productos...</p>
                </div>

                <div class="products-grid" id="productsGrid"></div>

                <div class="error-message hidden" id="productsError">
                    <p>❌ Error al cargar productos. Verifica que el servidor esté funcionando.</p>
                </div>
            </section>

            <section class="cart-section" id="cartSection">
                <h2>🛒 Mi Carrito de Compras</h2>
                
                <div class="cart-items" id="cartItems">
                    <p class="empty-cart">Tu carrito está vacío</p>
                </div>

                <div class="cart-summary" id="cartSummary" style="display: none;">
                    <div class="cart-total">
                        <strong>Total: €<span id="cartTotal">0</span></strong>
                    </div>
                    <button class="btn btn-success" id="createOrderBtn">
                        🛍️ Crear Pedido
                    </button>
                    <button class="btn btn-secondary" id="clearCartBtn">
                        🗑️ Vaciar Carrito
                    </button>
                </div>
            </section>

            <section class="orders-section hidden" id="ordersSection">
                <div class="section-header">
                    <h2>📦 Mis Pedidos</h2>
                    <button class="btn btn-primary" id="refreshOrdersBtn">
                        🔄 Actualizar
                    </button>
                </div>

                <div class="loading hidden" id="ordersLoading">
                    <p>⏳ Cargando pedidos...</p>
                </div>

                <div class="orders-list" id="ordersList"></div>

                <div class="error-message hidden" id="ordersError">
                    <p>❌ Error al cargar pedidos</p>
                </div>
            </section>

            <section class="user-info hidden" id="userInfo">
                <div class="user-card">
                    <div class="profile-header">
                        <div class="profile-avatar">
                            <img src="images/foto2.png" alt="Foto de perfil" class="profile-image">
                        </div>
                        <div class="profile-info">
                            <h3>👤 Mi Perfil</h3>
                            <div id="userDetails"></div>
                        </div>
                    </div>
                    <div class="profile-actions">
                        <button class="btn btn-danger" id="logoutBtn">
                            🚪 Cerrar Sesión
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Bazar Online - Proyecto educativo con HTML, CSS y JavaScript</p>
            <p>Creado para estudiantes que prefieren tecnologías web tradicionales</p>
        </div>
    </footer>

    <div class="modal hidden" id="messageModal">
        <div class="modal-content">
            <div class="modal-header">
                <h4 id="modalTitle">Mensaje</h4>
                <button class="modal-close" id="modalClose">&times;</button>
            </div>
            <div class="modal-body">
                <p id="modalMessage"></p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" id="modalOk">Aceptar</button>
            </div>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>`}
              </code>
            </pre>

            <div className="nota">
              <strong>💡 Cómo usar este archivo:</strong>
              <ol className="lista-simple">
                <li>Guarda este código como <code>apiTest.html</code> en la raíz de tu proyecto backend</li>
                <li>Asegúrate de que tu servidor Node.js esté ejecutándose en el puerto 3000</li>
                <li>Abre el archivo HTML en tu navegador web</li>
                <li>¡Ya puedes probar tus endpoints!</li>
              </ol>
            </div>
          </article>
        </details>
      </section>

      <section className="section" id="b5-leccion2-5">
        <details>
          <summary>🎨 Archivo de estilos CSS (styles.css)</summary>
          <article className="card">
            <h2>Hoja de estilos para nuestro testing de API</h2>

            <p>
              Ahora creamos el archivo <code className="etiqueta-codigo">styles.css</code> que dará estilo 
              a nuestra interfaz de testing. Este CSS utiliza técnicas modernas como Grid, Flexbox 
              y efectos visuales avanzados.
            </p>

            <pre className="bloque-codigo">
              <code>
{`/* ===== ESTILOS GENERALES ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #ea66aa 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.hidden {
    display: none !important;
}

.loading {
    text-align: center;
    padding: 20px;
    color: #666;
    font-style: italic;
}

.error-message {
    background: #ffe6e6;
    color: #c53030;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #c53030;
    margin: 20px 0;
}

/* ===== SISTEMA DE BOTONES ===== */
.btn {
    display: inline-block;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 5px;
}

.btn-primary {
    background: #4299e1;
    color: white;
}

.btn-primary:hover {
    background: #3182ce;
    transform: translateY(-1px);
}

.btn-secondary {
    background: #718096;
    color: white;
}

.btn-secondary:hover {
    background: #4a5568;
}

.btn-success {
    background: #48bb78;
    color: white;
}

.btn-success:hover {
    background: #38a169;
}

.btn-danger {
    background: #f56565;
    color: white;
}

.btn-danger:hover {
    background: #e53e3e;
}

.btn-warning {
    background: #f6ad55;
    color: white;
    border: 2px solid #ed8936;
}

.btn-warning:hover {
    background: #ed8936;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(237, 137, 54, 0.3);
}

.btn-disabled {
    background: #a0aec0;
    color: #718096;
    cursor: not-allowed;
    opacity: 0.6;
}

.btn-outline {
    background: transparent;
    color: #4299e1;
    border: 2px solid #4299e1;
}

.btn-outline:hover {
    background: #4299e1;
    color: white;
}

/* ===== HEADER Y NAVEGACIÓN ===== */
.header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    color: #667eea;
    font-size: 24px;
    margin-bottom: 5px;
}

.logo p {
    color: #666;
    font-size: 14px;
    font-style: italic;
}

.auth-nav {
    display: flex;
    align-items: center;
    gap: 15px;
}

.auth-nav .user-name {
    color: #4a5568;
    font-weight: 500;
}

/* ===== TARJETAS Y SECCIONES ===== */
.main {
    padding: 20px 0;
}

section {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 15px;
}

.section-header h2 {
    color: #2d3748;
    font-size: 24px;
}

.info-card {
    text-align: center;
}

.info-card h2 {
    color: #667eea;
    margin-bottom: 15px;
}

.info-card p {
    margin-bottom: 10px;
    color: #4a5568;
}

.highlight-text {
    margin-top: 1rem;
    font-size: 0.95rem;
    line-height: 1.55;
    color: #333;
    background: #f1f5ff;
    padding: 0.8rem 1rem;
    border-left: 4px solid #007bff;
    border-radius: 8px;
}

.tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
    justify-content: center;
}

.badge {
    background: #e9f1ff;
    color: #004a98;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    border: 1px solid #c9ddff;
}

.api-status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    border-radius: 20px;
    background: #f7fafc;
    margin-top: 15px;
}

.status-indicator {
    font-size: 16px;
}

/* ===== FORMULARIOS DE AUTENTICACIÓN ===== */
.auth-container {
    max-width: 400px;
    margin: 0 auto;
}

.auth-form {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
}

.auth-form h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #2d3748;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    color: #4a5568;
    font-weight: 500;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #cbd5e0;
    border-radius: 5px;
    font-size: 14px;
    transition: border-color 0.3s ease;
}

.form-group input:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

.auth-toggle {
    text-align: center;
    margin-top: 15px;
    color: #666;
}

.auth-toggle a {
    color: #4299e1;
    text-decoration: none;
}

.auth-toggle a:hover {
    text-decoration: underline;
}

/* ===== CATÁLOGO DE PRODUCTOS ===== */
.category-filter {
    display: flex;
    align-items: center;
    gap: 10px;
}

.category-filter select {
    padding: 8px 12px;
    border: 1px solid #cbd5e0;
    border-radius: 5px;
    font-size: 14px;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.product-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.product-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.product-image {
    width: 100%;
    height: 200px;
    background: #f7fafc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: #cbd5e0;
    overflow: hidden;
}

.product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-card:hover .product-img {
    transform: scale(1.05);
}

.product-content {
    padding: 15px;
}

.product-title {
    font-size: 16px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 5px;
}

.product-category {
    font-size: 12px;
    color: #667eea;
    background: #edf2f7;
    padding: 2px 8px;
    border-radius: 10px;
    display: inline-block;
    margin-bottom: 10px;
}

.product-price {
    font-size: 18px;
    font-weight: 700;
    color: #48bb78;
    margin-bottom: 10px;
}

.product-stock {
    font-size: 12px;
    color: #666;
    margin-bottom: 15px;
}

.product-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.quantity-input {
    width: 60px;
    padding: 5px;
    border: 1px solid #cbd5e0;
    border-radius: 3px;
    text-align: center;
}

/* ===== CARRITO DE COMPRAS ===== */
.cart-items {
    margin-bottom: 20px;
}

.empty-cart {
    text-align: center;
    color: #666;
    font-style: italic;
    padding: 20px;
}

.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-bottom: 10px;
    background: white;
}

.cart-item-info {
    flex: 1;
}

.cart-item-name {
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 5px;
}

.cart-item-details {
    font-size: 14px;
    color: #666;
}

.cart-item-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.cart-summary {
    border-top: 2px solid #e2e8f0;
    padding-top: 20px;
    text-align: center;
}

.cart-total {
    font-size: 20px;
    margin-bottom: 15px;
    color: #2d3748;
}

/* ===== GESTIÓN DE PEDIDOS ===== */
.orders-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.order-item {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.order-item:hover {
    border-color: #4299e1;
    transform: translateY(-1px);
}

.order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.order-id {
    font-weight: 600;
    color: #2d3748;
}

.order-status {
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
}

.order-status.pendiente {
    background: #fed7af;
    color: #c05621;
}

.order-status.pagado {
    background: #c6f6d5;
    color: #22543d;
}

.order-status.enviado {
    background: #bee3f8;
    color: #2a4365;
}

/* ===== PERFIL DE USUARIO ===== */
.user-card {
    max-width: 600px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.profile-header {
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 25px;
    flex-wrap: wrap;
}

.profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #ea66aa;
    box-shadow: 0 4px 20px rgba(234, 102, 170, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-image:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 25px rgba(234, 102, 170, 0.5);
}

.profile-info h3 {
    margin-bottom: 20px;
    color: #2d3748;
    font-size: 1.5em;
    font-weight: 600;
}

#userDetails {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 20px;
    border-radius: 15px;
    margin: 0;
    border: 1px solid rgba(234, 102, 170, 0.1);
}

.user-detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.detail-label {
    font-weight: 600;
    color: #4a5568;
    font-size: 0.95em;
}

.detail-value {
    font-weight: 500;
    color: #2d3748;
    background: rgba(234, 102, 170, 0.1);
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.9em;
}

/* ===== FOOTER ===== */
.footer {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px 0;
    text-align: center;
    color: #666;
}

.footer p {
    margin-bottom: 5px;
    font-size: 14px;
}

/* ===== SISTEMA DE MODALES ===== */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    overflow: hidden;
}

.modal-header {
    background: #667eea;
    color: white;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-close {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-close:hover {
    background: rgba(255, 255, 255, 0.2);
}

.modal-body {
    padding: 20px;
}

.modal-footer {
    padding: 15px 20px;
    text-align: center;
    border-top: 1px solid #e2e8f0;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }

    .header .container {
        flex-direction: column;
        gap: 15px;
    }

    .section-header {
        flex-direction: column;
        align-items: stretch;
    }

    .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 15px;
    }

    .profile-header {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }
    
    .user-detail {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
}

@media (max-width: 480px) {
    .products-grid {
        grid-template-columns: 1fr;
    }
    
    .cart-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
}`}
              </code>
            </pre>

            <div className="cuadro-didactico">
              <h4>🎨 Características destacadas del CSS</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>🌈 Gradientes modernos</h5>
                  <p>
                    Utiliza gradientes CSS para crear fondos atractivos y 
                    efectos de cristal con <code>backdrop-filter</code>.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>📱 Diseño responsivo</h5>
                  <p>
                    CSS Grid y Flexbox para layouts adaptativos que 
                    funcionan en móviles, tablets y escritorio.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>✨ Micro-animaciones</h5>
                  <p>
                    Transiciones suaves en botones, cards y elementos 
                    interactivos para una UX profesional.
                  </p>
                </div>
              </div>
            </div>

            <div className="nota">
              <strong>💡 Buenas prácticas aplicadas:</strong>
              <ul className="lista-simple">
                <li>🎯 <strong>Mobile-first</strong>: Diseño que prioriza dispositivos móviles</li>
                <li>🔧 <strong>CSS Variables</strong>: Colores y medidas reutilizables</li>
                <li>⚡ <strong>Performance</strong>: Uso eficiente de transform y backdrop-filter</li>
                <li>♿ <strong>Accesibilidad</strong>: Contrastes adecuados y focus states</li>
                <li>📦 <strong>Modularidad</strong>: CSS organizado en secciones lógicas</li>
              </ul>
            </div>
          </article>
        </details>
      </section>

      <section className="section" id="b5-leccion2-7">
        <details>
          <summary>⚡ Archivo JavaScript (app.js) - La lógica completa</summary>
          <article className="card">
            <h2>Script principal para nuestra aplicación</h2>

            <p>
              Ahora creamos el archivo <code className="etiqueta-codigo">app.js</code> que contiene 
              toda la lógica JavaScript para manejar la autenticación, productos, carrito y pedidos.
              Este archivo implementa el patrón de gestión de estado centralizado y comunicación asíncrona con nuestra API.
            </p>

            <pre className="bloque-codigo">
              <code>
{`// ===== CONFIGURACIÓN Y ESTADO GLOBAL =====
const URL_API = "http://localhost:3000/api";

let estado = {
    usuario: null,
    token: null,
    productos: [],
    carrito: [],
    pedidos: [],
    categoria: '',
};

// ===== INICIALIZACIÓN DE LA APLICACIÓN =====
document.addEventListener('DOMContentLoaded', async function() {
    console.log('🚀 ¡Iniciando Bazar Online!');
    
    try {
        cargarSesionGuardada();
        configurarEventos();
        await verificarServidor();
        await cargarProductos();
        mostrarInterfaz();
        console.log('✅ ¡Todo listo! La aplicación está funcionando correctamente.');
    } catch (error) {
        console.error('❌ Error durante la inicialización:', error);
        mostrarAlerta('Error de Conexión', 'No se pudo conectar con el servidor. ¿Está funcionando el backend?');
    }
});

// ===== GESTIÓN DE SESIONES =====
function cargarSesionGuardada() {
    const tokenGuardado = localStorage.getItem('token');
    const usuarioGuardado = localStorage.getItem('user');
    
    if (tokenGuardado && usuarioGuardado) {
        try {
            estado.token = tokenGuardado;
            estado.usuario = JSON.parse(usuarioGuardado);
            console.log('👤 Bienvenido de nuevo,', estado.usuario.nombre);
        } catch (error) {
            console.error('❌ Sesión corrupta encontrada, limpiando datos...');
            cerrarSesion();
        }
    }
}

function guardarSesion(token, usuario) {
    estado.token = token;
    estado.usuario = usuario;
    
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(usuario));
    
    console.log('💾 Sesión guardada correctamente para:', usuario.nombre);
}

function cerrarSesion() {
    estado.token = null;
    estado.usuario = null;
    estado.carrito = [];
    estado.pedidos = [];
    
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    console.log('👋 Sesión cerrada correctamente');
    mostrarInterfaz(); 
}

// ===== COMUNICACIÓN CON BACKEND =====
async function verificarServidor() {
    try {
        const respuesta = await fetch(\`\${URL_API}/productos\`);
        
        if (respuesta.ok) {
            document.getElementById('apiStatus').innerHTML = \`
                <span class="status-indicator">✅</span>
                <span>Conectado al servidor</span>
            \`;
        } else {
            throw new Error('El servidor no responde correctamente');
        }
    } catch (error) {
        document.getElementById('apiStatus').innerHTML = \`
            <span class="status-indicator">❌</span>
            <span>Sin conexión al servidor</span>
        \`;
        throw error;
    }
}

function obtenerCabecerasAuth() {
    return {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${estado.token}\`
    };
}

function manejarErrorAuth(respuesta) {
    if (respuesta.status === 401) {
        console.log('🔒 Token expirado o inválido, cerrando sesión automáticamente...');
        cerrarSesion();
        return true;
    }
    return false;
}

// ===== SISTEMA DE AUTENTICACIÓN =====
async function iniciarSesion(email, password) {
    try {
        const respuesta = await fetch(\`\${URL_API}/auth/login\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        const datos = await respuesta.json();
        
        if (respuesta.ok) {
            guardarSesion(datos.token, datos.usuario);
            await cargarDatosUsuario();
            mostrarInterfaz();
            mostrarAlerta('¡Bienvenido!', \`Hola \${datos.usuario.nombre}\`);
        } else {
            throw new Error(datos.message || 'Error al iniciar sesión');
        }
    } catch (error) {
        console.error('❌ Error login:', error);
        throw error;
    }
}

async function registrarUsuario(nombre, email, password) {
    try {
        console.log('📝 Intentando registrar usuario:', email);
        
        const respuesta = await fetch(\`\${URL_API}/auth/register\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, email, password })
        });
        
        const datos = await respuesta.json();
        console.log('📡 Respuesta del servidor:', respuesta.status, datos);
        
        if (respuesta.ok) {
            guardarSesion(datos.token, datos.usuario);
            mostrarInterfaz();
            mostrarAlerta('¡Registrado!', \`Bienvenido \${datos.usuario.nombre}\`);
            console.log('✅ Usuario registrado exitosamente');
        } else {
            throw new Error(datos.message || 'Error al registrarse');
        }
    } catch (error) {
        console.error('❌ Error registro:', error);
        throw error;
    }
}

// ===== GESTIÓN DE PRODUCTOS =====
async function cargarProductos() {
    try {
        const respuesta = await fetch(\`\${URL_API}/productos\`);
        const datos = await respuesta.json();
        
        if (respuesta.ok) {
            estado.productos = datos.data;
            mostrarProductos();
            console.log(\`📦 \${estado.productos.length} productos cargados\`);
        } else {
            throw new Error('Error al cargar productos');
        }
    } catch (error) {
        console.error('❌ Error cargando productos:', error);
        mostrarAlerta('Error', 'No se pudieron cargar los productos');
    }
}

function crearImagenProducto(producto) {
    return \`
        <img src="images/foto.png" 
             alt="\${producto.nombre}" 
             class="product-image" 
             onerror="this.src='images/foto.png'">
    \`;
}

function filtrarPorCategoria(categoria) {
    estado.categoria = categoria;
    mostrarProductos();
}

function mostrarProductos() {
    const contenedor = document.getElementById('productsGrid');
    
    let productosAMostrar = estado.productos;
    if (estado.categoria) {
        productosAMostrar = estado.productos.filter(p => 
            p.categoria.toLowerCase() === estado.categoria.toLowerCase()
        );
    }
    
    if (productosAMostrar.length === 0) {
        contenedor.innerHTML = '<p>No hay productos disponibles</p>';
        return;
    }
    
    const usuarioLogueado = !!estado.usuario;
    
    contenedor.innerHTML = productosAMostrar.map(producto => {
        const sinStock = producto.stock === 0;
        const noLogueado = !usuarioLogueado;
        const deshabilitado = sinStock || noLogueado;
        
        let textoBoton = '🛒 Agregar';
        let claseBoton = 'btn btn-primary btn-small add-to-cart-btn';
        
        if (sinStock) {
            textoBoton = '❌ Sin Stock';
            claseBoton = 'btn btn-disabled btn-small';
        } else if (noLogueado) {
            textoBoton = '🔒 Inicia Sesión';
            claseBoton = 'btn btn-warning btn-small login-required-btn';
        }
        
        return \`
            <div class="product-card">
                \${crearImagenProducto(producto)}
                <div class="product-info">
                    <h3 class="product-name">\${producto.nombre}</h3>
                    <p class="product-description">\${producto.descripcion}</p>
                    <div class="product-price">\${producto.precio}€</div>
                    <div class="product-stock">Stock: \${producto.stock}</div>
                    <div class="product-actions">
                        <input type="number" 
                               class="quantity-input" 
                               min="1" 
                               max="\${producto.stock}" 
                               value="1" 
                               \${deshabilitado ? 'disabled' : ''}>
                        <button class="\${claseBoton}" 
                                data-product-id="\${producto.id}"
                                \${deshabilitado && sinStock ? 'disabled' : ''}>
                            \${textoBoton}
                        </button>
                    </div>
                </div>
            </div>
        \`;
    }).join('');
}

// ===== GESTIÓN DEL CARRITO =====
function agregarAlCarrito(idProducto, cantidad = 1) {
    if (!estado.usuario) {
        mostrarAlerta(
            '🔒 Por favor inicia sesión para hacer un pedido', 
            'Debes crear una cuenta o iniciar sesión para agregar productos al carrito'
        );
        return;
    }
    
    const producto = estado.productos.find(p => p.id === idProducto);
    if (!producto) {
        mostrarAlerta('Error', 'Producto no encontrado');
        return;
    }
    
    if (cantidad > producto.stock) {
        mostrarAlerta('Sin Stock', \`Solo hay \${producto.stock} unidades\`);
        return;
    }
    
    const itemExistente = estado.carrito.find(item => item.id === idProducto);
    
    if (itemExistente) {
        const nuevaCantidad = itemExistente.quantity + cantidad;
        if (nuevaCantidad > producto.stock) {
            mostrarAlerta('Sin Stock', \`Solo hay \${producto.stock} unidades\`);
            return;
        }
        itemExistente.quantity = nuevaCantidad;
    } else {
        estado.carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            quantity: cantidad
        });
    }
    
    mostrarCarrito();
    mostrarAlerta('¡Agregado!', \`\${producto.nombre} añadido al carrito\`);
}

function mostrarCarrito() {
    const contenedor = document.getElementById('cartItems');
    const elementoTotal = document.getElementById('cartTotal');
    
    const total = estado.carrito.reduce((sum, item) => sum + (item.precio * item.quantity), 0);
    
    if (elementoTotal) {
        elementoTotal.textContent = \`\${total.toFixed(2)}€\`;
    }
    
    if (!contenedor) {
        console.warn('⚠️ Elemento cartItems no encontrado');
        return;
    }
    
    if (estado.carrito.length === 0) {
        contenedor.innerHTML = '<p>El carrito está vacío</p>';
        return;
    }
    
    contenedor.innerHTML = estado.carrito.map(item => \`
        <div class="cart-item">
            <span class="item-name">\${item.nombre}</span>
            <span class="item-details">
                Cantidad: \${item.quantity} | Precio: €\${item.precio} | Subtotal: €\${(item.precio * item.quantity).toFixed(2)}
            </span>
            <button class="btn btn-danger btn-small remove-item-btn" data-product-id="\${item.id}">
                🗑️ Quitar
            </button>
        </div>
    \`).join('');
}

// ===== CONFIGURACIÓN DE EVENTOS =====
function configurarEventos() {
    // Eventos de autenticación
    document.getElementById('loginFormElement')?.addEventListener('submit', manejarLogin);
    document.getElementById('registerFormElement')?.addEventListener('submit', manejarRegistro);
    document.getElementById('showRegister')?.addEventListener('click', mostrarFormularioRegistro);
    document.getElementById('showLogin')?.addEventListener('click', mostrarFormularioLogin);
    
    // Eventos del carrito
    document.getElementById('createOrderBtn')?.addEventListener('click', crearPedido);
    document.getElementById('clearCartBtn')?.addEventListener('click', vaciarCarrito);
    
    // Eventos del perfil
    document.getElementById('logoutBtn')?.addEventListener('click', cerrarSesion);
    
    // Filtros de productos
    document.getElementById('categorySelect')?.addEventListener('change', (e) => {
        filtrarPorCategoria(e.target.value);
    });
    
    console.log('🎮 Eventos configurados correctamente');
}

// ===== INTERFAZ DE USUARIO =====
function mostrarInterfaz() {
    mostrarNavegacion();
    mostrarCarrito();
    
    const toggleElement = (id, show) => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.toggle('hidden', !show);
        }
    };
    
    if (estado.usuario) {
        toggleElement('authSection', false);
        toggleElement('cartSection', true);
        toggleElement('ordersSection', true);
        toggleElement('userInfo', true);
        
        mostrarPerfilUsuario();
        cargarPedidos();
    } else {
        toggleElement('authSection', true);
        toggleElement('cartSection', false);
        toggleElement('ordersSection', false);
        toggleElement('userInfo', false);
    }
}

// ===== SISTEMA DE ALERTAS =====
function mostrarAlerta(titulo, mensaje) {
    const modal = document.getElementById('messageModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    
    if (modal && modalTitle && modalMessage) {
        modalTitle.textContent = titulo;
        modalMessage.textContent = mensaje;
        modal.classList.remove('hidden');
        
        // Auto-cerrar después de 3 segundos
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 3000);
    } else {
        // Fallback si no hay modal
        alert(\`\${titulo}: \${mensaje}\`);
    }
}`}
              </code>
            </pre>

            <div className="cuadro-didactico">
              <h4>🧠 Conceptos clave de la arquitectura JavaScript</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>🏪 Estado centralizado</h5>
                  <p>
                    Todo el estado de la aplicación se gestiona desde un 
                    objeto global, facilitando el mantenimiento y debugging.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🔄 Fetch API moderna</h5>
                  <p>
                    Uso de async/await y manejo robusto de errores para 
                    comunicación con la API REST del backend.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>💾 Persistencia local</h5>
                  <p>
                    LocalStorage para mantener la sesión del usuario 
                    entre recargas de página de forma segura.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🎭 Separación de responsabilidades</h5>
                  <p>
                    Funciones especializadas para autenticación, productos, 
                    carrito, pedidos e interfaz de usuario.
                  </p>
                </div>
              </div>
            </div>

            <div className="nota">
              <strong>🔧 Funcionalidades implementadas:</strong>
              <ul className="lista-simple">
                <li>🔐 <strong>Autenticación JWT</strong>: Login, registro y persistencia de sesión</li>
                <li>📦 <strong>Catálogo dinámico</strong>: Carga y filtrado de productos por categoría</li>
                <li>🛒 <strong>Carrito inteligente</strong>: Gestión de productos, cantidades y stock</li>
                <li>📋 <strong>Historial de pedidos</strong>: Visualización y estado de pedidos</li>
                <li>👤 <strong>Perfil de usuario</strong>: Información personal y gestión de cuenta</li>
                <li>⚡ <strong>Interfaz reactiva</strong>: Actualizaciones automáticas basadas en estado</li>
                <li>🔄 <strong>Manejo de errores</strong>: Sistema robusto de captura y notificación</li>
              </ul>
            </div>

            <div className="nota nota-importante">
              <strong>🎯 Patrones de diseño utilizados:</strong>
              <p>
                Este código implementa tres patrones fundamentales de la programación moderna.
                A continuación te explicamos cada uno de forma detallada para que puedas aplicarlos en tus propios proyectos.
              </p>
            </div>

            <div className="cuadro-didactico">
              <h4>📐 Análisis detallado de los patrones implementados</h4>
              
              <div className="cuadro-didactico__item">
                <h5>🏪 Patrón State Management (Gestión de Estado Centralizada)</h5>
                <p>
                  <strong>¿Qué es?</strong> Es un patrón que concentra toda la información importante 
                  de la aplicación en un solo lugar, facilitando su control y actualización.
                </p>
                
                <div className="highlight-text">
                  <strong>En nuestro código:</strong><br/>
                  El objeto <code>estado</code> actúa como la "memoria central" de nuestra aplicación.
                  Contiene el usuario logueado, el token de autenticación, los productos, el carrito
                  y los pedidos. Cualquier cambio pasa por este objeto central.
                </div>

                <div className="nota">
                  <strong>🔗 Conexión con React:</strong>
                  <p>
                    Este objeto <code>estado</code> es conceptualmente idéntico al <code>useState</code> de React, 
                    pero manual. En React escribirías <code>const [usuario, setUsuario] = useState(null)</code> 
                    para cada propiedad. Aquí lo hacemos "a mano" para entender el funcionamiento interno. 
                    ¡Es el mismo concepto, diferente implementación!
                  </p>
                </div>

                <pre className="bloque-codigo">
                  <code>
{`// 🎯 Estado centralizado - Un solo lugar para toda la información
let estado = {
    usuario: null,      // Información del usuario logueado
    token: null,        // Token de autenticación JWT
    productos: [],      // Lista de productos del catálogo
    carrito: [],        // Items en el carrito de compras
    pedidos: [],        // Historial de pedidos
    categoria: '',      // Filtro de categoría activo
};

// ✅ Ventajas de este enfoque:
// - Fácil debugging: sabes dónde está cada dato
// - Consistencia: una sola fuente de verdad
// - Mantenimiento: cambios centralizados
// - Escalabilidad: base para patrones más avanzados`}
                  </code>
                </pre>

                <p>
                  <strong>¿Por qué es importante?</strong> Sin este patrón, tendrías datos 
                  esparcidos por toda la aplicación, dificultando el control y la sincronización.
                  Es como tener todos tus documentos importantes en una sola carpeta organizada.
                </p>
              </div>

              <div className="cuadro-didactico__item">
                <h5>👁️ Patrón Observer (Observador Reactivo)</h5>
                <p>
                  <strong>¿Qué es?</strong> Es un patrón donde diferentes partes de la aplicación 
                  "observan" cambios en los datos y se actualizan automáticamente cuando ocurren modificaciones.
                </p>
                
                <div className="highlight-text">
                  <strong>En nuestro código:</strong><br/>
                  Cuando el estado cambia (login, agregar al carrito, etc.), la interfaz 
                  se actualiza automáticamente llamando a funciones como <code>mostrarInterfaz()</code>,
                  <code>mostrarCarrito()</code>, y <code>mostrarProductos()</code>.
                </div>

                <pre className="bloque-codigo">
                  <code>
{`// 🔄 Patrón Observer - Actualizaciones automáticas
function agregarAlCarrito(idProducto, cantidad = 1) {
    // 1. Modificamos el estado
    estado.carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        quantity: cantidad
    });
    
    // 2. Notificamos el cambio (Observer pattern)
    mostrarCarrito();           // Actualiza la vista del carrito
    mostrarAlerta('¡Agregado!'); // Notifica al usuario
}

function iniciarSesion(email, password) {
    // 1. Cambio de estado
    guardarSesion(datos.token, datos.usuario);
    
    // 2. Observadores reaccionan
    await cargarDatosUsuario();  // Carga datos relacionados
    mostrarInterfaz();           // Actualiza toda la interfaz
    mostrarAlerta('¡Bienvenido!'); // Feedback al usuario
}

// ✅ Ventajas del patrón Observer:
// - Interfaz siempre sincronizada con los datos
// - Actualizaciones automáticas sin intervención manual
// - Código desacoplado y modular
// - Fácil agregar nuevos "observadores"`}
                  </code>
                </pre>

                <p>
                  <strong>¿Por qué es útil?</strong> Sin este patrón tendrías que actualizar 
                  manualmente cada parte de la interfaz cada vez que cambian los datos. 
                  Es como tener asistentes que automáticamente reorganizan tu escritorio 
                  cuando agregas nuevos documentos.
                </p>

                <div className="nota">
                  <strong>🎣 Conexión con React Hooks:</strong>
                  <p>
                    Este patrón Observer es exactamente lo que hace <code>useEffect</code> en React.
                    Nuestras funciones <code>mostrarCarrito()</code> y <code>mostrarInterfaz()</code>
                    son como efectos que se ejecutan cuando cambia el estado. En React sería:
                    <code>useEffect(() =&gt; mostrarCarrito(), [carrito])</code>
                  </p>
                </div>
              </div>

              <div className="cuadro-didactico__item">
                <h5>🎭 Patrón Separation of Concerns (Separación de Responsabilidades)</h5>
                <p>
                  <strong>¿Qué es?</strong> Es un principio que divide el código en módulos 
                  especializados, donde cada función tiene una responsabilidad específica y bien definida.
                </p>
                
                <div className="highlight-text">
                  <strong>En nuestro código:</strong><br/>
                  Hemos separado la lógica en módulos: autenticación, productos, carrito, 
                  pedidos e interfaz. Cada sección se encarga solo de su área específica.
                </div>

                <pre className="bloque-codigo">
                  <code>
{`// 🎯 Separación de Responsabilidades - Módulos especializados

// ===== MÓDULO DE AUTENTICACIÓN =====
// Solo se encarga de login, registro y sesiones
async function iniciarSesion(email, password) { /* ... */ }
async function registrarUsuario(nombre, email, password) { /* ... */ }
function guardarSesion(token, usuario) { /* ... */ }
function cerrarSesion() { /* ... */ }

// ===== MÓDULO DE PRODUCTOS =====
// Solo maneja el catálogo y filtros
async function cargarProductos() { /* ... */ }
function mostrarProductos() { /* ... */ }
function filtrarPorCategoria(categoria) { /* ... */ }

// ===== MÓDULO DEL CARRITO =====
// Solo gestiona compras y carrito
function agregarAlCarrito(idProducto, cantidad) { /* ... */ }
function quitarDelCarrito(idProducto) { /* ... */ }
function mostrarCarrito() { /* ... */ }

// ===== MÓDULO DE INTERFAZ =====
// Solo actualiza la vista y elementos visuales
function mostrarInterfaz() { /* ... */ }
function mostrarAlerta(titulo, mensaje) { /* ... */ }

// ✅ Ventajas de la separación:
// - Fácil mantenimiento: sabes dónde está cada funcionalidad
// - Testing sencillo: puedes probar cada módulo por separado
// - Reutilización: puedes usar módulos en otros proyectos
// - Colaboración: diferentes desarrolladores pueden trabajar en módulos distintos
// - Debugging eficiente: los errores se localizan rápidamente`}
                  </code>
                </pre>

                <p>
                  <strong>¿Por qué es fundamental?</strong> Sin separación de responsabilidades 
                  tendrías un código "espagueti" donde todo está mezclado. Es como tener 
                  una cocina donde los ingredientes, utensilios y platos están todos revueltos 
                  versus tenerlos organizados en secciones específicas.
                </p>

                <div className="nota">
                  <strong>🎣 Conexión con Custom Hooks:</strong>
                  <p>
                    Estos módulos especializados son exactamente lo que serían los Custom Hooks en React.
                    Por ejemplo, nuestro módulo de autenticación se convertiría en <code>useAuth()</code>,
                    el módulo del carrito en <code>useCart()</code>, y el de productos en <code>useProducts()</code>.
                    ¡Misma lógica, diferente sintaxis!
                  </p>
                </div>
              </div>
            </div>

            <div className="nota">
              <strong>🚀 Evolución hacia frameworks modernos y React Hooks:</strong>
              <ul className="lista-simple">
                <li>🔄 <strong>State Management → useState/useReducer</strong>: Nuestro objeto <code>estado</code> se convierte en múltiples <code>useState</code> o un <code>useReducer</code></li>
                <li>👁️ <strong>Observer → useEffect</strong>: Nuestras actualizaciones manuales se automatizan con <code>useEffect</code> que "observa" cambios</li>
                <li>🎭 <strong>Separation of Concerns → Custom Hooks</strong>: Nuestros módulos se convierten en hooks como <code>useAuth</code>, <code>useCart</code>, <code>useProducts</code></li>
                <li>🔗 <strong>Persistencia → useLocalStorage</strong>: Nuestra gestión de <code>localStorage</code> se encapsula en hooks personalizados</li>
                <li>⚡ <strong>Async Logic → useEffect + useState</strong>: Nuestras funciones <code>async</code> se integran con el ciclo de vida de React</li>
              </ul>
            </div>

            <div className="cuadro-didactico">
              <h4>🎣 Equivalencias directas con React Hooks</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>JavaScript Vanilla</h5>
                  <pre className="bloque-codigo">
                    <code>
{`// Estado global manual
let estado = {
  usuario: null,
  carrito: []
};

// Actualización manual
function agregarAlCarrito(item) {
  estado.carrito.push(item);
  mostrarCarrito(); // Manual
}`}
                    </code>
                  </pre>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>React con Hooks</h5>
                  <pre className="bloque-codigo">
                    <code>
{`// Estado con hooks
const [usuario, setUsuario] = useState(null);
const [carrito, setCarrito] = useState([]);

// Actualización automática
const agregarAlCarrito = (item) => {
  setCarrito(prev => [...prev, item]);
  // React actualiza automáticamente
};`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="nota nota-importante">
              <strong>💡 Consejo profesional:</strong> 
              <p>
                Dominar estos patrones en JavaScript vanilla te dará una base sólida para entender 
                frameworks como React, Vue o Angular. Estos frameworks no inventan conceptos nuevos, 
                sino que automatizan y optimizan los mismos patrones que acabas de aprender.
                Es como aprender a conducir con transmisión manual antes de usar automática: 
                entiendes mejor el funcionamiento interno.
              </p>
            </div>
          </article>
        </details>
      </section>

      <section className="section" id="b5-leccion3">
        <details>
          <summary>🔧 Conceptos clave del código</summary>
          <article className="card">
            <h2>Análisis del código JavaScript</h2>

            <h3>1. Fetch API para peticiones HTTP</h3>
            <p>
              Utilizamos la <code className="etiqueta-codigo">fetch()</code> API nativa
              del navegador para realizar peticiones HTTP a nuestra API REST.
            </p>

            <pre className="bloque-codigo">
              <code>
{`// Ejemplo básico de fetch
const response = await fetch('http://localhost:3000/api/productos');
const data = await response.json();

// Verificar si la petición fue exitosa
if (!response.ok) {
    throw new Error(data.message || 'Error en la petición');
}`}
              </code>
            </pre>

            <h3>2. Manipulación del DOM</h3>
            <p>
              Usamos JavaScript vanilla para manipular elementos HTML y mostrar
              los datos recibidos de la API de forma dinámica.
            </p>

            <pre className="bloque-codigo">
              <code>
{`// Crear elementos dinámicamente
const productCard = document.createElement('div');
productCard.className = 'product-card';
productCard.innerHTML = \`
    <h3>\${producto.nombre}</h3>
    <p>Precio: \${producto.precio}€</p>
\`;

// Agregar al DOM
document.getElementById('productos-container').appendChild(productCard);`}
              </code>
            </pre>

            <h3>3. Manejo de errores</h3>
            <p>
              Implementamos un sistema básico pero efectivo para capturar y mostrar
              errores de conexión o respuestas HTTP.
            </p>

            <div className="cuadro-didactico">
              <h4>Ventajas de este enfoque</h4>
              <ul className="lista-simple">
                <li>✅ <strong>Sin dependencias</strong>: Solo HTML, CSS y JavaScript</li>
                <li>✅ <strong>Debugging fácil</strong>: Puedes ver las respuestas JSON completas</li>
                <li>✅ <strong>Reutilizable</strong>: Funciona con cualquier API REST</li>
                <li>✅ <strong>Visual</strong>: Interfaz amigable para no programadores</li>
              </ul>
            </div>
          </article>
        </details>
      </section>

      <section className="section" id="b5-resumen">
        <details>
          <summary>✅ Resumen y próximos pasos</summary>
          <article className="card">
            <h2>Lo que hemos aprendido</h2>

            <div className="cuadro-didactico">
              <h4>Conceptos clave</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>🌐 Fetch API</h5>
                  <p>
                    Cómo realizar peticiones HTTP desde JavaScript vanilla
                    y manejar respuestas JSON.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🎨 Manipulación DOM</h5>
                  <p>
                    Crear elementos HTML dinámicamente y mostrar datos
                    de la API de forma visual.
                  </p>
                </div>
                <div className="cuadro-didactico__item">
                  <h5>🛠️ Debugging</h5>
                  <p>
                    Técnicas para identificar y solucionar problemas
                    en las comunicaciones con la API.
                  </p>
                </div>
              </div>
            </div>

            <h3>🚀 Próximos pasos</h3>
            <p>
              Ahora que sabes cómo testear APIs con HTML vanilla, en el 
              <strong>Bloque 6</strong> veremos cómo crear herramientas de testing 
              más avanzadas usando React, con mejor estado management y componentes 
              reutilizables.
            </p>

            <div className="nota nota-importante">
              <strong>💡 Consejo profesional:</strong> Guarda este archivo HTML
              como template para futuros proyectos. Es una herramienta valiosa
              para testear cualquier API REST de forma rápida.
            </div>
          </article>
        </details>
      </section>
    </div>
  );
}

export default Bloque5ApiTestHtml;
