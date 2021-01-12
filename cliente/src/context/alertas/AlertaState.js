import React, {useReducer} from 'react';
import AlertaContext from './AlertaContext';
import AlertaReducer from './AlertaReducer';
import { 
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../../types';

const AlertaState = props => {

    const initialState = {
        alerta: null
    }

    const [ state, dispatch ] = useReducer(AlertaReducer, initialState);

    //Funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });

        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 4000); //Tras 4 segundos, sacar la alerta
    }

    return(
        <AlertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </AlertaContext.Provider>
    )
}

export default AlertaState;