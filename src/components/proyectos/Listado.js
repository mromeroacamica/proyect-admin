import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";

import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;
  useEffect(() => {
    obtenerProyectos();
  }, []);

  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => {
        return <Proyecto key={proyecto.id} proyecto={proyecto} />;
      })}
    </ul>
  );
};

export default ListadoProyectos;
