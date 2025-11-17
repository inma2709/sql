import pieImg from "../assets/pie.png";

function Footer() {
  return (
    <footer className="pie">
      <div className="contenedor">
        
        {/* Imagen del pie */}
        <img 
          src={pieImg} 
          alt="Imagen decorativa del pie de página" 
          className="pie-imagen"
        />

        {/* Texto del pie */}
        <div>
          <p>Manual de SQL Full Stack</p>
          <span>© {new Date().getFullYear()} Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
