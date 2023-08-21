import { useState, useEffect } from "react";
import ProximosCursos from "../components/ProximosCursos";
import { obtenerProximosCursos } from "../data/entradas";

const Cursos = () => {
  const [proximosCursos, setProximosCursos] = useState([]);

  useEffect(() => {
    const obtenerCursos = async () => {
      try {
        const cursos = await obtenerProximosCursos();
        setProximosCursos(cursos);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCursos();
  }, []);

  return (
    <main className="contenedor">
      <h3 className="centrar-texto">Nuestros Próximos Cursos y Talleres</h3>
      {proximosCursos.map((curso) => (
        <ProximosCursos curso={curso} key={curso.id} />
      ))}
    </main>
  );
};

export default Cursos;
