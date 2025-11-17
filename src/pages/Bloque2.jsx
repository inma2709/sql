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
            <li><a href="#crear-tablas-modelo">Crear tablas a partir del modelo</a></li>

            {/* CRUD dividido */}
            <li><a href="#crud-insert">C → INSERT (crear datos)</a></li>
          
            <li><a href="#crud-select">R → SELECT (leer datos)</a></li>
              <li><a href="#filtros">Filtros con WHERE</a></li>
             <li><a href="#ordenaciones">Ordenaciones con ORDER BY</a></li>
            <li><a href="#crud-update">U → UPDATE (modificar datos)</a></li>
            <li><a href="#crud-delete">D → DELETE (eliminar datos)</a></li>

         
            <li><a href="#ordenaciones">Ordenaciones con ORDER BY</a></li>
            <li><a href="#joins">Relaciones entre tablas y JOIN</a></li>
            <li><a href="#buenas-practicas">Buenas prácticas de modelado y consultas</a></li>
            <li><a href="#actividades">Actividades del bloque</a></li>
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
        pertenece a una categoría, en la tabla productos añadimos una columna con el id 
        de la categoría:
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
      
<section className="section" id="crear-tablas-modelo">
  <details open>
    <summary>Crear tablas a partir del modelo</summary>

    <article className="card">

      {/* INTRODUCCIÓN */}
      <h3>Introducción y conceptos básicos</h3>
      <p>
        Cuando pasamos del modelo lógico (ERL) al modelo físico en SQL, transformamos:
      </p>

      <ul>
        <li>Entidades → en <strong>tablas</strong></li>
        <li>Atributos → en <strong>columnas</strong></li>
        <li>Identificadores → en <strong>claves primarias (PK)</strong></li>
        <li>Relaciones → en <strong>claves foráneas (FK)</strong></li>
      </ul>

      <p>
        A este proceso también se le llama <em>“pasar del modelado lógico al modelado físico”</em>,
        porque convertimos un diagrama conceptual en tablas reales dentro de MySQL/MariaDB.
      </p>

      {/* 1.2 CREAR TABLAS A PARTIR DEL MODELO */}
      <h3>1.2. Crear tablas a partir del modelo físico</h3>
      <p>
        Cada entidad del modelo se convierte en una tabla.  
        Siempre empezamos por las tablas que no dependen de ninguna otra: las <strong>tablas padre</strong>.
      </p>

      <h4>Ejemplo: tabla categorías (tabla padre)</h4>

      <pre>
        <code>{`CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);`}</code>
      </pre>

      <h4>Explicación de esta estructura:</h4>

      <ul>
        <li>
          <strong>id INT AUTO_INCREMENT PRIMARY KEY</strong><br/>
          Este campo es la clave primaria.  
          Es numérica y se incrementa automáticamente en cada inserción.
        </li>

        <li>
          <strong>¿Es obligatorio poner AUTO_INCREMENT?</strong><br/>
          Sí. MySQL no hace AUTO_INCREMENT por defecto.  
          Si no lo defines tú, MySQL no creará números secuenciales.
        </li>

        <li>
          <strong>¿Es obligatorio incluir la id en un INSERT?</strong><br/>
          No. Si el campo tiene AUTO_INCREMENT, se genera solo.
        </li>

        <li>
          <strong>nombre VARCHAR NOT NULL</strong><br/>
          Obligatoria. Si no la especificas, el INSERT fallará.
        </li>
      </ul>

      <hr />

      <h3>1.3. Uso de valores por defecto (DEFAULT)</h3>

      <p>
        Un valor por defecto sirve para que una columna tenga un valor automático si
        no se especifica durante la inserción.
      </p>

      <p>Se define directamente en el <strong>CREATE TABLE</strong>:</p>

      <pre>
        <code>{`stock INT DEFAULT 0,
activo TINYINT(1) DEFAULT 1`}</code>
      </pre>

      <h4>¿Cuándo tiene sentido usar DEFAULT?</h4>

      <ul>
        <li>Cuando hay un valor inicial lógico (stock = 0)</li>
        <li>Para evitar errores al omitir columnas en INSERT</li>
        <li>Para funciones frecuentes (activo = 1)</li>
        <li>Para automatizar datos repetitivos</li>
      </ul>

      <p>Ejemplo completo:</p>

      <pre>
        <code>{`CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  stock INT DEFAULT 0,
  categoria_id INT DEFAULT NULL,
  activo TINYINT(1) DEFAULT 1,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);`}</code>
      </pre>

      <p>Ahora podemos insertar solo lo obligatorio:</p>

      <pre>
        <code>{`INSERT INTO productos (nombre, precio)
VALUES ('Reloj digital', 19.90);`}</code>
      </pre>

      <p>Valores rellenados automáticamente:</p>

      <ul>
        <li>id → autogenerado</li>
        <li>stock → 0</li>
        <li>categoria_id → NULL</li>
        <li>activo → 1</li>
      </ul>

      <hr />

     

      {/* TABLA RESUMEN */}
      <h3>1.4. Resumen: propiedades de columna en MySQL</h3>

      <div className="contenedor-tabla">
         <table className="tabla-datos">
          <thead>
            <tr>
              <th>Propiedad</th>
              <th>Descripción</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>PRIMARY KEY (PK)</strong></td>
              <td>Identifica un registro de forma única.</td>
              <td><code>id INT PRIMARY KEY</code></td>
            </tr>

            <tr>
              <td><strong>AUTO_INCREMENT</strong></td>
              <td>Genera números consecutivos automáticamente.</td>
              <td><code>id INT AUTO_INCREMENT</code></td>
            </tr>

            <tr>
              <td><strong>FOREIGN KEY (FK)</strong></td>
              <td>Relaciona una tabla con otra.</td>
              <td><code>categoria_id INT REFERENCES categorias(id)</code></td>
            </tr>

            <tr>
              <td><strong>NOT NULL</strong></td>
              <td>Obliga a dar un valor (no puede ser NULL).</td>
              <td><code>nombre VARCHAR(100) NOT NULL</code></td>
            </tr>

            <tr>
              <td><strong>DEFAULT</strong></td>
              <td>Define un valor automático si no se inserta.</td>
              <td><code>stock INT DEFAULT 0</code></td>
            </tr>

            <tr>
              <td><strong>UNIQUE</strong></td>
              <td>Evita duplicados.</td>
              <td><code>email VARCHAR(120) UNIQUE</code></td>
            </tr>

            <tr>
              <td><strong>NULL</strong></td>
              <td>Permite no dar valor (valor vacío permitido).</td>
              <td><code>categoria_id INT NULL</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Con esto completamos el proceso de transformar un modelo lógico en tablas SQL reales.  
        El siguiente paso es aprender a insertar datos y trabajar con el CRUD.
      </p>

            <hr />

      {/* 1.6 CREAR UNA TABLA HIJA CON CLAVE FORÁNEA */}
      <h3>1.6. Cómo crear correctamente una tabla hija con clave foránea</h3>

      <p>
        En los modelos relacionales, una <strong>tabla hija</strong> es aquella que depende de una
        tabla padre. Esto se representa a través de una <strong>clave foránea (FK)</strong>, que
        conecta el registro hijo con un registro existente en la tabla padre.
      </p>

      <p>
        En nuestro modelo, <strong>categorías</strong> es la tabla padre y
        <strong>productos</strong> es la tabla hija, porque cada producto pertenece a una categoría.
      </p>

      <h4>¿Qué requisitos debe cumplir una clave foránea?</h4>

      <ul>
        <li>
          Debe apuntar a una <strong>PRIMARY KEY</strong> o <strong>UNIQUE</strong> de la tabla padre.
        </li>
        <li>
          Debe tener el mismo tipo de dato (ej.: INT → INT).
        </li>
        <li>
          La tabla padre <strong>debe existir previamente</strong>.
        </li>
        <li>
          El valor de la FK debe existir ya en la tabla padre, o ser NULL si la FK lo permite.
        </li>
      </ul>

      <h4>Ejemplo completo de tabla hija correctamente diseñada</h4>

      <pre>
        <code>{`CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  stock INT DEFAULT 0,
  categoria_id INT,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);`}</code>
      </pre>

      <h4>Explicación paso a paso:</h4>

      <ul>
        <li>
          <strong>categoria_id INT</strong> → es la columna que guarda la relación.  
          Debe ser del mismo tipo que <code>categorias.id</code>.
        </li>

        <li>
          <strong>FOREIGN KEY (categoria_id)</strong> → definimos qué columna es la clave foránea.
        </li>

        <li>
          <strong>REFERENCES categorias(id)</strong> → indica a qué tabla y columna apunta.
        </li>

        <li>
          La relación garantiza que <strong>no puedes insertar productos con categorías que no existan</strong>.
        </li>

        <li>
          Si <code>categoria_id</code> permite NULL, entonces el producto puede no tener categoría.
        </li>
      </ul>

      <h4>¿Por qué es importante una clave foránea?</h4>

      <p>
        La clave foránea asegura la <strong>integridad referencial</strong>: los datos siempre estarán
        correctamente relacionados. Esto evita errores como:
      </p>

      <ul>
        <li>Productos con categorías inexistentes</li>
        <li>Datos huérfanos</li>
        <li>Inconsistencias al borrar o actualizar registros</li>
      </ul>

      <h4>Comportamiento de una FK al borrar o modificar datos</h4>

      <p>
        Opcionalmente, puedes definir reglas especiales cuando se elimina o modifica la fila padre:
      </p>

      <pre>
        <code>{`FOREIGN KEY (categoria_id)
  REFERENCES categorias(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE`}</code>
      </pre>

      <ul>
        <li><strong>ON DELETE CASCADE</strong> → si borras una categoría, se borran sus productos.</li>
        <li><strong>ON UPDATE CASCADE</strong> → si cambia el id de la categoría, se actualiza en productos.</li>
        <li>
          <strong>NO ACTION / RESTRICT (por defecto)</strong> → si existen productos, no puedes borrar su categoría.
        </li>
      </ul>

      <h4>Errores típicos al crear tablas con FK (muy comunes en alumnos):</h4>

      <ul>
        <li>
          ❌ Crear la tabla hija antes que la tabla padre  
          → Solución: siempre crear primero <strong>categorias</strong>.
        </li>

        <li>
          ❌ Tipos incompatibles (ej.: padre INT y hija VARCHAR)  
          → Deben coincidir.
        </li>

        <li>
          ❌ Intentar insertar un valor inexistente en la FK  
          → MySQL rechaza el INSERT.
        </li>

        <li>
          ❌ Olvidar que la FK puede ser NULL  
          → Si la FK no tiene NOT NULL, se permiten productos sin categoría.
        </li>
      </ul>

      <h4>Resumen visual: Tabla padre vs tabla hija</h4>

      <div className="contenedor-tabla">
        <table className="tabla-datos">
          <thead>
            <tr>
              <th>Concepto</th>
              <th>Tabla padre</th>
              <th>Tabla hija</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ejemplo</td>
              <td><code>categorias</code></td>
              <td><code>productos</code></td>
            </tr>

            <tr>
              <td>Clave</td>
              <td>PRIMARY KEY</td>
              <td>FOREIGN KEY</td>
            </tr>

            <tr>
              <td>Dependencia</td>
              <td>No depende de ninguna tabla</td>
              <td>Depende de una tabla padre</td>
            </tr>

            <tr>
              <td>Restricción</td>
              <td>Puedes borrar libremente (si no es padre de ninguna otra)</td>
              <td>No puedes insertar valores que no existan en la tabla padre</td>
            </tr>

            <tr>
              <td>Orden de creación</td>
              <td>Primero</td>
              <td>Después</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Con esto, los alumnos entienden completamente cómo se crea una relación 1:N en SQL
        y cómo se implementa correctamente en el modelo físico.
      </p>


    </article>
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
      <h3>4.9. Insertar solo algunas columnas (columnas opcionales)</h3>

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
        en el resultado. Se definen con la palabra <code>AS</code>.
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
        <li>Solo afectan a cómo se muestran los resultados.</li>
        <li>Son muy útiles para hacer las consultas más legibles.</li>
      </ul>

      <p>
        También podemos usar comillas si el alias lleva espacios:
      </p>

      <pre>
        <code>{`SELECT nombre AS "Nombre del producto"
FROM productos;`}</code>
      </pre>

      <p>
        Más adelante, cuando estudiemos <strong>JOIN</strong>, también usaremos alias
        para las tablas completas (por ejemplo, <code>productos p</code>, 
        <code>categorias c</code>), pero de momento nos centraremos en los alias de columnas.
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
        Aunque escribimos la consulta empezando por <code>SELECT</code>, es útil enseñar al
        alumnado a leerla así:
      </p>

      <pre>
        <code>{`1) FROM → de qué tabla vienen los datos
2) SELECT → qué columnas vamos a mostrar
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

      <h3>5.7. Ejercicios recomendados</h3>
      <ul>
        <li>Muestra todos los datos de la tabla <code>categorias</code>.</li>
        <li>
          Muestra solo el <code>nombre</code> y el <code>stock</code> de la tabla 
          <code> productos</code>.
        </li>
        <li>
          Muestra solo el <code>nombre</code> de las categorías usando un alias 
          (por ejemplo <code>AS tipo_categoria</code>).
        </li>
        <li>
          Muestra los 3 primeros productos de la tabla usando <code>LIMIT</code>.
        </li>
        <li>
          Crea una consulta que devuelva nombre y precio con alias en ambas columnas.
        </li>
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

      <h3>8.9. Ejercicios recomendados</h3>

      <ul>
        <li>Muestra los productos con precio mayor de 50€.</li>
        <li>Muestra los productos con stock entre 5 y 20 (incluidos).</li>
        <li>Muestra los productos de las categorías 1 o 2 usando <code>IN</code>.</li>
        <li>Muestra los productos cuyo nombre empiece por la letra 'A'.</li>
        <li>Muestra los productos que no tienen categoría asignada.</li>
        <li>Crea una consulta con <code>AND</code> y otra con <code>OR</code> comparando precio y stock.</li>
      </ul>

      <p>
        Una vez que controlamos los filtros con WHERE, el siguiente paso natural es aprender a
        <strong>ordenar los resultados con ORDER BY</strong> para presentar mejor la información.
      </p>
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



        {/* 6. U → UPDATE */}
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
                <li><strong>reparto</strong> (N:M)</li>
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
                Esta sección te explica cómo preparar tu proyecto SQL de forma profesional:  
                cómo generar un archivo <strong>.sql</strong>, cómo organizar los documentos,  
                y cómo subirlo a tu portfolio de GitHub para que forme parte de tu currículum tecnológico.
              </p>

              {/* CALLOUT ESPECIAL */}
              <div className="callout-bonus">
                <strong>Idea clave:</strong>
                <p>
                  Un buen proyecto SQL no es solo la base de datos: también incluye documentación, scripts y un README claro.  
                  Piensa que será algo que verán profesores, empresas y futuros compañeros.
                </p>
              </div>

              <h3>1. ¿Qué es un archivo SQL?</h3>
              <p>
                Un archivo <code>.sql</code> es un fichero de texto que contiene comandos SQL listos para ejecutar:  
                <strong>CREATE TABLE</strong>, <strong>INSERT</strong>, <strong>ALTER</strong>, etc.  
              </p>

              <p>Sirve para:</p>
              <ul>
                <li>Recrear la base de datos en cualquier ordenador</li>
                <li>Importarla en phpMyAdmin</li>
                <li>Compartirla en GitHub</li>
                <li>Realizar copia de seguridad</li>
              </ul>

              <h3>2. Cómo generar un archivo SQL desde phpMyAdmin</h3>

              <ol>
                <li>Abre <strong>phpMyAdmin</strong></li>
                <li>Selecciona tu base de datos en el panel izquierdo</li>
                <li>Haz clic en la pestaña <strong>Exportar</strong></li>
                <li>Elige el método:
                  <ul>
                    <li><strong>Rápido</strong> → para exportar todo</li>
                    <li><strong>Personalizado</strong> → si quieres elegir tablas</li>
                  </ul>
                </li>
                <li>Asegúrate de que el formato es <strong>SQL</strong></li>
                <li>Haz clic en <strong>Continuar</strong></li>
              </ol>

              <p>Se descargará algo así como: <code>mi-bbdd.sql</code>.</p>

              <h3>3. Estructura recomendada de carpetas para tu proyecto</h3>

              <pre>
                <code>{`mi-proyecto-sql/
│
├── script.sql          # Tablas y modelo físico
├── inserts.sql         # Datos de ejemplo
├── consultas.sql       # SELECT, WHERE, JOIN...
├── modelo-ERL.png      # Diagrama del proyecto
├── README.md           # Documentación
└── extras/             # (opcional) Mejoras, vistas, ejercicios
`}</code>
              </pre>

              <h3>4. Cómo subirlo a tu portfolio de GitHub</h3>

              <ol>
                <li>Abre la carpeta del proyecto en VSCode</li>
                <li>Inicializa un repositorio:
                  <pre><code>git init</code></pre>
                </li>
                <li>Añade todos los archivos:
                  <pre><code>git add .</code></pre>
                </li>
                <li>Haz el commit:
                  <pre><code>git commit -m "Proyecto SQL completo (UF1845)"</code></pre>
                </li>
                <li>
                  Crea un repositorio vacío en GitHub llamado  
                  <strong>uf1845-mi-proyecto-sql</strong>
                </li>
                <li>Conéctalo:
                  <pre><code>{`git remote add origin https://github.com/tuusuario/uf1845-mi-proyecto-sql.git
git branch -M main
git push -u origin main`}</code></pre>
                </li>
              </ol>

              <p>
                ¡Listo! Ya tienes un proyecto SQL en tu portfolio profesional.
              </p>

              <hr />

              <h3>5. Plantilla profesional para README.md</h3>

              <div className="callout-bonus">
                <strong>Consejo:</strong>  
                <p>
                  Un buen README es muchas veces más importante que el propio SQL,  
                  porque explica tu nivel, tu proceso y tu capacidad de comunicar.
                </p>
              </div>

              <pre>
                <code>{`# 📦 Proyecto SQL — UF1845

## 1. Descripción
Base de datos desarrollada en MySQL/MariaDB como parte del bloque de modelado y consultas SQL.
Tema elegido: **[Indica aquí tienda, biblioteca, cine, cursos…]**.

## 2. Modelo ER
![Diagrama ER](./modelo-ERL.png)

## 3. Estructura de tablas
Explica brevemente las tablas y sus claves (PK y FK).

## 4. script.sql
Incluye el código de creación de la base de datos:
- CREATE DATABASE
- CREATE TABLE
- Claves primarias y foráneas
- DEFAULT, NOT NULL…

## 5. inserts.sql
Datos de ejemplo.

## 6. consultas.sql
Incluye:
- SELECT
- WHERE
- ORDER BY
- JOIN

## 7. Cómo importar
1. Abre phpMyAdmin
2. Crea una base de datos vacía
3. Importa \`script.sql\`
4. Después importa \`inserts.sql\`

## 8. Autor
Nombre del alumno, curso, academia.

## 9. Mejoras futuras (opcional)
- Vistas
- Borrado lógico
- CASCADE
- Nuevas tablas`}</code>
              </pre>

            </article>
          </details>
        </section>

      </div>
    </main>
  );
}
