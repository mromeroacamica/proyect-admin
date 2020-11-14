import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";

import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  //vamos a obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //si no hay proyectos seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  const tareasProyecto = [
    { nombre: "Elegir plataforma", estado: false },
    { nombre: "Elegir colores", estado: true },
    { nombre: "Elegir hosting", estado: false },
    { nombre: "Elegir hola", estado: true },
  ];

  //Array destructurion para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //funcion eliminar on click
  const onClickEliminarProyecto = () => {
    eliminarProyecto(proyectoActual.id);
  };

  return (
    <Fragment>
      <h2>Proyecto:{proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminarProyecto}
      >
        Eliminar Proyecto
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
