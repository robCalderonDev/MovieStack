import { useEffect, useReducer, useState } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';
import { types } from '../types/types';

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user: user,
    };
};

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init);
    const [user, setUser] = useState(null);

    // const login = (name = '') => {
    //     const user = { id: 'ABC', name };
    //     const action = { type: types.login, payload: user };
    //     localStorage.setItem('user', JSON.stringify(user)); // Guardar en localStorage
    //     dispatch(action); // Actualizar el estado global
    //     setUser(user); // Sincronizar con el estado local
    //     console.log('SE LLAMO login');
    // };

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
            setUser, // Pasamos setUser para actualizarlo
           
        }}>
            {children}
        </AuthContext.Provider>
    );
};
