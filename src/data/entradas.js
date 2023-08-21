export const obtenerEntradas = async () => {
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  const resultado = await respuesta.json();
  return resultado;
};

export const obtenerEntrada = async (id) => {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const resultado = await respuesta.json();
  return resultado;
};

export const obtenerCursos = async () => {
  const respuesta = await fetch(import.meta.env.VITE_API_URL_CURSOS);
  const resultado = await respuesta.json();
  return resultado;
};

export const obtenerProximosCursos = async () => {
  const respuesta = await fetch(import.meta.env.VITE_API_URL_PROXIMOSCURSOS);
  const resultado = await respuesta.json();
  return resultado;
};
