import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="cabecera">
      {/* Accesibilidad: botón para saltar al contenido */}
      <a href="#contenido" className="enlace-saltar">
        Saltar al contenido
      </a>

      <div className="contenedor cabecera-contenido">
        {/* Logo + Título */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img
            src={logo}
            alt="Logo del curso SQL Full Stack"
            style={{ height: "60px", width: "auto", borderRadius: "8px" }}
          />

          <div>
            <h1 className="cabecera-titulo">Manual de SQL Full Stack</h1>
            <p className="cabecera-subtitulo">
              Proyecto profesional con React + Node.js + MySQL
            </p>
          </div>
        </div>

        {/* Navegación */}
        <nav className="navegacion-principal">
          <NavLink to="/" className="enlace-navegacion">
            Inicio
          </NavLink>
          <NavLink to="/Bloque1Fundamentos" className="enlace-navegacion">
            Fundamentos
          </NavLink>
          <NavLink to="/Bloque2" className="enlace-navegacion">
            Consultas SQL
          </NavLink>
          <NavLink to="/Bloque3Backend" className="enlace-navegacion">
            Backend
          </NavLink>
          <NavLink to="/Bloque4Front" className="enlace-navegacion">
            Frontend
          </NavLink>
          <NavLink to="/Bloque5ApiTestHtml" className="enlace-navegacion">
            API Test HTML
          </NavLink>
          <NavLink to="/Bloque6ApiTestReact" className="enlace-navegacion">
            API Test React
          </NavLink>
          <NavLink to="/TestCompleto" className="enlace-navegacion">
            Test Completo
          </NavLink>
          <NavLink to="/Actividad" className="enlace-navegacion">
            Actividad
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
