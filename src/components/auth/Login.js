import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/AlertaContext';
import AuthContext from '../../context/autenticacion/AuthContext';

const Login = props => {

    
    const [ credencial, setCredencial] = useState({
        email: '',
        password: ''
    });
    
    const { email, password } = credencial;

    //Extraemos valores del contexto
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //Extraigo valores del contexto
    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

    const onChange = e => {
        setCredencial({
            ...credencial,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        //Validar campos vacios
        if( email.trim() === '' ||
        password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return;
        }
        //Pasarlo al action (funcion del reducer)
        iniciarSesion({email, password});
    }
    
    //En caso el usuario se haya registrado, autenticado o sea registro duplicado
    useEffect(() => {
        if(autenticado) props.history.push('/proyectos');
        if(mensaje) mostrarAlerta(mensaje.msg, mensaje.categoria);
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history])
    
    return ( 
        <div className="form-usuario">
            { 
            alerta
            ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>)
            : null
            }
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