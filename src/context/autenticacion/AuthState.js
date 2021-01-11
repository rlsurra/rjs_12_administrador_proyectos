import React, {useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
 } from '../../types';

 const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null //relacionado con las alertas
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    //Función de registro de un usuario
    const registrarUsuario = async datosUser => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datosUser);
            console.log(respuesta.data);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })
            usuarioAutenticado();
        } catch (error) {
            //console.log(error.response);
            const alerta ={
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    //Obtenemos el usuario para guardarlo
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        tokenAuth(token);
        try {
            const respuesta = await clienteAxios.get('/api/auth');
            //console.log(respuesta.data);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    //Cuando el usuario inicia sesion
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data //token
            });
            usuarioAutenticado();
        } catch (error) {
            console.log(error.response);
            const alerta ={
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                iniciarSesion
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )

 }

 export default AuthState;


