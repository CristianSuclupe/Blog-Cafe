import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Index from "../pages/Index";
import Nosotros from "../pages/Nosotros";
import Cursos from "../pages/Cursos";
import Contacto from "../pages/Contacto";
import { HOME, NOSOTROS, CONTACTO, CURSOS } from "./routes";

const router = createBrowserRouter([
  {
    path: HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: NOSOTROS,
        element: <Nosotros />,
      },
      {
        path: CURSOS,
        element: <Cursos />,
      },
      {
        path: CONTACTO,
        element: <Contacto />,
      },
    ],
  },
]);

export default router;
