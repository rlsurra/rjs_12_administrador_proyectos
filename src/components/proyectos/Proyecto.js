import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const Proyecto = ({proyecto}) => {

    //Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { seleccionarProyecto } = proyectosContext;

    //Obtener la funcion del context de tarea
    const tareasContext = useContext(TareaContext);
    const { obtenerTareas } = tareasContext;

    //Funcion para agregar el proyecto actual
    const fijarProyecto = id => {
        seleccionarProyecto(id); //Fija el proyecto actual
        obtenerTareas(id); //Filtra las tareas del proyecto
    }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => fijarProyecto(proyecto._id)}
            >
                {proyecto.nombre}
            </button>
        </li>
     );
}
 
export default Proyecto;