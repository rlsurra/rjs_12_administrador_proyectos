import React, {useReducer} from 'react';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import {v4 as uuid} from 'uuid';
import {
    AGREGAR_TAREA, 
    TAREAS_PROYECTO, 
    VALIDAR_FORM_NUEVA_TAREA, 
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types';

const TareaState = props => {

    const initialState = {
        tareas: [
            {id: 1, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 2, nombre: 'Elegir Plataforma', estado: true, proyectoId: 2},
            {id: 3, nombre: 'Elegir CRM', estado: true, proyectoId: 1},
            {id: 4, nombre: 'Elegir ORM', estado: false, proyectoId: 3},
            {id: 5, nombre: 'Elegir Database', estado: true, proyectoId: 3},
            {id: 6, nombre: 'Elegir Frame', estado: false, proyectoId: 1},
        ],
        tareasProyecto: null,
        tareaSeleccionada: null,
        errorTarea: false

    }

    //Dispatch + state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //Funciones

    //Obtener tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //Agregar una tarea a un proyecto
    const agregarTarea = tarea => {
        tarea.id = uuid();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //Valida y muestra un error en caso sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_FORM_NUEVA_TAREA
        })
    }

    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    const setEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //Extraigo una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //Edicion del nombre de una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                setEstadoTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;