import React, { useContext } from 'react';
import TareaContext from '../../context/tareas/TareaContext';
import proyectoContext from '../../context/proyectos/ProyectoContext';
    

const Tarea = ({tarea}) => {

    //Obtengo el proyecto actual
    const proyectosContext = useContext(proyectoContext);
    const { proyectoSeleccionado } = proyectosContext;
    
    //Obtener la funcion de eliminar del context de tarea
    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas } = tareasContext;

    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                ?
                (<button type="button" className="completo">Completo</button>)
                :
                (<button type="button" className="incompleto">Incompleto</button>)
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick = {() => {
                        eliminarTarea(tarea.id);
                        obtenerTareas(proyectoSeleccionado.id);
                    }}
                >
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default Tarea;