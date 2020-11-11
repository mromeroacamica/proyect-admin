import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //obtener state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario } = proyectosContext;
  //State para Proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });
  const { nombre } = proyecto;
  const onChangeProyeto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitProyecto = (e) => {
    e.preventDefault();
    //validar el proyecto
    //agregar al state
    //reiniciar el form
  };
  //mostar formulario
  const onClickFormularioNuevo = () => {
    mostrarFormulario();
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormularioNuevo}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyeto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
            onSubmit={onSubmitProyecto}
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
