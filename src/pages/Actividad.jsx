import React from 'react';

const Actividad = () => {
  return (
    <main className="contenido-principal">
      <div className="contenedor">
        {/* ================================
            CABECERA DE ACTIVIDADES
           ================================ */}
        <div className="hero">
          <span className="kicker">Proyecto Práctico</span>
          <h1>Actividades Base de Datos Bazar</h1>
          <p className="subtitle">
            Desarrollo completo de una base de datos para un bazar desde el diseño conceptual
            hasta la implementación con consultas SQL avanzadas
          </p>
        </div>

        {/* ================================
            ÍNDICE DE ACTIVIDADES
           ================================ */}
       <nav className="toc">
  <h2>📋 Índice de Actividades</h2>
  <ol>
    <li><a href="#bazar-erl">Actividad 1 – Crear diagrama ERL del bazar</a></li>
    <li><a href="#bazar-modelo-logico">Actividad 2 – Modelo lógico del bazar</a></li>
    <li><a href="#bazar-tablas-phpmyadmin">Actividad 3 – Crear las tablas en phpMyAdmin</a></li>
    <li><a href="#bazar-insertar-datos">Actividad 4 – Insertar datos de ejemplo</a></li>
    <li><a href="#bazar-consultas-basicas">Actividad 5 – Consultas básicas</a></li>
    <li><a href="#bazar-consultas-avanzadas">Actividad 6 – Consultas avanzadas</a></li>
    <li><a href="#bazar-calculos-sql">Actividad 7 – Cálculos en SQL</a></li>
    <li><a href="#bazar-vistas">Actividad 8 – Crear y usar vistas</a></li>
  </ol>
</nav>

<section className="section" id="intro-guardar-git">
  <details>
    <summary>💾 Introducción: Cómo guardar tu proyecto y subirlo a GitHub</summary>

    <article className="card">

      <h2>💾 Introducción: Guarda tu proyecto <code>bazar</code> como un proyecto backend SQL</h2>

      <p>
        A partir de este momento, lo que estás construyendo no es solo una actividad suelta:
        estás creando tu <strong>primer proyecto backend en SQL</strong>.  
        Esto significa que vas a tener todos tus archivos bien organizados y listos para
        subirlos a un repositorio de GitHub tal y como lo hacen los profesionales.
      </p>

      <div className="callout">
        Objetivo: que al terminar todas las actividades del bazar, puedas decir  
        <strong>“Este es mi proyecto SQL completo”</strong>  
        y compartirlo con quien quieras.
      </div>

      <hr />

      <h3>📁 1. Crea una carpeta para tu proyecto</h3>

      <p>
        En tu ordenador, crea una carpeta llamada:
      </p>

      <pre><code>
bazar-sql
      </code></pre>

      <p>
        Dentro de esa carpeta guardaremos todos los archivos relacionados con este proyecto.
      </p>

      <hr />

      <h3>🗂 2. Qué archivos debes guardar</h3>

      <p>
        TODO tu proyecto del bazar debe acabar teniendo estos archivos:
      </p>

      <ul className="lista-simple">
        <li><strong>01-diagrama-erl.png</strong> — tu diagrama ERL.</li>
        <li><strong>02-modelo-logico.pdf</strong> — el modelo lógico en tablas.</li>
        <li><strong>03-tablas.sql</strong> — archivo con todas las sentencias <code>CREATE TABLE</code>.</li>
        <li><strong>04-inserts.sql</strong> — archivo con todos los <code>INSERT INTO</code>.</li>
        <li><strong>05-consultas-basicas.sql</strong> — consultas de la Actividad 5.</li>
        <li><strong>06-consultas-avanzadas.sql</strong> — consultas de la Actividad 6.</li>
        <li><strong>07-calculos.sql</strong> — cálculos de la Actividad 7.</li>
        <li><strong>08-vistas.sql</strong> — vistas de la Actividad 8.</li>
        <li><strong>README.md</strong> — explicación del proyecto.</li>
      </ul>

      <p>
        Puedes guardar cada archivo copiando el SQL desde phpMyAdmin o desde tu editor favorito.
      </p>

      <hr />

      <h3>💡 3. ¿Por qué es importante guardar el proyecto así?</h3>

      <ul className="lista-simple">
        <li>Porque te prepara para trabajar como un desarrollador real.</li>
        <li>Porque podrás volver a este proyecto en cualquier momento.</li>
        <li>Porque podrás demostrar tus conocimientos a empresas o profesores.</li>
        <li>Porque podrás compartirlo en GitHub como parte de tu portfolio.</li>
      </ul>

      <div className="callout">
        Los buenos programadores SIEMPRE guardan sus proyectos en carpetas bien
        organizadas y los suben a GitHub.
      </div>

      <hr />

      <h3>🌐 4. Cómo subir el proyecto a GitHub (paso a paso)</h3>

      <p>
        Una vez tengas tus archivos organizados, sigue estos pasos:
      </p>

      <ol className="lista-simple">
        <li>Ve a GitHub y crea un repositorio llamado <code>bazar-sql</code>.</li>
        <li>Abre tu carpeta del proyecto en tu ordenador.</li>
        <li>Haz clic derecho → <strong>Abrir con Git Bash</strong>.</li>
        <li>Ejecuta estos comandos:</li>
      </ol>

      <pre><code>
git init
git add .
git commit -m "Proyecto SQL Bazar: primera versión"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/bazar-sql.git
git push -u origin main
      </code></pre>

      <p>
        Si todo ha ido bien, tu proyecto aparecerá en GitHub.  
        ¡Ya puedes compartirlo con el mundo!
      </p>

      <hr />

      <h3>🎯 5. Conclusión para el alumnado</h3>

      <p>
        Con este proyecto vas a aprender no solo SQL, sino también cómo trabaja un
        desarrollador backend: con versiones, con archivos claros y con repositorios
        profesionales.
      </p>

      <p className="nota nota-importante">
        Guarda siempre tus avances. Todo lo que crees en este curso puede formar
        parte de tu <strong>portfolio profesional</strong>.
      </p>

    </article>
  </details>
</section>



        {/* ================================
            ACTIVIDAD 1: DIAGRAMA ERL BAZAR
           ================================ */}
        <section className="section" id="bazar-erl">
          <details>
            <summary>Actividad 1 – Diagrama ERL de la base de datos <code>bazar</code></summary>

            <article className="card">
              <h2>Actividad 1: Diseñar el diagrama ERL del bazar</h2>

              <p>
                Vamos a empezar el proyecto creando el <strong>modelo conceptual</strong> de una base de datos
                llamada <code>bazar</code>. Imagina una tienda que vende distintos productos, tiene clientes
                y registra sus pedidos.
              </p>

              <p>
                Nuestro objetivo en esta actividad es dibujar el <strong>diagrama ERL</strong> (Entidades y
                Relaciones) usando:
              </p>

              <ul className="lista-simple">
                <li><strong>Entidades</strong> como rectángulos (por ejemplo: <code>CLIENTE</code>).</li>
                <li><strong>Atributos</strong> como círculos u óvalos alrededor de cada entidad.</li>
                <li><strong>Relaciones</strong> como rombos entre entidades, con sus cardinalidades (1,N, M,N...).</li>
              </ul>

              <div className="callout">
                <strong>Indicaciones:</strong> dibuja el diagrama a mano o con una herramienta de diagramas
                (por ejemplo, diagrams.net). Lo importante es que se entienda la estructura lógica del bazar.
              </div>

              <h3>1️⃣ Entidades y atributos propuestos</h3>

              <p>
                Estas son las entidades principales que usaremos en el proyecto. A partir de ellas dibujarás
                tu diagrama ERL. Los atributos marcados en <strong>negrita</strong> serán las claves primarias.
              </p>

              <div className="contenedor-tabla">
                <table className="tabla-datos tabla-datos--compacta">
                  <thead>
                    <tr>
                      <th>Entidad</th>
                      <th>Descripción</th>
                      <th>Atributos (propuesta)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>CLIENTE</strong></td>
                      <td>Personas que compran en el bazar.</td>
                      <td>
                        <code className="etiqueta-codigo"><strong>id_cliente</strong></code>,
                        {" "}
                        <code className="etiqueta-codigo">nombre</code>,
                        {" "}
                        <code className="etiqueta-codigo">apellidos</code>,
                        {" "}
                        <code className="etiqueta-codigo">dni</code>,
                        {" "}
                        <code className="etiqueta-codigo">telefono</code>,
                        {" "}
                        <code className="etiqueta-codigo">email</code>,
                        {" "}
                        <code className="etiqueta-codigo">direccion</code>,
                        {" "}
                        <code className="etiqueta-codigo">ciudad</code>,
                        {" "}
                        <code className="etiqueta-codigo">cp</code>,
                        {" "}
                        <code className="etiqueta-codigo">fecha_alta</code>
                      </td>
                    </tr>

                    <tr>
                      <td><strong>PRODUCTO</strong></td>
                      <td>Artículos que vende el bazar.</td>
                      <td>
                        <code className="etiqueta-codigo"><strong>id_producto</strong></code>,
                        {" "}
                        <code className="etiqueta-codigo">nombre</code>,
                        {" "}
                        <code className="etiqueta-codigo">descripcion</code>,
                        {" "}
                        <code className="etiqueta-codigo">precio</code>,
                        {" "}
                        <code className="etiqueta-codigo">stock</code>,
                        {" "}
                        <code className="etiqueta-codigo">categoria</code>
                      </td>
                    </tr>

                    <tr>
                      <td><strong>PEDIDO</strong></td>
                      <td>Encargos que realizan los clientes.</td>
                      <td>
                        <code className="etiqueta-codigo"><strong>id_pedido</strong></code>,
                        {" "}
                        <code className="etiqueta-codigo">fecha_pedido</code>,
                        {" "}
                        <code className="etiqueta-codigo">total</code>,
                        {" "}
                        <code className="etiqueta-codigo">forma_pago</code>,
                        {" "}
                        <code className="etiqueta-codigo">estado</code>,
                        {" "}
                        <code className="etiqueta-codigo">id_cliente</code> (FK)
                      </td>
                    </tr>

                    <tr>
                      <td><strong>⚙️ (Opcional) LINEA_PEDIDO</strong></td>
                      <td>
                        Tabla intermedia para relacionar <code>PEDIDO</code> y <code>PRODUCTO</code> en el
                        modelo relacional (la usaremos más adelante).
                      </td>
                      <td>
                        <code className="etiqueta-codigo"><strong>id_pedido</strong></code> (FK),
                        {" "}
                        <code className="etiqueta-codigo"><strong>id_producto</strong></code> (FK),
                        {" "}
                        <code className="etiqueta-codigo">cantidad</code>,
                        {" "}
                        <code className="etiqueta-codigo">precio_unitario</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="cuadro-didactico">
                <h4>Relaciones y cardinalidades del bazar</h4>

                <div className="cuadro-didactico__grid">
                  <div className="cuadro-didactico__item">
                    <h5>Relación CLIENTE–PEDIDO</h5>
                    <p>
                      Un <strong>cliente</strong> puede hacer <strong>muchos pedidos</strong>, pero cada
                      pedido pertenece a <strong>un solo cliente</strong>.  
                      Cardinalidad: <span className="texto-resaltado">CLIENTE 1 —— N PEDIDO</span>.
                    </p>
                  </div>

                  <div className="cuadro-didactico__item">
                    <h5>Relación PEDIDO–PRODUCTO</h5>
                    <p>
                      Un <strong>pedido</strong> incluye <strong>varios productos</strong>, y un 
                      <strong> producto</strong> puede aparecer en <strong>muchos pedidos</strong>.  
                      Cardinalidad: <span className="texto-resaltado">PEDIDO M —— N PRODUCTO</span>.  
                      En el modelo relacional esta relación M,N se resuelve con la entidad
                      <code className="etiqueta-codigo">LINEA_PEDIDO</code>.
                    </p>
                  </div>
                </div>

                <p className="cuadro-didactico__nota">
                  En tu diagrama ERL, dibuja la relación <strong>"realiza"</strong> entre
                  <code className="etiqueta-codigo">CLIENTE</code> y
                  <code className="etiqueta-codigo">PEDIDO</code>, y la relación
                  <strong>"incluye"</strong> entre <code className="etiqueta-codigo">PEDIDO</code> y
                  <code className="etiqueta-codigo">PRODUCTO</code>, con sus cardinalidades.
                </p>
              </div>

              <h3>2️⃣ Lo que tienen que hacer los alumnos</h3>

              <ol className="lista-simple">
                <li>Dibujar las entidades <strong>CLIENTE</strong>, <strong>PRODUCTO</strong> y <strong>PEDIDO</strong> como rectángulos.</li>
                <li>Añadir alrededor de cada rectángulo sus atributos como <strong>círculos</strong> u óvalos.</li>
                <li>Marcar la <strong>clave primaria</strong> en cada entidad (por ejemplo, subrayando <code>id_cliente</code>).</li>
                <li>Dibujar los <strong>rombos</strong> de las relaciones:
                  <ul className="lista-simple">
                    <li><code>realiza</code> entre <strong>CLIENTE</strong> y <strong>PEDIDO</strong> (1,N).</li>
                    <li><code>incluye</code> entre <strong>PEDIDO</strong> y <strong>PRODUCTO</strong> (M,N).</li>
                  </ul>
                </li>
                <li>Indicar las <strong>cardinalidades</strong> en cada lado de la relación (1, N o M).</li>
              </ol>

              <div className="nota nota-importante">
                Más adelante transformaremos este diagrama ERL en un <strong>modelo relacional</strong>
                con tablas SQL reales dentro de la base de datos <code>bazar</code>.
              </div>
            </article>
          </details>
        </section>

        {/* ================================
            PLACEHOLDER PARA FUTURAS ACTIVIDADES
           ================================ */}
        <section className="section" id="bazar-modelo-logico">
  <details>
    <summary>Actividad 2 – Diseñar el Modelo Lógico del bazar</summary>

    <article className="card">

      <h2>Actividad 2: Modelo Lógico de la base de datos <code>bazar</code></h2>

      <p>
        A partir del diagrama Entidad–Relación (ER) que diseñaste en la actividad anterior,
        ahora vamos a construir el <strong>Modelo Lógico</strong>. Este modelo representa
        cómo quedarán las <strong>tablas</strong> y sus <strong>columnas</strong> una vez 
        transformemos el diseño conceptual en una estructura más cercana al SQL.
      </p>

      <p>
        En el Modelo Lógico debes convertir cada entidad del diagrama ER en una tabla y definir:
      </p>

      <ul className="lista-simple">
        <li>El nombre de cada tabla.</li>
        <li>Las columnas que tendrá cada una.</li>
        <li>La <strong>clave primaria (PK)</strong> de cada tabla.</li>
        <li>Las <strong>claves foráneas (FK)</strong> necesarias para representar las relaciones.</li>
        <li>El tipo de dato <strong>lógico</strong> de cada columna (texto, entero, decimal, fecha...).</li>
      </ul>

      <div className="callout">
        Recuerda: este modelo NO lleva aún tipos específicos de MySQL 
        (como VARCHAR, INT o DECIMAL). Es un nivel intermedio entre el
        diagrama ER y el modelo físico.
      </div>

      <h3>🔧 Tu tarea</h3>

      <p>Crea una tabla para cada entidad de tu diagrama ER:</p>

      <ul className="lista-simple">
        <li><strong>CLIENTE</strong></li>
        <li><strong>PEDIDO</strong></li>
        <li><strong>PRODUCTO</strong></li>
        <li><strong>LINEA_PEDIDO</strong> (para resolver la relación M:N)</li>
      </ul>

      <h3>📋 Para cada tabla debes indicar:</h3>

      <ol className="lista-simple">
        <li><strong>Nombre de la tabla</strong>.</li>
        <li><strong>Columnas</strong> con su descripción.</li>
        <li><strong>Clave primaria (PK)</strong>.</li>
        <li><strong>Clave foránea (FK)</strong> si corresponde.</li>
        <li><strong>Tipo de dato lógico</strong>:
          <ul>
            <li>Texto corto</li>
            <li>Texto largo</li>
            <li>Número entero</li>
            <li>Número decimal</li>
            <li>Fecha</li>
            <li>Booleano</li>
          </ul>
        </li>
      </ol>

      <h3>📝 Ejemplo de formato que debes usar:</h3>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Tabla</th>
              <th>Columna</th>
              <th>Tipo lógico</th>
              <th>Clave</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CLIENTE</td>
              <td>id_cliente</td>
              <td>Número entero</td>
              <td>PK</td>
              <td>Identificador único del cliente</td>
            </tr>
            <tr>
              <td>CLIENTE</td>
              <td>nombre</td>
              <td>Texto corto</td>
              <td></td>
              <td>Nombre del cliente</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="nota nota-importante">
        Cuando termines tu Modelo Lógico, pasaremos al siguiente paso:
        <strong>el Modelo Físico</strong>, donde ya usaremos SQL real para crear
        la base de datos <code>bazar</code>.
      </p>

    </article>
  </details>
</section>

        <section className="section" id="bazar-tablas-phpmyadmin">
  <details>
    <summary>Actividad 3 – Crear las tablas del bazar en phpMyAdmin</summary>

    <article className="card">

      <h2>Actividad 3: Crear las tablas de la base de datos <code>bazar</code> en phpMyAdmin</h2>

      <p>
        En esta actividad vas a convertir el modelo lógico del bazar en 
        <strong>tablas reales</strong> dentro de MySQL, utilizando la herramienta 
        visual <strong>phpMyAdmin</strong>.
      </p>

      <h3>1️⃣ Paso previo: crear la base de datos</h3>

      <ol className="lista-simple">
        <li>Abre <strong>phpMyAdmin</strong> (normalmente en <code>http://localhost/phpmyadmin</code>).</li>
        <li>Haz clic en <strong>“Nueva”</strong> para crear una base de datos.</li>
        <li>Escribe el nombre <code>bazar</code> y selecciona una cotejación tipo 
          <code>utf8mb4_general_ci</code> o similar.</li>
        <li>Haz clic en <strong>“Crear”</strong>.</li>
      </ol>

      <div className="callout">
        A partir de ahora, todas las tablas que crees deberán estar dentro de la
        base de datos <code>bazar</code>.
      </div>

      <h3>2️⃣ Orden recomendado: tablas padre primero</h3>

      <p>
        Para evitar errores con las claves foráneas, es importante crear primero las
        <strong>tablas padre</strong> (aquellas de las que dependen otras) y después
        las <strong>tablas hijas</strong>.
      </p>

      <ul className="lista-simple">
        <li><strong>Tablas padre:</strong> <code>clientes</code>, <code>productos</code></li>
        <li><strong>Tablas hijas:</strong> <code>pedidos</code>, <code>lineas_pedido</code></li>
      </ul>

      <p>Orden de creación recomendado:</p>

      <ol className="lista-simple">
        <li>Crear tabla <strong>clientes</strong>.</li>
        <li>Crear tabla <strong>productos</strong>.</li>
        <li>Crear tabla <strong>pedidos</strong> (ya tendrá una FK a <code>clientes</code>).</li>
        <li>Crear tabla <strong>lineas_pedido</strong> (tendrá FKs a <code>pedidos</code> y <code>productos</code>).</li>
      </ol>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Tabla</th>
              <th>Tipo</th>
              <th>Depende de</th>
              <th>Comentario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>clientes</code></td>
              <td>Padre</td>
              <td>—</td>
              <td>Guarda los datos de los clientes.</td>
            </tr>
            <tr>
              <td><code>productos</code></td>
              <td>Padre</td>
              <td>—</td>
              <td>Guarda los productos que vende el bazar.</td>
            </tr>
            <tr>
              <td><code>pedidos</code></td>
              <td>Hija</td>
              <td><code>clientes</code></td>
              <td>Cada pedido pertenece a un cliente (FK a <code>clientes</code>).</td>
            </tr>
            <tr>
              <td><code>lineas_pedido</code></td>
              <td>Hija</td>
              <td><code>pedidos</code>, <code>productos</code></td>
              <td>Relaciona pedidos y productos (dos FKs).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>3️⃣ La tabla intermedia <code>lineas_pedido</code></h3>

      <p>
        En el modelo Entidad–Relación, la relación entre <strong>PEDIDO</strong> y 
        <strong>PRODUCTO</strong> es de tipo <strong>muchos a muchos (M:N)</strong>:
      </p>

      <ul className="lista-simple">
        <li>Un pedido puede incluir varios productos.</li>
        <li>Un producto puede aparecer en muchos pedidos.</li>
      </ul>

      <p>
        En el modelo físico (tablas reales), una relación M:N no se puede representar
        directamente, así que se crea una <strong>tabla intermedia</strong>:
        <code>lineas_pedido</code>.
      </p>

      <div className="callout">
        La tabla <strong><code>lineas_pedido</code></strong> actúa como un “puente” entre 
        <code>pedidos</code> y <code>productos</code>: guarda qué productos hay en cada pedido
        y en qué cantidad.
      </div>

      <p>De forma simplificada, esta tabla tendrá al menos:</p>

      <ul className="lista-simple">
        <li><code>id_linea</code> (clave primaria, número entero).</li>
        <li><code>id_pedido</code> (clave foránea que apunta a <code>pedidos.id_pedido</code>).</li>
        <li><code>id_producto</code> (clave foránea que apunta a <code>productos.id_producto</code>).</li>
        <li><code>cantidad</code> (número entero).</li>
        <li><code>precio_unitario</code> (número decimal).</li>
      </ul>

      <h3>4️⃣ Tu tarea paso a paso en phpMyAdmin</h3>

      <ol className="lista-simple">
        <li>Entra en la base de datos <code>bazar</code>.</li>
        <li>Crea la tabla <strong>clientes</strong> definiendo sus campos y marcando la 
          <strong>clave primaria</strong> (por ejemplo, <code>id_cliente</code>).</li>
        <li>Crea la tabla <strong>productos</strong> con su clave primaria 
          (por ejemplo, <code>id_producto</code>).</li>
        <li>Crea la tabla <strong>pedidos</strong> con su clave primaria 
          (por ejemplo, <code>id_pedido</code>) y un campo <code>id_cliente</code> que sea
          <strong>clave foránea</strong> hacia la tabla <code>clientes</code>.</li>
        <li>Crea la tabla <strong>lineas_pedido</strong> añadiendo:
          <ul>
            <li>Su clave primaria (<code>id_linea</code>).</li>
            <li>El campo <code>id_pedido</code> como clave foránea a <code>pedidos</code>.</li>
            <li>El campo <code>id_producto</code> como clave foránea a <code>productos</code>.</li>
            <li>Los campos <code>cantidad</code> y <code>precio_unitario</code>.</li>
          </ul>
        </li>
      </ol>

      <p className="nota nota-importante">
        No olvides marcar correctamente las claves primarias (PK) y foráneas (FK). 
        Esto garantiza la <strong>integridad referencial</strong> de la base de datos 
        y evitará que se creen pedidos sin cliente o líneas de pedido con productos
        inexistentes.
      </p>

    </article>
  </details>
</section>
<section className="section" id="bazar-solucion-modelo">
  <details>
    <summary>✔️ Actividad Modelo – Tablas completas del bazar (solución)</summary>

    <article className="card">

      <h2>Actividad Modelo: Solución oficial de las tablas del <code>bazar</code></h2>

      <p>
        Esta es la solución completa y correctamente estructurada de las tablas del proyecto 
        <strong>bazar</strong>. Sirve como referencia para comprobar tu trabajo realizado en 
        phpMyAdmin y asegurarte de que las claves primarias y foráneas están bien diseñadas.
      </p>

      <p>
        El orden de creación respeta la lógica de las <strong>tablas padre</strong> y 
        <strong>tablas hijas</strong> para evitar errores de integridad referencial.
      </p>

      <hr />

      <h3>1️⃣ Crear base de datos</h3>

      <pre><code>
CREATE DATABASE bazar
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE bazar;
      </code></pre>

      <hr />

      <h3>2️⃣ Tabla padre: CLIENTES</h3>

      <pre><code>
CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(100),
    dni VARCHAR(15) UNIQUE,
    telefono VARCHAR(20),
    email VARCHAR(100),
    direccion VARCHAR(150),
    ciudad VARCHAR(80),
    cp VARCHAR(10),
    fecha_alta DATE
);
      </code></pre>

      <p>
        Esta tabla no depende de ninguna otra. Actúa como <strong>tabla padre</strong> para los pedidos.
      </p>

      <hr />

      <h3>3️⃣ Tabla padre: PRODUCTOS</h3>

      <pre><code>
CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0,
    categoria VARCHAR(50)
);
      </code></pre>

      <p>
        También es una <strong>tabla padre</strong>. Más adelante será referenciada por 
        <code>lineas_pedido</code>.
      </p>

      <hr />

      <h3>4️⃣ Tabla hija: PEDIDOS (depende de CLIENTES)</h3>

      <pre><code>
CREATE TABLE pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    fecha_pedido DATE NOT NULL,
    total DECIMAL(10,2),
    forma_pago ENUM('EFECTIVO','TARJETA','BIZUM') DEFAULT 'EFECTIVO',
    estado ENUM('PENDIENTE','ENVIADO','ENTREGADO','CANCELADO') DEFAULT 'PENDIENTE',
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
      </code></pre>

      <p>
        Cada pedido está asociado a un único cliente.  
        Incluimos <code>ON DELETE CASCADE</code> para que si un cliente se elimina, 
        todos sus pedidos se eliminen también.
      </p>

      <hr />

      <h3>5️⃣ Tabla intermedia: LINEAS_PEDIDO (resuelve la relación M:N)</h3>

      <pre><code>
CREATE TABLE lineas_pedido (
    id_linea INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
      </code></pre>

      <p>
        Esta tabla actúa como una tabla “puente” entre <strong>pedidos</strong> y 
        <strong>productos</strong>. Permite que un pedido tenga varios productos, y
        que un producto pueda aparecer en muchos pedidos.
      </p>

      <div className="callout">
        Gracias a esta tabla, resolvemos correctamente la relación 
        <strong>muchos a muchos (M:N)</strong> del modelo conceptual.
      </div>

      <hr />

      <h3>📌 Resultado final</h3>

      <p>
        Con estas cuatro tablas, la base de datos <code>bazar</code> queda completamente montada 
        y preparada para insertar datos, realizar consultas, y trabajar con claves primarias, 
        foráneas y relaciones entre tablas.
      </p>

      <p className="nota nota-importante">
        A partir de aquí, ya puedes comenzar a alimentar las tablas con registros de ejemplo 
        o empezar a practicar consultas SQL de selección, ordenación, agrupación y funciones.
      </p>

    </article>
  </details>
</section>

<section className="section" id="bazar-insertar-datos">
  <details>
    <summary>Actividad 4 – Insertar datos en las tablas del bazar</summary>

    <article className="card">

      <h2>Actividad 4: Insertar datos de ejemplo en la base de datos <code>bazar</code></h2>

      <p>
        Ya tienes creadas las tablas del proyecto <strong>bazar</strong>.  
        Ahora, en esta actividad vas a insertar registros reales para poder practicar 
        consultas, agrupaciones y operaciones con claves foráneas.
      </p>

      <p>
        Es fundamental insertar los datos en el <strong>orden correcto</strong>, para respetar
        las relaciones entre las tablas (padre → hija).
      </p>

      <h3>1️⃣ Orden correcto para insertar datos</h3>

      <ol className="lista-simple">
        <li><strong>clientes</strong> → primera tabla (no depende de nadie)</li>
        <li><strong>productos</strong> → segunda tabla</li>
        <li><strong>pedidos</strong> → tercera tabla (necesita id_cliente)</li>
        <li><strong>lineas_pedido</strong> → última tabla (necesita id_pedido + id_producto)</li>
      </ol>

      <div className="callout">
        Recuerda: si intentas insertar un pedido con un <code>id_cliente</code> que no existe, 
        MySQL generará un error.  
        Lo mismo ocurre con <code>lineas_pedido</code>.
      </div>

      <hr />

      <h3>2️⃣ Inserta datos en la tabla CLIENTES</h3>

      <pre><code>
INSERT INTO clientes (nombre, apellidos, dni, telefono, email, direccion, ciudad, cp, fecha_alta) VALUES
('Laura', 'Gómez Ruiz', '12345678A', '611223344', 'laura@example.com', 'C/ Sol 12', 'Sevilla', '41001', '2023-01-10'),
('Carlos', 'Martín Pérez', '87654321B', '622334455', 'carlos@example.com', 'Av. Luna 5', 'Granada', '18005', '2023-02-15'),
('Inés', 'Ramírez Díaz', '11223344C', '633445566', 'ines@example.com', 'C/ Río 22', 'Córdoba', '14004', '2023-03-20');
      </code></pre>

      <hr />

      <h3>3️⃣ Inserta datos en la tabla PRODUCTOS</h3>

      <pre><code>
INSERT INTO productos (nombre, descripcion, precio, stock, categoria) VALUES
('Lámpara de mesa', 'Lámpara LED con brazo articulado', 24.90, 15, 'Iluminación'),
('Raqueta de tenis', 'Raqueta aluminio nivel principiante', 59.99, 10, 'Deportes'),
('Coche teledirigido', 'Coche RC batería recargable', 39.95, 8, 'Juguetería'),
('Juego de toallas', 'Pack 3 toallas algodón', 19.50, 20, 'Hogar'),
('Auriculares Bluetooth', 'Auriculares inalámbricos con estuche', 29.95, 12, 'Electrónica');
      </code></pre>

      <hr />

      <h3>4️⃣ Inserta datos en la tabla PEDIDOS</h3>

      <p>
        OJO: Aquí debes usar <strong>id_cliente</strong> que ya existan.  
        Por ejemplo: Laura = 1, Carlos = 2, Inés = 3.
      </p>

      <pre><code>
INSERT INTO pedidos (fecha_pedido, total, forma_pago, estado, id_cliente) VALUES
('2023-04-01', 84.85, 'TARJETA', 'ENTREGADO', 1),
('2023-04-05', 59.99, 'BIZUM', 'PENDIENTE', 2),
('2023-04-10', 49.45, 'EFECTIVO', 'ENVIADO', 3);
      </code></pre>

      <hr />

      <h3>5️⃣ Inserta datos en LINEAS_PEDIDO (tabla intermedia)</h3>

      <p>
        Aquí se registra qué productos contiene cada pedido y en qué cantidad.
      </p>

      <pre><code>
INSERT INTO lineas_pedido (id_pedido, id_producto, cantidad, precio_unitario) VALUES
-- Pedido 1: Laura
(1, 1, 2, 24.90),  -- 2 lámparas
(1, 5, 1, 29.95),  -- 1 auricular

-- Pedido 2: Carlos
(2, 2, 1, 59.99),  -- 1 raqueta

-- Pedido 3: Inés
(3, 4, 1, 19.50),  -- 1 pack toallas
(3, 3, 1, 39.95);  -- 1 coche RC
      </code></pre>

      <hr />

      <h3>📌 Resultado esperado</h3>

      <p>
        Tu base de datos <code>bazar</code> debe quedar completamente funcional y lista
        para hacer consultas reales (SUM, AVG, ORDER BY, GROUP BY, HAVING…).
      </p>

      <div className="contenedor-tabla">
        <table className="tabla-datos tabla-datos--compacta">
          <thead>
            <tr>
              <th>Tabla</th>
              <th>Registros insertados</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>clientes</td>
              <td>3</td>
            </tr>
            <tr>
              <td>productos</td>
              <td>5</td>
            </tr>
            <tr>
              <td>pedidos</td>
              <td>3</td>
            </tr>
            <tr>
              <td>lineas_pedido</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="nota nota-importante">
        Si en esta actividad te aparece algún error de clave foránea,
        revisa que el <strong>id_cliente</strong>, <strong>id_producto</strong> y 
        <strong>id_pedido</strong> realmente existan.  
        Es uno de los fallos más habituales al empezar con bases de datos.
      </div>

    </article>
  </details>
</section>


      <section className="section" id="bazar-consultas-basicas">
  <details>
    <summary>Actividad 5 – Consultas SQL básicas sobre la base de datos del bazar</summary>

    <article className="card">

      <h2>Actividad 5: Practicar consultas SQL básicas en <code>bazar</code></h2>

      <p>
        Con las tablas del proyecto <strong>bazar</strong> ya creadas y con datos insertados, 
        vas a realizar una serie de consultas SQL para entender cómo buscar, ordenar, 
        filtrar y agrupar información.  
        Son consultas fundamentales que dominarás en cualquier base de datos.
      </p>

      <hr />

     
      <h3>1️⃣ SELECT básico</h3>

      <p>Selecciona todas las columnas de la tabla <code>clientes</code>:</p>

      <pre><code>
SELECT * FROM clientes;
      </code></pre>

      <p>Selecciona solo nombre y ciudad:</p>

      <pre><code>
SELECT nombre, ciudad FROM clientes;
      </code></pre>

      <hr />

      
      <h3>2️⃣ Filtrar con WHERE</h3>

      <p>Clientes que vivan en Sevilla:</p>

      <pre><code>
SELECT * FROM clientes 
WHERE ciudad = 'Sevilla';
      </code></pre>

      <p>Productos cuyo precio sea mayor de 30 €:</p>

      <pre><code>
SELECT nombre, precio FROM productos
WHERE precio &gt; 30;
      </code></pre>

      <hr />

    
      <h3>3️⃣ Ordenar resultados: ORDER BY</h3>

      <p>Productos ordenados por precio ascendente:</p>

      <pre><code>
SELECT nombre, precio FROM productos
ORDER BY precio ASC;
      </code></pre>

      <p>Clientes ordenados por apellidos descendentemente:</p>

      <pre><code>
SELECT nombre, apellidos FROM clientes
ORDER BY apellidos DESC;
      </code></pre>

      <hr />

     
      <h3>4️⃣ Limitar filas: LIMIT</h3>

      <p>Mostrar solo los dos primeros productos:</p>

      <pre><code>
SELECT * FROM productos
LIMIT 2;
      </code></pre>

      <hr />

      <h3>5️⃣ Valores únicos: DISTINCT</h3>

      <p>Lista de categorías sin repetir:</p>

      <pre><code>
SELECT DISTINCT categoria FROM productos;
      </code></pre>

      <hr />

    
      <h3>6️⃣ Búsqueda por texto: LIKE</h3>

      <p>Productos cuyo nombre empieza por “Ra”:</p>

      <pre><code>
SELECT nombre FROM productos
WHERE nombre LIKE 'Ra%';
      </code></pre>

      <p>Clientes cuyo email contenga “example”:</p>

      <pre><code>
SELECT nombre, email FROM clientes
WHERE email LIKE '%example%';
      </code></pre>

      <hr />

     
      <h3>7️⃣ Rango de valores: BETWEEN</h3>

      <p>Productos con precio entre 20 y 50 €:</p>

      <pre><code>
SELECT nombre, precio FROM productos
WHERE precio BETWEEN 20 AND 50;
      </code></pre>

      <hr />

      <h3>8️⃣ Filtrar por varios valores: IN</h3>

      <p>Clientes que vivan en Sevilla o Granada:</p>

      <pre><code>
SELECT nombre, ciudad FROM clientes
WHERE ciudad IN ('Sevilla', 'Granada');
      </code></pre>

      <hr />

      
      <h3>9️⃣ Valores nulos: IS NULL / IS NOT NULL</h3>

      <p>Clientes sin teléfono registrado:</p>

      <pre><code>
SELECT nombre FROM clientes
WHERE telefono IS NULL;
      </code></pre>

      <hr />

      <h3>🔟 Contar registros: COUNT()</h3>

      <p>Contar cuántos productos hay en total:</p>

      <pre><code>
SELECT COUNT(*) AS total_productos 
FROM productos;
      </code></pre>

      <hr />

    
      <h3>1️⃣1️⃣ Sumar valores: SUM()</h3>

      <p>Suma del stock total del almacén:</p>

      <pre><code>
SELECT SUM(stock) AS stock_total
FROM productos;
      </code></pre>

      <hr />

     
      <h3>1️⃣2️⃣ Media: AVG()</h3>

      <p>Media de precios de todos los productos:</p>

      <pre><code>
SELECT AVG(precio) AS media_precios
FROM productos;
      </code></pre>

      <hr />

    
      <h3>1️⃣3️⃣ Agrupar resultados: GROUP BY</h3>

      <p>Media de precio por categoría:</p>

      <pre><code>
SELECT categoria, AVG(precio) AS media_categoria
FROM productos
GROUP BY categoria;
      </code></pre>

      <hr />

    
      <h3>1️⃣4️⃣ Filtrar grupos: HAVING</h3>

      <p>Categorías con precio medio superior a 30 €:</p>

      <pre><code>
SELECT categoria, AVG(precio) AS media_categoria
FROM productos
GROUP BY categoria
HAVING AVG(precio) &gt; 30;
      </code></pre>

      <hr />

     
      <h3>🎯 Ejercicio final de esta actividad</h3>

      <p>Responde a estas preguntas mediante consultas SQL:</p>

      <ol className="lista-simple">
        <li>¿Qué clientes llevan apellidos que empiecen por “G”?</li>
        <li>¿Cuál es el producto más caro?</li>
        <li>Lista los productos que tengan un stock inferior a 10.</li>
        <li>Muestra los pedidos de 2023 ordenados de más reciente a más antiguo.</li>
        <li>¿Cuántos productos hay por categoría?</li>
        <li>Muestra solo las categorías que tengan más de 1 producto.</li>
        <li>Busca productos cuyo nombre contenga la palabra “coche”.</li>
        <li>Muestra la suma del total de todos los pedidos.</li>
      </ol>

      <p className="nota nota-importante">
        Estas consultas son la base para pasar a las <strong>consultas avanzadas</strong> 
        con JOIN, funciones de agrupación más complejas y subconsultas.
      </p>

    </article>
  </details>
</section>
<section className="section" id="bazar-consultas-avanzadas">
  <details>
    <summary>Actividad 6 – Consultas avanzadas sobre la base de datos del bazar</summary>

    <article className="card">

      <h2>Actividad 6: Consultas SQL Avanzadas en <code>bazar</code></h2>

      <p>
        En esta actividad vas a realizar consultas avanzadas combinando varias tablas,
        aplicando funciones de agrupación, subconsultas y distintos tipos de 
        <strong>JOIN</strong>. Estas consultas son fundamentales para trabajar con
        bases de datos reales.
      </p>

      <hr />

    
      <h3>1️⃣ JOIN básico: mostrar pedidos con el nombre del cliente</h3>

      <pre><code>
SELECT pedidos.id_pedido, clientes.nombre, pedidos.total
FROM pedidos
INNER JOIN clientes
ON pedidos.id_cliente = clientes.id_cliente;
      </code></pre>

      <p>
        Un <strong>INNER JOIN</strong> solo muestra filas que coinciden en ambas tablas.
      </p>

      <hr />

      
      <h3>2️⃣ JOIN con 3 tablas: mostrar cada línea de pedido con cliente y producto</h3>

      <pre><code>
SELECT 
    clientes.nombre AS cliente,
    productos.nombre AS producto,
    lineas_pedido.cantidad,
    lineas_pedido.precio_unitario
FROM lineas_pedido
INNER JOIN pedidos ON lineas_pedido.id_pedido = pedidos.id_pedido
INNER JOIN clientes ON pedidos.id_cliente = clientes.id_cliente
INNER JOIN productos ON lineas_pedido.id_producto = productos.id_producto;
      </code></pre>

      <p>Consulta típica que muestra el detalle completo de ventas.</p>

      <hr />

     
      <h3>3️⃣ LEFT JOIN: mostrar todos los clientes aunque no tengan pedidos</h3>

      <pre><code>
SELECT clientes.nombre, pedidos.id_pedido
FROM clientes
LEFT JOIN pedidos
ON clientes.id_cliente = pedidos.id_cliente;
      </code></pre>

      <div className="callout">
        LEFT JOIN incluye todos los clientes, incluso los que no tienen pedidos.
      </div>

      <hr />

     
      <h3>4️⃣ Total gastado por cada cliente (JOIN + SUM + GROUP BY)</h3>

      <pre><code>
SELECT clientes.nombre, SUM(pedidos.total) AS total_gastado
FROM clientes
LEFT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente
GROUP BY clientes.id_cliente
ORDER BY total_gastado DESC;
      </code></pre>

      <p>
        Muy útil para informes de ventas o análisis de clientes.
      </p>

      <hr />

      <h3>5️⃣ Clientes que han gastado más de 100€</h3>

      <pre><code>
SELECT clientes.nombre, SUM(pedidos.total) AS total_gastado
FROM clientes
INNER JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente
GROUP BY clientes.id_cliente
HAVING total_gastado &gt; 100;
      </code></pre>

      <hr />

    
      <h3>6️⃣ Subconsulta: productos más caros que la media</h3>

      <pre><code>
SELECT nombre, precio
FROM productos
WHERE precio &gt; (
    SELECT AVG(precio) FROM productos
);
      </code></pre>

      <p>
        Ejemplo claro de cómo usar subconsultas dentro de un WHERE.
      </p>

      <hr />

     
      <h3>7️⃣ Subconsulta con IN: pedidos realizados por clientes de Sevilla</h3>

      <pre><code>
SELECT * FROM pedidos
WHERE id_cliente IN (
    SELECT id_cliente FROM clientes WHERE ciudad = 'Sevilla'
);
      </code></pre>

      <hr />

     
      <h3>8️⃣ TOP ventas: producto más vendido</h3>

      <pre><code>
SELECT productos.nombre, SUM(lineas_pedido.cantidad) AS cantidad_total
FROM productos
INNER JOIN lineas_pedido 
    ON productos.id_producto = lineas_pedido.id_producto
GROUP BY productos.id_producto
ORDER BY cantidad_total DESC
LIMIT 1;
      </code></pre>

      <hr />

    
      <h3>9️⃣ Paginación con LIMIT + OFFSET</h3>

      <pre><code>
SELECT * FROM productos
ORDER BY precio DESC
LIMIT 2 OFFSET 2;
      </code></pre>

      <p>
        Muestra los productos 3º y 4º más caros.
      </p>

      <hr />

      <h3>🎯 Ejercicios finales avanzados</h3>

      <p>Resuelve estas consultas avanzadas. Algunas requieren JOIN, otras subconsultas:</p>

      <ol className="lista-simple">
        <li>Mostrar el nombre del cliente y el total de cada pedido.</li>
        <li>Mostrar los productos comprados por “Laura Gómez”.</li>
        <li>Obtener los clientes que tienen más de 1 pedido.</li>
        <li>Obtener el producto con mayor facturación (cantidad × precio_unitario).</li>
        <li>Listar pedidos donde el total sea mayor que la media de todos los pedidos.</li>
        <li>Mostrar nombre del cliente y número total de productos comprados.</li>
        <li>Listar los productos que nunca han sido vendidos.</li>
        <li>Mostrar los clientes que no tienen ningún pedido.</li>
        <li>Mostrar los pedidos detallados (cliente + producto + cantidad + total de línea).</li>
      </ol>

      <p className="nota nota-importante">
        Estas consultas permiten dominar las relaciones entre tablas y preparan para 
        ejercicios más complejos como subconsultas correlacionadas y vistas SQL.
      </p>

    </article>
  </details>
</section>
<section className="section" id="bazar-calculos-sql">
  <details>
    <summary>Actividad 7 – Cálculos con funciones SQL en el bazar</summary>

    <article className="card">

      <h2>Actividad 7: Cálculos y estadísticas en <code>bazar</code></h2>

      <p>
        En esta actividad vas a utilizar SQL para realizar <strong>cálculos numéricos</strong>
        y obtener información estadística a partir de los datos del bazar.
        Practicarás funciones matemáticas, totales, medias y operaciones combinadas.
      </p>

      <hr />

   
      <h3>1️⃣ Suma total: SUM()</h3>

      <p>¿Cuánto stock total hay en el almacén?</p>

      <pre><code>
SELECT SUM(stock) AS stock_total
FROM productos;
      </code></pre>

      <p>¿Cuánto dinero suman todos los pedidos?</p>

      <pre><code>
SELECT SUM(total) AS ingresos_totales
FROM pedidos;
      </code></pre>

      <hr />

      
      <h3>2️⃣ Media: AVG()</h3>

      <p>Media del precio de los productos:</p>

      <pre><code>
SELECT AVG(precio) AS media_precio
FROM productos;
      </code></pre>

      <p>Media del total de pedidos:</p>

      <pre><code>
SELECT AVG(total) AS media_pedidos
FROM pedidos;
      </code></pre>

      <hr />

      <h3>3️⃣ Valores mínimo y máximo: MIN() y MAX()</h3>

      <p>Producto más caro:</p>

      <pre><code>
SELECT nombre, precio
FROM productos
ORDER BY precio DESC
LIMIT 1;
      </code></pre>

      <p>Producto más barato:</p>

      <pre><code>
SELECT nombre, precio
FROM productos
ORDER BY precio ASC
LIMIT 1;
      </code></pre>

      <hr />

    
      <h3>4️⃣ Contar elementos: COUNT()</h3>

      <p>Número total de pedidos:</p>

      <pre><code>
SELECT COUNT(*) AS num_pedidos
FROM pedidos;
      </code></pre>

      <p>Categorías distintas:</p>

      <pre><code>
SELECT COUNT(DISTINCT categoria) AS categorias_distintas
FROM productos;
      </code></pre>

      <hr />

    
      <h3>5️⃣ Redondeos: ROUND()</h3>

      <p>Media de precios redondeada a 2 decimales:</p>

      <pre><code>
SELECT ROUND(AVG(precio), 2) AS media_redondeada
FROM productos;
      </code></pre>

      <hr />

     
      <h3>6️⃣ Operaciones aritméticas</h3>

      <p>Calcular el valor total del stock de cada producto (precio × stock):</p>

      <pre><code>
SELECT nombre, precio, stock, 
       (precio * stock) AS valor_stock
FROM productos;
      </code></pre>

      <p>Calcular el importe total de cada línea de pedido:</p>

      <pre><code>
SELECT id_linea,
       cantidad,
       precio_unitario,
       (cantidad * precio_unitario) AS total_linea
FROM lineas_pedido;
      </code></pre>

      <hr />

     
      <h3>7️⃣ Cálculos combinados con JOIN</h3>

      <p>Total gastado por cada cliente:</p>

      <pre><code>
SELECT clientes.nombre,
       SUM(pedidos.total) AS total_gastado
FROM clientes
LEFT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente
GROUP BY clientes.id_cliente
ORDER BY total_gastado DESC;
      </code></pre>

      <p>Total facturado por cada producto:</p>

      <pre><code>
SELECT productos.nombre,
       SUM(lineas_pedido.cantidad * lineas_pedido.precio_unitario) 
         AS total_facturado
FROM productos
LEFT JOIN lineas_pedido ON productos.id_producto = lineas_pedido.id_producto
GROUP BY productos.id_producto
ORDER BY total_facturado DESC;
      </code></pre>

      <hr />

      <h3>8️⃣ Cálculos sobre fechas</h3>

      <p>Año en el que se hizo cada pedido:</p>

      <pre><code>
SELECT id_pedido, fecha_pedido, YEAR(fecha_pedido) AS ano
FROM pedidos;
      </code></pre>

      <p>Pedidos realizados en abril:</p>

      <pre><code>
SELECT * FROM pedidos
WHERE MONTH(fecha_pedido) = 4;
      </code></pre>

      <p>Días transcurridos desde cada pedido:</p>

      <pre><code>
SELECT id_pedido, fecha_pedido,
       DATEDIFF(CURDATE(), fecha_pedido) AS dias_transcurridos
FROM pedidos;
      </code></pre>

      <hr />

      <h3>🎯 Ejercicios finales de cálculos</h3>

      <ol className="lista-simple">
        <li>Calcular el valor total del stock (suma de precio × stock de cada producto).</li>
        <li>Mostrar el precio mínimo, máximo y medio de los productos.</li>
        <li>Calcular cuánto dinero ha gastado cada cliente en total.</li>
        <li>Mostrar los productos con valor de stock superior a 500€.</li>
        <li>Calcular cuántos días han pasado desde el último pedido.</li>
        <li>Mostrar el total facturado por cada producto y ordenar de mayor a menor.</li>
        <li>Calcular la media del total de pedidos hechos por clientes de “Sevilla”.</li>
        <li>Mostrar el total de líneas de pedido por cada pedido.</li>
      </ol>

      <p className="nota nota-importante">
        Dominar los cálculos en SQL te permitirá generar informes, estadísticas y 
        análisis profesionales sobre cualquier base de datos real.
      </p>

    </article>
  </details>
</section>
<section className="section" id="bazar-vistas">
  <details>
    <summary>Actividad 8 – Crear y usar Vistas en SQL</summary>

    <article className="card">

      <h2>Actividad 8: Creación y uso de <code>VISTAS</code> en la base de datos <code>bazar</code></h2>

      <p>
        Una <strong>vista</strong> es una consulta SQL que queda <strong>guardada</strong>
        en la base de datos con un nombre.  
        Funciona como si fuera una tabla, pero NO almacena datos nuevos:
      </p>

      <div className="callout">
        Una vista muestra siempre la información actualizada de las tablas reales,
        porque se ejecuta cada vez que la consultas.
      </div>

      <hr />

      <h3>1️⃣ ¿Para qué sirven las vistas?</h3>

      <ul className="lista-simple">
        <li>Simplifican consultas complejas.</li>
        <li>Ocultan columnas que no queremos mostrar.</li>
        <li>Dejan preparadas consultas largas para reutilizarlas.</li>
        <li>Permiten crear informes fácilmente.</li>
        <li>Ayudan a proteger datos sensibles (como DNI o direcciones).</li>
      </ul>

      <hr />

      <h3>2️⃣ Sintaxis básica</h3>

      <pre><code>
CREATE VIEW nombre_vista AS
SELECT ...
FROM ...
WHERE ...;
      </code></pre>

      <p>
        Para consultar una vista, se usa igual que una tabla:
      </p>

      <pre><code>
SELECT * FROM nombre_vista;
      </code></pre>

      <hr />

      <h3>3️⃣ Vista 1: Información completa de pedidos</h3>

      <p>
        Vista que une <strong>clientes</strong> + <strong>pedidos</strong> para tener una
        visión global de cada venta.
      </p>

      <pre><code>
CREATE VIEW vista_pedidos_detalle AS
SELECT 
    pedidos.id_pedido,
    clientes.nombre AS cliente,
    clientes.ciudad,
    pedidos.fecha_pedido,
    pedidos.total,
    pedidos.estado
FROM pedidos
INNER JOIN clientes 
    ON pedidos.id_cliente = clientes.id_cliente;
      </code></pre>

      <p>
        Ahora puedes hacer:
      </p>

      <pre><code>
SELECT * FROM vista_pedidos_detalle;
      </code></pre>

      <hr />

      <h3>4️⃣ Vista 2: Productos más vendidos</h3>

      <p>Vista para analizar el total vendido de cada producto.</p>

      <pre><code>
CREATE VIEW vista_productos_ventas AS
SELECT 
    productos.nombre,
    SUM(lineas_pedido.cantidad) AS unidades_vendidas,
    SUM(lineas_pedido.cantidad * lineas_pedido.precio_unitario) AS total_facturado
FROM productos
LEFT JOIN lineas_pedido 
    ON productos.id_producto = lineas_pedido.id_producto
GROUP BY productos.id_producto;
      </code></pre>

      <p>Consultar:</p>

      <pre><code>
SELECT * FROM vista_productos_ventas
ORDER BY total_facturado DESC;
      </code></pre>

      <hr />

      <h3>5️⃣ Vista 3: Clientes sin datos sensibles</h3>

      <p>Ocultamos DNI, dirección, email…</p>

      <pre><code>
CREATE VIEW vista_clientes_publica AS
SELECT 
    id_cliente,
    nombre,
    apellidos,
    ciudad
FROM clientes;
      </code></pre>

      <p>Consulta la vista así:</p>

      <pre><code>
SELECT * FROM vista_clientes_publica;
      </code></pre>

      <hr />

      <h3>6️⃣ Vista 4: Importes de cada pedido con sus productos</h3>

      <pre><code>
CREATE VIEW vista_lineas_detalle AS
SELECT 
    pedidos.id_pedido,
    clientes.nombre AS cliente,
    productos.nombre AS producto,
    lineas_pedido.cantidad,
    lineas_pedido.precio_unitario,
    (lineas_pedido.cantidad * lineas_pedido.precio_unitario) AS total_linea
FROM lineas_pedido
INNER JOIN pedidos ON lineas_pedido.id_pedido = pedidos.id_pedido
INNER JOIN clientes ON pedidos.id_cliente = clientes.id_cliente
INNER JOIN productos ON lineas_pedido.id_producto = productos.id_producto;
      </code></pre>

      <p>
        Consulta:
      </p>

      <pre><code>
SELECT * FROM vista_lineas_detalle;
      </code></pre>

      <hr />

      <h3>7️⃣ Actualizar o borrar vistas</h3>

      <p>Para modificar una vista:</p>

      <pre><code>
CREATE OR REPLACE VIEW nombre_vista AS
SELECT ...
FROM ...
WHERE ...;
      </code></pre>

      <p>Para eliminarla:</p>

      <pre><code>
DROP VIEW nombre_vista;
      </code></pre>

      <hr />

      <h3>🎯 Ejercicios finales de vistas</h3>

      <ol className="lista-simple">
        <li>Crea una vista que muestre solo los pedidos “ENTREGADOS”.</li>
        <li>Crea una vista que muestre productos con stock inferior a 10 unidades.</li>
        <li>Crea una vista con los clientes y el total gastado por cada uno.</li>
        <li>Crea una vista de los productos junto con su categoría y si están “caros” (precio &gt; 30).</li>
        <li>Crea una vista que muestre las ventas totales agrupadas por ciudad.</li>
      </ol>

      <p className="nota nota-importante">
        Las vistas permiten reutilizar consultas complejas y simplificar el 
        trabajo diario con la base de datos. Son esenciales en proyectos 
        reales para separar la lógica de negocio y facilitar informes.
      </p>

    </article>
  </details>
</section>

       
      </div>
    </main>
  );
};

export default Actividad;
