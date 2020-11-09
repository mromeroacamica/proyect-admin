import React from "react";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  const proyectos = [
    { nombre: "Tienda virtual" },
    { nombre: "Tienda online" },
    { nombre: "Tienda fisica" },
  ];
  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => {
        return <Proyecto proyecto={proyecto} />;
      })}
    </ul>
  );
};

export default ListadoProyectos;
