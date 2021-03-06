import React, { useContext } from "react";

import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {
  //vamos a obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;
  if (!proyecto) return null;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre tarea..."
            name="nombre"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
