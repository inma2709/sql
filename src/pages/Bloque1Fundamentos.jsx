export default function Bloque1Fundamentos() {
  return (
    <main className="bloque bloque-sql">
      {/* HERO DEL BLOQUE */}
      <header className="hero hero--sql">
        <div className="contenedor">
          <span className="kicker">Bloque 1 · Fundamentos de SQL y MySQL</span>
          <h1>Fundamentos</h1>
          <p className="subtitle">
            Empezamos el camino Full Stack aprendiendo el lenguaje de las bases de datos (SQL),
            arrancando MySQL desde XAMPP y creando nuestras primeras bases de datos y tablas.
          </p>
        </div>
      </header>

      <div className="contenedor" id="contenido">
        {/* ÍNDICE CON ANCLAS */}
        <nav className="toc">
          <h2>Índice del bloque</h2>
          <ol>
            <li><a href="#panorama">Introducción</a></li>
            <li><a href="#sql-que-es">¿Qué es SQL y para qué sirve?</a></li>
            <li><a href="#bbddrelacional">BBDD relacionales vs no relacionales</a></li>
            <li><a href="#mysql-mariadb">MySQL, MariaDB y XAMPP/phpMyAdmin</a></li>
            <li><a href="#modelo-er">Diseño de bases de datos: Modelo Entidad–Relación</a></li>
            <li><a href="#crear-bd">Crear bases de datos</a></li>
            <li><a href="#cardinalidad">Cardinalidad</a></li>
            <li><a href="#tipos-comandos-sql">Comandos SQL básicos</a></li>
            <li><a href="#estructura-instruccion-sql"> Instruccion SQL: estructura.</a></li>
            <li><a href="#tipos-claves">Tipos de datos básicos y claves</a></li>
            <li><a href="#use">Seleccionar bbdd</a></li>
            <li><a href="#crear-tablas">Crear tablas</a></li>          
            <li><a href="#actividades">Actividades</a></li>
          </ol>
        </nav>

        {/* 0. PANORAMA DEL BLOQUE */}
        <section className="section" id="panorama">
          <details open>
            <summary>Visión general. Introducción.</summary>
            <article className="card">
              <h3>Introducción y conceptos básicos</h3>

              <p>
                Probablemente ya tengas una idea intuitiva de lo que es una base de datos,
                y puede que te suenen palabras como <strong>tabla</strong>, <strong>tupla</strong>,
                <strong>relación</strong> o <strong>clave</strong>. Sin embargo, en el diseño de bases
                de datos estos conceptos tienen un significado muy preciso, y es importante aclararlos
                desde el principio porque gran parte de la teoría del curso se basa en ellos.
              </p>

              {/* DATO */}
              <h4>📌 ¿Qué es un dato?</h4>
              <p>
                Un <strong>dato</strong> es una información que refleja el valor de una característica
                de un objeto real. Ese objeto puede ser:
              </p>
              <ul>
                <li>Concreto (una persona, un coche).</li>
                <li>Abstracto (un curso, un nivel de acceso).</li>
                <li>O incluso imaginario (podríamos crear una base de datos sobre <em>duendes</em> 😊).</li>
              </ul>

              <p>
                Un dato debe <strong>permanecer en el tiempo</strong>. Por ejemplo, la
                <strong> edad</strong> no es estrictamente un dato, porque cambia continuamente.
                El dato real sería la <strong>fecha de nacimiento</strong>, y a partir de ella se
                calcula la edad.
              </p>

              {/* SGBD */}
              <h4>🗄️ SGBD (Sistema de Gestión de Bases de Datos)</h4>
              <p>
                Un <strong>SGBD</strong> o <strong>DBMS</strong> (DataBase Management System) es el
                programa encargado de almacenar, organizar y permitir el acceso a los datos.
              </p>

              <p>
                En nuestro curso, el SGBD que usaremos es <strong>MySQL</strong> (o MariaDB, su
                equivalente compatible). El SGBD ejecuta consultas, protege los datos y gestiona la
                forma en que se guardan físicamente.
              </p>

              {/* CONSULTA */}
              <h4>📝 Consulta</h4>
              <p>
                Una <strong>consulta</strong> es una petición que hacemos al SGBD para que procese un
                comando SQL. Las consultas incluyen:
              </p>
              <ul>
                <li>Crear bases de datos y tablas.</li>
                <li>Insertar datos.</li>
                <li>Modificar registros.</li>
                <li>Eliminar información.</li>
                <li>Y, por supuesto, <strong>obtener datos</strong>.</li>
              </ul>

              {/* REDUNDANCIA */}
              <h4>🔁 Redundancia de datos</h4>
              <p>
                Hay <strong>redundancia</strong> cuando la misma información se almacena varias veces
                dentro de la misma base de datos.
              </p>

              <p>
                La redundancia es peligrosa porque:
              </p>
              <ul>
                <li>Complica mucho la modificación de los datos.</li>
                <li>Aumenta los errores.</li>
                <li>
                  Es la principal causa de <strong>inconsistencias</strong> (que un mismo dato aparezca
                  con valores distintos en sitios diferentes).
                </li>
              </ul>

              {/* INTEGRIDAD */}
              <h4>✔️ Integridad de datos</h4>
              <p>
                En una base de datos, la <strong>integridad</strong> significa que los datos son
                correctos, coherentes y que se mantienen válidos aunque se repartan entre varias tablas.
              </p>

              <p>
                Para garantizar esta integridad se utilizan claves, relaciones y reglas que veremos más
                adelante con el Modelo Entidad–Relación.
              </p>

              <div className="callout callout--info">
                <p>
                  Estos conceptos son la base del trabajo con SQL: entender qué es un dato, cómo se
                  almacenan, cómo evitamos errores y cómo garantiza el sistema que la información se
                  conserve precisa y consistente.
                </p>
              </div>
            </article>
          </details>
        </section>

        {/* 1. QUÉ ES SQL */}
        <section className="section" id="sql-que-es">
          <details>
            <summary>¿Qué es SQL y para qué sirve?</summary>
            <article className="card">
              <h3>¿Qué es SQL y para qué sirve?</h3>

              <p>
                <strong>SQL</strong> (Structured Query Language) es el lenguaje estándar que utilizan
                los sistemas de gestión de bases de datos relacionales (SGBD) para trabajar con la
                información. Con SQL no solo consultamos datos, sino que también podemos crearlos,
                modificarlos y organizarlos.
              </p>

              <p>
                Es importante entender que <strong>SQL no es un lenguaje de programación</strong> como
                JavaScript o Python. SQL no sirve para crear aplicaciones, lógica o interfaces; su
                función es <strong>consultar y gestionar datos</strong> dentro de un sistema de bases de
                datos.
              </p>

              <p>
                Dicho de forma sencilla: <strong>SQL es el idioma que hablamos con la base de datos</strong>.
                Si queremos pedir datos, guardarlos, filtrarlos o cambiarlos, lo hacemos mediante
                sentencias SQL.
              </p>

              <h4>🔍 ¿Para qué sirve SQL?</h4>
              <p>SQL permite realizar cuatro grandes operaciones básicas:</p>

              <ul>
                <li><strong>Crear</strong> bases de datos y tablas.</li>
                <li><strong>Insertar</strong> nuevos registros.</li>
                <li><strong>Consultar</strong> información almacenada.</li>
                <li>
                  <strong>Actualizar</strong> o <strong>eliminar</strong> datos existentes.
                </li>
              </ul>

              <p>
                Esto incluye tareas como diseñar la estructura de la base de datos, introducir
                información, buscar datos concretos, ordenar resultados o modificar registros ya
                guardados.
              </p>

              <h4>🗄️ SQL y los SGBD (MySQL, MariaDB...)</h4>
              <p>
                SQL no es un programa ni una aplicación, sino un <strong>lenguaje común</strong>.
                Quien realmente ejecuta las órdenes es el
                <strong> Sistema de Gestión de Bases de Datos</strong> (<strong>SGBD</strong>) como
                MySQL o MariaDB.
              </p>

              <p>Nosotros escribimos la orden, por ejemplo:</p>

              <pre><code>SELECT * FROM alumnos;</code></pre>

              <p>
                y el SGBD se encarga de localizar los datos, procesarlos y devolverlos.
              </p>

              <h4>📌 En resumen</h4>
              <ul>
                <li>SQL es un <strong>lenguaje</strong>, no un programa.</li>
                <li>Permite comunicarnos con un SGBD como <strong>MySQL</strong>.</li>
                <li>Sirve para crear, consultar y gestionar toda la información de una base de datos.</li>
                <li>
                  Es fundamental en cualquier proyecto <strong>Full Stack</strong> que requiera
                  persistencia de datos.
                </li>
              </ul>

              <div className="callout callout--info">
                <p>
                  En este curso aprenderás SQL desde cero, primero en phpMyAdmin y después desde un
                  backend Node.js, para conectar tus aplicaciones React con una base de datos
                  profesional.
                </p>
              </div>
            </article>
          </details>
        </section>
        {/* BBDD RELACIONAL VS NO RELACIONAL */}
        <section className="section" id="bbddrelacional">
          <details>
            <summary>Bases de datos relacionales vs no relacionales</summary>
            <article className="card">
  <h3>Bases de datos relacionales vs no relacionales</h3>
   <p>
    Una <strong>base de datos relacional (RDBMS)</strong> es un modelo de almacenamiento donde la
    información se organiza en <strong>tablas</strong> formadas por filas y columnas.  
    Cada tabla representa una entidad (por ejemplo: <em>clientes</em>, <em>productos</em>,
    <em>pedidos</em>) y cada fila es un registro único.
  </p>

  <p>
    Lo importante en una base de datos relacional es que las tablas pueden 
    <strong>relacionarse entre sí</strong> mediante claves. Gracias a esto, podemos mantener los datos
    organizados, sin duplicaciones y asegurando su coherencia.
  </p>

  {/* CARACTERÍSTICAS */}
  <h3>Características principales</h3>
  <ul className="lista-simple">
    <li>
      <strong>Estructura fija:</strong> cada tabla tiene un esquema definido: columnas con tipos
      concretos (INT, VARCHAR, DATE…).
    </li>
    <li>
      <strong>Integridad referencial:</strong> se usan claves primarias y foráneas para asegurar que
      los datos estén conectados correctamente.
    </li>
    <li>
      <strong>Relaciones claras:</strong> uno-a-uno, uno-a-muchos, muchos-a-muchos.
    </li>
    <li>
      <strong>Uso de SQL:</strong> se consulta con SELECT, INSERT, UPDATE y DELETE.
    </li>
    <li>
      <strong>Ideal para datos estructurados</strong> y proyectos donde los datos no cambian de forma.
    </li>
  </ul>

  {/* COMPARATIVA */}
  <h3>Comparativa: MySQL (Relacional) vs MongoDB/Mongoose (NoSQL)</h3>
  <p>
  Diferencias entre bases de datos relacionales y no relacionales:
  </p>

  <div className="contenedor-tabla">
    <table className="tabla-datos">
      <thead>
        <tr>
          <th>MySQL (Relacional)</th>
          <th>MongoDB / Mongoose (NoSQL)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tablas, filas, columnas</td>
          <td>Colecciones y documentos JSON</td>
        </tr>
        <tr>
          <td>Esquema rígido</td>
          <td>Esquema flexible</td>
        </tr>
        <tr>
          <td>Relaciones mediante claves foráneas</td>
          <td>Referencias o documentos embebidos</td>
        </tr>
        <tr>
          <td>SQL como lenguaje de consulta</td>
          <td>Consultas usando métodos JS (find, update…)</td>
        </tr>
        <tr>
          <td>Ideal para datos bien estructurados</td>
          <td>Ideal para datos cambiantes o poco estructurados</td>
        </tr>
        <tr>
          <td>Consistencia fuerte</td>
          <td>Mayor flexibilidad y velocidad en escalado</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="resumen">
    <strong>Resumen:</strong> en MySQL todo parte de tablas y relaciones estrictas; en MongoDB todo son 
    documentos flexibles. Ambos modelos son útiles, pero sirven a necesidades distintas.
  </p>
    {/* CUADRO DIDÁCTICO: LO QUE YA CONOCES DE MONGO */}
  <aside className="cuadro-didactico">
    <h4>Lo que ya conoces de Mongo… ¿cómo se llama en MySQL?</h4>
    <p>
      Para que el cambio de mentalidad sea más fácil, podemos traducir las piezas
      básicas de <strong>MongoDB/Mongoose</strong> al mundo <strong>MySQL</strong>:
    </p>

    <div className="cuadro-didactico__grid">
      <div className="cuadro-didactico__item">
        <h5>MongoDB / Mongoose</h5>
        <p><code>colección</code></p>
      </div>
      <div className="cuadro-didactico__item">
        <h5>MySQL</h5>
        <p><strong>tabla</strong></p>
      </div>

      <div className="cuadro-didactico__item">
        <h5>MongoDB / Mongoose</h5>
        <p><code>documento</code> (un JSON)</p>
      </div>
      <div className="cuadro-didactico__item">
        <h5>MySQL</h5>
        <p><strong>fila / registro</strong></p>
      </div>

      <div className="cuadro-didactico__item">
        <h5>MongoDB / Mongoose</h5>
        <p><code>campo</code> de un documento</p>
      </div>
      <div className="cuadro-didactico__item">
        <h5>MySQL</h5>
        <p><strong>columna</strong> de una tabla</p>
      </div>

      <div className="cuadro-didactico__item">
        <h5>MongoDB / Mongoose</h5>
        <p><code>_id</code> (ObjectId)</p>
      </div>
      <div className="cuadro-didactico__item">
        <h5>MySQL</h5>
        <p><strong>PRIMARY KEY</strong> (clave primaria)</p>
      </div>

      <div className="cuadro-didactico__item">
        <h5>MongoDB / Mongoose</h5>
        <p>referencia <code>ObjectId</code></p>
      </div>
      <div className="cuadro-didactico__item">
        <h5>MySQL</h5>
        <p><strong>FOREIGN KEY</strong> (clave foránea)</p>
      </div>

      <div className="cuadro-didactico__item">
        <h5>MongoDB / Mongoose</h5>
        <p><code>Schema</code> de Mongoose</p>
      </div>
      <div className="cuadro-didactico__item">
        <h5>MySQL</h5>
        <p>definición de tabla con <code>CREATE TABLE</code></p>
      </div>

      <div className="cuadro-didactico__item">
        <h5>MongoDB / Mongoose</h5>
        <p><code>Model.find()</code>, <code>Model.create()</code></p>
      </div>
      <div className="cuadro-didactico__item">
        <h5>MySQL</h5>
        <p><code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code></p>
      </div>
    </div>

    <p className="cuadro-didactico__nota">
      👉 Idea clave: lo que antes era un <strong>documento</strong> en una colección ahora será un 
      <strong> registro</strong> en una tabla. El lenguaje cambia, pero el objetivo es el mismo: guardar y 
      consultar información de forma ordenada.
    </p>
  </aside>

</article>
          </details>
        </section>


        {/* 2. MYSQL Y MARIADB */}
        <section className="section" id="mysql-mariadb">
          <details>
            <summary>MySQL, MariaDB y XAMPP/phpMyAdmin</summary>
            <article className="card">
  <h3>MySQL, MariaDB y XAMPP/phpMyAdmin</h3>

  <p>
    Para trabajar con SQL necesitamos un programa que sea capaz de almacenar los datos, 
    organizarlos y ejecutar las consultas que escribimos. Ese programa es el 
    <strong> SGBD </strong> (Sistema de Gestión de Bases de Datos).  
    En este curso usaremos <strong>MySQL</strong> o su versión compatible <strong>MariaDB</strong>.
  </p>

  {/* MYSQL */}
  <h4>🐬 ¿Qué es MySQL?</h4>
  <p>
    <strong>MySQL</strong> es uno de los sistemas gestores de bases de datos más utilizados del 
    mundo. Funciona mediante tablas y relaciones, y entiende el lenguaje SQL para guardar, consultar 
    y modificar información.
  </p>

  <p>
    MySQL es muy popular porque es rápido, estable, gratuito y forma parte del stack clásico 
    <strong> LAMP </strong> (Linux + Apache + MySQL + PHP).
  </p>

  {/* MARIADB */}
  <h4>🍃 ¿Qué es MariaDB y por qué existe?</h4>
  <p>
    <strong>MariaDB</strong> es una versión totalmente compatible de MySQL creada por los 
    desarrolladores originales de MySQL cuando Oracle compró el proyecto.  
    Para evitar que MySQL pudiera cerrarse o volverse de pago en el futuro, crearon MariaDB como 
    una alternativa libre y 100% abierta.
  </p>

  <p>
    A nivel de estudiante, <strong>MySQL y MariaDB funcionan igual</strong>.  
    Tanto que la mayoría de comandos SQL son idénticos y phpMyAdmin los trata como el mismo motor.
  </p>

  <div className="callout callout--info">
    <p>
      En XAMPP, la base de datos que se ejecuta realmente es <strong>MariaDB</strong>, 
      pero puedes usarla como si fuera <strong>MySQL</strong>, porque son totalmente compatibles.
    </p>
  </div>

  {/* XAMPP */}
  <h4>⚙️ ¿Qué papel juega XAMPP?</h4>
  <p>
    <strong>XAMPP</strong> es un paquete que instala todo lo necesario para practicar desarrollo web 
    en local:
  </p>

  <ul>
    <li>Apache → Servidor web tradicional usado con PHP. <strong>Nosotros no lo usaremos porque nuestro backend funciona con Node.js + Express.</strong></li>
    <li>MySQL/MariaDB → Base de datos.</li>
    <li>phpMyAdmin → Panel visual para gestionar la base de datos.</li>
    <li>Herramientas extra (Perl, PHP...).</li>
  </ul>

  <p>
    Nosotros lo usamos únicamente para arrancar el servidor de base de datos 
    y poder practicar SQL fácilmente.
  </p>
  {/* ======================================= */}
{/* 🔥 BONUS · Instalación de XAMPP desde cero */}
{/* ======================================= */}

<section className="seccion" id="bonus-xampp">
  <h2 className="titulo-seccion">🔥 BONUS · Instalación de XAMPP desde cero</h2>
  <p>
    Antes de trabajar con MySQL y phpMyAdmin necesitamos instalar <strong>XAMPP</strong>, 
    un paquete que incluye Apache, PHP, MariaDB (MySQL) y phpMyAdmin. 
    Aquí tienes una guía clara desde cero:
  </p>

  {/* Paso 1 */}
  <h3>🟩 1. Descargar XAMPP</h3>
  <ul className="lista-simple">
    <li>Entra en la web oficial: <a href="https://www.apachefriends.org/es/index.html" target="_blank">apachefriends.org</a>.</li>
    <li>Haz clic en <strong>XAMPP para Windows</strong> (o tu sistema operativo).</li>
    <li>Se descargará un archivo <code>.exe</code> de unos 150–200 MB.</li>
  </ul>
  <div className="callout info">
    💡 <strong>Consejo:</strong> Descarga la versión recomendada; no hace falta la más reciente.
  </div>

  {/* Paso 2 */}
  <h3>🟩 2. Ejecutar el instalador</h3>
  <p>Cuando se abra el asistente, deja los componentes así:</p>
  <ul className="lista-simple">
    <li>✔ Apache</li>
    <li>✔ MySQL</li>
    <li>✔ PHP</li>
    <li>✔ phpMyAdmin</li>
    <li>❌ El resto no es necesario</li>
  </ul>

  {/* Paso 3 */}
  <h3>🟩 3. Elegir carpeta de instalación</h3>
  <p>Deja la ruta por defecto:</p>
  <pre><code>C:\xampp</code></pre>
  <div className="callout warning">
    ⚠️ <strong>No instales XAMPP en "Archivos de programa"</strong>: puede causar errores de permisos.
  </div>

  {/* Paso 4 */}
  <h3>🟩 4. Finalizar instalación</h3>
  <p>
    Pulsa <strong>Install</strong> y espera entre 1 y 5 minutos.  
    Al terminar, marca <strong>"Launch XAMPP Control Panel"</strong>.
  </p>

  {/* Paso 5 */}
  <h3>🟩 5. Iniciar Apache y MySQL</h3>
  <p>En el panel principal, pulsa en:</p>
  <ul className="lista-simple">
    <li><strong>Start</strong> en Apache</li>
    <li><strong>Start</strong> en MySQL</li>
  </ul>
  <div className="callout warning">
    ⚠️ Si alguno no arranca, puede ser que otro programa esté usando el puerto.  
    Lo veremos más adelante en la sección de solución de errores.
  </div>

  {/* Paso 6 */}
  <h3>🟩 6. Abrir phpMyAdmin</h3>
  <p>Con MySQL iniciado, abre tu navegador y escribe:</p>
  <pre><code>http://localhost/phpmyadmin</code></pre>
  <p>Deberías ver la herramienta phpMyAdmin para crear bases de datos.</p>

  <div className="callout success">
    👉 Usuario: <strong>root</strong> <br />
    👉 Contraseña: <em>(vacío)</em>
  </div>

  {/* Paso 7 */}
  <h3>🟩 7. Probar MySQL en consola (opcional)</h3>
  <p>En el panel de XAMPP haz clic en <strong>Shell</strong> y escribe:</p>
  <pre><code>mysql -u root</code></pre>

  {/* Cierre */}
  <h3>🎉 ¡Listo!</h3>
  <p>
    Ya tienes XAMPP configurado y puedes crear bases de datos, tablas y consultas desde 
    phpMyAdmin o desde consola MySQL. Continúa con el bloque para seguir practicando SQL.
  </p>
</section>


  {/* PHPMYADMIN */}
  <h4>🖥️ ¿Qué es phpMyAdmin?</h4>
  <p>
    <strong>phpMyAdmin</strong> es una aplicación web que permite gestionar MySQL/MariaDB desde el 
    navegador sin necesidad de escribir comandos.  
    Con ella puedes:
  </p>

  <ul>
    <li>Crear bases de datos y tablas.</li>
    <li>Insertar o eliminar datos.</li>
    <li>Ejecutar consultas SQL.</li>
    <li>Exportar e importar información.</li>
    <li>Ver el contenido de cada tabla.</li>
  </ul>

  <p>
    Accedemos escribiendo en el navegador:
  </p>

  <pre><code>http://localhost/phpmyadmin</code></pre>

  {/* RELACIÓN ENTRE TODOS */}
  <h4>🔗 ¿Cómo encajan todos entre sí?</h4>
  <ul>
    <li><strong>MySQL/MariaDB</strong> es la base de datos (lo que guarda los datos).</li>
    <li><strong>SQL</strong> es el lenguaje para interactuar con ella.</li>
    <li><strong>XAMPP</strong> arranca el servidor de MySQL/MariaDB.</li>
    <li><strong>phpMyAdmin</strong> es la herramienta visual para trabajar sin consola.</li>
  </ul>

  <div className="callout callout--success">
    <p>
      Durante los primeros días del curso usaremos principalmente 
      <strong> phpMyAdmin </strong> para practicar SQL de manera visual.
      Más adelante conectaremos React y Node.js con MySQL desde código real.
    </p>
  </div>
</article>
          </details>
        </section>

        {/* 3. MODELO ENTIDAD-RELACIÓN */}
        <section className="section" id="modelo-er">
          <details>
            <summary>Diseño de bases de datos: Modelo Entidad–Relación</summary>
            <article className="card">
  <h3>Diseño de bases de datos: Modelo Entidad–Relación (E-R)</h3>

  <p>
    Antes de crear tablas o escribir SQL, necesitamos comprender el problema del mundo real que 
    queremos resolver. El Modelo Entidad–Relación (E-R) nos ayuda a representar esa información 
    de manera clara mediante <strong>entidades</strong>, <strong>atributos</strong> y 
    <strong>relaciones</strong>.
  </p>

  <h4>📌 ¿Qué es el modelado?</h4>
  <p>
    El <strong>modelado</strong> es el proceso de analizar un problema y representarlo de una forma 
    que un ordenador pueda entender. Es un paso previo imprescindible: un buen diseño evita errores, 
    duplicidades y problemas cuando la base de datos crece.
  </p>

  <div className="callout callout--info">
    <p>
      La mayor parte de los errores en bases de datos provienen de un mal diseño. Por eso primero 
      modelamos y después creamos tablas en MySQL.
    </p>
  </div>
  <h3>Pasos para diseñar una bbdd</h3>
  <ol>
    <li>Identificar las entidades principales.</li>
    <li>Definir los atributos de cada entidad.</li>
    <li>Establecer las relaciones entre entidades.</li>
    <li>Determinar claves primarias y foráneas.</li>
    <li>Normalizar la base de datos para evitar redundancias.</li>
  </ol>

  <h3>🧱 Identificar entidades principales del Modelo E-R</h3>

  <h4>1) 🏷️ Entidad</h4>
  <p>
    Una <strong>entidad</strong> es un objeto real del que queremos guardar información. Puede ser 
    una persona, un producto, un curso, un pedido, etc.
  </p>

  <p>Ejemplos de entidades:</p>
  <ul>
    <li><strong>Persona</strong></li>
    <li><strong>Producto</strong></li>
    <li><strong>Cliente</strong></li>
    <li><strong>Pedido</strong></li>
    <li><strong>Libro</strong></li>
    <li><strong>Préstamo</strong></li>
  </ul>

  <pre><code>[ Persona ]</code></pre>

  <h4>2) 🎛️ Definir los atributos de cada entidad</h4>
  <p>
    Un <strong>atributo</strong> es una característica de una entidad. Por ejemplo, una persona 
    tiene nombre, apellidos o fecha de nacimiento.
  </p>

  <p>Ejemplos por entidad:</p>
  <ul>
    <li>Persona → nombre, apellidos, fecha de nacimiento, DNI.</li>
    <li>Producto → nombre, precio, categoría, stock.</li>
    <li>Pedido → fecha, total, método de pago.</li>
  </ul>

  <pre><code>
   (Nombre)
       |
   [ Persona ]
  </code></pre>

  <h4>🔑 Atributo clave primaria</h4>

<p>
  La <strong><u>clave primaria</u></strong> es el atributo (o conjunto de atributos) que identifica 
  de forma <strong>única</strong> a cada entidad de un conjunto. 
  Nunca puede repetirse y permite distinguir un registro de todos los demás.
</p>

<p><strong>Ejemplos de claves primarias:</strong></p>
<ul>
  <li>Persona → <u>DNI</u></li>
  <li>Producto → <u>ID_Producto</u></li>
  <li>Pedido → <u>ID_Pedido</u></li>
</ul>

<pre><code>
   (_DNI_)
       |
   [ Persona ]
</code></pre>

<h5>✔ Características que debe cumplir una clave primaria</h5>
<ul>
  <li><strong>Única</strong> → no puede haber dos entidades con el mismo valor.</li>
  <li><strong>No nula</strong> → siempre debe tener un valor, nunca puede ser NULL.</li>
  <li><strong>Estable</strong> → su valor no debe cambiar con el tiempo.</li>
  
</ul>

<div className="callout callout--info">
  <p>
    En MySQL/MariaDB, cuando definimos una clave primaria automáticamente se crea un 
    <strong>índice único</strong>, lo que hace más eficientes las búsquedas y garantiza 
    que no haya valores duplicados.
  </p>
</div>
<h4>🌍 Clave ajena (Foreign Key)</h4>

<p>
  Una <strong>clave ajena</strong> o <strong>foreign key</strong> es simplemente un
  campo que sirve para decir: <em>“este dato pertenece a esta otra tabla”</em>.  
  Funciona como un enlace que une dos tablas entre sí.
</p>

<p>
  Gracias a la foreign key, la base de datos comprueba que el valor que escribimos 
  en la tabla hija <strong>realmente existe</strong> en la tabla padre.  
  Así evitamos errores como pedir un cliente que no existe o asignar una categoría 
  que no está creada.
</p>

<p>
  En resumen: la foreign key es una forma de asegurarse de que <strong>lo que 
  escribimos está bien</strong> y <strong>conecta correctamente</strong> los datos de una tabla con otra.
</p>

<h5>📌 Ejemplo clásico</h5>

<p>Un pedido siempre pertenece a un cliente:</p>

<pre><code>
[ Cliente ] 1 ----- N [ Pedido ]
</code></pre>

<p>La tabla <strong>pedidos</strong> tendrá un campo que apunte a la tabla <strong>clientes</strong>:</p>

<pre><code>
clientes
---------
id_cliente  (PK)
nombre


pedidos
---------
id_pedido   (PK)
fecha
id_cliente  (FK) → referencia a clientes.id_cliente
</code></pre>

<h5>📐 Diagrama simple</h5>
<pre><code>
   (id_cliente) PK
        |
   [ Cliente ]
        |
        |  (id_cliente) FK
        v
   [ Pedido ]
</code></pre>

<h5>✔ ¿Para qué sirve una foreign key?</h5>
<ul>
  <li><strong>Enlaza</strong> dos tablas entre sí.</li>
  <li>Evita insertar pedidos con clientes que <strong>no existen</strong>.</li>
  <li>Permite construir relaciones 1:N y N:M.</li>
  <li>Garantiza la <strong>integridad referencial</strong> entre datos.</li>
</ul>

<h5>⚙ Características de una clave ajena</h5>
<ul>
  <li><strong>Debe coincidir</strong> con el tipo de dato de la clave primaria que referencia.</li>
  <li><strong>No crea valores nuevos</strong>: solo acepta valores existentes en la otra tabla. Por ejemplo la id del alumno.</li>
  
  <li>Permite definir acciones como:
    <ul>
      <li><code>ON DELETE CASCADE</code> → si borro un cliente, se borran también sus pedidos.</li>
      <li><code>ON UPDATE CASCADE</code> → si cambia la PK del cliente, se actualiza en pedidos.</li>
      <li><code>RESTRICT</code> → impide borrar el padre si tiene elementos hijos.</li>
    </ul>
  </li>
</ul>

<h5>🛠 Ejemplo SQL en MySQL/MariaDB</h5>

<pre><code className="language-sql">
CREATE TABLE clientes (
  id_cliente INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE pedidos (
  id_pedido INT PRIMARY KEY AUTO_INCREMENT,
  fecha DATE NOT NULL,
  id_cliente INT,
  FOREIGN KEY (id_cliente) 
    
);
</code></pre>

<div className="callout callout--success">
  <p>
    En MySQL/MariaDB las foreign keys solo funcionan con motores que soportan 
    integridad referencial, como <strong>InnoDB</strong> (el motor por defecto en MariaDB).
  </p>
</div>



  <h4>3) 📍 Dominio</h4>
  <p>
    El <strong>dominio</strong> de un atributo es el conjunto de valores permitidos. Por ejemplo:
  </p>

  <ul>
    <li>Edad → número entre 0 y 120.</li>
    <li>Fecha de nacimiento → una fecha válida no futura.</li>
    <li>Precio → número positivo.</li>
    <li>Categoría → lista definida (tecnología, hogar, ropa...)</li>
  </ul>

 <h4>4) 🔗 Relaciones</h4>

<p>
  Una <strong>relación</strong> describe cómo se conectan dos entidades dentro de una base de datos.  
  Igual que en la vida real, donde una persona puede tener un coche o un cliente puede hacer varios pedidos,
  en una base de datos necesitamos expresar esas conexiones.
</p>

<p>
  Para empezar, piensa que una base de datos está formada por varios “grupos de cosas” (entidades),
  y las relaciones nos dicen <strong>cómo se vinculan esas cosas entre sí</strong>.
</p>

<ul>
  <li>Un cliente <em>realiza</em> un pedido.</li>
  <li>Un producto <em>pertenece</em> a una categoría.</li>
  <li>Un alumno <em>se matricula</em> en una asignatura.</li>
</ul>

<pre><code>
[ Cliente ] —◊ Realiza ◊— [ Pedido ]
</code></pre>

<hr />

</article>
          </details>
        </section>

<section className="section" id="cardinalidad">
          <details>
            <summary>Cardinalidad</summary>
            <article className="card">

<h3>🔢 Cardinalidad: ¿cuántas entidades se relacionan?</h3>

<p>
  La <strong>cardinalidad</strong> indica cuántos elementos de un conjunto pueden relacionarse con cuántos del otro.
  Es una de las decisiones más importantes al diseñar una base de datos, porque define la “forma” de la relación.
</p>

<p>
  Para que sea fácil de entender, podemos decir que la cardinalidad responde a estas dos preguntas:
</p>

<ul>
  <li><strong>¿Cuántos del lado A pueden estar relacionados con un elemento del lado B?</strong></li>
  <li><strong>¿Y cuántos del lado B pueden estar relacionados con un elemento del lado A?</strong></li>
</ul>

<hr />
<h4>Tipos de relaciones</h4>

<p>
  Existen tres tipos principales de relaciones entre entidades:
</p>

<h4>1️⃣ Relación 1 : 1 (uno a uno)</h4>

<p>
  Una entidad del primer conjunto solo se relaciona con una del segundo, y viceversa.
  No hay repeticiones: es una relación exclusiva.
</p>

<pre><code>[ Persona ] 1 — 1 [ Pasaporte ]</code></pre>

<p><strong>Ejemplo real:</strong> una persona tiene un único pasaporte, y cada pasaporte pertenece solo a una persona.</p>

<div className="callout callout--info">
  <p>
    Las relaciones 1:1 no son muy comunes.  
    A veces se usan para separar información sensible, dividir tablas grandes o mejorar el rendimiento.
  </p>
  <div className="cuadro-didactico">
  <h4>Relación 1 : 1 — ¿Cómo funciona realmente?</h4>

  <p>
    En una relación <strong>1 : 1</strong> cada registro de la primera tabla se asocia 
    con <strong>solo un</strong> registro de la segunda, y viceversa.  
    Para representarlo en SQL, una de las tablas debe contener una 
    <strong>clave foránea</strong> que además sea <strong>UNIQUE</strong> 
    para asegurar que no se repita.
  </p>

  <div className="cuadro-didactico__grid">

    {/* Ejemplo 1 */}
    <div className="cuadro-didactico__item">
      <h5>Ejemplo 1: Persona ↔ DNI</h5>
      <p>
        Una persona tiene un único DNI, y cada DNI pertenece a una sola persona.  
        La tabla <strong>dni</strong> suele tener la FK:
        <br />
        <code className="etiqueta-codigo">persona_id UNIQUE</code>
      </p>
    </div>

    {/* Ejemplo 2 */}
    <div className="cuadro-didactico__item">
      <h5>Ejemplo 2: Usuario ↔ Perfil</h5>
      <p>
        Cada usuario tiene un perfil, y cada perfil describe a un único usuario.  
        La FK suele estar en <strong>perfiles</strong>:
        <br />
        <code className="etiqueta-codigo">usuario_id UNIQUE</code>
      </p>
    </div>

    {/* Ejemplo 3 */}
    <div className="cuadro-didactico__item">
      <h5>Ejemplo 3: Cliente ↔ Dirección</h5>
      <p>
        Una dirección pertenece a un solo cliente, y ese cliente solo tiene una 
        dirección principal.  
        La FK suele estar en <strong>direcciones</strong>:
        <br />
        <code className="etiqueta-codigo">cliente_id UNIQUE</code>
      </p>
    </div>

    {/* Explicación clave */}
    <div className="cuadro-didactico__item">
      <h5>Regla esencial</h5>
      <p>
        Para que la relación sea realmente 1 : 1, la clave foránea debe ser 
        <strong>UNIQUE</strong>.  
        Esto garantiza que la FK no pueda repetirse y que cada fila solo pueda 
        relacionarse con una del otro lado.
      </p>
    </div>
  </div>

  <h5 className="cuadro-didactico__nota">
    En resumen: una relación 1 : 1 sí necesita clave foránea, pero solo en una de 
    las dos tablas y obligatoriamente con restricción UNIQUE para evitar repeticiones.
  </h5>
</div>
<div className="cuadro-didactico">
  <h4>¿Dirección como VARCHAR o como Tabla independiente?</h4>

  <div className="cuadro-didactico__grid">

    <div className="cuadro-didactico__item">
      <h5>Opción 1: Un solo atributo VARCHAR</h5>
      <p>
        Se guarda todo en un único campo, por ejemplo:  
        <code className="etiqueta-codigo">'Calle Sol, 12, Sevilla'</code>.
        <br/><br/>
        ✔ Fácil y rápido<br/>
        ❌ No permite buscar por ciudad, CP o provincia<br/>
        ❌ Difícil de validar y mantener<br/>
        ❌ No escala si luego quieres varios tipos de dirección
      </p>
    </div>

    <div className="cuadro-didactico__item">
      <h5>Opción 2: Tabla DIRECCIONES (relación 1 : 1)</h5>
      <p>
        Se crea una tabla independiente: calle, ciudad, código postal, etc.
        <br/><br/>
        ✔ Datos más ordenados  
        ✔ Búsquedas reales (por ciudad, CP…)  
        ✔ La dirección puede ser opcional  
        ✔ Preparado para un futuro 1 : N  
        ✔ Más normalizado y limpio  
        <br/><br/>
        La FK lleva <strong>UNIQUE</strong> para garantizar la relación 1 : 1.
      </p>
    </div>

  </div>

  <p className="cuadro-didactico__nota">
    Usa un solo VARCHAR solo si la dirección es decorativa.  
    Usa una tabla independiente si la dirección tiene estructura, puede crecer
    o si necesitas hacer búsquedas reales. Por ejemplo quieres buscar por códigos postales. 
    Una dirección metida en un solo VARCHAR se puede buscar con LIKE,
pero solo si no necesitas precisión, velocidad o estructura.
Si la dirección importa de verdad, debe ir en su propia tabla
  </p>
</div>

</div>

<hr />

<h4>2️⃣ Relación 1 : N (uno a muchos)</h4>

<p>
  Una entidad del primer conjunto puede relacionarse con muchas del segundo, 
  pero las entidades del segundo conjunto solo pertenecen a una del primero.
</p>
<p>
  En una relación <strong>1–N</strong> como <em>Cliente → Pedido</em>, es fundamental 
  entender por qué la tabla hija (en este caso, <strong>pedidos</strong>) es la que 
  recibe la <strong>clave foránea</strong>. Cuando un cliente puede realizar muchos 
  pedidos, lo que realmente se está repitiendo en la base de datos no es el cliente, 
  sino los pedidos. Por eso, cada pedido necesita incluir una columna que indique 
  <em>a qué cliente pertenece</em>. Esa columna es precisamente la 
  <code className="etiqueta-codigo">cliente_id</code>.
</p>

<p>
  La clave foránea en la tabla hija <strong>puede repetirse tantas veces como sea 
  necesario</strong>, porque representa la idea de que muchos registros de la tabla 
  hija pertenecen al mismo registro de la tabla padre. Así, si un cliente realiza 
  cinco pedidos, veremos cinco filas en la tabla <strong>pedidos</strong>, todas ellas 
  con el mismo valor en la columna 
  <code className="etiqueta-codigo">cliente_id</code>. Esto no solo es correcto, sino 
  que es exactamente como una base de datos relacional debe almacenar una relación 
  1–N.
</p>

<div className="cuadro-didactico">
  <h4>¿Qué significa que la FK se repita?</h4>
  <p>
    Que múltiples registros de la tabla hija señalan al mismo registro de la tabla 
    padre. Este comportamiento permite que MySQL comprenda correctamente la relación 
    1–N: <em>muchos pedidos</em> → <em>un único cliente</em>.
  </p>

  <div className="contenedor-tabla espacio-arriba">
    <table className="tabla-datos tabla-datos--compacta">
      <thead>
        <tr>
          <th>id_pedido</th>
          <th>fecha</th>
          <th>cliente_id (FK)</th>
          <th>Interpretación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10</td>
          <td>2025-02-01</td>
          <td>1</td>
          <td>Ana hizo este pedido</td>
        </tr>
        <tr>
          <td>11</td>
          <td>2025-02-05</td>
          <td>1</td>
          <td>Ana hizo este otro pedido</td>
        </tr>
        <tr>
          <td>12</td>
          <td>2025-03-01</td>
          <td>3</td>
          <td>Lucía hizo este pedido</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="cuadro-didactico__nota">
    Observa que el valor <code>1</code> aparece dos veces en 
    <strong>cliente_id</strong>: esto significa que ambas filas corresponden a la 
    misma persona (<em>Ana</em>). Así interpreta MySQL la relación <strong>1–N</strong>.
  </p>
</div>

<p>
  En resumen, la clave foránea se coloca en la tabla hija porque es la tabla que 
  <strong>depende</strong> de otra y necesita saber a qué registro padre pertenece. 
  Esta estructura es la que permite representar relaciones reales como 
  clientes–pedidos, categorías–productos o profesores–alumnos dentro de una base 
  de datos relacional.
</p>


<pre><code>[ Cliente ] 1 — N [ Pedido ]</code></pre>

<p><strong>Ejemplo:</strong> un cliente puede tener muchos pedidos, pero cada pedido pertenece a un único cliente.</p>

<p>
  Esta es la relación más habitual en bases de datos relacionales y la veremos constantemente 
  cuando diseñemos MySQL/MariaDB.
</p>

<div className="callout callout--success">
  <p>
    En el modelo lógico, esta relación se implementa añadiendo una 
    <strong>clave ajena (foreign key)</strong> en la tabla del lado “muchos”.
  </p>
</div>

<hr />

<h4>3️⃣ Relación N : M (muchos a muchos)</h4>

<p>
  Muchas entidades de un conjunto pueden estar relacionadas con muchas del otro.
  Es una relación “libre”, en la que ambas partes pueden repetirse varias veces.
</p>

<pre><code>[ Alumno ] N — M [ Asignatura ]</code></pre>

<p>
  <strong>Ejemplo:</strong> un alumno puede matricularse en varias asignaturas, 
  y una asignatura puede tener muchos alumnos.
</p>

<p>
  También verás esta relación escrita como <strong>N:N</strong>.  
  Ambas expresiones significan exactamente lo mismo: muchos a muchos.
</p>

<div className="callout callout--warning">
  <p>
    Importante: en bases de datos relacionales como MySQL/MariaDB, 
    las relaciones N:M no se implementan directamente.
    Necesitamos una <strong>tabla intermedia</strong> (también llamada tabla puente o tabla de unión).
    Por ejemplo: <code>matricula</code>.
  </p>
</div>


  <p className="cuadro-didactico__nota">
    En resumen: una relación N : M siempre se resuelve con una tabla intermedia que 
    contiene dos foreign keys, una primary key compuesta y, si lo necesita el modelo, 
    más atributos que describen la relación.
  </p>
<div className="cuadro-didactico">
  <h4>¿Qué es una tabla intermedia en una relación N : M?</h4>

  <p>
    En una relación <strong>N : M</strong> (muchos a muchos), ni la tabla A ni la tabla B 
    pueden guardar por sí solas la relación, porque <strong>las dos se repiten</strong>.  
    Ejemplo clásico: un alumno puede cursar muchas asignaturas y una asignatura puede tener 
    muchos alumnos.  
    Para representar esto correctamente en MySQL, creamos una <strong>tabla intermedia</strong> 
    (también llamada tabla puente o tabla de unión). Cada fila de esa tabla representa una 
    matrícula concreta: “este alumno está en esta asignatura”.
  </p>

  <div className="cuadro-didactico__grid">

    {/* Bloque 1: por qué hace falta */}
    <div className="cuadro-didactico__item--full">
      <h5>1. ¿Por qué necesitamos una tabla intermedia?</h5>
      <p>
        En una relación <strong>N : M</strong> los dos lados se repiten:
      </p>
      <ul className="lista-simple">
        <li>Un <strong>alumno</strong> puede estar en muchas asignaturas.</li>
        <li>Una <strong>asignatura</strong> puede tener muchos alumnos.</li>
      </ul>
      <p>
        Si intentáramos poner una foreign key solo en <strong>alumnos</strong> o solo en 
        <strong>asignaturas</strong>, romperíamos la lógica (no podríamos representar todos los casos).  
        Por eso creamos una tercera tabla, por ejemplo <code className="etiqueta-codigo">matricula</code>, 
        que se dedica solo a guardar las parejas alumno–asignatura.
      </p>
    </div>

    {/* Bloque 2: qué columnas tiene */}
    <div className="cuadro-didactico__item--full">
      <h5>2. ¿Qué columnas tiene una tabla intermedia?</h5>
      <p>
        En un diseño sencillo y muy práctico para empezar, la tabla intermedia suele tener:
      </p>
      <ul className="lista-simple">
        <li>
          Un <strong>id propio</strong> con 
          <code className="etiqueta-codigo">AUTO_INCREMENT</code>  
          (por ejemplo <code className="etiqueta-codigo">id_matricula</code>) que sirve como 
          identificador único de la fila.
        </li>
        <li>
          Dos <strong>claves foráneas</strong>:
          <ul className="lista-simple">
            <li><code className="etiqueta-codigo">alumno_id</code> → apunta a la tabla <strong>alumnos</strong>.</li>
            <li><code className="etiqueta-codigo">asignatura_id</code> → apunta a la tabla <strong>asignaturas</strong>.</li>
          </ul>
        </li>
      </ul>
      <p>
        Con eso ya podemos saber de forma clara: “qué alumno” está “en qué asignatura”, sin 
        necesidad de claves primarias compuestas ni diseños complicados.
      </p>
    </div>

    {/* Bloque 3: qué representa cada fila */}
    <div className="cuadro-didactico__item--full">
      <h5>3. ¿Qué representa cada fila?</h5>
      <p>
        Cada fila de la tabla intermedia representa una <strong>relación concreta</strong> 
        entre dos entidades. En este ejemplo:
      </p>
      <pre className="bloque-codigo">
{`id_matricula | alumno_id | asignatura_id
-------------+-----------+--------------
      1      |     3     |      2      → el alumno 3 está en la asignatura 2
      2      |     3     |      5      → el alumno 3 está en la asignatura 5
      3      |     7     |      2      → el alumno 7 está en la asignatura 2`}
      </pre>
      <p>
        Fíjate que <strong>ni alumno_id ni asignatura_id son únicos</strong> por separado:  
        se repiten, porque esa es precisamente la idea de una relación muchos a muchos.
      </p>
    </div>

    {/* Bloque 4: campos extra */}
    <div className="cuadro-didactico__item--full">
      <h5>4. ¿Puede tener más campos?</h5>
      <p>
        Sí. La tabla intermedia es el lugar perfecto para guardar información adicional sobre 
        la relación, no sobre el alumno o la asignatura por separado. Por ejemplo:
      </p>
      <ul className="lista-simple">
        <li><code className="etiqueta-codigo">fecha_matricula</code> → cuándo se apuntó.</li>
        <li><code className="etiqueta-codigo">nota_final</code> → nota en esa asignatura.</li>
        <li><code className="etiqueta-codigo">grupo</code> o <code className="etiqueta-codigo">turno</code>.</li>
      </ul>
      <p>
        Estos campos describen la <strong>relación alumno–asignatura</strong>, no al alumno 
        en general ni a la asignatura en general.
      </p>
    </div>

    {/* Bloque 5: representación visual */}
    <div className="cuadro-didactico__item--full">
      <h5>5. Representación visual</h5>
      <p>Podemos verlo así:</p>
      <pre>
{`[ Alumno ]   N  —  M   [ Asignatura ]
    │                    │
    │                    │
    └─────── matricula ──┘

matricula
---------------------------------------
id_matricula       → identificador propio
alumno_id (FK)     → apunta a alumnos
asignatura_id (FK) → apunta a asignaturas
otros campos...    → fecha_matricula, nota, grupo...`}
      </pre>
    </div>

    {/* Bloque 6: ejemplo SQL sin PK compuesta */}
    <div className="cuadro-didactico__item--full">
      <h5>6. Ejemplo de diseño SQL </h5>
      <p>
        Un diseño muy utilizado  y sencillo para una tabla intermedia es darle
        un <strong>id AUTO_INCREMENT</strong> y dos foreign keys:
      </p>
      <pre className="bloque-codigo">
        <code>
{`CREATE TABLE matricula (
  id_matricula   INT AUTO_INCREMENT PRIMARY KEY,
  alumno_id      INT NOT NULL,
  asignatura_id  INT NOT NULL,
  fecha_matricula DATE DEFAULT CURRENT_DATE,

  FOREIGN KEY (alumno_id)
    REFERENCES alumnos(id_alumno),

  FOREIGN KEY (asignatura_id)
    REFERENCES asignaturas(id_asignatura)
);`}
        </code>
      </pre>
      <p>
        Aquí la tabla <code className="etiqueta-codigo">matricula</code> tiene su propio 
        identificador y se relaciona con <code className="etiqueta-codigo">alumnos</code> y 
        <code className="etiqueta-codigo">asignaturas</code> gracias a las dos claves foráneas. 
        Es un diseño claro, muy práctico y perfecto para aprender.
      </p>
    </div>

  </div>

  <p className="cuadro-didactico__nota">
    En resumen: una tabla intermedia en una relación N : M es una tabla que guarda pares 
    de identificadores (por ejemplo alumno–asignatura) y, si hace falta, más información 
    sobre esa relación. Para empezar, es suficiente con darle un 
    <strong> id AUTO_INCREMENT</strong> y dos <strong>foreign keys</strong>.
  </p>
</div>

<div className="cuadro-didactico">
  <h4>Tabla intermedia en la relación Pedidos–Productos (N : M)</h4>

  <p>
    La relación entre <strong>pedidos</strong> y <strong>productos</strong> es 
    <strong>N : M</strong>: un pedido puede incluir varios productos y un producto puede 
    aparecer en muchos pedidos. Para representarlo correctamente en MySQL, necesitamos 
    una <strong>tabla intermedia</strong>, que almacena la relación entre un pedido 
    concreto y un producto concreto.
  </p>

  <div className="cuadro-didactico__grid">

    {/* Bloque 1 */}
    <div className="cuadro-didactico__item">
      <h5>1. Dos claves foráneas</h5>
      <p>
        La tabla intermedia contiene:
        <br/>
        – <code className="etiqueta-codigo">pedido_id</code> → apunta a <strong>pedidos</strong>  
        – <code className="etiqueta-codigo">producto_id</code> → apunta a <strong>productos</strong>  
        Cada fila representa un producto incluido en un pedido.
      </p>
    </div>

    {/* Bloque 2 */}
    <div className="cuadro-didactico__item">
      <h5>2. Primary Key compuesta</h5>
      <p>
        La clave primaria es la combinación:
        <br/>
        <code className="etiqueta-codigo">PRIMARY KEY (pedido_id, producto_id)</code>  
        Así evitamos duplicar el mismo producto dentro del mismo pedido.linea-pedido no tendría una id propia pero 
        tenemos que seguir referenciando a las dos FK. Se trata digamos de una doble medida de seguridad.
        No obstante, de momento no vamos a crear PK compuestas y no afectará a nuestro funcionamiento es sólo 
        diferentes formas de hacer. 
      </p>
    </div>

    {/* Bloque 3 */}
    <div className="cuadro-didactico__item">
      <h5>3. Campos propios de la relación</h5>
      <p>
        La tabla intermedia guarda información que no pertenece ni a pedidos ni a productos,
        sino a la <strong>relación</strong> entre ambos:
        <br/>
        – <code className="etiqueta-codigo">cantidad</code><br/>
        – <code className="etiqueta-codigo">precio_unitario</code><br/>
        – <em>subtotal, descuento…</em>
      </p>
    </div>

    {/* Bloque 4 */}
    <div className="cuadro-didactico__item">
      <h5>4. Representación visual</h5>
      <pre>
{`[ Producto ]  N — M  [ Pedido ]
           │       │
           └── lineas_pedido ──┘
producto_id (FK) | pedido_id (FK)
PK compuesta: (pedido_id, producto_id)
campos: cantidad, precio_unitario...
`}
      </pre>
    </div>

    {/* Bloque 5 */}
    <div className="
.cuadro-didactico__item--full">
      <h5>5. Ejemplo SQL</h5>
      <pre className="bloque-codigo">
        <code>
{`CREATE TABLE lineas_pedido (
  pedido_id INT NOT NULL,
  producto_id INT NOT NULL,
  cantidad INT DEFAULT 1,
  precio_unitario DECIMAL(10,2) NOT NULL,

  PRIMARY KEY (pedido_id, producto_id),

  FOREIGN KEY (pedido_id) REFERENCES pedidos(id_pedido),
  FOREIGN KEY (producto_id) REFERENCES productos(id_producto)
);`}
        </code>
      </pre>
    </div>

  </div>

  <p className="cuadro-didactico__nota">
    En pedidos–productos, la tabla intermedia es imprescindible: contiene las dos claves 
    foráneas, la clave primaria compuesta y los datos propios de cada producto dentro 
    del pedido, como la cantidad o el precio unitario.
  </p>
</div>


<hr />

<h3>📌 Resumen visual</h3>

<ul>
  <li><strong>1:1</strong> → Exclusiva, uno con uno.</li>
  <li><strong>1:N</strong> → La más común. Uno con muchos.</li>
  <li><strong>N:M</strong> → Muchos con muchos; requiere tabla intermedia.</li>
</ul>

<pre><code>
1:1   →  [A] 1 — 1 [B]
1:N   →  [A] 1 — N [B]
N:M   →  [A] N — M [B]  (→ tabla intermedia)
</code></pre>

<hr />

<h3>🎓 ¿Por qué es tan importante entender esto?</h3>

<p>
  Porque antes de crear una base de datos necesitamos tener claro 
  <strong>cómo se relacionan las entidades en el mundo real</strong>.
  Un buen modelo evita errores, duplicados y datos inconsistentes.
</p>

<p>
  Si entendemos la cardinalidad, podremos construir bases de datos más sólidas, ordenadas y fáciles de mantener.
</p>


  

  <div className="callout callout--success">
    <p>
      El modelo Entidad-Relación es la base del diseño de bases de datos. 
      Si esta parte se hace bien, crear tablas y escribir SQL será mucho más fácil y lógico.
    </p>
  </div>
</article>
          </details>
        </section>

        {/* 4. CREAR BASES DE DATOS */}
        <section className="section" id="crear-bd">
          <details>
            <summary>¿Qué es XMl?</summary>
            <article className="card">
              <h2>¿Qué es XML y qué relación tiene con SQL?</h2>

<p>
  Antes de crear bases de datos en phpMyAdmin, vamos a aclarar un concepto que aparece muy a menudo 
  cuando trabajamos con MySQL/MariaDB: <strong>el formato XML</strong>.  
  Aunque lo verás en exportaciones, importaciones y herramientas, no necesitas saber código XML para usarlo.
  Pero sí es importante saber qué es.
</p>

<h3>📦 ¿Qué es XML?</h3>

<p>
  <strong>XML</strong> significa <strong>eXtensible Markup Language</strong> 
  (Lenguaje de Marcado Extensible).  
  Es un formato de texto que sirve para guardar y transportar datos de forma <strong>ordenada</strong> y <strong>estructurada</strong>.
</p>

<p>
  Puedes pensar en XML como una forma de guardar información usando “etiquetas”, 
  muy parecido a HTML, pero diseñado para representar <strong>datos</strong> y no páginas web.
</p>

<pre><code className="language-xml">
&lt;cliente&gt;
  &lt;id&gt;1&lt;/id&gt;
  &lt;nombre&gt;Laura&lt;/nombre&gt;
  &lt;telefono&gt;654123987&lt;/telefono&gt;
&lt;/cliente&gt;
</code></pre>

<p>
  No tienes que aprender XML para este curso, pero es útil entender que simplemente 
  es un <strong>contenedor de información</strong>.
</p>

<h3>🔍 ¿Para qué se usa XML?</h3>

<ul>
  <li>Para <strong>guardar datos</strong> en un archivo.</li>
  <li>Para <strong>intercambiar información</strong> entre sistemas (por ejemplo, entre dos programas).</li>
  <li>Para <strong>exportar o importar</strong> elementos desde una base de datos.</li>
  <li>Para hacer <strong>copias de seguridad</strong> (backups) de tus tablas.</li>
</ul>

<p>
  Es un formato universal: cualquier programa puede abrirlo, leerlo y entenderlo.
</p>

<div className="callout callout--info">
  <p>
    XML no es una base de datos; es solo un <strong>formato de archivo</strong> parecido a un documento
    de texto pero con estructura. En él los datos se organizan mediante etiquetas, como en este ejemplo:
  </p>

  <pre><code>
{`<clientes>
  <cliente>
    <id>1</id>
    <nombre>Laura</nombre>
    <telefono>654123987</telefono>
  </cliente>
</clientes>`}
</code></pre>


  <p>
    Este tipo de archivos se usa en phpMyAdmin para <strong>importar o exportar</strong> información
    entre sistemas, pero los datos reales se gestionan con SQL dentro de MySQL/MariaDB.
  </p>
</div>


<h3>🗂 ¿Qué relación tiene XML con MySQL/MariaDB?</h3>

<p>
  En phpMyAdmin y en MySQL/MariaDB, XML aparece en dos contextos muy importantes:
</p>

<h4>1) Exportar bases de datos o tablas</h4>

<p>
  Cuando exportas datos desde phpMyAdmin, puedes elegir entre varios formatos:  
  <strong>SQL, CSV, JSON, PDF y también XML</strong>.
</p>

<p>
  XML es útil porque:
</p>
<ul>
  <li>Permite recuperar tus datos en otro sistema.</li>
  <li>Es legible para personas y máquinas.</li>
  <li>Es perfecto para backups simples.</li>
</ul>

<h4>2) Importar datos</h4>

<p>
  phpMyAdmin también puede leer archivos XML para <strong>volver a crear tablas y rellenarlas</strong>.
</p>

<p>
  Esto es muy útil si un profesor quiere enviaros una base de datos preparada para practicar:
  simplemente importa un archivo XML y phpMyAdmin reconstruye las tablas.
</p>

<div className="callout callout--success">
  <p>
    XML y SQL no compiten:  
    <strong>SQL es un lenguaje para trabajar con bases de datos</strong>,  
    mientras que <strong>XML es un formato de archivo para guardar información</strong>.
  </p>
</div>

<h3>📘 Diferencia rápida entre SQL y XML</h3>

<div className="contenedor-tabla">
  <table className="tabla-datos">
    <thead>
      <tr>
        <th>SQL</th>
        <th>XML</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Es un lenguaje para crear y gestionar bases de datos.</td>
        <td>Es un formato de texto para guardar datos.</td>
      </tr>
      <tr>
        <td>Ejecuta comandos: CREATE TABLE, INSERT, SELECT, etc.</td>
        <td>No ejecuta nada; solo almacena información.</td>
      </tr>
      <tr>
        <td>Se usa dentro de MySQL/MariaDB.</td>
        <td>Se usa para importar/exportar datos.</td>
      </tr>
      <tr>
        <td>Trabaja con tablas.</td>
        <td>Trabaja con etiquetas.</td>
      </tr>
    </tbody>
  </table>
</div>


<h3>🎓 Conclusión</h3>

<p>
  Para trabajar con MySQL y MariaDB no necesitas dominar XML.  
  Solo debes saber que es un <strong>formato de archivo estructurado</strong> 
  que aparece en phpMyAdmin cuando exportas o importas datos.
</p>

<p>
  Durante el curso trabajaremos sobre todo con SQL, pero en ocasiones verás XML 
  cuando guardes una base de datos o cuando importes ejercicios preparados.
</p>

            </article>
          </details>
        </section>


      {/* ================================
  TIPOS DE COMANDOS SQL
================================ */}
<section className="section" id="tipos-comandos-sql">
  <details>
    <summary>📌 Tipos de comandos SQL (DDL, DML, DCL y TCL)</summary>

    <article className="card">
      <h3>📌 Tipos de comandos SQL (DDL, DML, DCL y TCL)</h3>

      <p>
        Los comandos de SQL se agrupan según la función que realizan dentro de la base
        de datos. Esta clasificación nos ayuda a entender <strong>qué hace cada
        instrucción</strong> y <strong>cuándo debemos utilizarla</strong>.
      </p>

      <div className="contenedor-tabla">
        <table className="tabla-datos">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Nombre</th>
              <th>¿Para qué sirve?</th>
              <th>Comandos principales</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><strong>DDL</strong></td>
              <td>Data Definition Language</td>
              <td>
                Define y modifica la <strong>estructura</strong> de la base de datos:
                tablas, columnas, vistas...
              </td>
              <td>
                <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code>
              </td>
            </tr>

            <tr>
              <td><strong>DML</strong></td>
              <td>Data Manipulation Language</td>
              <td>
                Manipula los <strong>datos</strong> dentro de las tablas: inserta, consulta,
                actualiza o borra registros.
              </td>
              <td>
                <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>
              </td>
            </tr>

            <tr>
              <td><strong>DCL</strong></td>
              <td>Data Control Language</td>
              <td>
                Controla los <strong>permisos y la seguridad</strong> de la base de datos:
                quién puede hacer qué.
              </td>
              <td>
                <code>GRANT</code>, <code>REVOKE</code>
              </td>
            </tr>

            <tr>
              <td><strong>TCL</strong></td>
              <td>Transaction Control Language</td>
              <td>
                Gestiona las <strong>transacciones</strong>: confirmar cambios,
                deshacer errores o crear puntos de control.
              </td>
              <td>
                <code>COMMIT</code>, <code>ROLLBACK</code>, <code>SAVEPOINT</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="nota nota-importante">
        👉 Una forma sencilla de recordarlo:{" "}
        <strong>DDL</strong> diseña la estructura, <strong>DML</strong> trabaja con los datos,
        <strong> DCL</strong> controla los permisos y <strong>TCL</strong> controla las transacciones.
      </div>
    </article>
  </details>
</section>

{/* ================================  
    INSTRUCCIÓN SQL (estructura)
   ================================ */}
<section className="section" id="estructura-instruccion-sql">
  <details>
    <summary> ¿Cómo se compone una instrucción SQL?</summary>

    <article className="card">

     
     <h2>La estructura de una instrucción SQL</h2>

      <p>
        Todas las sentencias SQL que usamos en <strong>MySQL</strong> siguen una estructura
        lógica. Aunque algunas partes son obligatorias y otras opcionales, casi todas las
        instrucciones pueden descomponerse en cuatro elementos principales.
      </p>

      <p>
        Lo primero que aparece en una instrucción es siempre el <strong>comando principal</strong>
        o <strong>verbo SQL</strong> (por ejemplo, 
        <code className="etiqueta-codigo">SELECT</code>, 
        <code className="etiqueta-codigo">INSERT</code>, 
        <code className="etiqueta-codigo">UPDATE</code>, 
        <code className="etiqueta-codigo">DELETE</code>, 
        <code className="etiqueta-codigo">CREATE</code>…).  
        Después de ese comando, añadimos <strong>cláusulas</strong>, 
        <strong>operadores</strong>, <strong>condiciones</strong> y
        <strong>funciones</strong> según lo que queramos hacer.
      </p>


      <div className="cuadro-didactico__grid">

          {/* 0. COMANDO PRINCIPAL */}
          <div className="cuadro-didactico__item">
            <h5>0. Comando principal (verbo SQL)</h5>
            <p>
              Es la primera palabra de la instrucción y marca <strong>qué queremos hacer</strong>
              con la base de datos.
            </p>
            <p><strong>Ejemplos habituales:</strong></p>
            <ul className="lista-simple">
              <li><code className="etiqueta-codigo">SELECT</code> → consultar datos</li>
              <li><code className="etiqueta-codigo">INSERT</code> → insertar registros nuevos</li>
              <li><code className="etiqueta-codigo">UPDATE</code> → modificar registros existentes</li>
              <li><code className="etiqueta-codigo">DELETE</code> → borrar registros</li>
              <li><code className="etiqueta-codigo">CREATE</code> → crear tablas, bases de datos, vistas…</li>
              <li><code className="etiqueta-codigo">ALTER</code> → modificar la estructura de una tabla</li>
              <li><code className="etiqueta-codigo">DROP</code> → eliminar tablas o bases de datos</li>
            </ul>
          </div>

          {/* 1. CLÁUSULAS */}
          <div className="cuadro-didactico__item">
            <h5>1. Cláusulas</h5>
            <p>Son palabras clave que indican <strong>cómo se debe ejecutar</strong> el comando.</p>
            <p><strong>Principales cláusulas:</strong></p>
            <ul className="lista-simple">
              <li>
                <code className="etiqueta-codigo">FROM</code>: indica la tabla o tablas de las que
                se obtienen los registros.
              </li>
              <li>
                <code className="etiqueta-codigo">WHERE</code>: filtra los registros según una condición.
              </li>
              <li>
                <code className="etiqueta-codigo">GROUP BY</code>: agrupa filas que comparten valores.
              </li>
              <li>
                <code className="etiqueta-codigo">HAVING</code>: filtra los grupos antes creados.
              </li>
              <li>
                <code className="etiqueta-codigo">ORDER BY</code>: ordena los resultados.
              </li>
              <li>
                <code className="etiqueta-codigo">LIMIT</code>: limita el número de filas mostradas.
              </li>
              <li>
                <code className="etiqueta-codigo">JOIN ... ON</code>: une tablas relacionadas entre sí.
              </li>
            </ul>
          </div>

          {/* 2. OPERADORES */}
          <div className="cuadro-didactico__item">
            <h5>2. Operadores</h5>
            <p>Sirven para <strong>comparar, relacionar o combinar valores</strong> dentro de cláusulas.</p>

            <p><strong>Operadores de comparación:</strong></p>
            <ul className="lista-simple">
              <li><code className="etiqueta-codigo">=</code>: igual a</li>
              <li><code className="etiqueta-codigo">&gt;</code>: mayor que</li>
              <li><code className="etiqueta-codigo">&lt;</code>: menor que</li>
              <li><code className="etiqueta-codigo">&gt;=</code>: mayor o igual</li>
              <li><code className="etiqueta-codigo">&lt;=</code>: menor o igual</li>
              <li><code className="etiqueta-codigo">&lt;&gt;</code>: distinto de</li>
            </ul>

            <p><strong>Operadores especiales:</strong></p>
            <ul className="lista-simple">
              <li><code className="etiqueta-codigo">LIKE</code>: búsqueda por coincidencia</li>
              <li><code className="etiqueta-codigo">IN</code>: comprueba si un valor está en una lista</li>
              <li><code className="etiqueta-codigo">BETWEEN</code>: rango entre dos valores</li>
              <li><code className="etiqueta-codigo">IS NULL</code>: valores nulos</li>
            </ul>

            <p><strong>Operadores lógicos:</strong></p>
            <ul className="lista-simple">
              <li><code className="etiqueta-codigo">AND</code>: se deben cumplir ambas condiciones</li>
              <li><code className="etiqueta-codigo">OR</code>: se cumple una de las condiciones</li>
              <li><code className="etiqueta-codigo">NOT</code>: niega una condición</li>
            </ul>
          </div>

          {/* 3. CONDICIONES */}
          <div className="cuadro-didactico__item">
            <h5>3. Condiciones</h5>
            <p>
              Combinación de operadores + campos + valores.  
              Permiten definir <strong>qué registros deben mostrarse</strong>.
            </p>

            <p><strong>Ejemplos típicos:</strong></p>
            <ul className="lista-simple">
              <li><code className="etiqueta-codigo">edad &gt;= 18</code> → mayores de edad</li>
              <li><code className="etiqueta-codigo">nombre LIKE 'A%'</code> → nombres que empiezan por A</li>
              <li><code className="etiqueta-codigo">precio BETWEEN 10 AND 50</code> → precio entre 10 y 50</li>
              <li><code className="etiqueta-codigo">pais IN ('España','Francia')</code> → coincide con uno de ellos</li>
            </ul>

            <p>
              Las condiciones se suelen usar dentro de <code className="etiqueta-codigo">WHERE</code> y
              <code className="etiqueta-codigo">HAVING</code>.
            </p>
          </div>

          {/* 4. FUNCIONES */}
          <div className="cuadro-didactico__item">
            <h5>4. Funciones</h5>
            <p>
              Son herramientas predefinidas que permiten <strong>calcular, transformar o formatear</strong> datos.
            </p>

            <p><strong>Funciones de agregación:</strong></p>
            <ul className="lista-simple">
              <li><code className="etiqueta-codigo">COUNT()</code>: contar filas</li>
              <li><code className="etiqueta-codigo">SUM()</code>: sumar valores</li>
              <li><code className="etiqueta-codigo">AVG()</code>: media</li>
              <li><code className="etiqueta-codigo">MAX()</code>: valor máximo</li>
              <li><code className="etiqueta-codigo">MIN()</code>: valor mínimo</li>
            </ul>

            <p><strong>Funciones de texto:</strong></p>
            <ul className="lista-simple">
              <li><code className="etiqueta-codigo">UPPER()</code>: convertir a mayúsculas</li>
              <li><code className="etiqueta-codigo">LOWER()</code>: convertir a minúsculas</li>
              <li><code className="etiqueta-codigo">CONCAT()</code>: unir cadenas</li>
            </ul>

            <p><strong>Funciones de fecha y hora:</strong></p>
            <ul className="lista-simple">
              <li><code className="etiqueta-codigo">NOW()</code>: fecha y hora actual</li>
              <li><code className="etiqueta-codigo">CURDATE()</code>: fecha actual</li>
              <li><code className="etiqueta-codigo">YEAR()</code>: extraer el año</li>
            </ul>
          </div>

        </div>

        <div className="cuadro-didactico__nota">
          <strong>💡 Resumen:</strong>  
          El <strong>comando principal</strong> indica qué queremos hacer (SELECT, INSERT, CREATE…);  
          las <strong>cláusulas</strong> definen la estructura de la instrucción;  
          los <strong>operadores</strong> comparan valores;  
          las <strong>condiciones</strong> filtran registros  
          y las <strong>funciones</strong> calculan o transforman la información.
        </div>
        <hr />



           <h3>📌 Ejemplo práctico</h3>

      <p>Si unimos todos los elementos, una instrucción SQL completa podría ser:</p>

COMANDO (qué quiero hacer)
      │
      ▼
CLÁUSULAS (de dónde, cómo, en qué orden…)
      │
      ▼
CONDICIONES (qué filas deben cumplirse)
      │
      ▼
OPERADORES (cómo comparo valores)
      │
      ▼
FUNCIONES (cálculos, textos, fechas…)


<p>Ejemplos de estructura de una consulta:</p>
SELECT nombre, edad             ← Comando + columnas
FROM alumnos                    ← Cláusula FROM
WHERE edad '=' 18                ← Condición + operador
ORDER BY nombre ASC;            ← Cláusula ORDER BY


</article>
  </details>
</section>









            

        {/* 6. TIPOS DE DATOS Y CLAVES */}
        <section className="section" id="tipos-claves">
          <details>
            <summary>Tipos de datos básicos y claves</summary>
            <article className="card">
            <h2>Tipos de datos en MySQL/MariaDB</h2>

<p>
  Antes de crear una tabla, debemos decidir <strong>qué tipo de información</strong> va a guardar cada columna.
  A esto lo llamamos <strong>tipo de dato</strong>.  
  Es como decidir el “formato” de cada cajón donde guardaremos valores: números, textos, fechas, sí/no, etc.
</p>

<p>
  Elegir bien los tipos de datos es fundamental porque afecta:
</p>

<ul>
  <li>al espacio que ocupa tu base de datos,</li>
  <li>a la velocidad de las consultas,</li>
  <li>a la validez de la información (evitar errores),</li>
  <li>a cómo se ordenan y comparan los datos.</li>
</ul>

<div className="callout callout--info">
  <p>
    Un tipo de dato le dice a MySQL: “este campo solo puede guardar este tipo de información”.
  </p>
</div>

<hr />

<h3>🔢 1. Tipos numéricos</h3>

<p>
  Se usan cuando la columna va a contener números enteros (1, 2, 3…) o números con decimales (5.99, 12.5).
</p>

<div className="contenedor-tabla">
  <table className="tabla-datos">
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Ejemplo</th>
        <th>Para qué se usa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>INT</strong></td>
        <td>23</td>
        <td>Números enteros (ID, cantidad de productos, edad...)</td>
      </tr>
      <tr>
        <td><strong>BIGINT</strong></td>
        <td>152385620</td>
        <td>Enteros muy grandes (visitas, grandes IDs…)</td>
      </tr>
      <tr>
        <td><strong>DECIMAL(10,2)</strong></td>
        <td>99.95</td>
        <td>Precios o cantidades con decimales (siempre exacto)</td>
      </tr>
      <tr>
        <td><strong>FLOAT / DOUBLE</strong></td>
        <td>3.14159</td>
        <td>Decimales aproximados (cálculos científicos)</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="callout callout--warning">
  <p>
    Para dinero usa siempre <strong>DECIMAL</strong>, nunca FLOAT: los precios deben ser exactos.
  </p>
</div>

<hr />

<h3>✏️ 2. Tipos de texto</h3>

<p>
  Para guardar palabras, frases o textos largos.
</p>

<div className="contenedor-tabla">
  <table className="tabla-datos">
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Ejemplo</th>
        <th>Uso típico</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>CHAR(10)</strong></td>
        <td>“A123456789”</td>
        <td>Textos de longitud fija (DNI, códigos…)</td>
      </tr>
      <tr>
        <td><strong>VARCHAR(100)</strong></td>
        <td>“Laura García”</td>
        <td>Nombres, correos, títulos (tamaño variable)</td>
      </tr>
      <tr>
        <td><strong>TEXT</strong></td>
        <td>“Lorem ipsum…”</td>
        <td>Descripciones largas, comentarios…</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="callout callout--success">
  <p>
    La mayoría de campos de texto en proyectos reales se crean como <strong>VARCHAR</strong>. Varchar admite letras y números
    y casi cualquier caracter por ejemplo puedes usarlo para password. Aunque VARCHAR admite texto, números y casi cualquier carácter, no conviene usarlo para todo. Los tipos numéricos, de fecha o booleanos permiten cálculos, ordenación correcta, validaciones automáticas y son más rápidos y precisos que el texto.
  </p>
</div>

<hr />

<h3>📅 3. Tipos de fecha y hora</h3>

<p>
  Para almacenar fechas, horas o ambas cosas a la vez.
</p>

<div className="contenedor-tabla">
  <table className="tabla-datos">
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Ejemplo</th>
        <th>Uso típico</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>DATE</strong></td>
        <td>2025-01-12</td>
        <td>Fechas (cumpleaños, registro…)</td>
      </tr>
      <tr>
        <td><strong>TIME</strong></td>
        <td>14:20:00</td>
        <td>Horas (hora de entrada, eventos…)</td>
      </tr>
      <tr>
        <td><strong>DATETIME</strong></td>
        <td>2025-01-12 14:20:00</td>
        <td>Fechas con hora (pedidos, publicaciones…)</td>
      </tr>
      <tr>
        <td><strong>TIMESTAMP</strong></td>
        <td>2025-01-12 14:20:00</td>
        <td>Registro automático de creación/actualización</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="callout callout--info">
  <p>
    <strong>TIMESTAMP</strong> es muy útil cuando quieres que la fecha se actualice sola cada vez que cambia un registro.
  </p>
</div>

<hr />

<h3>✔️ 4. Tipo booleano (sí/no)</h3>

<p>
  Representa valores lógicos: verdadero o falso.
   En MySQL, el tipo BOOLEAN realmente es un alias de TINYINT(1), por lo que sus valores se almacenan como 1 para TRUE y 0 para FALSE. <p>
  Se usa para campos que solo pueden tener dos estados, como “activo/inactivo”, “verificado/no verificado” o “acepta términos”.
   </p>
        Un booleano no nace en TRUE por defecto, a menos que el desarrollador lo indique explícitamente mediante DEFAULT 1. Si la columna permite valores nulos y no tiene un valor por defecto, el registro se creará con NULL; en cambio, si la columna es NOT NULL y no se especifica un valor, MySQL asignará automáticamente 0 (FALSE). Por ello, es importante definir claramente el DEFAULT del campo para evitar comportamientos inesperados y asegurar que los registros comiencen con el estado que realmente necesitas.</p>



<div className="contenedor-tabla">
  <table className="tabla-datos tabla-datos--compacta">
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Valores posibles</th>
        <th>Uso</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>BOOLEAN</strong> / <strong>TINYINT(1)</strong></td>
        <td>0 = falso, 1 = verdadero</td>
        <td>Campos como “activo”, “verificado”, “acepta términos”</td>
      </tr>
    </tbody>
  </table>
</div>

<hr />

<h3>🎯 ¿Cómo elegir el tipo de dato correcto?</h3>

<p>Cuando crees una tabla, pregúntate:</p>

<ul>
  <li><strong>¿Es un número?</strong> → usa INT o DECIMAL.</li>
  <li><strong>¿Es un texto corto?</strong> → usa VARCHAR.</li>
  <li><strong>¿Es una fecha u hora?</strong> → usa DATE, TIME o DATETIME.</li>
  <li><strong>¿Es un verdadero/falso?</strong> → usa BOOLEAN.</li>
</ul>

<div className="callout callout--success">
  <p>
    Elegir bien los tipos de datos desde el principio evita errores y hace que la base de datos funcione mejor.
  </p>
</div>

            </article>
          </details>
        </section>
        {/* 6. use */}
        <section className="section" id="use">
          <details>
            <summary>Seleccionar la bbdd</summary>
            <article className="card">
           <h2>Seleccionar una base de datos con <code>USE</code></h2>

<p>
  Cuando trabajamos con MySQL/MariaDB es muy habitual tener varias bases de datos dentro del mismo
  servidor: por ejemplo, <code>tienda</code>, <code>escuela</code>, <code>curso_fullstack</code>, etc.
</p>

<p>
  Por eso, antes de crear una tabla, insertar datos o hacer consultas,
  tenemos que indicarle a MySQL <strong>dentro de qué base de datos</strong> queremos trabajar.
  Para eso sirve la sentencia <strong><code>USE</code></strong>.
</p>

<div className="callout callout--info">
  <p>
    <strong>Piensa en MySQL como un archivador.</strong>  
    La sentencia <code>USE</code> es como abrir una carpeta concreta para trabajar dentro de ella.
  </p>
</div>

<hr />

<h3>🧩 Sintaxis básica</h3>

<pre><code className="language-sql">
{`USE nombre_de_la_base;`}
</code></pre>

<p>Ejemplos:</p>

<pre><code className="language-sql">
{`USE tienda;
USE curso_fullstack;
USE escuela;`}
</code></pre>

<hr />

<h3>📌 ¿Cuándo es obligatorio usar <code>USE</code>?</h3>

<ul>
  <li>Cuando estás escribiendo SQL directamente en la consola.</li>
  <li>Cuando usas la pestaña "SQL" de phpMyAdmin sin haber seleccionado una base.</li>
  <li>Cuando tu proyecto tiene varias bases de datos en el mismo servidor.</li>
</ul>

<div className="callout callout--warning">
  <p>
    Si no seleccionas una base de datos, MySQL no sabrá dónde crear tus tablas
    y mostrará errores como:  
    <strong>“No database selected”</strong>.
  </p>
</div>

<hr />

<h3>🖥️ Ejemplo completo</h3>

<p>1) Creamos la base de datos:</p>

<pre><code className="language-sql">
{`CREATE DATABASE tienda;`}
</code></pre>

<p>2) Le decimos a MySQL que queremos trabajar dentro de ella:</p>

<pre><code className="language-sql">
{`USE tienda;`}
</code></pre>

<p>3) Ahora sí, podemos crear tablas:</p>

<pre><code className="language-sql">
{`CREATE TABLE productos (
  id_producto INT AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2),
  PRIMARY KEY (id_producto)
);`}
</code></pre>

<div className="callout callout--success">
  <p>
    Gracias a <code>USE tienda;</code> la tabla <code>productos</code> se crea dentro de la base de datos correcta.
  </p>
</div>

<hr />

<h3>🟢 ¿Hace falta escribir <code>USE</code> en phpMyAdmin?</h3>

<p>
  Depende:
</p>

<ul>
  <li><strong>No hace falta</strong> si ya has seleccionado la base de datos desde la columna de la izquierda.</li>
  <li><strong>Sí hace falta</strong> si abres la pestaña SQL sin haber seleccionado ninguna base.</li>
</ul>

<div className="callout callout--info">
  <p>
    En phpMyAdmin, hacer <strong>clic</strong> en una base de datos equivale a ejecutar 
    <code>USE nombre_bd;</code> automáticamente.
  </p>
</div>

<hr />

<h3>🎓 Resumen </h3>

<ul>
  <li><code>USE</code> sirve para elegir en qué base de datos quieres trabajar.</li>
  <li>Es obligatorio cuando escribimos SQL puro.</li>
  <li>En phpMyAdmin, basta con seleccionar la base en el menú lateral.</li>
  <li>Sin <code>USE</code>, MySQL no sabrá dónde crear tablas ni ejecutar consultas.</li>
</ul>

</article>
          </details>
        </section>

        {/* 7. CREAR TABLAS */}
        <section className="section" id="crear-tablas">
          <details>
            <summary>Crear tablas</summary>
            <article className="card">
              <h2>Crear tablas</h2>

<p>
  Una vez creada la base de datos, el siguiente paso es definir sus <strong>tablas</strong>.  
  Una tabla representa un conjunto de entidades del mundo real: alumnos, productos, clientes,
  pedidos, etc.
</p>

<p>
  Cada tabla se compone de <strong>columnas</strong> (campos) y <strong>filas</strong> (registros).
</p>

<hr />

      {/* ================================
         3.3 GUÍA PHPMYADMIN
      ================================= */}
      <section className="section" id="guiar-crear-tablas-phpmyadmin">
        <details>
          <summary>3.3. Guía: cómo rellenar la estructura de una tabla en phpMyAdmin</summary>
          <p>
  Antes de escribir el código SQL, vamos a recordar una regla básica de todas las tablas:
</p>

<div className="callout callout--info">
  <p>
    Toda tabla debe tener una <strong>clave primaria</strong> que identifique de forma única cada registro.
  </p>
</div>


          <article className="card">
            <h2>Guía: cómo rellenar la estructura de una tabla en phpMyAdmin</h2>

            <p>
              Cuando creamos una tabla desde <strong>phpMyAdmin</strong> tenemos que ir
              completando cada fila de la estructura: nombre del campo, tipo de dato,
              si admite valores nulos, índices, etc. Esta guía resume qué significa
              cada opción y qué debemos escribir en cada caso.
            </p>

            {/* Tabla principal: significado de cada campo */}
            <h3>1. Campos básicos de la estructura</h3>

            <div className="contenedor-tabla">
              <table className="tabla-datos tabla-datos--compacta">
                <thead>
                  <tr>
                    <th>Elemento de la columna</th>
                    <th>¿Qué significa?</th>
                    <th>¿Qué debes poner?</th>
                    <th>Ejemplos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Nombre</strong></td>
                    <td>Nombre del campo (atributo) dentro de la tabla.</td>
                    <td>Describe el dato que va a guardar.</td>
                    <td>
                      <code className="etiqueta-codigo">id</code>,{" "}
                      <code className="etiqueta-codigo">nombre</code>,{" "}
                      <code className="etiqueta-codigo">precio</code>,{" "}
                      <code className="etiqueta-codigo">categoria_id</code>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Tipo</strong></td>
                    <td>Tipo de datos que almacenará la columna.</td>
                    <td>Selecciona en el desplegable el tipo adecuado.</td>
                    <td>
                      <code className="etiqueta-codigo">INT</code>,{" "}
                      <code className="etiqueta-codigo">VARCHAR</code>,{" "}
                      <code className="etiqueta-codigo">DECIMAL</code>,{" "}
                      <code className="etiqueta-codigo">DATE</code>,{" "}
                      <code className="etiqueta-codigo">ENUM</code>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Longitud/Valores</strong></td>
                    <td>
                      Tamaño máximo del dato o lista de valores permitidos (según el tipo).
                    </td>
                    <td>
                      Para <code className="etiqueta-codigo">VARCHAR</code> escribe el nº de
                      caracteres. Para <code className="etiqueta-codigo">INT</code> se puede
                      dejar vacío. Para <code className="etiqueta-codigo">ENUM</code> escribe
                      aquí los valores.
                    </td>
                    <td>
                      <code className="etiqueta-codigo">100</code> ·{" "}
                      <code className="etiqueta-codigo">11</code> ·{" "}
                      <code className="etiqueta-codigo">
                        'pendiente','en_proceso','enviado'
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Predeterminado</strong></td>
                    <td>
                      Valor que se utilizará automáticamente si no se indica otro al insertar.
                    </td>
                    <td>
                      Puedes elegir <em>Ninguno</em> o un valor definido por el usuario.
                    </td>
                    <td>
                      <code className="etiqueta-codigo">0</code>,{" "}
                      <code className="etiqueta-codigo">'pendiente'</code>,{" "}
                      <code className="etiqueta-codigo">CURRENT_TIMESTAMP</code>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Cotejamiento</strong></td>
                    <td>
                      Juego de caracteres y reglas de ordenación para campos de texto.
                    </td>
                    <td>
                      Normalmente lo dejamos vacío y se usa el valor por defecto de la BD.
                    </td>
                    <td>
                      <code className="etiqueta-codigo">utf8_general_ci</code>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Atributos</strong></td>
                    <td>Modificadores del tipo de dato.</td>
                    <td>Opcional; suele dejarse en blanco.</td>
                    <td>
                      <code className="etiqueta-codigo">UNSIGNED</code>, etc.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Nulo</strong></td>
                    <td>
                      Indica si la columna puede quedar sin valor ("NULL") o es obligatoria.
                    </td>
                    <td>
                      ✅ Casilla marcada → el campo <strong>puede ser NULL</strong> (no
                      obligatorio).<br />
                      ⛔ Casilla sin marcar → el campo es{" "}
                      <strong>NOT NULL</strong> (obligatorio).
                    </td>
                    <td>
                      ✔ → puede quedar vacío <br />
                      ✘ → siempre debe tener un valor
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Índice</strong></td>
                    <td>
                      Sirve para marcar claves primarias, únicas o columnas que se usan
                      para búsquedas y relaciones.
                    </td>
                    <td>
                      Usa <strong>PRIMARY</strong> para la clave primaria,{" "}
                      <strong>UNIQUE</strong> si no se pueden repetir valores,{" "}
                      <strong>INDEX</strong> para otros índices (en columnas que serán
                      foreign key se suele marcar como INDEX).
                    </td>
                    <td>
                      <code className="etiqueta-codigo">PRIMARY</code>,{" "}
                      <code className="etiqueta-codigo">UNIQUE</code>,{" "}
                      <code className="etiqueta-codigo">INDEX</code>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>A_I (Auto Increment)</strong></td>
                    <td>
                      Hace que el valor numérico aumente automáticamente en cada nuevo
                      registro.
                    </td>
                    <td>
                      Se utiliza normalmente en la clave primaria numérica de la tabla.
                    </td>
                    <td>
                      <code className="etiqueta-codigo">id INT AUTO_INCREMENT</code>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Comentarios, Virtualidad, Mover columna…</strong></td>
                    <td>
                      Opciones avanzadas de documentación o posición de la columna.
                    </td>
                    <td>Son opcionales; pueden dejarse vacías.</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ENUM */}
            <h3>2. Cómo crear un campo <code className="etiqueta-codigo">ENUM</code></h3>

            <div className="contenedor-tabla">
              <table className="tabla-datos tabla-datos--compacta">
                <thead>
                  <tr>
                    <th>Paso</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1</strong></td>
                    <td>
                      En la columna que quieras, en <strong>Tipo</strong> elige{" "}
                      <code className="etiqueta-codigo">ENUM</code>.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>2</strong></td>
                    <td>
                      En <strong>Longitud/Valores</strong> escribe los valores permitidos,
                      entre comillas simples y separados por comas:<br />
                      <code className="etiqueta-codigo">
                        'alta','media','baja'
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>3</strong></td>
                    <td>
                      Decide si el campo puede ser nulo: marca o no la casilla{" "}
                      <strong>Nulo</strong>.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>4</strong></td>
                    <td>
                      Si quieres un valor por defecto, en{" "}
                      <strong>Predeterminado</strong> elige “Definido por el usuario” y
                      escribe, por ejemplo,{" "}
                      <code className="etiqueta-codigo">pendiente</code>.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </details>
      </section>

      {/* ================================
         EJEMPLO TABLA CATEGORÍAS
      ================================= */}
      <section className="section" id="ejemplo-tabla-categorias">
        <details>
          <summary>Ejemplo: tabla categorías (tabla padre)</summary>

          <article className="card">
            <h4>Ejemplo: tabla categorías (tabla padre)</h4>

            <pre className="bloque-codigo">
              <code>{`CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);`}</code>
            </pre>

            <h4>Explicación de esta estructura:</h4>

            <ul>
              <li>
                <strong>id INT AUTO_INCREMENT PRIMARY KEY</strong><br />
                Este campo es la clave primaria.  
                Es numérica y se incrementa automáticamente en cada inserción.
              </li>

              <li>
                <strong>¿Es obligatorio poner AUTO_INCREMENT?</strong><br />
                Sí. MySQL no hace AUTO_INCREMENT por defecto.  
                Si no lo defines tú, MySQL no creará números secuenciales.
              </li>

              <li>
                <strong>¿Es obligatorio incluir la id en un INSERT?</strong><br />
                No. Si el campo tiene AUTO_INCREMENT, se genera solo.
              </li>

              <li>
                <strong>nombre VARCHAR NOT NULL</strong><br />
                Obligatoria. Si no la especificas, el INSERT fallará.
              </li>
            </ul>
          </article>
        </details>
      </section>



<hr />

<h3>🛠 Crear la tabla con SQL (MySQL/MariaDB)</h3>

<pre><code className="language-sql">
{`CREATE TABLE alumnos (
  id_alumno INT AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(150),
  fecha_registro DATE,
  PRIMARY KEY (id_alumno)
);`}
</code></pre>

<h4>🔍 Explicación paso a paso</h4>

<ul>
  <li><code>id_alumno INT</code> → número entero.</li>
  <li><code>AUTO_INCREMENT</code> → genera un valor nuevo automáticamente.</li>
  <li><code>nombre VARCHAR(100)</code> → texto corto con máximo 100 caracteres.</li>
  <li><code>NOT NULL</code> → obligatorio.</li>
  <li><code>email VARCHAR(150)</code> → texto opcional (sin <code>NOT NULL</code>).</li>
  <li><code>fecha_registro DATE</code> → almacena una fecha.</li>
  <li><code>PRIMARY KEY (id_alumno)</code> → establece la clave primaria.</li>
</ul>

<hr />





  <div class="callout callout--success">
    <p>
      ✔ Para crear una tabla necesitas, como mínimo:  
      <strong> nombre del campo</strong>, <strong>tipo de dato</strong> y <strong>PRIMARY KEY</strong>.  
      Lo demás ayuda a definir validaciones y relaciones.
    </p>
  </div>

  <p>
  La restricción <strong>UNIQUE</strong> se utiliza para asegurar que los valores de una columna 
  no se repitan. Por ejemplo, si establecemos que el campo <code>dni</code> es UNIQUE, 
  MySQL comprobará automáticamente que no exista otro registro con el mismo valor y 
  mostrará un error si intentamos insertar un duplicado. A diferencia de la 
  <strong> PRIMARY KEY</strong>, que identifica de forma única cada fila y no permite valores 
  nulos, una columna UNIQUE sí puede contener un valor <code>NULL</code> (una sola vez). 
  En resumen, la clave primaria identifica la fila, mientras que UNIQUE garantiza que un dato 
  específico no se repita en la tabla.
</p>









<hr />

<h3>🎓 Resumen</h3>

<ul>
  <li>Las tablas representan entidades del mundo real.</li>
  <li>Cada tabla tiene columnas (estructura) y filas (datos).</li>
  <li>La clave primaria identifica cada registro de manera única.</li>
  <li>Podemos crear tablas con SQL o usando las herramientas gráficas de phpMyAdmin.</li>
</ul>

            </article>
          </details>
        </section>

        {/* 8. ACTIVIDADES Y EJERCICIOS PRÁCTICOS */}
        <section className="section" id="actividades">
          <details>
            <summary>Actividades de repaso y práctica</summary>
            <article className="card">
              <h2>Actividades de repaso y práctica</h2>

              <p>
                A continuación encontrarás una serie de ejercicios progresivos que te ayudarán a
                consolidar todos los conceptos vistos en este bloque. Te recomendamos realizarlos
                en orden, ya que cada uno construye sobre el anterior.
              </p>

              <hr />

              {/* ACTIVIDAD 1 */}
              <h3>🎯 Actividad 1: Conceptos teóricos</h3>

              <div className="callout callout--warning">
                <p><strong>Objetivo:</strong> Repasar y consolidar la terminología básica de bases de datos.</p>
              </div>

              <p><strong>Responde brevemente:</strong></p>

              <ol>
                <li>¿Qué es un dato? ¿Por qué la fecha de nacimiento es un dato válido pero la edad no?</li>
                <li>¿Qué significa SGBD? ¿Cuál usamos en este curso?</li>
                <li>Define qué es el Modelo Entidad-Relación (E-R) y su propósito principal.</li>
                <li>Explica la diferencia entre una entidad y un atributo, dando un ejemplo de cada uno.</li>
                <li>¿Qué es una clave primaria y por qué es importante?</li>
                <li>Describe brevemente las diferencias entre las relaciones 1:1, 1:N y N:M.</li>
                <li>¿Es SQL un lenguaje de programación? Justifica tu respuesta.</li>
              </ol>

              <hr />

              {/* ACTIVIDAD 2 */}
              <h3>🎯 Actividad 2: Identificar entidades y atributos</h3>

              <div className="callout callout--warning">
                <p><strong>Objetivo:</strong> Practicar el análisis del mundo real para identificar elementos del modelo E-R.</p>
              </div>

              <p><strong>Escenario:</strong> Tienes que diseñar una base de datos para una <strong>biblioteca</strong>.</p>

              <p><strong>Tareas:</strong></p>

              <ol>
                <li>Identifica al menos <strong>3 entidades</strong> principales.</li>
                <li>Para cada entidad, enumera <strong>4-5 atributos</strong> relevantes.</li>
                <li>Indica cuál sería la <strong>clave primaria</strong> de cada entidad.</li>
                <li>Identifica el <strong>dominio</strong> de al menos 3 atributos .</li>
              </ol>

             

              <hr />

              {/* ACTIVIDAD 3 */}
              <h3>🎯 Actividad 3: Determinar cardinalidades</h3>

              <div className="callout callout--warning">
                <p><strong>Objetivo:</strong> Comprender las relaciones entre entidades.</p>
              </div>

              <p><strong>Para cada par de entidades, indica la cardinalidad (1:1, 1:N o N:M):</strong></p>

              

              <p><strong>Justifica cada respuesta con un ejemplo del mundo real.</strong></p>

              <hr />

              {/* ACTIVIDAD 4 */}
              <h3>🎯 Actividad 4: Diseñar un diagrama E-R completo</h3>

              <div className="callout callout--warning">
                <p><strong>Objetivo:</strong> Aplicar todo lo aprendido sobre el Modelo Entidad-Relación.</p>
              </div>

              <p><strong>Escenario:</strong> Una <strong>tienda online</strong> necesita gestionar:</p>

              <ul>
                <li>Productos (nombre, precio, stock, categoría)</li>
                <li>Clientes (nombre, email, dirección)</li>
                <li>Pedidos (fecha, total, estado)</li>
                <li>Detalles de cada pedido (qué productos y cuántas unidades)</li>
              </ul>

              <p><strong>Tareas:</strong></p>

              <ol>
                <li>Dibuja el <strong>diagrama Entidad-Relación</strong> en papel o usando una herramienta digital.</li>
                <li>Identifica todas las <strong>entidades</strong> necesarias.</li>
                <li>Define los <strong>atributos</strong> de cada entidad y subraya las claves primarias.</li>
                <li>Establece las <strong>relaciones</strong> entre entidades con su cardinalidad.</li>
                <li>Si encuentras una relación N:M, propón cómo se resolverá con una tabla intermedia.</li>
              </ol>

              <div className="callout callout--success">
                <p>
                  <strong>Ejemplo de notación:</strong>
                </p>
                <pre><code>
{`[ Cliente ] 1 ——< realiza >—— N [ Pedido ]
              
      (_id_cliente_)                (_id_pedido_)
           |                              |
       [ Cliente ]                    [ Pedido ]
           |                              |
   (nombre, email, ...)         (fecha, total, ...)`}
                </code></pre>
              </div>

              <hr />

              {/* ACTIVIDAD 5 */}
              <h3>🎯 Actividad 5: Crear la base de datos en MySQL</h3>

              <div className="callout callout--warning">
                <p><strong>Objetivo:</strong> Practicar la creación de bases de datos con SQL.</p>
              </div>

              <p><strong>Usando phpMyAdmin o la consola de MySQL:</strong></p>

              <ol>
                <li>Crea una base de datos llamada <code>tienda_online</code>.</li>
                <li>Selecciona el conjunto de caracteres <strong>utf8mb4_unicode_ci</strong>.</li>
                <li>Verifica que la base de datos aparece en la lista de bases de datos disponibles.</li>
              </ol>

              <p><strong>Código SQL esperado:</strong></p>

              <pre><code className="language-sql">
{`CREATE DATABASE tienda_online
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;`}
              </code></pre>

              <hr />

              {/* ACTIVIDAD 6 FINAL */}
              <h3>🎯 Actividad 6: Crear las tablas (ejercicio final integrador)</h3>

              <div className="callout callout--warning">
                <p><strong>Objetivo:</strong> Implementar el diagrama E-R en MySQL creando las tablas correspondientes.</p>
              </div>

              <p>
                Ahora vamos a convertir el diseño que hiciste en la <strong>Actividad 4</strong> en
                tablas reales de MySQL.
              </p>

              <p><strong>Paso 1: Crear la tabla <code>clientes</code></strong></p>

              <pre><code className="language-sql">
{`CREATE TABLE clientes (
  id_cliente INT AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  direccion VARCHAR(255),
  fecha_registro DATE DEFAULT CURRENT_DATE,
  PRIMARY KEY (id_cliente)
);`}
              </code></pre>

              <p><strong>Paso 2: Crear la tabla <code>productos</code></strong></p>

              <pre><code className="language-sql">
{`CREATE TABLE productos (
  id_producto INT AUTO_INCREMENT,
  nombre VARCHAR(150) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  stock INT DEFAULT 0,
  categoria VARCHAR(50),
  PRIMARY KEY (id_producto)
);`}
              </code></pre>

              <p><strong>Paso 3: Crear la tabla <code>pedidos</code></strong></p>

              <pre><code className="language-sql">
{`CREATE TABLE pedidos (
  id_pedido INT AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
  total DECIMAL(10, 2) NOT NULL,
  estado VARCHAR(20) DEFAULT 'pendiente',
  PRIMARY KEY (id_pedido),
  FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);`}
              </code></pre>

              <p><strong>Paso 4: Crear la tabla intermedia <code>detalles_pedido</code></strong></p>

              <p>
                Esta tabla resuelve la relación <strong>N:M</strong> entre Pedidos y Productos
                (un pedido puede tener varios productos, y un producto puede estar en varios pedidos).
              </p>

              <pre><code className="language-sql">
{`CREATE TABLE detalles_pedido (
  id_detalle INT AUTO_INCREMENT,
  id_pedido INT NOT NULL,
  id_producto INT NOT NULL,
  cantidad INT NOT NULL DEFAULT 1,
  precio_unitario DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (id_detalle),
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);`}
              </code></pre>

              <hr />

              <h3>📊 Diagrama E-R final de la tienda online</h3>

              <p>Este es el modelo completo que acabas de implementar:</p>

              <pre><code>
{`
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│    CLIENTES     │         │     PEDIDOS     │         │   PRODUCTOS     │
├─────────────────┤         ├─────────────────┤         ├─────────────────┤
│ id_cliente (PK) │ 1     N │ id_pedido (PK)  │ N     M │ id_producto(PK) │
│ nombre          │◄────────│ id_cliente (FK) │────┐    │ nombre          │
│ email           │         │ fecha_pedido    │    │    │ precio          │
│ direccion       │         │ total           │    │    │ stock           │
│ fecha_registro  │         │ estado          │    │    │ categoria       │
└─────────────────┘         └─────────────────┘    │    └─────────────────┘
                                                    │
                                                    │
                                        ┌───────────┴──────────┐
                                        │  DETALLES_PEDIDO     │
                                        ├──────────────────────┤
                                        │ id_detalle (PK)      │
                                        │ id_pedido (FK)       │
                                        │ id_producto (FK)     │
                                        │ cantidad             │
                                        │ precio_unitario      │
                                        └──────────────────────┘

Relaciones:
• Un CLIENTE puede tener varios PEDIDOS (1:N)
• Un PEDIDO pertenece a un solo CLIENTE (1:N)
• Un PEDIDO puede contener varios PRODUCTOS (N:M)
• Un PRODUCTO puede estar en varios PEDIDOS (N:M)
• La relación N:M se resuelve con la tabla DETALLES_PEDIDO
`}
              </code></pre>

              <hr />

              <h3>✅ Verificación final</h3>

              <p><strong>Para comprobar que todo está correcto:</strong></p>

              <ol>
                <li>Ejecuta <code>SHOW TABLES;</code> para ver todas las tablas creadas.</li>
                <li>Usa <code>DESCRIBE nombre_tabla;</code> para ver la estructura de cada tabla.</li>
                <li>Verifica que las claves primarias y foráneas están correctamente configuradas.</li>
              </ol>

              <div className="callout callout--success">
                <p>
                  <strong>¡Felicidades!</strong> Has completado el diseño e implementación de una base de
                  datos completa desde cero. Este proceso es el mismo que se sigue en proyectos reales:
                </p>
                <ol>
                  <li>Analizar el problema del mundo real</li>
                  <li>Identificar entidades, atributos y relaciones</li>
                  <li>Crear el diagrama E-R</li>
                  <li>Implementar las tablas en MySQL</li>
                  <li>Verificar la estructura</li>
                </ol>
              </div>

              <hr />

              <h3>🚀 Próximos pasos</h3>

              <p>
                En los siguientes días aprenderás a:
              </p>

              <ul>
                <li>Insertar datos en las tablas con <code>INSERT</code></li>
                <li>Consultar información con <code>SELECT</code></li>
                <li>Actualizar registros con <code>UPDATE</code></li>
                <li>Eliminar datos con <code>DELETE</code></li>
                <li>Realizar consultas complejas con <code>JOIN</code></li>
                <li>Conectar tu base de datos con Node.js y React</li>
              </ul>

            </article>
          </details>
        </section>
      </div>
    </main>
  );
}
