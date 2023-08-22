import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerEntrada } from "../data/entradas";

const Entrada = () => {
  const { id } = useParams();
  const [entrada, setEntrada] = useState({});

  useEffect(() => {
    const obtenerEntradaID = async () => {
      try {
        const entrada = await obtenerEntrada(id);
        setEntrada(entrada);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerEntradaID();
  }, [id]);
  return (
    <main className="contenedor">
      <h3 className="centrar-texto">{entrada.titulo}</h3>
      <img src={entrada.imagen} alt="Imagen Entrada" />
      <p>{entrada.contenido}</p>
    </main>
  );
};

export default Entrada;
