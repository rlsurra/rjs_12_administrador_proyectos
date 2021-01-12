import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const FormTarea = () => {
    
    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyectoSeleccionado } = proyectosContext;

    //Obtener la funcion de agregar del context de tarea
    const tareasContext = useContext(TareaContext);
    const { tareaSeleccionada, errorTarea, obtenerTareas, agregarTarea, validarTarea, actualizarTarea } = tareasContext;

    //Defino un state inicial
    const [tarea, setTarea] = useState ({
        nombre: ''
    });

    const {nombre} = tarea;

    //Effect que detecta si hay una tarea seleccioanda
    useEffect(() => {
        if(tareaSeleccionada !== null){
            setTarea(tareaSeleccionada)
        } else {
            setTarea({
                nombre: ''
            })
        }
    }, [tareaSeleccionada])

    //Leer valores del formulario
    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        //Vemos si es edición o una nueva tarea

        if(tareaSeleccionada === null) { //Tarea nueva

            //pasar la validacion -> lo hacemos en AGREGAR_TAREA
    
            //agregar la tarea
            tarea.proyecto = proyectoSeleccionado._id;
            agregarTarea(tarea);
        } else { //Tarea existente
            actualizarTarea(tarea)
        }

        
        //Vuelvo a cargar las tareas
        obtenerTareas(proyectoSeleccionado.id);

        //reiniciar el form
        setTarea({
            nombre: ''
        })

    }

    if(!proyectoSeleccionado) return null;

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>

            { errorTarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}

        </div>
     );
}
 
export default FormTarea;