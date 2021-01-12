import React, {useReducer} from 'react';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import {
    AGREGAR_TAREA, 
    TAREAS_PROYECTO, 
    VALIDAR_FORM_NUEVA_TAREA, 
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types';
import clienteAxios from '../../config/axios';

const TareaState = props => {

    const initialState = {
        tareasProyecto: [],
        tareaSeleccionada: null,
        errorTarea: false

    }

    //Dispatch + state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //Funciones

    //Obtener tareas de un proyecto
    const obtenerTareas = async proyectoId => {
        try {
            const resultado = await clienteAxios.get('/api/tareas', { params: {proyecto: proyectoId}});
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })   
        } catch (error) {
            console.log(error);
        }
    }

    //Agregar una tarea a un proyecto
    const agregarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Valida y muestra un error en caso sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_FORM_NUEVA_TAREA
        })
    }

    const eliminarTarea = async id => {
        try {
            const resultado = await clienteAxios.delete(`/api/tareas/${id}`);
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Extraigo una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //Edicion del nombre de una tarea
    const actualizarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
            console.log(resultado);
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TareaContext.Provider
            value={{
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;