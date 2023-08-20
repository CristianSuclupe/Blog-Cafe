import { useLoaderData } from "react-router-dom";
import EntradaBlog from "../components/EntradaBlog";
import { obtenerEntradas } from "../data/entradas";

export const loader = async () => {
  const entradas = await obtenerEntradas();
  return entradas;
};
const Index = () => {
  const entradas = useLoaderData();
  return (
    <div className="contenedor contenido-principal">
      <main className="blog">
        <h3>Nuestro Blog</h3>
        {entradas.map((entrada) => (
          <EntradaBlog entrada={entrada} key={entrada.id} />
        ))}
      </main>
      <aside className="sidebar">
        <h3>Nuestros Cursos y Talleres</h3>
      </aside>
    </div>
  );
};

export default Index;
