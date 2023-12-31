import { useNavigate } from "react-router-dom";
import { ENTRADA } from "../router/routes";
const EntradaBlog = ({ entrada }) => {
  const navigate = useNavigate();
  const { id, imagen, titulo, contenido } = entrada;
  return (
    <article className="entrada">
      <div className="entrada__imagen">
        <picture>
          <source srcSet={imagen.replace("jpg", "webp")} type="image/webp" />
          <img loading="lazy" src={imagen} alt="imagen blog" />
        </picture>
      </div>
      <div className="entrada__contenido">
        <h4 className="no-margin">{titulo}</h4>
        <p>{contenido}</p>
        <a
          className="boton boton--primario"
          onClick={() => navigate(ENTRADA.replace(":id", id))}
        >
          Leer Entrada
        </a>
      </div>
    </article>
  );
};

export default EntradaBlog;
