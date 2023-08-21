import Curso from "./Curso";

const Aside = ({ cursos }) => {
  return (
    <aside className="sidebar">
      <h3>Nuestros Cursos y Talleres</h3>
      <ul className="cursos no-padding">
        {cursos.map((curso) => (
          <Curso curso={curso} key={curso.id} />
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
