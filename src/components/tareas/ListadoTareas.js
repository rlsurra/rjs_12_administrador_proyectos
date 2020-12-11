import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareas = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
    ]

    return ( 
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className="listado-tareas">
                {tareas.length === 0
                ?
                (<li className="tarea">No hay tareas</li>)
                :
                tareas.map(tarea => (
                    <Tarea
                        tarea={tarea}
                    />
                ))
                }
            </ul>
        </Fragment>
     );
}
 
export default ListadoTareas;