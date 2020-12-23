import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/ProyectoContext';

const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyectoSeleccionado } = proyectosContext;

    const tareas = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
    ]

    if(!proyectoSeleccionado) return null;

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoSeleccionado.nombre}</h2>
            <ul className="listado-tareas">
                {tareas.length === 0
                ?
                (<li className="tarea">No hay tareas</li>)
                :
                tareas.map(tarea => (
                    <Tarea
                        tarea={tarea}
                    />
                ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
     );
}
 
export default ListadoTareas;