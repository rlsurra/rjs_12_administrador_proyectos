import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/ProyectoContext';

const FormNuevoProyecto = () => {

    const proyectosContext = useContext(proyectoContext);
    const {nuevoProyecto, mostrarFormulario, agregarProyecto, mostrarError, errorFormulario} = proyectosContext;

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
        if(proyecto.nombre === '') {
            mostrarError();
            return;
        }
        //Agregar al state
        agregarProyecto(proyecto);
        //Reiniciar el form
        setProyecto({
            nombre: ''
        })
    }



    return (
        <Fragment>

        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={() => mostrarFormulario()}
            >Nuevo Proyecto</button>
        {
            nuevoProyecto
            ?
            (
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
            )
            : null
        }

        {errorFormulario ? (<p className="mensaje error">El nombre es obligatorio</p> ) :null }

            </Fragment>
     );
}
 
export default FormNuevoProyecto;