import { useState, useEffect } from "react";
import EntradaBlog from "../components/EntradaBlog";
import Aside from "../components/Aside";
import { obtenerEntradas, obtenerCursos } from "../data/entradas";

const Index = () => {
  const [entradas, setEntradas] = useState([]);
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const obtenerEntradasyCursos = async () => {
      try {
        const entradas = await obtenerEntradas();
        const cursos = await obtenerCursos();
        setEntradas(entradas);
        setCursos(cursos);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerEntradasyCursos();
  }, []);

  return (
    <div className="contenedor contenido-principal">
      <main className="blog">
        <h3>Nuestro Blog</h3>
        {entradas.map((entrada) => (
          <EntradaBlog entrada={entrada} key={entrada.id} />
        ))}
      </main>
      <Aside cursos={cursos} />
    </div>
  );
};

export default Index;
