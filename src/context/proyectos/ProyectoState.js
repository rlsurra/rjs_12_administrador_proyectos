import React, {useReducer} from 'react';
import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS 
} from '../../types'; //no se pone el nombre del archivo porque es index.js


const ProyectoState = props => {
    
    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Intranet'},
        {id: 3, nombre: 'Diseño web'}
    ]

    const initialState = {
        nuevoProyecto : false,
        proyectos : []
    }

    const [state, dispatch] = useReducer(ProyectoReducer, initialState);

    //Funciones CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtenemos los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    return (
        <ProyectoContext.Provider
            value={{
                nuevoProyecto: state.nuevoProyecto,
                proyectos: state.proyectos,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )

}

export default ProyectoState;
