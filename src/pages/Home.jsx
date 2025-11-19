import Tarjeta from "../components/Tarjeta";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="contenedor contenido-principal" id="contenido">
      {/* Introducción */}
      <section className="seccion">
        <Tarjeta
          titulo="Bienvenida al Manual de SQL Full Stack"
          subtitulo="React + Node.js + MySQL desde cero"
        >
          <p>
            Este manual está diseñado para que puedas seguir un recorrido 
            paso a paso y construir un proyecto Full Stack profesional: 
            base de datos en MySQL, API en Node.js y frontend en React.
          </p>
          <p className="nota">
            Consejo: sigue el orden de las tarjetas para no perderte. 
            Cada bloque se apoya en el anterior.
          </p>
        </Tarjeta>
      </section>

      {/* Bloques principales del manual */}
      <section className="seccion">
        <h2>Cómo está organizado el manual</h2>
        <p>
          El contenido se agrupa en bloques didácticos. Cada bloque puede 
          corresponder a varios días de clase o módulos del curso.
        </p>

        <div className="tarjetas-en-fila espacio-arriba">
          <Tarjeta
            titulo={<Link to="/Bloque1Fundamentos">Bloque 1 · Fundamentos de SQL y MySQL</Link>}
            
          >
            <ul className="lista-simple">
              <li>Qué es SQL y para qué sirve.</li>
              <li>Instalar y usar MySQL / phpMyAdmin.</li>
              <li>Crear bases de datos y tablas.</li>
              <li>Tipos de datos básicos y claves primarias.</li>
            </ul>
           <div className="boton-derecha">
  <Link to="/bloque1Fundamentos" className="boton">
    Ver contenido
  </Link>
</div>

          </Tarjeta>

          <Tarjeta
           titulo={<Link to="/Bloque2">Bloque 2 · Consultas SQL y diseño de modelos</Link>}
            
          >
            <ul className="lista-simple">
              <li> Del modelo a la tabla</li>
              <li>SELECT, INSERT, UPDATE, DELETE (CRUD en SQL).</li>
              <li>Filtros con WHERE y ordenaciones con ORDER BY.</li>
              <li>JOIN y relaciones entre tablas.</li>
             
            </ul>
             <div className="boton-derecha">
  <Link to="/Bloque2" className="boton">
    Ver contenido
  </Link>
</div>
          </Tarjeta>
        </div>

        <div className="tarjetas-en-fila espacio-arriba">
          <Tarjeta
            titulo="Bloque 3 · Backend con Node.js + MySQL"
           
          >
            <ul className="lista-simple">
              <li>Crear un servidor con Node.js y Express.</li>
              <li>Conectar Node.js con MySQL.</li>
              <li>Crear una API REST para productos y usuarios.</li>
              <li>Registro y login (autenticación básica).</li>
            </ul>
            <span className="texto-resaltado">
              Aquí unimos JavaScript con la base de datos.
            </span>
              <div className="boton-derecha">
                <Link to="/Bloque3Backend" className="boton">
                  Ver contenido
                </Link>
              </div>
          </Tarjeta>

          <Tarjeta
            titulo="Bloque 4 · Frontend con React"
           
          >
            <ul className="lista-simple">
              <li>Estructura de un proyecto React (Vite).</li>
              <li>Rutas con React Router (páginas del manual).</li>
              <li>Formularios y estado para login/registro.</li>
              <li>Consumir la API: listar productos y pedidos.</li>
            </ul>
               <div className="boton-derecha">
                <Link to="/Bloque4Front" className="boton">
                  Ver contenido
                </Link>
              </div>
          </Tarjeta>
        </div>

        
      </section>
    </div>
  );
}

export default Home;
