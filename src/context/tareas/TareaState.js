import React, {useReducer} from 'react';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import {TAREAS_PROYECTO} from '../../types';

const TareaState = props => {

    const initialState = {
        tareas: [
            {nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {nombre: 'Elegir Plataforma', estado: true, proyectoId: 2},
            {nombre: 'Elegir Colores', estado: false, proyectoId: 3},
            {nombre: 'Elegir Plataforma', estado: true, proyectoId: 3},
            {nombre: 'Elegir Colores', estado: false, proyectoId: 1},
        ],
        tareasProyecto: null

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

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                obtenerTareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;