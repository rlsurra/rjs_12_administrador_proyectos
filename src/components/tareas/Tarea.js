import React, { useContext } from 'react';
import TareaContext from '../../context/tareas/TareaContext';
import proyectoContext from '../../context/proyectos/ProyectoContext';
    

const Tarea = ({tarea}) => {

    //Obtengo el proyecto actual
    const proyectosContext = useContext(proyectoContext);
    const { proyectoSeleccionado } = proyectosContext;
    
    //Obtener la funcion de eliminar del context de tarea
    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas, guardarTareaActual, actualizarTarea } = tareasContext;

    const modificarEstadoTarea = tarea => {
        console.log(tarea);
        if(tarea.estado){
            tarea.estado = false;
        } else {
            tarea.estado = true
        }
        actualizarTarea(tarea);
    }

     return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                ?
                (<button type="button" className="completo" onClick={() => modificarEstadoTarea(tarea)}>Completo</button>)
                :
                (<button type="button" className="incompleto" onClick={() => modificarEstadoTarea(tarea)}>Incompleto</button>)
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => guardarTareaActual(tarea)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick = {() => {
                        eliminarTarea(tarea._id);
                        obtenerTareas(proyectoSeleccionado._id);
                    }}
                >
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default Tarea;