function Tarjeta({ titulo, subtitulo, children }) {
  return (
    <article className="tarjeta">
      
      {/* Encabezado de la tarjeta */}
      <div className="tarjeta-encabezado">
        {titulo && <h3 className="tarjeta-titulo">{titulo}</h3>}
        {subtitulo && <p className="tarjeta-subtitulo">{subtitulo}</p>}
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="tarjeta-cuerpo">
        {children}
      </div>
    </article>
  );
}

export default Tarjeta;
