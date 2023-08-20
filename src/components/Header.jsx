import { Link } from "react-router-dom";
import { HOME, NOSOTROS, CURSOS, CONTACTO } from "../router/routes";
const Header = () => {
  return (
    <header className="header">
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
      <div className="header__texto">
        <h2 className="no-margin">Blog de Café con consejos y cursos</h2>
        <p className="no-margin">
          Aprende de los expertos con las mejores recetas y consejos
        </p>
      </div>
    </header>
  );
};

export default Header;
