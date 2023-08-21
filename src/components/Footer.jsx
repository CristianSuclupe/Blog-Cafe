import { Link } from "react-router-dom";
import { HOME, NOSOTROS, CURSOS, CONTACTO } from "../router/routes";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="barra">
          <Link className="logo" to={HOME}>
            <h1 className="logo__nombre no-margin centrar-texto">
              Blog<span className="logo__bold">DeCafé</span>
            </h1>
          </Link>
          <nav className="navegacion">
            <Link className="navegacion__enlace" to={NOSOTROS}>
              Nosotros
            </Link>
            <Link className="navegacion__enlace" to={CURSOS}>
              Cursos
            </Link>
            <Link className="navegacion__enlace" to={CONTACTO}>
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
