import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORM_NUEVO_PROYECTO
 } from '../../types'; 

export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                nuevoProyecto: true
            }
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload],
                nuevoProyecto: false,
                errorFormulario: false
            }
        case VALIDAR_FORM_NUEVO_PROYECTO:
            return {
                ...state,
                errorFormulario: true
            }
        default:
            return state
    }
}