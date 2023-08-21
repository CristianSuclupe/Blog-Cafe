const Curso = ({ curso }) => {
  const { id, titulo, precio, cupo } = curso;
  return (
    <li className="widget-curso">
      <h4 className="no-margin">{titulo}</h4>
      <p className="widget-curso__label">
        Precio:{" "}
        <span className="widget-curso__info">
          {precio === 0 ? "Gratis" : precio}
        </span>
      </p>
      <p className="widget-curso__label">
        Cupo: <span className="widget-curso__info">{cupo}</span>
      </p>
      <a className="boton boton--secundario">Más información</a>
    </li>
  );
};

export default Curso;
