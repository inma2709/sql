/**
 * Bloque2Consultas
 *
 * Componente de pÃ¡gina que renderiza el "Bloque 2 Â· Consultas SQL y diseÃ±o de modelos"
 * del curso. Proporciona una guÃ­a didÃ¡ctica completa sobre cÃ³mo pasar del modelo de datos
 * a tablas SQL y cÃ³mo trabajar con CRUD y consultas (INSERT, SELECT, WHERE, ORDER BY,
 * JOIN, VISTAS, UPDATE, DELETE), ademÃ¡s de buenas prÃ¡cticas, ejemplos, ejercicios y
 * actividades finales.
 *
 * Contenido y estructura principal:
 * - HERO: kicker, tÃ­tulo y subtÃ­tulo explicativo.
 * - NavegaciÃ³n (TOC) con enlaces ancla a las secciones internas.
 * - Secciones detalladas (cada una con explicaciÃ³n, ejemplos y fragmentos SQL):
 *   - #introduccion-modelos        : visiÃ³n general y flujo ERL â†’ modelo fÃ­sico â†’ SQL
 *   - #tablas-columnas            : tablas, columnas, tipos de datos, PK, FK, DEFAULT, ENUM, fechas
 *   - #crear-tablas-modelo        : creaciÃ³n de tablas, valores por defecto, FK, reglas de integridad
 *   - #crud-insert                : INSERT (individual, mÃºltiple, con FK, DEFAULT)
 *   - #crud-select                : SELECT bÃ¡sico, alias, LIMIT
 *   - #filtros                    : WHERE, operadores, LIKE, IN, BETWEEN, IS NULL
 *   - #ordenaciones               : ORDER BY (ASC/DESC, mÃºltiples columnas, alias)
 *   - #sql-vistas                 : creaciÃ³n, uso, modificaciÃ³n y eliminaciÃ³n de vistas
 *   - #crud-update                : UPDATE seguro, expresiones, errores comunes
 *   - #crud-delete                : DELETE, borrado lÃ³gico, CASCADE y precauciones
 *   - #joins                      : INNER/LEFT/RIGHT JOIN, mÃºltiples tablas y buenas prÃ¡cticas
 *   - #buenas_practicas           : checklist y recomendaciones de modelado y consultas
 *   - #actividades                : proyectos propuestos y entregable mÃ­nimo
 *   - #bonus                      : exportar .sql, estructura de proyecto y README para portfolio
 *
 * Consideraciones de implementaciÃ³n:
 * - Componente estÃ¡tico, sin props; pensado como pÃ¡gina informativa/documental.
 * - Ejemplos SQL se presentan en bloques <pre><code> para facilitar la lectura.
 * - Se emplean etiquetas semÃ¡nticas (main, header, nav, section) para mejorar accesibilidad.
 * - Las anclas permiten navegaciÃ³n rÃ¡pida entre los temas del bloque.
 *
 * Uso:
 * import Bloque2Consultas from './pages/Bloque2';
 * <Bloque2Consultas />
 * 
 *
 * @component
 * @returns {JSX.Element} PÃ¡gina completa del Bloque 2 con explicaciones y ejemplos SQL.
 */
import TablasSQL from "../components/TablasSQL.jsx";


export default function Bloque2Consultas() {
  return (
    <main className="bloque bloque-sql">
      {/* HERO DEL BLOQUE */}
      <header className="hero hero--sql">
        <div className="contenedor">
          <span className="kicker">Bloque 2 Â· Consultas SQL y diseÃ±o de modelos</span>
          <h1>Consultas SQL y Modelado</h1>
          <p className="subtitle">
            Aprendemos a transformar un modelo de datos en tablas reales, a consultar informaciÃ³n
            con SQL y a relacionar tablas mediante claves forÃ¡neas y JOIN.
          </p>
        </div>
      </header>

   <div className="contenedor" id="contenido">
  {/* ÃNDICE CON ANCLAS */}
  <nav className="toc">
    <h2>Ãndice del bloque</h2>
    <ol>
      <li>
        <a href="#introduccion-modelos">IntroducciÃ³n al diseÃ±o de modelos</a>
      </li>

      <li>
        <a href="#tablas-columnas">Tablas, columnas y tipos de datos</a>
      </li>

      {/* BLOQUE 3: CREAR TABLAS A PARTIR DEL MODELO */}
      <li>
        <a href="#crear-tablas-modelo">Crear tablas a partir del modelo</a>
        <ol>
          <li>
            <a href="#modelo-fisico-intro">3.1 IntroducciÃ³n y conceptos bÃ¡sicos</a>
          </li>
          <li>
            <a href="#tablas-padre-hija">3.2 Tablas padre y tablas hija</a>
          </li>
          <li>
            <a href="#guiar-crear-tablas-phpmyadmin">
              3.3 CÃ³mo rellenar la estructura de una tabla en phpMyAdmin
            </a>
          </li>
          <li>
            <a href="#ejemplo-tabla-categorias">
              Ejemplo: tabla categorÃ­as (tabla padre)
            </a>
          </li>
          <li>
            <a href="#claves-foraneas-1n">
              3.4 Claves forÃ¡neas y relaciones 1â€“N (clientesâ€“reservas)
            </a>
          </li>
          <li>
            <a href="#valores-default">3.5 Valores por defecto (DEFAULT)</a>
          </li>
          <li>
            <a href="#resumen-columnas">
              3.6 Resumen: propiedades de columna en MySQL
            </a>
          </li>
          <li>
            <a href="#valores-enum">3.7 Valores ENUM</a>
          </li>
          <li>
            <a href="#fechas-mysql">
              3.8 CÃ³mo trabajar con fechas y horas en MySQL
            </a>
          </li>
          <li>
            <a href="#crear-tabla-hija">
              3.9 CÃ³mo crear correctamente una tabla hija con clave forÃ¡nea
            </a>
          </li>
        </ol>
      </li>

      {/* CRUD dividido */}
      <li><a href="#crud-insert">C â†’ INSERT (crear datos)</a></li>
      <li><a href="#crud-select">R â†’ SELECT (leer datos)</a></li>
      <li><a href="#filtros">Filtros con WHERE</a></li>
      <li><a href="#ordenaciones">Ordenaciones con ORDER BY</a></li>
      <li><a href="#funciones-agregacion">Funciones de agregaciÃ³n</a></li>
      <li><a href="#consultas-calculo">Consultas de cÃ¡lculo</a></li>
      <li><a href="#vistas">Crear y usar vistas</a></li>
      <li><a href="#crud-update">U â†’ UPDATE (modificar datos)</a></li>
      <li><a href="#crud-delete">D â†’ DELETE (eliminar datos)</a></li>

      <li><a href="#joins">Relaciones entre tablas y JOIN</a></li>
      <li><a href="#indice">Ãndices y rendimiento</a></li>
      <li><a href="#buenas-practicas">Buenas prÃ¡cticas de modelado y consultas</a></li>
      <li><a href="#actividades">Actividades del bloque</a></li>
    </ol>
  </nav>
</div>


        {/* 1. INTRODUCCIÃ“N AL DISEÃ‘O DE MODELOS */}
      <section className="section" id="introduccion-modelos">
  <details open>
    <summary>VisiÃ³n general: del modelo al SQL</summary>

    <article className="card">
      <h3>IntroducciÃ³n y conceptos bÃ¡sicos</h3>
      <p>
        Antes de escribir una sola lÃ­nea de SQL, necesitamos tener claro quÃ© datos queremos guardar
        y cÃ³mo se relacionan entre sÃ­. A este proceso lo llamamos <strong>diseÃ±o de modelos</strong>,
        y es uno de los pasos mÃ¡s importantes en la creaciÃ³n de una base de datos.
      </p>

      <h3>1.1. Del mundo real al modelo de datos</h3>
      <p>
        Todo comienza analizando el problema: quÃ© entidades (cosas) existen y quÃ© informaciÃ³n guardamos
        sobre cada una de ellas. Por ejemplo, en una tienda podemos tener:
      </p>

      <ul>
        <li><strong>CategorÃ­as</strong> (ElectrÃ³nica, Hogarâ€¦)</li>
        <li><strong>Productos</strong> (Teclado, Cafeteraâ€¦)</li>
      </ul>

      <p>
        A partir de estas entidades y de cÃ³mo se relacionan entre sÃ­, construimos un diagrama
        <strong> Entidadâ€“RelaciÃ³n LÃ³gico (ERL)</strong>.
      </p>

      <h3>1.2. Del modelo lÃ³gico al modelo fÃ­sico</h3>
      <p>
        Una vez tenemos el modelo ERL, pasamos al paso mÃ¡s importante:
        <strong> convertir (o traducir) ese modelo lÃ³gico en un modelo fÃ­sico</strong>.
        Este proceso consiste en transformar:
      </p>

      <ul>
        <li>Entidades â†’ en <strong>tablas</strong></li>
        <li>Atributos â†’ en <strong>columnas</strong></li>
        <li>Identificadores â†’ en <strong>claves primarias (PK)</strong></li>
        <li>Relaciones â†’ en <strong>claves forÃ¡neas (FK)</strong></li>
      </ul>

      <p>
        A esta conversiÃ³n tambiÃ©n se le llama <em>â€œpasar del modelado lÃ³gico al modelado fÃ­sicoâ€</em>,
        es decir, pasar del dibujo a la estructura real en SQL.
      </p>

      <h3>1.3. Del modelo fÃ­sico a SQL</h3>
      <p>
        Una vez sabemos quÃ© tablas tendrÃ¡ nuestra base de datos, llega el momento de escribirlas con SQL.
        Esto implica usar sentencias como <strong>CREATE TABLE</strong> para crearlas, y mÃ¡s adelante
        <strong>INSERT</strong> para aÃ±adir datos.
      </p>

      <p>
        Por ejemplo, del modelo lÃ³gico <strong>CategorÃ­a 1 â”€â”€â”€ N Producto</strong>, obtenemos
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
        Este flujo â€”del modelo ERL â†’ tablas SQL â†’ consultasâ€”
        serÃ¡ el que sigamos durante todo el bloque.
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
        En una base de datos relacional, toda la informaciÃ³n se guarda dentro de 
        <strong> tablas</strong>. Cada tabla representa una entidad del modelo 
        (por ejemplo: Productos, CategorÃ­as, Clientesâ€¦) y estÃ¡ compuesta por 
        <strong> columnas</strong> (los atributos o caracterÃ­sticas de esa entidad).
      </p>

      <h3>2.1. Â¿QuÃ© es una tabla?</h3>
      <p>
        Una tabla es una estructura formada por filas y columnas, muy parecida a una 
        hoja de cÃ¡lculo. Cada fila (tupla) representa un registro individual, y cada 
        columna representa un dato especÃ­fico.
      </p>

      <p>Por ejemplo, una tabla <strong>productos</strong> podrÃ­a verse asÃ­:</p>

      <pre>
        <code>{`+----+-------------------+--------+-------+
| id | nombre            | precio | stock |
+----+-------------------+--------+-------+
| 1  | Teclado mecÃ¡nico  | 49.99  | 10    |
| 2  | Cafetera          | 35.00  | 5     |
+----+-------------------+--------+-------+`}</code>
      </pre>

      <h3>2.2. Â¿QuÃ© es una columna?</h3>
      <p>
        Una columna define el tipo de dato que va a contener. Por ejemplo:
      </p>

      <ul>
        <li><strong>nombre â†’</strong> texto</li>
        <li><strong>precio â†’</strong> nÃºmero con decimales</li>
        <li><strong>stock â†’</strong> nÃºmero entero</li>
      </ul>

      <p>
        Para que la base de datos funcione correctamente, cada columna debe tener 
        un <strong>tipo de dato</strong> adecuado.
      </p>

      <h3>2.3. Tipos de datos bÃ¡sicos en MySQL/MariaDB</h3>
      <p>
        A continuaciÃ³n se muestran los tipos de datos mÃ¡s utilizados en desarrollo web 
        y en este curso:
      </p>

      <ul>
        <li><strong>INT</strong> â†’ nÃºmeros enteros (id, stockâ€¦)</li>
        <li><strong>DECIMAL(10,2)</strong> â†’ nÃºmeros con decimales (precios, importesâ€¦)</li>
        <li><strong>VARCHAR(n)</strong> â†’ texto corto (nombres, emailsâ€¦)</li>
        <li><strong>TEXT</strong> â†’ texto largo (descripcionesâ€¦)</li>
        <li><strong>DATE</strong> â†’ solo fecha</li>
        <li><strong>DATETIME</strong> â†’ fecha y hora</li>
        <li><strong>TINYINT(1)</strong> â†’ valores 0/1 (booleanos)</li>
      </ul>

      <h3>2.4. Claves primarias (PK)</h3>
      <p>
        Una clave primaria es una columna cuyos valores identifican de forma Ãºnica cada 
        fila de la tabla. Lo habitual es usar un entero autoincremental:
      </p>

      <pre>
        <code>{`id INT AUTO_INCREMENT PRIMARY KEY`}</code>
      </pre>

      <p>
        Todas las tablas de tu proyecto deberÃ­an tener una <strong>PK</strong>.
      </p>
<h3>2.5. Claves forÃ¡neas (FK)</h3>

<p>
  Las claves forÃ¡neas permiten relacionar dos tablas. Por ejemplo, si cada producto 
  pertenece a una categorÃ­a, la tabla <strong>productos</strong> debe incluir una columna 
  <code>categoria_id</code>. Esa columna indica a quÃ© categorÃ­a pertenece cada producto. 
  En esta relaciÃ³n, la tabla <strong>categorias</strong> es la tabla padre y debe existir antes, 
  mientras que <strong>productos</strong> es la tabla hija. Como una categorÃ­a puede tener muchos 
  productos, pero un producto solo pertenece a una categorÃ­a, estamos ante una relaciÃ³n 
  <strong>1â€“N</strong>. En este tipo de relaciones, la clave forÃ¡nea siempre se coloca en el 
  lado donde estÃ¡ la <strong>N</strong>, es decir, en la tabla donde los registros se repiten.
</p>

<div className="callout">
  <p>
    <strong>Â¿Por quÃ© la clave forÃ¡nea va en el lado N?</strong>  
    Porque es la tabla hija la que necesita <em>saber a quiÃ©n pertenece</em>.  
    La tabla padre (categorias) no guarda nada sobre los productos, porque eso implicarÃ­a 
    duplicar informaciÃ³n o almacenar listas dentro de una sola fila. En cambio, cada producto 
    puede incluir fÃ¡cilmente el <code>categoria_id</code> que lo relaciona con su categorÃ­a.  
    Esta es la forma correcta y normalizada de representar una relaciÃ³n 
    <strong>muchos-a-uno</strong> en SQL.
  </p>
</div>

<p>
  De esta manera, la tabla hija es la que â€œapuntaâ€ a la tabla padre mediante la clave forÃ¡nea, 
  garantizando la integridad de los datos y permitiendo que MySQL controle que la categorÃ­a 
  indicada realmente existe.
</p>


      

      <pre>
        <code>{`categoria_id INT,
FOREIGN KEY (categoria_id) REFERENCES categorias(id)`}</code>
      </pre>

      <p>
        Esto garantiza que ningÃºn producto pueda tener una categorÃ­a que no exista.
      </p>

      <h3>2.6. Ejemplo completo de definiciÃ³n de tabla</h3>

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
{/* 3. CREAR TABLAS A PARTIR DEL MODELO */}
<TablasSQL />



        {/* 4. C â†’ INSERT */}
       {/* 4. C â†’ INSERT */}
<section className="section" id="crud-insert">
  <details open>
    <summary>C â†’ INSERT (crear datos)</summary>

    <article className="card">

      <h3>4. C â†’ INSERT (crear datos)</h3>

      {/* RECUADRO DE SINTAXIS GENERAL */}
      <div className="callout">
        <strong>Sintaxis general de INSERT:</strong>
        <pre><code>{`INSERT INTO nombre_tabla (columna1, columna2, ...)
VALUES (valor1, valor2, ...);`}</code></pre>
        <p>
          Siempre especificamos las columnas que queremos rellenar.  
          MySQL completarÃ¡ el resto con sus valores por defecto.
        </p>
      </div>

      <p>
        La instrucciÃ³n <strong>INSERT</strong> nos permite <strong>crear nuevos registros</strong>
        dentro de una tabla. Es la operaciÃ³n del CRUD encargada de aÃ±adir informaciÃ³n nueva 
        a nuestra base de datos.
      </p>

      <h3>4.1. Insertar un registro en la tabla categorÃ­as</h3>

      <pre>
        <code>{`INSERT INTO categorias (nombre)
VALUES ('TecnologÃ­a');`}</code>
      </pre>

      <p>
        Esto crea una nueva categorÃ­a con un <strong>id autogenerado</strong>.
      </p>

      <h3>4.2. Insertar mÃºltiples registros</h3>

      <pre>
        <code>{`INSERT INTO categorias (nombre) VALUES
('ElectrÃ³nica'),
('Hogar'),
('Accesorios');`}</code>
      </pre>

      <p>Ãštil para cargar datos de prueba rÃ¡pidamente.</p>

      <h3>4.3. Insertar productos (con clave forÃ¡nea)</h3>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio, stock, categoria_id)
VALUES ('Teclado mecÃ¡nico', 49.99, 10, 1);`}</code>
      </pre>

      <ul>
        <li><strong>categoria_id</strong> debe existir en <code>categorias.id</code></li>
        <li>El <code>id</code> se genera automÃ¡ticamente</li>
      </ul>

      <h3>4.4. Inserciones mÃºltiples en productos</h3>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES
('Cafetera', 35.00, 5, 2),
('Funda para mÃ³vil', 12.50, 30, 3),
('Altavoz Bluetooth', 25.90, 12, 1);`}</code>
      </pre>

      <h3>4.5. Errores frecuentes con INSERT</h3>

      <ul>
        <li>Fallar en tipo de dato (texto donde va un nÃºmero)</li>
        <li>No usar comillas simples para texto</li>
        <li>Clave forÃ¡nea que apunta a un id inexistente</li>
      </ul>

      <h3>4.6. Mala prÃ¡ctica: insertar sin columnas</h3>

      <pre><code>{`INSERT INTO productos VALUES (...);  -- âŒ No recomendado`}</code></pre>

      <p>
        Si maÃ±ana aÃ±ades una columna nueva, esta consulta fallarÃ¡.
      </p>

      <h3>4.7. Buenas prÃ¡cticas</h3>

      <ul>
        <li>Especificar siempre las columnas</li>
        <li>Respetar los tipos de datos</li>
        <li>Usar inserciones mÃºltiples cuando sea posible</li>
        <li>Verificar las claves forÃ¡neas antes de insertar</li>
      </ul>

      {/* NUEVA SECCIÃ“N 4.9 */}
      <h3>4.8. Insertar solo algunas columnas (columnas opcionales)</h3>

      <p>
        MySQL solo exige que rellenes las columnas que son:
      </p>

      <ul>
        <li><strong>NOT NULL</strong> sin valor por defecto</li>
        <li><strong>AUTO_INCREMENT</strong> â†’ se rellenan solas</li>
        <li>Columnas con <strong>DEFAULT</strong> â†’ se completan solas</li>
      </ul>

      <h4>Ejemplo 1 â€” Insertar solo nombre y precio</h4>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio)
VALUES ('Producto parcial', 9.99);`}</code>
      </pre>

      <p>
        MySQL asignarÃ¡:
      </p>

      <ul>
        <li><code>id</code> â†’ AUTO_INCREMENT</li>
        <li><code>stock</code> â†’ 0 (DEFAULT)</li>
        <li><code>categoria_id</code> â†’ NULL (permitido)</li>
        <li><code>activo</code> â†’ 1 (DEFAULT)</li>
      </ul>

      <h4>Ejemplo 2 â€” Insertar usando DEFAULT</h4>

      <pre><code>{`INSERT INTO productos (nombre, precio, stock)
VALUES ('Producto sin stock', 12.50, DEFAULT);`}</code></pre>

      <p>El stock quedarÃ¡ en 0 (su valor por defecto).</p>

      <h4>Ejemplo 3 â€” Insertar solo nombre (fallarÃ¡)</h4>

      <pre><code>{`INSERT INTO productos (nombre)
VALUES ('Solo nombre');  -- âŒ Error (precio es NOT NULL)`}</code></pre>

            {/* USAR UNA FK AL INSERTAR */}
      <h4>Insertar datos que contienen una clave forÃ¡nea</h4>

      <p>
        Cuando una tabla es hija (por ejemplo, <code>productos</code> depende de
        <code>categorias</code>), debemos indicar el valor de la
        <strong>clave forÃ¡nea</strong> al insertar datos. Ese valor debe existir
        previamente en la tabla padre.
      </p>

      <h4>Ejemplo: insertar un producto en la categorÃ­a 1</h4>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio, stock, categoria_id)
VALUES ('Teclado mecÃ¡nico', 49.99, 10, 1);`}</code>
      </pre>

      <p>
        AquÃ­, <code>categoria_id = 1</code> debe existir en la tabla
        <strong>categorias</strong>. De lo contrario, el INSERT serÃ¡ rechazado.
      </p>

      <h4>Insertar varios productos con FK vÃ¡lida</h4>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio, stock, categoria_id)
VALUES 
  ('Cafetera', 35.00, 5, 2),
  ('Funda mÃ³vil', 12.50, 30, 3),
  ('Altavoz Bluetooth', 25.90, 12, 1);`}</code>
      </pre>

      <p>
        Cada producto queda asociado correctamente a su categorÃ­a correspondiente.
      </p>

      <h4>Â¿Y si la FK permite NULL?</h4>

      <p>
        Si la columna <code>categoria_id</code> estÃ¡ definida como
        <code>INT NULL</code>, entonces podemos insertar productos sin categorÃ­a.
      </p>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio)
VALUES ('Producto sin categorÃ­a', 15.00);`}</code>
      </pre>

      <p>
        En este caso, MySQL asignarÃ¡ automÃ¡ticamente:
        <br /> â†’ <code>categoria_id = NULL</code>
      </p>

      <h4>Ejemplo de error tÃ­pico (categorÃ­a inexistente)</h4>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio, categoria_id)
VALUES ('Producto fantasma', 10.00, 99);`}</code>
      </pre>

      <div className="callout warning">
        âŒ <strong>Error:</strong> la categorÃ­a <code>99</code> no existe.
        <br />
        MySQL rechaza el INSERT para proteger la integridad referencial.
      </div>

      <h4>Reglas fundamentales para usar FK al insertar</h4>

      <ul>
        <li>Primero debes insertar datos en la tabla padre.</li>
        <li>
          La clave forÃ¡nea debe apuntar a un valor existente o ser NULL (si estÃ¡ permitido).
        </li>
        <li>No puedes usar valores inventados en la FK.</li>
        <li>
          Si usas <code>DEFAULT</code> en la FK, este debe ser NULL o un ID vÃ¡lido.
        </li>
      </ul>

      <h4>Consulta recomendada antes de insertar</h4>

      <p>Muchas veces conviene comprobar primero quÃ© categorÃ­as existen:</p>

      <pre>
        <code>{`SELECT * FROM categorias;`}</code>
      </pre>

      <p>
        Esto evita errores al insertar productos que dependen de esas categorÃ­as.
      </p>


      <p>
        Â¡Perfecto! Ya sabes crear datos de forma correcta.  
        En la siguiente secciÃ³n aprenderemos:
        <strong>R â†’ SELECT (leer datos de forma profesional).</strong>
      </p>

    </article>
  </details>
</section>


        {/* 5. R â†’ SELECT */}
      {/* 5. R â†’ SELECT */}
<section className="section" id="crud-select">
  <details>
    <summary>R â†’ SELECT (leer datos)</summary>

    <article className="card">
      <h3>5. R â†’ SELECT (leer datos)</h3>

      {/* RECUADRO DE SINTAXIS */}
      <div className="callout">
        <strong>Sintaxis general de SELECT (versiÃ³n bÃ¡sica):</strong>
        <pre><code>{`SELECT lista_columnas
FROM nombre_tabla
[LIMIT cantidad];`}</code></pre>
        <p>
          Con <code>SELECT</code> indicamos <strong>quÃ© columnas queremos ver</strong>  
          y con <code>FROM</code> indicamos <strong>de quÃ© tabla</strong>. 
          Opcionalmente podemos limitar el nÃºmero de filas con <code>LIMIT</code>.
        </p>
      </div>

      <p>
        En el CRUD, la <strong>R de Read</strong> corresponde a <strong>SELECT</strong>.
        Es la sentencia que usamos para <strong>leer, buscar y mostrar</strong> informaciÃ³n
        guardada en las tablas.
      </p>

      <h3>5.1. SELECT * â€” leer toda la tabla</h3>
      <p>
        La forma mÃ¡s sencilla de usar SELECT es con <code>*</code>, que significa â€œtodas las columnasâ€.
      </p>

      <pre>
        <code>{`SELECT * FROM productos;`}</code>
      </pre>

      <p>
        Esta consulta muestra todas las filas y todas las columnas de la tabla
        <code> productos</code>: id, nombre, precio, stock, categoria_id, etc.
      </p>

      <div className="callout">
        <strong>Nota didÃ¡ctica:</strong> 
        <p>
          <code>SELECT *</code> es Ãºtil para probar y explorar, pero en aplicaciones reales
          es mejor pedir solo las columnas necesarias (mejor rendimiento y claridad).
        </p>
      </div>

      <h3>5.2. Seleccionar columnas concretas</h3>
      <p>
        Normalmente no necesitamos todas las columnas, sino solo algunas.  
        En ese caso, las indicamos por su nombre despuÃ©s de <code>SELECT</code>:
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
  Los <strong>alias</strong> nos permiten mostrar un nombre mÃ¡s claro para las columnas 
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
  <li>Hacen que las salidas sean mÃ¡s claras y profesionales.</li>
</ul>

<p>
  TambiÃ©n podemos usar comillas si el alias lleva espacios:
</p>

<pre>
  <code>{`SELECT nombre AS "Nombre del producto"
FROM productos;`}</code>
</pre>

<h4>Â¿En quÃ© casos tiene sentido usar <code>AS</code>?</h4>

<p>
  Aunque el alias no cambia la tabla, sÃ­ es muy Ãºtil cuando queremos que el 
  <strong>resultado</strong> de la consulta sea mÃ¡s claro o mÃ¡s adecuado al contexto.
  Estos son los casos mÃ¡s habituales:
</p>

<ul>
  <li>
    <strong>1. Informes o listados mÃ¡s legibles:</strong>  
    Cuando preparas una tabla para un informe, Excel, Google Sheets o un PDF, 
    el nombre original de la columna no siempre es el mejor para un lector.
  </li>

  <li>
    <strong>2. Consultas con funciones:</strong>  
    Si calculas una media, suma o porcentaje, el nombre por defecto serÃ­a feo:<br/>
    <code>AVG(puntuacion)</code>.  
    Con <code>AS</code>:  
    <pre><code>SELECT AVG(puntuacion) AS media FROM valoraciones;</code></pre>
  </li>

  <li>
    <strong>3. Consultas con expresiones o cÃ¡lculos:</strong>  
    <pre><code>SELECT precio * 1.21 AS precio_con_IVA FROM productos;</code></pre>
    Sin alias, esa columna no tiene nombre.
  </li>

  <li>
    <strong>4. Consultas con nombres largos o tÃ©cnicos:</strong>  
    <code>fecha_ultimo_acceso</code> â†’ <code>AS ultima_visita</code>
  </li>

  <li>
    <strong>5. Consultas que irÃ¡n a una API o un backend:</strong>  
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

<h4>Â¿Y si en el frontend ponemos nuestros propios nombres?</h4>

<p>
  Es cierto: en una web (HTML, React, Vue, etc.) solemos mostrar la informaciÃ³n 
  con los nombres que queramos. <strong>Pero el alias sigue siendo Ãºtil</strong> porque:
</p>

<ul>
  <li>
    <strong>El backend recibe un resultado mÃ¡s claro.</strong>  
    Si la API devuelve un campo <code>media</code> en vez de <code>AVG(puntuacion)</code>,
    el cÃ³digo del backend es mÃ¡s limpio.
  </li>

  <li>
    <strong>El frontend recibe directamente nombres mÃ¡s amigables.</strong><br/>
    AsÃ­ no tienes que renombrar JSON en React, por ejemplo.
  </li>

  <li>
    <strong>Si exportas datos a Excel o Google Sheets</strong>, los encabezados ya estÃ¡n listos.
  </li>

  <li>
    <strong>Cuando trabajas con analistas, informes o dashboards</strong>, los alias 
    ponen nombres profesionales a las columnas.
  </li>

  <li>
    <strong>Ayuda muchÃ­simo al leer cÃ³digos SQL de compaÃ±eros.</strong>
  </li>

  <li>
    <strong>Evita choques de nombres en consultas con muchas tablas.</strong>
  </li>
</ul>

<p>
  MÃ¡s adelante, cuando estudiemos <strong>JOIN</strong>, tambiÃ©n usaremos alias
  para renombrar <strong>tablas completas</strong> (por ejemplo, 
  <code>productos p</code>, <code>categorias c</code>), lo cual hace las 
  consultas mÃ¡s cortas y fÃ¡ciles de leer.
</p>

      <h3>5.4. LIMIT â€” mostrar solo algunas filas</h3>
      <p>
        A veces solo queremos ver unas pocas filas, por ejemplo, para probar o para 
        mostrar una â€œvista previaâ€. Para eso usamos <code>LIMIT</code>.
      </p>

      <pre>
        <code>{`SELECT * 
FROM productos
LIMIT 3;`}</code>
      </pre>

      <p>
        Esta consulta mostrarÃ¡ Ãºnicamente los <strong>3 primeros registros</strong> de la tabla.
      </p>

      <p>
        TambiÃ©n podemos combinar LIMIT con selecciÃ³n de columnas:
      </p>

      <pre>
        <code>{`SELECT nombre, precio
FROM productos
LIMIT 5;`}</code>
      </pre>

      <p>
        Muy Ãºtil para no saturar la pantalla cuando hay muchas filas.
      </p>

      <h3>5.5. Orden mental para leer un SELECT bÃ¡sico</h3>
      <p>
        Â¿CÃ³mo leer una consulta SELECT bÃ¡sica?
      </p>

      <pre>
        <code>{`
        1) SELECT â†’ quÃ© columnas vamos a mostrar
        2) FROM â†’ de quÃ© tabla vienen los datos
        3) LIMIT â†’ cuÃ¡ntas filas queremos ver`}</code>
      </pre>

      <p>
        MÃ¡s adelante aÃ±adiremos:
      </p>

      <ul>
        <li><strong>WHERE</strong> â†’ para filtrar filas (siguiente secciÃ³n)</li>
        <li><strong>ORDER BY</strong> â†’ para ordenar resultados</li>
        <li><strong>JOIN</strong> â†’ para combinar varias tablas</li>
      </ul>

      <h3>5.6. Ejemplos prÃ¡cticos con nuestras tablas</h3>

      <p><strong>Ver todos los productos:</strong></p>
      <pre>
        <code>{`SELECT * FROM productos;`}</code>
      </pre>

      <p><strong>Ver solo el nombre y el precio de los productos:</strong></p>
      <pre>
        <code>{`SELECT nombre, precio
FROM productos;`}</code>
      </pre>

      <p><strong>Ver solo los nombres de las categorÃ­as:</strong></p>
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

      <h3>5.7. Resumen de SELECT bÃ¡sico</h3>

      <p>
        La instrucciÃ³n <strong>SELECT</strong> es fundamental para leer datos en SQL.  
        Con ella podemos:
      </p>
      <ul>
        <li>Seleccionar todas las columnas (<code>*</code>) o solo las que necesitamos.</li>
        <li>Renombrar columnas con <code>AS</code> para mayor claridad.</li>
        <li>Limitar el nÃºmero de filas mostradas con <code>LIMIT</code>.</li>
      </ul>

      <p>
        Una vez dominado el SELECT bÃ¡sico, el siguiente paso es aprender a 
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
          La clÃ¡usula <code>WHERE</code> sirve para <strong>filtrar filas</strong>.  
          Primero se buscan las filas que cumplen la condiciÃ³n y solo despuÃ©s se muestran con
          <code>SELECT</code>.
        </p>
      </div>

      <p>
        Hasta ahora, con <code>SELECT</code> hemos recuperado <strong>todas</strong> las filas de una tabla.
        A partir de esta secciÃ³n, aprenderemos a quedarnos solo con las que nos interesan:
        productos mÃ¡s caros, con poco stock, de cierta categorÃ­a, etc.
      </p>

      <h3>8.1. Sintaxis bÃ¡sica de WHERE</h3>

      <pre>
        <code>{`SELECT columnas
FROM nombre_tabla
WHERE condicion;`}</code>
      </pre>

      <p>
        La condiciÃ³n puede ser una comparaciÃ³n, una combinaciÃ³n de varias comparaciones,
        o expresiones mÃ¡s complejas.
      </p>

      <h3>8.2. Operadores de comparaciÃ³n</h3>

      <p>Los mÃ¡s usados son:</p>

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

      <p><strong>Ejemplo:</strong> productos mÃ¡s caros de 30â‚¬</p>

      <pre>
        <code>{`SELECT nombre, precio
FROM productos
WHERE precio > 30;`}</code>
      </pre>

<p>Podemos hacer tambiÃ©n una selecciÃ³n con un alias</p>
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
      <h3>8.3. Operadores lÃ³gicos: AND y OR</h3>

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
          Puedes usar parÃ©ntesis para agrupar condiciones y evitar dudas:
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
        Sirve para comprobar si un valor estÃ¡ dentro de una <strong>lista</strong> de opciones.
      </p>

      <pre>
        <code>{`SELECT nombre, categoria_id
FROM productos
WHERE categoria_id IN (1, 3);`}</code>
      </pre>

      <p>
        Esto devuelve los productos de la categorÃ­a 1 o de la 3.
      </p>

      <h3>8.5. LIKE â€” buscar por texto</h3>

      <p>
        <code>LIKE</code> se usa para hacer <strong>bÃºsquedas por patrones de texto</strong>.
        Utiliza comodines:
      </p>

      <ul>
        <li><code>%</code> â†’ cualquier nÃºmero de caracteres (incluido 0)</li>
        <li><code>_</code> â†’ exactamente un carÃ¡cter</li>
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
        <code>{`-- Productos sin categorÃ­a asignada
SELECT nombre
FROM productos
WHERE categoria_id IS NULL;

-- Productos con categorÃ­a
SELECT nombre
FROM productos
WHERE categoria_id IS NOT NULL;`}</code>
      </pre>

      <h3>8.7. Orden mental de una consulta con WHERE</h3>

      <p>
        A la hora de entender quÃ© hace una consulta con WHERE, seguimos este orden mental:
      </p>

      <pre>
        <code>{`1) FROM â†’ elige la tabla
2) WHERE â†’ filtra las filas
3) SELECT â†’ muestra las columnas deseadas
4) LIMIT â†’ limita el nÃºmero de filas (si lo usamos)`}</code>
      </pre>

      <p>
        MÃ¡s adelante aÃ±adiremos <strong>ORDER BY</strong> al final para ordenar los resultados.
      </p>

      <h3>8.8. Ejemplos prÃ¡cticos con la tabla productos</h3>

      <p><strong>Productos con stock bajo (menos de 5 unidades):</strong></p>
      <pre>
        <code>{`SELECT nombre, stock
FROM productos
WHERE stock < 5;`}</code>
      </pre>

      <p><strong>Productos de la categorÃ­a 1 (ElectrÃ³nica) y precio mayor de 20â‚¬:</strong></p>
      <pre>
        <code>{`SELECT nombre, precio, categoria_id
FROM productos
WHERE categoria_id = 1
  AND precio > 20;`}</code>
      </pre>

      <p><strong>Productos que no tienen categorÃ­a:</strong></p>
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
          La clÃ¡usula <code>ORDER BY</code> se usa para <strong>ordenar</strong> los resultados 
          de una consulta. Podemos ordenar por una columna o por varias, en orden ascendente 
          o descendente.
        </p>
      </div>

      <p>
        Una vez filtramos datos con <code>WHERE</code>, normalmente queremos presentarlos de forma 
        ordenada: por precio, por stock, por nombre, etc. AquÃ­ entra en juego 
        <code>ORDER BY</code>.
      </p>

      <p> Cuando utilizamos <code className="etiqueta-codigo">ORDER BY</code> sin indicar ningÃºn modificador, MySQL aplica por defecto un orden <strong>ascendente (ASC)</strong>. Esto significa que los resultados se organizan de menor a mayor: los nÃºmeros mÃ¡s pequeÃ±os aparecen primero y los textos se ordenan alfabÃ©ticamente segÃºn el collation de la base de datos. AdemÃ¡s, los valores <code className="etiqueta-codigo">NULL</code> se sitÃºan antes que el resto. Por tanto, escribir <code className="etiqueta-codigo">ORDER BY precio</code> y <code className="etiqueta-codigo">ORDER BY precio ASC</code> produce exactamente el mismo resultado. Solo es necesario usar <code className="etiqueta-codigo">DESC</code> cuando queremos invertir este orden. </p>

      <h3>9.1. Sintaxis bÃ¡sica de ORDER BY</h3>

      <pre>
        <code>{`SELECT columnas
FROM tabla
ORDER BY columna ASC | DESC;`}</code>
      </pre>

      <p>
        MySQL usa <strong>ASC</strong> (ascendente) por defecto, por lo que si no indicamos nada, 
        se ordenarÃ¡ del mÃ¡s pequeÃ±o al mÃ¡s grande.
      </p>

      <h3>9.2. Orden ascendente (ASC)</h3>

      <p><strong>Ejemplo: productos ordenados por precio, de mÃ¡s barato a mÃ¡s caro</strong></p>

      <pre>
        <code>{`SELECT nombre, precio
FROM productos
ORDER BY precio ASC;`}</code>
      </pre>

      <p>
        Como ASC es el valor por defecto, podrÃ­amos escribir solo:
      </p>

      <pre>
        <code>{`ORDER BY precio;`}</code>
      </pre>

      <h3>9.3. Orden descendente (DESC)</h3>

      <p><strong>Ejemplo: productos del mÃ¡s caro al mÃ¡s barato</strong></p>

      <pre>
        <code>{`SELECT nombre, precio
FROM productos
ORDER BY precio DESC;`}</code>
      </pre>

      <p>
        DESC es muy Ãºtil para ver:
      </p>

      <ul>
        <li>Productos mÃ¡s caros primero</li>
        <li>Productos con mÃ¡s stock</li>
        <li>Registros recientes (por fecha DESC)</li>
      </ul>

      <h3>9.4. Ordenar por varias columnas</h3>

      <p>
        Podemos ordenar usando mÃ¡s de una columna.  
        Se aplica el orden de izquierda a derecha.
      </p>

      <p><strong>Ejemplo: ordenar por categorÃ­a y luego por precio ascendente</strong></p>

      <pre>
        <code>{`SELECT nombre, precio, categoria_id
FROM productos
ORDER BY categoria_id ASC, precio ASC;`}</code>
      </pre>

      <p><strong>Ejemplo: ordenar por categorÃ­a pero dentro de cada una mostrar el producto mÃ¡s caro primero</strong></p>

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
        Si en <code>SELECT</code> usamos un alias, tambiÃ©n podemos ordenarlo por ese alias.
      </p>

      <pre>
        <code>{`SELECT nombre AS producto, precio AS coste
FROM productos
ORDER BY coste DESC;`}</code>
      </pre>

      <p>
        Esto es muy Ãºtil cuando el nombre real de la columna es largo o menos descriptivo.
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
        Esto es habitual cuando queremos una lista â€œlimpiaâ€, pero bien ordenada.
      </p>

      <h3>9.7. Ordenar textos: orden alfabÃ©tico</h3>

      <p><strong>Ejemplo: productos ordenados alfabÃ©ticamente</strong></p>

      <pre>
        <code>{`SELECT nombre
FROM productos
ORDER BY nombre ASC;`}</code>
      </pre>

      <p>Y al revÃ©s:</p>

      <pre>
        <code>{`ORDER BY nombre DESC;`}</code>
      </pre>

      <h3>9.8. Orden mental al leer consultas con ORDER BY</h3>

      <pre>
        <code>{`1) FROM â†’ de quÃ© tabla vienen los datos
2) WHERE â†’ filtramos filas (si existe)
3) SELECT â†’ mostramos columnas
4) ORDER BY â†’ orden final de los resultados
5) LIMIT â†’ si queremos limitar filas`}</code>
      </pre>

      <h3>9.9. Ejemplos prÃ¡cticos</h3>

      <p><strong>Productos con precio mayor de 20â‚¬, ordenados del mÃ¡s caro al mÃ¡s barato:</strong></p>

      <pre>
        <code>{`SELECT nombre, precio
FROM productos
WHERE precio > 20
ORDER BY precio DESC;`}</code>
      </pre>

      <p><strong>Productos ordenados por stock, del mÃ¡s alto al mÃ¡s bajo:</strong></p>

      <pre>
        <code>{`SELECT nombre, stock
FROM productos
ORDER BY stock DESC;`}</code>
      </pre>

      <p><strong>Productos ordenados por categorÃ­a y nombre alfabÃ©tico:</strong></p>

      <pre>
        <code>{`SELECT nombre, categoria_id
FROM productos
ORDER BY categoria_id ASC, nombre ASC;`}</code>
      </pre>

      <h3>9.10. Ejercicios recomendados</h3>

      <ul>
        <li>Ordena los productos por precio ascendente.</li>
        <li>Ordena los productos por stock descendente.</li>
        <li>Ordena los productos por nombre alfabÃ©ticamente.</li>
        <li>
          Ordena por categorÃ­a y dentro de cada categorÃ­a por precio descendente.
        </li>
        <li>
          Muestra solo el nombre de los productos ordenados por precio.
        </li>
        <li>
          Ordena los productos que cuesten menos de 20â‚¬ por precio ascendente.
        </li>
      </ul>

      <p>
        Ahora que ya sabes ordenar resultados, pasaremos a uno de los conceptos
        mÃ¡s importantes del modelo relacional:
        <strong> unir tablas con JOIN</strong>.
      </p>

    </article>
  </details>
</section>

<section className="section" id="funciones-agregacion">

  <details>
    <summary>Funciones de agregaciÃ³n (AVG, COUNT, SUM, MAX, MIN) y la clÃ¡usula HAVING</summary>

    <article className="card">

      <h2>Funciones de agregaciÃ³n y la clÃ¡usula HAVING</h2>

      <p>
        Las funciones de agregaciÃ³n son herramientas que permiten obtener 
        <strong> resultados resumidos</strong> a partir de un conjunto de datos: promedios, totales, 
        mÃ¡ximos, mÃ­nimos o conteos.  
        Estas funciones son fundamentales en las consultas con 
        <code className="etiqueta-codigo">GROUP BY</code>, ya que se aplican a cada grupo 
        generado.
      </p>

      <hr />

      <h3>ðŸ“Œ Funciones principales de agregaciÃ³n</h3>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>FunciÃ³n</th>
              <th>DescripciÃ³n detallada</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td><code className="etiqueta-codigo">AVG(campo)</code></td>
              <td>
                Calcula el <strong>promedio</strong> de los valores numÃ©ricos de un campo. 
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
                Cuenta cuÃ¡ntos registros hay en un campo.  
                <strong>COUNT(*)</strong> cuenta todas las filas, incluso si alguno de sus valores es NULL.  
                <strong>COUNT(campo)</strong> solo cuenta las filas donde ese campo no es NULL.
                <br /><br />
                Ejemplo: cuÃ¡ntos clientes tenemos:
                <div className="bloque-codigo">
                  SELECT COUNT(*) FROM clientes;
                </div>
              </td>
            </tr>

            <tr>
              <td><code className="etiqueta-codigo">SUM(campo)</code></td>
              <td>
                Suma los valores numÃ©ricos de un campo.  
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
                Devuelve el valor mÃ¡s alto dentro del conjunto.  
                Muy Ãºtil para saber el producto mÃ¡s caro, la fecha mÃ¡s reciente, etc.
                <br /><br />
                Ejemplo: precio mÃ¡ximo:
                <div className="bloque-codigo">
                  SELECT MAX(precio) FROM productos;
                </div>
              </td>
            </tr>

            <tr>
              <td><code className="etiqueta-codigo">MIN(campo)</code></td>
              <td>
                Devuelve el valor mÃ¡s bajo.  
                Perfecto para encontrar el producto mÃ¡s barato o la primera fecha registrada.
                <br /><br />
                Ejemplo: precio mÃ­nimo:
                <div className="bloque-codigo">
                  SELECT MIN(precio) FROM productos;
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <hr />

      <h3>ðŸ“Š Agrupar resultados con GROUP BY</h3>
      <p>
        Si queremos aplicar estas funciones segÃºn una categorÃ­a (por ejemplo, ciudad, categorÃ­a
        o cliente), debemos combinar la funciÃ³n con 
        <code className="etiqueta-codigo">GROUP BY</code>.
      </p>

      <div className="bloque-codigo">
        SELECT ciudad, COUNT(*) AS total<br />
        FROM clientes<br />
        GROUP BY ciudad;
      </div>

      <p>
        En este ejemplo, obtenemos cuÃ¡ntos clientes hay en cada ciudad.
      </p>

      <hr />

      <section className="section" id="funciones-agrupacion-ejemplo">
  <details>
    <summary>Ejemplo prÃ¡ctico: Agrupar y sumar precios por secciÃ³n</summary>

    <article className="card">

      <h2>Ejemplo: Agrupar artÃ­culos por secciÃ³n y calcular la suma de precios</h2>

      <p>
        Imagina que tenemos una tabla <code>productos</code> con diferentes artÃ­culos de un comercio:
        lÃ¡mparas, tubos, raquetas, coches teledirigidos, etc.  
        Queremos saber <strong>cuÃ¡nto dinero suman todos los artÃ­culos de cada secciÃ³n</strong>
        (ferreterÃ­a, cerÃ¡mica, deportes, jugueterÃ­aâ€¦).
      </p>

      <p>
        Para ello usamos una funciÃ³n de agrupaciÃ³n (<code>SUM()</code>) junto con 
        <code>GROUP BY</code>. MySQL agrupa los productos por su secciÃ³n y calcula la suma
        del precio dentro de cada grupo.
      </p>

      <pre><code>
SELECT 
    SECCIÃ“N,
    NOMBREARTICULO,
    SUM(PRECIO) AS SUMA_ARTICULOS
FROM productos
GROUP BY SECCIÃ“N
ORDER BY SUMA_ARTICULOS;
      </code></pre>

      <h3>Â¿QuÃ© estÃ¡ ocurriendo aquÃ­?</h3>

      <ul className="lista-simple">
        <li><code>SECCIÃ“N</code> â†’ es el campo por el que agrupamos.</li>
        <li><code>SUM(PRECIO)</code> â†’ calcula la suma de todos los precios de esa secciÃ³n.</li>
        <li><code>GROUP BY</code> â†’ indica a MySQL que debe crear un grupo por cada secciÃ³n.</li>
        <li><code>ORDER BY SUMA_ARTICULOS</code> â†’ ordena los resultados de menor a mayor suma total.</li>
      </ul>

      <h3>Resultado (interpretaciÃ³n de la imagen)</h3>

      <p>
        El resultado muestra cada secciÃ³n junto con la <strong>suma total</strong> del precio de los 
        artÃ­culos que pertenecen a ella. Por ejemplo:
      </p>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>SECCIÃ“N</th>
              <th>NOMBREARTICULO</th>
              <th>SUMA_ARTICULOS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>CERÃMICA</td>
              <td>TUBOS</td>
              <td>442.3498</td>
            </tr>

            <tr>
              <td>DEPORTES</td>
              <td>RAQUETA TENIS</td>
              <td>1305.8123</td>
            </tr>

            <tr>
              <td>JUGUETERÃA</td>
              <td>COCHE TELEDIRIGIDO</td>
              <td>2516.7141</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout">
        Observa que MySQL muestra un <strong>artÃ­culo representativo</strong> de cada secciÃ³n, pero 
        la suma incluye <strong>todos los artÃ­culos</strong> de esa categorÃ­a, aunque no aparezcan listados.
      </div>

      <p className="nota nota-importante">
        Este es un ejemplo claro de cÃ³mo usar funciones de agrupaciÃ³n para obtener 
        <strong>totales por categorÃ­as</strong>, muy Ãºtil en informes, estadÃ­sticas y anÃ¡lisis de ventas.
      </p>

    </article>
  </details>
</section>


      {/* ============================
          SECCIÃ“N HAVING
      ============================ */}

      <h3>ðŸ”Ž Â¿QuÃ© es HAVING y para quÃ© sirve?</h3>

      <p>
        La clÃ¡usula <code className="etiqueta-codigo">HAVING</code> funciona como un filtro,
        pero se utiliza <strong>despuÃ©s de agrupar</strong>.  
        Mientras que <code className="etiqueta-codigo">WHERE</code> filtra filas individuales,
        <code className="etiqueta-codigo">HAVING</code> filtra grupos completos.
      </p>

      <div className="cuadro-didactico">
        <h4>Diferencia clave</h4>
        <p>
          <strong>WHERE</strong> â†’ filtra antes de agrupar  
          <br />
          <strong>HAVING</strong> â†’ filtra despuÃ©s de agrupar
        </p>
      </div>

      <h3>ðŸ“Œ Ejemplo de HAVING: solo ciudades con mÃ¡s de 3 clientes</h3>

      <div className="bloque-codigo">
        SELECT ciudad, COUNT(*) AS total<br />
        FROM clientes<br />
        GROUP BY ciudad<br />
        HAVING COUNT(*) &gt; 3;
      </div>

      <p>
        En este caso, solo aparecerÃ¡n las ciudades cuyo total de clientes sea mayor de 3.  
        Este filtro no podrÃ­a hacerse con <code>WHERE</code>, porque 
        <strong>WHERE no puede usar funciones de agregaciÃ³n</strong>.
      </p>

      <hr />

      <h3>ðŸ’¡ Ejemplo avanzado: categorÃ­as cuyo precio medio es superior a 200â‚¬</h3>

      <div className="bloque-codigo">
        SELECT categoria_id, AVG(precio) AS precio_medio<br />
        FROM productos<br />
        GROUP BY categoria_id<br />
        HAVING AVG(precio) &gt; 200;
      </div>

      <p>
        Gracias a <code>HAVING</code>, podemos mostrar solo las categorÃ­as cuyo precio medio 
        supera un valor determinado.
      </p>

    </article>

  </details>

</section>

<section className="section" id="funciones-agrupacion-having">
  <details>
    <summary>Ejemplo prÃ¡ctico: Calcular la media de precios y filtrar grupos con HAVING</summary>

    <article className="card">

      <h2>Ejemplo: Calcular la media de precios por secciÃ³n y filtrar grupos con <code>HAVING</code></h2>

      <p>
        En este ejemplo queremos obtener la <strong>media del precio</strong> de los productos
        agrupados por <code>SECCIÃ“N</code>.  
        Sin embargo, no queremos ver todas las secciones, sino solo dos de ellas:
        <strong>DEPORTES</strong> y <strong>CONFECCIÃ“N</strong>.
      </p>

      <p>
        Para conseguirlo utilizamos <strong>GROUP BY</strong> para agrupar por secciÃ³n y 
        <strong>HAVING</strong> para filtrar los grupos una vez creados.
      </p>

      <hr />

      <h3>ðŸ”Ž Â¿QuÃ© hace exactamente esta consulta?</h3>

      <pre><code>
SELECT 
    SECCIÃ“N,
    AVG(PRECIO) AS MEDIA_ARTICULOS
FROM productos
GROUP BY SECCIÃ“N
HAVING SECCIÃ“N = 'DEPORTES'
    OR SECCIÃ“N = 'CONFECCIÃ“N'
ORDER BY MEDIA_ARTICULOS DESC;
      </code></pre>

      <p>
        La consulta sigue este proceso de izquierda a derecha y de arriba a abajo:
      </p>

      <ol className="lista-simple">
        <li><strong>SELECT</strong>: elegimos quÃ© columnas queremos ver.</li>
        <li><strong>FROM</strong>: indicamos la tabla origen.</li>
        <li><strong>GROUP BY SECCIÃ“N</strong>: MySQL forma un â€œgrupoâ€ por cada secciÃ³n distinta.</li>
        <li><strong>AVG(PRECIO)</strong>: calcula la media dentro de cada grupo.</li>
        <li><strong>HAVING</strong>: descarta los grupos que no sean DEPORTES o CONFECCIÃ“N.</li>
        <li><strong>ORDER BY</strong>: ordena los grupos resultantes.</li>
      </ol>

      <p>
        El resultado es una tabla resumen donde solo aparecen las secciones que hemos filtrado con HAVING.
      </p>

      <hr />

      <h3>ðŸ“˜ Diferencia fundamental entre WHERE y HAVING</h3>

      <div className="callout">
        <strong>WHERE</strong> â†’ filtra filas **antes** del GROUP BY. <br />
        <strong>HAVING</strong> â†’ filtra grupos **despuÃ©s** del GROUP BY.
      </div>

      <p>
        Esto significa que <strong>WHERE no puede usar funciones de agregaciÃ³n</strong>, pero HAVING sÃ­.
      </p>

      <ul className="lista-simple">
        <li>âœ” <code>HAVING AVG(precio) &gt; 50</code> â†’ correcto</li>
        <li>âŒ <code>WHERE AVG(precio) &gt; 50</code> â†’ error</li>
      </ul>

      <hr />

      <h3>ðŸ“ Resultado esperado</h3>

      <p>Algo parecido a esto:</p>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>SECCIÃ“N</th>
              <th>MEDIA_ARTICULOS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DEPORTES</td>
              <td>103.50</td>
            </tr>
            <tr>
              <td>CONFECCIÃ“N</td>
              <td>72.40</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h3>âš ï¸ Errores frecuentes del alumnado</h3>

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

      <h3>ðŸ’¡ Otro ejemplo alternativo (muy tÃ­pico)</h3>

      <p>Mostrar solo las secciones cuya media de precio sea mayor de 50â‚¬:</p>

      <pre><code>
SELECT SECCIÃ“N, AVG(PRECIO) AS media
FROM productos
GROUP BY SECCIÃ“N
HAVING AVG(PRECIO) &gt; 50;
      </code></pre>

      <p>
        AquÃ­ HAVING se usa para filtrar no por valores exactos, sino por un 
        <strong>cÃ¡lculo agregado</strong>.
      </p>

      <hr />

      <h3>ðŸŽ¯ Mini-ejercicio final</h3>

      <p>
        Realiza estas consultas y comprueba tus resultados:
      </p>

      <ol className="lista-simple">
        <li>Muestra la suma del precio por secciÃ³n y quÃ©date solo con las secciones cuya suma supere 300â‚¬.</li>
        <li>ObtÃ©n el precio medio por secciÃ³n, pero solo muestra las secciones cuyos nombres contengan la letra â€œAâ€.</li>
        <li>Muestra cuÃ¡ntos productos hay por secciÃ³n, pero solo aquellas con mÃ¡s de 2 productos.</li>
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
      <h2>Funciones Ãºtiles y frecuentes en MySQL</h2>

      <p>
        MySQL incluye funciones muy prÃ¡cticas para trabajar con fechas, nÃºmeros y textos.
        Estas funciones nos permiten obtener informaciÃ³n adicional sin tener que procesar 
        los datos fuera de la base de datos.
      </p>

      <hr />

      {/* ============================
          NOW()
      ============================ */}
      <h3>â±ï¸ NOW(): fecha y hora actuales</h3>
      <p>Devuelve la <strong>fecha y hora actuales</strong> del servidor MySQL.</p>
      <div className="bloque-codigo">SELECT NOW();</div>

      <p>Muy Ãºtil para registrar cuÃ¡ndo se crea un pedido, usuario o registro.</p>

      <hr />

      {/* ============================
          DATEDIFF()
      ============================ */}
      <h3>ðŸ“… DATEDIFF(): diferencia entre dos fechas</h3>
      <p>Calcula cuÃ¡ntos <strong>dÃ­as</strong> hay entre dos fechas.</p>

      <div className="bloque-codigo">
        SELECT DATEDIFF(NOW(), fecha_registro) AS dias_antiguedad<br />
        FROM clientes;
      </div>

      <p>AsÃ­ obtenemos la antigÃ¼edad de cada cliente en dÃ­as.</p>

      <hr />

      {/* ============================
          DATE_FORMAT()
      ============================ */}
      <h3>ðŸ—‚ï¸ DATE_FORMAT(): formatear fechas</h3>
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
      <h3>ðŸ”¤ CONCAT(): unir textos</h3>
      <p>Combina varios textos o columnas en uno solo.</p>

      <div className="bloque-codigo">
        SELECT CONCAT(nombre, ' - ', ciudad) AS cliente<br />
        FROM clientes;
      </div>

      <p>Ãštil para mostrar campos combinados (nombre + ciudad, nombre + categorÃ­a...).</p>

      <hr />

      {/* ============================
          UPPER() y LOWER()
      ============================ */}
      <h3>ðŸ”  UPPER() / LOWER(): texto en mayÃºsculas o minÃºsculas</h3>
      <p>Transforman cadenas a mayÃºsculas o minÃºsculas.</p>

      <div className="bloque-codigo">
        SELECT UPPER(nombre) AS nombre_mayus, LOWER(ciudad) AS ciudad_minus<br />
        FROM clientes;
      </div>

      <p>Muy Ãºtil para bÃºsquedas sin distinguir mayÃºsculas.</p>

      <hr />

      {/* ============================
          LENGTH()
      ============================ */}
      <h3>ðŸ“ LENGTH(): longitud de un texto</h3>
      <p>Devuelve cuÃ¡ntos caracteres tiene una cadena.</p>

      <div className="bloque-codigo">
        SELECT nombre, LENGTH(nombre) AS longitud<br />
        FROM clientes;
      </div>

      <p>Perfecto para validar longitudes o detectar datos incompletos.</p>

      <hr />

      {/* ============================
          IFNULL()
      ============================ */}
      <h3>â“ IFNULL(): reemplazar valores nulos</h3>
      <p>Permite mostrar un valor alternativo cuando una columna es NULL.</p>

      <div className="bloque-codigo">
        SELECT IFNULL(telefono, 'Sin telÃ©fono') AS telefono_mostrado<br />
        FROM clientes;
      </div>

      <p>Muy usado en informes y pantallas de usuario.</p>

      <hr />

      {/* ============================
          ROUND()
      ============================ */}
      <h3>ðŸŽ¯ ROUND(): redondear nÃºmeros</h3>
      <p>Redondea un nÃºmero al nÃºmero de decimales indicado.</p>

      <div className="bloque-codigo">
        SELECT ROUND(AVG(precio), 2) AS precio_medio_redondeado<br />
        FROM productos;
      </div>

      <p>Ideal para informes financieros o precios.</p>

      <hr />

      {/* ============================
          TRUNCATE()
      ============================ */}
      <h3>âœ‚ï¸ TRUNCATE(): cortar decimales</h3>
      <p>Corta un nÃºmero a un nÃºmero de decimales sin redondear.</p>

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
        <strong>Piensa en una vista como en una â€œventanaâ€ a los datos</strong>.
        La informaciÃ³n no se duplica, solo se presenta de forma mÃ¡s cÃ³moda.
      </div>

      <h4>Â¿Para quÃ© sirven las vistas?</h4>
      <ul>
        <li>Para <strong>simplificar consultas complejas</strong> que usamos a menudo.</li>
        <li>Para crear <strong>informes</strong> (por ejemplo, â€œvaloraciones excelentesâ€).</li>
        <li>Para mejorar la <strong>legibilidad</strong> del cÃ³digo SQL.</li>
        <li>Para <strong>proteger datos sensibles</strong> (la vista muestra solo lo que queremos).</li>
        <li>Para que varias aplicaciones consulten los datos de forma unificada.</li>
      </ul>

      <h4>Ejemplo simple: crear una vista</h4>

      <p>Queremos mostrar solo las valoraciones con puntuaciÃ³n superior a 8:</p>

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

      <h4>Vistas con JOIN (mÃ¡s Ãºtiles en proyectos)</h4>

      <p>En nuestro catÃ¡logo de pelÃ­culas queremos ver informaciÃ³n completa:</p>

      <ul>
        <li>nombre del usuario</li>
        <li>tÃ­tulo de la pelÃ­cula</li>
        <li>puntuaciÃ³n</li>
        <li>comentario</li>
      </ul>

      <p>Podemos crear una vista asÃ­:</p>

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

      <h4>Â¿Las vistas guardan datos?</h4>

      <p>
        <strong>No.</strong>  
        Las vistas <em>no almacenan copias</em>.
        Cada vez que consultas una vista, MySQL ejecuta la consulta original.
      </p>

      <div className="callout">
        <strong>Ventaja:</strong> siempre ves datos actualizados.<br />
        <strong>Inconveniente:</strong> vistas muy complejas pueden ser mÃ¡s lentas.
      </div>

      <h4>Buenas prÃ¡cticas al crear vistas</h4>
      <ul>
        <li>Usar nombres claros (p. ej. <code>vista_ventas_mensuales</code>).</li>
        <li>AÃ±adir alias descriptivos a las columnas.</li>
        <li>No incluir datos sensibles si la vista serÃ¡ pÃºblica.</li>
        <li>Evitar vistas demasiado grandes o muy complejas.</li>
        <li>Usar <code>CREATE OR REPLACE VIEW</code> para actualizar vistas.</li>
      </ul>

      <h4>Ejemplos en nuestro proyecto catalogopelis</h4>

      <p><strong>1. PelÃ­culas con su actor y gÃ©nero:</strong></p>

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

      <p><strong>2. Ranking de pelÃ­culas por puntuaciÃ³n media:</strong></p>

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
        <li>Crea una vista llamada <code>vista_valoraciones_recientes</code> con las valoraciones de los Ãºltimos 7 dÃ­as.</li>
        <li>Crea una vista con todas las pelÃ­culas de un gÃ©nero concreto (acciÃ³n, dramaâ€¦).</li>
        <li>Crea una vista que muestre solo las valoraciones de un usuario concreto.</li>
      </ul>

      <p>Las vistas son una herramienta poderosa para simplificar SQL y crear informes profesionales.</p>

    </article>
  </details>
</section>



        {/* 6. U â†’ UPDATE */}
        {/* 6. U â†’ UPDATE */}
<section className="section" id="crud-update">
  <details>
    <summary>U â†’ UPDATE (modificar datos)</summary>

    <article className="card">
      <h3>6. U â†’ UPDATE (modificar datos)</h3>

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
          Siempre debe ir acompaÃ±ado de <code>WHERE</code> para evitar 
          cambiar toda la tabla por accidente.
        </p>
      </div>

      <p>
        En el CRUD, la <strong>U de Update</strong> representa la modificaciÃ³n de uno o varios 
        registros. Podemos cambiar precios, nombres, stocks, categorÃ­as o cualquier otro valor.
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
        Muy Ãºtil cuando necesitamos actualizar varios datos relacionados.
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
          Muy Ãºtil para aplicar incrementos o descuentos.
        </p>
      </div>

      <h3>6.4. Actualizar claves forÃ¡neas (FK)</h3>

      <p>
        TambiÃ©n podemos cambiar la categorÃ­a de un producto actualizando su 
        <code>categoria_id</code>.
      </p>

      <p><strong>Ejemplo: mover un producto a la categorÃ­a 2</strong></p>

      <pre>
        <code>{`UPDATE productos
SET categoria_id = 2
WHERE id = 5;`}</code>
      </pre>

      <p>
        Esto solo funcionarÃ¡ si la categorÃ­a 2 existe en la tabla
        <strong> categorias</strong>.
      </p>

      <h4>Â¿QuÃ© pasa si asignamos una categorÃ­a que no existe?</h4>

      <pre>
        <code>{`UPDATE productos
SET categoria_id = 99
WHERE id = 5;`}</code>
      </pre>

      <div className="callout warning">
        âŒ <strong>Error:</strong> MariaDB no permite asignar claves forÃ¡neas que no existan 
        en la tabla padre.  
        Esto evita romper la integridad referencial.
      </div>

      <h3>6.5. UPDATE sin WHERE â€” el error mortal</h3>

      <p>
        Uno de los errores mÃ¡s graves que puede cometer un principiante es olvidar el 
        <code>WHERE</code>.
      </p>

      <pre>
        <code>{`UPDATE productos
SET precio = 1;   -- âŒ ERROR: actualiza TODA la tabla`}</code>
      </pre>

      <div className="callout warning">
        âŒ <strong>Â¡Nunca hagas un UPDATE sin WHERE!</strong>  
        CambiarÃ­as todos los registros y es muy difÃ­cil de deshacer sin copia de seguridad.
      </div>

      <h3>6.6. Actualizar con alias</h3>

      <p>
        Aunque es menos habitual, podemos usar alias cuando la consulta es mÃ¡s compleja.
      </p>

      <pre>
        <code>{`UPDATE productos p
SET p.stock = p.stock + 5
WHERE p.categoria_id = 1;`}</code>
      </pre>

      <h3>6.7. Orden mental para entender UPDATE</h3>

      <pre>
        <code>{`1) FROM (implÃ­cito en la tabla a actualizar)
2) WHERE â†’ quÃ© filas se seleccionan
3) SET â†’ quÃ© valores se aplican a esas filas`}</code>
      </pre>

      <h3>6.8. Ejemplos prÃ¡cticos</h3>

      <p><strong>Aumentar el stock de los productos de la categorÃ­a 1</strong></p>
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
        <li>Cambia la categorÃ­a del producto con id 2 a la categorÃ­a 1.</li>
        <li>Aplica un incremento del 20% a los productos con precio inferior a 10â‚¬.</li>
        <li>Establece el stock a 0 para todos los productos de la categorÃ­a 3.</li>
        <li>Actualiza dos columnas a la vez (precio + stock) de un producto concreto.</li>
      </ul>

      <p>
        Ya dominamos UPDATE.  
        El siguiente paso del CRUD es aprender a <strong>eliminar registros con DELETE</strong>.
      </p>

    </article>
  </details>
</section>

        {/* 7. D â†’ DELETE */}
      {/* 7. D â†’ DELETE */}
<section className="section" id="crud-delete">
  <details>
    <summary>D â†’ DELETE (eliminar datos)</summary>

    <article className="card">
      <h3>7. D â†’ DELETE (eliminar datos)</h3>

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
        En el CRUD, la <strong>D de Delete</strong> representa la eliminaciÃ³n.  
        Puede ser un borrado fÃ­sico (DELETE real) o un borrado lÃ³gico (marcar como inactivo).
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
        âš  <strong>Advertencia:</strong>  
        DELETE no se puede deshacer a menos que tengas copia de seguridad.
      </div>

      <h3>7.3. DELETE sin WHERE â€” el peor error posible</h3>

      <pre>
        <code>{`DELETE FROM productos;   -- âŒ ERROR: borra TODA la tabla`}</code>
      </pre>

      <div className="callout warning">
        âŒ <strong>Nunca uses DELETE sin WHERE.</strong><br />
        Esto elimina absolutamente todas las filas.  
        Un error muy comÃºn entre principiantes.  
        EnseÃ±a a tu alumnado a revisarlo dos veces antes de ejecutar.
      </div>

      <h3>7.4. Eliminar registros relacionados (problemas con FK)</h3>

      <p>
        Si intentamos borrar una categorÃ­a que tiene productos asociados, MariaDB no nos dejarÃ¡:
      </p>

      <pre>
        <code>{`DELETE FROM categorias
WHERE id = 1;`}</code>
      </pre>

      <div className="callout warning">
        âŒ <strong>Error:</strong> existen productos que dependen de esta categorÃ­a.  
        La <strong>integridad referencial</strong> protege la base de datos.
      </div>

      <h4>Â¿CÃ³mo solucionarlo?</h4>

      <ul>
        <li>Borrando o reasignando primero los productos de esa categorÃ­a</li>
        <li>O usando ON DELETE CASCADE (solo si el modelo lo permite)</li>
      </ul>

      <h4>Ejemplo con CASCADE:</h4>

      <pre>
        <code>{`FOREIGN KEY (categoria_id)
  REFERENCES categorias(id)
  ON DELETE CASCADE;`}</code>
      </pre>

      <p>
        AsÃ­, al borrar una categorÃ­a, se borran automÃ¡ticamente sus productos.
      </p>

      <div className="callout">
        <strong>Regla prÃ¡ctica:</strong>  
        <p>
          Usa CASCADE solo cuando ese comportamiento tenga sentido en tu aplicaciÃ³n.  
          En una tienda real, borrar una categorÃ­a no deberÃ­a borrar cientos de productos sin control.
        </p>
      </div>

      <h3>7.5. Borrado lÃ³gico (la alternativa profesional)</h3>

      <p>
        En la mayorÃ­a de aplicaciones reales NO se borra informaciÃ³n de forma definitiva.  
        En su lugar, se marca como â€œinactivoâ€.
      </p>

      <p>
        Para ello aÃ±adimos a la tabla una columna:
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
        <strong>Ventajas del borrado lÃ³gico:</strong>
        <ul>
          <li>No se pierden datos histÃ³ricos</li>
          <li>Evita romper relaciones con claves forÃ¡neas</li>
          <li>Permite restaurar registros</li>
          <li>Es el enfoque estÃ¡ndar en aplicaciones en producciÃ³n</li>
        </ul>
      </div>

      <h3>7.6. Orden mental al leer un DELETE</h3>

      <pre>
        <code>{`1) FROM â†’ quÃ© tabla se va a modificar
2) WHERE â†’ quÃ© filas serÃ¡n eliminadas
3) (Opcional) CASCADE â†’ borrar registros hijos`}</code>
      </pre>

      <h3>7.7. Ejemplos prÃ¡cticos</h3>

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

      <p><strong>Eliminar productos de una categorÃ­a concreta:</strong></p>
      <pre>
        <code>{`DELETE FROM productos
WHERE categoria_id = 3;`}</code>
      </pre>

      <p><strong>Eliminar una categorÃ­a que ya no tiene productos:</strong></p>
      <pre>
        <code>{`DELETE FROM categorias
WHERE id = 4;`}</code>
      </pre>

      <h3>7.8. Ejercicios recomendados</h3>

      <ul>
        <li>Elimina el producto con id = 2.</li>
        <li>Borra los productos con precio inferior a 10â‚¬.</li>
        <li>Borra los productos sin stock.</li>
        <li>Borra las categorÃ­as que no tengan productos asociados.</li>
        <li>Implementa borrado lÃ³gico y marca un producto como inactivo.</li>
      </ul>

      <p>
        Con DELETE completamos el CRUD.  
        Ahora ya podemos crear, leer, modificar y eliminar datos en SQL.
        El siguiente paso del bloque es uno de los mÃ¡s importantes:
        <strong> unir tablas con JOIN</strong>.
      </p>
    </article>
  </details>
</section>

       

       

        {/* 10. JOIN Y RELACIONES ENTRE TABLAS */}
       {/* 10. JOIN Y RELACIONES ENTRE TABLAS */}
<section className="section" id="joins">
  <details>
    <summary>Relaciones entre tablas y JOIN</summary>

    <article className="card">

      <h3>10. Relaciones entre tablas y JOIN</h3>

      <div className="callout">
        <strong>Idea clave:</strong>
        <p>
          <code>JOIN</code> sirve para <strong>unir datos que estÃ¡n en tablas distintas</strong>.
          Es la herramienta principal para trabajar con modelos relacionales.
        </p>
      </div>

      <p>
        Hasta ahora hemos trabajado con una sola tabla cada vez.  
        Pero en un modelo relacional, los datos se reparten en varias tablas:
      </p>

      <ul>
        <li><strong>categorias</strong> â†’ informaciÃ³n general</li>
        <li><strong>productos</strong> â†’ cada producto pertenece a una categorÃ­a</li>
      </ul>

      <p>
        Para ver el nombre del producto junto con el nombre de su categorÃ­a, necesitamos combinarlas.
        AhÃ­ es donde entra <strong>JOIN</strong>.
      </p>

      <h3>10.1. CÃ³mo pensar un JOIN (orden mental)</h3>

      <pre>
        <code>{`1) FROM â†’ tabla principal
2) JOIN â†’ tabla relacionada
3) ON â†’ condiciÃ³n que une ambas tablas
4) SELECT â†’ quÃ© columnas queremos mostrar`}</code>
      </pre>

      <p>
        Este orden mental te permitirÃ¡ entender cualquier JOIN, por complejo que sea.
      </p>

      <h3>10.2. INNER JOIN â€” solo los registros relacionados</h3>

      <p>
        INNER JOIN devuelve solo las filas que tienen coincidencia en ambas tablas.
      </p>

      <h4>Ejemplo clÃ¡sico: productos con su categorÃ­a</h4>

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
        <li>Solo se muestran los productos que tienen una categorÃ­a vÃ¡lida</li>
      </ul>

      <div className="callout">
        <strong>Recuerda:</strong>  
        INNER JOIN excluye:
        <ul>
          <li>productos sin categorÃ­a</li>
          <li>categorÃ­as sin productos</li>
        </ul>
      </div>

      <h3>10.3. LEFT JOIN â€” todos los registros de la tabla izquierda</h3>

      <p>
        LEFT JOIN devuelve:
      </p>

      <ul>
        <li>todas las filas de la tabla de la izquierda (la del FROM)</li>
        <li>y la informaciÃ³n relacionada si existe</li>
      </ul>

      <p>
        Si no existe coincidencia, los valores de la tabla derecha aparecen como <strong>NULL</strong>.
      </p>

      <h4>Ejemplo: todos los productos, tengan o no categorÃ­a</h4>

      <pre>
        <code>{`SELECT p.nombre,
       p.precio,
       c.nombre AS categoria
FROM productos p
LEFT JOIN categorias c
       ON p.categoria_id = c.id;`}</code>
      </pre>

      <p>Muy Ãºtil para detectar productos huÃ©rfanos o mal asignados.</p>

      <h3>10.4. RIGHT JOIN â€” poco usado, pero Ãºtil en algunos casos</h3>

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

      <h4>Ejemplo: mostrar categorÃ­as aunque no tengan productos</h4>

      <pre>
        <code>{`SELECT p.nombre AS producto,
       c.nombre AS categoria
FROM productos p
RIGHT JOIN categorias c
       ON p.categoria_id = c.id;`}</code>
      </pre>

      <p>
        Esto puede ser Ãºtil para revisar categorÃ­as vacÃ­as.
      </p>

      <h3>10.5. JOIN de varias tablas</h3>

      <p>
        Podemos unir mÃ¡s de dos tablas encadenando JOIN.
      </p>

      <p>
        Ejemplo imaginario: productos â†’ categorÃ­as â†’ proveedores.
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

      <h3>10.7. Errores tÃ­picos con JOIN</h3>

      <ul>
        <li>
          âŒ Confundir la condiciÃ³n del JOIN (ON) con la del filtro (WHERE).
        </li>

        <li>
          âŒ Usar INNER JOIN y esperar ver datos sin relaciÃ³n.
        </li>

        <li>
          âŒ No usar alias y crear consultas difÃ­ciles de leer.
        </li>

        <li>
          âŒ No relacionar las tablas con la PKâ€“FK correcta.
        </li>
      </ul>

      <h3>10.8. Ejemplos prÃ¡cticos</h3>

      <p><strong>Productos y su categorÃ­a (INNER JOIN):</strong></p>
      <pre>
        <code>{`SELECT p.nombre, c.nombre AS categoria
FROM productos p
JOIN categorias c ON p.categoria_id = c.id;`}</code>
      </pre>

      <p><strong>Todos los productos, aunque no tengan categorÃ­a (LEFT JOIN):</strong></p>
      <pre>
        <code>{`SELECT p.nombre, c.nombre AS categoria
FROM productos p
LEFT JOIN categorias c ON p.categoria_id = c.id;`}</code>
      </pre>

      <p><strong>CategorÃ­as aunque no tengan productos (RIGHT JOIN):</strong></p>
      <pre>
        <code>{`SELECT c.nombre AS categoria, p.nombre AS producto
FROM productos p
RIGHT JOIN categorias c ON p.categoria_id = c.id;`}</code>
      </pre>

      <h3>10.9. Ejercicios recomendados</h3>

      <ul>
        <li>Muestra todos los productos con su categorÃ­a usando INNER JOIN.</li>
        <li>Muestra todos los productos aunque no tengan categorÃ­a (LEFT JOIN).</li>
        <li>Muestra todas las categorÃ­as y sus productos aunque algunas estÃ©n vacÃ­as (RIGHT JOIN).</li>
        <li>Lista productos cuyo precio sea mayor de 30â‚¬ junto con el nombre de la categorÃ­a.</li>
        <li>Crea un JOIN de tres tablas imaginando un nuevo modelo (productosâ€“categorÃ­asâ€“proveedores).</li>
      </ul>

      <p>
        Con JOIN ya puedes trabajar con modelos completos y ver informaciÃ³n combinada 
        de forma profesional.  
        A partir de aquÃ­, pasaremos a 
        <strong>buenas prÃ¡cticas</strong> y luego a 
        <strong>actividades finales del bloque</strong>.
      </p>

    </article>
  </details>
</section>

<section className="section" id="indice">
  <details>
    <summary> Â¿QuÃ© son los Ã­ndices (INDEX) en MySQL?</summary>

    <article className="card">

      <h2>Â¿QuÃ© es un Ã­ndice en MySQL?</h2>

      <p>
        Un <strong>Ã­ndice</strong> es una estructura que MySQL crea para
        <strong>acelerar la bÃºsqueda de datos</strong> dentro de una tabla.
        Funciona igual que el Ã­ndice de un libro: en lugar de revisar todas
        las pÃ¡ginas, vas directamente a la que necesitas.
      </p>

      <div className="callout">
        Sin Ã­ndice â†’ bÃºsqueda lenta (MySQL revisa fila por fila). <br />
        Con Ã­ndice â†’ bÃºsqueda rÃ¡pida (MySQL va directo a los datos).
      </div>

      <hr />

      <h3>Â¿Para quÃ© sirven los Ã­ndices?</h3>

      <ul className="lista-simple">
        <li>Para que <strong>WHERE</strong> sea mÃ¡s rÃ¡pido.</li>
        <li>Para optimizar <strong>JOIN</strong> entre tablas.</li>
        <li>Para acelerar <strong>ORDER BY</strong> y <strong>GROUP BY</strong>.</li>
        <li>Para evitar duplicados con <strong>UNIQUE</strong>.</li>
      </ul>

      <p>
        Los Ã­ndices NO cambian los datos de la tabla, solo mejoran 
        <strong>la velocidad de acceso</strong>.
      </p>

      <hr />

      <h3>Tipos principales de Ã­ndices</h3>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Â¿QuÃ© hace?</th>
              <th>Ejemplo tÃ­pico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>PRIMARY KEY</strong></td>
              <td>Identifica de forma Ãºnica la fila. Es un Ã­ndice obligatorio.</td>
              <td><code>id_cliente</code></td>
            </tr>

            <tr>
              <td><strong>UNIQUE</strong></td>
              <td>Evita duplicados. TambiÃ©n acelera bÃºsquedas.</td>
              <td><code>dni</code>, <code>email</code></td>
            </tr>

            <tr>
              <td><strong>INDEX</strong></td>
              <td>Acelera bÃºsquedas en columnas muy consultadas.</td>
              <td><code>ciudad</code>, <code>categoria</code></td>
            </tr>

            <tr>
              <td><strong>FOREIGN KEY</strong></td>
              <td>No es un Ã­ndice como tal, pero MySQL crea uno automÃ¡ticamente para hacer los JOIN mÃ¡s rÃ¡pidos.</td>
              <td><code>id_cliente</code> en <code>pedidos</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h3>Â¿CuÃ¡ndo es Ãºtil crear un Ã­ndice?</h3>

      <ul className="lista-simple">
        <li>Cuando una columna se usa mucho en <strong>WHERE</strong>.</li>
        <li>Cuando se usa frecuentemente en <strong>JOIN</strong>.</li>
        <li>Cuando ordenamos muchas veces por esa columna (<code>ORDER BY</code>).</li>
        <li>Cuando necesitamos evitar duplicados (UNIQUE).</li>
      </ul>

      <h4>Ejemplos del proyecto <code>bazar</code>:</h4>
      <ul className="lista-simple">
        <li><code>dni</code> â†’ ideal para un Ã­ndice UNIQUE.</li>
        <li><code>id_cliente</code> en <code>pedidos</code> â†’ Ã­ndice automÃ¡tico por foreign key.</li>
        <li><code>categoria</code> en <code>productos</code> â†’ Ã­ndice Ãºtil para bÃºsquedas frecuentes.</li>
      </ul>

      <hr />

      <h3>Sintaxis bÃ¡sica de creaciÃ³n</h3>

      <pre><code>
-- Ãndice normal
CREATE INDEX idx_categoria ON productos(categoria);

-- Ãndice Ãºnico (no permite duplicados)
CREATE UNIQUE INDEX idx_dni ON clientes(dni);
      </code></pre>

      <hr />

      <h3>Â¿CuÃ¡ndo NO debes usar Ã­ndices?</h3>

      <ul className="lista-simple">
        <li>En columnas con valores muy repetidos (ej.: "Sevilla").</li>
        <li>En tablas pequeÃ±as (no aporta nada).</li>
        <li>En columnas que cambian constantemente (muchos INSERT/UPDATE).</li>
      </ul>

      <div className="nota nota-importante">
        Los Ã­ndices mejoran la velocidad de lectura, pero pueden ralentizar 
        la escritura (INSERT/UPDATE) si se abusa de ellos.
      </div>

      <hr />

      <h3>ConclusiÃ³n</h3>

      <p>
        Los Ã­ndices son una herramienta clave para optimizar consultas en MySQL.
        Ten en cuenta:
      </p>

      <ul className="lista-simple">
        <li>Que hacen que las bÃºsquedas sean mÃ¡s rÃ¡pidas.</li>
        <li>Que PRIMARY KEY y UNIQUE son Ã­ndices especiales.</li>
        <li>Que ayudan mucho al trabajar con relaciones (JOIN).</li>
      </ul>

      

    </article>
  </details>
</section>



        {/* 11. BUENAS PRÃCTICAS */}
       <section className="section" id="buenas-practicas">
  <details>
    <summary>Buenas prÃ¡cticas de modelado y consultas SQL</summary>

    <article className="card">

      <h3>11. Buenas prÃ¡cticas de modelado y consultas SQL</h3>

      <p>
        Estas buenas prÃ¡cticas ayudan a construir bases de datos mÃ¡s seguras, mÃ¡s rÃ¡pidas y mÃ¡s fÃ¡ciles de mantener. Son principios universales en SQL que aplican desde un proyecto pequeÃ±o hasta sistemas profesionales.
      </p>

      <h3>11.1. Buenas prÃ¡cticas de modelado</h3>

      <ul>
        <li>
          <strong>DiseÃ±a primero en papel</strong>: identifica entidades, atributos y relaciones antes de escribir SQL.
        </li>
        <li>
          <strong>Una tabla = una entidad</strong>. Evita mezclar conceptos.
        </li>
        <li>
          <strong>Usa claves primarias numÃ©ricas</strong> (AUTO_INCREMENT) para simplificar relaciones.
        </li>
        <li>
          <strong>Las relaciones deben ser claras</strong> (1:N, N:M, 1:1).
        </li>
        <li>
          <strong>Usa claves forÃ¡neas siempre</strong> para mantener la integridad referencial.
        </li>
        <li>
          <strong>No dupliques datos</strong>: si algo ya estÃ¡ en otra tabla, usa FK.
        </li>
      </ul>

      <h3>11.2. Buenas prÃ¡cticas al crear tablas</h3>

      <ul>
        <li>
          <strong>Define los tipos de datos adecuados</strong>: evita VARCHAR enormes, usa INT cuando la relaciÃ³n lo necesite, DECIMAL para precios, DATE para fechas, etc.
        </li>
        <li>
          <strong>Define siempre NOT NULL cuando proceda</strong>. Evita valores vacÃ­os no intencionados.
        </li>
        <li>
          <strong>Usa DEFAULT</strong> para valores iniciales lÃ³gicos (stock = 0, activo = 1).
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

      <h3>11.3. Buenas prÃ¡cticas al hacer SELECT</h3>

      <ul>
        <li>
          <strong>Evita SELECT *</strong> en proyectos reales. Selecciona solo lo que necesites.
        </li>
        <li>
          <strong>Usa alias</strong> para mejorar la legibilidad de consultas.
        </li>
        <li>
          <strong>Aprende el orden mental</strong> de ejecuciÃ³n: FROM â†’ WHERE â†’ SELECT â†’ ORDER BY â†’ LIMIT.
        </li>
        <li>
          <strong>Usa LIMIT</strong> cuando explores datos grandes.
        </li>
      </ul>

      <h3>11.4. Buenas prÃ¡cticas con WHERE</h3>

      <ul>
        <li>Filtra lo antes posible con WHERE para mejorar rendimiento.</li>
        <li>Usa AND / OR con parÃ©ntesis para evitar confusiones.</li>
        <li>No compares con <code>= NULL</code>. Usa <code>IS NULL</code> o <code>IS NOT NULL</code>.</li>
      </ul>

      <h3>11.5. Buenas prÃ¡cticas con ORDER BY</h3>

      <ul>
        <li>Ordena por columnas existentes o alias definidos en el SELECT.</li>
        <li>Recuerda que ORDER BY va siempre al final.</li>
        <li>Evita ordenamientos innecesarios cuando manejes miles de datos.</li>
      </ul>

      <h3>11.6. Buenas prÃ¡cticas con JOIN</h3>

      <ul>
        <li>
          <strong>Usa alias</strong> (p, c, uâ€¦) para escribir JOIN mÃ¡s legibles.
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
          <strong>La condiciÃ³n del JOIN va en ON</strong> (no en WHERE).
        </li>
      </ul>

      <h3>11.7. Buenas prÃ¡cticas con CRUD (INSERT, UPDATE, DELETE)</h3>

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
        <li>Considera usar borrado lÃ³gico (activo = 0).</li>
        <li>No borres datos si hay FK que dependen de ellos.</li>
      </ul>

      <h3>11.8. Nombres recomendados para tablas y columnas</h3>

      <ul>
        <li><strong>Tablas en plural</strong>: productos, categorias, usuarios.</li>
        <li><strong>Columnas en singular</strong>: nombre, precio, stock.</li>
        <li><strong>FK con nombre descriptivo</strong>: categoria_id, usuario_id.</li>
        <li>Evitar espacios o caracteres especiales.</li>
        <li>Usar minÃºsculas y guiones bajos: <code>fecha_creacion</code>.</li>
      </ul>

      <h3>11.9. Errores tÃ­picos de principiantes</h3>

      <ul>
        <li>Usar SELECT * siempre.</li>
        <li>Olvidar el WHERE en UPDATE y DELETE.</li>
        <li>No definir NOT NULL en campos obligatorios.</li>
        <li>No usar claves forÃ¡neas.</li>
        <li>Hacer JOIN sin ON correcto.</li>
        <li>Comparar NULL con =.</li>
      </ul>

      <h3>11.10. Checklist rÃ¡pido antes de crear una tabla</h3>

      <ul>
        <li>Â¿Tiene PK AUTO_INCREMENT?</li>
        <li>Â¿EstÃ¡n definidos los tipos correctos?</li>
        <li>Â¿Hay columnas obligatorias? (NOT NULL)</li>
        <li>Â¿Hay valores iniciales? (DEFAULT)</li>
        <li>Â¿Las relaciones tienen FK?</li>
        <li>Â¿EstÃ¡ creada antes la tabla padre?</li>
      </ul>

      <p>
        Estas buenas prÃ¡cticas servirÃ¡n como guÃ­a en todos tus proyectos SQL y te permitirÃ¡n crear bases de datos bien diseÃ±adas, consistentes y fÃ¡ciles de mantener.
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
                Para completar este bloque, cada alumno deberÃ¡ <strong>diseÃ±ar, crear y consultar</strong> 
                una base de datos relacional desde cero utilizando <strong>MySQL/MariaDB</strong> 
                (phpMyAdmin o consola de XAMPP).
              </p>

              <p>
                Puedes elegir una de las propuestas o inventar la tuya propia. Cada actividad incluye:  
              </p>

              <ul>
                <li>Modelado ERL inicial</li>
                <li>CreaciÃ³n del modelo fÃ­sico</li>
                <li>CreaciÃ³n de tablas (PK, FK, tipos)</li>
                <li>InserciÃ³n de datos con INSERT</li>
                <li>Consultas bÃ¡sicas con SELECT</li>
                <li>Filtros con WHERE</li>
                <li>Ordenaciones con ORDER BY</li>
                <li>JOIN para relacionar tablas</li>
              </ul>

              <hr />

              <h3>12.1. Proyectos propuestos (elige uno)</h3>

              <h4>ðŸ›’ 1. Tienda online</h4>
              <p>Tablas sugeridas:</p>
              <ul>
                <li><strong>categorias</strong></li>
                <li><strong>productos</strong></li>
                <li><strong>clientes</strong></li>
                <li><strong>pedidos</strong></li>
                <li><strong>lineas_pedido</strong> (N:M pedidos-productos)</li>
              </ul>

              <p>Objetivo: listados como â€œproductos por categorÃ­aâ€, â€œpedidos de un clienteâ€, etc.</p>

              <h4>ðŸ“š 2. Biblioteca / Club de lectura</h4>
              <p>Tablas sugeridas:</p>
              <ul>
                <li><strong>libros</strong></li>
                <li><strong>autores</strong></li>
                <li><strong>generos</strong></li>
                <li><strong>prestamos</strong></li>
                <li><strong>usuarios</strong></li>
              </ul>

              <h4>ðŸŽ¬ 3. Plataforma de cine o series</h4>
              <p>Tablas sugeridas:</p>
              <ul>
                <li><strong>peliculas</strong></li>
                <li><strong>actores</strong></li>
               
                <li><strong>generos</strong></li>
                <li><strong>valoraciones</strong></li>
              </ul>

              <h4>ðŸ¥ 4. ClÃ­nica veterinaria</h4>
              <p>Tablas sugeridas:</p>
              <ul>
                <li><strong>mascotas</strong></li>
                <li><strong>clientes</strong></li>
                <li><strong>citas</strong></li>
                <li><strong>tratamientos</strong></li>
              </ul>

              <h4>ðŸŽ“ 5. Plataforma de cursos o academia</h4>
              <p>Tablas sugeridas:</p>
              <ul>
                <li><strong>cursos</strong></li>
                <li><strong>alumnos</strong></li>
                <li><strong>matriculas</strong> (N:M cursos-alumnos)</li>
                <li><strong>profesores</strong></li>
              </ul>

              <hr />

              <h3>12.2. Entregable mÃ­nimo obligatorio</h3>

              <ul>
                <li><strong>1. Modelo ERL</strong> (foto o digital).</li>
                <li><strong>2. Script SQL</strong> con:
                  <ul>
                    <li>CREATE DATABASE</li>
                    <li>CREACIÃ“N DE TABLAS (PK, FK, tipos, DEFAULTâ€¦)</li>
                    <li>INSERCIÃ“N de datos (mÃ­nimo 10 por tabla)</li>
                  </ul>
                </li>
                <li><strong>3. Consultas SQL:</strong>
                  <ul>
                    <li>3 SELECT bÃ¡sicos</li>
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

      {/* BONUS â€” EXPORTAR, ENTREGAR Y SUBIR A PORTFOLIO */}
<section className="section" id="bonus">
  <details open>
    <summary>Bonus: cÃ³mo generar un archivo SQL y subir tu proyecto al portfolio</summary>

    <article className="card">
      <h3>Bonus: Generar archivo SQL, entregarlo correctamente y subirlo a tu portfolio</h3>

      <p>
        En este bonus vas a ver cÃ³mo dejar tu proyecto SQL con un acabado profesional:
        generar el archivo <strong>.sql</strong>, organizar bien las carpetas,
        documentarlo en un <code>README.md</code> y publicarlo en GitHub como parte de tu portfolio.
      </p>

      {/* CALLOUT ESPECIAL */}
      <div className="callout-bonus">
        <strong>Idea clave:</strong>
        <p>
          Un buen proyecto SQL no es solo la base de datos: tambiÃ©n incluye documentaciÃ³n,
          scripts separados (creaciÃ³n, datos, consultas) y un README claro. Es algo
          que verÃ¡n profesores, empresas y futuros compaÃ±eros.
        </p>
      </div>

      <h4>1. Â¿QuÃ© es un archivo SQL?</h4>
      <p>
        Un archivo <code>.sql</code> es un fichero de texto que contiene comandos SQL listos para ejecutar:
        <strong> CREATE TABLE</strong>, <strong>INSERT</strong>, <strong>ALTER</strong>, etc.
      </p>

      <p>Suele usarse para:</p>
      <ul>
        <li>Recrear la base de datos en cualquier ordenador</li>
        <li>Importarla en phpMyAdmin (por ejemplo, en un XAMPP nuevo)</li>
        <li>Subirla a GitHub como parte del proyecto</li>
        <li>Guardar copias de seguridad de tus prÃ¡cticas</li>
      </ul>

      <h4>2. CÃ³mo generar un archivo SQL desde phpMyAdmin</h4>

      <ol>
        <li>Arranca <strong>MySQL</strong> en XAMPP y entra en <strong>phpMyAdmin</strong>.</li>
        <li>En el panel izquierdo, haz clic en tu base de datos (por ejemplo, <code>tienda</code> o <code>biblioteca</code>).</li>
        <li>Ve a la pestaÃ±a <strong>Exportar</strong>.</li>
        <li>
          Elige el mÃ©todo:
          <ul>
            <li><strong>RÃ¡pido</strong> â†’ Exporta toda la base de datos (tablas + datos).</li>
            <li><strong>Personalizado</strong> â†’ Puedes elegir tablas concretas y opciones avanzadas.</li>
          </ul>
        </li>
        <li>AsegÃºrate de que el formato seleccionado es <strong>SQL</strong>.</li>
        <li>Pulsa <strong>Continuar</strong>.</li>
      </ol>

      <p>
        Se descargarÃ¡ un archivo del estilo: <code>mi-bbdd.sql</code> que podrÃ¡s guardar dentro de la carpeta del proyecto.
      </p>

      <h4>3. CÃ³mo guardar tus consultas para tenerlas en el README</h4>

      <p>
        Cada vez que ejecutes una consulta en phpMyAdmin (por ejemplo un <code>SELECT</code> con
        <code>JOIN</code>), puedes guardarla para documentarla despuÃ©s:
      </p>

      <ol>
        <li>Escribe y ejecuta la consulta en la pestaÃ±a <strong>SQL</strong>.</li>
        <li>
          Usa el botÃ³n <strong>â€œCopiar al portapapelesâ€</strong> (debajo de la consulta) o selecciona
          el texto manualmente.
        </li>
        <li>Pega esa consulta en un archivo de texto llamado <code>consultas.sql</code>.</li>
        <li>
          Agrupa las consultas por bloque, por ejemplo:
          <ul>
            <li><code>-- Consultas bÃ¡sicas (SELECT + WHERE)</code></li>
            <li><code>-- Consultas con ORDER BY y LIMIT</code></li>
            <li><code>-- Consultas con JOIN entre tablas</code></li>
          </ul>
        </li>
      </ol>

      <p>
        AsÃ­ tendrÃ¡s todas tus consultas importantes organizadas y listas para copiar en el
        <code>README.md</code> o para repetir el ejercicio en el futuro.
      </p>

      <h4>4. Estructura recomendada de carpetas para tu proyecto</h4>

      <pre>
        <code>{`mi-proyecto-sql/
â”‚
â”œâ”€â”€ script.sql          # Tablas y modelo fÃ­sico (CREATE DATABASE, CREATE TABLE...)
â”œâ”€â”€ inserts.sql         # Datos de ejemplo (INSERT INTO...)
â”œâ”€â”€ consultas.sql       # SELECT, WHERE, JOIN... que quieres documentar
â”œâ”€â”€ modelo-ERL.png      # Diagrama del proyecto (modelo ER)
â”œâ”€â”€ README.md           # DocumentaciÃ³n principal del proyecto
â””â”€â”€ extras/             # (opcional) Vistas, ejercicios, versiones mejoradas
`}</code>
      </pre>

      <h4>5. CÃ³mo subir el proyecto a tu portfolio de GitHub</h4>

      <ol>
        <li>Abre la carpeta del proyecto en VS Code.</li>
        <li>
          Inicializa un repositorio Git:
          <pre>
            <code>git init</code>
          </pre>
        </li>
        <li>
          AÃ±ade todos los archivos:
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
          Crea un repositorio vacÃ­o en GitHub, por ejemplo:
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

      <p>Â¡Listo! Ya tienes tu proyecto SQL publicado en tu portfolio profesional.</p>

      <hr />

      <h4>6. Plantilla profesional para README.md</h4>

      <div className="callout-bonus">
        <strong>Consejo:</strong>
        <p>
          Un buen <code>README.md</code> muchas veces transmite mÃ¡s que el propio SQL,
          porque demuestra tu capacidad de explicar, documentar y ordenar un proyecto.
        </p>
      </div>

      <pre>
        <code>{`# ðŸ“¦ Proyecto SQL â€” UF1845

 1. DescripciÃ³n
Base de datos desarrollada en MySQL/MariaDB como parte del bloque de modelado y consultas SQL.
Tema elegido: **[Indica aquÃ­ tienda, biblioteca, cine, cursosâ€¦]**.

2. Modelo ER
Incluye el diagrama en el repositorio (por ejemplo, modelo-ERL.png) y aÃ±Ã¡delo aquÃ­:
![Diagrama ER](./modelo-ERL.png)

3. Estructura de tablas
Explica brevemente las tablas y sus claves:
- Tabla ...
- Clave primaria (PK): ...
- Claves forÃ¡neas (FK): ...

4. script.sql
CÃ³digo de creaciÃ³n de la base de datos:
- CREATE DATABASE
- CREATE TABLE
- Claves primarias y forÃ¡neas
- Restricciones (NOT NULL, DEFAULT, UNIQUE...)

5. inserts.sql
Datos de ejemplo para probar la base de datos.

6. consultas.sql
Consultas mÃ¡s importantes del proyecto:
- SELECT con filtros (WHERE)
- ORDER BY y LIMIT
- Consultas con JOIN entre varias tablas

7. CÃ³mo importar el proyecto
1. Abre phpMyAdmin
2. Crea una base de datos vacÃ­a con el nombre del proyecto
3. Importa script.sql
4. DespuÃ©s importa inserts.sql

8. Autor
Nombre del alumno, curso, academia y aÃ±o acadÃ©mico.

9. Mejoras futuras (opcional)
- Crear VISTAS para consultas frecuentes
- Borrado lÃ³gico con un campo activo
- AÃ±adir ON DELETE CASCADE / ON UPDATE CASCADE
- Nuevas tablas relacionadas`}
        </code>
      </pre>
    </article>
  </details>
</section>

      </div>
    </main>
  );
}

