import React, { useReducer } from "react";

import { v4 } from "uuid";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTO,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda virtual" },
    { id: 2, nombre: "Tienda online" },
    { id: 3, nombre: "Tienda fisica" },
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
  };
  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);
  //serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTO,
      payload: proyectos,
    });
  };
  //Agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = v4();
    //Insertar el proyecto al state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };
  // Validar formulario por errores
  const mostrarErrores = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  //selecciona el proyecto que el usuario le hizo click
  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };
  const eliminarProyecto = (proyectoId) => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        obtenerProyectos,
        mostrarFormulario,
        agregarProyecto,
        mostrarErrores,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};
export default ProyectoState;
