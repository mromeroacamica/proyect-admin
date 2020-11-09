import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
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
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
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
    </Fragment>
  );
};

export default NuevoProyecto;
