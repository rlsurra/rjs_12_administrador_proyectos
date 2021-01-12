import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyectoSeleccionado, eliminarProyecto } = proyectosContext;

    //Obtener las tareas del context de tarea
    const tareasContext = useContext(TareaContext);
    const { tareasProyecto } = tareasContext;

    if(!proyectoSeleccionado) return <h2>Por favor, seleccione un proyecto</h2>;

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoSeleccionado.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                ?
                (<li className="tarea">No hay tareas</li>)
                :
                <TransitionGroup>
                    {tareasProyecto.map(tarea => (
                        <CSSTransition
                            key={tarea._id}
                            timeout={200}
                            classNames="tarea"
                        >
                            <Tarea tarea={tarea}/>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => eliminarProyecto(proyectoSeleccionado)}
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
     );
}
 
export default ListadoTareas;