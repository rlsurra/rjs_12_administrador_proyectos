import React, {useReducer} from 'react';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import {
    AGREGAR_TAREA, 
    TAREAS_PROYECTO, 
    VALIDAR_FORM_NUEVA_TAREA, 
    ELIMINAR_TAREA
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

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;