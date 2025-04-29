import { useEffect, useReducer, useState } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';
import { types } from '../types/types';
import api from '../api/axios';
import { toast, ToastContainer } from 'react-toastify';
const init = () => {
    if (localStorage.getItem('user')) {
        return {
            logged: true,
            user: JSON.parse(localStorage.getItem('user')),
        };
    }

    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user: user,
    };
};

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init);
    const [user, setUser] = useState(null);

    const login = (email, password) => {
      api.post('/user/login', { email, password })
          .then((response) => {
              const user = response.data.publicUser;
              const action = { type: types.login, payload: user };
              localStorage.setItem('user', JSON.stringify(user));
              dispatch(action);
              setUser(user);
              console.log(response, 'Usuario logueado');
              toast.success('¡Login exitoso!');
              return; // Evitar ejecución extra
          })
          .catch((error) => {
              if (error.response && error.response.status === 401) {
                  toast.error('Email o contraseña incorrectos.');
              } else {
                  toast.error('Error en el login. Verifica tus datos.');
              }
             
          });
        }
      
    
    
    

    // const logout = () => {
    //     localStorage.removeItem('user'); // Eliminar del localStorage
    //     const action = { type: types.logout }; // Acción de logout
    //     dispatch(action); // Limpiar el estado global
    //     setUser(null); // Limpiar el estado local
    //     console.log('SE LLAMO logout');
    // };

    useEffect(() => {
        // Recuperar los datos del usuario desde localStorage si están guardados
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            dispatch({ type: types.login, payload: JSON.parse(savedUser) });
            setUser(JSON.parse(savedUser)); // Sincronizar con el estado local
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            ...authState,
            user, // El usuario del estado local
            setUser, // Pasamos setUser para actualizarlo,
            login, // Función de login
           
        }}>
            {children}
            <ToastContainer/> 
        </AuthContext.Provider>
    );
};
