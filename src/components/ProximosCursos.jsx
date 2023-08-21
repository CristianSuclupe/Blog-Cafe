const ProximosCursos = ({ curso }) => {
  const { id, titulo, imagen, precio, cupo, descripcion } = curso;
  return (
    <div className="curso">
      <div className="curso__imagen">
        <img src={imagen} alt="Imagen del curso" />
      </div>
      <div className="curso__informacion">
        <h4 className="no-margin">{titulo}</h4>
        <p className="curso__label">
          Precio: $<span className="curso__info">{precio}</span>
        </p>
        <p className="curso__label">
          Cupo: <span className="curso__info">{cupo}</span>
        </p>
        <p className="curso__descripcion">{descripcion}</p>
      </div>
    </div>
  );
};

export default ProximosCursos;
