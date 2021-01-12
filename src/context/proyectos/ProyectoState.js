import React, {useReducer} from 'react';
import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';
import clienteAxios from '../../config/axios';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORM_NUEVO_PROYECTO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types'; //no se pone el nombre del archivo porque es index.js


const ProyectoState = props => {
    
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
    const obtenerProyectos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/proyectos');
            //console.log(resultado);
            dispatch({
            type: OBTENER_PROYECTOS,
            payload: resultado.data.proyectos
        })
        } catch (error) {
            console.log(error);
        }
        
    }

    //Agregar nuevo proyecto
    const agregarProyecto = async proyecto => {
        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            //console.log(resultado);
            //Insertar el proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Mostrar error por validacion de formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORM_NUEVO_PROYECTO
        })
    }

    //Seleccionar el proyecto
    const seleccionarProyecto = id => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: id
        })
    }

    const eliminarProyecto = async proyecto => {
        try {
            const resultado = await clienteAxios.delete(`/api/proyectos/${proyecto._id}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyecto
            })
            
        } catch (error) {
            console.log(error);
        }
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
                mostrarError,
                eliminarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )

}

export default ProyectoState;
