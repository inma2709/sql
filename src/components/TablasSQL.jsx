function TablasSQL() {
  return (
    <main id="contenido" className="contenido-principal contenedor">
      {/* ================================
         3.1 INTRODUCCIÓN
      ================================= */}
      <section className="section" id="modelo-fisico-intro">
        <details open>
          <summary>3.1. Introducción y conceptos básicos</summary>

          <article className="card">
            <h3>3.1 Introducción y conceptos básicos</h3>
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
              A este proceso también se le llama <em>“pasar del modelado lógico al
              modelado físico”</em>, porque convertimos un diagrama conceptual en
              tablas reales dentro de MySQL/MariaDB.
            </p>
          </article>
        </details>
      </section>

      {/* ================================
         3.2 TABLAS PADRE E HIJA
      ================================= */}
      <section className="section" id="tablas-padre-hija">
        <details>
          <summary>3.2. Crear tablas a partir del modelo físico</summary>

          <article className="card">
            <h3>3.2. Crear tablas a partir del modelo físico</h3>
            <p>
              Cada entidad del modelo se convierte en una tabla.  
              Para crear la base de datos correctamente, siempre debemos empezar por las{" "}
              <strong>tablas padre</strong>, es decir, aquellas que{" "}
              <strong>no dependen de ninguna otra</strong> y que{" "}
              <strong>no reciben claves foráneas (FK)</strong>.  
              Una vez creadas, podremos continuar con las tablas hijas, que sí contienen
              claves foráneas.
            </p>

            <div className="callout">
              <p>
                Regla fundamental del modelado físico:{" "}
                <strong>
                  primero se crean las tablas que no reciben FK → después las que sí
                  reciben FK.
                </strong>
              </p>
            </div>
            <div className="cuadro-didactico">
  <h4>Cómo identificar la tabla hija (la que recibe la FK)</h4>

  <p><strong>La tabla hija siempre es la que se REPITE. La tabla padre es la que NO se repite.</strong></p>

  <div className="cuadro-didactico__grid">

    {/* Ejemplo 1 */}
    <div className="cuadro-didactico__item">
      <h5>Ejemplo 1: Categorías → Productos</h5>
      <p>
        Una categoría tiene muchos productos.  
        Lo que se repite son los <strong>productos</strong>.
        <br />👉 La FK va en <code className="etiqueta-codigo">productos.categoria_id</code>
      </p>
    </div>

    {/* Ejemplo 2 */}
    <div className="cuadro-didactico__item">
      <h5>Ejemplo 2: Clientes → Reservas</h5>
      <p>
        Un cliente puede hacer muchas reservas.  
        Lo que se repite son las <strong>reservas</strong>.
        <br />👉 La FK va en <code className="etiqueta-codigo">reservas.cliente_id</code>
      </p>
    </div>

    {/* Ejemplo 3 */}
    <div className="cuadro-didactico__item">
      <h5>Ejemplo 3: Profesores → Alumnos</h5>
      <p>
        Un profesor puede tener muchos alumnos.  
        Lo que se repite son los <strong>alumnos</strong>.
        <br />👉 La FK va en <code className="etiqueta-codigo">alumnos.profesor_id</code>
      </p>
    </div>

    {/* Ejemplo 4 */}
    <div className="cuadro-didactico__item">
      <h5>Ejemplo 4: Pedidos → Líneas de pedido</h5>
      <p>
        Un pedido tiene varias líneas.  
        Lo que se repite son las <strong>líneas de pedido</strong>.
        <br />👉 La FK va en <code className="etiqueta-codigo">lineas.pedido_id</code>
      </p>
    </div>

    {/* Ejemplo 5 */}
    <div className="cuadro-didactico__item">
      <h5>Ejemplo 5: Usuarios → Comentarios</h5>
      <p>
        Un usuario puede escribir muchos comentarios.  
        Lo que se repite son los <strong>comentarios</strong>.
        <br />👉 La FK va en <code className="etiqueta-codigo">comentarios.usuario_id</code>
      </p>
    </div>

  </div>

  <p className="cuadro-didactico__nota">
    Regla definitiva: <strong>“La tabla hija es la que necesita saber de quién depende.”</strong><br />
    Por eso, <strong>la FK siempre va en la tabla que se repite. La que tiene la n a su lado.</strong>.
  </p>
  <p>
  Cuando definimos una <strong>clave foránea</strong>, podemos indicar qué debe hacer
  MySQL cuando se <strong>borra</strong> o se <strong>actualiza</strong> el registro de la 
  tabla padre. Estas reglas se añaden después de la sentencia 
  <code className="etiqueta-codigo">REFERENCES</code> y controlan el comportamiento de 
  la relación. Si no especificamos ninguna acción, MySQL utiliza valores 
  <strong>por defecto</strong> para proteger la integridad de los datos.
</p>

<p>
  Por defecto, MySQL aplica <strong>RESTRICT</strong> (o <strong>NO ACTION</strong>) en 
  ambas operaciones. Esto significa que <strong>no podrás borrar ni modificar</strong> un 
  registro de la tabla padre si existen registros hijos que dependen de él.  
  En otras palabras, MySQL protege la base de datos impidiendo que se queden 
  registros “huérfanos”.
</p>

<div className="contenedor-tabla espacio-arriba">
  <table className="tabla-datos">
    <thead>
      <tr>
        <th>Acción</th>
        <th>Qué hace</th>
        <th>Cuándo usarlo</th>
        <th>Ejemplo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>RESTRICT</strong> (por defecto)</td>
        <td>No permite borrar o cambiar el registro padre si tiene hijos.</td>
        <td>
          Cuando quieres evitar eliminar datos por accidente y proteger la integridad.
        </td>
        <td>
          No puedes borrar un cliente que tiene pedidos.
        </td>
      </tr>

      <tr>
        <td><strong>NO ACTION</strong></td>
        <td>Igual que RESTRICT en MySQL.</td>
        <td>Cuando deseas el comportamiento estándar SQL.</td>
        <td>
          Impide cambiar la clave primaria del padre si hay hijos.
        </td>
      </tr>

      <tr>
        <td><strong>CASCADE</strong></td>
        <td>
          Si se borra o actualiza el padre, se borran o actualizan automáticamente 
          los hijos.
        </td>
        <td>
          Cuando los registros hijos no tienen sentido por sí mismos.
        </td>
        <td>
          Si borras una categoría, se borran sus productos.
        </td>
      </tr>

      <tr>
        <td><strong>SET NULL</strong></td>
        <td>Pone la clave foránea a NULL en la tabla hija.</td>
        <td>
          Útil cuando el hijo puede existir sin padre, pero sin relación.
        </td>
        <td>
          Si borras un usuario, los posts quedan con autor NULL.
        </td>
      </tr>

      <tr>
        <td><strong>SET DEFAULT</strong></td>
        <td>Pone un valor por defecto (MySQL casi no lo usa).</td>
        <td>Más común en PostgreSQL.</td>
        <td>
          Si borras la categoría, el producto pasa a categoría “general”.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p className="cuadro-didactico__nota">
  Si no indicas ninguna acción en la clave foránea, MySQL aplicará 
  <strong>RESTRICT</strong> automáticamente. Esto significa que <strong>no te dejará</strong> 
  borrar o modificar el registro padre mientras existan registros hijos que dependan 
  de él. Es el comportamiento más seguro y el que se usa por defecto.
</p>

<p>
  Para definir estas reglas manualmente, se añaden directamente dentro de la 
  declaración de la clave foránea:
</p>

<pre className="bloque-codigo">
  <code>{`FOREIGN KEY (cliente_id)
  REFERENCES clientes(id_cliente)
  ON DELETE CASCADE
  ON UPDATE CASCADE;`}</code>
</pre>

<p>
  También se pueden añadir después mediante un <strong>ALTER TABLE</strong>:
</p>

<pre className="bloque-codigo">
  <code>{`ALTER TABLE pedidos
ADD CONSTRAINT fk_pedidos_clientes
FOREIGN KEY (cliente_id)
  REFERENCES clientes(id_cliente)
  ON DELETE RESTRICT
  ON UPDATE CASCADE;`}</code>
</pre>

<p>
  En <strong>phpMyAdmin</strong>, estas opciones aparecen en la sección 
  <em>Vista relacional</em>, donde puedes elegir entre 
  <code>CASCADE</code>, <code>RESTRICT</code>, <code>SET NULL</code> o 
  <code>NO ACTION</code> sin escribir SQL manualmente.
</p>

</div>

          </article>
        </details>
      </section>


      {/* ================================
         3.4 CLAVES FORÁNEAS Y LADO N
      ================================= */}
      <section className="section" id="claves-foraneas-1n">
        <details>
          <summary>3.4. Claves foráneas y relaciones 1–N (ejemplo clientes–reservas)</summary>

          <article className="card">
            <h2>Claves foráneas y relaciones 1–N</h2>

            <p>
              Una <strong>clave foránea</strong> (foreign key o FK) es una columna que se
              coloca en una tabla para indicar que cada registro{" "}
              <strong>pertenece</strong> a un registro de otra tabla. Es el mecanismo
              que usa una base de datos relacional para enlazar tablas entre sí y
              mantener la integridad de los datos.
            </p>

            <p>
              En una relación <strong>1–N</strong> (uno a muchos), un registro de la tabla
              del lado <strong>1</strong> puede estar asociado a muchos registros de la
              tabla del lado <strong>N</strong>, pero cada registro del lado N solo puede
              pertenecer a <strong>uno</strong> del lado 1. La clave foránea se coloca
              siempre en la tabla del lado N, que es la tabla donde los datos se
              repiten.
            </p>

            <div className="cuadro-didactico">
              <h4>Regla de oro</h4>
              <p>
                <strong>
                  La clave foránea siempre va en la tabla donde se repiten los registros.
                </strong>
              </p>

              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>Ejemplo 1</h5>
                  <p>
                    Un cliente puede hacer muchas reservas, pero cada reserva pertenece
                    a un solo cliente.
                    <br />
                    👉 FK <code className="etiqueta-codigo">cliente_id</code> en{" "}
                    <strong>reservas</strong>.
                  </p>
                </div>

                <div className="cuadro-didactico__item">
                  <h5>Ejemplo 2</h5>
                  <p>
                    Una categoría puede tener muchos productos, pero cada producto solo
                    pertenece a una categoría.
                    <br />
                    👉 FK <code className="etiqueta-codigo">categoria_id</code> en{" "}
                    <strong>productos</strong>.
                  </p>
                </div>

                <div className="cuadro-didactico__item">
                  <h5>Ejemplo 3</h5>
                  <p>
                    Un profesor puede tener muchos alumnos, pero cada alumno solo tiene
                    un profesor tutor.
                    <br />
                    👉 FK <code className="etiqueta-codigo">profesor_id</code> en{" "}
                    <strong>alumnos</strong>.
                  </p>
                </div>

                <div className="cuadro-didactico__item">
                  <h5>Conclusión</h5>
                  <p>
                    Identifica primero quién es el lado 1 (no se repite) y quién es el
                    lado N (sí se repite). La foreign key se coloca en la tabla del lado
                    N.
                  </p>
                </div>
              </div>

              <p className="cuadro-didactico__nota">
                Una forma sencilla de recordarlo:{" "}
                <strong>
                  “el lado N lleva la FK porque es el lado que necesita saber a quién
                  pertenece”
                </strong>
                .
              </p>
            </div>

            {/* Ejemplo detallado: clientes y reservas */}
            <h3>Ejemplo: clientes y reservas</h3>

            <p>
              Vamos a trabajar con el caso típico de un sistema de reservas de hotel.  
              Tenemos dos entidades: <strong>clientes</strong> y{" "}
              <strong>reservas</strong>.
            </p>

            <div className="contenedor-tabla">
              <table className="tabla-datos tabla-datos--compacta">
                <thead>
                  <tr>
                    <th>Entidad</th>
                    <th>Descripción</th>
                    <th>Lado en la relación</th>
                    <th>¿Se repite?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>clientes</strong></td>
                    <td>
                      Guarda la información de cada persona (nombre, email, teléfono...)
                    </td>
                    <td><strong>Lado 1</strong></td>
                    <td>No se repite el mismo cliente (id único).</td>
                  </tr>
                  <tr>
                    <td><strong>reservas</strong></td>
                    <td>
                      Guarda las reservas realizadas (fecha, habitación, etc.)
                    </td>
                    <td><strong>Lado N</strong></td>
                    <td>Un mismo cliente puede aparecer en muchas reservas.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Si pensamos en la vida real: un cliente puede hacer hoy una reserva, dentro
              de unas semanas otra, y más adelante otra diferente.{" "}
              <strong>Lo que se repite son las reservas, no el cliente</strong>.  
              Por eso, la tabla <strong>reservas</strong> es el lado N y es la que lleva
              la clave foránea.
            </p>

            <h4>Tablas con datos de ejemplo</h4>

            <p>
              <strong>Tabla clientes</strong> (lado 1)
            </p>
            <div className="contenedor-tabla">
              <table className="tabla-datos tabla-datos--compacta">
                <thead>
                  <tr>
                    <th>id_cliente</th>
                    <th>nombre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ana</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Marcos</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Lucía</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Tabla reservas</strong> (lado N, con la foreign key)
            </p>
            <div className="contenedor-tabla">
              <table className="tabla-datos tabla-datos--compacta">
                <thead>
                  <tr>
                    <th>id_reserva</th>
                    <th>fecha</th>
                    <th>cliente_id (FK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10</td>
                    <td>2025-02-01</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>2025-02-05</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>2025-03-01</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Interpretación de los datos:</p>
            <ul className="lista-simple">
              <li>
                La reserva <strong>10</strong> la hizo <strong>Ana</strong>{" "}
                (cliente_id = 1).
              </li>
              <li>
                La reserva <strong>11</strong> también la hizo <strong>Ana</strong>.
              </li>
              <li>
                La reserva <strong>12</strong> la hizo <strong>Lucía</strong>{" "}
                (cliente_id = 3).
              </li>
              <li>
                Marcos (id_cliente = 2) todavía no ha hecho reservas, pero podría
                hacerlo en cualquier momento.
              </li>
            </ul>

            <div className="callout">
              <p>
                Observa que <strong>no hay columna reserva_id en la tabla clientes</strong>.
                Un cliente no depende de las reservas; en cambio, cada reserva sí depende
                de un cliente. Por eso la foreign key{" "}
                <code className="etiqueta-codigo">cliente_id</code> está en la tabla{" "}
                <strong>reservas</strong>.
              </p>
            </div>

            {/* SQL del diseño correcto */}
            <h3>Definir la clave foránea en SQL</h3>

            <p>
              A nivel de código SQL, el diseño correcto de estas tablas podría ser:
            </p>

            <pre className="bloque-codigo">
              <code>{`CREATE TABLE clientes (
  id_cliente INT AUTO_INCREMENT PRIMARY KEY,
  nombre      VARCHAR(100) NOT NULL
);

CREATE TABLE reservas (
  id_reserva INT AUTO_INCREMENT PRIMARY KEY,
  fecha      DATE NOT NULL,
  cliente_id INT NOT NULL,
  CONSTRAINT fk_reservas_clientes
    FOREIGN KEY (cliente_id)
    REFERENCES clientes(id_cliente)
);`}</code>
            </pre>

            <div className="cuadro-didactico">
              <h4>Cómo explicárselo a los alumnos</h4>
              <div className="cuadro-didactico__grid">
                <div className="cuadro-didactico__item">
                  <h5>1. Identificar el lado 1</h5>
                  <p>
                    Pregúntales: ¿qué es lo que NO se repite?  
                    En el ejemplo, el cliente: cada persona es única.
                  </p>
                </div>

                <div className="cuadro-didactico__item">
                  <h5>2. Identificar el lado N</h5>
                  <p>
                    Pregunta: ¿qué es lo que SÍ se repite?  
                    En el ejemplo, las reservas: un cliente puede tener muchas.
                  </p>
                </div>

                <div className="cuadro-didactico__item">
                  <h5>3. Colocar la FK</h5>
                  <p>
                    La foreign key se coloca en la tabla que está en el lado N, con un
                    nombre del tipo{" "}
                    <code className="etiqueta-codigo">nombreTablaPadre_id</code>, por
                    ejemplo <code className="etiqueta-codigo">cliente_id</code>.
                  </p>
                </div>

                <div className="cuadro-didactico__item">
                  <h5>4. Comprobar</h5>
                  <p>
                    Lee una fila de la tabla hija y pregúntales:  
                    “¿De quién es esta reserva / este producto / este alumno?”  
                    La respuesta siempre se saca gracias a la foreign key.
                  </p>
                </div>
              </div>

              <p className="cuadro-didactico__nota">
                Si dudan dónde va la foreign key, que piensen primero:{" "}
                <strong>
                  “¿qué se repite, la reserva o el cliente? ¿el producto o la
                  categoría?”
                </strong>
                . La respuesta les dirá en qué tabla colocar la clave foránea.
              </p>
            </div>
          </article>
        </details>
      </section>

      {/* ================================
         3.5 DEFAULT / VALORES POR DEFECTO
      ================================= */}
      <section className="section" id="valores-default">
        <details>
          <summary>3.5. Uso de valores por defecto (DEFAULT)</summary>

          <article className="card">
            <h3>3.5. Uso de valores por defecto (DEFAULT)</h3>

            <p>
              Un valor por defecto sirve para que una columna tenga un valor automático si
              no se especifica durante la inserción. “Predeterminado” (o DEFAULT) es justo
              donde eliges el valor por defecto que tendrá esa columna cuando el usuario
              NO introduzca ningún dato.
            </p>

            <p>Se define directamente en el <strong>CREATE TABLE</strong>:</p>

            <pre className="bloque-codigo">
              <code>{`stock INT DEFAULT 0,
activo TINYINT(1) DEFAULT 1`}</code>
            </pre>

            <h4>¿Cuándo tiene sentido usar DEFAULT?</h4>

            <ul>
              <li>
                <strong>Cuando existe un valor inicial lógico o común</strong>  
                Por ejemplo, en inventarios el <code>stock</code> suele comenzar en{" "}
                <code>0</code>, o en comentarios el campo <code>likes</code> puede
                empezar en <code>0</code>. Así evitamos escribirlo manualmente en cada
                inserción. Si no lo nombramos en las columnas no hace falta poner DEFAULT
                y cogerá también el valor por defecto.
              </li>

              <li>
                <strong>Para evitar errores al omitir columnas en un INSERT</strong>  
                Si un campo no tiene predeterminado y no admite NULL, MySQL dará error.  
                Con un DEFAULT adecuado, la sentencia INSERT funciona incluso si el campo
                no se envía.
              </li>

              <li>
                <strong>Para simplificar inserciones repetitivas</strong>  
                Campos como <code>rol</code> en usuarios suelen empezar en{" "}
                <code>'usuario'</code> en vez de <code>'admin'</code>, o un pedido puede
                empezar con estado <code>'pendiente'</code>.  
                Esto agiliza el trabajo del desarrollador.
              </li>

              <li>
                <strong>Para que ciertos campos no se queden en blanco sin sentido</strong>  
                Si un campo no debe quedar vacío pero tampoco queremos obligar al usuario
                a escribirlo, un valor predeterminado mantiene consistencia.  
                Por ejemplo: <code>pais = 'España'</code> en una tienda cuyo público es
                mayoritariamente nacional.
              </li>

              <li>
                <strong>Para campos booleanos o de estado</strong>  
                Es habitual establecer <code>activo = 1</code> para usuarios, productos o
                registros que deben estar disponibles nada más crearse, sin requerir
                intervención manual.
              </li>

              <li>
                <strong>Para automatizar datos repetitivos o técnicos</strong>  
                Campos como <code>fecha_creacion</code> o <code>fecha_registro</code>{" "}
                suelen usar <code>CURRENT_TIMESTAMP</code> como predeterminado, de modo
                que se rellenen automáticamente en cada inserción.
              </li>

              <li>
                <strong>Para mejorar la coherencia de los datos</strong>  
                Un buen DEFAULT asegura que, aunque falte información puntual, la tabla se
                mantiene ordenada y con valores razonables en todos sus registros.
              </li>

              <li>
                <strong>Para hacer el código más limpio y fácil de mantener</strong>  
                Cuando varios campos tienen valores automáticos, las sentencias SQL son
                más simples y hay menos riesgo de olvidar columnas obligatorias.
              </li>
            </ul>

            <p>Ejemplo completo:</p>

            <pre className="bloque-codigo">
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

            <pre className="bloque-codigo">
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
          </article>
        </details>
      </section>

      {/* ================================
         3.6 RESUMEN PROPIEDADES
      ================================= */}
      <section className="section" id="resumen-columnas">
        <details>
          <summary>3.6. Resumen: propiedades de columna en MySQL</summary>

          <article className="card">
            <h3>3.6. Resumen: propiedades de columna en MySQL</h3>

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
                    <td>
                      <code>categoria_id INT REFERENCES categorias(id)</code>
                    </td>
                  </tr>

                  <tr>
                    <td><strong>NOT NULL</strong></td>
                    <td>Obliga a dar un valor (no puede ser NULL).</td>
                    <td>
                      <code>nombre VARCHAR(100) NOT NULL</code>
                    </td>
                  </tr>

                  <tr>
                    <td><strong>DEFAULT</strong></td>
                    <td>Define un valor automático si no se inserta.</td>
                    <td>
                      <code>stock INT DEFAULT 0</code>
                    </td>
                  </tr>

                  <tr>
                    <td><strong>UNIQUE</strong></td>
                    <td>Evita duplicados.</td>
                    <td>
                      <code>email VARCHAR(120) UNIQUE</code>
                    </td>
                  </tr>

                  <tr>
                    <td><strong>NULL</strong></td>
                    <td>Permite no dar valor (valor vacío permitido).</td>
                    <td>
                      <code>categoria_id INT NULL</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </details>
      </section>

      {/* ================================
         3.7 VALORES ENUM
      ================================= */}
      <section className="section" id="valores-enum">
        <details>
          <summary>3.7. Valores ENUM</summary>

          <article className="card">
            <h3>3.7 Valores ENUM</h3>

            <p>
              Cuando seleccionamos el tipo{" "}
              <code className="etiqueta-codigo">ENUM</code> en phpMyAdmin, el campo{" "}
              <strong>Longitud/Valores</strong> no sirve para poner un número, sino para
              indicar <strong>qué valores permitidos tendrá esa columna</strong>.
            </p>

            <p>
              Para hacerlo correctamente, debemos escribir las opciones entre comillas
              simples y separadas por comas:
            </p>

            <div className="contenedor-tabla">
              <table className="tabla-datos tabla-datos--compacta">
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                    <th>Valores</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>estado</td>
                    <td>ENUM</td>
                    <td>
                      <code>
                        'pendiente','procesando','enviado','entregado'
                      </code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </details>
      </section>

      {/* ================================
         3.8 FECHAS Y HORAS
      ================================= */}
      <section className="section" id="fechas-mysql">
        <details>
          <summary>3.8. Cómo trabajar con fechas y horas en MySQL</summary>

          <article className="card">
            <h3>3.8 Cómo trabajar con fechas y horas en MySQL</h3>

            <p>
              MySQL ofrece varios tipos de datos para manejar fechas, horas y momentos
              exactos en el tiempo. Elegir el tipo adecuado es fundamental para evitar
              errores y trabajar correctamente con calendarios, horarios o registros de
              actividad.
            </p>

            <div className="contenedor">
              <table className="tabla-datos">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Qué almacena</th>
                    <th>Formato</th>
                    <th>Cuándo usarlo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>DATE</code></td>
                    <td>Solo fecha</td>
                    <td>YYYY-MM-DD</td>
                    <td>
                      Cuando la hora no importa (fechas de nacimiento, estrenos, reservas
                      por día).
                    </td>
                  </tr>

                  <tr>
                    <td><code>TIME</code></td>
                    <td>Solo hora</td>
                    <td>HH:MM:SS</td>
                    <td>
                      Para guardar horarios (aperturas, turnos, duración de un evento).
                    </td>
                  </tr>

                  <tr>
                    <td><code>DATETIME</code></td>
                    <td>Fecha y hora</td>
                    <td>YYYY-MM-DD HH:MM:SS</td>
                    <td>
                      Cuando importa el momento exacto (fecha de registro, compras,
                      comentarios).
                    </td>
                  </tr>

                  <tr>
                    <td><code>TIMESTAMP</code></td>
                    <td>Fecha y hora (con zona horaria)</td>
                    <td>YYYY-MM-DD HH:MM:SS</td>
                    <td>
                      Para auditorías y sistemas distribuidos. Cambia según la zona
                      horaria del servidor.
                    </td>
                  </tr>

                  <tr>
                    <td><code>YEAR</code></td>
                    <td>Un año</td>
                    <td>YYYY</td>
                    <td>
                      Para almacenar solo el año (año de estreno, año fiscal).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>¿Cómo elegir entre DATE y DATETIME?</h4>

            <div className="contenedor">
              <table className="tabla-datos">
                <thead>
                  <tr>
                    <th>Si necesitas guardar…</th>
                    <th>Usa</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Una fecha sin hora</td>
                    <td><strong>DATE</strong></td>
                    <td><code>'2025-06-19'</code></td>
                  </tr>

                  <tr>
                    <td>Fecha + hora exacta</td>
                    <td><strong>DATETIME</strong></td>
                    <td><code>'2025-06-19 14:22:55'</code></td>
                  </tr>

                  <tr>
                    <td>Hora sola</td>
                    <td><strong>TIME</strong></td>
                    <td><code>'18:30:00'</code></td>
                  </tr>

                  <tr>
                    <td>Diferencias horarias entre servidores</td>
                    <td><strong>TIMESTAMP</strong></td>
                    <td><code>'2025-06-19 14:22:55'</code> (ajustado a zona horaria)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Ejemplo de creación de una tabla que usa DATE y TIME:</p>

            <pre className="bloque-codigo">
              <code>{`CREATE TABLE eventos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  fecha DATE NOT NULL,
  hora TIME NOT NULL
);`}</code>
            </pre>

            <p>Para insertar datos con fechas y horas:</p>

            <pre className="bloque-codigo">
              <code>{`INSERT INTO eventos (nombre, fecha, hora)
VALUES ('Concierto', '2023-05-15', '20:00:00');`}</code>
            </pre>

            <h4>Operaciones útiles con fechas en MySQL</h4>

            <p>MySQL permite trabajar con fechas de forma muy potente:</p>

            <ul>
              <li>
                <strong>Calcular diferencias</strong>:{" "}
                <code>DATEDIFF(fecha1, fecha2)</code>
              </li>
              <li>
                <strong>Sumar días, meses o años</strong>:{" "}
                <code>DATE_ADD(fecha, INTERVAL 7 DAY)</code>
              </li>
              <li>
                <strong>Restar tiempo</strong>:{" "}
                <code>DATE_SUB(fecha, INTERVAL 1 MONTH)</code>
              </li>
              <li>
                <strong>Extraer partes</strong>:{" "}
                <code>YEAR(fecha)</code>, <code>MONTH(fecha)</code>,{" "}
                <code>HOUR(datetime)</code>
              </li>
              <li>
                <strong>Formatear</strong>:{" "}
                <code>DATE_FORMAT(fecha, '%d/%m/%Y')</code>
              </li>
            </ul>
          </article>
        </details>
      </section>

      {/* ================================
         3.9 TABLA HIJA CON FK
      ================================= */}
      <section className="section" id="crear-tabla-hija">
        <details>
          <summary>3.9. Cómo crear correctamente una tabla hija con clave foránea</summary>

          <article className="card">
            <h3>3.9. Cómo crear correctamente una tabla hija con clave foránea</h3>

            <p>
              En los modelos relacionales, una <strong>tabla hija</strong> es aquella que
              depende de una tabla padre. Esto se representa a través de una{" "}
              <strong>clave foránea (FK)</strong>, que conecta el registro hijo con un
              registro existente en la tabla padre.
            </p>

            <p>
              En nuestro modelo, <strong>categorías</strong> es la tabla padre y{" "}
              <strong>productos</strong> es la tabla hija, porque cada producto pertenece
              a una categoría.
            </p>

            <h4>¿Qué requisitos debe cumplir una clave foránea?</h4>

            <ul>
              <li>
                Debe apuntar a una <strong>PRIMARY KEY</strong> o{" "}
                <strong>UNIQUE</strong> de la tabla padre.
              </li>
              <li>
                Debe tener el mismo tipo de dato (ej.: INT → INT).
              </li>
              <li>
                La tabla padre <strong>debe existir previamente</strong>.
              </li>
              <li>
                El valor de la FK debe existir ya en la tabla padre, o ser NULL si la
                FK lo permite.
              </li>
            </ul>

            <h4>Ejemplo completo de tabla hija correctamente diseñada</h4>

            <pre className="bloque-codigo">
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
                <strong>categoria_id INT</strong> → es la columna que guarda la
                relación. Debe ser del mismo tipo que{" "}
                <code>categorias.id</code>.
              </li>
              <li>
                <strong>FOREIGN KEY (categoria_id)</strong> → definimos qué columna es la
                clave foránea.
              </li>
              <li>
                <strong>REFERENCES categorias(id)</strong> → indica a qué tabla y
                columna apunta.
              </li>
              <li>
                La relación garantiza que{" "}
                <strong>
                  no puedes insertar productos con categorías que no existan
                </strong>
                .
              </li>
              <li>
                Si <code>categoria_id</code> permite NULL, entonces el producto puede no
                tener categoría.
              </li>
            </ul>

            <h4>¿Por qué es importante una clave foránea?</h4>

            <p>
              La clave foránea asegura la <strong>integridad referencial</strong>: los
              datos siempre estarán correctamente relacionados. Esto evita errores como:
            </p>

            <ul>
              <li>Productos con categorías inexistentes</li>
              <li>Datos huérfanos</li>
              <li>Inconsistencias al borrar o actualizar registros</li>
            </ul>

            <h4>Comportamiento de una FK al borrar o modificar datos</h4>

            <p>
              Opcionalmente, puedes definir reglas especiales cuando se elimina o
              modifica la fila padre:
            </p>

            <pre className="bloque-codigo">
              <code>{`FOREIGN KEY (categoria_id)
  REFERENCES categorias(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE`}</code>
            </pre>

            <ul>
              <li>
                <strong>ON DELETE CASCADE</strong> → si borras una categoría, se borran
                sus productos.
              </li>
              <li>
                <strong>ON UPDATE CASCADE</strong> → si cambia el id de la categoría, se
                actualiza en productos.
              </li>
              <li>
                <strong>NO ACTION / RESTRICT (por defecto)</strong> → si existen
                productos, no puedes borrar su categoría.
              </li>
            </ul>

            <h4>Errores típicos al crear tablas con FK:</h4>

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
                    <td>
                      No puedes insertar valores que no existan en la tabla padre
                    </td>
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
              Con esto, entienden completamente cómo se crea una relación 1:N en SQL
              y cómo se implementa correctamente en el modelo físico.
            </p>
          </article>
        </details>
      </section>
    </main>
  );
}

export default TablasSQL;
