import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORM_NUEVO_PROYECTO,
    PROYECTO_ACTUAL
} from '../../types'; //no se pone el nombre del archivo porque es index.js


const ProyectoState = props => {
    
    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Intranet'},
        {id: 3, nombre: 'Diseño web'}
    ]

    const initialState = {
        nuevoProyecto : false, //para que se muestre o no el form de nuevo proyecto
        proyectos : [], //almacena todos los proyectos
        errorFormulario: false, //si no completo el nombre u otro error para que se vea el mensaje de error
        proyectoSeleccionado: null
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

    //Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid();
        //Insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    //Mostrar error por validacion de formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORM_NUEVO_PROYECTO
        })
    }

    //Seleccionar el proyecto
    const seleccionarProyecto = proyecto => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyecto
        })
    }

    return (
        <ProyectoContext.Provider
            value={{
                errorFormulario: state.errorFormulario,
                nuevoProyecto: state.nuevoProyecto,
                proyectos: state.proyectos,
                proyectoSeleccionado: state.proyectoSeleccionado,
                seleccionarProyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )

}

export default ProyectoState;
