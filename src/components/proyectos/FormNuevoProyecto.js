import React, { Fragment, useState } from 'react';

const FormNuevoProyecto = () => {

    const [proyecto, setProyecto] = useState({
        nombre: ''
    }); //es un objeto porque le ponemos un ID

    //Lee el contenido del input nombre del proyecto
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //Creacion de un proyecto al dar un submit
    const onSubmitProyecto = e => {
        e.preventDefault();
        //Validar el proyecto

        //Agregar al state

        //Reiniciar el form
    }

    return (
        <Fragment>

        <button
            type="button"
            className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

        <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
        >
            <input
                type="text"
                className="input-text"
                placeholder="Nombre del proyecto"
                name="nombre"
                value={proyecto.nombre}
                onChange={onChangeProyecto}
            />

            <input
                type="submit"
                className="btn btn-block btn-primario"
                value="Agregar Proyecto"
            />

        </form>
            </Fragment>
     );
}
 
export default FormNuevoProyecto;