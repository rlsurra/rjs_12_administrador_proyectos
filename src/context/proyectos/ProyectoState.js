import React, {useReducer} from 'react';
import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';

const ProyectoState = props => {

    const initialState = {
        nuevoProyecto : false
    }

    const [state, dispatch] = useReducer(ProyectoReducer, initialState);

    return (
        <ProyectoContext.Provider
            value={{
                nuevo: state.nuevoProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )

}

export default ProyectoState;
