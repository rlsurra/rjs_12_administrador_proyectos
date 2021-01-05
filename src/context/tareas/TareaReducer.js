import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_FORM_NUEVA_TAREA,
    ELIMINAR_TAREA
 } from '../../types'; 

export default (state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: [...state.tareas, action.payload], //Se hace en el tareas general, no en el del proyecto, dsp se filtra
                errorTarea: false
            }
        case VALIDAR_FORM_NUEVA_TAREA:
            return {
                ...state,
                errorTarea: true
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        default:
            return state
    }
}