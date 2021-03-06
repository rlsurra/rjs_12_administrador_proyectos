import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORM_NUEVO_PROYECTO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
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
        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyectoSeleccionado: state.proyectos.filter(proyecto => proyecto._id === action.payload)[0]
            }
        case ELIMINAR_PROYECTO:
            return {
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload._id),
                proyectoSeleccionado: null
            }
        default:
            return state
    }
}