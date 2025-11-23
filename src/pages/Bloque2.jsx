/**
 * Bloque2Consultas
 *
 * Componente de página que renderiza el "Bloque 2 · Consultas SQL y diseño de modelos"
 * del curso. Proporciona una guía didáctica completa sobre cómo pasar del modelo de datos
 * a tablas SQL y cómo trabajar con CRUD y consultas (INSERT, SELECT, WHERE, ORDER BY,
 * JOIN, VISTAS, UPDATE, DELETE), además de buenas prácticas, ejemplos, ejercicios y
 * actividades finales.
 *
 * Contenido y estructura principal:
 * - HERO: kicker, título y subtítulo explicativo.
 * - Navegación (TOC) con enlaces ancla a las secciones internas.
 * - Secciones detalladas (cada una con explicación, ejemplos y fragmentos SQL):
 *   - #introduccion-modelos        : visión general y flujo ERL → modelo físico → SQL
 *   - #tablas-columnas            : tablas, columnas, tipos de datos, PK, FK, DEFAULT, ENUM, fechas
 *   - #crear-tablas-modelo        : creación de tablas, valores por defecto, FK, reglas de integridad
 *   - #crud-insert                : INSERT (individual, múltiple, con FK, DEFAULT)
 *   - #crud-select                : SELECT básico, alias, LIMIT
 *   - #filtros                    : WHERE, operadores, LIKE, IN, BETWEEN, IS NULL
 *   - #ordenaciones               : ORDER BY (ASC/DESC, múltiples columnas, alias)
 *   - #sql-vistas                 : creación, uso, modificación y eliminación de vistas
 *   - #crud-update                : UPDATE seguro, expresiones, errores comunes
 *   - #crud-delete                : DELETE, borrado lógico, CASCADE y precauciones
 *   - #joins                      : INNER/LEFT/RIGHT JOIN, múltiples tablas y buenas prácticas
 *   - #buenas_practicas           : checklist y recomendaciones de modelado y consultas
 *   - #actividades                : proyectos propuestos y entregable mínimo
 *   - #bonus                      : exportar .sql, estructura de proyecto y README para portfolio
 *
 * Consideraciones de implementación:
 * - Componente estático, sin props; pensado como página informativa/documental.
 * - Ejemplos SQL se presentan en bloques <pre><code> para facilitar la lectura.
 * - Se emplean etiquetas semánticas (main, header, nav, section) para mejorar accesibilidad.
 * - Las anclas permiten navegación rápida entre los temas del bloque.
 *
 * Uso:
 * import Bloque2Consultas from './pages/Bloque2';
 * <Bloque2Consultas />
 * 
 *
 * @component
 * @returns {JSX.Element} Página completa del Bloque 2 con explicaciones y ejemplos SQL.
 */
import TablasSQL from "../components/TablasSQL.jsx";
import TestSQLBasico50 from "../components/TestSQLBasico50.jsx";  


export default function Bloque2Consultas() {
  return (
    <main className="bloque bloque-sql">
      {/* HERO DEL BLOQUE */}
      <header className="hero hero--sql">
        <div className="contenedor">
          <span className="kicker">Bloque 2 · Consultas SQL y diseño de modelos</span>
          <h1>Consultas SQL y Modelado</h1>
          <p className="subtitle">
            Aprendemos a transformar un modelo de datos en tablas reales, a consultar información
            con SQL y a relacionar tablas mediante claves foráneas y JOIN.
          </p>
        </div>
      </header>

      <div className="contenedor" id="contenido">
        {/* ÍNDICE CON ANCLAS */}
        <nav className="toc">
          <h2>Índice del bloque</h2>
          <ol>
            <li><a href="#introduccion-modelos">Introducción al diseño de modelos</a></li>
            <li><a href="#tablas-columnas">Tablas, columnas y tipos de datos</a></li>
            <li><a href="#modelo">Crear tablas a partir del modelo</a></li>

            {/* CRUD dividido */}
            <li><a href="#crud-insert">C → INSERT (crear datos)</a></li>
          
            <li><a href="#crud-select">R → SELECT (leer datos)</a></li>
              <li><a href="#filtros">Filtros con WHERE</a></li>
             <li><a href="#ordenaciones">Ordenaciones con ORDER BY</a></li>
             <li><a href="#funciones-agregacion">Funciones de agregación</a></li>
             <li><a href="#consultas-calculo">Consultas de cálculo</a></li>
             <li><a href="#vistas">Crear y usar vistas</a></li>
            <li><a href="#crud-update">U → UPDATE (modificar datos)</a></li>
            <li><a href="#crud-delete">D → DELETE (eliminar datos)</a></li>

         
            
            <li><a href="#joins">Relaciones entre tablas y JOIN</a></li>
            <li><a href="#relaciones">Integridad</a></li>
            <li><a href="#indice">Índices y rendimiento</a></li>
            <li><a href="#procedures">Procedimientos almacenados (PROCEDURE)</a></li>
            <li><a href="#triggers">Disparadores (TRIGGER)</a></li>
            <li><a href="#permisos">Gestionar permisos según el rol (admin / cliente)</a></li>
            <li><a href="#buenas-practicas">Buenas prácticas de modelado y consultas</a></li>
            <li><a href="#actividades">Actividades del bloque</a></li>
            <li><a href="#test">Test de repaso</a></li>
          </ol>
        </nav>

        {/* 1. INTRODUCCIÓN AL DISEÑO DE MODELOS */}
      <section className="section" id="introduccion-modelos">
  <details open>
    <summary>Visión general: del modelo al SQL</summary>

    <article className="card">
      <h3>Introducción y conceptos básicos</h3>
      <p>
        Antes de escribir una sola línea de SQL, necesitamos tener claro qué datos queremos guardar
        y cómo se relacionan entre sí. A este proceso lo llamamos <strong>diseño de modelos</strong>,
        y es uno de los pasos más importantes en la creación de una base de datos.
      </p>

      <h3>1.1. Del mundo real al modelo de datos</h3>
      <p>
        Todo comienza analizando el problema: qué entidades (cosas) existen y qué información guardamos
        sobre cada una de ellas. Por ejemplo, en una tienda podemos tener:
      </p>

      <ul>
        <li><strong>Categorías</strong> (Electrónica, Hogar…)</li>
        <li><strong>Productos</strong> (Teclado, Cafetera…)</li>
      </ul>

      <p>
        A partir de estas entidades y de cómo se relacionan entre sí, construimos un diagrama
        <strong> Entidad–Relación Lógico (ERL)</strong>.
      </p>

      <h3>1.2. Del modelo lógico al modelo físico</h3>
      <p>
        Una vez tenemos el modelo ERL, pasamos al paso más importante:
        <strong> convertir (o traducir) ese modelo lógico en un modelo físico</strong>.
        Este proceso consiste en transformar:
      </p>

      <ul>
        <li>Entidades → en <strong>tablas</strong></li>
        <li>Atributos → en <strong>columnas</strong></li>
        <li>Identificadores → en <strong>claves primarias (PK)</strong></li>
        <li>Relaciones → en <strong>claves foráneas (FK)</strong></li>
      </ul>

      <p>
        A esta conversión también se le llama <em>“pasar del modelado lógico al modelado físico”</em>,
        es decir, pasar del dibujo a la estructura real en SQL.
      </p>

      <h3>1.3. Del modelo físico a SQL</h3>
      <p>
        Una vez sabemos qué tablas tendrá nuestra base de datos, llega el momento de escribirlas con SQL.
        Esto implica usar sentencias como <strong>CREATE TABLE</strong> para crearlas, y más adelante
        <strong>INSERT</strong> para añadir datos.
      </p>

      <p>
        Por ejemplo, del modelo lógico <strong>Categoría 1 ─── N Producto</strong>, obtenemos
        dos tablas en SQL:
      </p>

      <pre>
        <code>{`CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  categoria_id INT,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);`}</code>
      </pre>

      

      <p>
        Este flujo —del modelo ERL → tablas SQL → consultas—
        será el que sigamos durante todo el bloque.
      </p>
    </article>
  </details>
</section>


        {/* 2. TABLAS, COLUMNAS Y TIPOS DE DATOS */}
       <section className="section" id="tablas-columnas">
  <details>
    <summary>Tablas, columnas y tipos de datos</summary>

    <article className="card">
      <h3>2. Tablas, columnas y tipos de datos</h3>

      <p>
        En una base de datos relacional, toda la información se guarda dentro de 
        <strong> tablas</strong>. Cada tabla representa una entidad del modelo 
        (por ejemplo: Productos, Categorías, Clientes…) y está compuesta por 
        <strong> columnas</strong> (los atributos o características de esa entidad).
      </p>

      <h3>2.1. ¿Qué es una tabla?</h3>
      <p>
        Una tabla es una estructura formada por filas y columnas, muy parecida a una 
        hoja de cálculo. Cada fila (tupla) representa un registro individual, y cada 
        columna representa un dato específico.
      </p>

      <p>Por ejemplo, una tabla <strong>productos</strong> podría verse así:</p>

      <pre>
        <code>{`+----+-------------------+--------+-------+
| id | nombre            | precio | stock |
+----+-------------------+--------+-------+
| 1  | Teclado mecánico  | 49.99  | 10    |
| 2  | Cafetera          | 35.00  | 5     |
+----+-------------------+--------+-------+`}</code>
      </pre>

      <h3>2.2. ¿Qué es una columna?</h3>
      <p>
        Una columna define el tipo de dato que va a contener. Por ejemplo:
      </p>

      <ul>
        <li><strong>nombre →</strong> texto</li>
        <li><strong>precio →</strong> número con decimales</li>
        <li><strong>stock →</strong> número entero</li>
      </ul>

      <p>
        Para que la base de datos funcione correctamente, cada columna debe tener 
        un <strong>tipo de dato</strong> adecuado.
      </p>

      <h3>2.3. Tipos de datos básicos en MySQL/MariaDB</h3>
      <p>
        A continuación se muestran los tipos de datos más utilizados en desarrollo web 
        y en este curso:
      </p>

      <ul>
        <li><strong>INT</strong> → números enteros (id, stock…)</li>
        <li><strong>DECIMAL(10,2)</strong> → números con decimales (precios, importes…)</li>
        <li><strong>VARCHAR(n)</strong> → texto corto (nombres, emails…)</li>
        <li><strong>TEXT</strong> → texto largo (descripciones…)</li>
        <li><strong>DATE</strong> → solo fecha</li>
        <li><strong>DATETIME</strong> → fecha y hora</li>
        <li><strong>TINYINT(1)</strong> → valores 0/1 (booleanos)</li>
      </ul>

      <h3>2.4. Claves primarias (PK)</h3>
      <p>
        Una clave primaria es una columna cuyos valores identifican de forma única cada 
        fila de la tabla. Lo habitual es usar un entero autoincremental:
      </p>

      <pre>
        <code>{`id INT AUTO_INCREMENT PRIMARY KEY`}</code>
      </pre>

      <p>
        Todas las tablas de tu proyecto deberían tener una <strong>PK</strong>.
      </p>
<h3>2.5. Claves foráneas (FK)</h3>

<p>
  Las claves foráneas permiten relacionar dos tablas. Por ejemplo, si cada producto 
  pertenece a una categoría, la tabla <strong>productos</strong> debe incluir una columna 
  <code>categoria_id</code>. Esa columna indica a qué categoría pertenece cada producto. 
  En esta relación, la tabla <strong>categorias</strong> es la tabla padre y debe existir antes, 
  mientras que <strong>productos</strong> es la tabla hija. Como una categoría puede tener muchos 
  productos, pero un producto solo pertenece a una categoría, estamos ante una relación 
  <strong>1–N</strong>. En este tipo de relaciones, la clave foránea siempre se coloca en el 
  lado donde está la <strong>N</strong>, es decir, en la tabla donde los registros se repiten.
</p>

<div className="callout">
  <p>
    <strong>¿Por qué la clave foránea va en el lado N?</strong>  
    Porque es la tabla hija la que necesita <em>saber a quién pertenece</em>.  
    La tabla padre (categorias) no guarda nada sobre los productos, porque eso implicaría 
    duplicar información o almacenar listas dentro de una sola fila. En cambio, cada producto 
    puede incluir fácilmente el <code>categoria_id</code> que lo relaciona con su categoría.  
    Esta es la forma correcta y normalizada de representar una relación 
    <strong>muchos-a-uno</strong> en SQL.
  </p>
</div>

<p>
  De esta manera, la tabla hija es la que “apunta” a la tabla padre mediante la clave foránea, 
  garantizando la integridad de los datos y permitiendo que MySQL controle que la categoría 
  indicada realmente existe.
</p>


      

      <pre>
        <code>{`categoria_id INT,
FOREIGN KEY (categoria_id) REFERENCES categorias(id)`}</code>
      </pre>

      <p>
        Esto garantiza que ningún producto pueda tener una categoría que no exista.
      </p>

      <h3>2.6. Ejemplo completo de definición de tabla</h3>

      <pre>
        <code>{`CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL,
  categoria_id INT,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);`}</code>
      </pre>

      <p>
        Este ejemplo combina todo lo aprendido: tipos de datos, columnas, PK y FK.
      </p>

    </article>
  </details>
</section>

        
{/* 3. CREAR TABLAS A PARTIR DEL MODELO */}
    {/* 1. INTRODUCCIÓN AL DISEÑO DE MODELOS */}
      <section className="section" id="modelo">
  <details open>
    <summary>Crear tablas a partir del modelo</summary>

<TablasSQL />
</details>
</section>




        {/* 4. C → INSERT */}
       {/* 4. C → INSERT */}
<section className="section" id="crud-insert">
  <details open>
    <summary>C → INSERT (crear datos)</summary>

    <article className="card">

      <h3>4. C → INSERT (crear datos)</h3>

      {/* RECUADRO DE SINTAXIS GENERAL */}
      <div className="callout">
        <strong>Sintaxis general de INSERT:</strong>
        <pre><code>{`INSERT INTO nombre_tabla (columna1, columna2, ...)
VALUES (valor1, valor2, ...);`}</code></pre>
        <p>
          Siempre especificamos las columnas que queremos rellenar.  
          MySQL completará el resto con sus valores por defecto.
        </p>
      </div>

      <p>
        La instrucción <strong>INSERT</strong> nos permite <strong>crear nuevos registros</strong>
        dentro de una tabla. Es la operación del CRUD encargada de añadir información nueva 
        a nuestra base de datos.
      </p>

      <h3>4.1. Insertar un registro en la tabla categorías</h3>

      <pre>
        <code>{`INSERT INTO categorias (nombre)
VALUES ('Tecnología');`}</code>
      </pre>

      <p>
        Esto crea una nueva categoría con un <strong>id autogenerado</strong>.
      </p>

      <h3>4.2. Insertar múltiples registros</h3>

      <pre>
        <code>{`INSERT INTO categorias (nombre) VALUES
('Electrónica'),
('Hogar'),
('Accesorios');`}</code>
      </pre>

      <p>Útil para cargar datos de prueba rápidamente.</p>

      <h3>4.3. Insertar productos (con clave foránea)</h3>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio, stock, categoria_id)
VALUES ('Teclado mecánico', 49.99, 10, 1);`}</code>
      </pre>

      <ul>
        <li><strong>categoria_id</strong> debe existir en <code>categorias.id</code></li>
        <li>El <code>id</code> se genera automáticamente</li>
      </ul>

      <h3>4.4. Inserciones múltiples en productos</h3>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES
('Cafetera', 35.00, 5, 2),
('Funda para móvil', 12.50, 30, 3),
('Altavoz Bluetooth', 25.90, 12, 1);`}</code>
      </pre>

      <h3>4.5. Errores frecuentes con INSERT</h3>

      <ul>
        <li>Fallar en tipo de dato (texto donde va un número)</li>
        <li>No usar comillas simples para texto</li>
        <li>Clave foránea que apunta a un id inexistente</li>
      </ul>

      <h3>4.6. Mala práctica: insertar sin columnas</h3>

      <pre><code>{`INSERT INTO productos VALUES (...);  -- ❌ No recomendado`}</code></pre>

      <p>
        Si mañana añades una columna nueva, esta consulta fallará.
      </p>

      <h3>4.7. Buenas prácticas</h3>

      <ul>
        <li>Especificar siempre las columnas</li>
        <li>Respetar los tipos de datos</li>
        <li>Usar inserciones múltiples cuando sea posible</li>
        <li>Verificar las claves foráneas antes de insertar</li>
      </ul>

      {/* NUEVA SECCIÓN 4.9 */}
      <h3>4.8. Insertar solo algunas columnas (columnas opcionales)</h3>

      <p>
        MySQL solo exige que rellenes las columnas que son:
      </p>

      <ul>
        <li><strong>NOT NULL</strong> sin valor por defecto</li>
        <li><strong>AUTO_INCREMENT</strong> → se rellenan solas</li>
        <li>Columnas con <strong>DEFAULT</strong> → se completan solas</li>
      </ul>

      <h4>Ejemplo 1 — Insertar solo nombre y precio</h4>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio)
VALUES ('Producto parcial', 9.99);`}</code>
      </pre>

      <p>
        MySQL asignará:
      </p>

      <ul>
        <li><code>id</code> → AUTO_INCREMENT</li>
        <li><code>stock</code> → 0 (DEFAULT)</li>
        <li><code>categoria_id</code> → NULL (permitido)</li>
        <li><code>activo</code> → 1 (DEFAULT)</li>
      </ul>

      <h4>Ejemplo 2 — Insertar usando DEFAULT</h4>

      <pre><code>{`INSERT INTO productos (nombre, precio, stock)
VALUES ('Producto sin stock', 12.50, DEFAULT);`}</code></pre>

      <p>El stock quedará en 0 (su valor por defecto).</p>

      <h4>Ejemplo 3 — Insertar solo nombre (fallará)</h4>

      <pre><code>{`INSERT INTO productos (nombre)
VALUES ('Solo nombre');  -- ❌ Error (precio es NOT NULL)`}</code></pre>

            {/* USAR UNA FK AL INSERTAR */}
      <h4>Insertar datos que contienen una clave foránea</h4>

      <p>
        Cuando una tabla es hija (por ejemplo, <code>productos</code> depende de
        <code>categorias</code>), debemos indicar el valor de la
        <strong>clave foránea</strong> al insertar datos. Ese valor debe existir
        previamente en la tabla padre.
      </p>

      <h4>Ejemplo: insertar un producto en la categoría 1</h4>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio, stock, categoria_id)
VALUES ('Teclado mecánico', 49.99, 10, 1);`}</code>
      </pre>

      <p>
        Aquí, <code>categoria_id = 1</code> debe existir en la tabla
        <strong>categorias</strong>. De lo contrario, el INSERT será rechazado.
      </p>

      <h4>Insertar varios productos con FK válida</h4>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio, stock, categoria_id)
VALUES 
  ('Cafetera', 35.00, 5, 2),
  ('Funda móvil', 12.50, 30, 3),
  ('Altavoz Bluetooth', 25.90, 12, 1);`}</code>
      </pre>

      <p>
        Cada producto queda asociado correctamente a su categoría correspondiente.
      </p>

      <h4>¿Y si la FK permite NULL?</h4>

      <p>
        Si la columna <code>categoria_id</code> está definida como
        <code>INT NULL</code>, entonces podemos insertar productos sin categoría.
      </p>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio)
VALUES ('Producto sin categoría', 15.00);`}</code>
      </pre>

      <p>
        En este caso, MySQL asignará automáticamente:
        <br /> → <code>categoria_id = NULL</code>
      </p>

      <h4>Ejemplo de error típico (categoría inexistente)</h4>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio, categoria_id)
VALUES ('Producto fantasma', 10.00, 99);`}</code>
      </pre>

      <div className="callout warning">
        ❌ <strong>Error:</strong> la categoría <code>99</code> no existe.
        <br />
        MySQL rechaza el INSERT para proteger la integridad referencial.
      </div>

      <h4>Reglas fundamentales para usar FK al insertar</h4>

      <ul>
        <li>Primero debes insertar datos en la tabla padre.</li>
        <li>
          La clave foránea debe apuntar a un valor existente o ser NULL (si está permitido).
        </li>
        <li>No puedes usar valores inventados en la FK.</li>
        <li>
          Si usas <code>DEFAULT</code> en la FK, este debe ser NULL o un ID válido.
        </li>
      </ul>

      <h4>Consulta recomendada antes de insertar</h4>

      <p>Muchas veces conviene comprobar primero qué categorías existen:</p>

      <pre>
        <code>{`SELECT * FROM categorias;`}</code>
      </pre>

      <p>
        Esto evita errores al insertar productos que dependen de esas categorías.
      </p>


      <p>
        ¡Perfecto! Ya sabes crear datos de forma correcta.  
        En la siguiente sección aprenderemos:
        <strong>R → SELECT (leer datos de forma profesional).</strong>
      </p>

    </article>
  </details>
</section>


        {/* 5. R → SELECT */}
      {/* 5. R → SELECT */}
<section className="section" id="crud-select">
  <details>
    <summary>R → SELECT (leer datos)</summary>

    <article className="card">
      <h3>5. R → SELECT (leer datos)</h3>

      {/* RECUADRO DE SINTAXIS */}
      <div className="callout">
        <strong>Sintaxis general de SELECT (versión básica):</strong>
        <pre><code>{`SELECT lista_columnas
FROM nombre_tabla
[LIMIT cantidad];`}</code></pre>
        <p>
          Con <code>SELECT</code> indicamos <strong>qué columnas queremos ver</strong>  
          y con <code>FROM</code> indicamos <strong>de qué tabla</strong>. 
          Opcionalmente podemos limitar el número de filas con <code>LIMIT</code>.
        </p>
      </div>

      <p>
        En el CRUD, la <strong>R de Read</strong> corresponde a <strong>SELECT</strong>.
        Es la sentencia que usamos para <strong>leer, buscar y mostrar</strong> información
        guardada en las tablas.
      </p>

      <h3>5.1. SELECT * — leer toda la tabla</h3>
      <p>
        La forma más sencilla de usar SELECT es con <code>*</code>, que significa “todas las columnas”.
      </p>

      <pre>
        <code>{`SELECT * FROM productos;`}</code>
      </pre>

      <p>
        Esta consulta muestra todas las filas y todas las columnas de la tabla
        <code> productos</code>: id, nombre, precio, stock, categoria_id, etc.
      </p>

      <div className="callout">
        <strong>Nota didáctica:</strong> 
        <p>
          <code>SELECT *</code> es útil para probar y explorar, pero en aplicaciones reales
          es mejor pedir solo las columnas necesarias (mejor rendimiento y claridad).
        </p>
      </div>

      <h3>5.2. Seleccionar columnas concretas</h3>
      <p>
        Normalmente no necesitamos todas las columnas, sino solo algunas.  
        En ese caso, las indicamos por su nombre después de <code>SELECT</code>:
      </p>

      <pre>
        <code>{`SELECT nombre, precio
FROM productos;`}</code>
      </pre>

      <p>
        Esta consulta solo muestra dos columnas: <strong>nombre</strong> y <strong>precio</strong>
        de cada producto.
      </p>
<h3>5.3. Alias con AS (renombrar columnas)</h3>

<p>
  Los <strong>alias</strong> nos permiten mostrar un nombre más claro para las columnas 
  en el resultado de una consulta SQL. Se definen con la palabra <code>AS</code> 
  y <strong>no modifican</strong> la estructura de la tabla.
</p>

<pre>
  <code>{`SELECT nombre AS producto, precio AS coste
FROM productos;`}</code>
</pre>

<p>
  En el resultado veremos las columnas como <strong>producto</strong> y <strong>coste</strong>,
  pero la tabla sigue teniendo los nombres reales <code>nombre</code> y <code>precio</code>.
</p>

<ul>
  <li>Los alias <strong>no cambian</strong> la estructura de la tabla.</li>
  <li>Solo afectan al resultado de la consulta.</li>
  <li>Hacen que las salidas sean más claras y profesionales.</li>
</ul>

<p>
  También podemos usar comillas si el alias lleva espacios:
</p>

<pre>
  <code>{`SELECT nombre AS "Nombre del producto"
FROM productos;`}</code>
</pre>

<h4>¿En qué casos tiene sentido usar <code>AS</code>?</h4>

<p>
  Aunque el alias no cambia la tabla, sí es muy útil cuando queremos que el 
  <strong>resultado</strong> de la consulta sea más claro o más adecuado al contexto.
  Estos son los casos más habituales:
</p>

<ul>
  <li>
    <strong>1. Informes o listados más legibles:</strong>  
    Cuando preparas una tabla para un informe, Excel, Google Sheets o un PDF, 
    el nombre original de la columna no siempre es el mejor para un lector.
  </li>

  <li>
    <strong>2. Consultas con funciones:</strong>  
    Si calculas una media, suma o porcentaje, el nombre por defecto sería feo:<br/>
    <code>AVG(puntuacion)</code>.  
    Con <code>AS</code>:  
    <pre><code>SELECT AVG(puntuacion) AS media FROM valoraciones;</code></pre>
  </li>

  <li>
    <strong>3. Consultas con expresiones o cálculos:</strong>  
    <pre><code>SELECT precio * 1.21 AS precio_con_IVA FROM productos;</code></pre>
    Sin alias, esa columna no tiene nombre.
  </li>

  <li>
    <strong>4. Consultas con nombres largos o técnicos:</strong>  
    <code>fecha_ultimo_acceso</code> → <code>AS ultima_visita</code>
  </li>

  <li>
    <strong>5. Consultas que irán a una API o un backend:</strong>  
    A veces el equipo de frontend pide que las claves lleguen con ciertos nombres.
  </li>

  <li>
    <strong>6. Evitar colisiones de nombres al hacer JOIN:</strong>  
    Si dos tablas tienen columna <code>nombre</code>, necesitamos distinguirlas.
    <pre><code>SELECT u.nombre AS usuario, 
       p.nombre AS producto
FROM usuarios u
JOIN productos p;</code></pre>
  </li>
</ul>

<h4>¿Y si en el frontend ponemos nuestros propios nombres?</h4>

<p>
  Es cierto: en una web (HTML, React, Vue, etc.) solemos mostrar la información 
  con los nombres que queramos. <strong>Pero el alias sigue siendo útil</strong> porque:
</p>

<ul>
  <li>
    <strong>El backend recibe un resultado más claro.</strong>  
    Si la API devuelve un campo <code>media</code> en vez de <code>AVG(puntuacion)</code>,
    el código del backend es más limpio.
  </li>

  <li>
    <strong>El frontend recibe directamente nombres más amigables.</strong><br/>
    Así no tienes que renombrar JSON en React, por ejemplo.
  </li>

  <li>
    <strong>Si exportas datos a Excel o Google Sheets</strong>, los encabezados ya están listos.
  </li>

  <li>
    <strong>Cuando trabajas con analistas, informes o dashboards</strong>, los alias 
    ponen nombres profesionales a las columnas.
  </li>

  <li>
    <strong>Ayuda muchísimo al leer códigos SQL de compañeros.</strong>
  </li>

  <li>
    <strong>Evita choques de nombres en consultas con muchas tablas.</strong>
  </li>
</ul>

<p>
  Más adelante, cuando estudiemos <strong>JOIN</strong>, también usaremos alias
  para renombrar <strong>tablas completas</strong> (por ejemplo, 
  <code>productos p</code>, <code>categorias c</code>), lo cual hace las 
  consultas más cortas y fáciles de leer.
</p>

      <h3>5.4. LIMIT — mostrar solo algunas filas</h3>
      <p>
        A veces solo queremos ver unas pocas filas, por ejemplo, para probar o para 
        mostrar una “vista previa”. Para eso usamos <code>LIMIT</code>.
      </p>

      <pre>
        <code>{`SELECT * 
FROM productos
LIMIT 3;`}</code>
      </pre>

      <p>
        Esta consulta mostrará únicamente los <strong>3 primeros registros</strong> de la tabla.
      </p>

      <p>
        También podemos combinar LIMIT con selección de columnas:
      </p>

      <pre>
        <code>{`SELECT nombre, precio
FROM productos
LIMIT 5;`}</code>
      </pre>

      <p>
        Muy útil para no saturar la pantalla cuando hay muchas filas.
      </p>

      <h3>5.5. Orden mental para leer un SELECT básico</h3>
      <p>
        ¿Cómo leer una consulta SELECT básica?
      </p>

      <pre>
        <code>{`
        1) SELECT → qué columnas vamos a mostrar
        2) FROM → de qué tabla vienen los datos
        3) LIMIT → cuántas filas queremos ver`}</code>
      </pre>

      <p>
        Más adelante añadiremos:
      </p>

      <ul>
        <li><strong>WHERE</strong> → para filtrar filas (siguiente sección)</li>
        <li><strong>ORDER BY</strong> → para ordenar resultados</li>
        <li><strong>JOIN</strong> → para combinar varias tablas</li>
      </ul>

      <h3>5.6. Ejemplos prácticos con nuestras tablas</h3>

      <p><strong>Ver todos los productos:</strong></p>
      <pre>
        <code>{`SELECT * FROM productos;`}</code>
      </pre>

      <p><strong>Ver solo el nombre y el precio de los productos:</strong></p>
      <pre>
        <code>{`SELECT nombre, precio
FROM productos;`}</code>
      </pre>

      <p><strong>Ver solo los nombres de las categorías:</strong></p>
      <pre>
        <code>{`SELECT nombre
FROM categorias;`}</code>
      </pre>

      <p><strong>Ver productos con alias en las columnas:</strong></p>
      <pre>
        <code>{`SELECT nombre AS producto, precio AS coste
FROM productos
LIMIT 5;`}</code>
      </pre>

      <h3>5.7. Resumen de SELECT básico</h3>

      <p>
        La instrucción <strong>SELECT</strong> es fundamental para leer datos en SQL.  
        Con ella podemos:
      </p>
      <ul>
        <li>Seleccionar todas las columnas (<code>*</code>) o solo las que necesitamos.</li>
        <li>Renombrar columnas con <code>AS</code> para mayor claridad.</li>
        <li>Limitar el número de filas mostradas con <code>LIMIT</code>.</li>
      </ul>

      <p>
        Una vez dominado el SELECT básico, el siguiente paso es aprender a 
        <strong>filtrar resultados con WHERE</strong>, para obtener solo las filas 
        que realmente nos interesan.
      </p>

    </article>
  </details>
</section>

 {/* 8. FILTROS CON WHERE */}
        {/* 8. FILTROS CON WHERE */}
<section className="section" id="filtros">
  <details>
    <summary>Filtros con WHERE</summary>

    <article className="card">
      <h3>8. Filtros con WHERE</h3>

      <div className="callout">
        <strong>Idea clave:</strong>
        <p>
          La cláusula <code>WHERE</code> sirve para <strong>filtrar filas</strong>.  
          Primero se buscan las filas que cumplen la condición y solo después se muestran con
          <code>SELECT</code>.
        </p>
      </div>

      <p>
        Hasta ahora, con <code>SELECT</code> hemos recuperado <strong>todas</strong> las filas de una tabla.
        A partir de esta sección, aprenderemos a quedarnos solo con las que nos interesan:
        productos más caros, con poco stock, de cierta categoría, etc.
      </p>

      <h3>8.1. Sintaxis básica de WHERE</h3>

      <pre>
        <code>{`SELECT columnas
FROM nombre_tabla
WHERE condicion;`}</code>
      </pre>

      <p>
        La condición puede ser una comparación, una combinación de varias comparaciones,
        o expresiones más complejas.
      </p>

      <h3>8.2. Operadores de comparación</h3>

      <p>Los más usados son:</p>

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Operador</th>
              <th>Significado</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>=</code></td>
              <td>Igual</td>
              <td><code>precio = 10</code></td>
            </tr>
            <tr>
              <td><code>&gt;</code></td>
              <td>Mayor que</td>
              <td><code>precio &gt; 50</code></td>
            </tr>
            <tr>
              <td><code>&lt;</code></td>
              <td>Menor que</td>
              <td><code>stock &lt; 5</code></td>
            </tr>
            <tr>
              <td><code>&gt;=</code></td>
              <td>Mayor o igual</td>
              <td><code>precio &gt;= 20</code></td>
            </tr>
            <tr>
              <td><code>&lt;=</code></td>
              <td>Menor o igual</td>
              <td><code>stock &lt;= 10</code></td>
            </tr>
            <tr>
              <td><code>&lt;&gt;</code> o <code>!=</code></td>
              <td>Distinto de</td>
              <td><code>precio &lt;&gt; 0</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p><strong>Ejemplo:</strong> productos más caros de 30€</p>

      <pre>
        <code>{`SELECT nombre, precio
FROM productos
WHERE precio > 30;`}</code>
      </pre>

<p>Podemos hacer también una selección con un alias</p>
<pre>
  <code>{`SELECT  
  id_usuario AS usuario,  
  id_pelicula AS pelicula,  
  puntuacion,  
  comentario,  
  'Excelente' AS nivel  
FROM valoraciones  
WHERE puntuacion > 8;`}</code>
</pre>
      <h3>8.3. Operadores lógicos: AND y OR</h3>

      <p>
        Podemos combinar varias condiciones usando <strong>AND</strong> (y) y <strong>OR</strong> (o).
      </p>

      <p><strong>Ejemplo con AND:</strong> productos caros y con poco stock</p>

      <pre>
        <code>{`SELECT nombre, precio, stock
FROM productos
WHERE precio > 30
  AND stock < 10;`}</code>
      </pre>

      <p><strong>Ejemplo con OR:</strong> productos muy baratos o muy caros</p>

      <pre>
        <code>{`SELECT nombre, precio
FROM productos
WHERE precio < 10
   OR precio > 100;`}</code>
      </pre>

      <div className="callout">
        <strong>Consejo:</strong>
        <p>
          Puedes usar paréntesis para agrupar condiciones y evitar dudas:
        </p>
        <pre><code>{`WHERE (precio > 30 AND stock < 10) OR categoria_id = 1`}</code></pre>
      </div>

      <h3>8.4. BETWEEN e IN</h3>

      <h4>BETWEEN</h4>
      <p>
        Sirve para buscar valores dentro de un rango (incluye los extremos).
      </p>

      <pre>
        <code>{`SELECT nombre, precio
FROM productos
WHERE precio BETWEEN 20 AND 50;`}</code>
      </pre>

      <p>Equivale a:</p>

      <pre>
        <code>{`WHERE precio >= 20 AND precio <= 50`}</code>
      </pre>

      <h4>IN</h4>
      <p>
        Sirve para comprobar si un valor está dentro de una <strong>lista</strong> de opciones.
      </p>

      <pre>
        <code>{`SELECT nombre, categoria_id
FROM productos
WHERE categoria_id IN (1, 3);`}</code>
      </pre>

      <p>
        Esto devuelve los productos de la categoría 1 o de la 3.
      </p>

      <h3>8.5. LIKE — buscar por texto</h3>

      <p>
        <code>LIKE</code> se usa para hacer <strong>búsquedas por patrones de texto</strong>.
        Utiliza comodines:
      </p>

      <ul>
        <li><code>%</code> → cualquier número de caracteres (incluido 0)</li>
        <li><code>_</code> → exactamente un carácter</li>
      </ul>

      <p><strong>Ejemplos:</strong></p>

      <pre>
        <code>{`-- Productos cuyo nombre empieza por 'C'
SELECT nombre
FROM productos
WHERE nombre LIKE 'C%';

-- Productos cuyo nombre termina en 'a'
SELECT nombre
FROM productos
WHERE nombre LIKE '%a';

-- Productos que contienen la palabra 'funda'
SELECT nombre
FROM productos
WHERE nombre LIKE '%funda%';`}</code>
      </pre>

      <h3>8.6. IS NULL e IS NOT NULL</h3>

      <p>
        No podemos comparar NULL con = o &lt;&gt;.  
        Para comprobar valores nulos usamos <code>IS NULL</code> y <code>IS NOT NULL</code>.
      </p>

      <pre>
        <code>{`-- Productos sin categoría asignada
SELECT nombre
FROM productos
WHERE categoria_id IS NULL;

-- Productos con categoría
SELECT nombre
FROM productos
WHERE categoria_id IS NOT NULL;`}</code>
      </pre>

      <h3>8.7. Orden mental de una consulta con WHERE</h3>

      <p>
        A la hora de entender qué hace una consulta con WHERE, seguimos este orden mental:
      </p>

      <pre>
        <code>{`1) FROM → elige la tabla
2) WHERE → filtra las filas
3) SELECT → muestra las columnas deseadas
4) LIMIT → limita el número de filas (si lo usamos)`}</code>
      </pre>

      <p>
        Más adelante añadiremos <strong>ORDER BY</strong> al final para ordenar los resultados.
      </p>

      <h3>8.8. Ejemplos prácticos con la tabla productos</h3>

      <p><strong>Productos con stock bajo (menos de 5 unidades):</strong></p>
      <pre>
        <code>{`SELECT nombre, stock
FROM productos
WHERE stock < 5;`}</code>
      </pre>

      <p><strong>Productos de la categoría 1 (Electrónica) y precio mayor de 20€:</strong></p>
      <pre>
        <code>{`SELECT nombre, precio, categoria_id
FROM productos
WHERE categoria_id = 1
  AND precio > 20;`}</code>
      </pre>

      <p><strong>Productos que no tienen categoría:</strong></p>
      <pre>
        <code>{`SELECT nombre
FROM productos
WHERE categoria_id IS NULL;`}</code>
      </pre>

      <p><strong>Productos cuyo nombre contiene la palabra 'Cafetera':</strong></p>
      <pre>
        <code>{`SELECT nombre, precio
FROM productos
WHERE nombre LIKE '%Cafetera%';`}</code>
      </pre>

     
    </article>
  </details>
</section>
 {/* 9. ORDENACIONES CON ORDER BY */}
       {/* 9. ORDENACIONES CON ORDER BY */}
<section className="section" id="ordenaciones">
  <details>
    <summary>Ordenaciones con ORDER BY</summary>

    <article className="card">
      <h3>9. Ordenaciones con ORDER BY</h3>

      <div className="callout">
        <strong>Idea clave:</strong>
        <p>
          La cláusula <code>ORDER BY</code> se usa para <strong>ordenar</strong> los resultados 
          de una consulta. Podemos ordenar por una columna o por varias, en orden ascendente 
          o descendente.
        </p>
      </div>

      <p>
        Una vez filtramos datos con <code>WHERE</code>, normalmente queremos presentarlos de forma 
        ordenada: por precio, por stock, por nombre, etc. Aquí entra en juego 
        <code>ORDER BY</code>.
      </p>

      <p> Cuando utilizamos <code className="etiqueta-codigo">ORDER BY</code> sin indicar ningún modificador, MySQL aplica por defecto un orden <strong>ascendente (ASC)</strong>. Esto significa que los resultados se organizan de menor a mayor: los números más pequeños aparecen primero y los textos se ordenan alfabéticamente según el collation de la base de datos. Además, los valores <code className="etiqueta-codigo">NULL</code> se sitúan antes que el resto. Por tanto, escribir <code className="etiqueta-codigo">ORDER BY precio</code> y <code className="etiqueta-codigo">ORDER BY precio ASC</code> produce exactamente el mismo resultado. Solo es necesario usar <code className="etiqueta-codigo">DESC</code> cuando queremos invertir este orden. </p>

      <h3>9.1. Sintaxis básica de ORDER BY</h3>

      <pre>
        <code>{`SELECT columnas
FROM tabla
ORDER BY columna ASC | DESC;`}</code>
      </pre>

      <p>
        MySQL usa <strong>ASC</strong> (ascendente) por defecto, por lo que si no indicamos nada, 
        se ordenará del más pequeño al más grande.
      </p>

      <h3>9.2. Orden ascendente (ASC)</h3>

      <p><strong>Ejemplo: productos ordenados por precio, de más barato a más caro</strong></p>

      <pre>
        <code>{`SELECT nombre, precio
FROM productos
ORDER BY precio ASC;`}</code>
      </pre>

      <p>
        Como ASC es el valor por defecto, podríamos escribir solo:
      </p>

      <pre>
        <code>{`ORDER BY precio;`}</code>
      </pre>

      <h3>9.3. Orden descendente (DESC)</h3>

      <p><strong>Ejemplo: productos del más caro al más barato</strong></p>

      <pre>
        <code>{`SELECT nombre, precio
FROM productos
ORDER BY precio DESC;`}</code>
      </pre>

      <p>
        DESC es muy útil para ver:
      </p>

      <ul>
        <li>Productos más caros primero</li>
        <li>Productos con más stock</li>
        <li>Registros recientes (por fecha DESC)</li>
      </ul>

      <h3>9.4. Ordenar por varias columnas</h3>

      <p>
        Podemos ordenar usando más de una columna.  
        Se aplica el orden de izquierda a derecha.
      </p>

      <p><strong>Ejemplo: ordenar por categoría y luego por precio ascendente</strong></p>

      <pre>
        <code>{`SELECT nombre, precio, categoria_id
FROM productos
ORDER BY categoria_id ASC, precio ASC;`}</code>
      </pre>

      <p><strong>Ejemplo: ordenar por categoría pero dentro de cada una mostrar el producto más caro primero</strong></p>

      <pre>
        <code>{`SELECT nombre, precio, categoria_id
FROM productos
ORDER BY categoria_id ASC, precio DESC;`}</code>
      </pre>

      <div className="callout">
        <strong>Consejo:</strong>
        <p>
          Si dos productos tienen el mismo precio, el segundo criterio decide el orden.
        </p>
      </div>

      <h3>9.5. Ordenar por alias</h3>

      <p>
        Si en <code>SELECT</code> usamos un alias, también podemos ordenarlo por ese alias.
      </p>

      <pre>
        <code>{`SELECT nombre AS producto, precio AS coste
FROM productos
ORDER BY coste DESC;`}</code>
      </pre>

      <p>
        Esto es muy útil cuando el nombre real de la columna es largo o menos descriptivo.
      </p>

      <h3>9.6. Ordenar por una columna no incluida en SELECT</h3>

      <p>
        Podemos ordenar por una columna aunque no aparezca en la lista de columnas seleccionadas.
      </p>

      <pre>
        <code>{`SELECT nombre
FROM productos
ORDER BY precio DESC;`}</code>
      </pre>

      <p>
        Esto es habitual cuando queremos una lista “limpia”, pero bien ordenada.
      </p>

      <h3>9.7. Ordenar textos: orden alfabético</h3>

      <p><strong>Ejemplo: productos ordenados alfabéticamente</strong></p>

      <pre>
        <code>{`SELECT nombre
FROM productos
ORDER BY nombre ASC;`}</code>
      </pre>

      <p>Y al revés:</p>

      <pre>
        <code>{`ORDER BY nombre DESC;`}</code>
      </pre>

      <h3>9.8. Orden mental al leer consultas con ORDER BY</h3>

      <pre>
        <code>{`1) FROM → de qué tabla vienen los datos
2) WHERE → filtramos filas (si existe)
3) SELECT → mostramos columnas
4) ORDER BY → orden final de los resultados
5) LIMIT → si queremos limitar filas`}</code>
      </pre>

      <h3>9.9. Ejemplos prácticos</h3>

      <p><strong>Productos con precio mayor de 20€, ordenados del más caro al más barato:</strong></p>

      <pre>
        <code>{`SELECT nombre, precio
FROM productos
WHERE precio > 20
ORDER BY precio DESC;`}</code>
      </pre>

      <p><strong>Productos ordenados por stock, del más alto al más bajo:</strong></p>

      <pre>
        <code>{`SELECT nombre, stock
FROM productos
ORDER BY stock DESC;`}</code>
      </pre>

      <p><strong>Productos ordenados por categoría y nombre alfabético:</strong></p>

      <pre>
        <code>{`SELECT nombre, categoria_id
FROM productos
ORDER BY categoria_id ASC, nombre ASC;`}</code>
      </pre>

      <h3>9.10. Ejercicios recomendados</h3>

      <ul>
        <li>Ordena los productos por precio ascendente.</li>
        <li>Ordena los productos por stock descendente.</li>
        <li>Ordena los productos por nombre alfabéticamente.</li>
        <li>
          Ordena por categoría y dentro de cada categoría por precio descendente.
        </li>
        <li>
          Muestra solo el nombre de los productos ordenados por precio.
        </li>
        <li>
          Ordena los productos que cuesten menos de 20€ por precio ascendente.
        </li>
      </ul>

      <p>
        Ahora que ya sabes ordenar resultados, pasaremos a uno de los conceptos
        más importantes del modelo relacional:
        <strong> unir tablas con JOIN</strong>.
      </p>

    </article>
  </details>
</section>

<section className="section" id="funciones-agregacion">

  <details>
    <summary>Funciones de agregación (AVG, COUNT, SUM, MAX, MIN) y la cláusula HAVING</summary>

    <article className="card">

      <h2>Funciones de agregación y la cláusula HAVING</h2>

      <p>
        Las funciones de agregación son herramientas que permiten obtener 
        <strong> resultados resumidos</strong> a partir de un conjunto de datos: promedios, totales, 
        máximos, mínimos o conteos.  
        Estas funciones son fundamentales en las consultas con 
        <code className="etiqueta-codigo">GROUP BY</code>, ya que se aplican a cada grupo 
        generado.
      </p>

      <hr />

      <h3>📌 Funciones principales de agregación</h3>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Función</th>
              <th>Descripción detallada</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td><code className="etiqueta-codigo">AVG(campo)</code></td>
              <td>
                Calcula el <strong>promedio</strong> de los valores numéricos de un campo. 
                Ignora los valores <code className="etiqueta-codigo">NULL</code>.
                <br /><br />
                Ejemplo: precio medio de los productos:
                <div className="bloque-codigo">
                  SELECT AVG(precio) FROM productos;
                </div>
              </td>
            </tr>

            <tr>
              <td><code className="etiqueta-codigo">COUNT(campo)</code></td>
              <td>
                Cuenta cuántos registros hay en un campo.  
                <strong>COUNT(*)</strong> cuenta todas las filas, incluso si alguno de sus valores es NULL.  
                <strong>COUNT(campo)</strong> solo cuenta las filas donde ese campo no es NULL.
                <br /><br />
                Ejemplo: cuántos clientes tenemos:
                <div className="bloque-codigo">
                  SELECT COUNT(*) FROM clientes;
                </div>
              </td>
            </tr>

            <tr>
              <td><code className="etiqueta-codigo">SUM(campo)</code></td>
              <td>
                Suma los valores numéricos de un campo.  
                Ideal para calcular totales de ventas, gastos o cantidades.
                <br /><br />
                Ejemplo: total vendido:
                <div className="bloque-codigo">
                  SELECT SUM(precio_unitario * cantidad) FROM detalle_pedido GROUP BY pedido_id;
                </div>
              </td>
            </tr>

            <tr>
              <td><code className="etiqueta-codigo">MAX(campo)</code></td>
              <td>
                Devuelve el valor más alto dentro del conjunto.  
                Muy útil para saber el producto más caro, la fecha más reciente, etc.
                <br /><br />
                Ejemplo: precio máximo:
                <div className="bloque-codigo">
                  SELECT MAX(precio) FROM productos;
                </div>
              </td>
            </tr>

            <tr>
              <td><code className="etiqueta-codigo">MIN(campo)</code></td>
              <td>
                Devuelve el valor más bajo.  
                Perfecto para encontrar el producto más barato o la primera fecha registrada.
                <br /><br />
                Ejemplo: precio mínimo:
                <div className="bloque-codigo">
                  SELECT MIN(precio) FROM productos;
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <hr />

      <h3>📊 Agrupar resultados con GROUP BY</h3>
      <p>
        Si queremos aplicar estas funciones según una categoría (por ejemplo, ciudad, categoría
        o cliente), debemos combinar la función con 
        <code className="etiqueta-codigo">GROUP BY</code>.
      </p>

      <div className="bloque-codigo">
        SELECT ciudad, COUNT(*) AS total<br />
        FROM clientes<br />
        GROUP BY ciudad;
      </div>

      <p>
        En este ejemplo, obtenemos cuántos clientes hay en cada ciudad.
      </p>

      <hr />

      <section className="section" id="funciones-agrupacion-ejemplo">
  <details>
    <summary>Ejemplo práctico: Agrupar y sumar precios por sección</summary>

    <article className="card">

      <h2>Ejemplo: Agrupar artículos por sección y calcular la suma de precios</h2>

      <p>
        Imagina que tenemos una tabla <code>productos</code> con diferentes artículos de un comercio:
        lámparas, tubos, raquetas, coches teledirigidos, etc.  
        Queremos saber <strong>cuánto dinero suman todos los artículos de cada sección</strong>
        (ferretería, cerámica, deportes, juguetería…).
      </p>

      <p>
        Para ello usamos una función de agrupación (<code>SUM()</code>) junto con 
        <code>GROUP BY</code>. MySQL agrupa los productos por su sección y calcula la suma
        del precio dentro de cada grupo.
      </p>

      <pre><code>
SELECT 
    SECCIÓN,
    NOMBREARTICULO,
    SUM(PRECIO) AS SUMA_ARTICULOS
FROM productos
GROUP BY SECCIÓN
ORDER BY SUMA_ARTICULOS;
      </code></pre>

      <h3>¿Qué está ocurriendo aquí?</h3>

      <ul className="lista-simple">
        <li><code>SECCIÓN</code> → es el campo por el que agrupamos.</li>
        <li><code>SUM(PRECIO)</code> → calcula la suma de todos los precios de esa sección.</li>
        <li><code>GROUP BY</code> → indica a MySQL que debe crear un grupo por cada sección.</li>
        <li><code>ORDER BY SUMA_ARTICULOS</code> → ordena los resultados de menor a mayor suma total.</li>
      </ul>

      <h3>Resultado (interpretación de la imagen)</h3>

      <p>
        El resultado muestra cada sección junto con la <strong>suma total</strong> del precio de los 
        artículos que pertenecen a ella. Por ejemplo:
      </p>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>SECCIÓN</th>
              <th>NOMBREARTICULO</th>
              <th>SUMA_ARTICULOS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>CERÁMICA</td>
              <td>TUBOS</td>
              <td>442.3498</td>
            </tr>

            <tr>
              <td>DEPORTES</td>
              <td>RAQUETA TENIS</td>
              <td>1305.8123</td>
            </tr>

            <tr>
              <td>JUGUETERÍA</td>
              <td>COCHE TELEDIRIGIDO</td>
              <td>2516.7141</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout">
        Observa que MySQL muestra un <strong>artículo representativo</strong> de cada sección, pero 
        la suma incluye <strong>todos los artículos</strong> de esa categoría, aunque no aparezcan listados.
      </div>

      <p className="nota nota-importante">
        Este es un ejemplo claro de cómo usar funciones de agrupación para obtener 
        <strong>totales por categorías</strong>, muy útil en informes, estadísticas y análisis de ventas.
      </p>

    </article>
  </details>
</section>


      {/* ============================
          SECCIÓN HAVING
      ============================ */}

      <h3>🔎 ¿Qué es HAVING y para qué sirve?</h3>

      <p>
        La cláusula <code className="etiqueta-codigo">HAVING</code> funciona como un filtro,
        pero se utiliza <strong>después de agrupar</strong>.  
        Mientras que <code className="etiqueta-codigo">WHERE</code> filtra filas individuales,
        <code className="etiqueta-codigo">HAVING</code> filtra grupos completos.
      </p>

      <div className="cuadro-didactico">
        <h4>Diferencia clave</h4>
        <p>
          <strong>WHERE</strong> → filtra antes de agrupar  
          <br />
          <strong>HAVING</strong> → filtra después de agrupar
        </p>
      </div>

      <h3>📌 Ejemplo de HAVING: solo ciudades con más de 3 clientes</h3>

      <div className="bloque-codigo">
        SELECT ciudad, COUNT(*) AS total<br />
        FROM clientes<br />
        GROUP BY ciudad<br />
        HAVING COUNT(*) &gt; 3;
      </div>

      <p>
        En este caso, solo aparecerán las ciudades cuyo total de clientes sea mayor de 3.  
        Este filtro no podría hacerse con <code>WHERE</code>, porque 
        <strong>WHERE no puede usar funciones de agregación</strong>.
      </p>

      <hr />

      <h3>💡 Ejemplo avanzado: categorías cuyo precio medio es superior a 200€</h3>

      <div className="bloque-codigo">
        SELECT categoria_id, AVG(precio) AS precio_medio<br />
        FROM productos<br />
        GROUP BY categoria_id<br />
        HAVING AVG(precio) &gt; 200;
      </div>

      <p>
        Gracias a <code>HAVING</code>, podemos mostrar solo las categorías cuyo precio medio 
        supera un valor determinado.
      </p>

    </article>

  </details>

</section>

<section className="section" id="funciones-agrupacion-having">
  <details>
    <summary>Ejemplo práctico: Calcular la media de precios y filtrar grupos con HAVING</summary>

    <article className="card">

      <h2>Ejemplo: Calcular la media de precios por sección y filtrar grupos con <code>HAVING</code></h2>

      <p>
        En este ejemplo queremos obtener la <strong>media del precio</strong> de los productos
        agrupados por <code>SECCIÓN</code>.  
        Sin embargo, no queremos ver todas las secciones, sino solo dos de ellas:
        <strong>DEPORTES</strong> y <strong>CONFECCIÓN</strong>.
      </p>

      <p>
        Para conseguirlo utilizamos <strong>GROUP BY</strong> para agrupar por sección y 
        <strong>HAVING</strong> para filtrar los grupos una vez creados.
      </p>

      <hr />

      <h3>🔎 ¿Qué hace exactamente esta consulta?</h3>

      <pre><code>
SELECT 
    SECCIÓN,
    AVG(PRECIO) AS MEDIA_ARTICULOS
FROM productos
GROUP BY SECCIÓN
HAVING SECCIÓN = 'DEPORTES'
    OR SECCIÓN = 'CONFECCIÓN'
ORDER BY MEDIA_ARTICULOS DESC;
      </code></pre>

      <p>
        La consulta sigue este proceso de izquierda a derecha y de arriba a abajo:
      </p>

      <ol className="lista-simple">
        <li><strong>SELECT</strong>: elegimos qué columnas queremos ver.</li>
        <li><strong>FROM</strong>: indicamos la tabla origen.</li>
        <li><strong>GROUP BY SECCIÓN</strong>: MySQL forma un “grupo” por cada sección distinta.</li>
        <li><strong>AVG(PRECIO)</strong>: calcula la media dentro de cada grupo.</li>
        <li><strong>HAVING</strong>: descarta los grupos que no sean DEPORTES o CONFECCIÓN.</li>
        <li><strong>ORDER BY</strong>: ordena los grupos resultantes.</li>
      </ol>

      <p>
        El resultado es una tabla resumen donde solo aparecen las secciones que hemos filtrado con HAVING.
      </p>

      <hr />

      <h3>📘 Diferencia fundamental entre WHERE y HAVING</h3>

      <div className="callout">
        <strong>WHERE</strong> → filtra filas **antes** del GROUP BY. <br />
        <strong>HAVING</strong> → filtra grupos **después** del GROUP BY.
      </div>

      <p>
        Esto significa que <strong>WHERE no puede usar funciones de agregación</strong>, pero HAVING sí.
      </p>

      <ul className="lista-simple">
        <li>✔ <code>HAVING AVG(precio) &gt; 50</code> → correcto</li>
        <li>❌ <code>WHERE AVG(precio) &gt; 50</code> → error</li>
      </ul>

      <hr />

      <h3>📝 Resultado esperado</h3>

      <p>Algo parecido a esto:</p>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>SECCIÓN</th>
              <th>MEDIA_ARTICULOS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DEPORTES</td>
              <td>103.50</td>
            </tr>
            <tr>
              <td>CONFECCIÓN</td>
              <td>72.40</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h3>⚠️ Errores frecuentes del alumnado</h3>

      <ul className="lista-simple">
        <li>Confundir <code>WHERE</code> con <code>HAVING</code>.</li>
        <li>Intentar poner <code>AVG()</code> dentro de <code>WHERE</code>.</li>
        <li>No agrupar correctamente por la columna indicada.</li>
        <li>Ordenar por un alias sin haberlo nombrado correctamente.</li>
      </ul>

      <div className="nota nota-importante">
        Consejo del profesor: cuando uses AVG, SUM, COUNT, MIN o MAX con GROUP BY,
        recuerda: <strong>si vas a filtrar, utiliza HAVING</strong>.
      </div>

      <hr />

      <h3>💡 Otro ejemplo alternativo (muy típico)</h3>

      <p>Mostrar solo las secciones cuya media de precio sea mayor de 50€:</p>

      <pre><code>
SELECT SECCIÓN, AVG(PRECIO) AS media
FROM productos
GROUP BY SECCIÓN
HAVING AVG(PRECIO) &gt; 50;
      </code></pre>

      <p>
        Aquí HAVING se usa para filtrar no por valores exactos, sino por un 
        <strong>cálculo agregado</strong>.
      </p>

      <hr />

      <h3>🎯 Mini-ejercicio final</h3>

      <p>
        Realiza estas consultas y comprueba tus resultados:
      </p>

      <ol className="lista-simple">
        <li>Muestra la suma del precio por sección y quédate solo con las secciones cuya suma supere 300€.</li>
        <li>Obtén el precio medio por sección, pero solo muestra las secciones cuyos nombres contengan la letra “A”.</li>
        <li>Muestra cuántos productos hay por sección, pero solo aquellas con más de 2 productos.</li>
      </ol>

      <p>
        Si puedes resolver estos ejercicios, ya dominas perfectamente GROUP BY + HAVING.
      </p>

    </article>
  </details>
</section>

{/* ============================CONSULTAS DE CALCULO============================ */}

<section className="section" id="consultas-calculo">

  <details>
    <summary>Funciones frecuentes en MySQL</summary>

    <article className="card">
      <h2>Funciones útiles y frecuentes en MySQL</h2>

      <p>
        MySQL incluye funciones muy prácticas para trabajar con fechas, números y textos.
        Estas funciones nos permiten obtener información adicional sin tener que procesar 
        los datos fuera de la base de datos.
      </p>

      <hr />

      {/* ============================
          NOW()
      ============================ */}
      <h3>⏱️ NOW(): fecha y hora actuales</h3>
      <p>Devuelve la <strong>fecha y hora actuales</strong> del servidor MySQL.</p>
      <div className="bloque-codigo">SELECT NOW();</div>

      <p>Muy útil para registrar cuándo se crea un pedido, usuario o registro.</p>

      <hr />

      {/* ============================
          DATEDIFF()
      ============================ */}
      <h3>📅 DATEDIFF(): diferencia entre dos fechas</h3>
      <p>Calcula cuántos <strong>días</strong> hay entre dos fechas.</p>

      <div className="bloque-codigo">
        SELECT DATEDIFF(NOW(), fecha_registro) AS dias_antiguedad<br />
        FROM clientes;
      </div>

      <p>Así obtenemos la antigüedad de cada cliente en días.</p>

      <hr />

      {/* ============================
          DATE_FORMAT()
      ============================ */}
      <h3>🗂️ DATE_FORMAT(): formatear fechas</h3>
      <p>Permite mostrar una fecha con el formato que queramos.</p>

      <div className="bloque-codigo">
        SELECT DATE_FORMAT(fecha_pedido, '%d/%m/%Y') AS fecha_legible<br />
        FROM pedidos;
      </div>

      <p>Perfecto para informes o pantallas donde queremos fechas claras y legibles.</p>

      <hr />

      {/* ============================
          CONCAT()
      ============================ */}
      <h3>🔤 CONCAT(): unir textos</h3>
      <p>Combina varios textos o columnas en uno solo.</p>

      <div className="bloque-codigo">
        SELECT CONCAT(nombre, ' - ', ciudad) AS cliente<br />
        FROM clientes;
      </div>

      <p>Útil para mostrar campos combinados (nombre + ciudad, nombre + categoría...).</p>

      <hr />

      {/* ============================
          UPPER() y LOWER()
      ============================ */}
      <h3>🔠 UPPER() / LOWER(): texto en mayúsculas o minúsculas</h3>
      <p>Transforman cadenas a mayúsculas o minúsculas.</p>

      <div className="bloque-codigo">
        SELECT UPPER(nombre) AS nombre_mayus, LOWER(ciudad) AS ciudad_minus<br />
        FROM clientes;
      </div>

      <p>Muy útil para búsquedas sin distinguir mayúsculas.</p>

      <hr />

      {/* ============================
          LENGTH()
      ============================ */}
      <h3>📏 LENGTH(): longitud de un texto</h3>
      <p>Devuelve cuántos caracteres tiene una cadena.</p>

      <div className="bloque-codigo">
        SELECT nombre, LENGTH(nombre) AS longitud<br />
        FROM clientes;
      </div>

      <p>Perfecto para validar longitudes o detectar datos incompletos.</p>

      <hr />

      {/* ============================
          IFNULL()
      ============================ */}
      <h3>❓ IFNULL(): reemplazar valores nulos</h3>
      <p>Permite mostrar un valor alternativo cuando una columna es NULL.</p>

      <div className="bloque-codigo">
        SELECT IFNULL(telefono, 'Sin teléfono') AS telefono_mostrado<br />
        FROM clientes;
      </div>

      <p>Muy usado en informes y pantallas de usuario.</p>

      <hr />

      {/* ============================
          ROUND()
      ============================ */}
      <h3>🎯 ROUND(): redondear números</h3>
      <p>Redondea un número al número de decimales indicado.</p>

      <div className="bloque-codigo">
        SELECT ROUND(AVG(precio), 2) AS precio_medio_redondeado<br />
        FROM productos;
      </div>

      <p>Ideal para informes financieros o precios.</p>

      <hr />

      {/* ============================
          TRUNCATE()
      ============================ */}
      <h3>✂️ TRUNCATE(): cortar decimales</h3>
      <p>Corta un número a un número de decimales sin redondear.</p>

      <div className="bloque-codigo">
        SELECT TRUNCATE(AVG(precio), 2) AS precio_truncado<br />
        FROM productos;
      </div>

      <p>A diferencia de <code>ROUND()</code>, no redondea sino que elimina decimales.</p>

    </article>
  </details>

</section>



        {/* SQL VISTAS */}
<section className="section" id="sql-vistas">
  <details>
    <summary>Crear y usar VISTAS en SQL</summary>

    <article className="card">

      <h3>Crear y usar VISTAS en SQL</h3>

      <p>
        Una <strong>vista</strong> es una consulta SQL guardada con un nombre.
        Funciona como si fuese una tabla, pero <strong>no almacena datos nuevos</strong>:
        simplemente muestra el resultado de una consulta cada vez que la usamos.
      </p>

      <div className="callout">
        <strong>Piensa en una vista como en una “ventana” a los datos</strong>.
        La información no se duplica, solo se presenta de forma más cómoda.
      </div>

      <h4>¿Para qué sirven las vistas?</h4>
      <ul>
        <li>Para <strong>simplificar consultas complejas</strong> que usamos a menudo.</li>
        <li>Para crear <strong>informes</strong> (por ejemplo, “valoraciones excelentes”).</li>
        <li>Para mejorar la <strong>legibilidad</strong> del código SQL.</li>
        <li>Para <strong>proteger datos sensibles</strong> (la vista muestra solo lo que queremos).</li>
        <li>Para que varias aplicaciones consulten los datos de forma unificada.</li>
      </ul>

      <h4>Ejemplo simple: crear una vista</h4>

      <p>Queremos mostrar solo las valoraciones con puntuación superior a 8:</p>

      <pre>
        <code>{`CREATE VIEW valoraciones_excelentes AS
SELECT
  id_usuario,
  id_pelicula,
  puntuacion,
  comentario
FROM valoraciones
WHERE puntuacion > 8;`}</code>
      </pre>

      <p>La consultamos igual que una tabla:</p>

      <pre>
        <code>{`SELECT * FROM valoraciones_excelentes;`}</code>
      </pre>

      <h4>Vistas con JOIN (más útiles en proyectos)</h4>

      <p>En nuestro catálogo de películas queremos ver información completa:</p>

      <ul>
        <li>nombre del usuario</li>
        <li>título de la película</li>
        <li>puntuación</li>
        <li>comentario</li>
      </ul>

      <p>Podemos crear una vista así:</p>

      <pre>
        <code>{`CREATE VIEW vista_valoraciones_detalladas AS
SELECT
  u.nombre AS usuario,
  p.titulo AS pelicula,
  v.puntuacion,
  v.comentario,
  v.fecha
FROM valoraciones v
JOIN usuarios u ON v.id_usuario = u.id_usuario
JOIN peliculas p ON v.id_pelicula = p.id_pelicula;`}</code>
      </pre>

      <p>Y consultarla:</p>

      <pre>
        <code>{`SELECT * FROM vista_valoraciones_detalladas
ORDER BY fecha DESC;`}</code>
      </pre>

      <h4>Actualizar o redefinir una vista</h4>

      <p>Para modificar una vista sin borrarla:</p>

      <pre>
        <code>{`CREATE OR REPLACE VIEW vista_valoraciones_detalladas AS
SELECT ...
;`}</code>
      </pre>

      <h4>Eliminar una vista</h4>

      <pre>
        <code>{`DROP VIEW valoraciones_excelentes;`}</code>
      </pre>

      <h4>¿Las vistas guardan datos?</h4>

      <p>
        <strong>No.</strong>  
        Las vistas <em>no almacenan copias</em>.
        Cada vez que consultas una vista, MySQL ejecuta la consulta original.
      </p>

      <div className="callout">
        <strong>Ventaja:</strong> siempre ves datos actualizados.<br />
        <strong>Inconveniente:</strong> vistas muy complejas pueden ser más lentas.
      </div>

      <h4>Buenas prácticas al crear vistas</h4>
      <ul>
        <li>Usar nombres claros (p. ej. <code>vista_ventas_mensuales</code>).</li>
        <li>Añadir alias descriptivos a las columnas.</li>
        <li>No incluir datos sensibles si la vista será pública.</li>
        <li>Evitar vistas demasiado grandes o muy complejas.</li>
        <li>Usar <code>CREATE OR REPLACE VIEW</code> para actualizar vistas.</li>
      </ul>

      <h4>Ejemplos en nuestro proyecto catalogopelis</h4>

      <p><strong>1. Películas con su actor y género:</strong></p>

      <pre>
        <code>{`CREATE VIEW vista_peliculas_detalle AS
SELECT
  p.id_pelicula,
  p.titulo,
  a.nombre AS actor_principal,
  g.nombre AS genero,
  p.anio_estreno
FROM peliculas p
JOIN actores a ON p.id_actor_principal = a.id_actor
JOIN generos g ON p.id_genero = g.id_genero;`}</code>
      </pre>

      <p><strong>2. Ranking de películas por puntuación media:</strong></p>

      <pre>
        <code>{`CREATE VIEW vista_ranking_peliculas AS
SELECT
  p.titulo,
  AVG(v.puntuacion) AS media,
  COUNT(*) AS total_valoraciones
FROM valoraciones v
JOIN peliculas p ON v.id_pelicula = p.id_pelicula
GROUP BY p.id_pelicula
ORDER BY media DESC;`}</code>
      </pre>

      <h4>Ejercicios recomendados</h4>

      <ul>
        <li>Crea una vista llamada <code>vista_valoraciones_recientes</code> con las valoraciones de los últimos 7 días.</li>
        <li>Crea una vista con todas las películas de un género concreto (acción, drama…).</li>
        <li>Crea una vista que muestre solo las valoraciones de un usuario concreto.</li>
      </ul>

      <p>Las vistas son una herramienta poderosa para simplificar SQL y crear informes profesionales.</p>

    </article>
  </details>
</section>



        
        {/* 6. U → UPDATE */}
<section className="section" id="crud-update">
  <details>
    <summary>U → UPDATE (modificar datos)</summary>

    <article className="card">
      <h3>6. U → UPDATE (modificar datos)</h3>

      {/* RECUADRO DE SINTAXIS */}
      <div className="callout">
        <strong>Sintaxis general de UPDATE:</strong>
        <pre><code>{`UPDATE nombre_tabla
SET columna1 = valor1,
    columna2 = valor2,
    ...
WHERE condicion;`}</code></pre>
        <p>
          UPDATE sirve para <strong>modificar filas existentes</strong>.  
          Siempre debe ir acompañado de <code>WHERE</code> para evitar 
          cambiar toda la tabla por accidente.
        </p>
      </div>

      <p>
        En el CRUD, la <strong>U de Update</strong> representa la modificación de uno o varios 
        registros. Podemos cambiar precios, nombres, stocks, categorías o cualquier otro valor.
      </p>

      <h3>6.1. Modificar una sola columna</h3>

      <p><strong>Ejemplo: cambiar el precio del producto con id = 1</strong></p>

      <pre>
        <code>{`UPDATE productos
SET precio = 39.99
WHERE id = 1;`}</code>
      </pre>

      <p>
        Esta consulta solo modifica el producto cuyo <strong>id sea 1</strong>.
      </p>

      <h3>6.2. Modificar varias columnas a la vez</h3>

      <p>
        Podemos actualizar varias columnas en la misma sentencia:
      </p>

      <pre>
        <code>{`UPDATE productos
SET precio = 59.99,
    stock = 25
WHERE id = 3;`}</code>
      </pre>

      <p>
        Muy útil cuando necesitamos actualizar varios datos relacionados.
      </p>

      <h3>6.3. Actualizar usando condiciones</h3>

      <p>
        Igual que en SELECT, podemos usar condiciones con <code>WHERE</code>:
      </p>

      <pre>
        <code>{`-- Subir precio a productos muy baratos
UPDATE productos
SET precio = 9.99
WHERE precio < 5;`}</code>
      </pre>

      <pre>
        <code>{`-- Aumentar stock a productos con poco inventario
UPDATE productos
SET stock = stock + 10
WHERE stock < 3;`}</code>
      </pre>

      <div className="callout">
        <strong>Tip profesional:</strong>
        <p>
          Podemos usar expresiones como <code>stock = stock + 10</code>, 
          <code>precio = precio * 1.10</code>, etc.  
          Muy útil para aplicar incrementos o descuentos.
        </p>
      </div>

      <h3>6.4. Actualizar claves foráneas (FK)</h3>

      <p>
        También podemos cambiar la categoría de un producto actualizando su 
        <code>categoria_id</code>.
      </p>

      <p><strong>Ejemplo: mover un producto a la categoría 2</strong></p>

      <pre>
        <code>{`UPDATE productos
SET categoria_id = 2
WHERE id = 5;`}</code>
      </pre>

      <p>
        Esto solo funcionará si la categoría 2 existe en la tabla
        <strong> categorias</strong>.
      </p>

      <h4>¿Qué pasa si asignamos una categoría que no existe?</h4>

      <pre>
        <code>{`UPDATE productos
SET categoria_id = 99
WHERE id = 5;`}</code>
      </pre>

      <div className="callout warning">
        ❌ <strong>Error:</strong> MariaDB no permite asignar claves foráneas que no existan 
        en la tabla padre.  
        Esto evita romper la integridad referencial.
      </div>

      <h3>6.5. UPDATE sin WHERE — el error mortal</h3>

      <p>
        Uno de los errores más graves que puede cometer un principiante es olvidar el 
        <code>WHERE</code>.
      </p>

      <pre>
        <code>{`UPDATE productos
SET precio = 1;   -- ❌ ERROR: actualiza TODA la tabla`}</code>
      </pre>

      <div className="callout warning">
        ❌ <strong>¡Nunca hagas un UPDATE sin WHERE!</strong>  
        Cambiarías todos los registros y es muy difícil de deshacer sin copia de seguridad.
      </div>

      <h3>6.6. Actualizar con alias</h3>

      <p>
        Aunque es menos habitual, podemos usar alias cuando la consulta es más compleja.
      </p>

      <pre>
        <code>{`UPDATE productos p
SET p.stock = p.stock + 5
WHERE p.categoria_id = 1;`}</code>
      </pre>

      <h3>6.7. Orden mental para entender UPDATE</h3>

      <pre>
        <code>{`1) FROM (implícito en la tabla a actualizar)
2) WHERE → qué filas se seleccionan
3) SET → qué valores se aplican a esas filas`}</code>
      </pre>

      <h3>6.8. Ejemplos prácticos</h3>

      <p><strong>Aumentar el stock de los productos de la categoría 1</strong></p>
      <pre>
        <code>{`UPDATE productos
SET stock = stock + 5
WHERE categoria_id = 1;`}</code>
      </pre>

      <p><strong>Aplicar un descuento del 10% en productos caros</strong></p>
      <pre>
        <code>{`UPDATE productos
SET precio = precio * 0.90
WHERE precio > 50;`}</code>
      </pre>

      <p><strong>Poner stock a 0 en productos descatalogados</strong></p>
      <pre>
        <code>{`UPDATE productos
SET stock = 0
WHERE activo = 0;`}</code>
      </pre>

      <h3>6.9. Ejercicios recomendados</h3>

      <ul>
        <li>Modifica el precio del producto con id 3.</li>
        <li>Aumenta en 5 unidades el stock de los productos con stock menor de 3.</li>
        <li>Cambia la categoría del producto con id 2 a la categoría 1.</li>
        <li>Aplica un incremento del 20% a los productos con precio inferior a 10€.</li>
        <li>Establece el stock a 0 para todos los productos de la categoría 3.</li>
        <li>Actualiza dos columnas a la vez (precio + stock) de un producto concreto.</li>
      </ul>

      <p>
        Ya dominamos UPDATE.  
        El siguiente paso del CRUD es aprender a <strong>eliminar registros con DELETE</strong>.
      </p>

    </article>
  </details>
</section>

        
      {/* 7. D → DELETE */}
<section className="section" id="crud-delete">
  <details>
    <summary>D → DELETE (eliminar datos)</summary>

    <article className="card">
      <h3>7. D → DELETE (eliminar datos)</h3>

      {/* RECUADRO DE SINTAXIS */}
      <div className="callout">
        <strong>Sintaxis general de DELETE:</strong>
        <pre><code>{`DELETE FROM nombre_tabla
WHERE condicion;`}</code></pre>
        <p>
          DELETE se usa para <strong>eliminar filas</strong> de una tabla.  
          Igual que en UPDATE, el uso de <code>WHERE</code> es obligatorio para 
          evitar borrar toda la tabla.
        </p>
      </div>

      <p>
        En el CRUD, la <strong>D de Delete</strong> representa la eliminación.  
        Puede ser un borrado físico (DELETE real) o un borrado lógico (marcar como inactivo).
      </p>

      <h3>7.1. Eliminar un registro concreto</h3>

      <p><strong>Ejemplo: eliminar el producto con id = 4</strong></p>

      <pre>
        <code>{`DELETE FROM productos
WHERE id = 4;`}</code>
      </pre>

      <p>
        Esta consulta elimina solo la fila cuyo id sea 4.
      </p>

      <h3>7.2. Eliminar usando condiciones</h3>

      <p>
        Igual que en WHERE, podemos usar condiciones para borrar varias filas.
      </p>

      <pre>
        <code>{`-- Eliminar productos sin stock
DELETE FROM productos
WHERE stock = 0;`}</code>
      </pre>

      <pre>
        <code>{`-- Eliminar productos muy baratos
DELETE FROM productos
WHERE precio < 5;`}</code>
      </pre>

      <div className="callout warning">
        ⚠ <strong>Advertencia:</strong>  
        DELETE no se puede deshacer a menos que tengas copia de seguridad.
      </div>

      <h3>7.3. DELETE sin WHERE — el peor error posible</h3>

      <pre>
        <code>{`DELETE FROM productos;   -- ❌ ERROR: borra TODA la tabla`}</code>
      </pre>

      <div className="callout warning">
        ❌ <strong>Nunca uses DELETE sin WHERE.</strong><br />
        Esto elimina absolutamente todas las filas.  
        Un error muy común entre principiantes.  
        Enseña a tu alumnado a revisarlo dos veces antes de ejecutar.
      </div>

      <h3>7.4. Eliminar registros relacionados (problemas con FK)</h3>

      <p>
        Si intentamos borrar una categoría que tiene productos asociados, MariaDB no nos dejará:
      </p>

      <pre>
        <code>{`DELETE FROM categorias
WHERE id = 1;`}</code>
      </pre>

      <div className="callout warning">
        ❌ <strong>Error:</strong> existen productos que dependen de esta categoría.  
        La <strong>integridad referencial</strong> protege la base de datos.
      </div>

      <h4>¿Cómo solucionarlo?</h4>

      <ul>
        <li>Borrando o reasignando primero los productos de esa categoría</li>
        <li>O usando ON DELETE CASCADE (solo si el modelo lo permite)</li>
      </ul>

      <h4>Ejemplo con CASCADE:</h4>

      <pre>
        <code>{`FOREIGN KEY (categoria_id)
  REFERENCES categorias(id)
  ON DELETE CASCADE;`}</code>
      </pre>

      <p>
        Así, al borrar una categoría, se borran automáticamente sus productos.
      </p>

      <div className="callout">
        <strong>Regla práctica:</strong>  
        <p>
          Usa CASCADE solo cuando ese comportamiento tenga sentido en tu aplicación.  
          En una tienda real, borrar una categoría no debería borrar cientos de productos sin control.
        </p>
      </div>

      <h3>7.5. Borrado lógico (la alternativa profesional)</h3>

      <p>
        En la mayoría de aplicaciones reales NO se borra información de forma definitiva.  
        En su lugar, se marca como “inactivo”.
      </p>

      <p>
        Para ello añadimos a la tabla una columna:
      </p>

      <pre>
        <code>{`activo TINYINT(1) DEFAULT 1`}</code>
      </pre>

      <h4>Marcar un producto como desactivado:</h4>

      <pre>
        <code>{`UPDATE productos
SET activo = 0
WHERE id = 3;`}</code>
      </pre>

      <h4>Listar solo los productos activos:</h4>

      <pre>
        <code>{`SELECT * 
FROM productos
WHERE activo = 1;`}</code>
      </pre>

      <div className="callout">
        <strong>Ventajas del borrado lógico:</strong>
        <ul>
          <li>No se pierden datos históricos</li>
          <li>Evita romper relaciones con claves foráneas</li>
          <li>Permite restaurar registros</li>
          <li>Es el enfoque estándar en aplicaciones en producción</li>
        </ul>
      </div>

      <h3>7.6. Orden mental al leer un DELETE</h3>

      <pre>
        <code>{`1) FROM → qué tabla se va a modificar
2) WHERE → qué filas serán eliminadas
3) (Opcional) CASCADE → borrar registros hijos`}</code>
      </pre>

      <h3>7.7. Ejemplos prácticos</h3>

      <p><strong>Eliminar productos sin stock:</strong></p>
      <pre>
        <code>{`DELETE FROM productos
WHERE stock = 0;`}</code>
      </pre>

      <p><strong>Eliminar productos muy baratos:</strong></p>
      <pre>
        <code>{`DELETE FROM productos
WHERE precio < 5;`}</code>
      </pre>

      <p><strong>Eliminar productos de una categoría concreta:</strong></p>
      <pre>
        <code>{`DELETE FROM productos
WHERE categoria_id = 3;`}</code>
      </pre>

      <p><strong>Eliminar una categoría que ya no tiene productos:</strong></p>
      <pre>
        <code>{`DELETE FROM categorias
WHERE id = 4;`}</code>
      </pre>

      <h3>7.8. Ejercicios recomendados</h3>

      <ul>
        <li>Elimina el producto con id = 2.</li>
        <li>Borra los productos con precio inferior a 10€.</li>
        <li>Borra los productos sin stock.</li>
        <li>Borra las categorías que no tengan productos asociados.</li>
        <li>Implementa borrado lógico y marca un producto como inactivo.</li>
      </ul>

      <p>
        Con DELETE completamos el CRUD.  
        Ahora ya podemos crear, leer, modificar y eliminar datos en SQL.
        El siguiente paso del bloque es uno de los más importantes:
        <strong> unir tablas con JOIN</strong>.
      </p>
    </article>
  </details>
</section>

       

       

        
       {/* 10. JOIN Y RELACIONES ENTRE TABLAS */}
<section className="section" id="joins">
  <details>
    <summary>Relaciones entre tablas y JOIN</summary>

    <article className="card">

      <h3>10. Relaciones entre tablas y JOIN</h3>

      <div className="callout">
        <strong>Idea clave:</strong>
        <p>
          <code>JOIN</code> sirve para <strong>unir datos que están en tablas distintas</strong>.
          Es la herramienta principal para trabajar con modelos relacionales.
        </p>
      </div>

      <p>
        Hasta ahora hemos trabajado con una sola tabla cada vez.  
        Pero en un modelo relacional, los datos se reparten en varias tablas:
      </p>

      <ul>
        <li><strong>categorias</strong> → información general</li>
        <li><strong>productos</strong> → cada producto pertenece a una categoría</li>
      </ul>

      <p>
        Para ver el nombre del producto junto con el nombre de su categoría, necesitamos combinarlas.
        Ahí es donde entra <strong>JOIN</strong>.
      </p>

      <h3>10.1. Cómo pensar un JOIN (orden mental)</h3>

      <pre>
        <code>{`1) FROM → tabla principal
2) JOIN → tabla relacionada
3) ON → condición que une ambas tablas
4) SELECT → qué columnas queremos mostrar`}</code>
      </pre>

      <p>
        Este orden mental te permitirá entender cualquier JOIN, por complejo que sea.
      </p>

      <h3>10.2. INNER JOIN — solo los registros relacionados</h3>

      <p>
        INNER JOIN devuelve solo las filas que tienen coincidencia en ambas tablas.
      </p>

      <h4>Ejemplo clásico: productos con su categoría</h4>

      <pre>
        <code>{`SELECT p.nombre AS producto,
       p.precio,
       c.nombre AS categoria
FROM productos p
INNER JOIN categorias c
       ON p.categoria_id = c.id;`}</code>
      </pre>

      <ul>
        <li><code>p</code> es un alias para productos</li>
        <li><code>c</code> es un alias para categorias</li>
        <li>Solo se muestran los productos que tienen una categoría válida</li>
      </ul>

      <div className="callout">
        <strong>Recuerda:</strong>  
        INNER JOIN excluye:
        <ul>
          <li>productos sin categoría</li>
          <li>categorías sin productos</li>
        </ul>
      </div>

      <h3>10.3. LEFT JOIN — todos los registros de la tabla izquierda</h3>

      <p>
        LEFT JOIN devuelve:
      </p>

      <ul>
        <li>todas las filas de la tabla de la izquierda (la del FROM)</li>
        <li>y la información relacionada si existe</li>
      </ul>

      <p>
        Si no existe coincidencia, los valores de la tabla derecha aparecen como <strong>NULL</strong>.
      </p>

      <h4>Ejemplo: todos los productos, tengan o no categoría</h4>

      <pre>
        <code>{`SELECT p.nombre,
       p.precio,
       c.nombre AS categoria
FROM productos p
LEFT JOIN categorias c
       ON p.categoria_id = c.id;`}</code>
      </pre>

      <p>Muy útil para detectar productos huérfanos o mal asignados.</p>

      <h3>10.4. RIGHT JOIN — poco usado, pero útil en algunos casos</h3>

      <p>
        RIGHT JOIN es como LEFT JOIN, pero tomando como referencia la tabla derecha.
      </p>

      <p>
        Muestra:
      </p>

      <ul>
        <li>todas las filas de la tabla derecha</li>
        <li>y lo relacionado de la izquierda</li>
      </ul>

      <h4>Ejemplo: mostrar categorías aunque no tengan productos</h4>

      <pre>
        <code>{`SELECT p.nombre AS producto,
       c.nombre AS categoria
FROM productos p
RIGHT JOIN categorias c
       ON p.categoria_id = c.id;`}</code>
      </pre>

      <p>
        Esto puede ser útil para revisar categorías vacías.
      </p>

      <h3>10.5. JOIN de varias tablas</h3>

      <p>
        Podemos unir más de dos tablas encadenando JOIN.
      </p>

      <p>
        Ejemplo imaginario: productos → categorías → proveedores.
      </p>

      <pre>
        <code>{`SELECT p.nombre,
       c.nombre AS categoria,
       prov.nombre AS proveedor
FROM productos p
JOIN categorias c ON p.categoria_id = c.id
JOIN proveedores prov ON p.proveedor_id = prov.id;`}</code>
      </pre>

      <h3>10.6. Condiciones adicionales en un JOIN</h3>

      <p>
        Podemos combinar JOIN con WHERE:
      </p>

      <pre>
        <code>{`SELECT p.nombre, p.precio, c.nombre AS categoria
FROM productos p
JOIN categorias c ON p.categoria_id = c.id
WHERE p.precio > 20;`}</code>
      </pre>

      <h3>10.7. Errores típicos con JOIN</h3>

      <ul>
        <li>
          ❌ Confundir la condición del JOIN (ON) con la del filtro (WHERE).
        </li>

        <li>
          ❌ Usar INNER JOIN y esperar ver datos sin relación.
        </li>

        <li>
          ❌ No usar alias y crear consultas difíciles de leer.
        </li>

        <li>
          ❌ No relacionar las tablas con la PK–FK correcta.
        </li>
      </ul>

      <h3>10.8. Ejemplos prácticos</h3>

      <p><strong>Productos y su categoría (INNER JOIN):</strong></p>
      <pre>
        <code>{`SELECT p.nombre, c.nombre AS categoria
FROM productos p
JOIN categorias c ON p.categoria_id = c.id;`}</code>
      </pre>

      <p><strong>Todos los productos, aunque no tengan categoría (LEFT JOIN):</strong></p>
      <pre>
        <code>{`SELECT p.nombre, c.nombre AS categoria
FROM productos p
LEFT JOIN categorias c ON p.categoria_id = c.id;`}</code>
      </pre>

      <p><strong>Categorías aunque no tengan productos (RIGHT JOIN):</strong></p>
      <pre>
        <code>{`SELECT c.nombre AS categoria, p.nombre AS producto
FROM productos p
RIGHT JOIN categorias c ON p.categoria_id = c.id;`}</code>
      </pre>

      <h3>10.9. Ejercicios recomendados</h3>

      <ul>
        <li>Muestra todos los productos con su categoría usando INNER JOIN.</li>
        <li>Muestra todos los productos aunque no tengan categoría (LEFT JOIN).</li>
        <li>Muestra todas las categorías y sus productos aunque algunas estén vacías (RIGHT JOIN).</li>
        <li>Lista productos cuyo precio sea mayor de 30€ junto con el nombre de la categoría.</li>
        <li>Crea un JOIN de tres tablas imaginando un nuevo modelo (productos–categorías–proveedores).</li>
      </ul>

      <p>
        Con JOIN ya puedes trabajar con modelos completos y ver información combinada 
        de forma profesional.  
        A partir de aquí, pasaremos a 
        <strong>buenas prácticas</strong> y luego a 
        <strong>actividades finales del bloque</strong>.
      </p>

    </article>
  </details>
</section>
<section className="section" id="relaciones">
  <details>
    <summary>Comprobar que las tablas están bien relacionadas</summary>

    <article className="card">
      <h2>Cómo comprobar que nuestras tablas están bien relacionadas</h2>

      <p>
        Una vez creadas las tablas <strong>clientes</strong>, 
        <strong>pedidos</strong>, <strong>productos</strong> y 
        <strong>pedidos_productos</strong>, es fundamental asegurarnos de que 
        las claves foráneas funcionan correctamente. Para ello, realizamos una 
        serie de <strong>consultas de comprobación</strong> que nos permiten ver 
        si los datos viajan entre tablas como deberían.
      </p>

      <hr />

      <h3>1️⃣ Ver pedidos junto con el cliente asociado</h3>
      <p>
        Esta consulta muestra cada pedido acompañado del nombre y email del 
        cliente. Si aparece correctamente, significa que la foreign key 
        <code>pedidos.cliente_id → clientes.id</code> está funcionando.
      </p>

      <pre className="bloque-codigo">
        <code>{`SELECT p.id AS id_pedido, p.fecha, p.estado,
       c.nombre AS cliente, c.email
FROM pedidos AS p
JOIN clientes AS c
     ON p.cliente_id = c.id;`}</code>
      </pre>

      <h3>2️⃣ Ver el detalle completo de cada pedido</h3>
      <p>
        Esta consulta une las cuatro tablas y te permite comprobar que cada 
        línea de pedido apunta correctamente al producto y al pedido 
        correspondientes.
      </p>

      <pre className="bloque-codigo">
        <code>{`SELECT p.id AS pedido,
       c.nombre AS cliente,
       pr.nombre AS producto,
       pp.cantidad,
       pr.precio,
       (pp.cantidad * pr.precio) AS total_linea
FROM pedidos_productos AS pp
JOIN pedidos AS p
     ON pp.pedido_id = p.id
JOIN clientes AS c
     ON p.cliente_id = c.id
JOIN productos AS pr
     ON pp.producto_id = pr.id;`}</code>
      </pre>

      <h3>3️⃣ Detectar pedidos sin productos</h3>
      <p>
        Útil para confirmar que no hemos creado pedidos "vacíos". No es un error 
        de relación, pero ayuda a revisar integridad.
      </p>

      <pre className="bloque-codigo">
        <code>{`SELECT p.id, p.fecha, c.nombre AS cliente
FROM pedidos AS p
LEFT JOIN pedidos_productos AS pp
       ON p.id = pp.pedido_id
JOIN clientes AS c
     ON p.cliente_id = c.id
WHERE pp.id IS NULL;`}</code>
      </pre>

      <h3>4️⃣ Detectar líneas de pedido sin producto</h3>
      <p>
        Si esta consulta devuelve filas, significa que existe algún 
        <strong>producto_id</strong> que no coincide con ningún producto real.
      </p>

      <pre className="bloque-codigo">
        <code>{`SELECT pp.*
FROM pedidos_productos AS pp
LEFT JOIN productos AS pr
       ON pp.producto_id = pr.id
WHERE pr.id IS NULL;`}</code>
      </pre>

      <h3>5️⃣ BONUS — Probar que la foreign key funciona</h3>
      <p>
        Intenta insertar un pedido con un <strong>cliente inexistente</strong>. 
        Si todo está bien, MySQL mostrará un error y no permitirá la inserción.
      </p>

      <pre className="bloque-codigo">
        <code>{`INSERT INTO pedidos (cliente_id, estado)
VALUES (9999, 'pendiente');`}</code>
      </pre>

      <div className="callout">
        <p>
          <strong>Si MySQL te muestra un error de integridad referencial</strong>,
          significa que las claves foráneas están activas y funcionando 
          correctamente. ¡Es exactamente lo que queremos!
        </p>
      </div>

    </article>
  </details>
</section>


<section className="section" id="indice">
  <details>
    <summary> ¿Qué son los índices (INDEX) en MySQL?</summary>

    <article className="card">

      <h2>¿Qué es un índice en MySQL?</h2>

      <p>
        Un <strong>índice</strong> es una estructura que MySQL crea para
        <strong>acelerar la búsqueda de datos</strong> dentro de una tabla.
        Funciona igual que el índice de un libro: en lugar de revisar todas
        las páginas, vas directamente a la que necesitas.
      </p>

      <div className="callout">
        Sin índice → búsqueda lenta (MySQL revisa fila por fila). <br />
        Con índice → búsqueda rápida (MySQL va directo a los datos).
      </div>

      <hr />

      <h3>¿Para qué sirven los índices?</h3>

      <ul className="lista-simple">
        <li>Para que <strong>WHERE</strong> sea más rápido.</li>
        <li>Para optimizar <strong>JOIN</strong> entre tablas.</li>
        <li>Para acelerar <strong>ORDER BY</strong> y <strong>GROUP BY</strong>.</li>
        <li>Para evitar duplicados con <strong>UNIQUE</strong>.</li>
      </ul>

      <p>
        Los índices NO cambian los datos de la tabla, solo mejoran 
        <strong>la velocidad de acceso</strong>.
      </p>

      <hr />

      <h3>Tipos principales de índices</h3>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>¿Qué hace?</th>
              <th>Ejemplo típico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>PRIMARY KEY</strong></td>
              <td>Identifica de forma única la fila. Es un índice obligatorio.</td>
              <td><code>id_cliente</code></td>
            </tr>

            <tr>
              <td><strong>UNIQUE</strong></td>
              <td>Evita duplicados. También acelera búsquedas.</td>
              <td><code>dni</code>, <code>email</code></td>
            </tr>

            <tr>
              <td><strong>INDEX</strong></td>
              <td>Acelera búsquedas en columnas muy consultadas.</td>
              <td><code>ciudad</code>, <code>categoria</code></td>
            </tr>

            <tr>
              <td><strong>FOREIGN KEY</strong></td>
              <td>No es un índice como tal, pero MySQL crea uno automáticamente para hacer los JOIN más rápidos.</td>
              <td><code>id_cliente</code> en <code>pedidos</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h3>¿Cuándo es útil crear un índice?</h3>

      <ul className="lista-simple">
        <li>Cuando una columna se usa mucho en <strong>WHERE</strong>.</li>
        <li>Cuando se usa frecuentemente en <strong>JOIN</strong>.</li>
        <li>Cuando ordenamos muchas veces por esa columna (<code>ORDER BY</code>).</li>
        <li>Cuando necesitamos evitar duplicados (UNIQUE).</li>
      </ul>

      <h4>Ejemplos del proyecto <code>bazar</code>:</h4>
      <ul className="lista-simple">
        <li><code>dni</code> → ideal para un índice UNIQUE.</li>
        <li><code>id_cliente</code> en <code>pedidos</code> → índice automático por foreign key.</li>
        <li><code>categoria</code> en <code>productos</code> → índice útil para búsquedas frecuentes.</li>
      </ul>

      <hr />

      <h3>Sintaxis básica de creación</h3>

      <pre><code>
-- Índice normal
CREATE INDEX idx_categoria ON productos(categoria);

-- Índice único (no permite duplicados)
CREATE UNIQUE INDEX idx_dni ON clientes(dni);
      </code></pre>

      <hr />

      <h3>¿Cuándo NO debes usar índices?</h3>

      <ul className="lista-simple">
        <li>En columnas con valores muy repetidos (ej.: "Sevilla").</li>
        <li>En tablas pequeñas (no aporta nada).</li>
        <li>En columnas que cambian constantemente (muchos INSERT/UPDATE).</li>
      </ul>

      <div className="nota nota-importante">
        Los índices mejoran la velocidad de lectura, pero pueden ralentizar 
        la escritura (INSERT/UPDATE) si se abusa de ellos.
      </div>

      <hr />

      <h3>Conclusión</h3>

      <p>
        Los índices son una herramienta clave para optimizar consultas en MySQL.
        Ten en cuenta:
      </p>

      <ul className="lista-simple">
        <li>Que hacen que las búsquedas sean más rápidas.</li>
        <li>Que PRIMARY KEY y UNIQUE son índices especiales.</li>
        <li>Que ayudan mucho al trabajar con relaciones (JOIN).</li>
      </ul>

      

    </article>
  </details>
</section>


{/*  X. PROCEDIMIENTOS ALMACENADOS  */}
<section className="section" id="procedures">
  <details>
    <summary>Procedimientos almacenados (PROCEDURE)</summary>

    <article className="card">
      <h2>Procedimientos almacenados</h2>

      <p>
        Un <strong>procedimiento almacenado</strong> (o <strong>PROCEDURE</strong>) es un conjunto de 
        instrucciones SQL que guardamos dentro de la base de datos para poder ejecutarlas 
        cuando queramos con un simple <code className="etiqueta-codigo">CALL</code>.
      </p>

      <p>
        Es como crear una <strong>“función” reutilizable</strong> dentro de MySQL: 
        en lugar de escribir siempre las mismas sentencias, las definimos una vez 
        y luego solo las llamamos.
      </p>

      <div className="cuadro-didactico">
        <h4>¿Para qué usamos un PROCEDURE?</h4>
        <div className="cuadro-didactico__grid">
          <div className="cuadro-didactico__item">
            <h5>Reutilizar código</h5>
            <p>Guardamos consultas habituales (informes, listados…) para no repetirlas.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Agrupar pasos</h5>
            <p>Podemos ejecutar varias sentencias (INSERT, UPDATE, DELETE…) de una vez.</p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Evitar errores</h5>
            <p>
              Si siempre usamos el mismo procedimiento, reducimos fallos de copiar/pegar 
              o escribir mal la consulta.
            </p>
          </div>
          <div className="cuadro-didactico__item">
            <h5>Seguridad</h5>
            <p>
              Podemos dar permisos para ejecutar el procedimiento sin mostrar toda la lógica interna.
            </p>
          </div>
        </div>

        <div className="cuadro-didactico__nota">
          En resumen: un <strong>PROCEDURE</strong> nos ayuda a <strong>organizar</strong> mejor 
          la lógica de la base de datos y a trabajar de forma más profesional.
        </div>
      </div>

      <h3>📌 Sintaxis básica</h3>

      <p>
        La forma más sencilla de crear un procedimiento en MySQL es:
      </p>

      <pre className="bloque-codigo">
        <code>{`DELIMITER $$

CREATE PROCEDURE nombre_del_procedure()
BEGIN
  -- aquí escribimos las sentencias SQL
  SELECT 'Hola desde un procedure';
END $$

DELIMITER ;`}</code>
      </pre>

      <p>
        Y para ejecutarlo:
      </p>

      <pre className="bloque-codigo">
        <code>{`CALL nombre_del_procedure();`}</code>
      </pre>

      <div className="callout">
        <strong>¿Por qué cambiamos el DELIMITER?</strong><br />
        MySQL normalmente termina las sentencias con <code>;</code>.  
        Como dentro del <code>BEGIN ... END</code> vamos a usar muchos 
        <code>;</code>, necesitamos decirle al cliente de MySQL 
        (phpMyAdmin, consola…) que <strong>temporalmente</strong> 
        use otro terminador, por ejemplo <code>$$</code>.  
        Después de crear el procedimiento volvemos a poner 
        <code>DELIMITER ;</code>.
      </div>

      <h3>🧪 Ejemplo: listar todos los clientes</h3>

      <p>
        Imagina que en nuestra base de datos <strong>bazar</strong> tenemos una tabla 
        <code className="etiqueta-codigo">clientes</code>. Vamos a crear un procedimiento que 
        muestre todos los clientes:
      </p>

      <pre className="bloque-codigo">
        <code>{`DELIMITER $$

CREATE PROCEDURE listar_clientes()
BEGIN
  SELECT id, nombre, email
  FROM clientes
  ORDER BY nombre;
END $$

DELIMITER ;`}</code>
      </pre>

      <p>
        Para usarlo, simplemente llamamos:
      </p>

      <pre className="bloque-codigo">
        <code>{`CALL listar_clientes();`}</code>
      </pre>

      <h3>🎯 Procedimientos con parámetros (entradas)</h3>

      <p>
        Podemos crear procedimientos que reciban <strong>parámetros de entrada</strong>.  
        Por ejemplo, listar solo los pedidos de un cliente concreto:
      </p>

      <pre className="bloque-codigo">
        <code>{`DELIMITER $$

CREATE PROCEDURE pedidos_por_cliente(IN p_id_cliente INT)
BEGIN
  SELECT id_pedido, fecha, total
  FROM pedidos
  WHERE id_cliente = p_id_cliente
  ORDER BY fecha DESC;
END $$

DELIMITER ;`}</code>
      </pre>

      <p>
        Y lo ejecutamos pasando el valor del parámetro:
      </p>

      <pre className="bloque-codigo">
        <code>{`CALL pedidos_por_cliente(3);  -- mostrará los pedidos del cliente con id = 3`}</code>
      </pre>

      <div className="callout-bonus">
        <strong>Tipos de parámetros</strong><br />
        En MySQL podemos usar:
        <ul className="lista-simple">
          <li>
            <code className="etiqueta-codigo">IN</code>: valor de entrada (el más habitual para principiantes).
          </li>
          <li>
            <code className="etiqueta-codigo">OUT</code>: el procedimiento devuelve un valor a una variable.
          </li>
          <li>
            <code className="etiqueta-codigo">INOUT</code>: entra un valor y puede salir modificado.
          </li>
        </ul>
        Para empezar, nos centraremos en <strong>IN</strong>, que es el más sencillo.
      </div>

      <h3>✅ Cuándo tiene sentido usar PROCEDURES</h3>

      <ul className="lista-simple">
        <li>Cuando una consulta es <strong>larga</strong> o mezcla varias operaciones.</li>
        <li>Cuando vamos a usar la misma lógica <strong>muchas veces</strong>.</li>
        <li>Cuando queremos que varios programas (por ejemplo, una app en React, otra en Java…) usen la misma lógica en la base de datos.</li>
      </ul>

      <p className="nota nota-importante">
        No hace falta dominar todos los detalles desde el primer día.  
        Lo importante es entender la idea: <strong>un PROCEDURE es un “programita” de SQL 
        guardado en el servidor</strong> que podemos llamar cuando lo necesitemos.
      </p>
    </article>
  </details>
</section>
{/*  X. GESTIONAR PERMISOS: ADMIN VS CLIENTE  */}
<section className="section" id="permisos">
  <details>
    <summary>Gestionar permisos según el rol (admin / cliente)</summary>

    <article className="card">
      <h2>Permisos de usuarios: admin vs cliente</h2>

      <p>
        En la mayoría de proyectos vamos a tener <strong>tipos de usuarios</strong> diferentes.
        Por ejemplo:
      </p>

      <ul className="lista-simple">
        <li><strong>Administrador (admin)</strong>: puede gestionar productos, usuarios, pedidos, etc.</li>
        <li><strong>Cliente</strong>: puede ver productos, hacer pedidos, consultar su perfil…</li>
      </ul>

      <p>
        La idea es sencilla: todos se <strong>conectan por el mismo login</strong>, pero según el 
        <strong>rol</strong> que tenga el usuario se verán unas opciones u otras, tanto en el 
        <strong>front</strong> como en el <strong>backend</strong>.
      </p>

      <div className="callout-bonus">
        <h3>🎯 Pasos clave (visión general)</h3>
        <ol className="lista-simple">
          <li>Guardar el <strong>rol</strong> del usuario en la base de datos (admin / cliente).</li>
          <li>
            En el <strong>login</strong>, si el usuario y contraseña son correctos, el backend 
            devuelve también su rol.
          </li>
          <li>
            El <strong>frontend</strong> guarda el usuario, su token y su rol (por ejemplo, en un 
            <code className="etiqueta-codigo">AuthContext</code>).
          </li>
          <li>
            Los componentes del front muestran <strong>opciones distintas</strong> dependiendo del rol.
          </li>
          <li>
            El backend también comprueba el rol para proteger las rutas sensibles (por ejemplo, 
            solo admin puede borrar productos).
          </li>
        </ol>
      </div>

      <h3>1️⃣ Base de datos: guardar el rol del usuario</h3>

      <p>
        En la tabla <code className="etiqueta-codigo">usuarios</code> añadimos una columna que indique 
        el tipo de usuario:
      </p>

      <pre className="bloque-codigo">
        <code>{`CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  rol ENUM('admin', 'cliente') NOT NULL DEFAULT 'cliente'
);`}</code>
      </pre>

      <p>
        De esta forma, podemos tener usuarios con <code>rol = 'admin'</code> y otros con 
        <code>rol = 'cliente'</code>.
      </p>

      <h3>2️⃣ Backend: login que devuelve el rol</h3>

      <p>
        Cuando el usuario hace login, el backend:
      </p>

      <ol className="lista-simple">
        <li>Busca el email en la tabla <code>usuarios</code>.</li>
        <li>Comprueba la contraseña.</li>
        <li>Si es correcta, devuelve un <strong>token</strong> y los datos básicos del usuario, 
        incluyendo el <strong>rol</strong>.</li>
      </ol>

      <pre className="bloque-codigo">
        <code>{`// Ejemplo de respuesta del backend al hacer login
{
  "token": "abc.def.ghi",
  "user": {
    "id": 7,
    "nombre": "María",
    "rol": "admin"
  }
}`}</code>
      </pre>

      <p>
        Si usas JWT, el rol suele ir <strong>dentro del token</strong> también, para poder 
        comprobarlo en los middlewares del backend.
      </p>

      <h3>3️⃣ Frontend: guardar usuario + token + rol</h3>

      <p>
        En el frontend podemos usar un <strong>AuthContext</strong> (o un estado global parecido) 
        donde guardamos:
      </p>

      <ul className="lista-simple">
        <li>Si el usuario está logueado (<code>isLogged</code>).</li>
        <li>El <strong>token</strong>.</li>
        <li>Los datos del usuario: <code>id</code>, <code>nombre</code>, <code>rol</code>…</li>
      </ul>

      <p>
  Lo importante para el tema de permisos es que <strong>user.rol</strong> esté disponible 
  en toda la app. Esto lo podemos conseguir 
  <strong>guardando el usuario y su rol dentro del AuthContext</strong>, de manera que cualquier
  componente (menú, rutas protegidas, botones, paneles de administración…) pueda leer ese valor
  y decidir qué mostrar.  
  Gracias a este contexto global, no necesitamos pasar el rol por props ni repetir código:
  cualquier parte de la aplicación puede acceder a <code>user.rol</code> usando 
  <code>useContext(AuthContext)</code>.
</p>
<p>
  <strong>AuthContext</strong> es un mecanismo nativo de React que nos permite compartir la 
  información del usuario (si está logueado, su token y su rol) en toda la aplicación sin 
  necesidad de pasar props de un componente a otro. Funciona como un “estado global” que todos 
  los componentes pueden consultar, lo que facilita mostrar diferentes opciones según sea un 
  <em>admin</em> o un <em>cliente</em>, y gestionar la autenticación de forma centralizada.
</p>


      <h3>4️⃣ Mostrar opciones distintas según el rol</h3>

      <p>
        Ahora ya podemos hacer algo muy potente: que el menú, la barra de navegación o ciertas 
        páginas cambien dependiendo de si el usuario es <strong>admin</strong> o 
        <strong>cliente</strong>.
      </p>

      <pre className="bloque-codigo">
        <code>{`function NavBar() {
  const { user, isLogged, logout } = React.useContext(AuthContext);

  return (
    <nav className="navbar">
      <span className="navbar__brand">Mi Bazar</span>

      {!isLogged && (
        <ul className="navbar__links">
          <li><a href="/login">Iniciar sesión</a></li>
          <li><a href="/registro">Registrarme</a></li>
        </ul>
      )}

      {isLogged && (
        <ul className="navbar__links">
          <li><a href="/productos">Productos</a></li>

          {/* Opciones solo para clientes */}
          {user.rol === 'cliente' && (
            <>
              <li><a href="/mis-pedidos">Mis pedidos</a></li>
              <li><a href="/mi-perfil">Mi perfil</a></li>
            </>
          )}

          {/* Opciones solo para admin */}
          {user.rol === 'admin' && (
            <>
              <li><a href="/admin/productos">Gestionar productos</a></li>
              <li><a href="/admin/pedidos">Gestionar pedidos</a></li>
              <li><a href="/admin/usuarios">Gestionar usuarios</a></li>
            </>
          )}

          <li>
            <button onClick={logout}>Cerrar sesión</button>
          </li>
        </ul>
      )}
    </nav>
  );
}`}</code>
      </pre>

      <p>
        Fíjate en la idea principal: <strong>preguntamos por el rol</strong> y, según su valor, 
        mostramos unos enlaces u otros.
      </p>

      
      <p className="nota nota-importante">
        Resumen: el <strong>rol del usuario</strong> se decide en la base de datos y en el backend.
        El frontend solo se encarga de <strong>mostrar la interfaz adecuada</strong> según ese rol, 
        pero la seguridad real está en el servidor.
      </p>
      <p>Por otro lado, es posble insertar también permisos</p>
      <p>
  En una aplicación web distinguimos entre <strong>roles</strong> (como <em>admin</em> o <em>cliente</em>) y 
  <strong>permisos del servidor MySQL</strong>, y es importante no confundirlos. Los <strong>roles</strong> son 
  parte de la lógica de tu aplicación: determinan qué se muestra en el frontend y qué acciones puede 
  realizar cada usuario dentro del programa. Por ejemplo, un <em>admin</em> puede gestionar productos o 
  ver paneles especiales, mientras que un <em>cliente</em> solo accede a sus pedidos o a su perfil. Estos 
  roles se guardan normalmente en la tabla <code>usuarios</code> y se envían al frontend para tomar 
  decisiones de interfaz o acceso.
</p>

<p>
  En cambio, los <strong>permisos de MySQL</strong> controlan quién puede acceder realmente a la base de 
  datos desde un nivel técnico. Aquí entran los comandos <code>GRANT</code> y <code>REVOKE</code>: 
  <code>GRANT</code> sirve para <strong>conceder permisos</strong> (como SELECT, INSERT o DELETE) a un 
  usuario del servidor MySQL, y <code>REVOKE</code> para <strong>retirarlos</strong>. Estos permisos no afectan 
  a lo que un usuario ve en la web, sino a lo que un usuario técnico o una conexión concreta puede 
  hacer dentro del motor de MySQL.
  </p>

  <p>En resumen: los roles deciden <em>qué puede hacer un usuario en la 
  aplicación</em>, y GRANT/REVOKE deciden <em>qué puede hacer un usuario dentro de MySQL</em>.
</p>

    </article>
  </details>
</section>

{/*  X. TRIGGERS EN MYSQL  */}
<section className="section" id="triggers">
  <details>
    <summary>Triggers (Disparadores)</summary>

    <article className="card">
      <h2>Triggers en MySQL</h2>

      <p>
        Un <strong>trigger</strong> es un mecanismo de MySQL que permite ejecutar código de forma
        automática <strong>cuando ocurre un evento</strong> en una tabla: un <code>INSERT</code>, un 
        <code>UPDATE</code> o un <code>DELETE</code>.
      </p>

      <p>
        Es como decirle a la base de datos:
        <em>“Cada vez que pase esto, ejecuta este código sin que yo te lo vuelva a pedir”.</em>
      </p>

      <div className="callout-bonus">
        <h3>🎯 ¿Para qué sirven los triggers?</h3>
        <ul className="lista-simple">
          <li><strong>Mantener logs</strong> de cambios automáticamente.</li>
          <li><strong>Validar datos</strong> antes de permitir que entren en la tabla.</li>
          <li><strong>Actualizar otras tablas</strong> cuando cambia una.</li>
          <li><strong>Calcular valores</strong> antes de insertar o modificar registros.</li>
        </ul>

        <p>
          En resumen: los triggers permiten que la base de datos <strong>reaccione sola</strong>,
          sin depender del backend o del frontend.
        </p>
      </div>

      <h3>📌 Tipos de triggers</h3>

      <p>Un trigger siempre se define por:</p>

      <ul className="lista-simple">
        <li>➡️ El <strong>momento</strong>: <code>BEFORE</code> o <code>AFTER</code></li>
        <li>➡️ El <strong>evento</strong>: <code>INSERT</code>, <code>UPDATE</code> o <code>DELETE</code></li>
      </ul>

      <p>Combinando ambos, obtenemos hasta 6 tipos de triggers.</p>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Momento</th>
              <th>Evento</th>
              <th>¿Cuándo se dispara?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BEFORE</td>
              <td>INSERT</td>
              <td>Antes de insertar un registro</td>
            </tr>
            <tr>
              <td>AFTER</td>
              <td>INSERT</td>
              <td>Después de insertar un registro</td>
            </tr>
            <tr>
              <td>BEFORE</td>
              <td>UPDATE</td>
              <td>Antes de actualizar un registro</td>
            </tr>
            <tr>
              <td>AFTER</td>
              <td>UPDATE</td>
              <td>Después de actualizar un registro</td>
            </tr>
            <tr>
              <td>BEFORE</td>
              <td>DELETE</td>
              <td>Antes de borrar un registro</td>
            </tr>
            <tr>
              <td>AFTER</td>
              <td>DELETE</td>
              <td>Después de borrar un registro</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>🧪 Ejemplo 1: crear un log automático de eliminaciones</h3>

      <p>
        Supongamos que tenemos una tabla <code>productos</code> y queremos guardar en una tabla
        <code>bajas_productos</code> cada vez que alguien borre un producto.
      </p>

      <pre className="bloque-codigo">
        <code>{`DELIMITER $$

CREATE TRIGGER log_borrado_producto
AFTER DELETE ON productos
FOR EACH ROW
BEGIN
  INSERT INTO bajas_productos (id_producto, nombre, fecha_baja)
  VALUES (OLD.id, OLD.nombre, NOW());
END $$

DELIMITER ;`}</code>
      </pre>

      <p>
        Fíjate en que usamos <code>OLD</code> para acceder al registro que se está borrando.
      </p>

      <div className="callout-bonus">
        <h3>💡 Tip importante</h3>
        <p>
          En un <strong>DELETE</strong> solo existe <code>OLD</code>.  
          En un <strong>INSERT</strong> solo existe <code>NEW</code>.  
          En un <strong>UPDATE</strong> existen ambos: <code>OLD</code> y <code>NEW</code>.
        </p>
      </div>

      <h3>🧪 Ejemplo 2: validar antes de insertar (BEFORE INSERT)</h3>

      <p>
        Queremos impedir que alguien inserte un producto con precio negativo.
      </p>

      <pre className="bloque-codigo">
        <code>{`DELIMITER $$

CREATE TRIGGER validar_precio
BEFORE INSERT ON productos
FOR EACH ROW
BEGIN
  IF NEW.precio < 0 THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'El precio no puede ser negativo';
  END IF;
END $$

DELIMITER ;`}</code>
      </pre>

      <p>
        Un <strong>SIGNAL</strong> sirve para lanzar un error personalizado.
      </p>

      <h3>🧪 Ejemplo 3: actualizar stock automáticamente</h3>

      <p>
        Cada vez que se haga un pedido, queremos restar el stock del producto.
      </p>

      <pre className="bloque-codigo">
        <code>{`DELIMITER $$

CREATE TRIGGER descontar_stock
AFTER INSERT ON pedido_producto
FOR EACH ROW
BEGIN
  UPDATE productos
  SET stock = stock - NEW.cantidad
  WHERE id = NEW.id_producto;
END $$

DELIMITER ;`}</code>
      </pre>

      <p>
        Aquí usamos <strong>NEW.cantidad</strong> porque estamos reaccionando a un <code>INSERT</code>.
      </p>

      <h3>🎯 Reglas importantes para usar triggers</h3>

      <ul className="lista-simple">
        <li>Un trigger SIEMPRE está asociado a una tabla.</li>
        <li>No puede tener parámetros (a diferencia de los procedures).</li>
        <li>Se ejecuta automáticamente, sin necesidad de llamarlo.</li>
        <li>Hay que tener cuidado con los triggers que modifican la misma tabla → pueden causar bucles.</li>
      </ul>

      <div className="callout-bonus">
        <h3>🔥 Bonus para clase</h3>
        <p>
          Los triggers son muy útiles, pero deben usarse con responsabilidad.
          De momento, lo ideal es utilizarlos solo para:
        </p>

        <ul className="lista-simple">
          <li>Crear logs</li>
          <li>Validaciones simples</li>
          <li>Actualizaciones automáticas de tablas auxiliares</li>
        </ul>

        <p>
          Deja la lógica más complicada a tu backend, no a la base de datos.
        </p>
      </div>

      <p className="nota nota-importante">
        En resumen: un <strong>trigger</strong> es una herramienta muy poderosa que permite a la base de 
        datos reaccionar de forma automática según lo que ocurra en las tablas.  
        Es ideal para automatizar tareas repetitivas y reforzar la integridad de los datos.
      </p>
    </article>
  </details>
</section>





        {/* 11. BUENAS PRÁCTICAS */}
       <section className="section" id="buenas-practicas">
  <details>
    <summary>Buenas prácticas de modelado y consultas SQL</summary>

    <article className="card">

      <h3>11. Buenas prácticas de modelado y consultas SQL</h3>

      <p>
        Estas buenas prácticas ayudan a construir bases de datos más seguras, más rápidas y más fáciles de mantener. Son principios universales en SQL que aplican desde un proyecto pequeño hasta sistemas profesionales.
      </p>

      <h3>11.1. Buenas prácticas de modelado</h3>

      <ul>
        <li>
          <strong>Diseña primero en papel</strong>: identifica entidades, atributos y relaciones antes de escribir SQL.
        </li>
        <li>
          <strong>Una tabla = una entidad</strong>. Evita mezclar conceptos.
        </li>
        <li>
          <strong>Usa claves primarias numéricas</strong> (AUTO_INCREMENT) para simplificar relaciones.
        </li>
        <li>
          <strong>Las relaciones deben ser claras</strong> (1:N, N:M, 1:1).
        </li>
        <li>
          <strong>Usa claves foráneas siempre</strong> para mantener la integridad referencial.
        </li>
        <li>
          <strong>No dupliques datos</strong>: si algo ya está en otra tabla, usa FK.
        </li>
      </ul>

      <h3>11.2. Buenas prácticas al crear tablas</h3>

      <ul>
        <li>
          <strong>Define los tipos de datos adecuados</strong>: evita VARCHAR enormes, usa INT cuando la relación lo necesite, DECIMAL para precios, DATE para fechas, etc.
        </li>
        <li>
          <strong>Define siempre NOT NULL cuando proceda</strong>. Evita valores vacíos no intencionados.
        </li>
        <li>
          <strong>Usa DEFAULT</strong> para valores iniciales lógicos (stock = 0, activo = 1).
        </li>
        <li>
          <strong>Usa nombres de columna claros</strong>: evita abreviaturas ambiguas.
        </li>
        <li>
          <strong>Incluye AUTO_INCREMENT en la PK</strong> salvo casos muy concretos.
        </li>
        <li>
          <strong>Crea primero las tablas padre</strong> antes que las hijas.
        </li>
      </ul>

      <h3>11.3. Buenas prácticas al hacer SELECT</h3>

      <ul>
        <li>
          <strong>Evita SELECT *</strong> en proyectos reales. Selecciona solo lo que necesites.
        </li>
        <li>
          <strong>Usa alias</strong> para mejorar la legibilidad de consultas.
        </li>
        <li>
          <strong>Aprende el orden mental</strong> de ejecución: FROM → WHERE → SELECT → ORDER BY → LIMIT.
        </li>
        <li>
          <strong>Usa LIMIT</strong> cuando explores datos grandes.
        </li>
      </ul>

      <h3>11.4. Buenas prácticas con WHERE</h3>

      <ul>
        <li>Filtra lo antes posible con WHERE para mejorar rendimiento.</li>
        <li>Usa AND / OR con paréntesis para evitar confusiones.</li>
        <li>No compares con <code>= NULL</code>. Usa <code>IS NULL</code> o <code>IS NOT NULL</code>.</li>
      </ul>

      <h3>11.5. Buenas prácticas con ORDER BY</h3>

      <ul>
        <li>Ordena por columnas existentes o alias definidos en el SELECT.</li>
        <li>Recuerda que ORDER BY va siempre al final.</li>
        <li>Evita ordenamientos innecesarios cuando manejes miles de datos.</li>
      </ul>

      <h3>11.6. Buenas prácticas con JOIN</h3>

      <ul>
        <li>
          <strong>Usa alias</strong> (p, c, u…) para escribir JOIN más legibles.
        </li>
        <li>
          <strong>INNER JOIN</strong> para datos totalmente relacionados.
        </li>
        <li>
          <strong>LEFT JOIN</strong> para conservar todos los registros de la tabla izquierda.
        </li>
        <li>
          <strong>RIGHT JOIN</strong> solo si es realmente necesario.
        </li>
        <li>
          <strong>La condición del JOIN va en ON</strong> (no en WHERE).
        </li>
      </ul>

      <h3>11.7. Buenas prácticas con CRUD (INSERT, UPDATE, DELETE)</h3>

      <h4>INSERT</h4>
      <ul>
        <li>Inserta solo columnas necesarias.</li>
        <li>No pongas la columna id si es AUTO_INCREMENT.</li>
        <li>Comprueba siempre FK antes de insertar.</li>
      </ul>

      <h4>UPDATE</h4>
      <ul>
        <li><strong>Nunca hagas UPDATE sin WHERE.</strong></li>
        <li>Actualiza solo lo necesario.</li>
        <li>Usa expresiones como <code>stock = stock + 5</code>.</li>
      </ul>

      <h4>DELETE</h4>
      <ul>
        <li><strong>Nunca hagas DELETE sin WHERE.</strong></li>
        <li>Considera usar borrado lógico (activo = 0).</li>
        <li>No borres datos si hay FK que dependen de ellos.</li>
      </ul>

      <h3>11.8. Nombres recomendados para tablas y columnas</h3>

      <ul>
        <li><strong>Tablas en plural</strong>: productos, categorias, usuarios.</li>
        <li><strong>Columnas en singular</strong>: nombre, precio, stock.</li>
        <li><strong>FK con nombre descriptivo</strong>: categoria_id, usuario_id.</li>
        <li>Evitar espacios o caracteres especiales.</li>
        <li>Usar minúsculas y guiones bajos: <code>fecha_creacion</code>.</li>
      </ul>

      <h3>11.9. Errores típicos de principiantes</h3>

      <ul>
        <li>Usar SELECT * siempre.</li>
        <li>Olvidar el WHERE en UPDATE y DELETE.</li>
        <li>No definir NOT NULL en campos obligatorios.</li>
        <li>No usar claves foráneas.</li>
        <li>Hacer JOIN sin ON correcto.</li>
        <li>Comparar NULL con =.</li>
      </ul>

      <h3>11.10. Checklist rápido antes de crear una tabla</h3>

      <ul>
        <li>¿Tiene PK AUTO_INCREMENT?</li>
        <li>¿Están definidos los tipos correctos?</li>
        <li>¿Hay columnas obligatorias? (NOT NULL)</li>
        <li>¿Hay valores iniciales? (DEFAULT)</li>
        <li>¿Las relaciones tienen FK?</li>
        <li>¿Está creada antes la tabla padre?</li>
      </ul>

      <p>
        Estas buenas prácticas servirán como guía en todos tus proyectos SQL y te permitirán crear bases de datos bien diseñadas, consistentes y fáciles de mantener.
      </p>

    </article>
  </details>
</section>


           {/* 12. ACTIVIDADES DEL BLOQUE */}
        <section className="section" id="actividades">
          <details>
            <summary>Actividades finales del bloque SQL</summary>

            <article className="card">

              <h3>12. Actividades finales del bloque</h3>

              <p>
                Para completar este bloque, cada alumno deberá <strong>diseñar, crear y consultar</strong> 
                una base de datos relacional desde cero utilizando <strong>MySQL/MariaDB</strong> 
                (phpMyAdmin o consola de XAMPP).
              </p>

              <p>
                Puedes elegir una de las propuestas o inventar la tuya propia. Cada actividad incluye:  
              </p>

              <ul>
                <li>Modelado ERL inicial</li>
                <li>Creación del modelo físico</li>
                <li>Creación de tablas (PK, FK, tipos)</li>
                <li>Inserción de datos con INSERT</li>
                <li>Consultas básicas con SELECT</li>
                <li>Filtros con WHERE</li>
                <li>Ordenaciones con ORDER BY</li>
                <li>JOIN para relacionar tablas</li>
              </ul>

              <hr />

              <h3>12.1. Proyectos propuestos (elige uno)</h3>

              <h4>🛒 1. Tienda online</h4>
              <p>Tablas sugeridas:</p>
              <ul>
                <li><strong>categorias</strong></li>
                <li><strong>productos</strong></li>
                <li><strong>clientes</strong></li>
                <li><strong>pedidos</strong></li>
                <li><strong>lineas_pedido</strong> (N:M pedidos-productos)</li>
              </ul>

              <p>Objetivo: listados como “productos por categoría”, “pedidos de un cliente”, etc.</p>

              <h4>📚 2. Biblioteca / Club de lectura</h4>
              <p>Tablas sugeridas:</p>
              <ul>
                <li><strong>libros</strong></li>
                <li><strong>autores</strong></li>
                <li><strong>generos</strong></li>
                <li><strong>prestamos</strong></li>
                <li><strong>usuarios</strong></li>
              </ul>

              <h4>🎬 3. Plataforma de cine o series</h4>
              <p>Tablas sugeridas:</p>
              <ul>
                <li><strong>peliculas</strong></li>
                <li><strong>actores</strong></li>
               
                <li><strong>generos</strong></li>
                <li><strong>valoraciones</strong></li>
              </ul>

              <h4>🏥 4. Clínica veterinaria</h4>
              <p>Tablas sugeridas:</p>
              <ul>
                <li><strong>mascotas</strong></li>
                <li><strong>clientes</strong></li>
                <li><strong>citas</strong></li>
                <li><strong>tratamientos</strong></li>
              </ul>

              <h4>🎓 5. Plataforma de cursos o academia</h4>
              <p>Tablas sugeridas:</p>
              <ul>
                <li><strong>cursos</strong></li>
                <li><strong>alumnos</strong></li>
                <li><strong>matriculas</strong> (N:M cursos-alumnos)</li>
                <li><strong>profesores</strong></li>
              </ul>

              <hr />

              <h3>12.2. Entregable mínimo obligatorio</h3>

              <ul>
                <li><strong>1. Modelo ERL</strong> (foto o digital).</li>
                <li><strong>2. Script SQL</strong> con:
                  <ul>
                    <li>CREATE DATABASE</li>
                    <li>CREACIÓN DE TABLAS (PK, FK, tipos, DEFAULT…)</li>
                    <li>INSERCIÓN de datos (mínimo 10 por tabla)</li>
                  </ul>
                </li>
                <li><strong>3. Consultas SQL:</strong>
                  <ul>
                    <li>3 SELECT básicos</li>
                    <li>3 WHERE con filtros</li>
                    <li>2 ORDER BY</li>
                    <li>3 JOIN</li>
                  </ul>
                </li>
                <li><strong>4. Archivo README explicando el proyecto</strong></li>
              </ul>

              <hr />

            </article>
          </details>
        </section>

      {/* BONUS — EXPORTAR, ENTREGAR Y SUBIR A PORTFOLIO */}
<section className="section" id="bonus">
  <details open>
    <summary>Bonus: cómo generar un archivo SQL y subir tu proyecto al portfolio</summary>

    <article className="card">
      <h3>Bonus: Generar archivo SQL, entregarlo correctamente y subirlo a tu portfolio</h3>

      <p>
        En este bonus vas a ver cómo dejar tu proyecto SQL con un acabado profesional:
        generar el archivo <strong>.sql</strong>, organizar bien las carpetas,
        documentarlo en un <code>README.md</code> y publicarlo en GitHub como parte de tu portfolio.
      </p>

      {/* CALLOUT ESPECIAL */}
      <div className="callout-bonus">
        <strong>Idea clave:</strong>
        <p>
          Un buen proyecto SQL no es solo la base de datos: también incluye documentación,
          scripts separados (creación, datos, consultas) y un README claro. Es algo
          que verán profesores, empresas y futuros compañeros.
        </p>
      </div>

      <h4>1. ¿Qué es un archivo SQL?</h4>
      <p>
        Un archivo <code>.sql</code> es un fichero de texto que contiene comandos SQL listos para ejecutar:
        <strong> CREATE TABLE</strong>, <strong>INSERT</strong>, <strong>ALTER</strong>, etc.
      </p>

      <p>Suele usarse para:</p>
      <ul>
        <li>Recrear la base de datos en cualquier ordenador</li>
        <li>Importarla en phpMyAdmin (por ejemplo, en un XAMPP nuevo)</li>
        <li>Subirla a GitHub como parte del proyecto</li>
        <li>Guardar copias de seguridad de tus prácticas</li>
      </ul>

      <h4>2. Cómo generar un archivo SQL desde phpMyAdmin</h4>

      <ol>
        <li>Arranca <strong>MySQL</strong> en XAMPP y entra en <strong>phpMyAdmin</strong>.</li>
        <li>En el panel izquierdo, haz clic en tu base de datos (por ejemplo, <code>tienda</code> o <code>biblioteca</code>).</li>
        <li>Ve a la pestaña <strong>Exportar</strong>.</li>
        <li>
          Elige el método:
          <ul>
            <li><strong>Rápido</strong> → Exporta toda la base de datos (tablas + datos).</li>
            <li><strong>Personalizado</strong> → Puedes elegir tablas concretas y opciones avanzadas.</li>
          </ul>
        </li>
        <li>Asegúrate de que el formato seleccionado es <strong>SQL</strong>.</li>
        <li>Pulsa <strong>Continuar</strong>.</li>
      </ol>

      <p>
        Se descargará un archivo del estilo: <code>mi-bbdd.sql</code> que podrás guardar dentro de la carpeta del proyecto.
      </p>

      <h4>3. Cómo guardar tus consultas para tenerlas en el README</h4>

      <p>
        Cada vez que ejecutes una consulta en phpMyAdmin (por ejemplo un <code>SELECT</code> con
        <code>JOIN</code>), puedes guardarla para documentarla después:
      </p>

      <ol>
        <li>Escribe y ejecuta la consulta en la pestaña <strong>SQL</strong>.</li>
        <li>
          Usa el botón <strong>“Copiar al portapapeles”</strong> (debajo de la consulta) o selecciona
          el texto manualmente.
        </li>
        <li>Pega esa consulta en un archivo de texto llamado <code>consultas.sql</code>.</li>
        <li>
          Agrupa las consultas por bloque, por ejemplo:
          <ul>
            <li><code>-- Consultas básicas (SELECT + WHERE)</code></li>
            <li><code>-- Consultas con ORDER BY y LIMIT</code></li>
            <li><code>-- Consultas con JOIN entre tablas</code></li>
          </ul>
        </li>
      </ol>

      <p>
        Así tendrás todas tus consultas importantes organizadas y listas para copiar en el
        <code>README.md</code> o para repetir el ejercicio en el futuro.
      </p>

      <h4>4. Estructura recomendada de carpetas para tu proyecto</h4>

      <pre>
        <code>{`mi-proyecto-sql/
│
├── script.sql          # Tablas y modelo físico (CREATE DATABASE, CREATE TABLE...)
├── inserts.sql         # Datos de ejemplo (INSERT INTO...)
├── consultas.sql       # SELECT, WHERE, JOIN... que quieres documentar
├── modelo-ERL.png      # Diagrama del proyecto (modelo ER)
├── README.md           # Documentación principal del proyecto
└── extras/             # (opcional) Vistas, ejercicios, versiones mejoradas
`}</code>
      </pre>

      <h4>5. Cómo subir el proyecto a tu portfolio de GitHub</h4>

      <ol>
        <li>Abre la carpeta del proyecto en VS Code.</li>
        <li>
          Inicializa un repositorio Git:
          <pre>
            <code>git init</code>
          </pre>
        </li>
        <li>
          Añade todos los archivos:
          <pre>
            <code>git add .</code>
          </pre>
        </li>
        <li>
          Haz el primer commit:
          <pre>
            <code>git commit -m "Proyecto SQL completo (UF1845)"</code>
          </pre>
        </li>
        <li>
          Crea un repositorio vacío en GitHub, por ejemplo:
          <strong> uf1845-mi-proyecto-sql</strong>.
        </li>
        <li>
          Conecta tu carpeta local con GitHub y sube el proyecto:
          <pre>
            <code>{`git remote add origin https://github.com/tuusuario/uf1845-mi-proyecto-sql.git
git branch -M main
git push -u origin main`}</code>
          </pre>
        </li>
      </ol>

      <p>¡Listo! Ya tienes tu proyecto SQL publicado en tu portfolio profesional.</p>

      <hr />

      <h4>6. Plantilla profesional para README.md</h4>

      <div className="callout-bonus">
        <strong>Consejo:</strong>
        <p>
          Un buen <code>README.md</code> muchas veces transmite más que el propio SQL,
          porque demuestra tu capacidad de explicar, documentar y ordenar un proyecto.
        </p>
      </div>

      <pre>
        <code>{`# 📦 Proyecto SQL — UF1845

 1. Descripción
Base de datos desarrollada en MySQL/MariaDB como parte del bloque de modelado y consultas SQL.
Tema elegido: **[Indica aquí tienda, biblioteca, cine, cursos…]**.

 2. Modelo ER
Incluye el diagrama en el repositorio (por ejemplo, modelo-ERL.png) y añádelo aquí:
![Diagrama ER](./modelo-ERL.png)

 3. Estructura de tablas
Explica brevemente las tablas y sus claves:
- Tabla ...
- Clave primaria (PK): ...
- Claves foráneas (FK): ...

 4. script.sql
Código de creación de la base de datos:
- CREATE DATABASE
- CREATE TABLE
- Claves primarias y foráneas
- Restricciones (NOT NULL, DEFAULT, UNIQUE...)

 5. inserts.sql
Datos de ejemplo para probar la base de datos.

 6. consultas.sql
Consultas más importantes del proyecto:
- SELECT con filtros (WHERE)
- ORDER BY y LIMIT
- Consultas con JOIN entre varias tablas

 7. Cómo importar el proyecto
1. Abre phpMyAdmin
2. Crea una base de datos vacía con el nombre del proyecto
3. Importa \`script.sql\`
4. Después importa \`inserts.sql\`

 8. Autor
Nombre del alumno, curso, academia y año académico.

 9. Mejoras futuras (opcional)
- Crear VISTAS para consultas frecuentes
- Borrado lógico con un campo \`activo\`
- Añadir ON DELETE CASCADE / ON UPDATE CASCADE
- Nuevas tablas relacionadas`}</code>
      </pre>
    </article>
  </details>
</section>
      </div>
<section className="section" id="test">
  <details open>
    <summary>TEST de REPASO</summary>
    <article className="card">
      {/* Test de repaso SQL */}
      <TestSQLBasico50 />
      </article>
  </details>
</section>
    </main>
  );
}


