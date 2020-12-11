import React from 'react';
import FormNuevoProyecto from '../proyectos/FormNuevoProyecto';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN<span>Tasks</span></h1>

            <FormNuevoProyecto/>

            <div className="proyectos">
                <h2>Tus Proyectos</h2>
            </div>

        </aside>
     );
}
 
export default Sidebar;