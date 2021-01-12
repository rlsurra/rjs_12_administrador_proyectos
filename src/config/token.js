import clienteAxios from './axios';

const tokenAuth = token => {
    if(token){ //Si le estamos pasando u ntoken
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    } else { //Probable cierre de sesión
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;