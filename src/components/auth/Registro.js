import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/AlertaContext';
import AuthContext from '../../context/autenticacion/AuthContext';

const Registro = (props) => {

    //Extraemos valores del contexto
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //Extraigo valores del contexto
    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    //En caso el usuario se haya registrado, autenticado o sea registro duplicado
    useEffect(() => {
        if(autenticado) props.history.push('/proyectos');
        if(mensaje) mostrarAlerta(mensaje.msg, mensaje.categoria);
    }, [mensaje, autenticado, props.history])

    const [ credencial, setCredencial] = useState({
        nombre: '',
        email: '',
        password: '',
        password2: ''
    });

    const { nombre, email, password, password2 } = credencial;

    const onChange = e => {
        setCredencial({
            ...credencial,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        //Validar campos vacios
        if( nombre.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            password2.trim() === '' ){
                mostrarAlerta('Todos los campos son obligatorios','alerta-error');
                return;
        }
        //Validar longitud minima del password (6 caracteres)
        if(password.length < 6){
            mostrarAlerta('El password debe ser de al menos 6 caracteres','alerta-error');
            return;
        } 
        //Validar igualdad de ambos passwords
        if(password !== password2){
            mostrarAlerta('Los passwords no coinciden','alerta-error');
            return;
        } 
        //Pasarlo al action (funcion del reducer)
        registrarUsuario({
            nombre,
            email,
            password
        })
    }

    return ( 
        <div className="form-usuario">
            { 
            alerta
            ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>)
            : null
            }
            <div className="contenedor-form sombra-dark">
                <h1>Registrar cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            placeholder="Tu nombre"
                            onChange={onChange}
                        />
                    </div>

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
                        <label htmlFor="password">Confirmar password</label>
                        <input
                            type="password"
                            id="password2"
                            name="password2"
                            value={password2}
                            placeholder="Tu password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>

            </div>
        </div>
     );
}
 
export default Registro;