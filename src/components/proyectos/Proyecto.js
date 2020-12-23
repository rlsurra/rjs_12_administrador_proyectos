import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/ProyectoContext';

const Proyecto = ({proyecto}) => {

    const proyectosContext = useContext(proyectoContext);
    const { seleccionarProyecto } = proyectosContext;

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(proyecto)}
            >
                {proyecto.nombre}
            </button>
        </li>
     );
}
 
export default Proyecto;