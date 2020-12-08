import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [ credencial, setCredencial] = useState({
        email: '',
        password: ''
    });

    const { email, password } = credencial;

    const onChange = e => {
        setCredencial({
            ...credencial,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        //Validar campos vacios

        //Pasarlo al action (funcion del reducer)
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Tu email"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>

                <Link to={'/registro'} className="enlace-cuenta">
                    Obtener cuenta
                </Link>

            </div>
        </div>
     );
}
 
export default Login;