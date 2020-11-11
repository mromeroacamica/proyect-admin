import React, { Fragment } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Elegir plataforma", estado: false },
    { nombre: "Elegir colores", estado: true },
    { nombre: "Elegir hosting", estado: false },
    { nombre: "Elegir hola", estado: true },
  ];
  return (
    <Fragment>
      <h2>Proyecto:Tienda virutal</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
